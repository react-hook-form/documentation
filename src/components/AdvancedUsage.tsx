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

const { useRef } = React

function Advanced({ defaultLang }: { defaultLang: string }) {
  const pageContentRef = useRef({
    Accessibility: null,
    WizardForm: null,
    SmartFormComponent: null,
    FieldArrays: null,
    SchemaValidation: null,
    ConnectForm: null,
    FormContextPerformance: null,
  })

  const {
    state: { language },
  } = useStateMachine()
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }

  const links = [
    advanced.accessibility[currentLanguage].title,
    advanced.wizard[currentLanguage].title,
    advanced.smartForm[currentLanguage].title,
    advanced.fieldArrays[currentLanguage].title,
    advanced.schema[currentLanguage].title,
    advanced.connectForm[currentLanguage].title,
    advanced.formContext[currentLanguage].title,
  ]

  const goToSection = name => {
    const url = window.location.href
    const hashIndex = url.indexOf("#")
    const filterName = name.replace(/ /g, "")

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
            ref={ref => (pageContentRef.current.Accessibility = ref)}
          >
            {advanced.accessibility[currentLanguage].title}
          </QuestionTitle>

          {advanced.accessibility[currentLanguage].description}

          <hr />

          <QuestionTitle ref={ref => (pageContentRef.current.WizardForm = ref)}>
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
            ref={ref => (pageContentRef.current.ConnectForm = ref)}
          >
            {advanced.connectForm[currentLanguage].title}
          </QuestionTitle>

          {advanced.schema[currentLanguage].description}

          <CodeArea rawData={connectForm} />

          <hr />

          <QuestionTitle
            ref={ref => (pageContentRef.current.FormContextPerformance = ref)}
          >
            {advanced.formContext[currentLanguage].title}
          </QuestionTitle>

          {advanced.schema[currentLanguage].description}

          <CodeArea rawData={formContextPerformance} />

          <hr />

          <StarRepo currentLanguage={currentLanguage} />

          <Footer currentLanguage={currentLanguage} />
        </main>
      </Wrapper>
    </Container>
  )
}

export default Advanced
