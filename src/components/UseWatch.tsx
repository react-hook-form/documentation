import * as React from "react"
import CodeArea from "./CodeArea"
import useWatch from "./codeExamples/useWatch"
import useWatchTs from "./codeExamples/useWatchTs"
import typographyStyles from "../styles/typography.module.css"

export default function UseFieldArray({
  api,
}: {
  currentLanguage: string
  api: any
}) {
  return (
    <>
      <code className={typographyStyles.codeHeading}>
        <h2>
          useWatch:{" "}
          <span
            className={typographyStyles.typeText}
          >{`({ control?: any, name?: string, defaultValue?: any }) => object`}</span>
        </h2>
      </code>

      {api.useWatch.description}

      <CodeArea
        rawData={useWatch}
        tsRawData={useWatchTs}
        url="https://codesandbox.io/s/react-hook-form-v6-usewatch-nxmlb"
      />
    </>
  )
}
