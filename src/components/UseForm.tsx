import * as React from "react"
import { useStateMachine } from "little-state-machine"
import Footer from "./Footer"
import { Menu } from "./Menu"
import VideoList from "./VideoList"
import CodeArea, { CodeSandBoxLink } from "./CodeArea"
import Popup from "./Popup"
import generic from "../data/generic"
import defaultValues from "./codeExamples/defaultValues"
import defaultValuesTs from "./codeExamples/defaultValuesTs"
import ValidationResolver from "./ValidationResolver"
import api from "../data/en/api"
import typographyStyles from "../styles/typography.module.css"
import styles from "./ApiGallery.module.css"
import containerStyles from "../styles/container.module.css"
import tableStyles from "../styles/table.module.css"

const codeSandBoxStyle = {
  position: "relative",
  left: 0,
  float: "right",
}

export default ({ currentLanguage }) => {
  const [play, setPlay] = React.useState(false)

  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        useForm
      </h1>
      <p className={typographyStyles.subHeading}>
        React Hook Form's API overview
      </p>

      <div className={containerStyles.wrapper}>
        <Menu />

        <main>
          <section id="useFormRef">
            <code className={typographyStyles.codeHeading}>
              <h2>
                useForm:{" "}
                <span className={typographyStyles.typeText}>Function</span>
                <button
                  className={typographyStyles.videoLink}
                  onClick={() => setPlay(!play)}
                >
                  Videos
                </button>
              </h2>
            </code>

            <VideoList
              lists={[
                {
                  url: "https://www.youtube.com/watch?v=bU_eq8qyjic",
                  title:
                    "The BEST Way To Create Forms In React - React Hook Form Tutorial - How To Create Forms In React",
                },
                {
                  url: "https://www.youtube.com/watch?v=PcrrJ0BOFGw",
                  title: "React Hook Form Tutorial | Why It's Useful",
                },
                {
                  url: "https://www.youtube.com/watch?v=bQRIBpKN8-s",
                  title:
                    "React Hook Form Tutorial - How to Create a Custom Input",
                },
                {
                  url: "https://www.youtube.com/watch?v=oSIHZ9zKzVA",
                  title: "Make React Forms EASY with React Hook Form!",
                },
              ]}
              play={play}
            />

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
                    <td>onSubmit (Default)</td>
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
                <a
                  className={typographyStyles.videoLink}
                  href="https://www.youtube.com/watch?v=jHQC2NY0A-k"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video
                </a>
              </code>
            </h5>

            {api.useForm.defaultValues}

            <CodeArea
              url="https://codesandbox.io/s/react-hook-form-defaultvalues-v6-09b8g"
              rawData={defaultValues}
              tsUrl="https://codesandbox.io/s/react-hook-form-defaultvalues-v6-ts-i497w"
              tsRawData={defaultValuesTs}
            />

            <ValidationResolver api={api} />

            <div className={tableStyles.tableWrapper}>
              <table className={tableStyles.table}>
                <tbody>
                  <tr>
                    <td>
                      <h5
                        className={typographyStyles.h5}
                        style={{
                          border: "none",
                          marginTop: 20,
                        }}
                      >
                        <code>
                          context: <br />
                          <span className={styles.mobileTypeText}>object</span>
                        </code>
                      </h5>
                    </td>
                    <td>
                      {api.useForm.validateContext}
                      <CodeSandBoxLink
                        style={codeSandBoxStyle}
                        url="https://codesandbox.io/s/resolver-context-sd2vj"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5
                        className={typographyStyles.h5}
                        style={{
                          border: "none",
                          marginTop: 20,
                        }}
                      >
                        <code>
                          criteriaMode <br />
                          <span className={styles.mobileTypeText}>
                            firstError | all
                          </span>
                        </code>
                      </h5>
                    </td>
                    <td>
                      {api.useForm.validateCriteriaMode}
                      <CodeSandBoxLink
                        style={codeSandBoxStyle}
                        url="https://codesandbox.io/s/react-hook-form-v6-errors-validatecriteriamode-all-z60r2"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h5
                        className={typographyStyles.h5}
                        style={{
                          border: "none",
                          marginTop: 20,
                        }}
                      >
                        <code>
                          shouldFocusError: <br />
                          <span className={styles.mobileTypeText}>
                            boolean = true
                          </span>
                        </code>
                      </h5>
                    </td>
                    <td>{api.useForm.submitFocusError}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <Footer currentLanguage={currentLanguage} />
        </main>
      </div>
    </div>
  )
}
