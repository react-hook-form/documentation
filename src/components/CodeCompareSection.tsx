import * as React from "react"
import { Title, H1 } from "../styles/typography"
import formikCode from "./codeExamples/formikCode"
import reactHookFormCode from "./codeExamples/reactHookFormCode"
import reduxFormCode from "./codeExamples/reduxFormCode"
import { CenterContent, Section } from "../styles/containers"
import CodeArea from "./CodeArea"
import { AnimateGroup, Animate } from "react-simple-animate"
import colors from "../styles/colors"
import home from "../data/home"
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
      <Section>
        <CenterContent>
          <H1>{home.codeComparison[currentLanguage].title}</H1>

          {home.codeComparison[currentLanguage].description}
        </CenterContent>

        <section
          className={styles.gridView}
          style={{
            marginTop: 20,
          }}
        >
          {!showFullScreen && (
            <Animate {...props} sequenceIndex={0}>
              <Title>Formik</Title>
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
                <Title>React Hook Form</Title>
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
              <Title>Redux Form</Title>
              <CodeArea rawData={reduxFormCode} withOutCopy />
            </Animate>
          )}
        </section>
      </Section>
    </AnimateGroup>
  )
}

export default React.memo(CodeCompareSection)
