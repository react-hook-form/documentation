import * as React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'
import { SubHeading, HeadingWithTopMargin, H5, H1, Note } from '../styles/typography'
import ApiRefTable from './ApiRefTable'
import validationSchemaCode from './codeExamples/validationSchema'
import Link from '../styles/link'
import code from './codeExamples/defaultExample'
import SyntaxHighlighterWithCopy, { LinkToSandBox } from './SyntaxHighlighterWithCopy'
import SideMenu from './SideMenu'
import ApiFormState from './ApiFormState'
import resetCode from './codeExamples/resetCode'
import ApiWatch from './ApiWatch'
import ApiErrors from './ApiErrors'
import handleSubmitCode from './codeExamples/handleSubmitCode'
import setError from './codeExamples/setError'
import setValue from './codeExamples/setValue'
import track from './utils/track'
import { Container, Wrapper } from '../styles/containers'
import { DarkBlueButton } from '../styles/buttons'
import { navigate } from '@reach/router'
import getValues from './codeExamples/getValues'
import typeScript from './codeExamples/typeScript'
import trigger from "./codeExamples/trigger";

const { useRef, useEffect } = React

const CodeAsLink = styled(Link)`
  cursor: pointer;
  text-decoration: underline;
`

export const CodeHeading = styled.code`
  & > h2:before {
    display: inline-block;
    content: '</> ';
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

const links = [
  'useForm',
  'register',
  'errors',
  'watch',
  'handleSubmit',
  'reset',
  'setError',
  'setValue',
  'getValues',
  'triggerValidation',
  'formState',
  'Typescript',
]

function Builder({ formData, showApi }: any) {
  const copyFormData = useRef([])
  const apiSectionsRef = useRef({
    quickStartRef: null,
    formStateRef: null,
    useFormRef: null,
    registerRef: null,
    resetRef: null,
    errorsRef: null,
    watchRef: null,
    setErrorRef: null,
    validationSchemaRef: null,
    handleSubmitRef: null,
    getValuesRef: null,
    TypescriptRef: null,
    triggerValidationRef: null,
  })
  const tabIndex = showApi ? 0 : -1
  copyFormData.current = formData

  const goToSection = name => {
    const url = window.location.href;
    const hashIndex = url.indexOf('#');
    if (hashIndex < 0) {
      history.pushState({}, null, `${url}#${name}`);
    } else {
      history.pushState({}, null, `${url.substr(0, hashIndex)}#${name}`);
    }

    const refName = `${name}Ref`
    track({
      category: 'Link',
      label: name,
      action: `Click - Go to ${name} section`,
    })
    if (apiSectionsRef.current[refName]) {
      apiSectionsRef.current[refName].scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (location.hash) goToSection(location.hash.substr(1));
  }, [])

  return (
    <Container>
      <HeadingWithTopMargin>API</HeadingWithTopMargin>
      <SubHeading>React Hook Form focus on providing the best DX by simplify the API.</SubHeading>

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
            By invoking <code>useForm</code>, you will receive the following methods{' '}
            <CodeAsLink onClick={() => goToSection('register')}>register</CodeAsLink>,{' '}
            <CodeAsLink onClick={() => goToSection('errors')}>errors</CodeAsLink>,{' '}
            <CodeAsLink onClick={() => goToSection('watch')}>watch</CodeAsLink>,{' '}
            <CodeAsLink onClick={() => goToSection('handleSubmit')}>handleSubmit</CodeAsLink>,{' '}
            <CodeAsLink onClick={() => goToSection('reset')}>reset</CodeAsLink>,{' '}
            <CodeAsLink onClick={() => goToSection('setError')}>setError</CodeAsLink>,{' '}
            <CodeAsLink onClick={() => goToSection('setValue')}>setValue</CodeAsLink>,{' '}
            <CodeAsLink onClick={() => goToSection('getValues')}>getValues</CodeAsLink> and{' '}
            <CodeAsLink onClick={() => goToSection('formState')}>formState</CodeAsLink>.
          </p>

          <p>
            <code>useForm</code> also has <b>optional</b> arguments, which are <code>mode</code>,{' '}
            <code>defaultValues</code>, <code>validationFields</code> and <code>validationSchema</code>.
          </p>

          <SyntaxHighlighterWithCopy
            tabIndex={tabIndex}
            withOutCopy
            rawData={`const { register } = useForm({
  mode: 'onBlur',
  defaultValues: {
    firstName: 'bill',
    lastName: 'luo'
  },
  validationFields: ['firstName', lastName'],
  validationSchema: {},
})`}
          />

          <H5>
            <code>mode</code>
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
                    Validation will trigger on submit, invalid inputs will attach <code>onChange</code> event listeners
                    to re-validate them.
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
                    Validation will trigger on <code>onChange</code> with each inputs, and lead to multiple re-render.
                    Not recommended: Consider this as a bad performance practice.
                  </td>
                </tr>
              </tbody>
            </Table>
          </TableWrapper>

          <H5 style={{ marginTop: 20 }}>
            <code>defaultValues</code>
          </H5>

          <p>
            You can set input default value with <code>defaultValue/defaultChecked</code>{' '}
            <Link
              href="https://reactjs.org/docs/uncontrolled-components.html"
              onClick={() => {
                track({
                  category: 'Button',
                  label: 'read more at React doc',
                  action: 'Click - go to React Doc',
                })
              }}
            >
              (read more at React doc for uncontrolled input default value)
            </Link>{' '}
            or pass <code>defaultValues</code> as an optional argument to pre-fill default values for the entire form.
          </p>

          <SyntaxHighlighterWithCopy
            url="https://codesandbox.io/s/react-hook-form-defaultvalues-n5gvx"
            tabIndex={tabIndex}
            rawData={`const { register } = useForm({
  defaultValues: {
    firstName: "bill",
    lastName: "luo",
    email: "bluebill1049@hotmail.com"
  }
})`}
          />

          <H5 style={{ marginTop: 20 }}>
            <code>validationFields</code>
          </H5>

          <p>
            By providing an array of fields, which means only included fields will be validated.
          </p>
          <LinkToSandBox
            tabIndex={tabIndex}
            style={{
              position: 'relative',
              left: 0,
              marginBottom: 20,
            }}
            href="https://codesandbox.io/s/react-hook-form-validationfields-1xb91"
            target="_blank"
          >
            CodeSandbox
          </LinkToSandBox>

          <H5 style={{ marginTop: 20 }}>
            <code>validationSchema</code>
          </H5>

          <p>
            Apply form validation rules with <code>Yup</code> at the schema level, please refer the{' '}
            <CodeAsLink onClick={() => goToSection('validationSchema')}>validationSchema</CodeAsLink> section.
          </p>

          <hr />

          <CodeHeading
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.registerRef = ref
            }}
          >
            <h2>
              register: <Type>Function</Type>
            </h2>
          </CodeHeading>

          <ApiRefTable tabIndex={tabIndex} />

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
          <p>This function will pass you the form data when form validation is successful.</p>
          <p>
            <Note>Note:</Note> you can pass <code>async</code> function for asynchronous validation. eg:{' '}
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
              reset: <Type>Function</Type>
            </h2>
          </CodeHeading>
          <p>This function will reset fields value and errors within the form.</p>
          <p>
            <Note>Note:</Note> for controlled component like <code>React-Select</code> which doesn't expose{' '}
            <code>innerRef</code> or <code>ref</code>, you will have to reset the input value manually through input{' '}
            <code>onChange</code>.
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
              setError: <Type>(name: string, type: string, message: string, ref: Ref) => void</Type>
            </h2>
          </CodeHeading>
          <p>This function allows you to manually set an input error or clear one.</p>

          <SyntaxHighlighterWithCopy tabIndex={tabIndex} rawData={setError} url="https://codesandbox.io/s/o7rxyym3q5" />

          <hr />

          <CodeHeading
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.setValueRef = ref
            }}
          >
            <h2>
              setValue: <Type>(name: string, value: string | number | boolean) => void</Type>
            </h2>
          </CodeHeading>
          <p>This function allows you to dynamically set input/select value.</p>
          <p>
            <Note>Note: </Note> by invoking this method <code>formState</code> will include the <code>name</code> into{' '}
            <code>touched</code> .
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
              getValues: <Type>() => Object</Type>
            </h2>
          </CodeHeading>
          <p>This function will return the entire form data.</p>

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
              triggerValidation: <Type style={{ fontSize: 14}}>async {`({ name: string; value?: any; forceValidation?: boolean; })`} => boolean</Type>
            </h2>
          </CodeHeading>
          <p>To manually trigger an input/select validation in the form.</p>
          <p><Note>Note:</Note> When validation failed then <code>errors</code> object will be updated with associated error.</p>

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
            If you would like to centralize your validation rules or external validation schema, you can apply{' '}
            <code>validationSchema</code> when you invoke <code>useForm</code>. Currently support{' '}
            <Link href="https://github.com/jquense/yup" target="_blank" tabIndex={tabIndex}>
              Yup
            </Link>{' '}
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
              apiSectionsRef.current.TypescriptRef = ref
            }}
          >
            <h2>TypeScript</h2>
          </CodeHeading>
          <p>
            React Hook Form is built and Loving Typescript, you can defined <code>Type</code> to support form value.
          </p>

          <SyntaxHighlighterWithCopy
            tabIndex={tabIndex}
            rawData={typeScript}
            url="https://codesandbox.io/s/get-form-values-xjepz"
          />

          <hr />

          <section
            style={{
              textAlign: 'center',
            }}
          >
            <H1>Need your support</H1>
            <p>If you find React Hook Form is useful, please star the repo to support 🙏🏻</p>
            <DarkBlueButton
              onClick={() => {
                track({
                  category: 'Button',
                  label: 'Star',
                  action: 'Click - Go to Github star',
                })
                navigate('https://github.com/bluebill1049/react-hook-form')
              }}
            >
              Star React Hook Form
            </DarkBlueButton>
          </section>
        </main>
      </Wrapper>
    </Container>
  )
}

export default React.memo(Builder)
