import * as React from "react"
import generic from "../data/generic"
import * as tableStyles from "../styles/table.module.css"
import * as typographyStyles from "../styles/typography.module.css"

export default ({ currentLanguage, isController }) => {
  return (
    <>
      <h2 className={typographyStyles.subTitle}>Return</h2>
      <p>
        The following table contains information about properties which{" "}
        <code>{isController ? "Controller" : "useController"}</code> produces.
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
                A function which sends the input's value to the library. It
                should be assigned to the <code>onChange</code> prop of the
                input.
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
                A function which sends the input's value to the library. It
                should be assigned to the input's <code>onBlur</code> prop.
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
              <p>The current value of the controlled component.</p>
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
                A ref used to connect hook form to the input. Assign{" "}
                <code>ref</code> to component's input ref to allow hook form to
                focus the error input.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <code>fieldState</code>
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
            <td>
              <code>formState</code>
            </td>
            <td>
              <code>isSubmitSuccessful</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>boolean</code>
            </td>
            <td>
              <p>Indicates whether the form was successfully submitted.</p>
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
              <p>
                Set to <code>true</code> after the user modifies any of the
                inputs.
              </p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <code>isSubmitted</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>boolean</code>
            </td>
            <td>
              <p>
                Set to <code>true</code> after the form is submitted. Will
                remain <code>true</code> until the <code>reset</code> method is
                invoked.
              </p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <code>dirtyFields</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>object</code>
            </td>
            <td>
              <p>
                An object with the user-modified fields. Make sure to provide
                all inputs' defaultValues via useForm, so the library can
                compare the input value against the <code>defaultValue</code>.
              </p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <code>touchedFields</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>object</code>
            </td>
            <td>
              <p>
                An object containing all the inputs the user has interacted
                with.
              </p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <code>isSubmitting</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>boolean</code>
            </td>
            <td>
              <p>
                <code>true</code> if the form is currently being submitted.{" "}
                <code>false</code> if otherwise.
              </p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <code>submitCount</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>number</code>
            </td>
            <td>
              <p>Number of times the form was submitted.</p>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <code>isValid</code>
            </td>
            <td>
              <code className={typographyStyles.typeText}>boolean</code>
            </td>
            <td>
              <p>
                Set to <code>true</code> if the form doesn't have any errors.
              </p>
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
                Set to <code>true</code> during validation.
              </p>
            </td>
          </tr>
        </thead>
      </table>
    </>
  )
}
