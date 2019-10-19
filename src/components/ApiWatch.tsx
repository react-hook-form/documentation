import * as React from "react"
import CodeArea from "./CodeArea"
import watchCode from "./codeExamples/watchCode"
import { CodeHeading, Table, TableWrapper } from "./ApiPage"
import { TypeText } from "../styles/typography"
import api from "../data/api"
import generic from "../data/generic"

export default function ApiWatch({
  currentLanguage,
}: {
  currentLanguage: string
}) {
  return (
    <>
      <CodeHeading>
        <h2>watch</h2>
      </CodeHeading>

      {api.watch[currentLanguage].description}

      <TableWrapper>
        <Table>
          <tbody>
            <tr>
              <th>{generic.type[currentLanguage]}</th>
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
              <td>{api.watch[currentLanguage].tableTitle.single}</td>
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
              <td>{api.watch[currentLanguage].tableTitle.multiple}</td>
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
              <td>{api.watch[currentLanguage].tableTitle.all}</td>
              <td>
                <code>watch()</code>
                <br />
                <code>{`watch(undefined, { field: 'value1' })`}</code>
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
