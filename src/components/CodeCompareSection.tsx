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

const GridView = styled.section`
  display: flex;
  flex-direction: column;
  
  & > div:first-child {
    order: 1;
  }
  
  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 40px;
    
    & > div:first-child {
      order: 0;
    }
  }
`

const props = {
  start: { transform: "translateY(100px)" },
  end: { transform: "translateY(0)" },
  easeType: "ease-in",
}

export default function CodeCompareSection({
  isPlayCodeCompare,
}: {
  isPlayCodeCompare: boolean
}) {
  return (
    <AnimateGroup play={isPlayCodeCompare}>
      <Section>
        <CenterContent>
          <H1>
            <code>{`</>`}</code> Library Code Comparison
          </H1>

          <p id="codeComparison">
            Reducing the amount of code that you have to write is one of the
            primary goals for React Hook Form. To illustrate that, let's look at
            a very simple form of validation among some of the most popular form
            validation libraries.
          </p>
        </CenterContent>

        <GridView
          style={{
            marginTop: 20,
          }}
        >
          <Animate {...props} sequenceIndex={0}>
            <Title>Formik</Title>
            <CodeArea rawData={formikCode} withOutCopy />
          </Animate>

          <Animate {...props} sequenceIndex={1}>
            <Title>React Hook Form</Title>
            <CodeArea
              style={{
                border: `1px solid ${colors.secondary}`,
              }}
              rawData={reactHookFormCode}
              withOutCopy
            />
          </Animate>

          <Animate {...props} sequenceIndex={2}>
            <Title>Redux Form</Title>
            <CodeArea rawData={reduxFormCode} withOutCopy />
          </Animate>
        </GridView>
      </Section>
    </AnimateGroup>
  )
}
