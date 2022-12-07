import * as React from "react"
import Footer from "./Footer"
import { Menu, pages } from "./Menu"
import CodeArea, { CodeSandBoxLink } from "./CodeArea"
import Popup from "./Popup"
import generic from "../data/generic"
import ValidationResolver from "./ValidationResolver"
import api from "../data/en/api"
import * as typographyStyles from "../styles/typography.module.css"
import * as containerStyles from "../styles/container.module.css"
import * as tableStyles from "../styles/table.module.css"
import shouldUseNativeValidation from "./codeExamples/shouldUseNativeValidation"
import StarRepo from "./StarRepo"
import { SelectNav } from "./selectNav"
import { Link } from "gatsby"

const codeSandBoxStyle = {
  position: "relative",
  left: 0,
  float: "right",
}

export default ({ currentLanguage }) => {
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
              value: "/api/useform/register",
            },
            {
              label: "unregister",
              value: "/api/useform/unregister",
            },
            {
              label: "formstate",
              value: "/api/useform/formstate",
            },
            {
              label: "watch",
              value: "/api/useform/watch",
            },
            {
              label: "handlesubmit",
              value: "/api/useform/handlesubmit",
            },
            {
              label: "reset",
              value: "/api/useform/reset",
            },
            {
              label: "resetField",
              value: "/api/useform/resetfield",
            },
            {
              label: "setError",
              value: "/api/useform/seterror",
            },
            {
              label: "clearErrors",
              value: "/api/useform/clearerrors",
            },
            {
              label: "setValue",
              value: "/api/useform/setvalue",
            },
            {
              label: "setFocus",
              value: "/api/useform/setfocus",
            },
            {
              label: "getValues",
              value: "/api/useform/getvalues",
            },
            {
              label: "getFieldState",
              value: "/api/useform/getfieldstate",
            },
            {
              label: "trigger",
              value: "/api/useform/trigger",
            },
            {
              label: "control",
              value: "/api/useform/control",
            },
          ]}
        />

        <main>
          <section id="useFormRef">
            <code className={typographyStyles.codeHeading}>
              <h2>
                useForm:{" "}
                <Link to="/ts#UseFormProps">
                  <code className={typographyStyles.typeText}>
                    UseFormProps
                  </code>
                </Link>
              </h2>
            </code>

            {api.useForm.description}

            <CodeArea
              withOutCopy
              rawData={`useForm({
  mode: 'onSubmit',
  reValidateMode: 'onChange',
  defaultValues: {},
  resolver: undefined,
  context: undefined,
  criteriaMode: "firstError",
  shouldFocusError: true,
  shouldUnregister: false,
  shouldUseNativeValidation: false,
  delayError: undefined
})`}
              tsRawData={`type FormInputs = {
  firstName: string;
  lastName: string;
};

const { register } = useForm<FormInputs>({
  mode: 'onSubmit',
  reValidateMode: 'onChange',
  defaultValues: {},
  resolver: undefined,
  context: undefined,
  criteriaMode: "firstError",
  shouldFocusError: true,
  shouldUnregister: false,
  delayError: undefined
})`}
            />

            <h2 id="props" className={typographyStyles.subTitle}>
              Props
            </h2>

            <h5 style={{ marginTop: "1rem" }} className={typographyStyles.h5}>
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
                before a user submits the form that is happened during
                <code>onSubmit</code> event by invoking{" "}
                <code>handleSubmit</code> function.
              </p>

              <table className={tableStyles.table}>
                <tbody>
                  <tr>
                    <th>{generic.name[currentLanguage]}</th>
                    <th>{generic.type[currentLanguage]}</th>
                    <th>{generic.description[currentLanguage]}</th>
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

              <h5 className={typographyStyles.h5} style={{ marginTop: 20 }}>
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

            <h5 className={typographyStyles.h5} style={{ marginTop: 20 }}>
              <code>
                defaultValues:{" "}
                <span className={typographyStyles.typeText}>
                  {`Record<string, any>`} = {`{}`}
                </span>
              </code>
            </h5>

            {api.useForm.defaultValues}

            <div className={tableStyles.tableWrapper}>
              <table className={tableStyles.table}>
                <tbody>
                  <tr>
                    <td>
                      <p>
                        <code>context:</code> <br />
                        <code className={typographyStyles.typeText}>
                          object
                        </code>
                      </p>
                    </td>
                    <td>
                      {api.useForm.validateContext}
                      <br />
                    </td>
                    <td>
                      <CodeSandBoxLink
                        style={codeSandBoxStyle}
                        url="https://codesandbox.io/s/resolver-context-d9jqy"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <code>criteriaMode</code> <br />
                        <code className={typographyStyles.typeText}>
                          firstError | all
                        </code>
                      </p>
                    </td>
                    <td>{api.useForm.validateCriteriaMode}</td>
                    <td>
                      <CodeSandBoxLink
                        style={codeSandBoxStyle}
                        url="https://codesandbox.io/s/react-hook-form-v6-errors-validatecriteriamode-all-p9xm6"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <code>shouldFocusError</code>
                        <br />
                        <code className={typographyStyles.typeText}>
                          boolean = true
                        </code>
                      </p>
                    </td>
                    <td>{api.useForm.submitFocusError}</td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        <code>delayError</code>
                        <br />
                        <code className={typographyStyles.typeText}>
                          number
                        </code>
                      </p>
                    </td>
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
              id="resolver"
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
              <code>:invalid</code> making style inputs easier. In fact, you can
              still use those selectors even the client validation is disabled.
            </p>
            <ul>
              <li>
                Only works with onSubmit and onChange mode due to{" "}
                <code>reportValidity</code> execution will focus on the error
                input.
              </li>
              <li>
                Each registered field's validation message is required to be
                string to display them natively.
              </li>
              <li>
                <p>
                  This feature only works for <code>register</code> API, and{" "}
                  <code>useController/Controller</code> which wired with actual
                  DOM reference.
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
                    <Link to={page.pathname}>{page.name}</Link>
                  </p>
                </li>
              ))}
            </ul>

            <StarRepo currentLanguage="en" />
          </section>

          <Footer currentLanguage={currentLanguage} />
        </main>
      </div>
    </div>
  )
}
