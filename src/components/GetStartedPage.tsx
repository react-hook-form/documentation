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
  uiLibraryHookInput,
} from "./codeExamples/getStarted"
import LearnMore from "../components/learnMore"
import Footer from "../components/Footer"
import { useStateMachine } from "little-state-machine"
import getStarted from "../data/getStarted"
import TabGroup from "./TabGroup"
import reactNative from "./codeExamples/reactNative"
import reactNativeRHFInput from "./codeExamples/reactNativeRHFInput"
import typeScript from "./codeExamples/typeScript"

const { useRef } = React

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
        {getStarted.header[currentLanguage].title}
      </HeadingWithTopMargin>
      <SubHeading>{getStarted.header[currentLanguage].description}</SubHeading>

      <Wrapper>
        <SideMenu
          isStatic
          links={links}
          goToSection={goToSection}
          currentLanguage={currentLanguage}
        />
        <main>
          <GetStarted
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
            {getStarted.video[currentLanguage].title}
          </h2>
          <p>{getStarted.video[currentLanguage].description}</p>

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
            {getStarted.register[currentLanguage].title}
          </Title>

          {getStarted.register[currentLanguage].description}

          <CodeArea rawData={registerCode} />

          <Title
            ref={ref => {
              sectionsRef.current.applyvalidation = ref
            }}
          >
            {getStarted.applyValidation[currentLanguage].title}
          </Title>

          {getStarted.applyValidation[currentLanguage].description(
            currentLanguage
          )}

          <CodeArea rawData={applyValidation} />

          <Title
            ref={ref => {
              sectionsRef.current.adaptingexistingform = ref
            }}
          >
            {getStarted.adapting[currentLanguage].title}
          </Title>

          {getStarted.adapting[currentLanguage].description}

          <CodeArea rawData={migrateCode} />

          <Title
            ref={ref => {
              sectionsRef.current.workwithuilibrary = ref
            }}
          >
            {getStarted.workWithUI[currentLanguage].title}
          </Title>

          {getStarted.workWithUI[currentLanguage].description(currentLanguage)}

          <TabGroup buttonLabels={["Custom register", "React Hook Form Input"]}>
            <CodeArea
              rawData={uiLibrary}
              url="https://codesandbox.io/s/72j69vnk1x"
            />
            <CodeArea rawData={uiLibraryHookInput} />
          </TabGroup>

          <Title
            ref={ref => {
              sectionsRef.current.controlledinput = ref
            }}
          >
            {getStarted.controlledInput[currentLanguage].title}
          </Title>

          {getStarted.controlledInput[currentLanguage].description}

          <CodeArea
            rawData={controlledComponent}
            url="https://codesandbox.io/s/react-hook-form-hookforminput-rzu9s"
          />

          <Title
            ref={ref => {
              sectionsRef.current.integrateglobalstate = ref
            }}
          >
            {getStarted.globalState[currentLanguage].title}
          </Title>

          {getStarted.globalState[currentLanguage].description}

          <CodeArea rawData={globalState} />

          <Title
            ref={ref => {
              sectionsRef.current.handleerrors = ref
            }}
          >
            {getStarted.errors[currentLanguage].title}
          </Title>

          {getStarted.errors[currentLanguage].description}

          <CodeArea rawData={errors} />

          <Title
            ref={ref => {
              sectionsRef.current.reactnative = ref
            }}
          >
            React Native
          </Title>

          {getStarted.reactNative[currentLanguage].description}

          <TabGroup buttonLabels={["Custom Register", "React Hook Form Input"]}>
            <CodeArea
              isExpo
              rawData={reactNative}
              url="https://snack.expo.io/@bluebill1049/react-hook-form"
            />
            <CodeArea
              isExpo
              rawData={reactNativeRHFInput}
              url="https://snack.expo.io/@bluebill1049/react-hook-form-input"
            />
          </TabGroup>

          <Title
            ref={ref => {
              sectionsRef.current.typescript = ref
            }}
          >
            TypeScript
          </Title>

          {getStarted.typeScript[currentLanguage].description}

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
