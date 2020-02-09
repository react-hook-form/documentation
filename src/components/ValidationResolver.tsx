import * as React from "react"
import CodeArea from "./CodeArea"
import validationResolver from "./codeExamples/validationResolver"
import typographyStyles from "../styles/typography.module.css"

export default function({ api }) {
  return (
    <>
      <code className={typographyStyles.codeHeading}>
        <h2>
          validationResolver:{" "}
          <span
            className={typographyStyles.typeText}
          >{`(values: any, validationContext?: object) => object`}</span>
        </h2>
      </code>

      {api.validationResolver.description}

      <CodeArea
        rawData={validationResolver}
        url="https://codesandbox.io/s/react-hook-form-validationresolver-b3phr"
      />
    </>
  )
}
