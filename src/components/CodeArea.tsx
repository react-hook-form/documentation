import copyClipBoard from "./utils/copyClipBoard"
import { highlightAllUnder } from "prismjs"
import ClipBoard from "./ClipBoard"
import styles from "./CodeArea.module.css"
import { CSSProperties, useEffect, useRef, useState } from "react"
import { CodeSandBoxLink } from "./CodeSandbox"

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
  style?: CSSProperties
}) {
  const [currentType, setType] = useState<
    (typeof ToggleTypes)[keyof typeof ToggleTypes]
  >(
    (rawData && ToggleTypes.js) ||
      (tsRawData && ToggleTypes.ts) ||
      ToggleTypes.types
  )
  const codeAreaRef = useRef<HTMLDivElement | null>(null)

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

  useEffect(() => {
    const highlight = async () => {
      if (codeAreaRef.current) {
        highlightAllUnder(codeAreaRef.current)
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
          <ClipBoard
            className={`${styles.button} ${styles.copyButton}`}
            onClick={() => copyClipBoard(getData())}
          />
        )}

        {((url && currentType === ToggleTypes.js) ||
          (tsUrl && currentType === ToggleTypes.ts) ||
          (tsUrl && currentType === ToggleTypes.types)) && (
          <CodeSandBoxLink
            isExpo={isExpo}
            isJS={!!(url && currentType === ToggleTypes.js && url && tsUrl)}
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
