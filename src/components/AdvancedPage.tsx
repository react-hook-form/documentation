import * as React from "react"
import CodeArea from "./CodeArea"
import SideMenu from "./SideMenu"
import Footer from "./Footer"
import connectForm from "./codeExamples/connectForm"
import formContextPerformance from "./codeExamples/formContextPerformance"
import StarRepo from "./StarRepo"
import { useStateMachine } from "little-state-machine"
import advancedEn from "../data/en/advanced"
import controlledMixedUncontrolled from "./codeExamples/controlledMixedUncontrolled"
import TabGroup from "./TabGroup"
import controlledMixedUncontrolledInput from "./codeExamples/controlledMixedUncontrolledInput"
import * as typographyStyles from "../styles/typography.module.css"
import * as containerStyles from "../styles/container.module.css"
import virtualizedList from "./codeExamples/virtualizedList"
import virtualizedListFieldArray from "./codeExamples/virtualizedListFieldArray"

const { useRef } = React
const enLinks = [
  advancedEn.accessibility,
  advancedEn.wizard,
  advancedEn.smartForm,
  advancedEn.errorMessage,
  advancedEn.connectForm,
  advancedEn.formContext,
  advancedEn.controlledMixedWithUnControlled,
  advancedEn.customHookwithResolver,
  advancedEn.workingWithVirtualizedList,
  advancedEn.testingForm,
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
    ConnectForm: null,
    FormProviderPerformance: null,
    ErrorMessages: null,
    ControlledmixedwithUncontrolledComponents: null,
    CustomHookwithResolver: null,
    Workingwithvirtualizedlists: null,
    TestingForm: null,
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
    advanced.errorMessage,
    advanced.connectForm,
    advanced.formContext,
    advanced.controlledMixedWithUnControlled,
    advanced.customHookwithResolver,
    advanced.workingWithVirtualizedList,
    advanced.testingForm,
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
                <code>{`<input {...register('test', { maxLength: { value: 2, message: "error message" } })} />
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
            url="https://codesandbox.io/s/provider-perf-forked-r24ho"
            rawData={formContextPerformance}
          />

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) =>
              (pageContentRef.current.ControlledmixedwithUncontrolledComponents =
                ref)
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
              url="https://codesandbox.io/s/react-hook-form-controlled-mixed-with-uncontrolled-forked-c323j"
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
              url="https://codesandbox.io/s/react-hook-form-with-react-window-forked-3j3mq"
            />
            <CodeArea
              rawData={virtualizedListFieldArray}
              url="https://codesandbox.io/s/react-hook-form-usefieldarray-virtual-inputs-ghrey"
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
    render={({ field }) => (
      <input
        onChange={(e) => field.onChange(transform.output(e))}
        value={transform.input(field.value)}
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
            tsUrl="https://codesandbox.io/s/transform-vt3tm"
          />

          <StarRepo currentLanguage={currentLanguage} />

          <Footer currentLanguage={currentLanguage} />
        </main>
      </div>
    </div>
  )
}

export default Advanced
