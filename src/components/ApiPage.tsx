import * as React from "react"
import ApiRefTable from "./ApiRefTable"
import CodeArea, { CodeSandBoxLink } from "./CodeArea"
import SideMenu from "./SideMenu"
import ApiFormState from "./ApiFormState"
import resetCode from "./codeExamples/resetCode"
import ApiWatch from "./ApiWatch"
import ApiErrors from "./ApiErrors"
import handleSubmitCode from "./codeExamples/handleSubmitCode"
import setError from "./codeExamples/setError"
import clearError from "./codeExamples/clearError"
import setValue from "./codeExamples/setValue"
import setValueTs from "./codeExamples/setValueTs"
import getValues from "./codeExamples/getValues"
import getValuesTs from "./codeExamples/getValuesTs"
import trigger from "./codeExamples/trigger"
import Footer from "./Footer"
import FormContext from "./FormContext"
import unregisterCode from "./codeExamples/unregisterCode"
import Popup from "./Popup"
import { navigate } from "@reach/router"
import { useStateMachine } from "little-state-machine"
import generic from "../data/generic"
import apiContent from "../data/api"
import Controller from "./Controller"
import ErrorMessage from "./ErrorMessage"
import translateLink from "./logic/translateLink"
import TabGroup from "./TabGroup"
import setMultipleErrors from "./codeExamples/setMultipleErrors"
import setAllErrors from "./codeExamples/setAllErrors"
import resetCodeControlled from "./codeExamples/resetCodeControlled"
import resetController from "./codeExamples/resetController"
import control from "./codeExamples/control"
import UseFieldArray from "./UseFieldArray"
import ValidationResolver from "./ValidationResolver"
import UseWatch from "./UseWatch"
import typographyStyles from "../styles/typography.module.css"
import tableStyles from "../styles/table.module.css"
import buttonStyles from "../styles/button.module.css"
import containerStyles from "../styles/container.module.css"
import headerStyles from "./Header.module.css"
import styles from "./ApiPage.module.css"
import { getNavLink } from "./Nav"

const { useRef, useEffect } = React

const apiEn = apiContent["en"]
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
  apiEn.trigger,
  apiEn.control,
  apiEn.formState,
  apiEn.Controller,
  apiEn.ErrorMessage,
  apiEn.useFormContext,
  apiEn.useWatch,
  apiEn.useFieldArray,
]

const codeSandBoxStyle = {
  position: "relative",
  left: 0,
  float: "right",
}

function ApiPage({
  formData,
  defaultLang,
}: {
  formData?: any
  defaultLang: string
}) {
  const {
    state,
    state: { language },
  } = useStateMachine()
  // @ts-ignore
  const lightMode = state?.setting?.lightMode
  const isUnmount = useRef(false)
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }
  const api = apiContent[currentLanguage]
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
    api.trigger,
    api.control,
    api.formState,
    api.Controller,
    api.ErrorMessage,
    api.useFormContext,
    api.useWatch,
    api.useFieldArray,
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
    triggerRef: null,
    controlRef: null,
    formStateRef: null,
    ControllerRef: null,
    ErrorMessageRef: null,
    useFormContextRef: null,
    useFieldArrayRef: null,
    useWatchRef: null,
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
          API.<span style={{ fontWeight: 400, fontSize: 20 }}>V6</span>
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
          version={6}
          links={links}
          activeIndex={activeIndex}
          enLinks={enLinks}
          goToSection={goToSection}
          currentLanguage={currentLanguage}
        />

        <main>
          <div className={styles.versionToggle}>
            <div
              className={`${headerStyles.toggleGroup} ${headerStyles.smallToggleGroup}`}
              role="tablist"
              aria-label="Select video"
              style={{
                marginBottom: 10,
              }}
            >
              <button
                disabled
                role="tab"
                aria-label="show v6 doc"
                aria-selected="false"
                aria-controls="tabPanel-2"
              >
                V6
              </button>
              <button
                aria-label="show v5 doc"
                aria-selected="true"
                aria-controls="tabPanel-1"
                role="tab"
                onClick={() => {
                  navigate(getNavLink(`v5/api`, currentLanguage))
                }}
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

            {api.useForm.description}

            <CodeArea
              withOutCopy
              tsRawData={`const { register } = useForm<{ firstName: string, lastName: string }>({
  mode: 'onSubmit',
  reValidateMode: 'onChange',
  defaultValues: {},
  resolver: undefined,
  context: undefined,
  criteriaMode: "firstErrorDetected",
  submitFocusError: true,
})`}
              rawData={`const { register } = useForm({
  mode: 'onSubmit',
  reValidateMode: 'onChange',
  defaultValues: {},
  resolver: undefined,
  context: undefined,
  criteriaMode: "firstErrorDetected",
  submitFocusError: true,
})`}
            />

            <h5 className={typographyStyles.h5}>
              <code>
                mode:{" "}
                <span className={typographyStyles.typeText}>
                  onChange | onBlur | onSubmit = 'onSubmit'
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

              <h5 className={typographyStyles.h5} style={{ marginTop: 20 }}>
                <code>
                  reValidateMode:{" "}
                  <span className={typographyStyles.typeText}>
                    onChange | onBlur | onSubmit = 'onSubmit'
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

            {api.useForm.defaultValues(goToSection)}

            <CodeArea
              url="https://codesandbox.io/s/react-hook-form-defaultvalues-n5gvx"
              rawData={`const { register } = useForm({
  defaultValues: {
    firstName: "bill",
    lastName: "luo",
    email: "bluebill1049@hotmail.com",
    pets: [ 'dog', 'cat' ]
  }
})

<input name="firstName" ref={register} /> // ✅ working version
<input name="lastName" ref={() => register({ name: 'lastName' })} />
// ❌ above example does not work with "defaultValues" due to its "ref" not being provided
`}
              tsRawData={`type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  pets: string[];
}
  
const { register } = useForm<Inputs>({
  defaultValues: {
    firstName: "bill",
    lastName: "luo",
    email: "bluebill1049@hotmail.com",
    pets: [ 'dog', 'cat' ]
  }
})

<input name="firstName" ref={register} /> // ✅ working version
<input name="lastName" ref={() => register({ name: 'lastName' })} />
// ❌ above example does not work with "defaultValues" due to its "ref" not being provided
`}
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
              url="https://codesandbox.io/s/react-hook-form-unregister-zjvr1"
              rawData={unregisterCode}
            />
          </section>

          <hr />

          <section
            ref={(ref) => {
              apiSectionsRef.current.errorsRef = ref
            }}
          >
            <ApiErrors currentLanguage={currentLanguage} api={api} />
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
                  (data: Object, e: Event) => () => void
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
                  {`(name: string | ManualFieldError[], type?: string | Object, message?: string) => void`}
                </span>
              </h2>
            </code>
            {api.setError.description}

            <TabGroup
              buttonLabels={[
                "Single Error",
                "Multiple Error",
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
                  (name?: string | string[]) => void
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
                (name: string, value: any, shouldValidate?: boolean) => void
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
                >{`(payload?: string | string[]) => Object`}</span>
              </h2>
            </code>

            {api.getValues.description}

            <CodeArea
              rawData={getValues}
              tsRawData={getValuesTs}
              url="https://codesandbox.io/s/react-hook-form-v6-get-form-values-80c2g"
            />
          </section>

          <hr />

          <section
            ref={(ref) => {
              apiSectionsRef.current.triggerRef = ref
            }}
          >
            <code className={typographyStyles.codeHeading}>
              <h2>
                trigger:{" "}
                <span className={typographyStyles.typeText}>
                  {`(payload?: string | string[]) => Promise<boolean>`}
                </span>
              </h2>
            </code>
            {api.trigger.description}

            <CodeArea
              rawData={trigger}
              url="https://codesandbox.io/s/react-hook-form-v6-trigger-validation-5v9xf"
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
              // @ts-ignore
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
            <Controller currentLanguage={currentLanguage} api={api} />
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

          <section ref={(ref) => (apiSectionsRef.current.useWatchRef = ref)}>
            <UseWatch currentLanguage={currentLanguage} api={api} />
          </section>

          <hr />

          <section
            ref={(ref) => (apiSectionsRef.current.useFieldArrayRef = ref)}
          >
            <UseFieldArray currentLanguage={currentLanguage} api={api} />
          </section>

          <hr />

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
