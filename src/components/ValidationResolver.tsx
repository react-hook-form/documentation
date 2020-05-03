import * as React from "react"
import CodeArea from "./CodeArea"
import validationResolver from "./codeExamples/validationResolver"
import validationResolverTs from "./codeExamples/validationResolverTs"
import typographyStyles from "../styles/typography.module.css"
import TabGroup from "./TabGroup"
import validationSchema from "./codeExamples/validationSchema"
import validationSchemaTs from "./codeExamples/validationSchemaTs"

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

      <TabGroup buttonLabels={["Yup", "Custom"]}>
        <CodeArea rawData={validationSchema} tsRawData={validationSchemaTs} />
        <CodeArea
          rawData={validationResolver}
          tsRawData={validationResolverTs}
          url="https://codesandbox.io/s/react-hook-form-validationresolver-b3phr"
          tsUrl="https://codesandbox.io/s/react-hook-form-validationresolver-with-validationcontext-28pde?file=/src/App.tsx"
        />
      </TabGroup>
    </>
  )
}
