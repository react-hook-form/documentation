import * as React from "react"
import CodeArea from "./CodeArea"
import errorCode from "./codeExamples/errorCode"
import { CodeHeading, Table, TableWrapper, Type } from "./ApiPage"

export default React.memo(() => {
  return (
    <>
      <CodeHeading>
        <h2>
          errors: <Type>{`Record<string, boolean>`}</Type>
        </h2>
      </CodeHeading>

      <p>
        Object contain form errors or error messages which belong to each input.
      </p>

      <TableWrapper>
        <Table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th
                style={{
                  minWidth: 300,
                }}
              >
                Description
              </th>
            </tr>
            <tr>
              <td>
                <code>type</code>
              </td>
              <td>
                <Type>string</Type>
              </td>
              <td>Error types. eg: required, min, max, minLength</td>
            </tr>
            <tr>
              <td>
                <code>message</code>
              </td>
              <td>
                <Type>string</Type>
              </td>
              <td>
                Message is empty string by default. However, if you register
                validation with error message, then it will be returned.
              </td>
            </tr>
            <tr>
              <td>
                <code>ref</code>
              </td>
              <td>
                <Type>React.RefObject</Type>
              </td>
              <td>Reference for your input element.</td>
            </tr>
          </tbody>
        </Table>
      </TableWrapper>

      <CodeArea rawData={errorCode} url="https://codesandbox.io/s/nrr4n9p8n4" />

      <hr />
    </>
  )
})
