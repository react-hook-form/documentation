import * as React from "react"
import CodeArea from "../CodeArea"
import SideMenu from "../SideMenu"
import Footer from "../Footer"
import fieldArray from "../codeExamples/fieldArray"
import unregisterControlledComponent from "../codeExamples/unregisterControlledComponent"
import conditionalComponent from "../codeExamples/conditionalComponent"
import connectForm from "../codeExamples/connectForm"
import formContextPerformance from "../codeExamples/formContextPerformance"
import StarRepo from "../StarRepo"
import { useStateMachine } from "little-state-machine"
import advancedEn from "../../data/V6/en/advanced"
import controlledMixedUncontrolled from "../codeExamples/controlledMixedUncontrolled"
import TabGroup from "../TabGroup"
import unregisterWrapControlledComponent from "../codeExamples/unregisterWrapControlledComponent"
import controlledMixedUncontrolledInput from "../codeExamples/controlledMixedUncontrolledInput"
import useFieldArray from "../codeExamples/useFieldArray"
import typographyStyles from "../../styles/typography.module.css"
import containerStyles from "../../styles/container.module.css"
import virtualizedList from "../codeExamples/virtualizedList"
import virtualizedListFieldArray from "../codeExamples/virtualizedListFieldArray"

const { useRef } = React
const enLinks = [
  advancedEn.accessibility,
  advancedEn.wizard,
  advancedEn.smartForm,
  advancedEn.fieldArrays,
  advancedEn.errorMessage,
  advancedEn.connectForm,
  advancedEn.formContext,
  advancedEn.conditionalControlledComponent,
  advancedEn.controlledMixedWithUnControlled,
  advancedEn.customHookwithResolver,
  advancedEn.workingWithVirtualizedList,
  advancedEn.testingForm,
  advancedEn.strictlyTyped,
  advancedEn.extendController,
  advancedEn.transformAndParse,
]

interface Props {
  defaultLang: string
  advanced: any
}

function Advanced({ defaultLang, advanced }: Props) {
  const pageContentRef = useRef({
    AccessibilityA11y: null,
    WizardFormFunnel: null,
    SmartFormComponent: null,
    FieldArrays: null,
    ConnectForm: null,
    FormProviderPerformance: null,
    ErrorMessages: null,
    ConditionalControlledComponent: null,
    ControlledmixedwithUncontrolledComponents: null,
    CustomHookwithResolver: null,
    Workingwithvirtualizedlists: null,
    TestingForm: null,
    StrictlyTyped: null,
    ExtendController: null,
    TransformandParse: null,
  })

  const {
    state: { language },
  } = useStateMachine()
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }

  const links = [
    advanced.accessibility,
    advanced.wizard,
    advanced.smartForm,
    advanced.fieldArrays,
    advanced.errorMessage,
    advanced.connectForm,
    advanced.formContext,
    advanced.conditionalControlledComponent,
    advanced.controlledMixedWithUnControlled,
    advanced.customHookwithResolver,
    advanced.workingWithVirtualizedList,
    advanced.testingForm,
    advanced.strictlyTyped,
    advanced.extendController,
    advanced.transformAndParse,
  ]

  const goToSection = (name) => {
    const url = window.location.href
    const hashIndex = url.indexOf("#")
    const filterName = name.replace(/[^\w\s]| /g, "")

    if (hashIndex < 0) {
      history.pushState({}, null, `${url}#${filterName}`)
    } else {
      history.pushState({}, null, `${url.substr(0, hashIndex)}#${filterName}`)
    }

    if (pageContentRef.current[filterName]) {
      pageContentRef.current[filterName].scrollIntoView({ behavior: "smooth" })
    }
  }

  React.useEffect(() => {
    if (location.hash)
      setTimeout(() => goToSection(location.hash.substr(1)), 10)
  }, [])

  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        {advanced.header.title}
      </h1>
      <p className={typographyStyles.subHeading}>
        {advanced.header.description}
      </p>

      <div className={containerStyles.wrapper}>
        <SideMenu
          enLinks={enLinks}
          isStatic
          links={links}
          goToSection={goToSection}
          currentLanguage={currentLanguage}
        />

        <main>
          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (pageContentRef.current.AccessibilityA11y = ref)}
            id="AccessibilityA11y"
          >
            {advanced.accessibility.title}
          </h2>

          {advanced.accessibility.description}

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (pageContentRef.current.WizardFormFunnel = ref)}
            id="WizardFormFunnel"
          >
            {advanced.wizard.title}
          </h2>

          <p>
            In this video tutorial, I have demonstrated the core concept of how
            to build multiple steps funnel with React Hook Form.
          </p>

          <iframe
            width="100%"
            height="528"
            title="react hook form persist multiple steps forms (Form Wizard) - video tutorial"
            src="https://www.youtube.com/embed/CeAkxVwsyMU"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          {advanced.wizard.description}

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (pageContentRef.current.SmartFormComponent = ref)}
            id="SmartFormComponent"
          >
            {advanced.smartForm.title}
          </h2>

          {advanced.smartForm.description}

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (pageContentRef.current.FieldArrays = ref)}
            id="FieldArrays"
          >
            {advanced.fieldArrays.title}
          </h2>

          {advanced.fieldArrays.description}

          <TabGroup buttonLabels={["Custom hook", "register"]}>
            <CodeArea
              rawData={useFieldArray}
              url="https://codesandbox.io/s/react-hook-form-usefieldarray-vy8fv"
            />
            <CodeArea
              rawData={fieldArray}
              url="https://codesandbox.io/s/6j1760jkjk"
            />
          </TabGroup>

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (pageContentRef.current.ErrorMessages = ref)}
            id="ErrorMessages"
          >
            {advanced.errorMessage.title}
          </h2>

          {advanced.errorMessage.description}

          <ul>
            <li>
              <h4>Register</h4>
              <p>
                {advanced.errorMessage.register}
                <br />
                <br />
                <code>{`<input
  name="test"
  ref={register({ maxLength: { value: 2, message: "error message" } })}
/>
`}</code>
              </p>
            </li>
            <li>
              <h4>Optional Chaining</h4>
              {advanced.errorMessage.optionalChaining}
              <p />
            </li>
            <li>
              <h4>
                Lodash <code>get</code>
              </h4>
              {advanced.errorMessage.get}
              <p />
            </li>
          </ul>

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (pageContentRef.current.ConnectForm = ref)}
            id="ConnectForm"
          >
            {advanced.connectForm.title}
          </h2>

          {advanced.connectForm.description}

          <CodeArea rawData={connectForm} />

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) =>
              (pageContentRef.current.FormProviderPerformance = ref)
            }
            id="FormProviderPerformance"
          >
            {advanced.formContext.title}
          </h2>

          {advanced.formContext.description}

          <CodeArea
            url="https://codesandbox.io/s/provider-perf-25m85"
            rawData={formContextPerformance}
          />

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) =>
              (pageContentRef.current.ConditionalControlledComponent = ref)
            }
            id="ConditionalControlledComponent"
          >
            {advanced.conditionalControlledComponent.title}
          </h2>

          {advanced.conditionalControlledComponent.description}

          <TabGroup buttonLabels={["Normal", "Controller", "Custom Register"]}>
            <CodeArea
              rawData={conditionalComponent}
              url="https://codesandbox.io/s/react-hook-form-conditional-inputs-c7n0r"
            />
            <CodeArea rawData={unregisterWrapControlledComponent} />
            <CodeArea
              rawData={unregisterControlledComponent}
              url="https://codesandbox.io/s/react-hook-fom-unregister-controlled-component-hu990"
            />
          </TabGroup>

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) =>
              (pageContentRef.current.ControlledmixedwithUncontrolledComponents = ref)
            }
            id="ControlledmixedwithUncontrolledComponents"
          >
            {advanced.controlledMixedWithUnControlled.title}
          </h2>

          {advanced.controlledMixedWithUnControlled.description}

          <TabGroup buttonLabels={["Controller", "Custom Register"]}>
            <CodeArea rawData={controlledMixedUncontrolledInput} />
            <CodeArea
              rawData={controlledMixedUncontrolled}
              url="https://codesandbox.io/s/react-hook-form-controlled-mixed-with-uncontrolled-8vh3c"
            />
          </TabGroup>

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (pageContentRef.current.CustomHookwithResolver = ref)}
            id="CustomHookwithResolver"
          >
            {advanced.customHookwithResolver.title}
          </h2>

          {advanced.customHookwithResolver.description}

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) =>
              (pageContentRef.current.Workingwithvirtualizedlists = ref)
            }
            id="Workingwithvirtualizedlists"
          >
            {advanced.workingWithVirtualizedList.title}
          </h2>

          {advanced.workingWithVirtualizedList.description}

          <TabGroup buttonLabels={["Form", "Field Array"]}>
            <CodeArea
              rawData={virtualizedList}
              url="https://codesandbox.io/s/react-hook-form-with-react-window-b4j8n"
            />
            <CodeArea
              rawData={virtualizedListFieldArray}
              url="https://codesandbox.io/s/react-hook-form-usefieldarray-virtual-inputs-1r8ip"
            />
          </TabGroup>

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (pageContentRef.current.TestingForm = ref)}
            id="TestingForm"
          >
            {advanced.testingForm.title}
          </h2>

          {advanced.testingForm.description}

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (pageContentRef.current.StrictlyTyped = ref)}
            id="StrictlyTyped"
          >
            {advanced.strictlyTyped.title}
          </h2>

          {advanced.strictlyTyped.description}

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (pageContentRef.current.ExtendController = ref)}
            id="ExtendController"
          >
            {advanced.extendController.title}
          </h2>

          <iframe
            title="A video detailing how the Controller component works"
            width="100%"
            height="528"
            src="https://www.youtube.com/embed/Vkiyg_KfNK4"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          {advanced.extendController.description}

          <CodeArea
            tsRawData={`
const PowerController = (props: Props) => {
  const { formState } = useFormContext(); // we are reading formState from context or you can pass down props too
  const isDirty = !!formState.dirtyFields[props.name];
  const isTouched = !!formState.touched[props.name];
  
  return (
    <Controller
      control={props.control}
      name={props.name}
      defaultValue={props.defaultValue}
      render={(innerProps) => {
        return props.render({
          ...innerProps,
          isDirty, // new isDirty prop
          isTouched,  // new isTouched prop
          warning: props.warn(innerProps.value) // include warning message user 
        });
      }}
    />
  );
};
`}
            tsUrl="https://codesandbox.io/s/extend-controller-zuuol"
          />

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (pageContentRef.current.TransformandParse = ref)}
            id="Transform"
          >
            {advanced.transformAndParse.title}
          </h2>

          {advanced.transformAndParse.description}

          <CodeArea
            tsRawData={`
const ControllerPlus = ({
  control,
  transform,
  name,
  defaultValue
}) => (
  <Controller
    defaultValue={defaultValue}
    control={control}
    name={name}
    render={(props) => (
      <input
        onChange={(e) => props.onChange(transform.output(e))}
        value={transform.input(props.value)}
      />
    )}
  />
);

// usage below:
<ControllerPlus<string, number>
  transform={{
    input: (value) =>
      isNaN(value) || value === 0 ? "" : value.toString(),
    output: (e) => {
      const output = parseInt(e.target.value, 10);
      return isNaN(output) ? 0 : output;
    }
  }}
  control={control}
  name="number"
  defaultValue=""
/>
`}
            tsUrl="https://codesandbox.io/s/ecstatic-waterfall-yfsqe"
          />

          <StarRepo currentLanguage={currentLanguage} />

          <Footer currentLanguage={currentLanguage} />
        </main>
      </div>
    </div>
  )
}

export default Advanced
