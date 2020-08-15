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
import setErrorTs from "./codeExamples/setErrorTs"
import clearError from "./codeExamples/clearError"
import clearErrorTs from "./codeExamples/clearErrorTs"
import setValue from "./codeExamples/setValue"
import setValueTs from "./codeExamples/setValueTs"
import setValueTypes from "./codeExamples/setValueTypes"
import getValues from "./codeExamples/getValues"
import getValuesTs from "./codeExamples/getValuesTs"
import defaultValues from "./codeExamples/defaultValues"
import defaultValuesTs from "./codeExamples/defaultValuesTs"
import trigger from "./codeExamples/trigger"
import triggerTs from "./codeExamples/triggerTs"
import Footer from "./Footer"
import FormContext from "./FormContext"
import unregisterCode from "./codeExamples/unregisterCode"
import unregisterCodeTs from "./codeExamples/unregisterCodeTs"
import Popup from "./Popup"
import { navigate } from "@reach/router"
import { useStateMachine } from "little-state-machine"
import generic from "../data/generic"
import apiEn from "../data/en/api"
import Controller from "./Controller"
import ErrorMessage from "./ErrorMessage"
import translateLink from "./logic/translateLink"
import TabGroup from "./TabGroup"
import setMultipleErrors from "./codeExamples/setMultipleErrors"
import setMultipleErrorsTs from "./codeExamples/setMultipleErrorsTs"
import setAllErrors from "./codeExamples/setAllErrors"
import setAllErrorsTs from "./codeExamples/setAllErrorsTs"
import resetController from "./codeExamples/resetController"
import resetControllerTs from "./codeExamples/resetControllerTs"
import control from "./codeExamples/control"
import UseFieldArray from "./UseFieldArray"
import ValidationResolver from "./ValidationResolver"
import UseWatch from "./UseWatch"
import { getNavLink } from "./Nav"
import handleSubmitCodeTs from "./codeExamples/handleSubmitCodeTs"
import VideoList from "./VideoList"
import typographyStyles from "../styles/typography.module.css"
import tableStyles from "../styles/table.module.css"
import buttonStyles from "../styles/button.module.css"
import containerStyles from "../styles/container.module.css"
import headerStyles from "./Header.module.css"
import styles from "./ApiPage.module.css"
import resetCodeTs from "./codeExamples/resetCodeTs"
import getValuesTypes from "./codeExamples/getValuesTypes"
import controlTs from "./codeExamples/controlTs"

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
  const [play, setPlay] = React.useState(false)
  const links = [
    {
      ...api.useForm,
      size: "5KB",
    },
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
    {
      ...api.Controller,
      size: "1.2KB",
    },
    {
      ...api.ErrorMessage,
      size: "649B",
    },
    {
      ...api.useFormContext,
      size: "100B",
    },
    {
      ...api.useWatch,
      size: "1KB",
    },
    {
      ...api.useFieldArray,
      size: "3KB",
    },
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
    clearErrorsRef: null,
    setValueRef: null,
    getValuesRef: null,
    triggerRef: null,
    controlRef: null,
    formStateRef: null,
    ControllerRef: null,
    ErrorMessageRef: null,
    useFormContextRef: null,
    useWatchRef: null,
    useFieldArrayRef: null,
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
        () => {
          const allTops = Object.keys(apiSectionsRef.current).reduce(
            (acc, cur) => {
              if (apiSectionsRef.current[cur]) {
                acc.push(
                  apiSectionsRef.current[cur].getBoundingClientRect().top
                )
              }
              return acc
            },
            []
          )

          const smallestAbsoluteTop = Math.min(
            ...allTops.map((top) => Math.abs(top))
          )
          const smallestAbsoluteTopIndex = allTops.findIndex(
            (top) => Math.abs(top) === smallestAbsoluteTop
          )
          setActiveIndex(smallestAbsoluteTopIndex)
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
                  navigate(getNavLink(`/v5/api`, currentLanguage))
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
              rawData={`
const { register } = useForm({
  mode: 'onSubmit',
  reValidateMode: 'onChange',
  defaultValues: {},
  resolver: undefined,
  context: undefined,
  criteriaMode: "firstError",
  shouldFocusError: true,
  shouldUnregister: true,
})`}
              tsRawData={`
type FormInputs = {
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
  shouldUnregister: true,
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

            {api.useForm.defaultValues(goToSection)}

            <CodeArea
              url="https://codesandbox.io/s/react-hook-form-defaultvalues-v6-09b8g"
              rawData={defaultValues}
              tsUrl="https://codesandbox.io/s/react-hook-form-defaultvalues-v6-ts-i497w"
              tsRawData={defaultValuesTs}
            />

            <ValidationResolver api={api} />

            <h5 className={typographyStyles.h5} style={{ marginTop: 20 }}>
              <code>
                shouldUnregister:{" "}
                <span className={typographyStyles.typeText}>
                  boolean = true
                </span>
              </code>

              <CodeSandBoxLink
                style={{
                  ...codeSandBoxStyle,
                  top: 0,
                }}
                url="https://codesandbox.io/s/autounregister-4e91k"
              />
            </h5>

            {api.useForm.shouldUnregister}

            <div className={tableStyles.tableWrapper}>
              <table
                className={tableStyles.table}
                style={{ marginTop: 0, width: "100%" }}
              >
                <thead>
                  <tr style={{ borderBottom: "1px solid rgb(236, 89, 144)" }}>
                    <td width={320}></td>
                    <td width={200}>
                      <code>true</code>
                    </td>
                    <td>
                      <code>false</code>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Can you unregister an input?</td>
                    <td>
                      <span role="img" aria-label="approving-checkbox">
                        ✅
                      </span>
                    </td>
                    <td>
                      <span role="img" aria-label="unapproving-cancel">
                        ❌
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Value remains when input unmounts?</td>
                    <td>
                      <span role="img" aria-label="unapproving-cancel">
                        ❌
                      </span>
                    </td>
                    <td>
                      <span role="img" aria-label="approving-checkbox">
                        ✅
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Is form state updated? <br />
                      eg: <code>isValid, isDirty, touched</code>
                    </td>
                    <td>
                      <span role="img" aria-label="approving-checkbox">
                        ✅
                      </span>
                    </td>
                    <td>
                      <span role="img" aria-label="unapproving-cancel">
                        ❌ you will need to clear manually
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

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
              url="https://codesandbox.io/s/react-hook-form-unregister-v6-9nyzn"
              rawData={unregisterCode}
              tsUrl="https://codesandbox.io/s/react-hook-form-unregister-v6-ts-0ocnw"
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
                handleSubmit: <br />
                <span className={typographyStyles.typeText}>
                  ((data: Object, e?: Event) =&gt; void, (errors: Object, e?:
                  Event) => void) =&gt; Function
                </span>
              </h2>
            </code>
            {api.handleSubmit.description}
            <CodeArea
              rawData={handleSubmitCode}
              tsRawData={handleSubmitCodeTs}
              url="https://codesandbox.io/s/react-hook-form-handlesubmit-v6-uqmiy"
              tsUrl="https://codesandbox.io/s/react-hook-form-handlesubmit-ts-v6-994mz"
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

            <TabGroup buttonLabels={["Uncontrolled", "Controller"]}>
              <CodeArea
                rawData={resetCode}
                tsRawData={resetCodeTs}
                url="https://codesandbox.io/s/react-hook-form-reset-v6-ndwid"
                tsUrl="https://codesandbox.io/s/react-hook-form-reset-v6-ts-3ocgd"
              />
              <CodeArea
                rawData={resetController}
                tsRawData={resetControllerTs}
                url="https://codesandbox.io/s/react-hook-form-v6-controller-24gcl"
                tsUrl="https://codesandbox.io/s/react-hook-form-v6-controller-ts-4dpm9"
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
                setError:
                <span className={typographyStyles.typeText}>
                  {`(name: string, error: { type: string, types: object, message?: string }) => void`}
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
                tsRawData={setErrorTs}
                url="https://codesandbox.io/s/react-hook-form-v6-seterror-9cebt"
                tsUrl="https://codesandbox.io/s/react-hook-form-v6-ts-seterror-h74dz"
              />
              <CodeArea
                rawData={setMultipleErrors}
                tsRawData={setMultipleErrorsTs}
                url="https://codesandbox.io/s/react-hook-form-v6-seterror-9cebt"
                tsUrl="https://codesandbox.io/s/react-hook-form-v6-ts-seterror-h74dz"
              />
              <CodeArea
                rawData={setAllErrors}
                tsRawData={setAllErrorsTs}
                url="https://codesandbox.io/s/react-hook-form-v6-seterror-9cebt"
                tsUrl="https://codesandbox.io/s/react-hook-form-v6-ts-seterror-h74dz"
              />
            </TabGroup>
          </section>

          <hr />

          <section
            ref={(ref) => {
              apiSectionsRef.current.clearErrorsRef = ref
            }}
          >
            <code className={typographyStyles.codeHeading}>
              <h2>
                clearErrors:{" "}
                <span className={typographyStyles.typeText}>
                  (name?: string | string[]) =&gt; void
                </span>
              </h2>
            </code>
            {api.clearError.description}

            <CodeArea
              rawData={clearError}
              url="https://codesandbox.io/s/react-hook-form-v6-clearerrors-887rh"
              tsRawData={clearErrorTs}
              tsUrl="https://codesandbox.io/s/react-hook-form-v6-ts-clearerrors-0zry5"
            />
          </section>

          <hr />

          <section
            ref={(ref) => {
              apiSectionsRef.current.setValueRef = ref
            }}
          >
            <code className={typographyStyles.codeHeading}>
              <h2>
                setValue:{" "}
                <span className={typographyStyles.typeText}>
                  (name: string, value: any, config?: Object) =&gt; void
                </span>
              </h2>
            </code>

            {api.setValue.description}

            <CodeArea
              rawData={setValue}
              url="https://codesandbox.io/s/react-hook-form-v6-setvalue-wjplb"
              tsRawData={setValueTs}
              rawTypes={setValueTypes}
              tsUrl="https://codesandbox.io/s/react-hook-form-v6-ts-setvalue-4nq5e"
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
              url="https://codesandbox.io/s/react-hook-form-v6-getvalues-v2gc7"
              tsRawData={getValuesTs}
              tsUrl="https://codesandbox.io/s/react-hook-form-v6-ts-getvalues-u7xb1"
              rawTypes={getValuesTypes}
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
              url="https://codesandbox.io/s/react-hook-form-v6-triggervalidation-b6j5h"
              tsRawData={triggerTs}
              tsUrl="https://codesandbox.io/s/react-hook-form-v6-ts-triggervalidation-xj8gk"
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
              url="https://codesandbox.io/s/react-hook-form-v6-controller-24gcl"
              tsRawData={controlTs}
              tsUrl="https://codesandbox.io/s/react-hook-form-v6-controller-ts-4dpm9"
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
