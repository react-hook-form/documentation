import typographyStyles from "../styles/typography.module.css"
import API from "../data/api"
import Link from "next/link"

export const FormStateApi = ({
  api,
  columnIndent,
}: {
  api?: Pick<typeof API, "formState">
  columnIndent?: boolean
}) => (
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
        <code>isLoading</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>boolean</code>
      </td>
      <td>{(api || API).formState.isLoading}</td>
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
        <code>validatingFields</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>object</code>
      </td>
      <td>{(api || API).formState.validatingFields}</td>
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
    <tr>
      {columnIndent && (
        <td>
          <code>formState</code>
        </td>
      )}
      <td>
        <code>disabled</code>
      </td>
      <td>
        <code className={typographyStyles.typeText}>boolean</code>
      </td>
      <td>{(api || API).formState.disabled}</td>
    </tr>
  </>
)
