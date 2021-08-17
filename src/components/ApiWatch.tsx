import * as React from "react"
import CodeArea from "./CodeArea"
import watchCode from "./codeExamples/watchCode"
import watchCodeTs from "./codeExamples/watchCodeTs"
import generic from "../data/generic"
import * as typographyStyles from "../styles/typography.module.css"
import * as tableStyles from "../styles/table.module.css"
import TabGroup from "./TabGroup"
import watchFieldArrayCode from "./codeExamples/watchFieldArrayCode"

export default function ApiWatch({
  currentLanguage,
  api,
}: {
  api: any
  currentLanguage: string
}) {
  return (
    <>
      <code className={typographyStyles.codeHeading}>
        <h2>
          watch:{" "}
          <span
            className={typographyStyles.typeText}
          >{`(names?: string | string[] | (data, options) => void) => unknown`}</span>
        </h2>
      </code>

      {api.watch.description}

      <h2 className={typographyStyles.subTitle}>Return</h2>

      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table}>
          <tbody>
            <tr>
              <th
                style={{
                  minWidth: 180,
                }}
              >
                {generic.type[currentLanguage]}
              </th>
              <th
                style={{
                  minWidth: 200,
                }}
              >
                {generic.description[currentLanguage]}
              </th>
              <th
                style={{
                  minWidth: 340,
                }}
              >
                {generic.example[currentLanguage]}
              </th>
              <th
                style={{
                  minWidth: 180,
                }}
              >
                {generic.return[currentLanguage]}
              </th>
            </tr>
            <tr>
              <td>
                <code className={typographyStyles.typeText}>string</code>
              </td>
              <td>{api.watch.tableTitle.single}</td>
              <td>
                <code>watch('inputName')</code>
                <br />
                <code>watch('inputName', 'value')</code>
              </td>
              <td>
                <code className={typographyStyles.typeText}>{`any`}</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className={typographyStyles.typeText}>{`string[]`}</code>
              </td>
              <td>{api.watch.tableTitle.multiple}</td>
              <td>
                <code>watch(['inputName1'])</code>
                <br />
                <code>{`watch(['field1'], { field1: '1' })`}</code>
              </td>
              <td>
                <code className={typographyStyles.typeText}>{`unknown[]`}</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className={typographyStyles.typeText}>undefined</code>
              </td>
              <td>{api.watch.tableTitle.all}</td>
              <td>
                <code>watch()</code>
                <br />
                <code>{`watch(undefined, { field: '1' })`}</code>
              </td>
              <td>
                <code
                  className={typographyStyles.typeText}
                >{`{[key:string]: any}`}</code>
              </td>
            </tr>
            <tr>
              <td>
                <code
                  className={typographyStyles.typeText}
                >{`(data: unknown, { name: string, type: string }) => void`}</code>
              </td>
              <td>{api.watch.tableTitle.callback}</td>
              <td>
                <code>{`watch((data, { name, type }) => console.log(data, name, type))`}</code>
              </td>
              <td>
                <code
                  className={typographyStyles.typeText}
                >{`{ unsubscribe: () => void }`}</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <TabGroup buttonLabels={["Form", "Advance Field Array"]}>
        <CodeArea
          rawData={watchCode}
          tsRawData={watchCodeTs}
          url="https://codesandbox.io/s/react-hook-form-watch-v7-qbxd7"
          tsUrl="https://codesandbox.io/s/react-hook-form-watch-v7-ts-8et1d"
        />
        <CodeArea
          rawData={watchFieldArrayCode}
          url="https://codesandbox.io/s/watch-with-usefieldarray-e2d64"
        />
      </TabGroup>

      <hr />
    </>
  )
}
