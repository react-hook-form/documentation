import * as React from "react"
import CodeArea from "./CodeArea"
import errorCode from "./codeExamples/errorCode"
import { CodeHeading, Table, TableWrapper } from "./ApiPage"
import { Note, TypeText } from "../styles/typography"
import { Link } from "gatsby"
import translateLink from "./logic/translateLink"
import api from "../data/api"
import generic from "../data/generic"

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
                <th>{generic.type[currentLanguage]}</th>
                <th
                  style={{
                    minWidth: 300,
                  }}
                >
                  {generic.description[currentLanguage]}
                </th>
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

        <CodeArea
          rawData={errorCode}
          url="https://codesandbox.io/s/nrr4n9p8n4"
        />

        <hr />
      </>
    )
  }
)
