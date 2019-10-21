import * as React from "react"
import styled from "styled-components"
import { Title, H1 } from "../styles/typography"
import formikCode from "./codeExamples/formikCode"
import reactHookFormCode from "./codeExamples/reactHookFormCode"
import reduxFormCode from "./codeExamples/reduxFormCode"
import { CenterContent, Section } from "../styles/containers"
import CodeArea from "./CodeArea"
import { AnimateGroup, Animate } from "react-simple-animate"
import colors from "../styles/colors"
import home from "../data/home"

const GridView = styled.section`
  display: flex;
  flex-direction: column;

  & > div:first-child {
    order: 1;
  }

  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 40px;

    & > div:first-child {
      order: 0;
    }
  }
`

const FullScreen = styled.button`
  background: none;
  color: white;
  position: absolute;
  z-index: 1;
  right: 0;
  font-size: 12px;
  border-top: none;
  border-right: none;
  border-color: ${colors.secondary};
  border-bottom-left-radius: 4px;
  display: none;

  &:hover {
    background: ${colors.lightPink};
  }

  @media (min-width: 1000px) {
    display: block;
  }
`

const props = {
  start: { transform: "translateY(100px)" },
  end: { transform: "translateY(0)" },
  easeType: "ease-in",
}

export default function CodeCompareSection({
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
          <H1>
            {home.codeComparison[currentLanguage].title}
          </H1>

          <p id="codeComparison">
            {home.codeComparison[currentLanguage].description}
          </p>
        </CenterContent>

        <GridView
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
                <FullScreen onClick={() => setFullScreen(!showFullScreen)}>
                  {showFullScreen ? "Show Comparison" : "Full Screen"}
                </FullScreen>
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
        </GridView>
      </Section>
    </AnimateGroup>
  )
}
