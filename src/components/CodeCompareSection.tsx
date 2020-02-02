import * as React from "react"
import formikCode from "./codeExamples/formikCode"
import reactHookFormCode from "./codeExamples/reactHookFormCode"
import reduxFormCode from "./codeExamples/reduxFormCode"
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
  currentLanguage,
}: {
  isPlayCodeCompare: boolean
  currentLanguage: string
}) {
  const [showFullScreen, setFullScreen] = React.useState(false)

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
            marginTop: 20,
          }}
        >
          {!showFullScreen && (
            <Animate {...props} sequenceIndex={0}>
              <h2 className={typographyStyles.title}>Formik</h2>
              <CodeArea rawData={formikCode} withOutCopy />
            </Animate>
          )}

          <Animate
            {...props}
            sequenceIndex={1}
            render={({ style }) => (
              <div
                style={{
                  ...style,
                  ...(showFullScreen
                    ? { margin: "0 auto", maxWidth: 750 }
                    : null),
                }}
              >
                <h2 className={typographyStyles.title}>React Hook Form</h2>
                <button
                  className={styles.fullScreen}
                  onClick={() => setFullScreen(!showFullScreen)}
                >
                  {showFullScreen ? "Show Comparison" : "Full Screen"}
                </button>
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

          {!showFullScreen && (
            <Animate {...props} sequenceIndex={2}>
              <h2 className={typographyStyles.title}>Redux Form</h2>
              <CodeArea rawData={reduxFormCode} withOutCopy />
            </Animate>
          )}
        </section>
      </div>
    </AnimateGroup>
  )
}

export default React.memo(CodeCompareSection)
