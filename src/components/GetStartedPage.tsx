import * as React from "react"
import GetStarted from "../components/GetStarted"
import SideMenu from "../components/SideMenu"
import CodeArea from "../components/CodeArea"
import {
  registerCode,
  registerCodeTs,
  migrateCode,
  migrateCodeTs,
  uiLibrary,
  uiLibraryTs,
  globalState,
  errors,
  errorsTs,
  applyValidation,
  applyValidationTs,
  controlledComponent,
  controlledComponentTs,
} from "./codeExamples/getStarted"
import LearnMore from "../components/learnMore"
import Footer from "../components/Footer"
import { useStateMachine } from "little-state-machine"
import getStartedEn from "../data/en/getStarted"
import reactNativeController from "./codeExamples/reactNativeController"
import typeScript from "./codeExamples/typeScript"
import schemaValidation from "./codeExamples/schemaValidation"
import schemaValidationTs from "./codeExamples/schemaValidationTs"
import copyClipBoard from "./utils/copyClipBoard"
import generic from "../data/generic"
import getStartedStyles from "./GetStarted.module.css"
import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"
import VideoList from "./VideoList"
import getStarted from "../data/en/getStarted"

const { useRef, useEffect } = React
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
  getStartedEn.schema,
  getStartedEn.reactNative,
  getStartedEn.typeScript,
]

interface Props {
  location: {
    search: string
    pathname: string
    hash: string
  }
  defaultLang: string
  getStarted: typeof getStarted
}

const Faq = ({ location, defaultLang, getStarted }: Props) => {
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
    getStarted.schema,
    getStarted.reactNative,
    getStarted.typeScript,
  ]

  const getRefNameFromTitle = (name) => name.replace(/ /g, "").toLowerCase()

  const refsFromTitles = Object.entries(getStartedEn).reduce(
    (acc, [, entry]) => {
      if (typeof entry === "object" && "title" in entry) {
        const refName = getRefNameFromTitle(entry.title)
        if (!acc[refName]) {
          acc[refName] = null
        }
      }

      return acc
    },
    {}
  )

  const sectionsRef = useRef(refsFromTitles)

  const goToSection = (name) => {
    const url = window.location.href
    const hashIndex = url.indexOf("#")
    const filterName = name.replace(/ /g, "")

    if (hashIndex < 0) {
      history.pushState({}, null, `${url}#${filterName}`)
    } else {
      history.pushState({}, null, `${url.substr(0, hashIndex)}#${filterName}`)
    }

    const refName = getRefNameFromTitle(name)
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
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
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
            quickStartRef={(ref) => {
              sectionsRef.current[
                getRefNameFromTitle(getStarted.install.title)
              ] = ref
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

          <h2
            ref={(ref) =>
              (sectionsRef.current[
                getRefNameFromTitle(getStarted.video.title)
              ] = ref)
            }
          >
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

          <VideoList
            lists={[
              {
                url: "https://www.youtube.com/watch?v=bU_eq8qyjic",
                title:
                  "The BEST Way To Create Forms In React - React Hook Form Tutorial - How To Create Forms In React",
              },
              {
                url: "https://www.youtube.com/watch?v=PcrrJ0BOFGw",
                title: "React Hook Form Tutorial | Why It's Useful",
              },
            ]}
            play
          />

          <h2
            className={typographyStyles.title}
            ref={(ref) =>
              (sectionsRef.current[
                getRefNameFromTitle(getStarted.register.title)
              ] = ref)
            }
          >
            {getStarted.register.title}
          </h2>

          {getStarted.register.description}

          <CodeArea
            rawData={registerCode}
            tsRawData={registerCodeTs}
            url="https://codesandbox.io/s/react-hook-form-register-field-u9zjt"
            tsUrl="https://codesandbox.io/s/react-hook-form-register-field-ts-ownvk"
          />

          <h2
            className={typographyStyles.title}
            ref={(ref) =>
              (sectionsRef.current[
                getRefNameFromTitle(getStarted.applyValidation.title)
              ] = ref)
            }
          >
            {getStarted.applyValidation.title}
          </h2>

          {getStarted.applyValidation.description(currentLanguage)}

          <CodeArea
            rawData={applyValidation}
            url="https://codesandbox.io/s/react-hook-form-apply-validation-px4jp"
            tsRawData={applyValidationTs}
            tsUrl="https://codesandbox.io/s/react-hook-form-apply-validation-ts-sbstd"
          />

          <h2
            className={typographyStyles.title}
            ref={(ref) =>
              (sectionsRef.current[
                getRefNameFromTitle(getStarted.adapting.title)
              ] = ref)
            }
          >
            {getStarted.adapting.title}
          </h2>

          {getStarted.adapting.description}

          <CodeArea
            rawData={migrateCode}
            url="https://codesandbox.io/s/react-hook-form-adapting-existing-form-j1n32"
            tsRawData={migrateCodeTs}
            tsUrl="https://codesandbox.io/s/react-hook-form-adapting-existing-form-ts-f3kt1"
          />

          <h2
            className={typographyStyles.title}
            ref={(ref) => {
              sectionsRef.current[
                getRefNameFromTitle(getStarted.workWithUI.title)
              ] = ref
            }}
          >
            {getStarted.workWithUI.title}
          </h2>

          {getStarted.workWithUI.description(currentLanguage)}

          <CodeArea
            rawData={uiLibrary}
            url="https://codesandbox.io/s/react-hook-form-custom-input-w4zwg"
            tsRawData={uiLibraryTs}
            tsUrl="https://codesandbox.io/s/react-hook-form-custom-input-ts-nzi1f"
          />

          <h2
            className={typographyStyles.title}
            ref={(ref) => {
              sectionsRef.current[
                getRefNameFromTitle(getStarted.controlledInput.title)
              ] = ref
            }}
          >
            {getStarted.controlledInput.title}
          </h2>

          {getStarted.controlledInput.description}

          <CodeArea
            rawData={controlledComponent}
            url="https://codesandbox.io/s/react-hook-form-controller-079xx"
            tsRawData={controlledComponentTs}
            tsUrl="https://codesandbox.io/s/react-hook-form-v6-controller-ts-4dpm9"
          />

          <h2
            className={typographyStyles.title}
            ref={(ref) => {
              sectionsRef.current[
                getRefNameFromTitle(getStarted.globalState.title)
              ] = ref
            }}
          >
            {getStarted.globalState.title}
          </h2>

          {getStarted.globalState.description}

          <CodeArea rawData={globalState} />

          <h2
            className={typographyStyles.title}
            ref={(ref) => {
              sectionsRef.current[
                getRefNameFromTitle(getStarted.errors.title)
              ] = ref
            }}
          >
            {getStarted.errors.title}
          </h2>

          {getStarted.errors.description}

          <CodeArea
            rawData={errors}
            url="https://codesandbox.io/s/react-hook-form-v6-errormessage-multiple-error-messages-tn2bh"
            tsRawData={errorsTs}
            tsUrl="https://codesandbox.io/s/react-hook-form-v6-ts-errormessage-multiple-error-messages-jk43e"
          />

          <h2
            className={typographyStyles.title}
            ref={(ref) => {
              sectionsRef.current[
                getRefNameFromTitle(getStarted.schema.title)
              ] = ref
            }}
          >
            {getStarted.schema.title}
          </h2>

          {getStarted.schema.description}

          {getStarted.schema.step1}

          <span className={getStartedStyles.installCode}>
            npm install @hookform/resolvers yup
            <button
              className={getStartedStyles.copyButton}
              onClick={() => {
                copyClipBoard("npm install yup")
                alert("Code copied into your clipboard.")
              }}
            >
              {generic.copy[currentLanguage]}
            </button>
          </span>

          {getStarted.schema.step2}

          <CodeArea
            rawData={schemaValidation}
            url="https://codesandbox.io/s/react-hook-form-v6-validationschema-b3dib"
            tsRawData={schemaValidationTs}
            tsUrl="https://codesandbox.io/s/react-hook-form-validationschema-v6-ts-fpebh"
          />

          <h2
            className={typographyStyles.title}
            ref={(ref) => {
              sectionsRef.current[
                getRefNameFromTitle(getStarted.reactNative.title)
              ] = ref
            }}
          >
            React Native
          </h2>

          <iframe
            width="100%"
            height="528"
            title="react hook form - React Native video tutorial"
            src="https://www.youtube.com/watch?v=FNnSqP2rWis"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          {getStarted.reactNative.description}

          <CodeArea
            isExpo
            rawData={reactNativeController}
            url="https://snack.expo.io/@bluebill1049/react-hook-form-v6"
          />

          <h2
            className={typographyStyles.title}
            ref={(ref) => {
              sectionsRef.current[
                getRefNameFromTitle(getStarted.typeScript.title)
              ] = ref
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
