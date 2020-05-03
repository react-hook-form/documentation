import * as React from "react"
import CodeArea from "./CodeArea"
import validationResolver from "./codeExamples/validationResolver"
import validationResolverTs from "./codeExamples/validationResolverTs"
import typographyStyles from "../styles/typography.module.css"
import Popup from "./Popup"

export default function({ api }) {
  return (
    <>
      <h5 className={typographyStyles.h5} style={{ marginTop: 20 }}>
        <code>
          validationResolver:{" "}
          <span className={typographyStyles.typeText}>
            {`(values: any, validationContext?: object) => object`}
          </span>
        </code>
      </h5>

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
