import * as React from "react"
import SideMenu from "../components/SideMenu"
import CodeArea from "../components/CodeArea"
import Footer from "../components/Footer"
import manualValidation from "../components/codeExamples/manualValidation"
import accessibleCode from "../components/codeExamples/accessibleCode"
import shareRef from "../components/codeExamples/shareRef"
import initialValue from "../components/codeExamples/initialValue"
import copyClipBoard from "../components/utils/copyClipBoard"
import StarRepo from "../components/StarRepo"
import faqEn from "../data/en/faq"
import { useStateMachine } from "little-state-machine"
import controlled from "./codeExamples/controlled"
import TabGroup from "./TabGroup"
import control from "./codeExamples/control"
import shareRefTs from "./codeExamples/shareRefTs"
import codeAreaStyles from "./CodeArea.module.css"
import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"
import getStartedStyles from "./GetStarted.module.css"

const { useRef } = React

const enLinks = faqEn.questions

interface Props {
  defaultLang: string
  faq: any
}

const Faq = ({ defaultLang, faq }: Props) => {
  const {
    state,
    state: { language },
  } = useStateMachine()
  const lightMode = state?.setting?.lightMode
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }
  const links = faq.questions

  const sectionsRef = useRef({
    question0: null,
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
    question6: null,
    question7: null,
    question8: null,
    question9: null,
    question10: null,
    question11: null,
    question12: null,
    question13: null,
    question14: null,
    question15: null,
    question16: null,
    question17: null,
  })

  const goToSection = (name) => {
    const filterName = name.replace(/[^\w\s]| /g, "")
    const path = enLinks.findIndex(
      ({ title }) =>
        title.replace(/[^\w\s]| /g, "").toLowerCase() ===
        filterName.toLowerCase()
    )

    if (sectionsRef.current[`question${path + 1}`]) {
      sectionsRef.current[`question${path + 1}`].scrollIntoView({
        behavior: "smooth",
      })
    }

    const url = window.location.href
    const hashIndex = url.indexOf("#")

    if (hashIndex < 0) {
      history.pushState({}, null, `${url}#${filterName}`)
    } else {
      history.pushState({}, null, `${url.substr(0, hashIndex)}#${filterName}`)
    }

    if (path > -1) {
      sectionsRef.current[`question${path}`].scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  React.useEffect(() => {
    if (location.hash)
      setTimeout(() => goToSection(location.hash.substr(1)), 10)
  }, [])

  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        {faq.header.title}
      </h1>
      <p className={typographyStyles.subHeading}>{faq.header.description}</p>

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
            ref={(ref) => (sectionsRef.current.question0 = ref)}
            id="question0"
          >
            {faq.questions[0].title}
          </h2>
          {faq.questions[0].description}

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (sectionsRef.current.question1 = ref)}
            id="question1"
          >
            {faq.questions[1].title}
          </h2>
          {faq.questions[1].description}
          <CodeArea rawData={accessibleCode} />

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (sectionsRef.current.question2 = ref)}
            id="question2"
          >
            {faq.questions[2].title}
          </h2>

          {faq.questions[2].description}

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (sectionsRef.current.question3 = ref)}
            id="question3"
          >
            {faq.questions[3].title}
          </h2>
          {faq.questions[3].description}

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (sectionsRef.current.question4 = ref)}
            id="question4"
          >
            {faq.questions[4].title}
          </h2>

          {faq.questions[4].description}
          <CodeArea rawData={initialValue} />

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (sectionsRef.current.question5 = ref)}
            id="question5"
          >
            {faq.questions[5].title}
          </h2>

          {faq.questions[5].description}

          <CodeArea rawData={shareRef} tsRawData={shareRefTs} />
          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (sectionsRef.current.question6 = ref)}
            id="question6"
          >
            {faq.questions[6].title}
          </h2>

          {faq.questions[6].description}

          <CodeArea rawData={manualValidation} />
          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (sectionsRef.current.question7 = ref)}
            id="question7"
          >
            {faq.questions[7].title}
          </h2>

          {faq.questions[7].description}

          <CodeArea
            tsRawData={`import { useForm } from 'react-hook-form/dist/index.ie11'; // V6
import { useForm } from 'react-hook-form/dist/react-hook-form.ie11'; // V5'
// Resolvers
import { yupResolver } from '@hookform/resolvers/dist/ie11/yup';`}
            withOutCopy
          />
          <p>If you encounter: </p>
          <blockquote>
            {" "}
            Object doesn't support property or method 'find'
          </blockquote>
          <p>
            You should try to add this{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#Polyfill">
              find polyfill
            </a>{" "}
            to the top of your app.js
          </p>

          <h4>Version ^6.7.0</h4>

          <p>
            <b className={typographyStyles.note}>Important: </b>from version
            6.7.0 onwards we are dropping babel, and using TypeScript to
            transpile to es5. You can refer to this{" "}
            <a
              href="https://github.com/react-hook-form/react-hook-form/issues/2775"
              target="_blank"
              rel="noopener noreferrer"
            >
              issue
            </a>{" "}
            for more detail.
          </p>

          <p>
            The following polyfills are necessary. Feel free to let us know or
            update the doc to reflect other missing polyfills.
          </p>

          <ul>
            <li>
              <p>
                <code>Object.values</code>
              </p>
            </li>
            <li>
              <p>
                <code>Object.entries</code>
              </p>
            </li>
            <li>
              <p>
                <code>Array.find</code>
              </p>
            </li>
            <li>
              <p>
                <code>Array.includes</code>
              </p>
            </li>
            <li>
              <p>
                <code>String.startsWith</code>
              </p>
            </li>
          </ul>

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (sectionsRef.current.question8 = ref)}
            id="question8"
          >
            {faq.questions[8].title}
          </h2>

          {faq.questions[8].description}

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (sectionsRef.current.question9 = ref)}
            id="question9"
          >
            {faq.questions[9].title}
          </h2>

          {faq.questions[9].description}

          <span
            className={`${getStartedStyles.installCode} ${
              lightMode ? getStartedStyles.lightInstallCode : ""
            }`}
          >
            npm i mutationobserver-shim
            <button
              className={getStartedStyles.copyButton}
              onClick={() => {
                copyClipBoard("npm i mutationobserver-shim")
                alert("Code copied into your clipboard.")
              }}
            >
              <span className={codeAreaStyles.copyIcon}>
                <span />
              </span>{" "}
              Copy
            </button>
          </span>

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (sectionsRef.current.question10 = ref)}
            id="question10"
          >
            {faq.questions[10].title}
          </h2>

          {faq.questions[10].description}

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (sectionsRef.current.question11 = ref)}
            id="question11"
          >
            {faq.questions[11].title}
          </h2>

          {faq.questions[11].description}

          <TabGroup buttonLabels={["Controller", "Custom Register"]}>
            <CodeArea rawData={control} />
            <CodeArea
              rawData={controlled}
              url="https://codesandbox.io/s/react-hook-form-controlled-input-gr478"
            />
          </TabGroup>

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (sectionsRef.current.question12 = ref)}
            id="question12"
          >
            {faq.questions[12].title}
          </h2>

          {faq.questions[12].description}

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (sectionsRef.current.question13 = ref)}
            id="question13"
          >
            {faq.questions[13].title}
          </h2>

          {faq.questions[13].description}

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (sectionsRef.current.question14 = ref)}
            id="question14"
          >
            {faq.questions[14].title}
          </h2>

          {faq.questions[14].description}

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (sectionsRef.current.question15 = ref)}
            id="question15"
          >
            {faq.questions[15].title}
          </h2>

          {faq.questions[15].description}

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (sectionsRef.current.question16 = ref)}
            id="question16"
          >
            {faq.questions[16].title}
          </h2>

          {faq.questions[16].description}

          <hr />

          <h2
            className={typographyStyles.questionTitle}
            ref={(ref) => (sectionsRef.current.question17 = ref)}
            id="question16"
          >
            {faq.questions[17].title}
          </h2>

          {faq.questions[17].description}

          <StarRepo currentLanguage={currentLanguage} />

          <Footer currentLanguage={currentLanguage} />
        </main>
      </div>
    </div>
  )
}

export default Faq
