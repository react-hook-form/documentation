import * as React from "react"
import copyClipBoard from "./utils/copyClipBoard"
import { useStateMachine } from "little-state-machine"
import generic from "../data/generic"
import Prism from "prismjs"
import * as styles from "./CodeArea.module.css"

export const CodeSandBoxLink = ({
  url,
  isJS,
  style,
  isExpo,
}: {
  url: string
  style?: any
  isExpo?: boolean
  isJS?: boolean
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
            fill="currentColor"
          />
        </g>
      </svg>
    )}{" "}
    {isExpo ? "Expo" : "CodeSandbox"}{" "}
    {typeof isJS === "boolean" && (
      <sup
        style={{
          marginLeft: 5,
          fontSize: 10,
        }}
      >
        {isJS ? "JS" : "TS"}
      </sup>
    )}
  </a>
)

const ToggleTypes = {
  js: "JS",
  ts: "TS",
  types: "TYPES",
} as const

export default function CodeArea({
  rawData,
  tsRawData,
  rawTypes,
  url,
  tsUrl,
  withOutCopy,
  isExpo,
  style,
}: {
  rawData?: string
  tsRawData?: string
  rawTypes?: string
  url?: string
  tsUrl?: string
  withOutCopy?: boolean
  isExpo?: boolean
  style?: any
}) {
  const {
    state: { language },
  } = useStateMachine()
  const [currentType, setType] = React.useState<
    typeof ToggleTypes[keyof typeof ToggleTypes]
  >(
    (rawData && ToggleTypes.js) ||
      (tsRawData && ToggleTypes.ts) ||
      ToggleTypes.types
  )
  const codeAreaRef = React.useRef<HTMLDivElement | null>(null)

  const getData = () => {
    switch (currentType) {
      case ToggleTypes.js:
        return rawData
      case ToggleTypes.ts:
        return tsRawData
      default:
        return rawTypes
    }
  }

  const { currentLanguage } =
    language && language.currentLanguage ? language : { currentLanguage: "en" }

  React.useEffect(() => {
    const highlight = async () => {
      if (codeAreaRef.current) {
        Prism.highlightAllUnder(codeAreaRef.current)
      }
    }
    highlight()
  }, [])

  return (
    <section
      style={{
        position: "relative",
      }}
    >
      <div className={styles.buttonWrapper}>
        {((rawData && tsRawData) || (rawData && rawTypes)) && (
          <button
            onClick={() => setType(ToggleTypes.js)}
            className={`${styles.button} ${styles.codeLink} ${
              currentType === ToggleTypes.js ? styles.active : ""
            }`}
          >
            JS
          </button>
        )}
        {((tsRawData && rawData) || (tsRawData && rawTypes)) && (
          <button
            onClick={() => setType(ToggleTypes.ts)}
            className={`${styles.button} ${styles.codeLink} ${
              currentType === ToggleTypes.ts ? styles.active : ""
            }`}
          >
            TS
          </button>
        )}
        {((rawTypes && rawData) || (rawTypes && tsRawData)) && (
          <button
            onClick={() => setType(ToggleTypes.types)}
            className={`${styles.button} ${styles.codeLink} ${
              currentType === ToggleTypes.types ? styles.active : ""
            }`}
          >
            Types
          </button>
        )}
        {!withOutCopy && (
          <button
            className={`${styles.button} ${styles.copyButton}`}
            onClick={() => {
              copyClipBoard(getData())
              alert(generic.copied[currentLanguage])
            }}
            aria-label={generic.copied[currentLanguage]}
          >
            {generic.copy[currentLanguage]}
          </button>
        )}

        {((url && currentType === ToggleTypes.js) ||
          (tsUrl && currentType === ToggleTypes.ts) ||
          (tsUrl && currentType === ToggleTypes.types)) && (
          <CodeSandBoxLink
            isExpo={isExpo}
            isJS={url && currentType === ToggleTypes.js && url && tsUrl}
            url={currentType === ToggleTypes.js ? url : tsUrl}
          />
        )}
      </div>

      <div className={styles.wrapper} ref={codeAreaRef}>
        <pre style={style} className="raw-code">
          <code
            className={`language-javascript ${
              currentType === ToggleTypes.js ? styles.showCode : ""
            }`}
          >
            {rawData}
          </code>
          <code
            className={`language-javascript ${
              currentType === ToggleTypes.ts ? styles.showCode : ""
            }`}
          >
            {tsRawData}
          </code>
          <code
            className={`language-javascript ${
              currentType === ToggleTypes.types ? styles.showCode : ""
            }`}
          >
            {rawTypes}
          </code>
        </pre>
      </div>
    </section>
  )
}
