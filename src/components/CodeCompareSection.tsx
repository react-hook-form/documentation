import * as React from 'react'
import { Title, H1 } from '../styles/typography'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { xonokai } from 'react-syntax-highlighter/dist/styles/prism'
import styled from 'styled-components'
import formikCode from './codeExamples/formikCode'
import reactHookFormCode from './codeExamples/reactHookFormCode'
import reduxFormCode from './codeExamples/reduxFormCode'
import { CenterContent } from '../styles/containers'

const GridView = styled.section`
  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 40px;
  }
`

const Root = styled.div`
  margin-bottom: 40px;
`;

export default function CodeCompareSection() {
  return (
    <Root>
      <CenterContent>
        <H1>
          <code>{`</>`}</code> Library Code Comparison
        </H1>

        <p>
          Reducing the amount of code that you have to write is one of the primary goals for React Hook Form. To
          illustrate that, let's look at a very simple form of validation among some of the most popular form validation
          libraries.
        </p>
      </CenterContent>

      <GridView>
        <section>
          <Title>Formik</Title>
          <SyntaxHighlighter
            customStyle={{
              border: 'none',
            }}
            style={xonokai}
            language={'jsx'}
          >
            {formikCode}
          </SyntaxHighlighter>
        </section>

        <section>
          <Title>
            React Hook Form
          </Title>
          <SyntaxHighlighter
            customStyle={{
              border: 'none',
            }}
            style={xonokai}
            language={'jsx'}
          >
            {reactHookFormCode}
          </SyntaxHighlighter>
        </section>

        <section>
          <Title>Redux Form</Title>
          <SyntaxHighlighter
            customStyle={{
              border: 'none',
            }}
            style={xonokai}
            language={'jsx'}
          >
            {reduxFormCode}
          </SyntaxHighlighter>
        </section>
      </GridView>
    </Root>
  )
}
