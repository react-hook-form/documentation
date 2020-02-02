import * as React from "react"
import { CodeSandBoxLink } from "./CodeArea"
import generic from "../data/generic"
import typographyStyles from "../styles/typography.module.css"
import tableStyles from "../styles/table.module.css"
import buttonStyles from "../styles/button.module.css"

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
                  <code>dirty</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>{api.formState.dirty}</td>
              </tr>
              <tr>
                <td>
                  <code>isSubmitted</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>{api.formState.isSubmitted}</td>
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
                  <CodeSandBoxLink
                    style={{
                      position: "relative",
                      left: 0,
                    }}
                    url="https://codesandbox.io/s/7o2wrp86k6"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    )
  }
)
