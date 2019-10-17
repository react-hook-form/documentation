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
} from "./codeExamples/getStarted"
import LearnMore from "../components/learnMore"
import Footer from "../components/Footer"
import { useStateMachine } from "little-state-machine"
import getStarted from "../data/getStarted"

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
    getStarted.install[currentLanguage].linkTitle,
    getStarted.video[currentLanguage].title,
    getStarted.register[currentLanguage].title,
    getStarted.applyValidation[currentLanguage].title,
    getStarted.adapting[currentLanguage].title,
    getStarted.workWithUI[currentLanguage].title,
    getStarted.globalState[currentLanguage].title,
    getStarted.errors[currentLanguage].title,
  ]

  const sectionsRef = useRef({
    quickstart: null,
    videotutorial: null,
    adaptingexistingform: null,
    workwithuilibrary: null,
    integrateglobalstate: null,
    handleerrors: null,
    registerfields: null,
    applyvalidation: null,
  })

  const goToSection = name => {
    const url = window.location.href
    const hashIndex = url.indexOf("#")
    const filterName = name.replace(/ /g, "")

    if (hashIndex < 0) {
      history.pushState({}, null, `${url}#${filterName}`)
    } else {
      history.pushState({}, null, `${url.substr(0, hashIndex)}#${filterName}`)
    }

    const refName = name.replace(/ /g, "").toLowerCase()
    console.log(refName)
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
          <p>{getStarted.header[currentLanguage].description}</p>

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

          {getStarted.header[currentLanguage].description}

          <CodeArea rawData={registerCode} />

          <Title
            ref={ref => {
              sectionsRef.current.applyvalidation = ref
            }}
          >
            {getStarted.applyValidation[currentLanguage].title}
          </Title>

          {getStarted.applyValidation[currentLanguage].description}

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

          {getStarted.workWithUI[currentLanguage].description}

          <CodeArea
            rawData={uiLibrary}
            url="https://codesandbox.io/s/72j69vnk1x"
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
            {getStarted.globalState[currentLanguage].errors}
          </Title>

          {getStarted.globalState[currentLanguage].description}

          <CodeArea rawData={errors} />

          <LearnMore currentLanguage={currentLanguage} />

          <Footer currentLanguage={currentLanguage} />
        </main>
      </Wrapper>
    </Container>
  )
}

export default Faq
