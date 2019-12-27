import * as React from "react"
import { TypeText } from "../styles/typography"
import { CodeHeading, Table, TableWrapper } from "./ApiPage"
import generic from "../data/generic"
import errorMessage from "./codeExamples/errorMessage"
import CodeArea from "./CodeArea"

export default ({
  api,
  currentLanguage,
}: {
  api: any
  currentLanguage: string
}) => {
  return (
    <div>
      <CodeHeading>
        <h2>
          ErrorMessage: <TypeText>Component</TypeText>
        </h2>
      </CodeHeading>

      {api.ErrorMessage.description}

      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <th>{generic.name[currentLanguage]}</th>
              <th>{generic.type[currentLanguage]}</th>
              <th width="90px">{generic.required[currentLanguage]}</th>
              <th>{generic.description[currentLanguage]}</th>
            </tr>
          </thead>
          {api.ErrorMessage.table}
        </Table>
      </TableWrapper>

      <CodeArea
        rawData={errorMessage}
        url="https://codesandbox.io/s/react-hook-form-errormessage-pc2b6"
      />
    </div>
  )
}
