import * as React from "react"
import CodeArea, { CodeSandBoxLink } from "./CodeArea"
import generic from "../data/generic"
import typographyStyles from "../styles/typography.module.css"
import tableStyles from "../styles/table.module.css"
import { Link } from "gatsby"
import formState from "./codeExamples/formState"
import formStateTs from "./codeExamples/formStateTs"

export default React.memo(
  ({ api, currentLanguage }: { currentLanguage: string; api: any }) => {
    return (
      <>
        <code className={typographyStyles.codeHeading}>
          <h2>
            formState: <span className={typographyStyles.typeText}>Object</span>
          </h2>
        </code>
        {api.formState.description}

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <tbody>
              <tr>
                <th>{generic.name[currentLanguage]}</th>
                <th>{generic.type[currentLanguage]}</th>
                <th>{generic.description[currentLanguage]}</th>
              </tr>
              <tr>
                <td>
                  <code>isDirty</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>{api.formState.isDirty}</td>
              </tr>
              <tr>
                <td>
                  <code>dirtyFields</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>object</code>
                </td>
                <td>{api.formState.dirtyFields}</td>
              </tr>
              <tr>
                <td>
                  <code>touchedFields</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>object</code>
                </td>
                <td>{api.formState.touched}</td>
              </tr>
              <tr>
                <td>
                  <code>isSubmitted</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  {api.formState.isSubmitted}
                  <div>
                    <CodeSandBoxLink
                      style={{
                        position: "relative",
                        left: 0,
                        float: "right",
                        display: "flex",
                      }}
                      url="https://codesandbox.io/s/react-hook-form-reset-issubmitted-state-after-form-submitted-zck8b"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <code>isSubmitSuccessful</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>{api.formState.isSubmitSuccessful}</td>
              </tr>
              <tr>
                <td>
                  <code>isSubmitting</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>{api.formState.isSubmitting}</td>
              </tr>
              <tr>
                <td>
                  <code>submitCount</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>number</code>
                </td>
                <td>{api.formState.submitCount}</td>
              </tr>
              <tr>
                <td>
                  <code>isValid</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  <div>{api.formState.isValid}</div>
                  <p>
                    <b className={typographyStyles.note}>Note:</b>{" "}
                    <code>isValid</code> is affected by <code>mode</code> at{" "}
                    <Link to={"/api/useform"}>useForm</Link>. This state is only
                    applicable with <code>onChange</code> and{" "}
                    <code>onBlur</code> mode.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>isValidating</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>{api.formState.isValidating}</td>
              </tr>
              <tr>
                <td>errors</td>
                <td>
                  <code className={typographyStyles.typeText}>object</code>
                </td>
                <td>
                  An object with field errors. There is also an{" "}
                  <a href="#errorMMessage">ErrorMessage</a> component to
                  retrieve error message easily.
                </td>
              </tr>
            </tbody>
          </table>
          <CodeArea
            rawData={formState}
            url="https://codesandbox.io/s/react-hook-form-v6-formstate-ht098"
            tsRawData={formStateTs}
            tsUrl="https://codesandbox.io/s/react-hook-form-v6-ts-formstate-zblw3"
          />
        </div>
      </>
    )
  }
)
