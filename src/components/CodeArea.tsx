import copyClipBoard from "./utils/copyClipBoard"
import ClipBoard from "./ClipBoard"
import styles from "./CodeArea.module.css"
import { useRef, useState } from "react"
import { CodeSandBoxLink } from "./CodeSandbox"
import { PrismSyntaxHighlight } from "./mdx/code"

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
}: {
  rawData?: string
  tsRawData?: string
  rawTypes?: string
  url?: string
  tsUrl?: string
  withOutCopy?: boolean
  isExpo?: boolean
}) {
  const [currentType, setType] = useState<
    (typeof ToggleTypes)[keyof typeof ToggleTypes]
  >(
    (rawData && ToggleTypes.js) ||
      (tsRawData && ToggleTypes.ts) ||
      ToggleTypes.types
  )
  const codeAreaRef = useRef<HTMLDivElement | null>(null)

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
            onClick={() => copyClipBoard(codeAreaRef.current?.innerText || "")}
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
        {currentType === ToggleTypes.js && (
          <PrismSyntaxHighlight className="language-javascript">
            {rawData}
          </PrismSyntaxHighlight>
        )}
        {currentType === ToggleTypes.ts && (
          <PrismSyntaxHighlight className="language-typescript">
            {tsRawData}
          </PrismSyntaxHighlight>
        )}
        {currentType === ToggleTypes.types && (
          <PrismSyntaxHighlight className="language-javascript">
            {rawTypes}
          </PrismSyntaxHighlight>
        )}
      </div>
    </section>
  )
}
