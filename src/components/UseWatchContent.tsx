import * as React from "react"
import CodeArea from "./CodeArea"
import useWatch from "./codeExamples/useWatch"
import useWatchTs from "./codeExamples/useWatchTs"
import generic from "../data/generic"
import typographyStyles from "../styles/typography.module.css"
import tableStyles from "../styles/table.module.css"
import TabGroup from "./TabGroup"
import useWatchFieldArray from "./codeExamples/useWatchFieldArray"

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
          >{`({ control?: Control, name?: string, defaultValue?: any }) => object`}</span>
        </h2>
      </code>

      {api.useWatch.description}

      <h2 className={typographyStyles.subTitle}>Props</h2>

      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>{generic.name[currentLanguage]}</th>
              <th>{generic.type[currentLanguage]}</th>
              {/*<th width="90px">{generic.required[currentLanguage]}</th>*/}
              <th>{generic.description[currentLanguage]}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>name</code>
              </td>
              <td>
                <code className={typographyStyles.typeText}>
                  string | string[]
                </code>
              </td>
              <td>{api.ErrorMessage.table.name}</td>
            </tr>
            <tr>
              <td>
                <code>control</code>
              </td>
              <td>
                <code className={typographyStyles.typeText}>Object</code>
              </td>
              <td>{generic.control[currentLanguage]}</td>
            </tr>
            <tr>
              <td>
                <code>defaultValue</code>
              </td>
              <td>
                <code className={typographyStyles.typeText}>any</code>
              </td>
              <td>
                default value for <code>useWatch</code> to return before the
                initial render.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <TabGroup buttonLabels={["Form", "Advance Field Array"]}>
        <CodeArea
          rawData={useWatch}
          url="https://codesandbox.io/s/react-hook-form-v7-usewatch-forked-9872t"
          tsRawData={useWatchTs}
          tsUrl="https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e"
        />
        <CodeArea
          rawData={useWatchFieldArray}
          url="https://codesandbox.io/s/watchusewatch-calc-4tpnh"
        />
      </TabGroup>

      <h2 className={typographyStyles.subTitle}>Tips</h2>

      <ul>
        <li>
          <p>
            The initial return value from <code>useWatch</code> will always
            return what's inside of <code>defaultValue</code> or{" "}
            <code>defaultValues</code> from <code>useForm</code>.
          </p>
        </li>
        <li>
          The only different between <code>useWatch</code> and{" "}
          <cocde>watch</cocde> is at root level or component level update.
        </li>
      </ul>
    </>
  )
}
