import * as React from "react"
import { useForm } from "react-hook-form"
import { DevTool } from "react-hook-form-devtools"
import { Animate } from "react-simple-animate"
import Form from "./Form"
import Footer from "./Footer"
import DevToolFeaturesList from "./DevToolFeaturesList"
import CodeArea from "./CodeArea"
import code from "./codeExamples/devTool"
import copyClipBoard from "./utils/copyClipBoard"
import generic from "../data/generic"
import { useStateMachine } from "little-state-machine"
import content from "../data/devtools"
import devTool from "../images/dev-tool.png"
import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"
import buttonStyles from "../styles/button.module.css"
import codeAreaStyles from "./CodeArea.module.css"
import getStartedStyle from "./GetStarted.module.css"
import styles from "./DevTools.module.css"

export default ({ defaultLang }: { defaultLang: string }) => {
  const methods = useForm({
    mode: "onChange",
  })
  const [showDevTool, setShowDevTool] = React.useState(false)
  const {
    state,
    state: { language },
  } = useStateMachine()
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }
  const lightMode = state?.setting?.lightMode

  const { control, formState } = methods

  const onSubmit = data => {
    console.log(data)
  }

  console.log(formState.isValid)

  return (
    <div className={containerStyles.container}>
      <main style={{ margin: "0 20px" }}>
        <h1 className={typographyStyles.headingWithTopMargin} id="main">
          {content[currentLanguage].title}
        </h1>
        <p className={typographyStyles.subHeading}>
          {content[currentLanguage].description}
        </p>

        <Animate
          play
          start={{
            opacity: 0,
            transform: "translateY(30px)",
          }}
          delay={0.2}
          render={({ style }) => (
            <div className={containerStyles.subContainer} style={style}>
              <img
                src={devTool}
                className={styles.devToolImg}
                alt="React Hook Form DevTools"
              />
            </div>
          )}
        />

        <DevToolFeaturesList isPlayFeature currentLanguage={currentLanguage} />

        <div className={containerStyles.centerContent}>
          <h1 className={typographyStyles.h1}>
            {`</>`} {content[currentLanguage].install}
          </h1>
        </div>

        <div className={containerStyles.subContainer}>
          <p>{content[currentLanguage].step1}</p>

          <span
            className={`${getStartedStyle.installCode} ${
              lightMode ? getStartedStyle.lightInstallCode : ""
            }`}
          >
            npm install react-hook-form-devtools -D
            <button
              className={getStartedStyle.copyButton}
              onClick={() => {
                copyClipBoard("npm install react-hook-form-devtools -D")
                alert(generic.copied["en"])
              }}
            >
              <span className={codeAreaStyles.copyIcon}>
                <span />
              </span>{" "}
              {generic.copy["en"]}
            </button>
          </span>

          <p>{content[currentLanguage].step2}</p>

          <CodeArea rawData={code} />
        </div>

        <div className={containerStyles.centerContent}>
          <h1 className={typographyStyles.h1}>
            {generic.liveDemo[currentLanguage]}
          </h1>
          <p>{content[currentLanguage].demoDescription}</p>

          <div
            className={buttonStyles.buttonsGroup}
            style={{
              maxWidth: 600,
            }}
          >
            <button
              className={buttonStyles.primaryButton}
              onClick={() => {
                setShowDevTool(!showDevTool)
              }}
            >
              {showDevTool ? "Disable" : "Enable"} DevTool
            </button>

            <a
              className={buttonStyles.primaryButton}
              href="https://github.com/react-hook-form/react-hook-form-devtools"
              title="React Hook Form DevTools Github repo"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
          </div>
        </div>

        <div className={styles.demo}>
          <div>
            <Form
              {...{
                onSubmit,
                submitData: {},
                toggleBuilder: () => {},
                formUpdated: () => {},
                currentLanguage: "en",
                methods,
                devTool: true,
              }}
            />
          </div>
          <div>
            <h3
              style={{
                marginTop: 40,
              }}
              className={typographyStyles.title}
            >
              {content[currentLanguage].function}
            </h3>
            <ul>{content[currentLanguage].functionDetail}</ul>
          </div>
        </div>

        <Animate
          play={showDevTool}
          start={{ opacity: 0 }}
          end={{ opacity: 1 }}
          render={({ style }) => (
            <div style={style} className={styles.devTool}>
              <DevTool control={control} />
            </div>
          )}
        />

        <Footer currentLanguage="en" />
      </main>
    </div>
  )
}
