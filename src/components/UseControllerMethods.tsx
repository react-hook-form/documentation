import * as React from "react"
import generic from "../data/generic"
import tableStyles from "../styles/table.module.css"
import typographyStyles from "../styles/typography.module.css"

export default ({ currentLanguage, isController }) => {
  return (
    <>
      <h2 className={typographyStyles.subTitle}>Return</h2>
      <p>
        The following table contains information about properties which{" "}
        <code>{isController ? "Controller" : "useController"}</code> produce.
      </p>
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <th width="130px">Object Name</th>
            <th width="150px">{generic.name[currentLanguage]}</th>
            <th width="160px">{generic.type[currentLanguage]}</th>
            <th>{generic.description[currentLanguage]}</th>
          </tr>
          <tr>
            <td>
              <code>field</code>
            </td>
            <td>
              <code>onChange</code>
            </td>
            <td>
              <code
                className={typographyStyles.typeText}
              >{`(value: any) => void`}</code>
            </td>
            <td>
              <p>
                A function which send value to hook form and should be assigned
                with <code>onChange</code> prop.
              </p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <code>onBlur</code>
            </td>
            <td>
              <code
                className={typographyStyles.typeText}
              >{`(value: any) => void`}</code>
            </td>
            <td>
              <p>
                A function which send value to hook form and should be assigned
                with <code>onBlur</code> prop.
              </p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <code>value</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>unknown</code>
            </td>
            <td>
              <p>The value of this controlled component.</p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <code>ref</code>
            </td>
            <tr>
              <code className={typographyStyles.typeText}>React.RefObject</code>
            </tr>
            <td>
              <p>
                Assign <code>ref</code> to component's input ref, so hook form
                can focus on the error input.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <code>meta</code>
            </td>
            <td>
              <code>invalid</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>boolean</code>
            </td>
            <td>
              <p>Invalid state for current input.</p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <code>isTouched</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>boolean</code>
            </td>
            <td>
              <p>Touched state for current controlled input.</p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <code>isDirty</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>boolean</code>
            </td>
            <td>
              <p>Dirty state for current controlled input.</p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <code>error</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>object</code>
            </td>
            <td>
              <p>error for this specific input.</p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <code>isValidating</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>boolean</code>
            </td>
            <td>
              <p>
                return <code>true</code> when the input is validating.
              </p>
            </td>
          </tr>
        </thead>
      </table>
    </>
  )
}
