import * as React from "react"
import CodeArea from "./CodeArea"
import formContext from "./codeExamples/formContext"
import generic from "../data/generic"
import * as typographyStyles from "../styles/typography.module.css"
import * as tableStyles from "../styles/table.module.css"

export default function FormContext({ currentLanguage, api }) {
  return (
    <>
      <code className={typographyStyles.codeHeading}>
        <h2>
          useFormContext:{" "}
          <span className={typographyStyles.typeText}>Function</span>
        </h2>
      </code>

      {api.useFormContext.introduction}

      <h2 className={typographyStyles.subTitle}>Props</h2>

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

      <CodeArea
        rawData={formContext}
        url="https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi"
      />
    </>
  )
}
