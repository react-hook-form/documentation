import { memo } from "react"
import reactHookFormCode from "./codeExamples/reactHookFormCode"
import CodeArea from "./CodeArea"
import { AnimateGroup, Animate } from "react-simple-animate"
import colors from "../styles/colors"
import home from "../data/home"
import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"
import styles from "./CodeCompareSection.module.css"

const props = {
  start: { transform: "translateY(100px)" },
  end: { transform: "translateY(0)" },
  easeType: "ease-in",
}

function CodeCompareSection({
  isPlayCodeCompare,
}: {
  isPlayCodeCompare: boolean
}) {
  return (
    <AnimateGroup play={isPlayCodeCompare}>
      <div
        style={{
          marginBottom: 40,
        }}
      >
        <div className={containerStyles.centerContent}>
          <h1 className={typographyStyles.h1}>{home.codeComparison.title}</h1>

          {home.codeComparison.description}
        </div>

        <section
          className={styles.gridView}
          style={{
            marginTop: 40,
          }}
        >
          {isPlayCodeCompare && (
            <iframe
              src="https://codesandbox.io/embed/react-hook-form-js-wbybv?fontsize=14&hidenavigation=1&theme=dark"
              style={{
                width: "100%",
                height: 570,
                border: 0,
                borderRadius: 4,
                overflow: "hidden",
                transition: "0.3s all 0.5s",
                opacity: isPlayCodeCompare ? 1 : 0,
                transform: isPlayCodeCompare
                  ? "translateY(0)"
                  : "translateY(100px)",
              }}
              title="React Hook Form codesandbox demo"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            />
          )}

          <Animate
            {...props}
            sequenceIndex={0}
            render={({ style }) => (
              <div
                className={styles.display}
                style={{
                  ...style,
                }}
              >
                <h2 className={typographyStyles.title}>React Hook Form</h2>
                <CodeArea rawData={reactHookFormCode} withOutCopy />
              </div>
            )}
          />
        </section>
      </div>
    </AnimateGroup>
  )
}

export default memo(CodeCompareSection)
