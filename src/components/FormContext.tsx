import * as React from "react"
import { CodeHeading, Table, TableWrapper, Type } from "./ApiPage"
import CodeArea from "./CodeArea"
import formContext from "./codeExamples/formContext"
import generic from "../data/generic"
import api from "../data/api"

export default function FormContext({ currentLanguage }: { currentLanguage }) {
  return (
    <>
      <CodeHeading>
        <h2>
          FormContext: <Type>Component</Type>
        </h2>
      </CodeHeading>

      {api.FormContext[currentLanguage].introduction}

      <TableWrapper>
        <Table>
          <tbody>
            <tr>
              <th>{generic.name[currentLanguage]}</th>
              <th>{generic.type[currentLanguage]}</th>
              <th>{generic.description[currentLanguage]}</th>
            </tr>
            <tr>
              <td>
                <code>...props</code>
              </td>
              <td>
                <Type>Object</Type>
              </td>
              <td>
                Accept all <code>useForm</code> methods.
              </td>
            </tr>
          </tbody>
        </Table>
      </TableWrapper>

      {api.FormContext[currentLanguage].description}

      <p>
        <code
          style={{ fontSize: 14 }}
        >{`const methods = useFormContext() // methods contain all useForm functions`}</code>
      </p>

      <CodeArea
        rawData={formContext}
        url="https://codesandbox.io/s/sad-sutherland-zvfok"
      />
    </>
  )
}
