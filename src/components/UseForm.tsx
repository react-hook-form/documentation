import * as React from "react"
import Footer from "./Footer"
import { Menu } from "./Menu"
import CodeArea, { CodeSandBoxLink } from "./CodeArea"
import Popup from "./Popup"
import generic from "../data/generic"
import defaultValues from "./codeExamples/defaultValues"
import defaultValuesTs from "./codeExamples/defaultValuesTs"
import ValidationResolver from "./ValidationResolver"
import api from "../data/en/api"
import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"
import tableStyles from "../styles/table.module.css"

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

        <main>
          <section id="useFormRef">
            <code className={typographyStyles.codeHeading}>
              <h2>
                useForm:{" "}
                <span className={typographyStyles.typeText}>Function</span>
              </h2>
            </code>

            {api.useForm.description}

            <CodeArea
              withOutCopy
              rawData={`const { register } = useForm({
  mode: 'onSubmit',
  reValidateMode: 'onChange',
  defaultValues: {},
  resolver: undefined,
  context: undefined,
  criteriaMode: "firstError",
  shouldFocusError: true,
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
})`}
            />

            <h5 className={typographyStyles.h5}>
              <code>
                mode:{" "}
                <span className={typographyStyles.typeText}>
                  onChange | onBlur | onSubmit | onTouched | all = 'onSubmit'
                </span>
              </code>
              <Popup top={3} />
            </h5>

            <div className={tableStyles.tableWrapper}>
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

              <table>
                <tbody>
                  <tr>
                    <td>{api.useForm.reValidateMode}</td>
                  </tr>
                </tbody>
              </table>
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

            <CodeArea
              url="https://codesandbox.io/s/react-hook-form-defaultvalues-v7-vd85w"
              rawData={defaultValues}
              tsUrl="https://codesandbox.io/s/react-hook-form-defaultvalues-v6-ts-forked-7z3v0"
              tsRawData={defaultValuesTs}
            />

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
                        <code>shouldFocusError:</code>
                        <br />
                        <code className={typographyStyles.typeText}>
                          boolean = true
                        </code>
                      </p>
                    </td>
                    <td>{api.useForm.submitFocusError}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <br />
            <p style={{ textAlign: "center" }}>♦</p>

            <ValidationResolver api={api} />
          </section>

          <Footer currentLanguage={currentLanguage} />
        </main>
      </div>
    </div>
  )
}
