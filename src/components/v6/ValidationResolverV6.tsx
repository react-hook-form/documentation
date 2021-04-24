import * as React from "react"
import CodeArea from "../CodeArea"
import validationResolver from "../codeExamples/validationResolver"
import joiResolver from "../codeExamples/joiResolver"
import joiResolverTs from "../codeExamples/joiResolverTs"
import superStructResolver from "../codeExamples/superStructResolver"
import validationResolverTs from "../codeExamples/validationResolverTs"
import TabGroup from "../TabGroup"
import validationSchema from "../codeExamples/validationSchema"
import validationSchemaTs from "../codeExamples/validationSchemaTs"
import zodResolver from "../codeExamples/zodResolver"
import zodResolverTs from "../codeExamples/zodResolverTs"
import * as typographyStyles from "../../styles/typography.module.css"
import vestResolver from "../codeExamples/vestResolver"

export default function ({ api }) {
  return (
    <>
      <h5 className={typographyStyles.h5} style={{ marginTop: 20 }}>
        <code>
          resolver:{" "}
          <span className={typographyStyles.typeText}>
            {`(values: any, context?: object) => Promise<ResolverResult> | ResolverResult`}
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
          url="https://codesandbox.io/s/react-hook-form-validationschema-v6-2l77g"
          tsUrl="https://codesandbox.io/s/react-hook-form-validationschema-v6-ts-fpebh"
        />
        <CodeArea
          rawData={zodResolver}
          tsRawData={zodResolverTs}
          url="https://codesandbox.io/s/react-hook-form-zod-resolver-example-forked-ko5ll"
          tsUrl="https://codesandbox.io/s/react-hook-form-zod-resolver-ts-example-forked-hrjdh"
        />
        <CodeArea
          rawData={joiResolver}
          tsRawData={joiResolverTs}
          url="https://codesandbox.io/s/react-hook-form-joiresolver-v6-yejqe"
          tsUrl="https://codesandbox.io/s/react-hook-form-joiresolver-v6-ts-jwg5g"
        />
        <CodeArea
          rawData={superStructResolver}
          url="https://codesandbox.io/s/react-hook-form-v6-superstructresolver-ed67i"
        />
        <CodeArea
          rawData={vestResolver}
          url="https://codesandbox.io/s/vest-k6gbd"
        />
        <CodeArea
          rawData={validationResolver}
          tsRawData={validationResolverTs}
          url="https://codesandbox.io/s/react-hook-form-customresoliver-v6-h4ti6"
          tsUrl="https://codesandbox.io/s/react-hook-form-customresoliver-ts-v6-ecoxh"
        />
      </TabGroup>
    </>
  )
}
