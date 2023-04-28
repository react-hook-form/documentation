import Footer from "./Footer"
import { Menu, pages } from "./Menu"
import CodeArea, { CodeSandBoxLink } from "./CodeArea"
import Popup from "./Popup"
import generic from "../data/generic"
import ValidationResolver from "./ValidationResolver"
import api from "../data/api"
import * as typographyStyles from "../styles/typography.module.css"
import * as containerStyles from "../styles/container.module.css"
import * as tableStyles from "../styles/table.module.css"
import shouldUseNativeValidation from "./codeExamples/shouldUseNativeValidation"
import StarRepo from "./StarRepo"
import { SelectNav } from "./selectNav"
import Link from "next/link"
import { CSSProperties } from "react"

const codeSandBoxStyle: CSSProperties = {
  position: "relative",
  left: 0,
  float: "right",
}

const UseForm = () => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        useForm
      </h1>
      <p className={typographyStyles.subHeading}>
        React hooks for form validation
      </p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <SelectNav
          options={[
            {
              label: "register",
              value: "/docs/useform/register",
            },
            {
              label: "unregister",
              value: "/docs/useform/unregister",
            },
            {
              label: "formstate",
              value: "/docs/useform/formstate",
            },
            {
              label: "watch",
              value: "/docs/useform/watch",
            },
            {
              label: "handlesubmit",
              value: "/docs/useform/handlesubmit",
            },
            {
              label: "reset",
              value: "/docs/useform/reset",
            },
            {
              label: "resetField",
              value: "/docs/useform/resetfield",
            },
            {
              label: "setError",
              value: "/docs/useform/seterror",
            },
            {
              label: "clearErrors",
              value: "/docs/useform/clearerrors",
            },
            {
              label: "setValue",
              value: "/docs/useform/setvalue",
            },
            {
              label: "setFocus",
              value: "/docs/useform/setfocus",
            },
            {
              label: "getValues",
              value: "/docs/useform/getvalues",
            },
            {
              label: "getFieldState",
              value: "/docs/useform/getfieldstate",
            },
            {
              label: "trigger",
              value: "/docs/useform/trigger",
            },
            {
              label: "control",
              value: "/docs/useform/control",
            },
          ]}
        />

        <main>
          <section id="useFormRef">
            <code className={typographyStyles.codeHeading}>
              <h2>
                useForm:{" "}
                <Link href="/ts#UseFormProps">
                  <code className={typographyStyles.typeText}>
                    UseFormProps
                  </code>
                </Link>
              </h2>
            </code>

            {api.useForm.description}

            <p>
              <b>Generic props:</b>
            </p>

            <table className={tableStyles.table}>
              <tbody>
                <tr>
                  <td>
                    <a href="#mode">mode</a>
                  </td>
                  <td>
                    <p>
                      Validation strategy <b>before</b> submitting behaviour.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#reValidateMode">reValidateMode</a>
                  </td>
                  <td>
                    <p>
                      Validation strategy <b>after</b> submitting behaviour.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td width={250}>
                    <a href="#defaultValues">defaultValues</a>
                  </td>
                  <td>
                    <p>Default values for the form.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#values">values</a>
                  </td>
                  <td>
                    <p>Reactive values to update the form values.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#resetOptions">resetOptions</a>
                  </td>
                  <td>
                    <p>
                      Option to reset form state update while updating new form
                      values.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#criteriaMode">criteriaMode</a>
                  </td>
                  <td>
                    <p>Display all validation errors or one at a time.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#shouldFocusError">shouldFocusError</a>
                  </td>
                  <td>
                    <p>Enable or disable built-in focus management.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#delayError">delayError</a>
                  </td>
                  <td>
                    <p>Delay error from appearing instantly.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#shouldUseNativeValidation">
                      shouldUseNativeValidation
                    </a>
                  </td>
                  <td>
                    <p>Use browser built-in form constraint API.</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#shouldUnregister">shouldUnregister</a>
                  </td>
                  <td>
                    <p>Enable and disable input unregister after unmount.</p>
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              <b>Schema validation props:</b>
            </p>

            <table className={tableStyles.table}>
              <tbody>
                <tr>
                  <td width={250}>
                    <a href="#resolver">resolver</a>
                  </td>
                  <td>
                    <p>
                      Integrates with your preferred schema validation library.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#context">context</a>
                  </td>
                  <td>
                    <p>
                      A context object to supply for your schema validation.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 id="props" className={typographyStyles.subTitle}>
              Props
            </h2>

            <h5
              id="mode"
              style={{ marginTop: "1rem" }}
              className={typographyStyles.h5}
            >
              <code>
                mode:{" "}
                <span className={typographyStyles.typeText}>
                  onChange | onBlur | onSubmit | onTouched | all = 'onSubmit'
                </span>
              </code>
              <Popup top={3} />
            </h5>

            <div className={tableStyles.tableWrapper}>
              <p>
                This option allows you to configure the validation strategy
                before a user submits the form. The validation occurs during the{" "}
                <code>onSubmit</code> event, which is triggered by invoking the{" "}
                <Link href="/docs/useform/handlesubmit">
                  <code>handleSubmit</code>
                </Link>{" "}
                function.
              </p>

              <table className={tableStyles.table}>
                <tbody>
                  <tr>
                    <th>{generic.name}</th>
                    <th>{generic.type}</th>
                    <th>{generic.description}</th>
                  </tr>
                  <tr>
                    <td>onSubmit</td>
                    <td>
                      <span className={typographyStyles.typeText}>string</span>
                    </td>
                    <td>{api.useForm.validateOnSubmit}</td>
                  </tr>
                  <tr>
                    <td>onBlur</td>
                    <td>
                      <span className={typographyStyles.typeText}>string</span>
                    </td>
                    <td>{api.useForm.validateOnBlur}</td>
                  </tr>
                  <tr>
                    <td>onChange</td>
                    <td>
                      <span className={typographyStyles.typeText}>string</span>
                    </td>
                    <td>{api.useForm.validateOnChange}</td>
                  </tr>
                  <tr>
                    <td>onTouched</td>
                    <td>
                      <span className={typographyStyles.typeText}>string</span>
                    </td>
                    <td>{api.useForm.validationOnTouched}</td>
                  </tr>
                  <tr>
                    <td>all</td>
                    <td>
                      <span className={typographyStyles.typeText}>string</span>
                    </td>
                    <td>{api.useForm.validationOnAll}</td>
                  </tr>
                </tbody>
              </table>

              <h5
                id="reValidateMode"
                className={typographyStyles.h5}
                style={{ marginTop: 20 }}
              >
                <code>
                  reValidateMode:{" "}
                  <span className={typographyStyles.typeText}>
                    onChange | onBlur | onSubmit = 'onChange'
                  </span>
                </code>
                <Popup
                  top={3}
                  message="React Native: Custom register or using Controller"
                />
              </h5>

              {api.useForm.reValidateMode}
            </div>

            <h5
              id="defaultValues"
              className={typographyStyles.h5}
              style={{ marginTop: 20 }}
            >
              <code>
                defaultValues:{" "}
                <span className={typographyStyles.typeText}>
                  {`FieldValues | Promise<FieldValues>`}
                </span>
              </code>
            </h5>

            {api.useForm.defaultValues}

            <h5
              id="values"
              className={typographyStyles.h5}
              style={{ marginTop: 20 }}
            >
              <code>
                values:{" "}
                <span className={typographyStyles.typeText}>FieldValues</span>
              </code>
            </h5>

            {api.useForm.values}

            <h5
              id="resetOptions"
              className={typographyStyles.h5}
              style={{ marginTop: 20 }}
            >
              <code>
                resetOptions:{" "}
                <span className={typographyStyles.typeText}>
                  KeepStateOptions
                </span>
              </code>
            </h5>

            {api.useForm.resetOptions}

            <h5
              id="context"
              className={typographyStyles.h5}
              style={{ marginTop: 20 }}
            >
              <code>
                context:{" "}
                <span className={typographyStyles.typeText}>object</span>
              </code>
            </h5>
            <div className={tableStyles.tableWrapper}>
              <table className={tableStyles.table}>
                <tbody>
                  <tr>
                    <td>{api.useForm.validateContext}</td>
                    <td>
                      <CodeSandBoxLink
                        style={codeSandBoxStyle}
                        url="https://codesandbox.io/s/resolver-context-d9jqy"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h5
              id="criteriaMode"
              className={typographyStyles.h5}
              style={{ marginTop: 20 }}
            >
              <code>
                criteriaMode:{" "}
                <span className={typographyStyles.typeText}>
                  firstError | all
                </span>
              </code>
            </h5>

            <div className={tableStyles.tableWrapper}>
              <table className={tableStyles.table}>
                <tbody>
                  <tr>
                    <td>{api.useForm.validateCriteriaMode}</td>
                    <td>
                      <CodeSandBoxLink
                        style={codeSandBoxStyle}
                        url="https://codesandbox.io/s/react-hook-form-v6-errors-validatecriteriamode-all-p9xm6"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h5
              id="shouldFocusError"
              className={typographyStyles.h5}
              style={{ marginTop: 20 }}
            >
              <code>
                shouldFocusError:{" "}
                <span className={typographyStyles.typeText}>
                  boolean = true
                </span>
              </code>
            </h5>
            <div className={tableStyles.tableWrapper}>
              <table className={tableStyles.table}>
                <tbody>
                  <tr>
                    <td>{api.useForm.submitFocusError}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h5
              id="delayError"
              className={typographyStyles.h5}
              style={{ marginTop: 20 }}
            >
              <code>
                delayError:{" "}
                <span className={typographyStyles.typeText}>number</span>
              </code>
            </h5>
            <div className={tableStyles.tableWrapper}>
              <table className={tableStyles.table}>
                <tbody>
                  <tr>
                    <td>{api.useForm.delayError}</td>
                    <td>
                      <CodeSandBoxLink
                        style={codeSandBoxStyle}
                        url="https://codesandbox.io/s/useform-delayerror-q6c2d"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h5
              className={typographyStyles.h5}
              style={{ marginTop: 20 }}
              id="shouldUnregister"
            >
              <code>
                shouldUnregister:{" "}
                <span className={typographyStyles.typeText}>
                  boolean = false
                </span>
              </code>
            </h5>

            {api.useForm.shouldUnregister}

            <h5
              className={typographyStyles.h5}
              style={{ marginTop: 20 }}
              id="shouldUseNativeValidation"
            >
              <code>
                shouldUseNativeValidation:{" "}
                <span className={typographyStyles.typeText}>
                  boolean = false
                </span>
              </code>
            </h5>

            <p>
              This config will enable{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation"
                target="_blank"
                rel="noopener noreferrer"
              >
                browser native validation
              </a>
              . It will also enable CSS selectors <code>:valid</code> and
              <code>:invalid</code> making styling inputs easier. You can still
              use these selectors even when client-side validation is disabled.
            </p>
            <ul>
              <li>
                <p>
                  Only works with <code>onSubmit</code> and{" "}
                  <code>onChange</code> modes, as the{" "}
                  <code>reportValidity</code> execution will focus the error
                  input.
                </p>
              </li>
              <li>
                <p>
                  Each registered field's validation message is required to be
                  string to display them natively.
                </p>
              </li>
              <li>
                <p>
                  This feature only works with the <code>register</code> API and
                  <code>useController/Controller</code> that are connected with
                  actual DOM references.
                </p>
              </li>
            </ul>

            <h3 id="example" className={typographyStyles.subTitle}>
              Examples
            </h3>

            <CodeArea rawData={shouldUseNativeValidation} />

            <ValidationResolver api={api} />

            <h2 className={typographyStyles.subTitle}>Return</h2>

            <p>
              The following list contains reference to <code>useForm</code>{" "}
              return props.
            </p>

            <ul>
              {pages[0].pages.map((page) => (
                <li key={page.name}>
                  <p>
                    <Link href={page.pathname}>{page.name}</Link>
                  </p>
                </li>
              ))}
            </ul>

            <StarRepo />
          </section>

          <Footer />
        </main>
      </div>
    </div>
  )
}

export default UseForm
