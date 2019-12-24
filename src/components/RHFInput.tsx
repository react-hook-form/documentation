import * as React from "react"
import { CodeHeading, Table, TableWrapper } from "./ApiPage"
import CodeArea from "./CodeArea"
import { TypeText } from "../styles/typography"
import rhfInput from "./codeExamples/RHFInput"
import generic from "../data/generic"

export default function RHFInput({
  currentLanguage,
  api,
}: {
  currentLanguage: string
  api: any
}) {
  return (
    <>
      <CodeHeading>
        <h2>
          Controller: <TypeText>Component</TypeText>
        </h2>
      </CodeHeading>

      {api.Controller.description}

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
                <code>name</code>
              </td>
              <td>
                <TypeText>string</TypeText>
              </td>
              <td>Unique name of your input.</td>
            </tr>
            <tr>
              <td>
                <code>control</code>
              </td>
              <td>
                <TypeText>Object</TypeText>
              </td>
              <td>
                <code>control</code> object is from invoking{" "}
                <code>useForm</code>.
              </td>
            </tr>
            <tr>
              <td>
                <code>rules</code>
              </td>
              <td>
                <TypeText>Object</TypeText>
              </td>
              <td>Validation rules according to register at React Hook Form</td>
            </tr>
            <tr>
              <td>
                <code>onChangeName</code>
              </td>
              <td>
                <TypeText>string</TypeText>
              </td>
              <td>
                This prop allow you to target that specific event name, eg: when
                <code>onChange</code> event is named <code>onTextChange</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>onBlurName</code>
              </td>
              <td>
                <TypeText>string</TypeText>
              </td>
              <td>
                This prop allow you to target that specific event name, eg: when
                <code>onBlur</code> event is named <code>onTextBlur</code>
              </td>
            </tr>
          </tbody>
        </Table>
      </TableWrapper>

      <CodeArea
        rawData={rhfInput}
        url="https://codesandbox.io/s/react-hook-form-hookforminput-rzu9s"
      />
    </>
  )
}
