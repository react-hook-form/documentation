import * as React from "react"
import styled from "styled-components"
import colors from "../styles/colors"
import {
  SubHeading,
  HeadingWithTopMargin,
  H5,
  H1,
  TypeText,
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
import { CenterContent, Container, Wrapper } from "../styles/containers"
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
import StarRepo from "./StarRepo"
import translateLink from "./logic/translateLink"

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
  border-collapse: collapse;

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
      border-radius: 10px;
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

export const MobileType = styled(TypeText)`
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

const TableH5 = styled(H5)`
  border: none;
  margin-top: 20px;
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
    api.formState,
    api.formContext,
    api.reactNative,
    api.validationSchema,
    api.NativeValidation,
    api.typeScript,
  ]
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
    TypeScriptRef: null,
    clearErrorRef: null,
    triggerValidationRef: null,
    FormContextRef: null,
    NativeValidationRef: null,
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
            {links.map(option => {
              const title =
                typeof option[currentLanguage] === "function"
                  ? option[currentLanguage]().title
                  : option[currentLanguage].title

              return (
                <option value={title} key={title}>
                  {title}
                </option>
              )
            })}
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
              useForm: <TypeText>Function</TypeText>
            </h2>
          </CodeHeading>
          <p>
            {api.useForm[currentLanguage].intro}
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

          {api.useForm[currentLanguage].description}

          <CodeArea
            withOutCopy
            rawData={`const { register } = useForm({
  mode: 'onSubmit',
  reValidateMode: 'onChange',
  defaultValues: {},
  validationSchema: {},
  validationSchemaOption: { abortEarly: false },
  submitFocusError: true,
  nativeValidation: false,
})`}
          />

          <H5>
            <code>
              mode: <TypeText>string = 'onSubmit'</TypeText>
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
                    <TypeText>string</TypeText>
                  </td>
                  <td>{api.useForm[currentLanguage].validateOnSubmit}</td>
                </tr>
                <tr>
                  <td>onBlur</td>
                  <td>
                    <TypeText>string</TypeText>
                  </td>
                  <td>{api.useForm[currentLanguage].validateOnBlur}</td>
                </tr>
                <tr>
                  <td>onChange</td>
                  <td>
                    <TypeText>string</TypeText>
                  </td>
                  <td>{api.useForm[currentLanguage].validateOnChange}</td>
                </tr>
              </tbody>
            </Table>
          </TableWrapper>

          <H5 style={{ marginTop: 20 }}>
            <code>
              defaultValues:{" "}
              <TypeText>
                {`Record<string, any>`} = {`{}`}
              </TypeText>
            </code>
            <Popup
              top={3}
              message="React Native: Need to combine the use of watch API"
            />
          </H5>

          {api.useForm[currentLanguage].defaultValues(goToSection)}

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
                    <TableH5>
                      <code>
                        validationSchema: <br />
                        <MobileType>Object</MobileType>
                      </code>
                    </TableH5>
                  </td>
                  <td>
                    {api.useForm[currentLanguage].validationSchema(goToSection)}
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
                    <TableH5>
                      <code>
                        validationSchemaOption: <br />
                        <MobileType>Object</MobileType>
                      </code>
                    </TableH5>
                  </td>
                  <td>
                    <p>{api.useForm[currentLanguage].validationSchemaOption}</p>
                  </td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <TableH5>
                      <code>
                        reValidateMode: <br />
                        <MobileType>
                          onChange | onBlur | onSubmit = onChange
                        </MobileType>
                      </code>
                    </TableH5>
                  </td>
                  <td>{api.useForm[currentLanguage].reValidateMode}</td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <TableH5>
                      <code>
                        submitFocusError: <br />
                        <MobileType>boolean = true</MobileType>
                      </code>
                    </TableH5>
                  </td>
                  <td>{api.useForm[currentLanguage].submitFocusError}</td>
                </tr>
                <tr>
                  <td>
                    <H5 style={{ marginTop: 20, border: "none" }}>
                      <code>
                        nativeValidation: <br />
                        <MobileType>boolean = false</MobileType>
                      </code>
                    </H5>
                  </td>
                  <td>
                    {api.useForm[currentLanguage].nativeValidation(goToSection)}
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
              <TypeText>{`(Ref, validateRule?) => void`}</TypeText>
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
              unregister:{" "}
              <TypeText>{`(name: string | string[]) => void`}</TypeText>
            </h2>
          </CodeHeading>

          {api.unregister[currentLanguage].description}

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
            <ApiErrors currentLanguage={currentLanguage} />
          </section>

          <section
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.watchRef = ref
            }}
          >
            <ApiWatch currentLanguage={currentLanguage} />
          </section>
          <CodeHeading
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.handleSubmitRef = ref
            }}
          >
            <h2>
              handleSubmit:{" "}
              <TypeText>(data: Object, e: Event) => void</TypeText>
            </h2>
          </CodeHeading>
          {api.handleSubmit[currentLanguage].description}
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
              reset:{" "}
              <TypeText>{`(values?: Record<string, any>) => void`}</TypeText>
              <Popup />
            </h2>
          </CodeHeading>

          {api.reset[currentLanguage](goToSection).description}

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
              <TypeText>
                {`(name: string | ManualFieldError[], type?: string, message?: string) => void`}
              </TypeText>
            </h2>
          </CodeHeading>
          {api.setError[currentLanguage].description}

          <CodeArea
            rawData={setError}
            url="https://codesandbox.io/s/o7rxyym3q5"
          />

          <hr />

          <CodeHeading
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.clearErrorRef = ref
            }}
          >
            <h2>
              clearError:{" "}
              <TypeText>(name?: string | string[]) => void</TypeText>
            </h2>
          </CodeHeading>
          {api.clearError[currentLanguage].description}

          <hr />

          <CodeHeading
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.setValueRef = ref
            }}
          >
            <h2>
              setValue:{" "}
              <TypeText>
                (name: string, value: any, shouldValidate?: boolean) => void
              </TypeText>
            </h2>
          </CodeHeading>

          {api.setValue[currentLanguage].description}

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
              <TypeText>{`(payload?: { nest: boolean }) => Object`}</TypeText>
            </h2>
          </CodeHeading>

          {api.getValues[currentLanguage].description}

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
              <TypeText>
                {`(payload?: { name: string } | { name: string }[])`}{" "}
                => boolean
              </TypeText>
            </h2>
          </CodeHeading>
          {api.triggerValidation[currentLanguage].description}

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
            <ApiFormState currentLanguage={currentLanguage} />
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

          {api.reactNative[currentLanguage].description}

          <CodeArea rawData={reactNative} />

          <hr />

          <CodeHeading
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.validationSchemaRef = ref
            }}
          >
            <h2>
              validationSchema: <TypeText>Object</TypeText>
            </h2>
          </CodeHeading>

          {api.validationSchema[currentLanguage].description}

          <CodeArea
            rawData={validationSchemaCode}
            url="https://codesandbox.io/s/928po918qr"
          />

          <hr />

          <CodeHeading
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.NativeValidationRef = ref
            }}
          >
            <h2>NativeValidation</h2>
          </CodeHeading>

          {api.NativeValidation[currentLanguage].description}

          <CodeArea
            rawData={nativeValidation}
            url="https://codesandbox.io/s/react-hook-form-native-validation-ez5ww"
          />

          <hr />

          <CodeHeading
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.TypeScriptRef = ref
            }}
          >
            <h2>TypeScript</h2>
          </CodeHeading>

          {api.typeScript[currentLanguage].description}

          <CodeArea
            rawData={typeScript}
            url="https://codesandbox.io/s/react-hook-form-typescript-mmdrc"
          />

          <CenterContent style={{ marginTop: 40 }}>
            <H1>{generic.advanceUsage[currentLanguage].title}</H1>
            <p>{generic.advanceUsage[currentLanguage].description}</p>
            <PrimaryButton
              onClick={() => {
                navigate(translateLink("advanced-usage", currentLanguage))
              }}
              style={{ margin: "40px auto" }}
            >
              {generic.advanceUsage[currentLanguage].buttonText}
            </PrimaryButton>
          </CenterContent>
          <Footer currentLanguage={currentLanguage} />
        </main>
      </Wrapper>
    </Container>
  )
}

export default React.memo(ApiPage)
