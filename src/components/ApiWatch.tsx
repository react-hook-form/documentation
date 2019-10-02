import * as React from "react"
import CodeArea from "./CodeArea"
import watchCode from "./codeExamples/watchCode"
import { CodeHeading, Table, TableWrapper, Type } from "./ApiPage"

export default function ApiWatch() {
  return (
    <>
      <CodeHeading>
        <h2>watch</h2>
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
                  minWidth: 200,
                }}
              >
                Description
              </th>
              <th>Example</th>
              <th
                style={{
                  minWidth: 250,
                }}
              >
                Return
              </th>
            </tr>
            <tr>
              <td>
                <Type>string</Type>
              </td>
              <td>
                Watch input value by name (similar to lodash{" "}
                <a href="https://lodash.com/docs/4.17.15#get">get</a> function)
              </td>
              <td>
                <code>watch('inputName')</code>
                <br />
                <code>watch('inputName', 'value')</code>
              </td>
              <td>
                <Type>{`string | string[] | { [key:string] : any } | undefined`}</Type>
              </td>
            </tr>
            <tr>
              <td>
                <Type>{`string[]`}</Type>
              </td>
              <td>Watch multiple inputs</td>
              <td>
                <code>watch(['inputName1'])</code>
                <br />
                <code>{`watch(['field1'], { field1: '1' })`}</code>
              </td>
              <td>
                <Type>{`{ [key:string] : any }`}</Type>
              </td>
            </tr>
            <tr>
              <td>
                <Type>undefined</Type>
              </td>
              <td>Watch all inputs</td>
              <td>
                <code>watch()</code>
                <br />
                <code>{`watch(undefined, { field: 'value1' })`}</code>
              </td>
              <td>
                <Type>{`{ [key:string] : any }`}</Type>
              </td>
            </tr>
          </tbody>
        </Table>
      </TableWrapper>
      <CodeArea rawData={watchCode} url="https://codesandbox.io/s/pp1l40q7wx" />

      <hr />
    </>
  )
}
