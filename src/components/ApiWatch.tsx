import * as React from "react"
import CodeArea from "./CodeArea"
import watchCode from "./codeExamples/watchCode"
import { CodeHeading, Table, TableWrapper } from "./ApiPage"
import { TypeText } from "../styles/typography"
import generic from "../data/generic"

export default function ApiWatch({
  currentLanguage,
  api,
}: {
  api: any
  currentLanguage: string
}) {
  return (
    <>
      <CodeHeading>
        <h2>
          watch:{" "}
          <TypeText>{`(names?: string | string[] | { nest : boolean }) => any`}</TypeText>
        </h2>
      </CodeHeading>

      {api.watch.description}

      <TableWrapper>
        <Table>
          <tbody>
            <tr>
              <th
                style={{
                  minWidth: 180,
                }}
              >
                {generic.type[currentLanguage]}
              </th>
              <th
                style={{
                  minWidth: 200,
                }}
              >
                {generic.description[currentLanguage]}
              </th>
              <th>{generic.example[currentLanguage]}</th>
              <th
                style={{
                  minWidth: 250,
                }}
              >
                {generic.return[currentLanguage]}
              </th>
            </tr>
            <tr>
              <td>
                <TypeText>string</TypeText>
              </td>
              <td>{api.watch.tableTitle.single}</td>
              <td>
                <code>watch('inputName')</code>
                <br />
                <code>watch('inputName', 'value')</code>
              </td>
              <td>
                <TypeText>{`string | string[] | { [key:string] : any } | undefined`}</TypeText>
              </td>
            </tr>
            <tr>
              <td>
                <TypeText>{`string[]`}</TypeText>
              </td>
              <td>{api.watch.tableTitle.multiple}</td>
              <td>
                <code>watch(['inputName1'])</code>
                <br />
                <code>{`watch(['field1'], { field1: '1' })`}</code>
              </td>
              <td>
                <TypeText>{`{ [key:string] : any }`}</TypeText>
              </td>
            </tr>
            <tr>
              <td>
                <TypeText>undefined</TypeText>
              </td>
              <td>{api.watch.tableTitle.all}</td>
              <td>
                <code>watch()</code>
                <br />
                <code>{`watch(undefined, { field: 'value1' })`}</code>
              </td>
              <td>
                <TypeText>{`{ [key:string] : any }`}</TypeText>
              </td>
            </tr>
            <tr>
              <td>
                <TypeText>{`{ nest: boolean }`}</TypeText>
              </td>
              <td>{api.watch.tableTitle.nest}</td>
              <td>
                <code>{`watch({ nest: true })`}</code>
              </td>
              <td>
                <TypeText>{`{ [key:string] : any }`}</TypeText>
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
