import * as React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism"
import { CodeHeading, Table, TableWrapper } from "./ApiPage"
import CodeArea from "./CodeArea"
import formContext from "./codeExamples/formContext"
import generic from "../data/generic"
import api from "../data/api"
import { CodeBlock, TypeText } from "../styles/typography"

export default function FormContext({ currentLanguage }: { currentLanguage }) {
  return (
    <>
      <CodeHeading>
        <h2>
          FormContext: <TypeText>Component</TypeText>
        </h2>
      </CodeHeading>

      {api.formContext[currentLanguage].introduction}

      <TableWrapper>
        <Table>
          <tbody>
            <tr>
              <th>{generic.name[currentLanguage]}</th>
              <th>{generic.type[currentLanguage]}</th>
              <th>{generic.description[currentLanguage]}</th>
            </tr>
            <tr>
              <td>
                <code>...props</code>
              </td>
              <td>
                <TypeText>Object</TypeText>
              </td>
              <td>
                Accept all <code>useForm</code> methods.
              </td>
            </tr>
          </tbody>
        </Table>
      </TableWrapper>

      {api.formContext[currentLanguage].description}

      <SyntaxHighlighter
        customStyle={{
          border: "none",
        }}
        style={xonokai}
        language={"jsx"}
      >
        const methods = useFormContext() // methods contain all useForm
        functions
      </SyntaxHighlighter>

      <CodeArea
        rawData={formContext}
        url="https://codesandbox.io/s/sad-sutherland-zvfok"
      />
    </>
  )
}
