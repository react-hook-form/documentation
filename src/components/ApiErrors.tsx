import * as React from "react"
import CodeArea from "./CodeArea"
import errorCode from "./codeExamples/errorCode"
import { CodeHeading, Table, TableWrapper } from "./ApiPage"
import generic from "../data/generic"
import multipleErrorCode from "./codeExamples/multipleErrorCode"
import TabGroup from "./TabGroup"
import typographyStyles from "../styles/typography.module.css"

export default React.memo(
  ({ api, currentLanguage }: { api: any; currentLanguage: string }) => {
    return (
      <>
        <CodeHeading>
          <h2>
            errors:{" "}
            <span
              className={typographyStyles.typeText}
            >{`Record<string, Object>`}</span>
          </h2>
        </CodeHeading>

        {api.errors.description(currentLanguage)}

        <TableWrapper>
          <Table>
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
                  <span className={typographyStyles.typeText}>string</span>
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
          </Table>
        </TableWrapper>

        <TabGroup buttonLabels={["First error detected", "Display all errors"]}>
          <CodeArea
            rawData={errorCode}
            url="https://codesandbox.io/s/nrr4n9p8n4"
          />
          <CodeArea
            rawData={multipleErrorCode}
            url="https://codesandbox.io/s/react-hook-form-errors-validatecriteriamode-all-5l2lm"
          />
        </TabGroup>

        <hr />
      </>
    )
  }
)
