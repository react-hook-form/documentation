import generic from "../data/generic"
import { Link } from "gatsby"
import * as React from "react"
import * as typographyStyles from "../styles/typography.module.css"
import * as tableStyles from "../styles/table.module.css"

export default ({ currentLanguage, api }) => (
  <>
    <h2 className={typographyStyles.subTitle}>Return</h2>
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
            <td>{api.formState.isSubmitted}</td>
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
                applicable with <code>onChange</code> and <code>onBlur</code>{" "}
                mode.
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
              <a href="#errorMMessage">ErrorMessage</a> component to retrieve
              error message easily.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
)
