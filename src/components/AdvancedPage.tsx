import * as React from "react"
import {
  SubHeading,
  HeadingWithTopMargin,
  QuestionTitle,
} from "../styles/typography"
import CodeArea from "./CodeArea"
import SideMenu from "./SideMenu"
import { Container, Wrapper } from "../styles/containers"
import Footer from "./Footer"
import fieldArray from "./codeExamples/fieldArray"
import unregisterControlledComponent from "./codeExamples/unregisterControlledComponent"
import copyClipBoard from "./utils/copyClipBoard"
import { CopyButton, InstallCode } from "./GetStarted"
import schemaValidation from "./codeExamples/schemaValidation"
import connectForm from "./codeExamples/connectForm"
import formContextPerformance from "./codeExamples/formContextPerformance"
import StarRepo from "./StarRepo"
import generic from "../data/generic"
import { useStateMachine } from "little-state-machine"
import advancedContent from "../data/advanced"
import controlledMixedUncontrolled from "./codeExamples/controlledMixedUncontrolled"
import TabGroup from "./TabGroup"
import unregisterWrapControlledComponent from "./codeExamples/unregisterWrapControlledComponent"
import controlledMixedUncontrolledInput from "./codeExamples/controlledMixedUncontrolledInput"
import useFieldArray from "./codeExamples/useFieldArray"

const { useRef } = React
const advancedEn = advancedContent["en"]
const enLinks = [
  advancedEn.accessibility,
  advancedEn.wizard,
  advancedEn.smartForm,
  advancedEn.fieldArrays,
  advancedEn.schema,
  advancedEn.errorMessage,
  advancedEn.connectForm,
  advancedEn.formContext,
  advancedEn.conditionalControlledComponent,
  advancedEn.controlledMixedWithUnControlled,
]

function Advanced({ defaultLang }: { defaultLang: string }) {
  const pageContentRef = useRef({
    AccessibilityA11y: null,
    WizardFormFunnel: null,
    SmartFormComponent: null,
    FieldArrays: null,
    SchemaValidation: null,
    ConnectForm: null,
    FormContextPerformance: null,
    ErrorMessage: null,
    ConditionalControlledComponent: null,
    ControlledmixedwithUncontrolledComponents: null,
  })

  const {
    state: { language },
  } = useStateMachine()
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }
  const advanced = advancedContent[currentLanguage]

  const links = [
    advanced.accessibility,
    advanced.wizard,
    advanced.smartForm,
    advanced.fieldArrays,
    advanced.schema,
    advanced.errorMessage,
    advanced.connectForm,
    advanced.formContext,
    advanced.conditionalControlledComponent,
    advanced.controlledMixedWithUnControlled,
  ]

  const goToSection = name => {
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
    <Container>
      <HeadingWithTopMargin id="main">
        {advanced.header.title}
      </HeadingWithTopMargin>
      <SubHeading>{advanced.header.description}</SubHeading>

      <Wrapper>
        <SideMenu
          enLinks={enLinks}
          isStatic
          links={links}
          goToSection={goToSection}
          currentLanguage={currentLanguage}
        />

        <main>
          <QuestionTitle
            ref={ref => (pageContentRef.current.AccessibilityA11y = ref)}
          >
            {advanced.accessibility.title}
          </QuestionTitle>

          {advanced.accessibility.description}

          <hr />

          <QuestionTitle
            ref={ref => (pageContentRef.current.WizardFormFunnel = ref)}
          >
            {advanced.wizard.title}
          </QuestionTitle>

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

          <QuestionTitle
            ref={ref => (pageContentRef.current.SmartFormComponent = ref)}
          >
            {advanced.smartForm.title}
          </QuestionTitle>

          {advanced.smartForm.description}

          <hr />

          <QuestionTitle
            ref={ref => (pageContentRef.current.FieldArrays = ref)}
          >
            {advanced.fieldArrays.title}
          </QuestionTitle>

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

          <QuestionTitle
            ref={ref => (pageContentRef.current.SchemaValidation = ref)}
          >
            {advanced.schema.title}
          </QuestionTitle>

          {advanced.schema.description}

          {advanced.schema.step1}

          <InstallCode>
            npm install yup
            <CopyButton
              onClick={() => {
                copyClipBoard("npm install yup")
                alert("Code copied into your clipboard.")
              }}
            >
              {generic.copy[currentLanguage]}
            </CopyButton>
          </InstallCode>

          {advanced.schema.step2}

          <CodeArea
            rawData={schemaValidation}
            url="https://codesandbox.io/s/928po918qr"
          />

          <hr />

          <QuestionTitle
            ref={ref => (pageContentRef.current.ErrorMessage = ref)}
          >
            {advanced.errorMessage.title}
          </QuestionTitle>

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

          <QuestionTitle
            ref={ref => (pageContentRef.current.ConnectForm = ref)}
          >
            {advanced.connectForm.title}
          </QuestionTitle>

          {advanced.connectForm.description}

          <CodeArea rawData={connectForm} />

          <hr />

          <QuestionTitle
            ref={ref => (pageContentRef.current.FormContextPerformance = ref)}
          >
            {advanced.formContext.title}
          </QuestionTitle>

          {advanced.formContext.description}

          <CodeArea rawData={formContextPerformance} />

          <hr />

          <QuestionTitle
            ref={ref =>
              (pageContentRef.current.ConditionalControlledComponent = ref)
            }
          >
            {advanced.conditionalControlledComponent.title}
          </QuestionTitle>

          {advanced.conditionalControlledComponent.description}

          <TabGroup buttonLabels={["Controller", "Custom Register"]}>
            <CodeArea rawData={unregisterWrapControlledComponent} />
            <CodeArea
              rawData={unregisterControlledComponent}
              url="https://codesandbox.io/s/react-hook-fom-unregister-controlled-component-hu990"
            />
          </TabGroup>

          <hr />

          <QuestionTitle
            ref={ref =>
              (pageContentRef.current.ControlledmixedwithUncontrolledComponents = ref)
            }
          >
            {advanced.controlledMixedWithUnControlled.title}
          </QuestionTitle>

          {advanced.controlledMixedWithUnControlled.description}

          <TabGroup buttonLabels={["Controller", "Custom Register"]}>
            <CodeArea rawData={controlledMixedUncontrolledInput} />
            <CodeArea
              rawData={controlledMixedUncontrolled}
              url="https://codesandbox.io/s/react-hook-form-controlled-mixed-with-uncontrolled-8vh3c"
            />
          </TabGroup>

          <StarRepo currentLanguage={currentLanguage} />

          <Footer currentLanguage={currentLanguage} />
        </main>
      </Wrapper>
    </Container>
  )
}

export default Advanced
