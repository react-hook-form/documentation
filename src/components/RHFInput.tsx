import * as React from "react"
import { CodeHeading } from "./ApiPage"
import CodeArea from "./CodeArea"
import { TypeText } from "../styles/typography"
import api from "../data/api"
import rhfInput from "./codeExamples/RHFInput"

export default function RHFInput({
  currentLanguage,
}: {
  currentLanguage: string
}) {
  return (
    <>
      <CodeHeading>
        <h2>
          RHFInput: <TypeText>Component</TypeText>
        </h2>
      </CodeHeading>

      {api.RHFInput[currentLanguage].description}

      <CodeArea
        rawData={rhfInput}
        url="https://codesandbox.io/s/react-hook-form-hookforminput-rzu9s"
      />
    </>
  )
}
