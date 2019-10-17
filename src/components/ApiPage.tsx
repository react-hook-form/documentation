import * as React from "react"
import styled from "styled-components"
import colors from "../styles/colors"
import {
  SubHeading,
  HeadingWithTopMargin,
  H5,
  Note,
  H1,
} from "../styles/typography"
import ApiRefTable from "./ApiRefTable"
import validationSchemaCode from "./codeExamples/validationSchema"
import Link from "../styles/link"
import code from "./codeExamples/defaultExample"
import CodeArea, { CodeSandBoxLink } from "./CodeArea"
import SideMenu from "./SideMenu"
import ApiFormState from "./ApiFormState"
import resetCode from "./codeExamples/resetCode"
import ApiWatch from "./ApiWatch"
import ApiErrors from "./ApiErrors"
import handleSubmitCode from "./codeExamples/handleSubmitCode"
import setError from "./codeExamples/setError"
import setValue from "./codeExamples/setValue"
import { Container, Wrapper } from "../styles/containers"
import getValues from "./codeExamples/getValues"
import typeScript from "./codeExamples/typeScript"
import trigger from "./codeExamples/trigger"
import Footer from "./Footer"
import FormContext from "./FormContext"
import nativeValidation from "./codeExamples/nativeValidation"
import reactNative from "./codeExamples/reactNative"
import unregisterCode from "./codeExamples/unregisterCode"
import breakpoints from "../styles/breakpoints"
import Popup from "./Popup"
import { PrimaryButton } from "../styles/buttons"
import { navigate } from "@reach/router"
import { useStateMachine } from "little-state-machine"
import generic from "../data/generic"
import api from "../data/api"

const { useRef, useEffect } = React

export const CodeAsLink = styled(Link)`
  cursor: pointer;
  text-decoration: underline;
`

export const CodeHeading = styled.code`
  & > h2:before {
    display: inline-block;
    content: "</> ";
  }
`

export const Table = styled.table`
  margin-top: 20px;

  td {
    padding: 10px 20px 10px 0;
    line-height: 1.4;

    & > pre {
      margin: 0;
    }
  }
`

export const TableWrapper = styled.div`
  -webkit-overflow-scrolling: touch;
  overflow-y: hidden;
  overflow-x: auto;

  @media ${breakpoints.fromMediumScreen} {
    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-track {
      background: #191d3a;
    }

    &::-webkit-scrollbar-thumb {
      background: #4f6294;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #ec5990;
    }
  }
`

export const Type = styled.span`
  font-weight: 100;
  font-size: 15px;
  font-family: monospace;
  color: ${colors.lightPink};
`

export const MobileType = styled(Type)`
  margin-top: 10px;
  display: block;

  @media ${breakpoints.fromMediumScreen} {
    margin-top: 0px;
    display: inline;
  }
`

const HiddenMenu = styled.div`
  & > h1 {
    display: none;

    @media ${breakpoints.fromMediumScreen} {
      display: block;
    }
  }

  & > div {
    @media ${breakpoints.fromMediumScreen} {
      display: none;
    }
  }
`

const QuickSelect = styled.div`
  position: relative;
  max-width: 320px;
  margin: 0 auto;

  &:after {
    content: "▼";
    font-size: 15px;
    right: 17%;
    top: 12px;
    position: absolute;
    pointer-events: none;
  }

  & > select {
    border-radius: 4px;
    border: 1px solid ${colors.lightBlue};
    appearance: none;
    background: none;
    color: white;
    margin: 0.67em auto 20px;
    display: block;
    text-align: center;
    text-align-last: center;
    font-size: 2rem;
    font-weight: lighter;
    position: relative;
    padding: 10px 30px;
    max-width: 240px;
  }
`

const links = [
  "useForm",
  "register",
  "errors",
  "watch",
  "handleSubmit",
  "reset",
  "setError",
  "clearError",
  "setValue",
  "getValues",
  "triggerValidation",
  "formState",
  "FormContext",
  "React Native",
  "Typescript",
]

const codeSandBoxStyle = {
  position: "relative",
  left: 0,
  marginBottom: 20,
  marginTop: 10,
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
    state: { language },
  } = useStateMachine()
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }
  const copyFormData = useRef([])
  const apiSectionsRef = useRef({
    quickStartRef: null,
    formStateRef: null,
    useFormRef: null,
    registerRef: null,
    unregisterRef: null,
    resetRef: null,
    errorsRef: null,
    watchRef: null,
    setErrorRef: null,
    validationSchemaRef: null,
    handleSubmitRef: null,
    getValuesRef: null,
    TypescriptRef: null,
    clearErrorRef: null,
    triggerValidationRef: null,
    FormContextRef: null,
    nativeValidationRef: null,
    ReactNativeRef: null,
  })
  copyFormData.current = formData

  const goToSection = name => {
    const url = window.location.href
    const hashIndex = url.indexOf("#")
    const filterName = name.replace(/ /, "")

    history.pushState(
      {},
      null,
      hashIndex < 0
        ? `${url}#${filterName}`
        : `${url.substr(0, hashIndex)}#${filterName}`
    )

    const refName = `${filterName}Ref`

    if (apiSectionsRef.current[refName]) {
      apiSectionsRef.current[refName].scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    if (location.hash)
      setTimeout(() => goToSection(location.hash.substr(1)), 10)
  }, [])

  return (
    <Container>
      <HiddenMenu>
        <HeadingWithTopMargin id="main">API</HeadingWithTopMargin>
        <QuickSelect>
          <select
            aria-label={`${generic.select[currentLanguage]} API`}
            onChange={e => {
              goToSection(e.target.value)
            }}
          >
            <option>{generic.select[currentLanguage]} API</option>
            {links.map(option => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </QuickSelect>
      </HiddenMenu>
      <SubHeading>{api.header.description[currentLanguage]}</SubHeading>

      <Wrapper>
        <SideMenu
          links={links}
          goToSection={goToSection}
          currentLanguage={currentLanguage}
        />
        <main>
          <CodeHeading
            ref={ref => {
              apiSectionsRef.current.useFormRef = ref
            }}
          >
            <h2>
              useForm: <Type>Function</Type>
            </h2>
          </CodeHeading>
          <p>
            {api.useForm.intro[currentLanguage]}
            <CodeAsLink onClick={() => goToSection("register")}>
              register
            </CodeAsLink>
            ,{" "}
            <CodeAsLink onClick={() => goToSection("unregister")}>
              unregister
            </CodeAsLink>
            ,{" "}
            <CodeAsLink onClick={() => goToSection("errors")}>
              errors
            </CodeAsLink>
            ,{" "}
            <CodeAsLink onClick={() => goToSection("watch")}>watch</CodeAsLink>,{" "}
            <CodeAsLink onClick={() => goToSection("handleSubmit")}>
              handleSubmit
            </CodeAsLink>
            ,{" "}
            <CodeAsLink onClick={() => goToSection("reset")}>reset</CodeAsLink>,{" "}
            <CodeAsLink onClick={() => goToSection("setError")}>
              setError
            </CodeAsLink>
            ,{" "}
            <CodeAsLink onClick={() => goToSection("clearError")}>
              clearError
            </CodeAsLink>
            ,{" "}
            <CodeAsLink onClick={() => goToSection("setValue")}>
              setValue
            </CodeAsLink>
            ,{" "}
            <CodeAsLink onClick={() => goToSection("getValues")}>
              getValues
            </CodeAsLink>
            ,{" "}
            <CodeAsLink onClick={() => goToSection("triggerValidation")}>
              triggerValidation
            </CodeAsLink>{" "}
            and{" "}
            <CodeAsLink onClick={() => goToSection("formState")}>
              formState
            </CodeAsLink>
            .
          </p>

          {api.useForm.description[currentLanguage]}

          <CodeArea
            withOutCopy
            rawData={`const { register } = useForm({
  mode: 'onSubmit',
  reValidateMode: 'onChange',
  defaultValues: {},
  validationFields: [],
  validationSchema: {},
  validationSchemaOption: { abortEarly: false },
  submitFocusError: true,
  nativeValidation: false,
})`}
          />

          <H5>
            <code>
              mode: <Type>string = 'onSubmit'</Type>
            </code>
            <Popup top={3} />
          </H5>

          <TableWrapper>
            <Table>
              <tbody>
                <tr>
                  <th>{generic.name[currentLanguage]}</th>
                  <th>{generic.type[currentLanguage]}</th>
                  <th
                    style={{
                      minWidth: 300,
                    }}
                  >
                    {generic.description[currentLanguage]}
                  </th>
                </tr>
                <tr>
                  <td>onSubmit (Default)</td>
                  <td>
                    <Type>string</Type>
                  </td>
                  <td>{api.useForm.validateOnSubmit[currentLanguage]}</td>
                </tr>
                <tr>
                  <td>onBlur</td>
                  <td>
                    <Type>string</Type>
                  </td>
                  <td>{api.useForm.validateOnBlur[currentLanguage]}</td>
                </tr>
                <tr>
                  <td>onChange</td>
                  <td>
                    <Type>string</Type>
                  </td>
                  <td>{api.useForm.validateOnChange[currentLanguage]}</td>
                </tr>
              </tbody>
            </Table>
          </TableWrapper>

          <H5 style={{ marginTop: 20 }}>
            <code>
              defaultValues:{" "}
              <Type>
                {`{[key:string]: string}`} = {`{}`}
              </Type>
            </code>
            <Popup
              top={3}
              message="React Native: Need to combine the use of watch API or simply use defaultValue"
            />
          </H5>

          {api.useForm.defaultValues(goToSection)[currentLanguage]}

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
          />

          <TableWrapper>
            <Table>
              <tbody>
                <tr>
                  <td>
                    <H5 style={{ marginTop: 20 }}>
                      <code>
                        validationSchema: <br />
                        <MobileType>Object</MobileType>
                      </code>
                    </H5>
                  </td>
                  <td>
                    {api.useForm.validationSchema(goToSection)[currentLanguage]}
                  </td>
                  <td>
                    <CodeSandBoxLink
                      style={codeSandBoxStyle}
                      url="https://codesandbox.io/s/928po918qr"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <H5 style={{ marginTop: 20 }}>
                      <code>
                        reValidateMode: <br />
                        <MobileType>
                          onChange | onBlur | onSubmit = onChange
                        </MobileType>
                      </code>
                    </H5>
                  </td>
                  <td>{api.useForm.reValidateMode[currentLanguage]}</td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <H5 style={{ marginTop: 20 }}>
                      <code>
                        validationFields: <br />
                        <MobileType>string[] = []</MobileType>
                      </code>
                    </H5>
                  </td>
                  <td>{api.useForm.validationFields[currentLanguage]}</td>
                  <td>
                    <CodeSandBoxLink
                      style={codeSandBoxStyle}
                      url="https://codesandbox.io/s/react-hook-form-validationfields-1xb91"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <H5 style={{ marginTop: 20 }}>
                      <code>
                        submitFocusError: <br />
                        <MobileType>boolean = true</MobileType>
                      </code>
                    </H5>
                  </td>
                  <td>{api.useForm.submitFocusError[currentLanguage]}</td>
                </tr>
                <tr>
                  <td>
                    <H5 style={{ marginTop: 20 }}>
                      <code>
                        nativeValidation: <br />
                        <MobileType>boolean = false</MobileType>
                      </code>
                    </H5>
                  </td>
                  <td>
                    {api.useForm.nativeValidation(goToSection)[currentLanguage]}
                  </td>
                  <td>
                    <CodeSandBoxLink
                      style={codeSandBoxStyle}
                      url="https://codesandbox.io/s/react-hook-form-native-validation-ez5ww"
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </TableWrapper>

          <p style={{ textAlign: "center" }}>♦</p>

          <CodeHeading
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.registerRef = ref
            }}
          >
            <h2>
              register:{" "}
              <Type>{`({ name: string } | Ref, validateRule?) => void`}</Type>
              <Popup message="React Native: custom register only" />
            </h2>
          </CodeHeading>

          <ApiRefTable
            goToSection={goToSection}
            currentLanguage={currentLanguage}
          />

          <hr />

          <CodeHeading
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.unregisterRef = ref
            }}
          >
            <h2>
              unregister: <Type>{`(name: string | string[]) => void`}</Type>
            </h2>
          </CodeHeading>

          {api.unregister[currentLanguage]}

          <CodeArea
            url="https://codesandbox.io/s/react-hook-form-unregister-zjvr1"
            rawData={unregisterCode}
          />

          <hr />

          <section
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.errorsRef = ref
            }}
          >
            <ApiErrors />
          </section>

          <section
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.watchRef = ref
            }}
          >
            <ApiWatch />
          </section>
          <CodeHeading
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.handleSubmitRef = ref
            }}
          >
            <h2>
              handleSubmit: <Type>(data: Object, e: Event) => void</Type>
            </h2>
          </CodeHeading>
          {api.handleSubmit[currentLanguage]}
          <CodeArea
            rawData={handleSubmitCode}
            url="https://codesandbox.io/s/yj07z1639"
          />

          <hr />

          <CodeHeading
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.resetRef = ref
            }}
          >
            <h2>
              <code>
                reset: <Type>{`(values?: Record<string, any>) => void`}</Type>
              </code>
              <Popup />
            </h2>
          </CodeHeading>

          {api.reset(goToSection)[currentLanguage]}

          <CodeArea
            rawData={resetCode}
            url="https://codesandbox.io/s/jjm3wyqmjy"
          />

          <hr />

          <CodeHeading
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.setErrorRef = ref
            }}
          >
            <h2>
              setError:{" "}
              <Type>
                (name: string, type: string, message?: string, ref?: Ref) =>
                void
              </Type>
            </h2>
          </CodeHeading>
          {api.setError[currentLanguage]}
          <CodeHeading
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.clearErrorRef = ref
            }}
          >
            <h2>
              clearError: <Type>(name?: string | string[]) => void</Type>
            </h2>
          </CodeHeading>
          {api.clearError[currentLanguage]}

          <CodeArea
            rawData={setError}
            url="https://codesandbox.io/s/o7rxyym3q5"
          />

          <hr />

          <CodeHeading
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.setValueRef = ref
            }}
          >
            <h2>
              setValue:{" "}
              <Type>
                (name: string, value: any, shouldValidate?: boolean) => void
              </Type>
            </h2>
          </CodeHeading>

          {api.setValue[currentLanguage]}

          <CodeArea
            rawData={setValue}
            url="https://codesandbox.io/s/react-hook-form-set-inputselect-value-c46ly"
          />

          <hr />

          <CodeHeading
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.getValuesRef = ref
            }}
          >
            <h2>
              getValues:{" "}
              <Type>{`(payload?: { nest: boolean }) => Object`}</Type>
            </h2>
          </CodeHeading>

          {api.getValues[currentLanguage]}

          <CodeArea
            rawData={getValues}
            url="https://codesandbox.io/s/get-form-values-xjepz"
          />

          <hr />

          <CodeHeading
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.triggerValidationRef = ref
            }}
          >
            <h2>
              triggerValidation:{" "}
              <Type style={{ fontSize: 12 }}>
                {`(payload?: { name: string; value?: any; } | { name: string; value?: any; }[])`}{" "}
                => boolean
              </Type>
            </h2>
          </CodeHeading>
          <p>To manually trigger an input/select validation in the form.</p>
          <p>
            <Note>Note:</Note> When validation fails, the <code>errors</code>{" "}
            object will be updated.
          </p>

          <CodeArea
            rawData={trigger}
            url="https://codesandbox.io/s/react-hook-form-trigger-validation-w1g0m"
          />

          <hr />

          <section
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.formStateRef = ref
            }}
          >
            <ApiFormState />
          </section>

          <hr />

          <section ref={ref => (apiSectionsRef.current.FormContextRef = ref)}>
            <FormContext currentLanguage={currentLanguage} />
          </section>

          <hr />

          <CodeHeading
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.ReactNativeRef = ref
            }}
          >
            <h2>React Native</h2>
          </CodeHeading>

          {api.reactNative[currentLanguage]}

          <CodeArea rawData={reactNative} />

          <hr />

          <CodeHeading
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.validationSchemaRef = ref
            }}
          >
            <h2>
              validationSchema: <Type>Object</Type>
            </h2>
          </CodeHeading>

          {api.validationSchema[currentLanguage]}

          <CodeArea
            rawData={validationSchemaCode}
            url="https://codesandbox.io/s/928po918qr"
          />

          <hr />

          <CodeHeading
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.nativeValidationRef = ref
            }}
          >
            <h2>NativeValidation</h2>
          </CodeHeading>

          <p>
            The following example demonstrates how you can leverage the
            browser's validation. You only need to set{" "}
            <code>nativeValidation</code> to <code>true</code> and rest of the
            syntax is the same as standard validation.
          </p>

          <CodeArea
            rawData={nativeValidation}
            url="https://codesandbox.io/s/react-hook-form-native-validation-ez5ww"
          />

          <hr />

          <CodeHeading
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.TypescriptRef = ref
            }}
          >
            <h2>TypeScript</h2>
          </CodeHeading>
          <p>
            React Hook Form is built with <code>Typescript</code>, so you can
            define <code>FormData</code> type to support form values.
          </p>

          <CodeArea
            rawData={typeScript}
            url="https://codesandbox.io/s/get-form-values-xjepz"
          />

          <section
            style={{
              textAlign: "center",
            }}
          >
            <H1>Advance Usage</H1>
            <p>
              Learn how to build complex and accessible forms with React Hook
              Form.
            </p>
            <PrimaryButton
              onClick={() => {
                navigate("/advanced-usage")
              }}
              style={{ margin: "40px auto" }}
            >
              Learn Advance Usage
            </PrimaryButton>
          </section>
          <Footer currentLanguage={currentLanguage} />
        </main>
      </Wrapper>
    </Container>
  )
}

export default React.memo(ApiPage)
