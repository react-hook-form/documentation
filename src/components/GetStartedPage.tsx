import * as React from "react"
import GetStarted from "../components/GetStarted"
import SideMenu from "../components/SideMenu"
import CodeArea from "../components/CodeArea"
import {
  registerCode,
  registerCodeTs,
  migrateCode,
  migrateCodeTs,
  globalState,
  errors,
  errorsTs,
  applyValidation,
  applyValidationTs,
  controlledComponent,
  controlledComponentTs,
  uiLibraryHookInput,
  uiLibraryHookInputTs,
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
import * as getStartedStyles from "./GetStarted.module.css"
import * as typographyStyles from "../styles/typography.module.css"
import * as containerStyles from "../styles/container.module.css"
import getStarted from "../data/en/getStarted"
import TabGroup from "./TabGroup"
import useController from "./codeExamples/useController"
import useControllerTs from "./codeExamples/useControllerTs"
import ClipBoard from "./ClipBoard"

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
  getStarted.design,
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
    state: { language, setting },
  } = useStateMachine()
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }
  const lightMode = setting?.lightMode

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
    getStarted.design,
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
                getRefNameFromTitle(getStartedEn.install.title)
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
                getRefNameFromTitle(getStartedEn.video.title)
              ] = ref)
            }
            id={getRefNameFromTitle(getStartedEn.video.title)}
          >
            {getStarted.video.title}
          </h2>
          <p>{getStarted.video.description}</p>

          <iframe
            width="100%"
            height="500"
            title="react hook form video tutorial"
            src="https://www.youtube.com/embed/RkXv4AXXC_4"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <h2
            className={typographyStyles.title}
            ref={(ref) =>
              (sectionsRef.current[
                getRefNameFromTitle(getStartedEn.register.title)
              ] = ref)
            }
            id={getRefNameFromTitle(getStartedEn.register.title)}
          >
            {getStarted.register.title}
          </h2>

          {getStarted.register.description}

          <CodeArea
            rawData={registerCode}
            tsRawData={registerCodeTs}
            url="https://codesandbox.io/s/react-hook-form-get-started-smspp"
            tsUrl="https://codesandbox.io/s/react-hook-form-get-started-ts-4sfje"
          />

          <h2
            className={typographyStyles.title}
            ref={(ref) =>
              (sectionsRef.current[
                getRefNameFromTitle(getStartedEn.applyValidation.title)
              ] = ref)
            }
            id={getRefNameFromTitle(getStartedEn.applyValidation.title)}
          >
            {getStarted.applyValidation.title}
          </h2>

          {getStarted.applyValidation.description(currentLanguage)}

          <CodeArea
            rawData={applyValidation}
            url="https://codesandbox.io/s/react-hook-form-apply-validation-q5m00"
            tsRawData={applyValidationTs}
            tsUrl="https://codesandbox.io/s/react-hook-form-apply-validation-ts-forked-nmbyh"
          />

          <h2
            className={typographyStyles.title}
            ref={(ref) =>
              (sectionsRef.current[
                getRefNameFromTitle(getStartedEn.adapting.title)
              ] = ref)
            }
            id={getRefNameFromTitle(getStartedEn.adapting.title)}
          >
            {getStarted.adapting.title}
          </h2>

          {getStarted.adapting.description}

          <CodeArea
            rawData={migrateCode}
            url="https://codesandbox.io/s/react-hook-form-adapting-existing-form-llbnn"
            tsRawData={migrateCodeTs}
            tsUrl="https://codesandbox.io/s/react-hook-form-adapting-existing-form-ts-uzfxm"
          />

          <h2
            className={typographyStyles.title}
            ref={(ref) => {
              sectionsRef.current[
                getRefNameFromTitle(getStartedEn.workWithUI.title)
              ] = ref
            }}
            id={getRefNameFromTitle(getStartedEn.workWithUI.title)}
          >
            {getStarted.workWithUI.title}
          </h2>

          {getStarted.workWithUI.description}

          <CodeArea
            rawData={uiLibraryHookInput}
            url="https://codesandbox.io/s/react-hook-form-with-ui-library-forked-fp5r3"
            tsRawData={uiLibraryHookInputTs}
            tsUrl="https://codesandbox.io/s/react-hook-form-with-ui-library-ts-forked-qjgkx"
          />

          <h2
            className={typographyStyles.title}
            ref={(ref) => {
              sectionsRef.current[
                getRefNameFromTitle(getStartedEn.controlledInput.title)
              ] = ref
            }}
            id={getRefNameFromTitle(getStartedEn.controlledInput.title)}
          >
            {getStarted.controlledInput.title}
          </h2>

          {getStarted.controlledInput.description}

          <TabGroup buttonLabels={["Component", "hook"]}>
            <CodeArea
              rawData={controlledComponent}
              url="https://codesandbox.io/s/react-hook-form-v7-controller-5h1q5"
              tsRawData={controlledComponentTs}
              tsUrl="https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw"
            />
            <CodeArea
              rawData={useController}
              tsRawData={useControllerTs}
              tsUrl="https://codesandbox.io/s/usecontroller-forked-4t8cx"
              url="https://codesandbox.io/s/usecontroller-tefsc"
            />
          </TabGroup>

          <h2
            className={typographyStyles.title}
            ref={(ref) => {
              sectionsRef.current[
                getRefNameFromTitle(getStartedEn.globalState.title)
              ] = ref
            }}
            id={getRefNameFromTitle(getStartedEn.globalState.title)}
          >
            {getStarted.globalState.title}
          </h2>

          {getStarted.globalState.description}

          <CodeArea rawData={globalState} />

          <h2
            className={typographyStyles.title}
            ref={(ref) => {
              sectionsRef.current[
                getRefNameFromTitle(getStartedEn.errors.title)
              ] = ref
            }}
            id={getRefNameFromTitle(getStartedEn.errors.title)}
          >
            {getStarted.errors.title}
          </h2>

          {getStarted.errors.description}

          <CodeArea
            rawData={errors}
            url="https://codesandbox.io/s/react-hook-form-v7-errormessage-multiple-error-messages-3ur2z"
            tsRawData={errorsTs}
            tsUrl="https://codesandbox.io/s/react-hook-form-v7-ts-errormessage-multiple-error-messages-onj9p"
          />

          <h2
            className={typographyStyles.title}
            ref={(ref) => {
              sectionsRef.current[
                getRefNameFromTitle(getStartedEn.schema.title)
              ] = ref
            }}
            id={getRefNameFromTitle(getStartedEn.schema.title)}
          >
            {getStarted.schema.title}
          </h2>

          {getStarted.schema.description}

          {getStarted.schema.step1}

          <span
            className={`${getStartedStyles.installCode} ${
              lightMode ? getStartedStyles.lightInstallCode : ""
            }`}
          >
            npm install @hookform/resolvers yup
            <ClipBoard
              className={getStartedStyles.copyButton}
              onClick={() =>
                copyClipBoard("npm install @hookform/resolvers yup")
              }
              currentLanguage={currentLanguage}
            />
          </span>

          {getStarted.schema.step2}

          <CodeArea
            rawData={schemaValidation}
            url="https://codesandbox.io/s/react-hook-form-v7-validationschema-rm35t"
            tsRawData={schemaValidationTs}
            tsUrl="https://codesandbox.io/s/react-hook-form-validationschema-v7-ts-eb41q"
          />

          <h2
            className={typographyStyles.title}
            ref={(ref) => {
              sectionsRef.current[
                getRefNameFromTitle(getStartedEn.reactNative.title)
              ] = ref
            }}
            id={getRefNameFromTitle(getStartedEn.reactNative.title)}
          >
            React Native
          </h2>

          {getStarted.reactNative.description}

          <CodeArea
            isExpo
            rawData={reactNativeController}
            url="https://snack.expo.io/@bluebill1049/react-hook-form-v7---controller"
          />

          <h2
            className={typographyStyles.title}
            ref={(ref) => {
              sectionsRef.current[
                getRefNameFromTitle(getStartedEn.typeScript.title)
              ] = ref
            }}
            id={getRefNameFromTitle(getStartedEn.typeScript.title)}
          >
            TypeScript
          </h2>

          {getStarted.typeScript.description}

          <CodeArea
            rawData={typeScript}
            url="https://codesandbox.io/s/react-hook-form-typescript-qwk7b"
          />

          <h2
            className={typographyStyles.title}
            ref={(ref) => {
              sectionsRef.current[
                getRefNameFromTitle(getStartedEn.design.title)
              ] = ref
            }}
            id={getRefNameFromTitle(getStartedEn.design.title)}
          >
            Design and philosophy
          </h2>

          {getStarted.design.description}

          <LearnMore currentLanguage={currentLanguage} />

          <Footer currentLanguage={currentLanguage} />
        </main>
      </div>
    </div>
  )
}

export default Faq
