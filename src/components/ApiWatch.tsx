import * as React from "react"
import SyntaxHighlighterWithCopy from "./SyntaxHighlighterWithCopy"
import watchCode from "./codeExamples/watchCode"
import { CodeHeading, Table, TableWrapper, Type } from "./ApiPage"

export default function ApiWatch({ tabIndex }: any) {
  return (
    <>
      <CodeHeading>
        <h2>
          watch: <Type>(string | string[] | undefined) => {`{ [key:string] : any }`}</Type>
        </h2>
      </CodeHeading>
      <p>This will watch specified input/inputs and return its value.</p>
      <ul>
        <li>
          <p>
            When <code>defaultValue</code> is not defined, first render{" "}
            <code>watch</code> will return <code>undefined</code> because called
            before <code>register</code>, but you can set the{" "}
            <code>defaultValue</code> as the second argument to return value.
          </p>
        </li>
        <li>
          <p>
            However, if <code>defaultValues</code> was initialised in{" "}
            <code>useForm</code> as argument, then first render will return
            what's provided in <code>defaultValues</code>.
          </p>
        </li>
      </ul>
      <TableWrapper>
        <Table>
          <tbody>
            <tr>
              <th>Type</th>
              <th
                style={{
                  minWidth: 300,
                }}
              >
                Description
              </th>
              <th>Example</th>
            </tr>
            <tr>
              <td>
                <Type>string</Type>
              </td>
              <td>Watch on individual input</td>
              <td>
                <code>
                  watch('inputName') // watch individual field or array fields
                  via name as index
                </code>
                <br />
                <code>watch('inputName', 'value') // with default value</code>
              </td>
            </tr>
            <tr>
              <td>
                <Type>{`string[]`}</Type>
              </td>
              <td>Watch multiple inputs over the form</td>
              <td>
                <code>watch(['inputName1', 'inputName2'])</code>
                <br />
                <code>{`watch(['field1', 'field2'], { field1: '1', field2: '2'}); // with default value`}</code>
              </td>
            </tr>
            <tr>
              <td>
                <Type>undefined</Type>
              </td>
              <td>Watch every input fields in the form</td>
              <td>
                <code>watch()</code>
                <br />
                <code>{`watch(undefined, { field: 'value1' }); // with default value`}</code>
              </td>
            </tr>
          </tbody>
        </Table>
      </TableWrapper>
      <SyntaxHighlighterWithCopy
        tabIndex={tabIndex}
        rawData={watchCode}
        url="https://codesandbox.io/s/pp1l40q7wx"
      />

      <hr />
    </>
  )
}
