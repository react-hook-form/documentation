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
import copyClipBoard from "./utils/copyClipBoard"
import { CopyButton, InstallCode } from "./GetStarted"
import schemaValidation from "./codeExamples/schemaValidation"
import connectForm from "./codeExamples/connectForm"
import formContextPerformance from "./codeExamples/formContextPerformance"
import StarRepo from "./StarRepo"
import generic from "../data/generic"
import { useStateMachine } from "little-state-machine"
import advanced from "../data/advanced"
import errorMessageAdvance from "./codeExamples/errorMessageAdvance"

const { useRef } = React

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
    advanced.schema,
    advanced.errorMessage,
    advanced.connectForm,
    advanced.formContext,
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
        {advanced.header[currentLanguage].title}
      </HeadingWithTopMargin>
      <SubHeading>{advanced.header[currentLanguage].description}</SubHeading>

      <Wrapper>
        <SideMenu
          isStatic
          links={links}
          goToSection={goToSection}
          currentLanguage={currentLanguage}
        />

        <main>
          <QuestionTitle
            ref={ref => (pageContentRef.current.AccessibilityA11y = ref)}
          >
            {advanced.accessibility[currentLanguage].title}
          </QuestionTitle>

          {advanced.accessibility[currentLanguage].description}

          <hr />

          <QuestionTitle
            ref={ref => (pageContentRef.current.WizardFormFunnel = ref)}
          >
            {advanced.wizard[currentLanguage].title}
          </QuestionTitle>

          {advanced.wizard[currentLanguage].description}

          <hr />

          <QuestionTitle
            ref={ref => (pageContentRef.current.SmartFormComponent = ref)}
          >
            {advanced.smartForm[currentLanguage].title}
          </QuestionTitle>

          {advanced.smartForm[currentLanguage].description}

          <hr />

          <QuestionTitle
            ref={ref => (pageContentRef.current.FieldArrays = ref)}
          >
            {advanced.fieldArrays[currentLanguage].title}
          </QuestionTitle>

          {advanced.fieldArrays[currentLanguage].description}

          <CodeArea
            rawData={fieldArray}
            url="https://codesandbox.io/s/6j1760jkjk"
          />

          <hr />

          <QuestionTitle
            ref={ref => (pageContentRef.current.SchemaValidation = ref)}
          >
            {advanced.schema[currentLanguage].title}
          </QuestionTitle>

          {advanced.schema[currentLanguage].description}

          {advanced.schema[currentLanguage].step1}

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

          {advanced.schema[currentLanguage].step2}

          <CodeArea
            rawData={schemaValidation}
            url="https://codesandbox.io/s/928po918qr"
          />

          <hr />

          <QuestionTitle
            ref={ref => (pageContentRef.current.ErrorMessage = ref)}
          >
            {advanced.errorMessage[currentLanguage].title}
          </QuestionTitle>

          {advanced.errorMessage[currentLanguage].description}

          <ul>
            <li>
              <h4>Register</h4>
              <p>
                {advanced.errorMessage[currentLanguage].register}
                <br />
                <code>{`<input name="test" ref={register({ value: 'Min is 8', min: 8 })} />`}</code>
              </p>
            </li>
            <li>
              <h4>{`<ErrorMessage />`}</h4>
              <p>
                {advanced.errorMessage[currentLanguage].component}
              </p>

              <CodeArea rawData={errorMessageAdvance} />
            </li>
            <li>
              <h4>
                Lodash <code>get</code>
              </h4>
              {advanced.errorMessage[currentLanguage].get}
              <p />
            </li>
          </ul>

          <hr />

          <QuestionTitle
            ref={ref => (pageContentRef.current.ConnectForm = ref)}
          >
            {advanced.connectForm[currentLanguage].title}
          </QuestionTitle>

          {advanced.connectForm[currentLanguage].description}

          <CodeArea rawData={connectForm} />

          <hr />

          <QuestionTitle
            ref={ref => (pageContentRef.current.FormContextPerformance = ref)}
          >
            {advanced.formContext[currentLanguage].title}
          </QuestionTitle>

          {advanced.formContext[currentLanguage].description}

          <CodeArea rawData={formContextPerformance} />

          <StarRepo currentLanguage={currentLanguage} />

          <Footer currentLanguage={currentLanguage} />
        </main>
      </Wrapper>
    </Container>
  )
}

export default Advanced
