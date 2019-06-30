import * as React from 'react'
import SyntaxHighlighterWithCopy from './SyntaxHighlighterWithCopy'
import watchCode from './codeExamples/watchCode'
import { CodeHeading, Table, TableWrapper, Type } from './ApiPage'

export default function ApiWatch({ tabIndex }: any) {
  return (
    <>
      <CodeHeading>
        <h2>
          watch: <Type>(string | string[] | undefined) => any</Type>
        </h2>
      </CodeHeading>
      <p>
        This will watch specified input and return its value. first-time run <code>watch</code> will always return{' '}
        <code>undefined</code> because called before <code>render</code>, but you can set the default value as the second
        argument.
      </p>
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
                <code>watch('inputName');</code><br />
                <code>watch('inputName', 'value'); // with default value</code>
              </td>
            </tr>
            <tr>
              <td>
                <Type>{`string[]`}</Type>
              </td>
              <td>Watch multiple inputs over the form</td>
              <td>
                <code>watch(['inputName1', 'inputName2']);</code><br />
                <code>{`watch(['field1', 'field2'], { field1: '1', field2: '2'}); // with default value`}</code>
              </td>
            </tr>
            <tr>
              <td>
                <Type>undefined</Type>
              </td>
              <td>Watch every input fields in the form</td>
              <td>
                <code>watch();</code><br />
                <code>{`watch(undefined, { field: 'value1' }); // with default value`}</code>
              </td>
            </tr>
          </tbody>
        </Table>
      </TableWrapper>
      <SyntaxHighlighterWithCopy tabIndex={tabIndex} rawData={watchCode} url="https://codesandbox.io/s/pp1l40q7wx" />

      <hr />
    </>
  )
}
