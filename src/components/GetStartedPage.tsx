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
import * as v6Example from "./codeExamples/v6/getStarted"
import LearnMore from "../components/learnMore"
import Footer from "../components/Footer"
import { useStateMachine } from "little-state-machine"
import getStartedEn from "../data/en/getStarted"
import reactNativeController from "./codeExamples/reactNativeController"
import reactNativeControllerV6 from "./codeExamples/v6/reactNativeController"
import typeScript from "./codeExamples/typeScript"
import typeScriptV6 from "./codeExamples/v6/typeScript"
import schemaValidation from "./codeExamples/schemaValidation"
import schemaValidationV6 from "./codeExamples/v6/schemaValidation"
import schemaValidationTs from "./codeExamples/schemaValidationTs"
import schemaValidationTsV6 from "./codeExamples/v6/schemaValidationTs"
import copyClipBoard from "./utils/copyClipBoard"
import generic from "../data/generic"
import * as getStartedStyles from "./GetStarted.module.css"
import * as typographyStyles from "../styles/typography.module.css"
import * as containerStyles from "../styles/container.module.css"
import VideoList from "./VideoList"
import getStarted from "../data/en/getStarted"
import TabGroup from "./TabGroup"
import useController from "./codeExamples/useController"
import useControllerV6 from "./codeExamples/v6/useController"
import useControllerTs from "./codeExamples/useControllerTs"
import useControllerTsV6 from "./codeExamples/v6/useControllerTs"

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
    state: { language, setting },
  } = useStateMachine()
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }
  const isV7 = setting?.version === 7

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
            isV7={isV7}
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
            height="528"
            title="react hook form video tutorial"
            src={
              isV7
                ? "https://www.youtube.com/embed/DN8v7_RbVlc"
                : "https://www.youtube.com/embed/-mFXqOaqgZk"
            }
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          {!isV7 && (
            <VideoList
              lists={[
                {
                  url: "https://www.youtube.com/watch?v=bU_eq8qyjic",
                  title:
                    "The BEST Way To Create Forms In React - React Hook Form Tutorial - How To Create Forms In React",
                },
                {
                  url: "https://www.youtube.com/watch?v=mrTPrbSoAx0",
                  title:
                    "Creating a User Registration form with react-hook-form (comprehensive tutorial include Testing)",
                },
                {
                  url: "https://www.youtube.com/watch?v=PcrrJ0BOFGw",
                  title: "React Hook Form Tutorial | Why It's Useful",
                },
              ]}
              play
            />
          )}

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
            rawData={isV7 ? registerCode : v6Example.registerCode}
            tsRawData={isV7 ? registerCodeTs : v6Example.registerCodeTs}
            url={
              isV7
                ? "https://codesandbox.io/s/react-hook-form-get-started-smspp"
                : "https://codesandbox.io/s/react-hook-form-register-field-u9zjt"
            }
            tsUrl={
              isV7
                ? "https://codesandbox.io/s/react-hook-form-get-started-ts-4sfje"
                : "https://codesandbox.io/s/react-hook-form-register-field-ts-ownvk"
            }
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
            rawData={isV7 ? applyValidation : v6Example.applyValidation}
            url={
              isV7
                ? "https://codesandbox.io/s/react-hook-form-apply-validation-q5m00"
                : "https://codesandbox.io/s/react-hook-form-apply-validation-px4jp"
            }
            tsRawData={isV7 ? applyValidationTs : v6Example.applyValidationTs}
            tsUrl={
              isV7
                ? "https://codesandbox.io/s/react-hook-form-apply-validation-ts-forked-nmbyh"
                : "https://codesandbox.io/s/react-hook-form-apply-validation-ts-sbstd"
            }
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
            rawData={isV7 ? migrateCode : v6Example.migrateCode}
            url="https://codesandbox.io/s/react-hook-form-adapting-existing-form-llbnn"
            tsRawData={isV7 ? migrateCodeTs : v6Example.migrateCodeTs}
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
            rawData={isV7 ? uiLibraryHookInput : v6Example.uiLibraryHookInput}
            url={
              isV7
                ? "https://codesandbox.io/s/react-hook-form-with-ui-library-forked-fp5r3"
                : "https://codesandbox.io/s/react-hook-form-with-ui-library-lg33x"
            }
            tsRawData={
              isV7 ? uiLibraryHookInputTs : v6Example.uiLibraryHookInputTs
            }
            tsUrl={
              isV7
                ? "https://codesandbox.io/s/react-hook-form-with-ui-library-ts-forked-qjgkx"
                : "https://codesandbox.io/s/react-hook-form-with-ui-library-ts-dkjbf"
            }
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
              rawData={
                isV7 ? controlledComponent : v6Example.controlledComponent
              }
              url={
                isV7
                  ? "https://codesandbox.io/s/react-hook-form-v7-controller-5h1q5"
                  : "https://codesandbox.io/s/react-hook-form-controller-079xx"
              }
              tsRawData={
                isV7 ? controlledComponentTs : v6Example.controlledComponentTs
              }
              tsUrl={
                isV7
                  ? "https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw"
                  : "https://codesandbox.io/s/react-hook-form-v6-controller-ts-4dpm9"
              }
            />
            <CodeArea
              rawData={isV7 ? useController : useControllerV6}
              tsRawData={isV7 ? useControllerTs : useControllerTsV6}
              tsUrl={
                isV7
                  ? "https://codesandbox.io/s/usecontroller-forked-4t8cx"
                  : "https://codesandbox.io/s/usecontroller-0o8px"
              }
              url={
                isV7
                  ? "https://codesandbox.io/s/usecontroller-tefsc"
                  : "https://codesandbox.io/s/fancy-darkness-i0ywh"
              }
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

          <CodeArea rawData={isV7 ? globalState : v6Example.globalState} />

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
            rawData={isV7 ? errors : v6Example.errors}
            url={
              isV7
                ? "https://codesandbox.io/s/react-hook-form-v7-errormessage-multiple-error-messages-3ur2z"
                : "https://codesandbox.io/s/react-hook-form-v6-errormessage-multiple-error-messages-tn2bh"
            }
            tsRawData={isV7 ? errorsTs : v6Example.errorsTs}
            tsUrl={
              isV7
                ? "https://codesandbox.io/s/react-hook-form-v7-ts-errormessage-multiple-error-messages-onj9p"
                : "https://codesandbox.io/s/react-hook-form-v6-ts-errormessage-multiple-error-messages-jk43e"
            }
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

          <span className={getStartedStyles.installCode}>
            npm install @hookform/resolvers yup
            <button
              className={getStartedStyles.copyButton}
              onClick={() => {
                copyClipBoard("npm install @hookform/resolvers yup")
                alert("Code copied into your clipboard.")
              }}
            >
              {generic.copy[currentLanguage]}
            </button>
          </span>

          {getStarted.schema.step2}

          <CodeArea
            rawData={isV7 ? schemaValidation : schemaValidationV6}
            url={
              isV7
                ? "https://codesandbox.io/s/react-hook-form-v7-validationschema-rm35t"
                : "https://codesandbox.io/s/react-hook-form-v6-validationschema-b3dib"
            }
            tsRawData={isV7 ? schemaValidationTs : schemaValidationTsV6}
            tsUrl={
              isV7
                ? "https://codesandbox.io/s/react-hook-form-validationschema-v7-ts-eb41q"
                : "https://codesandbox.io/s/react-hook-form-validationschema-v6-ts-fpebh"
            }
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

          {!isV7 && (
            <iframe
              width="100%"
              height="528"
              title="react hook form - React Native video tutorial"
              src="https://www.youtube.com/embed/FNnSqP2rWis"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}

          {getStarted.reactNative.description}

          <CodeArea
            isExpo
            rawData={isV7 ? reactNativeController : reactNativeControllerV6}
            url={
              isV7
                ? "https://snack.expo.io/@bluebill1049/react-hook-form-v7---basic"
                : "https://snack.expo.io/@bluebill1049/react-hook-form-v6"
            }
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
            rawData={isV7 ? typeScript : typeScriptV6}
            url={
              isV7
                ? "https://codesandbox.io/s/react-hook-form-typescript-qwk7b"
                : "https://codesandbox.io/s/react-hook-form-typescript-mmdrc"
            }
          />

          <LearnMore currentLanguage={currentLanguage} />

          <Footer currentLanguage={currentLanguage} />
        </main>
      </div>
    </div>
  )
}

export default Faq
