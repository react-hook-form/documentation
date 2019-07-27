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
import SyntaxHighlighterWithCopy, {
  LinkToSandBox,
} from "./SyntaxHighlighterWithCopy"
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
import { DarkBlueButton } from "../styles/buttons"
import { navigate } from "@reach/router"
import getValues from "./codeExamples/getValues"
import typeScript from "./codeExamples/typeScript"
import trigger from "./codeExamples/trigger"
import Footer from "./Footer"
import FormContext from "./FormContext"
import nativeValidation from "./codeExamples/nativeValidation"
import unregisterCode from "./codeExamples/unregisterCode"
import breakpoints from "../styles/breakpoints"

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
`

export const Type = styled.span`
  font-weight: 100;
  font-size: 15px;
  font-family: monospace;
  color: ${colors.lightPink};
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
    right: 22%;
    top: 12px;
    position: absolute;
    pointer-events: none;
  }

  & > select {
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
    padding: 10px;
    position: relative;

    :after {
      position: absolute;
      bottom: 0.15em;
      top: 0.15em;
      right: 0.5rem;
      content: "\\2193";
      pointer-events: none;
    }

    &:hover,
    &:focus {
      border: none;
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
  "Typescript",
]

function Builder({ formData, showApi }: any) {
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
  })
  const tabIndex = showApi ? 0 : -1
  copyFormData.current = formData

  const goToSection = name => {
    const url = window.location.href
    const hashIndex = url.indexOf("#")
    if (hashIndex < 0) {
      history.pushState({}, null, `${url}#${name}`)
    } else {
      history.pushState({}, null, `${url.substr(0, hashIndex)}#${name}`)
    }

    const refName = `${name}Ref`
    track({
      category: "Link",
      label: name,
      action: `Click - Go to ${name} section`,
    })
    if (apiSectionsRef.current[refName]) {
      apiSectionsRef.current[refName].scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    if (location.hash) goToSection(location.hash.substr(1))
  }, [])

  return (
    <Container>
      <HiddenMenu>
        <HeadingWithTopMargin>API</HeadingWithTopMargin>
        <QuickSelect>
          <select
            onChange={e => {
              goToSection(e.target.value)
            }}
          >
            <option>API</option>
            {links.map(option => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </QuickSelect>
      </HiddenMenu>
      <SubHeading>
        React Hook Form focus on providing the best DX by simplify the API.
      </SubHeading>

      <Wrapper>
        <SideMenu tabIndex={tabIndex} links={links} goToSection={goToSection} />
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

          <SyntaxHighlighterWithCopy
            tabIndex={tabIndex}
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
                    Validation will trigger on submit, invalid inputs will
                    attach <code>onChange</code> event listeners to re-validate
                    them.
                  </td>
                </tr>
                <tr>
                  <td>onBlur</td>
                  <td>
                    <Type>string</Type>
                  </td>
                  <td>
                    Validation will trigger on <code>blur</code> event.
                  </td>
                </tr>
                <tr>
                  <td>onChange</td>
                  <td>
                    <Type>string</Type>
                  </td>
                  <td>
                    Validation will trigger on <code>onChange</code> with each
                    inputs, and lead to multiple re-render. Not recommended:
                    Consider this as a bad performance practice.
                  </td>
                </tr>
              </tbody>
            </Table>
          </TableWrapper>

          <p style={{ textAlign: "center" }}>♦</p>

          <H5 style={{ marginTop: 20 }}>
            <code>
              defaultValues:{" "}
              <Type>
                {`{[key:string]: string}`} = {`{}`}
              </Type>
            </code>
          </H5>

          <p>
            You can set input default value with{" "}
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
            with manually registered input. eg:{" "}
            <code>{`register({ name: 'test' })`}</code>. Because manual{" "}
            <code>register</code> field is not providing <code>ref</code> to
            React Hook Form.
          </p>

          <SyntaxHighlighterWithCopy
            url="https://codesandbox.io/s/react-hook-form-defaultvalues-n5gvx"
            tabIndex={tabIndex}
            rawData={`const { register } = useForm({
  defaultValues: {
    firstName: "bill",
    lastName: "luo",
    email: "bluebill1049@hotmail.com",
    pets: [ 'dog', 'cat' ]
  }
})

<input name="firstName" ref={register} /> // ✅ works version
<input name="lastName" ref={() => register({ name: 'lastName' })} /> 
// ❌ above example does not work with defaultValues due to its ref is not provided
`}
          />

          <p style={{ textAlign: "center" }}>♦</p>

          <H5 style={{ marginTop: 20 }}>
            <code>
              validationFields: <Type>string[] = []</Type>
            </code>
          </H5>

          <p>
            By providing an array of fields, which means only included fields
            will be validated. This option is useful when you want to toggle
            which fields are required to validate.
          </p>
          <LinkToSandBox
            tabIndex={tabIndex}
            style={{
              position: "relative",
              left: 0,
              marginBottom: 20,
            }}
            href="https://codesandbox.io/s/react-hook-form-validationfields-1xb91"
            target="_blank"
          >
            CodeSandbox
          </LinkToSandBox>

          <p style={{ textAlign: "center" }}>♦</p>

          <H5 style={{ marginTop: 20 }}>
            <code>
              submitFocusError: <Type>boolean = true</Type>
            </code>
          </H5>

          <p>
            By default when user submit a form and contains error, the first
            error field will be focused.
          </p>
          <p>
            <Note>Note:</Note> only registered field with <code>ref</code> will
            works, not with manual register input. eg:{" "}
            <code>{`register({ name: 'test' }) // doesn't work`}</code>{" "}
          </p>

          <p style={{ textAlign: "center" }}>♦</p>

          <H5 style={{ marginTop: 20 }}>
            <code>
              validationSchema: <Type>Object</Type>
            </code>
          </H5>

          <p>
            Apply form validation rules with <code>Yup</code> at the schema
            level, please refer the{" "}
            <CodeAsLink onClick={() => goToSection("validationSchema")}>
              validationSchema
            </CodeAsLink>{" "}
            section.
          </p>

          <p style={{ textAlign: "center" }}>♦</p>

          <H5 style={{ marginTop: 20 }}>
            <code>
              nativeValidation: <Type>boolean = false</Type>
            </code>
          </H5>

          <p>
            Set this option to <code>true</code> will enable browser's native
            validation. You can{" "}
            <a
              target="_blank"
              href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
            >
              find out more about browser built-in validation
            </a>
            , and refer to{" "}
            <CodeAsLink onClick={() => goToSection("nativeValidation")}>
              nativeValidation
            </CodeAsLink>{" "}
            section for more detail and example.
          </p>

          <br />

          <CodeHeading
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.registerRef = ref
            }}
          >
            <h2>
              register:{" "}
              <Type>{`({ name: string } | Ref, validateRule?) => void`}</Type>
            </h2>
          </CodeHeading>

          <ApiRefTable tabIndex={tabIndex} />

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

          <SyntaxHighlighterWithCopy
            url="https://codesandbox.io/s/react-hook-form-unregister-zjvr1"
            tabIndex={tabIndex}
            rawData={unregisterCode}
          />

          <hr />

          <section
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.errorsRef = ref
            }}
          >
            <ApiErrors tabIndex={tabIndex} />
          </section>

          <section
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.watchRef = ref
            }}
          >
            <ApiWatch tabIndex={tabIndex} />
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
            This function will pass you the form data when form validation is
            successful.
          </p>
          <p>
            <Note>Note:</Note> you can pass an <code>async</code> function for
            asynchronous validation. eg:{" "}
            <code>handleSubmit(async (data) => await fetchAPI(data))</code>
          </p>
          <SyntaxHighlighterWithCopy
            tabIndex={tabIndex}
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
              reset: <Type>() => void</Type>
            </h2>
          </CodeHeading>
          <p>
            This function will reset fields value and errors within the form.
          </p>
          <p>
            <Note>Note:</Note> for controlled component like{" "}
            <code>React-Select</code> which doesn't expose <code>ref</code>, you
            will have to reset the input value manually through{" "}
            <code onClick={() => goToSection("setValue")}>setValue</code>.
          </p>

          <SyntaxHighlighterWithCopy
            tabIndex={tabIndex}
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
          <CodeHeading
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.clearErrorRef = ref
            }}
          >
            <h2>
              clearError: <Type>(name: string) => void</Type>
            </h2>
          </CodeHeading>
          <p>
            <code>setError</code>: allows you to manually set an input error.
          </p>
          <p>
            <code>clearError</code>: will remove an input error.
          </p>

          <SyntaxHighlighterWithCopy
            tabIndex={tabIndex}
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
            <Note>Note: </Note> by invoking this method <code>formState</code>{" "}
            will push input's <code>name</code> into <code>touched</code>.
          </p>
          <p>
            You can also set <code>shouldValidate</code> to true and it will
            trigger field validation. eg:{" "}
            <code>setValue('name', 'value', true)</code>
          </p>

          <SyntaxHighlighterWithCopy
            tabIndex={tabIndex}
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

          <SyntaxHighlighterWithCopy
            tabIndex={tabIndex}
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
            <Note>Note:</Note> when validation failed, then <code>errors</code>{" "}
            object will be updated.
          </p>

          <SyntaxHighlighterWithCopy
            tabIndex={tabIndex}
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
            <ApiFormState tabIndex={tabIndex} />
          </section>

          <hr />

          <section ref={ref => (apiSectionsRef.current.FormContextRef = ref)}>
            <FormContext />
          </section>

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
            <code>useForm</code> as an optional argument. Currently support{" "}
            <Link
              href="https://github.com/jquense/yup"
              target="_blank"
              tabIndex={tabIndex}
            >
              Yup
            </Link>{" "}
            for object schema validation.
          </p>
          <SyntaxHighlighterWithCopy
            tabIndex={tabIndex}
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
            Because native validation is triggering before <code>onSubmit</code>
            phase, we will have to move <code>handleSubmit</code> at
            button/input <code>onClick</code> and use{" "}
            <code>e.preventDefault()</code> at <code>onSubmit</code> callback to
            prevent page from refreshing.
          </p>

          <SyntaxHighlighterWithCopy
            tabIndex={tabIndex}
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
            React Hook Form is built with <code>Typescript</code>, you can
            defined <code>Type</code> to support form values.
          </p>

          <SyntaxHighlighterWithCopy
            tabIndex={tabIndex}
            rawData={typeScript}
            url="https://codesandbox.io/s/get-form-values-xjepz"
          />

          <hr />

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
            <DarkBlueButton
              onClick={() => {
                track({
                  category: "Button",
                  label: "Star",
                  action: "Click - Go to Github star",
                })
                navigate("https://github.com/bluebill1049/react-hook-form")
              }}
            >
              Star React Hook Form
            </DarkBlueButton>
          </section>
          <Footer />
        </main>
      </Wrapper>
    </Container>
  )
}

export default React.memo(Builder)
