import * as React from "react"
import { TypeText } from "../styles/typography"
import { CodeHeading, Table, TableWrapper } from "./ApiPage"
import generic from "../data/generic"

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
              <th>{generic.description[currentLanguage]}</th>
            </tr>
          </thead>
          {api.ErrorMessage.table}
        </Table>
      </TableWrapper>
    </div>
  )
}
