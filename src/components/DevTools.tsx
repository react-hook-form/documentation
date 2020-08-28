import * as React from "react"
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools/dist/devtools"
import { Animate } from "react-simple-animate"
import Form from "./Form"
import Footer from "./Footer"
import DevToolFeaturesList from "./DevToolFeaturesList"
import CodeArea from "./CodeArea"
import code from "./codeExamples/devTool"
import copyClipBoard from "./utils/copyClipBoard"
import generic from "../data/generic"
import { useStateMachine } from "little-state-machine"
import devTool from "../images/dev-tool.png"
import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"
import buttonStyles from "../styles/button.module.css"
import codeAreaStyles from "./CodeArea.module.css"
import getStartedStyle from "./GetStarted.module.css"
import styles from "./DevTools.module.css"

interface Props {
  defaultLang: string
  content: any
}

export default ({ defaultLang, content }: Props) => {
  const methods = useForm({
    mode: "onChange",
  })
  const [showDevTool, setShowDevTool] = React.useState(false)
  const {
    state,
    state: { language, setting },
  } = useStateMachine()
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }
  const lightMode = setting?.lightMode

  const { control } = methods

  const onSubmit = (data) => console.log(data)

  return (
    <div className={containerStyles.container}>
      <main style={{ margin: "0 20px" }}>
        <h1 className={typographyStyles.headingWithTopMargin} id="main">
          {content.title}
        </h1>
        <p className={typographyStyles.subHeading}>{content.description}</p>

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

        <DevToolFeaturesList
          isPlayFeature
          currentLanguage={currentLanguage}
          content={content}
        />

        <div className={containerStyles.centerContent}>
          <h1 className={typographyStyles.h1}>
            {`</>`} {content.install}
          </h1>
        </div>

        <div className={containerStyles.subContainer}>
          <p>{content.step1}</p>

          <span
            className={`${getStartedStyle.installCode} ${
              lightMode ? getStartedStyle.lightInstallCode : ""
            }`}
          >
            npm install @hookform/devtools -D
            <button
              className={getStartedStyle.copyButton}
              onClick={() => {
                copyClipBoard("npm install @hookform/devtools -D")
                alert(generic.copied["en"])
              }}
            >
              <span className={codeAreaStyles.copyIcon}>
                <span />
              </span>{" "}
              {generic.copy["en"]}
            </button>
          </span>

          <p>{content.step2}</p>

          <CodeArea rawData={code} />
        </div>

        <div className={containerStyles.centerContent}>
          <h1 className={typographyStyles.h1}>
            {generic.liveDemo[currentLanguage]}
          </h1>
          <p>{content.demoDescription}</p>

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
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                toggleBuilder: () => {},
                // eslint-disable-next-line @typescript-eslint/no-empty-function
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
              {content.function}
            </h3>
            <ul>{content.functionDetail}</ul>
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
