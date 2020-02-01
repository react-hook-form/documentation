import * as React from "react"
import GetStarted from "../components/GetStarted"
import SideMenu from "../components/SideMenu"
import CodeArea from "../components/CodeArea"
import {
  registerCode,
  migrateCode,
  uiLibrary,
  globalState,
  errors,
  applyValidation,
  controlledComponent,
} from "./codeExamples/getStarted"
import LearnMore from "../components/learnMore"
import Footer from "../components/Footer"
import { useStateMachine } from "little-state-machine"
import getStartedContent from "../data/getStarted"
import TabGroup from "./TabGroup"
import reactNative from "./codeExamples/reactNative"
import reactNativeRHFInput from "./codeExamples/reactNativeRHFInput"
import typeScript from "./codeExamples/typeScript"
import containerStyles from "../styles/container.module.css"
import typographyStyles from "../styles/typography.module.css"

const { useRef, useEffect } = React
const getStartedEn = getStartedContent["en"]
const enLinks = [
  getStartedEn.install,
  getStartedEn.video,
  getStartedEn.register,
  getStartedEn.applyValidation,
  getStartedEn.adapting,
  getStartedEn.workWithUI,
  getStartedEn.controlledInput,
  getStartedEn.globalState,
  getStartedEn.errors,
  getStartedEn.reactNative,
  getStartedEn.typeScript,
]

const Faq = ({
  location,
  defaultLang,
}: {
  location: {
    search: string
    pathname: string
    hash: string
  }
  defaultLang: string
}) => {
  const {
    state: { language },
  } = useStateMachine()
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }
  const getStarted = getStartedContent[currentLanguage]

  const links = [
    getStarted.install,
    getStarted.video,
    getStarted.register,
    getStarted.applyValidation,
    getStarted.adapting,
    getStarted.workWithUI,
    getStarted.controlledInput,
    getStarted.globalState,
    getStarted.errors,
    getStarted.reactNative,
    getStarted.typeScript,
  ]

  const sectionsRef = useRef({
    quickstart: null,
    videotutorial: null,
    adaptingexistingform: null,
    workwithuilibrary: null,
    controlledinput: null,
    integrateglobalstate: null,
    handleerrors: null,
    registerfields: null,
    applyvalidation: null,
    reactnative: null,
    typescript: null,
  })

  const goToSection = name => {
    console.log(name)
    const url = window.location.href
    const hashIndex = url.indexOf("#")
    const filterName = name.replace(/ /g, "")

    if (hashIndex < 0) {
      history.pushState({}, null, `${url}#${filterName}`)
    } else {
      history.pushState({}, null, `${url.substr(0, hashIndex)}#${filterName}`)
    }

    const refName = name.replace(/ /g, "").toLowerCase()
    if (sectionsRef.current[refName]) {
      sectionsRef.current[refName].scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    if (location.hash)
      setTimeout(() => goToSection(location.hash.substr(1)), 10)
  }, [])

  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.heading} id="main">
        {getStarted.header.title}
      </h1>
      <p className={typographyStyles.subHeading}>
        {getStarted.header.description}
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
          <GetStarted
            getStarted={getStarted}
            quickStartRef={ref => {
              sectionsRef.current.quickstart = ref
            }}
            currentLanguage={currentLanguage}
          />

          <p
            style={{
              textAlign: "center",
            }}
          >
            ♦
          </p>

          <h2 ref={ref => (sectionsRef.current.videotutorial = ref)}>
            {getStarted.video.title}
          </h2>
          <p>{getStarted.video.description}</p>

          <iframe
            width="100%"
            height="528"
            title="react hook form video tutorial"
            src="https://www.youtube.com/embed/-mFXqOaqgZk"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <h2
            className={typographyStyles.title}
            ref={ref => {
              sectionsRef.current.registerfields = ref
            }}
          >
            {getStarted.register.title}
          </h2>

          {getStarted.register.description}

          <CodeArea rawData={registerCode} />

          <h2
            className={typographyStyles.title}
            ref={ref => {
              sectionsRef.current.applyvalidation = ref
            }}
          >
            {getStarted.applyValidation.title}
          </h2>

          {getStarted.applyValidation.description(currentLanguage)}

          <CodeArea rawData={applyValidation} />

          <h2
            className={typographyStyles.title}
            ref={ref => {
              sectionsRef.current.adaptingexistingform = ref
            }}
          >
            {getStarted.adapting.title}
          </h2>

          {getStarted.adapting.description}

          <CodeArea rawData={migrateCode} />

          <h2
            className={typographyStyles.title}
            ref={ref => {
              sectionsRef.current.workwithuilibrary = ref
            }}
          >
            {getStarted.workWithUI.title}
          </h2>

          {getStarted.workWithUI.description(currentLanguage)}

          <CodeArea
            rawData={uiLibrary}
            url="https://codesandbox.io/s/72j69vnk1x"
          />

          <h2
            className={typographyStyles.title}
            ref={ref => {
              sectionsRef.current.controlledinput = ref
            }}
          >
            {getStarted.controlledInput.title}
          </h2>

          {getStarted.controlledInput.description}

          <CodeArea
            rawData={controlledComponent}
            url="https://codesandbox.io/s/react-hook-form-hookforminput-rzu9s"
          />

          <h2
            className={typographyStyles.title}
            ref={ref => {
              sectionsRef.current.integrateglobalstate = ref
            }}
          >
            {getStarted.globalState.title}
          </h2>

          {getStarted.globalState.description}

          <CodeArea rawData={globalState} />

          <h2
            className={typographyStyles.title}
            ref={ref => {
              sectionsRef.current.handleerrors = ref
            }}
          >
            {getStarted.errors.title}
          </h2>

          {getStarted.errors.description}

          <CodeArea rawData={errors} />

          <h2
            className={typographyStyles.title}
            ref={ref => {
              sectionsRef.current.reactnative = ref
            }}
          >
            React Native
          </h2>

          {getStarted.reactNative.description}

          <TabGroup buttonLabels={["Controller", "Custom Register"]}>
            <CodeArea
              isExpo
              rawData={reactNativeRHFInput}
              url="https://snack.expo.io/@bluebill1049/react-hook-form-input"
            />
            <CodeArea
              isExpo
              rawData={reactNative}
              url="https://snack.expo.io/@bluebill1049/react-hook-form"
            />
          </TabGroup>

          <h2
            className={typographyStyles.title}
            ref={ref => {
              sectionsRef.current.typescript = ref
            }}
          >
            TypeScript
          </h2>

          {getStarted.typeScript.description}

          <CodeArea
            rawData={typeScript}
            url="https://codesandbox.io/s/react-hook-form-typescript-mmdrc"
          />

          <LearnMore currentLanguage={currentLanguage} />

          <Footer currentLanguage={currentLanguage} />
        </main>
      </div>
    </div>
  )
}

export default Faq
