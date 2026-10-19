import { memo } from "react"
import reactHookFormCode from "./codeExamples/reactHookFormCode"
import CodeArea from "./CodeArea"
import home from "../data/home"
import HomeSection from "./HomeSection"
import styles from "./CodeCompareSection.module.css"

const SANDBOX_ID = "react-hook-form-js-wbybv"

function CodeCompareSection({
  isPlayCodeCompare,
}: {
  isPlayCodeCompare: boolean
}) {
  return (
    <HomeSection
      id="codeComparison"
      eyebrow="Less code"
      title={home.codeComparison.title}
      lead={home.codeComparison.description}
      wide
    >
      <div className={styles.frame}>
        <div className={styles.frameHeader}>
          <span className={styles.dots} aria-hidden>
            <i />
            <i />
            <i />
          </span>
          <span>App.js</span>
          <a
            className={styles.open}
            href={`https://codesandbox.io/s/${SANDBOX_ID}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in CodeSandbox ↗
          </a>
        </div>

        <div className={styles.sandbox}>
          {isPlayCodeCompare && (
            <iframe
              src={`https://codesandbox.io/embed/${SANDBOX_ID}?fontsize=14&hidenavigation=1&theme=dark`}
              title="React Hook Form codesandbox demo"
              loading="lazy"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            />
          )}
        </div>

        <div className={styles.fallback}>
          <CodeArea rawData={reactHookFormCode} withOutCopy />
        </div>
      </div>
    </HomeSection>
  )
}

export default memo(CodeCompareSection)
