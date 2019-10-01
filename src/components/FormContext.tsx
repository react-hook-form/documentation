import * as React from 'react';
import {CodeHeading, Table, TableWrapper, Type} from "./ApiPage";
import CodeArea from "./CodeArea";
import formContext from "./codeExamples/formContext";
import {Note} from "../styles/typography";

export default function FormContext() {
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

    <p>Once your form is wrapped with <code>FormContext</code>, <code>useFormContext</code>: <Type>Function</Type> can be invoked in its child component.</p>
    <p><Note>Note:</Note> invoke <code>useFormContext</code> will give you all the <code>useForm</code> hook functions.</p>
    <p><code style={{ fontSize: 14 }}>{`const methods = useFormContext() // methods contain all useForm functions`}</code></p>

    <CodeArea
      rawData={formContext}
      url="https://codesandbox.io/s/sad-sutherland-zvfok"
    />
  </>
}
