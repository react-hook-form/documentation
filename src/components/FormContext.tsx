import * as React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism"
import CodeArea from "./CodeArea"
import formContext from "./codeExamples/formContext"
import generic from "../data/generic"
import typographyStyles from "../styles/typography.module.css"
import tableStyles from "../styles/table.module.css"

export default function FormContext({ currentLanguage, api }) {
  return (
    <>
      <div className={typographyStyles.codeHeading}>
        <h2>
          useFormContext:{" "}
          <code className={typographyStyles.typeText}>Component</code>
        </h2>
      </div>

      {api.useFormContext.introduction}

      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table}>
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
                <code className={typographyStyles.typeText}>Object</code>
              </td>
              <td>
                Accept all <code>useForm</code> methods.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {api.useFormContext.description}

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
