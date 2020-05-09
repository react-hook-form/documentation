import * as React from "react"
import CodeArea from "./CodeArea"
import validationResolver from "./codeExamples/validationResolver"
import joiResolver from "./codeExamples/joiResolver"
import superStructResolver from "./codeExamples/superStructResolver"
import validationResolverTs from "./codeExamples/validationResolverTs"
import TabGroup from "./TabGroup"
import validationSchema from "./codeExamples/validationSchema"
import validationSchemaTs from "./codeExamples/validationSchemaTs"
import typographyStyles from "../styles/typography.module.css"

export default function ({ api }) {
  return (
    <>
      <h5 className={typographyStyles.h5} style={{ marginTop: 20 }}>
        <code>
          resolver:{" "}
          <span className={typographyStyles.typeText}>
            {`(values: any, validationContext?: object) => { values: object, errors: object }`}
          </span>
        </code>
      </h5>

      {api.resolver.description}

      <TabGroup buttonLabels={["Yup", "Joi", "Superstruct", "Custom"]}>
        <CodeArea rawData={validationSchema} tsRawData={validationSchemaTs} />
        <CodeArea rawData={joiResolver} />
        <CodeArea rawData={superStructResolver} />
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
