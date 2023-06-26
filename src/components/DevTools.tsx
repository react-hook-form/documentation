import { useState } from "react"
import { useForm } from "react-hook-form"
import { Animate } from "react-simple-animate"
import Form from "./Form"
import Footer from "./Footer"
import DevToolFeaturesList from "./DevToolFeaturesList"
import CodeArea from "./CodeArea"
import code from "./codeExamples/devTool"
import copyClipBoard from "./utils/copyClipBoard"
import generic from "../data/generic"
import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"
import buttonStyles from "../styles/button.module.css"
import getStartedStyle from "./GetStarted.module.css"
import styles from "./DevTools.module.css"
import ClipBoard from "./ClipBoard"
import dynamic from "next/dynamic"

const DevTool = dynamic(
  () => import("@hookform/devtools").then((mod) => mod.DevTool),
  {
    ssr: false,
  }
)

interface Props {
  content: any
}

export default function DevTools({ content }: Props) {
  const methods = useForm({
    mode: "onChange",
  })

  const [showDevTool, setShowDevTool] = useState(false)

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
                src="/images/dev-tool.png"
                className={styles.devToolImg}
                alt="React Hook Form DevTools"
              />
            </div>
          )}
        />

        <DevToolFeaturesList isPlayFeature content={content} />

        <div className={containerStyles.centerContent}>
          <h1 className={typographyStyles.h1}>
            {`</>`} {content.install}
          </h1>
        </div>

        <div className={containerStyles.subContainer}>
          <p>{content.step1}</p>

          <pre className="language-bash">
            npm install -D @hookform/devtools
            <ClipBoard
              className={getStartedStyle.copyButton}
              onClick={() => copyClipBoard("npm install -D @hookform/devtools")}
            />
          </pre>

          <p>{content.step2}</p>

          <CodeArea rawData={code} />
        </div>

        <div className={containerStyles.centerContent}>
          <h1 className={typographyStyles.h1}>{generic.liveDemo}</h1>
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

        <Footer />
      </main>
    </div>
  )
}
