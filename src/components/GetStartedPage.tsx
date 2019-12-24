import * as React from "react"
import { HeadingWithTopMargin, SubHeading, Title } from "../styles/typography"
import GetStarted from "../components/GetStarted"
import SideMenu from "../components/SideMenu"
import CodeArea from "../components/CodeArea"
import { Container, Wrapper } from "../styles/containers"
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

const { useRef } = React
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

  React.useEffect(() => {
    if (location.hash)
      setTimeout(() => goToSection(location.hash.substr(1)), 10)
  }, [])

  return (
    <Container>
      <HeadingWithTopMargin id="main">
        {getStarted.header.title}
      </HeadingWithTopMargin>
      <SubHeading>{getStarted.header.description}</SubHeading>

      <Wrapper>
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

          <Title
            ref={ref => {
              sectionsRef.current.registerfields = ref
            }}
          >
            {getStarted.register.title}
          </Title>

          {getStarted.register.description}

          <CodeArea rawData={registerCode} />

          <Title
            ref={ref => {
              sectionsRef.current.applyvalidation = ref
            }}
          >
            {getStarted.applyValidation.title}
          </Title>

          {getStarted.applyValidation.description(currentLanguage)}

          <CodeArea rawData={applyValidation} />

          <Title
            ref={ref => {
              sectionsRef.current.adaptingexistingform = ref
            }}
          >
            {getStarted.adapting.title}
          </Title>

          {getStarted.adapting.description}

          <CodeArea rawData={migrateCode} />

          <Title
            ref={ref => {
              sectionsRef.current.workwithuilibrary = ref
            }}
          >
            {getStarted.workWithUI.title}
          </Title>

          {getStarted.workWithUI.description(currentLanguage)}

          <CodeArea
            rawData={uiLibrary}
            url="https://codesandbox.io/s/72j69vnk1x"
          />

          <Title
            ref={ref => {
              sectionsRef.current.controlledinput = ref
            }}
          >
            {getStarted.controlledInput.title}
          </Title>

          {getStarted.controlledInput.description}

          <CodeArea
            rawData={controlledComponent}
            url="https://codesandbox.io/s/react-hook-form-hookforminput-rzu9s"
          />

          <Title
            ref={ref => {
              sectionsRef.current.integrateglobalstate = ref
            }}
          >
            {getStarted.globalState.title}
          </Title>

          {getStarted.globalState.description}

          <CodeArea rawData={globalState} />

          <Title
            ref={ref => {
              sectionsRef.current.handleerrors = ref
            }}
          >
            {getStarted.errors.title}
          </Title>

          {getStarted.errors.description}

          <CodeArea rawData={errors} />

          <Title
            ref={ref => {
              sectionsRef.current.reactnative = ref
            }}
          >
            React Native
          </Title>

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

          <Title
            ref={ref => {
              sectionsRef.current.typescript = ref
            }}
          >
            TypeScript
          </Title>

          {getStarted.typeScript.description}

          <CodeArea
            rawData={typeScript}
            url="https://codesandbox.io/s/react-hook-form-typescript-mmdrc"
          />

          <LearnMore currentLanguage={currentLanguage} />

          <Footer currentLanguage={currentLanguage} />
        </main>
      </Wrapper>
    </Container>
  )
}

export default Faq
