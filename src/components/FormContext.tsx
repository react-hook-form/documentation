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

      <p>
        This following table applied to <code>FormProvider</code>,{" "}
        <code>useFormContext</code> accepts no argument.
      </p>

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
                <code>FormProvider</code> requires all <code>useForm</code>{" "}
                methods.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {api.useFormContext.description}

      <h2 id={"rules"} className={typographyStyles.rulesTitle}>
        Rules
      </h2>

      <p>
        You need to wrap your form with the <code>FormProvider</code> component
        for <code>useFormContext</code> to work properly.
      </p>

      <h2 id={"example"} className={typographyStyles.subTitle}>
        Examples
      </h2>

      <CodeArea
        rawData={formContext}
        url="https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi"
      />
    </>
  )
}
