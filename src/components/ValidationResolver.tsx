import * as React from "react"
import CodeArea from "./CodeArea"
import validationResolver from "./codeExamples/validationResolver"
import joiResolver from "./codeExamples/joiResolver"
import joiResolverTs from "./codeExamples/joiResolverTs"
import superStructResolver from "./codeExamples/superStructResolver"
import validationResolverTs from "./codeExamples/validationResolverTs"
import TabGroup from "./TabGroup"
import validationSchema from "./codeExamples/validationSchema"
import validationSchemaTs from "./codeExamples/validationSchemaTs"
import zodResolver from "./codeExamples/zodResolver"
import zodResolverTs from "./codeExamples/zodResolverTs"
import typographyStyles from "../styles/typography.module.css"
import vestResolver from "./codeExamples/vestResolver"

export default function ({ api }) {
  return (
    <>
      <h5
        className={typographyStyles.h5}
        style={{ marginTop: 20 }}
        id="validationResolver"
      >
        <code>
          resolver:{" "}
          <span className={typographyStyles.typeText}>
            {`(values: any, context?: object, options: Object) => Promise<ResolverResult> | ResolverResult `}
          </span>
        </code>
      </h5>

      {api.resolver.description}

      <TabGroup
        buttonLabels={["Yup", "Zod", "Joi", "Superstruct", "Vest", "Custom"]}
      >
        <CodeArea
          rawData={validationSchema}
          tsRawData={validationSchemaTs}
          url="https://codesandbox.io/s/react-hook-form-validationschema-v7-bt78h"
          tsUrl="https://codesandbox.io/s/react-hook-form-apply-validation-ts-forked-nmbyh"
        />
        <CodeArea
          rawData={zodResolver}
          tsRawData={zodResolverTs}
          url="https://codesandbox.io/s/react-hook-form-zod-resolver-example-io911"
          tsUrl="https://codesandbox.io/s/react-hook-form-zod-resolver-ts-example-forked-w72vp"
        />
        <CodeArea
          rawData={joiResolver}
          tsRawData={joiResolverTs}
          url="https://codesandbox.io/s/react-hook-form-joiresolver-v7-kmn0d"
          tsUrl="https://codesandbox.io/s/react-hook-form-joiresolver-v6-ts-forked-5pseh"
        />
        <CodeArea
          rawData={superStructResolver}
          url="https://codesandbox.io/s/react-hook-form-v7-superstructresolver-ge0nk"
        />
        <CodeArea
          rawData={vestResolver}
          url="https://codesandbox.io/s/vest-8q874"
        />
        <CodeArea
          rawData={validationResolver}
          tsRawData={validationResolverTs}
          url="https://codesandbox.io/s/react-hook-form-customresoliver-v7-8mpqw"
          tsUrl="https://codesandbox.io/s/react-hook-form-customresoliver-ts-v7-juc63"
        />
      </TabGroup>
    </>
  )
}
