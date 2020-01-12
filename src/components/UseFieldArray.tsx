import * as React from "react"
import { CodeHeading, Table, TableWrapper } from "./ApiPage"
import { TypeText } from "../styles/typography"
import generic from "../data/generic"
import CodeArea from "./CodeArea"
import useFieldArray from "./codeExamples/useFieldArray"

export default function UseFieldArray({
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
          useFieldArray:{" "}
          <TypeText>{`({ control?: any, name: string }) => object`}</TypeText>
        </h2>
      </CodeHeading>

      {api.useFieldArray.description}

      <TableWrapper>
        <Table>
          <tbody>
            <tr>
              <th>{generic.name[currentLanguage]}</th>
              <th>{generic.type[currentLanguage]}</th>
              <th>{generic.description[currentLanguage]}</th>
            </tr>
            {api.useFieldArray.table}
          </tbody>
        </Table>
      </TableWrapper>

      <CodeArea
        rawData={useFieldArray}
        url="https://codesandbox.io/s/react-hook-form-usefieldarray-vy8fv"
      />
    </>
  )
}
