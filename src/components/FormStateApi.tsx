import * as typographyStyles from "../styles/typography.module.css"
import API from "../data/en/api"
import { Link } from "gatsby"
import * as React from "react"

export const FormStateApi = ({
  api,
  columnIndent,
}: {
  api?: {
    formState: {
      isDirty: React.ReactNode | string
      dirtyFields: React.ReactNode | string
      defaultValues: React.ReactNode | string
      touched: React.ReactNode | string
      isSubmitted: React.ReactNode | string
      isSubmitSuccessful: React.ReactNode | string
      isSubmitting: React.ReactNode | string
      submitCount: React.ReactNode | string
      isValid: React.ReactNode | string
      isValidating: React.ReactNode | string
    }
  }
  columnIndent?: boolean
}) => (
  <>
    <tr>
      {columnIndent && (
        <td>
          <Link to="/api/useform/formstate">
            <code>formState</code>
          </Link>
        </td>
      )}
      <td>
        <code>isDirty</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>boolean</code>
      </td>
      <td>{(api || API).formState.isDirty}</td>
    </tr>
    <tr>
      {columnIndent && (
        <td>
          <code>formState</code>
        </td>
      )}
      <td>
        <code>dirtyFields</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>object</code>
      </td>
      <td>{(api || API).formState.dirtyFields}</td>
    </tr>
    <tr>
      {columnIndent && (
        <td>
          <code>formState</code>
        </td>
      )}
      <td>
        <code>touchedFields</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>object</code>
      </td>
      <td>{(api || API).formState.touched}</td>
    </tr>
    <tr>
      {columnIndent && (
        <td>
          <code>formState</code>
        </td>
      )}
      <td>
        <code>defaultValues</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>object</code>
      </td>
      <td>{(api || API).formState.defaultValues}</td>
    </tr>
    <tr>
      {columnIndent && <td />}
      <td>
        <code>isSubmitted</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>boolean</code>
      </td>
      <td>{(api || API).formState.isSubmitted}</td>
    </tr>
    <tr>
      {columnIndent && (
        <td>
          <code>formState</code>
        </td>
      )}
      <td>
        <code>isSubmitSuccessful</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>boolean</code>
      </td>
      <td>{(api || API).formState.isSubmitSuccessful}</td>
    </tr>
    <tr>
      {columnIndent && (
        <td>
          <code>formState</code>
        </td>
      )}
      <td>
        <code>isSubmitting</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>boolean</code>
      </td>
      <td>{(api || API).formState.isSubmitting}</td>
    </tr>
    <tr>
      {columnIndent && (
        <td>
          <code>formState</code>
        </td>
      )}
      <td>
        <code>submitCount</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>number</code>
      </td>
      <td>{(api || API).formState.submitCount}</td>
    </tr>
    <tr>
      {columnIndent && (
        <td>
          <code>formState</code>
        </td>
      )}
      <td>
        <code>isValid</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>boolean</code>
      </td>
      <td>
        <div>{(api || API).formState.isValid}</div>
        <p>
          <code>setError</code> has no effect on <code>isValid</code> formState,{" "}
          <code>isValid</code> will always derived via the entire form
          validation result.
        </p>
      </td>
    </tr>
    <tr>
      {columnIndent && (
        <td>
          <code>formState</code>
        </td>
      )}
      <td>
        <code>isValidating</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>boolean</code>
      </td>
      <td>{(api || API).formState.isValidating}</td>
    </tr>
    <tr>
      {columnIndent && (
        <td>
          <code>formState</code>
        </td>
      )}
      <td>
        <code>errors</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>object</code>
      </td>
      <td>
        An object with field errors. There is also an{" "}
        <Link to="/api/useformstate/errormessage">ErrorMessage</Link> component
        to retrieve error message easily.
      </td>
    </tr>
  </>
)
