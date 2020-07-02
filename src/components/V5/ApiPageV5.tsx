import * as React from "react"
import ApiRefTable from "../ApiRefTable"
import validationSchemaCode from "../V5/codeExamples/validationSchema"
import validationSchemaNative from "../V5/codeExamples/validationSchemaNative"
import CodeArea, { CodeSandBoxLink } from "../CodeArea"
import SideMenu from "../SideMenu"
import ApiFormState from "./ApiFormStateV5"
import resetCode from "../V5/codeExamples/resetCode"
import ApiWatch from "./ApiWatchV5"
import ApiErrors from "./ApiErrorsV5"
import handleSubmitCode from "../V5/codeExamples/handleSubmitCode"
import setError from "../V5/codeExamples/setError"
import clearError from "../V5/codeExamples/clearError"
import setValue from "../V5/codeExamples/setValue"
import setValueTs from "../V5/codeExamples/setValueTs"
import getValues from "../V5/codeExamples/getValues"
import getValuesTs from "../V5/codeExamples/getValuesTs"
import defaultValues from "./codeExamples/defaultExample"
import defaultValuesTs from "./codeExamples/defaultExampleTs"
import trigger from "../V5/codeExamples/trigger"
import Footer from "../Footer"
import FormContext from "../FormContext"
import unregisterCode from "../V5/codeExamples/unregisterCode"
import unregisterCodeTs from "../V5/codeExamples/unregisterCodeTs"
import Popup from "../Popup"
import { navigate } from "@reach/router"
import { useStateMachine } from "little-state-machine"
import generic from "../../data/generic"
import apiEn from "../../data/V5/en/api"
import ControllerV5 from "./ControllerV5"
import ErrorMessage from "./ErrorMessageV5"
import translateLink from "../logic/translateLink"
import TabGroup from "../TabGroup"
import setMultipleErrors from "../V5/codeExamples/setMultipleErrors"
import setAllErrors from "../V5/codeExamples/setAllErrors"
import resetCodeControlled from "../V5/codeExamples/resetCodeControlled"
import resetController from "../V5/codeExamples/resetController"
import resetControllerTs from "../V5/codeExamples/resetControllerTs"
import control from "../V5/codeExamples/control"
import nativeValidation from "../V5/codeExamples/nativeValidation"
import UseFieldArray from "../UseFieldArray"
import colors from "../../styles/colors"
import ValidationResolver from "./ValidationResolverV5"
import headerStyles from "../Header.module.css"
import typographyStyles from "../../styles/typography.module.css"
import tableStyles from "../../styles/table.module.css"
import buttonStyles from "../../styles/button.module.css"
import containerStyles from "../../styles/container.module.css"
import styles from "../ApiPage.module.css"

const { useRef, useEffect } = React

const enLinks = [
  apiEn.useForm,
  apiEn.register,
  apiEn.unregister,
  apiEn.errors,
  apiEn.watch,
  apiEn.handleSubmit,
  apiEn.reset,
  apiEn.setError,
  apiEn.clearError,
  apiEn.setValue,
  apiEn.getValues,
  apiEn.triggerValidation,
  apiEn.control,
  apiEn.formState,
  apiEn.Controller,
  apiEn.ErrorMessage,
  apiEn.useFormContext,
  apiEn.useFieldArray,
  apiEn.validationResolver,
  apiEn.validationSchema,
  apiEn.NativeValidation,
]

const codeSandBoxStyle = {
  position: "relative",
  left: 0,
  float: "right",
}

interface Props {
  formData?: any
  defaultLang: string
  api: any
}

function ApiPage({ formData, defaultLang, api }: Props) {
  const {
    state,
    state: { language },
  } = useStateMachine()
  const lightMode = state?.setting?.lightMode
  const isUnmount = useRef(false)
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }
  const [activeIndex, setActiveIndex] = React.useState(0)
  const links = [
    api.useForm,
    api.register,
    api.unregister,
    api.errors,
    api.watch,
    api.handleSubmit,
    api.reset,
    api.setError,
    api.clearError,
    api.setValue,
    api.getValues,
    api.triggerValidation,
    api.control,
    api.formState,
    api.Controller,
    api.ErrorMessage,
    api.useFormContext,
    api.useFieldArray,
    api.validationResolver,
    api.validationSchema,
    api.NativeValidation,
  ]
  const copyFormData = useRef([])
  const apiSectionsRef = useRef({
    useFormRef: null,
    registerRef: null,
    unregisterRef: null,
    errorsRef: null,
    watchRef: null,
    handleSubmitRef: null,
    resetRef: null,
    setErrorRef: null,
    clearErrorRef: null,
    setValueRef: null,
    getValuesRef: null,
    triggerValidationRef: null,
    controlRef: null,
    formStateRef: null,
    ControllerRef: null,
    ErrorMessageRef: null,
    useFormContextRef: null,
    useFieldArrayRef: null,
    validationResolverRef: null,
    validationSchemaRef: null,
    BrowserbuiltinvalidationRef: null,
  })
  copyFormData.current = formData

  const goToSection = (name, animate = true) => {
    const url = window.location.href
    const hashIndex = url.indexOf("#")
    const filterName = name.replace(/ |-/g, "")

    history.pushState(
      {},
      null,
      hashIndex < 0
        ? `${url}#${filterName}`
        : `${url.substr(0, hashIndex)}#${filterName}`
    )

    const refName = `${filterName}Ref`

    if (apiSectionsRef.current[refName]) {
      apiSectionsRef.current[refName].scrollIntoView(
        animate &&
          Math.abs(
            Object.keys(apiSectionsRef.current).findIndex(
              (item) => item === refName
            ) - activeIndex
          ) < 5
          ? { behavior: "smooth" }
          : undefined
      )
    }
  }

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => goToSection(location.hash.substr(1), false), 10)
    }
  }, [])

  useEffect(() => {
    if (isUnmount.current) return
    try {
      const observer = new IntersectionObserver(
        (entries) => {
          let index = 0
          const allTops = []
          for (const entrie of entries) {
            try {
              for (const key in apiSectionsRef.current) {
                const { top } = apiSectionsRef.current[
                  key
                ].getBoundingClientRect()
                allTops.push(top)
                index++
              }
            } catch {}
          }

          index = 0
          let foundIndex = 0
          let temp

          for (const top of allTops) {
            if (temp === undefined || Math.abs(top) < Math.abs(temp)) {
              temp = top
              foundIndex = index
            }
            index++
          }

          setActiveIndex(foundIndex)
        },
        {
          rootMargin: "100px",
          threshold: [0.01],
        }
      )

      Object.values(apiSectionsRef.current).forEach((item) => {
        if (item) {
          observer.observe(item)
        }
      })
    } catch {}

    return () => {
      isUnmount.current = true
    }
  }, [])

  return (
    <div className={containerStyles.container}>
      <div className={styles.hiddenMenu}>
        <h1 className={typographyStyles.headingWithTopMargin} id="main">
          API.<span style={{ fontWeight: 400, fontSize: 20 }}>V5</span>
        </h1>
        <div
          className={`${styles.quickSelect} ${
            lightMode ? styles.lightQuickSelect : ""
          }`}
        >
          <select
            aria-label={`${generic.select[currentLanguage]} API`}
            onChange={(e) => {
              goToSection(e.target.value)
            }}
          >
            <option>{generic.select[currentLanguage]} API</option>
            {links.map((option) => {
              const title =
                typeof option === "function" ? option().title : option.title

              return (
                <option value={title} key={title}>
                  {title}
                </option>
              )
            })}
          </select>
        </div>
      </div>
      <p className={typographyStyles.subHeading}>{api.header.description}</p>

      <div className={containerStyles.wrapper}>
        <SideMenu
          links={links}
          activeIndex={activeIndex}
          enLinks={enLinks}
          goToSection={goToSection}
          currentLanguage={currentLanguage}
        />

        <main>
          <div
            style={{
              border: `1px solid ${colors.lightBlue}`,
              marginBottom: 40,
              padding: "0 20px",
              borderRadius: 4,
            }}
          >
            {api.v5upgradeAlert}
          </div>

          <div
            className={styles.versionToggle}
            style={{
              marginTop: -9,
            }}
          >
            <div
              className={`${headerStyles.toggleGroup} ${headerStyles.smallToggleGroup}`}
              role="tablist"
              aria-label="Select video"
              style={{
                marginBottom: 10,
              }}
            >
              <button
                role="tab"
                aria-label="show v6 doc"
                aria-selected="false"
                aria-controls="tabPanel-2"
                onClick={() => navigate("/api")}
              >
                V6
              </button>
              <button
                disabled
                aria-label="show v5 doc"
                aria-selected="true"
                aria-controls="tabPanel-1"
                role="tab"
              >
                V5
              </button>
            </div>
          </div>

          <section
            ref={(ref) => {
              apiSectionsRef.current.useFormRef = ref
            }}
          >
            <code className={typographyStyles.codeHeading}>
              <h2>
                useForm:{" "}
                <span className={typographyStyles.typeText}>Function</span>
              </h2>
            </code>
            <p>
              {api.useForm.intro}
              <code
                className={buttonStyles.codeAsLink}
                onClick={() => goToSection("register")}
              >
                register
              </code>
              ,{" "}
              <code
                className={buttonStyles.codeAsLink}
                onClick={() => goToSection("unregister")}
              >
                unregister
              </code>
              ,{" "}
              <code
                className={buttonStyles.codeAsLink}
                onClick={() => goToSection("errors")}
              >
                errors
              </code>
              ,{" "}
              <code
                className={buttonStyles.codeAsLink}
                onClick={() => goToSection("watch")}
              >
                watch
              </code>
              ,{" "}
              <code
                className={buttonStyles.codeAsLink}
                onClick={() => goToSection("handleSubmit")}
              >
                handleSubmit
              </code>
              ,{" "}
              <code
                className={buttonStyles.codeAsLink}
                onClick={() => goToSection("reset")}
              >
                reset
              </code>
              ,{" "}
              <code
                className={buttonStyles.codeAsLink}
                onClick={() => goToSection("setError")}
              >
                setError
              </code>
              ,{" "}
              <code
                className={buttonStyles.codeAsLink}
                onClick={() => goToSection("clearError")}
              >
                clearError
              </code>
              ,{" "}
              <code
                className={buttonStyles.codeAsLink}
                onClick={() => goToSection("setValue")}
              >
                setValue
              </code>
              ,{" "}
              <code
                className={buttonStyles.codeAsLink}
                onClick={() => goToSection("getValues")}
              >
                getValues
              </code>
              ,{" "}
              <code
                className={buttonStyles.codeAsLink}
                onClick={() => goToSection("triggerValidation")}
              >
                triggerValidation
              </code>
              ,{" "}
              <code
                className={buttonStyles.codeAsLink}
                onClick={() => goToSection("control")}
              >
                control
              </code>{" "}
              and{" "}
              <code
                className={buttonStyles.codeAsLink}
                onClick={() => goToSection("formState")}
              >
                formState
              </code>
              .
            </p>

            {api.useForm.description}

            <CodeArea
              withOutCopy
              tsRawData={`const { register } = useForm<{ firstName: string, lastName: string }>({
  mode: 'onSubmit',
  reValidateMode: 'onChange',
  defaultValues: {},
  validationSchema: undefined, // Note: will be deprecated in the next major version with validationResolver
  validationResolver: undefined,
  validationContext: undefined,
  validateCriteriaMode: "firstErrorDetected",
  submitFocusError: true,
  nativeValidation: false, // Note: version 3 only
})`}
              rawData={`const { register } = useForm({
  mode: 'onSubmit',
  reValidateMode: 'onChange',
  defaultValues: {},
  validationSchema: undefined, // Note: will be deprecated in the next major version with validationResolver
  validationResolver: undefined,
  validationContext: undefined,
  validateCriteriaMode: "firstErrorDetected",
  submitFocusError: true,
  nativeValidation: false, // Note: version 3 only
})`}
            />

            <h5 className={typographyStyles.h5}>
              <code>
                mode:{" "}
                <span className={typographyStyles.typeText}>
                  string = 'onSubmit'
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
              <Popup
                top={3}
                message="React Native: Custom register or using Controller"
              />
            </h5>

            {api.useForm.defaultValues(goToSection)}

            <CodeArea
              url="https://codesandbox.io/s/react-hook-form-defaultvalues-v5-5s1d8"
              rawData={defaultValues}
              tsUrl="https://codesandbox.io/s/react-hook-form-defaultvalues-v5-ts-q1ws6"
              tsRawData={defaultValuesTs}
            />

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
                          validationSchema: <br />
                          <span className={styles.mobileTypeText}>Object</span>
                        </code>
                      </h5>
                    </td>
                    <td>
                      {api.useForm.validationSchema(goToSection)}
                      <CodeSandBoxLink
                        style={codeSandBoxStyle}
                        url="https://codesandbox.io/s/928po918qr"
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
                          validationResolver: <br />
                          <span className={styles.mobileTypeText}>
                            Function
                          </span>
                        </code>
                      </h5>
                    </td>
                    <td>{api.useForm.validationResolver(goToSection)}</td>
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
                          validationContext: <br />
                          <span className={styles.mobileTypeText}>Object</span>
                        </code>
                      </h5>
                    </td>
                    <td>{api.useForm.validateContext}</td>
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
                          validateCriteriaMode: <br />
                          <span className={styles.mobileTypeText}>
                            firstErrorDetected | all
                          </span>
                        </code>
                      </h5>
                    </td>
                    <td>
                      {api.useForm.validateCriteriaMode}
                      <CodeSandBoxLink
                        style={codeSandBoxStyle}
                        url="https://codesandbox.io/s/react-hook-form-errors-validatecriteriamode-all-qbskc"
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
                          reValidateMode: <br />
                          <span className={styles.mobileTypeText}>
                            onChange | onBlur | onSubmit
                          </span>
                        </code>
                      </h5>
                    </td>
                    <td>{api.useForm.reValidateMode}</td>
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
                          submitFocusError: <br />
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

            <p style={{ textAlign: "center" }}>♦</p>
          </section>

          <section
            ref={(ref) => {
              apiSectionsRef.current.registerRef = ref
            }}
          >
            <code className={typographyStyles.codeHeading}>
              <h2>
                register:{" "}
                <span
                  className={typographyStyles.typeText}
                >{`(Ref, validateRule?) => void`}</span>
                <Popup message="React Native: Custom register or using Controller" />
              </h2>
            </code>

            <ApiRefTable
              api={api}
              goToSection={goToSection}
              currentLanguage={currentLanguage}
            />
          </section>

          <hr />

          <section
            ref={(ref) => {
              apiSectionsRef.current.unregisterRef = ref
            }}
          >
            <code className={typographyStyles.codeHeading}>
              <h2>
                unregister:{" "}
                <span
                  className={typographyStyles.typeText}
                >{`(name: string | string[]) => void`}</span>
              </h2>
            </code>

            {api.unregister.description}

            <CodeArea
              url="https://codesandbox.io/s/react-hook-form-unregister-v5-cy6ls"
              rawData={unregisterCode}
              tsUrl="https://codesandbox.io/s/react-hook-form-unregister-v5-ts-7z4h8"
              tsRawData={unregisterCodeTs}
            />
          </section>

          <hr />

          <section
            ref={(ref) => {
              apiSectionsRef.current.errorsRef = ref
            }}
          >
            <ApiErrors
              currentLanguage={currentLanguage}
              api={api}
              goToSection={goToSection}
            />
          </section>

          <section
            ref={(ref) => {
              apiSectionsRef.current.watchRef = ref
            }}
          >
            <ApiWatch currentLanguage={currentLanguage} api={api} />
          </section>

          <section
            ref={(ref) => {
              apiSectionsRef.current.handleSubmitRef = ref
            }}
          >
            <code className={typographyStyles.codeHeading}>
              <h2>
                handleSubmit:{" "}
                <span className={typographyStyles.typeText}>
                  (data: Object, e: Event) =&gt; () =&gt; void
                </span>
              </h2>
            </code>
            {api.handleSubmit.description}
            <CodeArea
              rawData={handleSubmitCode}
              url="https://codesandbox.io/s/yj07z1639"
            />
          </section>

          <hr />

          <section
            ref={(ref) => {
              apiSectionsRef.current.resetRef = ref
            }}
          >
            <code className={typographyStyles.codeHeading}>
              <h2>
                reset:{" "}
                <span
                  className={typographyStyles.typeText}
                >{`(values?: Record<string, any>, omitResetState: OmitResetState = {}) => void`}</span>
              </h2>
            </code>

            {api.reset(goToSection).description}

            <TabGroup
              buttonLabels={[
                "Uncontrolled",
                "Controller",
                "Controlled / React Native",
              ]}
            >
              <CodeArea
                rawData={resetCode}
                url="https://codesandbox.io/s/jjm3wyqmjy"
              />
              <CodeArea
                rawData={resetController}
                url="https://codesandbox.io/s/react-hook-form-controller-079xx"
                tsRawData={resetControllerTs}
                tsUrl="https://codesandbox.io/s/react-hook-form-controller-ts-v5-g2gmc"
              />
              <CodeArea
                rawData={resetCodeControlled}
                url="https://codesandbox.io/s/sharp-grothendieck-42mjo"
              />
            </TabGroup>
          </section>

          <hr />

          <section
            ref={(ref) => {
              apiSectionsRef.current.setErrorRef = ref
            }}
          >
            <code className={typographyStyles.codeHeading}>
              <h2>
                setError: <br />
                <span className={typographyStyles.typeText}>
                  {`(name: string | ManualFieldError[], type?: string | Object, message?: string | React.ReactElement) => void`}
                </span>
              </h2>
            </code>
            {api.setError.description}

            <TabGroup
              buttonLabels={[
                "Single Error",
                "Multiple Errors",
                "Single Field Errors",
              ]}
            >
              <CodeArea
                rawData={setError}
                url="https://codesandbox.io/s/o7rxyym3q5"
              />
              <CodeArea
                rawData={setMultipleErrors}
                url="https://codesandbox.io/s/o7rxyym3q5"
              />
              <CodeArea
                rawData={setAllErrors}
                url="https://codesandbox.io/s/react-hook-form-set-single-field-with-multiple-errors-40y2v"
              />
            </TabGroup>
          </section>

          <hr />

          <section
            ref={(ref) => {
              apiSectionsRef.current.clearErrorRef = ref
            }}
          >
            <code className={typographyStyles.codeHeading}>
              <h2>
                clearError:{" "}
                <span className={typographyStyles.typeText}>
                  (name?: string | string[]) =&gt; void
                </span>
              </h2>
            </code>
            {api.clearError.description}

            <CodeArea rawData={clearError} />
          </section>

          <hr />

          <section
            ref={(ref) => {
              apiSectionsRef.current.setValueRef = ref
            }}
          >
            <code className={typographyStyles.codeHeading}>
              <h2>setValue: </h2>
            </code>
            <p>
              <span className={typographyStyles.typeText}>
                (name: string, value: any, shouldValidate?: boolean) =&gt; void
              </span>
              <br />
              <span className={typographyStyles.typeText}>
                {`(Record<Name, any>[], shouldValidate?: boolean) => void`}
              </span>
            </p>

            {api.setValue.description}

            <CodeArea
              rawData={setValue}
              tsRawData={setValueTs}
              url="https://codesandbox.io/s/react-hook-form-set-inputselect-value-c46ly"
            />
          </section>

          <hr />

          <section
            ref={(ref) => {
              apiSectionsRef.current.getValuesRef = ref
            }}
          >
            <code className={typographyStyles.codeHeading}>
              <h2>
                getValues:{" "}
                <span
                  className={typographyStyles.typeText}
                >{`(payload?: { nest: boolean } | string) => Object`}</span>
              </h2>
            </code>

            {api.getValues.description}

            <CodeArea
              rawData={getValues}
              tsRawData={getValuesTs}
              url="https://codesandbox.io/s/get-form-values-xjepz"
            />
          </section>

          <hr />

          <section
            ref={(ref) => {
              apiSectionsRef.current.triggerValidationRef = ref
            }}
          >
            <code className={typographyStyles.codeHeading}>
              <h2>
                triggerValidation:{" "}
                <span className={typographyStyles.typeText}>
                  {`(payload?: string | string[]) => Promise<boolean>`}
                </span>
              </h2>
            </code>
            {api.triggerValidation.description}

            <CodeArea
              rawData={trigger}
              url="https://codesandbox.io/s/react-hook-form-trigger-validation-w1g0m"
            />
          </section>

          <hr />

          <section
            ref={(ref) => {
              apiSectionsRef.current.controlRef = ref
            }}
          >
            <code className={typographyStyles.codeHeading}>
              <h2>
                control:{" "}
                <span className={typographyStyles.typeText}>Object</span>
              </h2>
            </code>
            {api.control.description}

            <CodeArea
              rawData={control}
              url="https://codesandbox.io/s/react-hook-form-controller-5xi7n"
            />
          </section>

          <hr />

          <section
            ref={(ref) => {
              apiSectionsRef.current.formStateRef = ref
            }}
          >
            <ApiFormState
              currentLanguage={currentLanguage}
              api={api}
              sectionsRef={apiSectionsRef}
            />
          </section>

          <hr />

          <section ref={(ref) => (apiSectionsRef.current.ControllerRef = ref)}>
            <ControllerV5 currentLanguage={currentLanguage} api={api} />
          </section>

          <hr />

          <section
            ref={(ref) => (apiSectionsRef.current.ErrorMessageRef = ref)}
          >
            <ErrorMessage currentLanguage={currentLanguage} api={api} />
          </section>

          <hr />

          <section
            ref={(ref) => (apiSectionsRef.current.useFormContextRef = ref)}
          >
            <FormContext currentLanguage={currentLanguage} api={api} />
          </section>

          <hr />

          <section
            ref={(ref) => (apiSectionsRef.current.useFieldArrayRef = ref)}
          >
            <UseFieldArray currentLanguage={currentLanguage} api={api} />
          </section>

          <hr />

          <section
            ref={(ref) => (apiSectionsRef.current.validationResolverRef = ref)}
          >
            <ValidationResolver currentLanguage={currentLanguage} api={api} />
          </section>

          <hr />

          <section
            ref={(ref) => {
              apiSectionsRef.current.validationSchemaRef = ref
            }}
          >
            <code className={typographyStyles.codeHeading}>
              <h2>
                validationSchema:{" "}
                <span className={typographyStyles.typeText}>Object</span>
              </h2>
            </code>

            {api.validationSchema.description}

            <TabGroup buttonLabels={["Web", "React Native"]}>
              <CodeArea
                rawData={validationSchemaCode}
                url="https://codesandbox.io/s/928po918qr"
              />
              <CodeArea rawData={validationSchemaNative} />
            </TabGroup>
          </section>

          <hr />

          <section
            ref={(ref) => {
              apiSectionsRef.current.BrowserbuiltinvalidationRef = ref
            }}
          >
            <h2 className={typographyStyles.codeHeading}>
              Browser built-in validation (V3 only)
            </h2>

            {api.NativeValidation.description}

            <CodeArea
              rawData={nativeValidation}
              url="https://codesandbox.io/s/react-hook-form-native-validation-ez5ww"
            />
          </section>

          <div
            className={containerStyles.centerContent}
            style={{ marginTop: 100 }}
          >
            <h1>{generic.advanceUsage[currentLanguage].title}</h1>
            <p>{generic.advanceUsage[currentLanguage].description}</p>
            <button
              className={buttonStyles.primaryButton}
              onClick={() => {
                navigate(translateLink("/advanced-usage", currentLanguage))
              }}
              style={{ margin: "40px auto" }}
            >
              {generic.advanceUsage[currentLanguage].buttonText}
            </button>
          </div>
          <Footer currentLanguage={currentLanguage} />
        </main>
      </div>
    </div>
  )
}

export default React.memo(ApiPage)
