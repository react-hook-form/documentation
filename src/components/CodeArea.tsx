import * as React from "react"
import copyClipBoard from "./utils/copyClipBoard"
import generateCode from "./logic/generateCode"
import { useStateMachine } from "little-state-machine"
import generic from "../data/generic"
import styles from "./CodeArea.module.css"

export const CodeSandBoxLink = ({
  url,
  style,
  isExpo,
}: {
  url: string
  style?: any
  isExpo?: boolean
}) => (
  <a
    className={`${styles.button} ${styles.linkToSandBox}`}
    style={style}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {!isExpo && (
      <svg viewBox="0 0 256 296">
        <g>
          <path
            d="M115.497674,261.08837 L115.497674,154.478845 L23.8139535,101.729261 L23.8139535,162.501763 L65.8104558,186.8486 L65.8104558,232.549219 L115.497674,261.08837 Z M139.311628,261.714907 L189.916577,232.563707 L189.916577,185.779949 L232.186047,161.285235 L232.186047,101.27387 L139.311628,154.895035 L139.311628,261.714907 Z M219.971965,80.8276886 L171.155386,52.5391067 L128.292316,77.4106841 L85.1040206,52.5141067 L35.8521355,81.1812296 L127.765737,134.063073 L219.971965,80.8276886 Z M0,222.211907 L0,74.4948807 L127.986799,0 L256,74.1820085 L256,221.978632 L127.983954,295.72283 L0,222.211907 Z"
            fill="#fff"
          />
        </g>
      </svg>
    )}{" "}
    {isExpo ? "Expo" : "CodeSandbox"}
  </a>
)

export default function CodeArea({
  rawData,
  tsRawData,
  data,
  url,
  tsUrl,
  withOutCopy,
  isExpo,
  style,
}: {
  tsRawData?: string
  tsUrl?: string
  rawData?: string
  data?: string
  url?: string
  withOutCopy?: boolean
  isExpo?: boolean
  style?: any
}) {
  const {
    state: { language },
  } = useStateMachine()
  const [isTS, setIsTS] = React.useState(false)

  const { currentLanguage } =
    language && language.currentLanguage ? language : { currentLanguage: "en" }

  return (
    <section
      style={{
        position: "relative",
      }}
    >
      <div className={styles.buttonWrapper}>
        {tsRawData && (
          <>
            <button
              onClick={() => setIsTS(false)}
              className={`${styles.button} ${styles.copyButton} ${
                !isTS ? styles.active : ""
              }`}
            >
              JS
            </button>
            <button
              onClick={() => setIsTS(true)}
              className={`${styles.button} ${styles.copyButton} ${
                isTS ? styles.active : ""
              }`}
            >
              TS
            </button>
          </>
        )}
        {!withOutCopy && (
          <button
            className={`${styles.button} ${styles.copyButton}`}
            onClick={() => {
              copyClipBoard(rawData || generateCode(data))
              alert(generic.copied[currentLanguage])
            }}
            aria-label={generic.copied[currentLanguage]}
          >
            {generic.copy[currentLanguage]}
          </button>
        )}

        {!isTS && url && <CodeSandBoxLink isExpo={isExpo} url={url} />}

        {isTS && tsUrl && <CodeSandBoxLink isExpo={isExpo} url={tsUrl} />}
      </div>

      <div className={styles.wrapper}>
        <pre style={style} className="raw-code">
          <code
            className={`language-javascript ${!isTS ? styles.showCode : ""}`}
          >
            {rawData || generateCode(data)}
          </code>

          <code
            className={`language-javascript ${isTS ? styles.showCode : ""}`}
          >
            {tsRawData}
          </code>
        </pre>
      </div>
    </section>
  )
}
