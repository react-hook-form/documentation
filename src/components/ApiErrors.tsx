import * as React from "react"
import CodeArea from "./CodeArea"
import errorCode from "./codeExamples/errorCode"
import { CodeHeading, Table, TableWrapper } from "./ApiPage"
import { TypeText } from "../styles/typography"

export default React.memo(() => {
  return (
    <>
      <CodeHeading>
        <h2>
          errors: <TypeText>{`Record<string, boolean>`}</TypeText>
        </h2>
      </CodeHeading>

      <p>
        Object contains form errors or error messages which belong to each
        input.
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
                <TypeText>string</TypeText>
              </td>
              <td>Error types. eg: required, min, max, minLength</td>
            </tr>
            <tr>
              <td>
                <code>message</code>
              </td>
              <td>
                <TypeText>string</TypeText>
              </td>
              <td>
                Message is an empty string by default. However, if you register
                validation with error message, then it will be returned.
              </td>
            </tr>
            <tr>
              <td>
                <code>ref</code>
              </td>
              <td>
                <TypeText>React.RefObject</TypeText>
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
