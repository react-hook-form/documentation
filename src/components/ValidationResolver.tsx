import * as React from "react"
import CodeArea from "./CodeArea"
import validationResolver from "./codeExamples/validationResolver"
import validationResolverTs from "./codeExamples/validationResolverTs"
import typographyStyles from "../styles/typography.module.css"

export default function ({ api }) {
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
        tsRawData={validationResolverTs}
        url="https://codesandbox.io/s/react-hook-form-validationresolver-b3phr"
        tsUrl="https://codesandbox.io/s/react-hook-form-validationresolver-with-validationcontext-28pde?file=/src/App.tsx"
      />
    </>
  )
}
