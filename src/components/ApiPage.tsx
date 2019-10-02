import * as React from "react"
import styled from "styled-components"
import colors from "../styles/colors"
import {
  SubHeading,
  HeadingWithTopMargin,
  H5,
  H1,
  Note,
} from "../styles/typography"
import ApiRefTable from "./ApiRefTable"
import validationSchemaCode from "./codeExamples/validationSchema"
import Link from "../styles/link"
import code from "./codeExamples/defaultExample"
import CodeArea, { LinkToSandBox } from "./CodeArea"
import SideMenu from "./SideMenu"
import ApiFormState from "./ApiFormState"
import resetCode from "./codeExamples/resetCode"
import ApiWatch from "./ApiWatch"
import ApiErrors from "./ApiErrors"
import handleSubmitCode from "./codeExamples/handleSubmitCode"
import setError from "./codeExamples/setError"
import setValue from "./codeExamples/setValue"
import track from "./utils/track"
import { Container, Wrapper } from "../styles/containers"
import { PrimaryButton } from "../styles/buttons"
import { navigate } from "@reach/router"
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

const { useRef, useEffect } = React

const CodeAsLink = styled(Link)`
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

  &:after {
    content: "▼";
    font-size: 20px;
    right: 17%;
    top: 12px;
    position: absolute;
    pointer-events: none;
  }

  & > select {
    border-radius: 4px;
    border: 1px solid white;
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

    :after {
      position: absolute;
      bottom: 0.15em;
      top: 0.15em;
      right: 0.5rem;
      content: "\\2193";
      pointer-events: none;
    }
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
  "setValue",
  "getValues",
  "triggerValidation",
  "formState",
  "FormContext",
  "React Native",
  "Typescript",
]

function ApiPage({ formData }: { formData?: any }) {
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
    track({
      category: "Link",
      label: filterName,
      action: `Click - Go to ${filterName} section`,
    })

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
        <HeadingWithTopMargin>API</HeadingWithTopMargin>
        <QuickSelect>
          <select
            aria-label="select API"
            onChange={e => {
              goToSection(e.target.value)
            }}
          >
            <option>Select API</option>
            {links.map(option => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </QuickSelect>
      </HiddenMenu>
      <SubHeading>
        React Hook Form focuses on providing the best DX by simplifying the API.
      </SubHeading>

      <Wrapper>
        <SideMenu links={links} goToSection={goToSection} />
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
            By invoking <code>useForm</code>, you will receive the following
            methods{" "}
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

          <p>
            <code>useForm</code> also has <b>optional</b> arguments. The
            following example demonstrate all options' default value.
          </p>

          <CodeArea
            withOutCopy
            rawData={`const { register } = useForm({
  mode: 'onSubmit',
  defaultValues: {},
  validationFields: [],
  validationSchema: {},
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
                  <th>Name</th>
                  <th>Type</th>
                  <th
                    style={{
                      minWidth: 300,
                    }}
                  >
                    Description
                  </th>
                </tr>
                <tr>
                  <td>onSubmit (Default)</td>
                  <td>
                    <Type>string</Type>
                  </td>
                  <td>
                    Validation will trigger on the <code>submit</code> event and
                    invalid inputs will attach <code>onChange</code> event
                    listeners to re-validate them.
                  </td>
                </tr>
                <tr>
                  <td>onBlur</td>
                  <td>
                    <Type>string</Type>
                  </td>
                  <td>
                    Validation will trigger on the <code>blur</code> event.
                  </td>
                </tr>
                <tr>
                  <td>onChange</td>
                  <td>
                    <Type>string</Type>
                  </td>
                  <td>
                    Validation will trigger on the <code>change</code> event
                    with each input, and lead to multiple re-renders. Not
                    recommended: Consider this as a bad performance practice.
                  </td>
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

          <p>
            You can set input's default value with{" "}
            <code>defaultValue/defaultChecked</code>{" "}
            <Link
              href="https://reactjs.org/docs/uncontrolled-components.html"
              onClick={() => {
                track({
                  category: "Button",
                  label: "read more at React doc",
                  action: "Click - go to React Doc",
                })
              }}
            >
              (read more at React doc for Default Values)
            </Link>{" "}
            or pass <code>defaultValues</code> as an optional argument to
            populate default values for the entire form.
          </p>

          <p>
            <Note>Note: </Note>Values defined in <code>defaultValues</code> will
            be injected into{" "}
            <CodeAsLink onClick={() => goToSection("watch")}>watch</CodeAsLink>{" "}
            as <code>defaultValue</code>.
          </p>

          <p>
            <Note>Note: </Note> <code>defaultValues</code> doesn't auto populate
            with manually registered input (eg:
            <code>{`register({ name: 'test' })`}</code>) because manual{" "}
            <code>register</code> field is not providing <code>ref</code> to
            React Hook Form.
          </p>

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
                        validationSchema: <MobileType>Object</MobileType>
                      </code>
                    </H5>
                  </td>
                  <td>
                    <p>
                      Apply form validation rules with <code>Yup</code> at the
                      schema level, please refer the{" "}
                      <CodeAsLink
                        onClick={() => goToSection("validationSchema")}
                      >
                        validationSchema
                      </CodeAsLink>{" "}
                      section.
                    </p>
                  </td>
                  <td>
                    <LinkToSandBox
                      style={{
                        position: "relative",
                        left: 0,
                        marginBottom: 20,
                        marginTop: 10,
                        float: "right",
                      }}
                      href="https://codesandbox.io/s/928po918qr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CodeSandbox
                    </LinkToSandBox>
                  </td>
                </tr>
                <tr>
                  <td>
                    <H5 style={{ marginTop: 20 }}>
                      <code>
                        validationFields: <MobileType>string[] = []</MobileType>
                      </code>
                    </H5>
                  </td>
                  <td>
                    <p>
                      Providing an array of fields means only included fields
                      will be validated. This option is useful when you want to
                      toggle which fields are required to validate.
                    </p>
                  </td>
                  <td>
                    <LinkToSandBox
                      style={{
                        position: "relative",
                        left: 0,
                        marginTop: 10,
                        marginBottom: 20,
                        float: "right",
                      }}
                      href="https://codesandbox.io/s/react-hook-form-validationfields-1xb91"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CodeSandbox
                    </LinkToSandBox>
                  </td>
                </tr>
                <tr>
                  <td>
                    <H5 style={{ marginTop: 20 }}>
                      <code>
                        submitFocusError:{" "}
                        <MobileType>boolean = true</MobileType>
                      </code>
                    </H5>
                  </td>
                  <td>
                    <p>
                      By default when the user submits a form and that contains
                      an error, the first field with an error will be focused.
                    </p>

                    <p>
                      <Note>Note:</Note> Only registered fields with{" "}
                      <code>ref</code> will work. Manually registered inputs
                      won't work. eg:{" "}
                      <code>{`register({ name: 'test' }) // doesn't work`}</code>{" "}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <H5 style={{ marginTop: 20 }}>
                      <code>
                        nativeValidation:{" "}
                        <MobileType>boolean = false</MobileType>
                      </code>
                    </H5>
                  </td>
                  <td>
                    <p>
                      Setting this option to <code>true</code> will enable
                      browser's native validation. You can{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
                      >
                        find out more about the built-in browser validation
                      </a>
                      , and refer to the{" "}
                      <CodeAsLink
                        onClick={() => goToSection("nativeValidation")}
                      >
                        nativeValidation
                      </CodeAsLink>{" "}
                      section for more detail and example.
                    </p>
                  </td>
                  <td>
                    <LinkToSandBox
                      style={{
                        position: "relative",
                        left: 0,
                        marginTop: 10,
                        marginBottom: 20,
                        float: "right",
                      }}
                      href="https://codesandbox.io/s/react-hook-form-native-validation-ez5ww"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CodeSandbox
                    </LinkToSandBox>
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

          <ApiRefTable />

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

          <p>
            This method will allow you to <code>unregister</code> a single or
            array of inputs.
          </p>

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
          <p>
            This function will pass the form data when form validation is
            successful.
          </p>
          <p>
            <Note>Note:</Note> You can pass an <code>async</code> function for
            asynchronous validation. eg:{" "}
            <code>handleSubmit(async (data) => await fetchAPI(data))</code>
          </p>
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
          <p>
            This function will reset the fields' values and errors within the
            form. You can pass <code>values</code> as an optional argument to
            reset your form into assigned default values.
          </p>
          <p>
            <Note>Note:</Note> For controlled components like{" "}
            <code>React-Select</code> which don't expose <code>ref</code>, you
            will have to reset the input value manually through{" "}
            <code onClick={() => goToSection("setValue")}>setValue</code>.
          </p>

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
          <p>Allows you to manually set an input error.</p>
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
          <ul>
            <li>
              <p>
                <code>undefined</code>: reset all errors
              </p>
            </li>
            <li>
              <p>
                <code>string</code>: reset single error
              </p>
            </li>
            <li>
              <p>
                <code>string[]</code>: reset multiple errors
              </p>
            </li>
          </ul>

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
          <p>This function allows you to dynamically set input/select value.</p>
          <p>
            <Note>Note:</Note> By invoking this method, <code>formState</code>{" "}
            will push input's <code>name</code> into <code>touched</code>.
          </p>
          <p>
            You can also set <code>shouldValidate</code> to <code>true</code>{" "}
            and it will trigger field validation. eg:{" "}
            <code>setValue('name', 'value', true)</code>
          </p>

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
          <p>This function will return the entire form data.</p>

          <ul>
            <li>
              By default <code>getValues()</code> will return form data in a
              flat structure. eg:{" "}
              <code>{`{ test: 'data', test1: 'data1'}`}</code>
            </li>
            <li>
              Working on array fields form,{" "}
              <code>getValues({`{ nest: true }`})</code> will return data in a
              nested structure according to input <code>name</code>. eg:{" "}
              <code>{`{ test: [1, 2], test1: { data: '23' } }`}</code>
            </li>
          </ul>

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
            <FormContext />
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

          <p>
            You will get the same performance enhancement from Uncontrolled
            Component. However, there are certain API which isn't compatible
            with React Native (duo to the API difference from web and native).
            We will have to use <b>custom register</b> in the following example.
          </p>
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

          <p>
            If you would like to centralize your validation rules with external
            validation schema, you can apply <code>validationSchema</code> at{" "}
            <code>useForm</code> as an optional argument. React Hook Form
            currently supports{" "}
            <Link
              href="https://github.com/jquense/yup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yup
            </Link>{" "}
            for object schema validation.
          </p>
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
            <H1>Need your support</H1>
            <p>
              If you find React Hook Form is useful, please star the repo to
              support 🙏🏻
            </p>
            <PrimaryButton
              onClick={() => {
                track({
                  category: "Button",
                  label: "Star",
                  action: "Click - Go to Github star",
                })
                navigate("https://github.com/bluebill1049/react-hook-form")
              }}
              style={{ margin: "40px auto" }}
            >
              Star React Hook Form
            </PrimaryButton>
          </section>
          <Footer />
        </main>
      </Wrapper>
    </Container>
  )
}

export default React.memo(ApiPage)
