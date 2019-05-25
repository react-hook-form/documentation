import * as React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'
import { SubHeading, HeadingWithTopMargin, H5 } from '../styles/typography'
import ApiRefTable from './ApiRefTable'
import validationSchemaCode from './codeExamples/validationSchema'
import Link from '../styles/link'
import code from './codeExamples/defaultExample'
import SyntaxHighlighterWithCopy from './SyntaxHighlighterWithCopy'
import ApiMenu from './ApiMenu'
import ApiFormState from './ApiFormState'
import resetCode from './codeExamples/resetCode'
import ApiWatch from './ApiWatch'
import ApiErrors from './ApiErrors'
import handleSubmitCode from './codeExamples/handleSubmitCode'
import setError from './codeExamples/setError'
import setValue from './codeExamples/setValue'
import track from './utils/track'
import {Container, Wrapper} from '../styles/containers';

const { useRef } = React;

const CodeAsLink = styled(Link)`
  cursor: pointer;
  text-decoration: underline;
`

export const CodeHeading = styled.code`
  & > h2:before {
    display: inline-block;
    content: '</> '
  }
`

export const Table = styled.table`
  margin-top: 20px;

  th {
    text-align: left;
  }

  td {
    vertical-align: top;
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
  'formState',
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
  })
  const tabIndex = showApi ? 0 : -1
  copyFormData.current = formData

  const goToSection = name => {
    const refName = `${name}Ref`
    track({
      category: 'GoToSection',
      label: `Go to section ${refName}`,
      action: `Go to section ${refName}`,
    })
    if (apiSectionsRef.current[refName]) {
      apiSectionsRef.current[refName].scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Container>
      <HeadingWithTopMargin>API</HeadingWithTopMargin>
      <SubHeading>React hook form focus on providing the best DX by simplify the API.</SubHeading>

      <Wrapper>
        <ApiMenu tabIndex={tabIndex} links={links} goToSection={goToSection} />
        <main>
          <CodeHeading
            ref={ref => {
              // @ts-ignore
              apiSectionsRef.current.useFormRef = ref
            }}
          >
            <h2>
              useForm: <Type>Function</Type>
            </h2>
          </CodeHeading>
          <p>
            By invoking <code>useForm</code>, you will receive methods to{' '}
            <CodeAsLink onClick={() => goToSection('register')}>register</CodeAsLink>,{' '}
            <CodeAsLink onClick={() => goToSection('errors')}>errors</CodeAsLink>,{' '}
            <CodeAsLink onClick={() => goToSection('handleSubmit')}>handleSubmit</CodeAsLink>,{' '}
            <CodeAsLink onClick={() => goToSection('reset')}>reset</CodeAsLink>,{' '}
            <CodeAsLink onClick={() => goToSection('setError')}>setError</CodeAsLink>,{' '}
            <CodeAsLink onClick={() => goToSection('setValue')}>setValue</CodeAsLink>,{' '}
            <CodeAsLink onClick={() => goToSection('formState')}>formState</CodeAsLink>,{' '}
            <CodeAsLink onClick={() => goToSection('watch')}>watch</CodeAsLink> and{' '}
            <CodeAsLink onClick={() => goToSection('formState')}>formState</CodeAsLink>.
          </p>

          <p>
            <code>useForm</code> also has <b>optional</b> argument, which are <code>mode</code>,{' '}
            <code>defaultValues</code> and <code>validationSchema</code>.
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
  validationSchema: {},
});`}
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
                    Validation will trigger <code>onChange</code> with each inputs, and lead to multiple re-render. Not
                    recommended: Consider this as a bad performance practice.
                  </td>
                </tr>
              </tbody>
            </Table>
          </TableWrapper>

          <H5 style={{ marginTop: 20 }}>
            <code>defaultValues</code>
          </H5>

          <p>
            You can set set input default value with <code>defaultValue/defaultChecked</code>{' '}
            <Link
              href="https://reactjs.org/docs/uncontrolled-components.html"
              onClick={() => {
                track({
                  category: 'API',
                  label: 'read more at React doc',
                  action: 'go to React Doc',
                })
              }}
            >
              (read more at React doc for uncontrolled input default value)
            </Link>{' '}
            or invoke <code>useForm</code> and pass `defaultValues` for the entire form.
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
});`}
          />

          <H5 style={{ marginTop: 20 }}>
            <code>validationSchema</code>
          </H5>

          <p>
            Apply form validation rules at the schema level, please refer the{' '}
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

          <SyntaxHighlighterWithCopy
            tabIndex={tabIndex}
            rawData={setValue}
            url="https://codesandbox.io/s/react-hook-form-set-inputselect-value-c46ly"
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
            <code>validationSchema</code> when you invoke <code>useForm</code>. we use{' '}
            <Link href="https://github.com/jquense/yup" target="_blank" tabIndex={tabIndex}>
              Yup
            </Link>{' '}
            for object schema validation and the example below demonstrate the usage.
          </p>
          <SyntaxHighlighterWithCopy
            tabIndex={tabIndex}
            rawData={validationSchemaCode}
            url="https://codesandbox.io/s/928po918qr"
          />

          <hr />
        </main>
      </Wrapper>
    </Container>
  )
}

export default React.memo(Builder)
