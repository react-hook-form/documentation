import * as React from "react"
import CodeArea from "./CodeArea"
import useWatch from "./codeExamples/useWatch"
import useWatchTs from "./codeExamples/useWatchTs"
import generic from "../data/generic"
import typographyStyles from "../styles/typography.module.css"
import tableStyles from "../styles/table.module.css"

export default function UseFieldArray({
  api,
  currentLanguage,
}: {
  currentLanguage: string
  api: any
}) {
  return (
    <>
      <code className={typographyStyles.codeHeading}>
        <h2>
          useWatch:{" "}
          <span
            className={typographyStyles.typeText}
          >{`({ control?: any, name?: string, defaultValue?: any }) => object`}</span>
        </h2>
      </code>

      {api.useWatch.description}

      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>{generic.name[currentLanguage]}</th>
              <th>{generic.type[currentLanguage]}</th>
              <th width="90px">{generic.required[currentLanguage]}</th>
              <th>{generic.description[currentLanguage]}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>name</code>
              </td>
              <td>
                <code className={typographyStyles.typeText}>string</code>
              </td>
              <td></td>
              <td>{api.ErrorMessage.table.name}</td>
            </tr>
            <tr>
              <td>
                <code>control</code>
              </td>
              <td>
                <code className={typographyStyles.typeText}>Object</code>
              </td>
              <td></td>
              <td>{generic.control[currentLanguage]}</td>
            </tr>
            <tr>
              <td>
                <code>defaultValue</code>
              </td>
              <td>
                <code className={typographyStyles.typeText}>any</code>
              </td>
              <td></td>
              <td>
                default value for `useWatch` to return before the initial
                render.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <CodeArea
        rawData={useWatch}
        tsRawData={useWatchTs}
        url="https://codesandbox.io/s/react-hook-form-v6-usewatch-nxmlb"
      />
    </>
  )
}
