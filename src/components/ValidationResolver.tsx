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
import tableStyles from "../styles/table.module.css"
import generic from "../data/generic"

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

      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table}>
          <tbody>
            <tr>
              <th>{generic.name["en"]}</th>
              <th width="230px">{generic.type["en"]}</th>
              <th>{generic.description["en"]}</th>
            </tr>
            <tr>
              <td>
                <p>
                  <code>values</code>
                </p>
              </td>
              <td>
                <code className={typographyStyles.typeText}>object</code>
              </td>
              <td>
                <p>This object contains the entire form values.</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <code>context</code>
                </p>
              </td>
              <td>
                <code className={typographyStyles.typeText}>object</code>
              </td>
              <td>
                <p>
                  This is the <code>context</code> object which you have
                  provided to the <code>useForm</code> config.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <code>options</code> <br />
                </p>
              </td>
              <td>
                <code className={typographyStyles.typeText}>{`{ 
  criteriaMode: string, 
  fields: object, 
  names: string[] 
}`}</code>
              </td>
              <td>
                <p>
                  This is the option object contains information about the
                  validated fields, names and <code>criteriaMode</code> from{" "}
                  <code>useForm</code>.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

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
