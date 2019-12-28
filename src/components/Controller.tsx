import * as React from "react"
import { CodeHeading, Table, TableWrapper } from "./ApiPage"
import CodeArea from "./CodeArea"
import { TypeText } from "../styles/typography"
import rhfInput from "./codeExamples/RHFInput"
import reactNativeController from "./codeExamples/reactNativeController"
import generic from "../data/generic"
import TabGroup from "./TabGroup"

export default function Controller({
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
          <thead>
            <tr>
              <th>{generic.name[currentLanguage]}</th>
              <th width="150px">{generic.type[currentLanguage]}</th>
              <th width="90px">{generic.required[currentLanguage]}</th>
              <th>{generic.description[currentLanguage]}</th>
            </tr>
          </thead>
          {api.Controller.table}
        </Table>
      </TableWrapper>
      <TabGroup buttonLabels={["Web", "React Native"]}>
        <CodeArea
          rawData={rhfInput}
          url="https://codesandbox.io/s/react-hook-form-hookforminput-rzu9s"
        />
        <CodeArea rawData={reactNativeController} />
      </TabGroup>
    </>
  )
}
