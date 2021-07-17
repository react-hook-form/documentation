import * as React from "react"
import CodeArea, { CodeSandBoxLink } from "../CodeArea"
import generic from "../../data/generic"
import * as typographyStyles from "../../styles/typography.module.css"
import * as tableStyles from "../../styles/table.module.css"
import * as buttonStyles from "../../styles/button.module.css"
import formState from "../codeExamples/v6/formState"
import formStateTs from "../codeExamples/v6/formStateTs"

const goToSection = (name, sectionsRef) => {
  const url = window.location.href
  const hashIndex = url.indexOf("#")
  const filterName = name.replace(/ |-/g, "")

  history.pushState(
    {},
    null,
    hashIndex < 0
      ? `${url}#${filterName}`
      : `${url.substr(0, hashIndex)}#${filterName}`
  )

  const refName = `${filterName}Ref`

  if (sectionsRef.current[refName]) {
    sectionsRef.current[refName].scrollIntoView({ behavior: "smooth" })
  }
}

export default React.memo(
  ({
    api,
    currentLanguage,
    sectionsRef,
  }: {
    currentLanguage: string
    api: any
    sectionsRef: any
  }) => {
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
                  <code>touched</code>
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
                    <code>isValid</code> is affected by{" "}
                    <code
                      className={buttonStyles.codeAsLink}
                      onClick={() => goToSection("useForm", sectionsRef)}
                      onKeyDown={() => goToSection("useForm", sectionsRef)}
                      role="button"
                      tabIndex={0}
                    >
                      mode
                    </code>
                    . This state is only applicable with <code>onChange</code>{" "}
                    and <code>onBlur</code> mode.
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
                <td>An object with field errors.</td>
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
