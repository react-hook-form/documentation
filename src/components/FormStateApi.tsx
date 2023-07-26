import typographyStyles from "../styles/typography.module.css"
import api from "../data/api"
import Link from "next/link"

export const FormStateApi = ({ columnIndent }: { columnIndent?: boolean }) => (
  <>
    <tr>
      {columnIndent && (
        <td>
          <Link href="/docs/useform/formstate">
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
      <td>{api.formState.isDirty}</td>
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
      <td>{api.formState.dirtyFields}</td>
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
      <td>{api.formState.touched}</td>
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
      <td>{api.formState.defaultValues}</td>
    </tr>
    <tr>
      {columnIndent && (
        <td>
          <code>formState</code>
        </td>
      )}
      <td>
        <code>isSubmitted</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>boolean</code>
      </td>
      <td>{api.formState.isSubmitted}</td>
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
      <td>{api.formState.isSubmitSuccessful}</td>
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
      <td>{api.formState.isSubmitting}</td>
    </tr>
    <tr>
      {columnIndent && (
        <td>
          <code>formState</code>
        </td>
      )}
      <td>
        <code>isLoading</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>boolean</code>
      </td>
      <td>{api.formState.isLoading}</td>
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
      <td>{api.formState.submitCount}</td>
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
        <div>{api.formState.isValid}</div>
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
      <td>{api.formState.isValidating}</td>
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
        <Link href="/docs/useformstate/errormessage">ErrorMessage</Link>{" "}
        component to retrieve error message easily.
      </td>
    </tr>
  </>
)
