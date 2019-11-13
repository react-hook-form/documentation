import * as React from "react"
import CodeArea from "./CodeArea"
import errorCode from "./codeExamples/errorCode"
import { CodeHeading, Table, TableWrapper } from "./ApiPage"
import { TypeText } from "../styles/typography"
import api from "../data/api"
import generic from "../data/generic"
import multipleErrorCode from "./codeExamples/multipleErrorCode"
import TabGroup from "./TabGroup"

export default React.memo(
  ({ currentLanguage }: { currentLanguage: string }) => {
    return (
      <>
        <CodeHeading>
          <h2>
            errors: <TypeText>{`Record<string, Object>`}</TypeText>
          </h2>
        </CodeHeading>

        {api.errors[currentLanguage].description(currentLanguage)}

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
                  <TypeText>string</TypeText>
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
                  <TypeText>{`Record<{ string, string | boolean }>`}</TypeText>
                </td>
                <td>
                  This is useful for input validation like rules of password,
                  which multiple errors need to return for a single field. To
                  enable this feature, make sure you have set{" "}
                  <code>validateCriteriaMode: 'all'</code>.
                </td>
              </tr>
              <tr>
                <td>
                  <code>message</code>
                </td>
                <td>
                  <TypeText>string</TypeText>
                </td>
                <td>{api.errors[currentLanguage].message}</td>
              </tr>
              <tr>
                <td>
                  <code>ref</code>
                </td>
                <td>
                  <TypeText>React.RefObject</TypeText>
                </td>
                <td>{api.errors[currentLanguage].ref}</td>
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
