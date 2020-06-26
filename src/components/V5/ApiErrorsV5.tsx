import * as React from "react"
import CodeArea from "../CodeArea"
import errorCode from "../codeExamples/errorCode"
import errorCodeTs from "../codeExamples/errorCodeTs"
import generic from "../../data/generic"
import multipleErrorCode from "./codeExamples/multipleErrorCode"
import multipleErrorCodeTs from "./codeExamples/multipleErrorCodeTs"
import TabGroup from "../TabGroup"
import typographyStyles from "../../styles/typography.module.css"
import tableStyles from "../../styles/table.module.css"

export default React.memo(
  ({
    api,
    currentLanguage,
    goToSection,
  }: {
    api: any
    currentLanguage: string
    goToSection: (name: any, animate?: boolean) => void
  }) => {
    return (
      <>
        <code className={typographyStyles.codeHeading}>
          <h2>
            errors:{" "}
            <span
              className={typographyStyles.typeText}
            >{`Record<string, Object>`}</span>
          </h2>
        </code>

        {api.errors.description(currentLanguage)}

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <tbody>
              <tr>
                <th>{generic.name[currentLanguage]}</th>
                <th
                  style={{
                    minWidth: 250,
                  }}
                >
                  {generic.type[currentLanguage]}
                </th>
                <th>{generic.description[currentLanguage]}</th>
              </tr>
              <tr>
                <td>
                  <code>type</code>
                </td>
                <td>
                  <span className={typographyStyles.typeText}>string</span>
                </td>
                <td>
                  Error {generic.type[currentLanguage]}. eg: required, min, max,
                  minLength
                </td>
              </tr>
              <tr>
                <td>
                  <code>types</code>
                </td>
                <td>
                  <span
                    className={typographyStyles.typeText}
                  >{`Record<{ string, string | boolean }>`}</span>
                </td>
                <td>{api.errors.types}</td>
              </tr>
              <tr>
                <td>
                  <code>message</code>
                </td>
                <td>
                  <span className={typographyStyles.typeText}>
                    string | React.ReactElement
                  </span>
                </td>
                <td>{api.errors.message}</td>
              </tr>
              <tr>
                <td>
                  <code>ref</code>
                </td>
                <td>
                  <span className={typographyStyles.typeText}>
                    React.RefObject
                  </span>
                </td>
                <td>{api.errors.ref}</td>
              </tr>
            </tbody>
          </table>
          {api.errors.note(goToSection)}
        </div>

        <TabGroup buttonLabels={["First error detected", "Display all errors"]}>
          <CodeArea
            rawData={errorCode}
            tsRawData={errorCodeTs}
            url="https://codesandbox.io/s/react-hook-form-error-v5-4fkrm"
            tsUrl="https://codesandbox.io/s/react-hook-form-error-ts-v5-ih2h0"
          />
          <CodeArea
            rawData={multipleErrorCode}
            tsRawData={multipleErrorCodeTs}
            url="https://codesandbox.io/s/react-hook-form-validatecriteriamode-v5-w37ef"
            tsUrl="https://codesandbox.io/s/react-hook-form-validatecriteriamode-v5-ts-4zp8y"
          />
        </TabGroup>

        <hr />
      </>
    )
  }
)
