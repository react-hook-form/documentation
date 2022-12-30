import * as React from "react"
import reactHookFormCode from "./codeExamples/reactHookFormCode"
import CodeArea from "./CodeArea"
import { AnimateGroup, Animate } from "react-simple-animate"
import colors from "../styles/colors"
import home from "../data/home"
import * as typographyStyles from "../styles/typography.module.css"
import * as containerStyles from "../styles/container.module.css"
import * as styles from "./CodeCompareSection.module.css"

const props = {
  start: { transform: "translateY(100px)" },
  end: { transform: "translateY(0)" },
  easeType: "ease-in",
}

function CodeCompareSection({
  isPlayCodeCompare,
  currentLanguage,
}: {
  isPlayCodeCompare: boolean
  currentLanguage: string
}) {
  return (
    <AnimateGroup play={isPlayCodeCompare}>
      <div
        style={{
          marginBottom: 40,
        }}
      >
        <div className={containerStyles.centerContent}>
          <h1 className={typographyStyles.h1}>
            {home.codeComparison[currentLanguage].title}
          </h1>

          {home.codeComparison[currentLanguage].description}
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
                <CodeArea
                  style={{
                    border: `1px solid ${colors.secondary}`,
                  }}
                  rawData={reactHookFormCode}
                  withOutCopy
                />
              </div>
            )}
          />
        </section>
      </div>
    </AnimateGroup>
  )
}

export default React.memo(CodeCompareSection)
