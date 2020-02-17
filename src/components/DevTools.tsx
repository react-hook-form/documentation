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
import { updateCurrentLanguage } from "../actions/languageActions"
import devTool from "../images/dev-tool.png"
import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"
import buttonStyles from "../styles/button.module.css"
import codeAreaStyles from "./CodeArea.module.css"
import getStartedStyle from "./GetStarted.module.css"
import styles from "./DevTools.module.css"

export default () => {
  const methods = useForm({
    mode: "onChange",
  })
  const [showDevTool, setShowDevTool] = React.useState(false)
  const { state } = useStateMachine(updateCurrentLanguage)
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
          DevTools
        </h1>
        <p className={typographyStyles.subHeading}>
          React Hook Form DevTools to help debug forms with validation.
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

        <DevToolFeaturesList isPlayFeature currentLanguage="en" />

        <div className={containerStyles.centerContent}>
          <h1 className={typographyStyles.h1}>{`</>`} Installation</h1>
        </div>

        <div className={containerStyles.subContainer}>
          <p>
            <b className={typographyStyles.note}>Step 1: </b>install{" "}
            <code>react-hook-form-devtools</code> as a dev dependency package.
          </p>

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

          <p>
            <b className={typographyStyles.note}>Step2: </b>Integrate with your
            React App is as simple as import a Component into your App/Form
            render and pass <code>control</code> prop into it.
          </p>

          <CodeArea rawData={code} />
        </div>

        <div className={containerStyles.centerContent}>
          <h1 className={typographyStyles.h1}>Live Demo</h1>
          <p>
            You can interact with the following demo to see DevTool in action.
          </p>

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
              Functionality
            </h3>
            <ul>
              <li>
                <p>Read inputs and entire form state</p>
              </li>
              <li>
                <p>
                  <b className={typographyStyles.note}>Note: </b>Because RHF is
                  based on uncontrolled inputs, <strong>Update</strong> button
                  will refresh the DevTool to read the latest input value and
                  form state.
                </p>
              </li>
              <li>
                <p>Visual feedback when input or form is valid or invalid.</p>
              </li>
              <li>
                <p>
                  Search registered input and also custom registered components.
                </p>
              </li>
              <li>
                <p>
                  <b className={typographyStyles.note}>Note: </b> you can easily
                  locate an input by clicking the <strong>Native</strong>{" "}
                  button. This will be useful when you working on a large form.
                </p>
              </li>
            </ul>
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
