import * as React from 'react';
import {CodeHeading, Table, TableWrapper, Type} from "./ApiPage";
import SyntaxHighlighterWithCopy from "./SyntaxHighlighterWithCopy";
import formContext from "./codeExamples/formContext";

export default function FormContext({tabIndex}: any) {
  return <>
    <CodeHeading>
      <h2>
        FormContext: <Type>Component</Type>
      </h2>
    </CodeHeading>
    <p>Form context is aim to solve problem when there are deep nested inputs in your components tree,
      and pass methods deep down as <code>prop</code> becoming painful.</p>

    <TableWrapper>
      <Table>
        <tbody>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>
            <code>...props</code>
          </td>
          <td>
            <Type>Object</Type>
          </td>
          <td>Accept all <code>useForm</code> methods.</td>
        </tr>
        </tbody>
      </Table>
    </TableWrapper>

    <p>Once your form is wrapped with <code>FormContext</code>, <code>useFormContext</code>: <Type>Function</Type> can be invoked in its child component to retrieve all <code>useForm</code> functions.</p>

    <SyntaxHighlighterWithCopy
      tabIndex={tabIndex}
      rawData={formContext}
      url="https://codesandbox.io/s/sad-sutherland-zvfok"
    />
  </>
}
