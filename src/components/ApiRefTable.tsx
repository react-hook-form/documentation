import * as React from "react"
import Prism from "prismjs"
import CodeArea from "./CodeArea"
import generic from "../data/generic"
import typographyStyles from "../styles/typography.module.css"
import tableStyles from "../styles/table.module.css"
import styles from "./ApiRefTable.module.css"

export default function ApiRefTable({
  goToSection,
  api,
  currentLanguage,
}: {
  api: any
  goToSection: (name: string, animate?: boolean) => void
  currentLanguage: string
}) {
  const [isStandard, toggleOption] = React.useState(true)
  const highlightContainer = React.useRef<HTMLTableElement | null>(null)

  React.useEffect(() => {
    if (highlightContainer.current) {
      Prism.highlightAllUnder(highlightContainer.current)
    }
  }, [isStandard])

  return (
    <>
      {api.register.description}

      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table}>
          <tbody>
            <tr>
              <th>
                Input <code>{generic.name[currentLanguage]}</code>
              </th>
              <th>{api.register.example}</th>
            </tr>
            <tr>
              <td>
                <code>name="firstName"</code>
              </td>
              <td>
                <code>{`{ firstName: 'value'}`}</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>name="name.firstName"</code>
              </td>
              <td>
                <code>{`{ name: { firstName: 'value' } }`}</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>name="name.firstName[0]"</code>
              </td>
              <td>
                <code>{`{ name: { firstName: [ 'value' ] } }`}</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {api.register.fieldArray}

      {api.register.options.note(goToSection)}

      <fieldset className={styles.fieldset}>
        <legend>{api.register.options.title}</legend>
        <p>{api.register.selectHelp}</p>
        <label>
          <input
            onChange={() => toggleOption(true)}
            type="radio"
            name="errorMessage"
            defaultChecked
          />
          {api.register.options.registerWithValidation}
        </label>
        <label>
          <input
            onChange={() => toggleOption(false)}
            type="radio"
            name="errorMessage"
          />
          {api.register.options.registerWithValidationMessage}
        </label>
      </fieldset>

      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table} ref={highlightContainer}>
          <tbody>
            <tr>
              <th
                style={{
                  minWidth: isStandard ? 100 : 240,
                }}
              >
                {generic.name[currentLanguage]}
              </th>
              <th
                style={{
                  minWidth: 300,
                }}
              >
                {generic.description[currentLanguage]}
              </th>
              <th
                style={{
                  minWidth: 320,
                }}
              >
                {generic.codeExample[currentLanguage]}
              </th>
            </tr>
            <tr>
              <td>
                <code>ref</code>
                <br />
                <code className={typographyStyles.typeText}>
                  React.RefObject
                </code>
              </td>
              <td>React element ref</td>
              <td>
                <CodeArea
                  withOutCopy
                  style={{ marginTop: -10 }}
                  rawData={`<input name="test" ref={register} />`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>required</code>
                <br />
                <code className={typographyStyles.typeText}>
                  {isStandard
                    ? "boolean"
                    : `string |
{
  value: boolean,
  message: string | React.ReactElement
}`}
                </code>
              </td>
              <td>{api.register.validation.required}</td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  name="test"
  ref={
    register({
      ${
        isStandard
          ? "required: true"
          : `required: 'error message' // JS only: <p>error message</p> TS only support string`
      }
    })
  }
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>maxLength</code>
                <br />
                <code>
                  <code className={typographyStyles.typeText}>
                    {isStandard
                      ? "number"
                      : `{
  value: number,
  message: string | React.ReactElement
}`}
                  </code>
                </code>
              </td>
              <td>{api.register.validation.maxLength}</td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  name="test"
  ref={
    register({
      ${
        isStandard
          ? "maxLength: 2"
          : `maxLength : {
        value: 2,
        message: 'error message' // JS only: <p>error message</p> TS only support string
      }`
      }
    })
  }
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>minLength</code>
                <br />
                <code>
                  <code className={typographyStyles.typeText}>
                    {isStandard
                      ? "number"
                      : `{
  value: number,
  message: string | React.ReactElement
}`}
                  </code>
                </code>
              </td>
              <td>{api.register.validation.minLength}</td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  name="test"
  ref={
    register({
      minLength: ${
        isStandard
          ? 1
          : `{
        value: 1,
        message: 'error message' // JS only: <p>error message</p> TS only support string
      }`
      }
    })
  }
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>max</code>
                <br />
                <code>
                  <code className={typographyStyles.typeText}>
                    {isStandard
                      ? "number"
                      : `{
  value: number,
  message: string | React.ReactElement
}`}
                  </code>
                </code>
              </td>
              <td>{api.register.validation.max}</td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  name="test"
  ref={
    register({
      max: ${
        isStandard
          ? 3
          : `{
        value: 3,
        message: 'error message' // JS only: <p>error message</p> TS only support string
      }`
      }
    })
  }
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>min</code>
                <br />
                <code>
                  <code className={typographyStyles.typeText}>
                    {isStandard
                      ? "number"
                      : `{
  value: number,
  message: string | React.ReactElement
}`}
                  </code>
                </code>
              </td>
              <td>{api.register.validation.min}</td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  name="test"
  ref={
    register({
      min: ${
        isStandard
          ? 3
          : `{
        value: 3,
        message: 'error message' // JS only: <p>error message</p> TS only support string
      }`
      }
    })
  }
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>pattern</code>
                <br />
                <code>
                  <code className={typographyStyles.typeText}>
                    {isStandard
                      ? "RegExp"
                      : `{
  value: RegExp,
  message: string | React.ReactElement
}`}
                  </code>
                </code>
              </td>
              <td>{api.register.validation.pattern}</td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  name="test"
  ref={
    register({
      pattern: ${
        isStandard
          ? "/[A-Za-z]{3}/"
          : `{
        value: /[A-Za-z]{3}/,
        message: 'error message' // JS only: <p>error message</p> TS only support string
      }`
      }
    })
  }
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>validate</code>
                <br />
                <code className={typographyStyles.typeText}>
                  Function | Object
                </code>
              </td>
              <td>{api.register.validation.validate}</td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  name="test"
  ref={
    register({
      validate: ${
        isStandard
          ? `value => value === '1'`
          : `value => value === '1' || 'error message'  // JS only: <p>error message</p> TS only support string`
      }
    })
  }
/>
// object of callback functions
<input
  name="test1"
  ref={
    register({
      validate: ${
        isStandard
          ? `{
        positive: value => parseInt(value, 10) > 0,
        lessThanTen: value => parseInt(value, 10) < 10,
        asyncValidate: async value => await fetch(url)
      }`
          : `{
        positive: value => parseInt(value, 10) > 0 || 'should be greater than 0',
        lessThanTen: value => parseInt(value, 10) < 10 || 'should be lower than 10',
        // you can do asynchronous validation as well
        asyncValidate: async value => await fetch(url) || 'error message'  // JS only: <p>error message</p> TS only support string 
      }`
      }
    })
  }
/>
`}
                />
              </td>
            </tr>
            <tr>
              <td>
                valueAsNumber:
                <br />
                <code className={typographyStyles.typeText}>boolean</code>
              </td>
              <td>
                <p>
                  Returns a Number normally. If something goes wrong{" "}
                  <code>NaN</code> will be returned.
                </p>
              </td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  name="test"
  type="number"
  ref={
    register({
      valueAsNumber: true,
    })
  }
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                valueAsDate:
                <br />
                <code className={typographyStyles.typeText}>boolean</code>
              </td>
              <td>
                <p>
                  Returns a Date normally. If something goes wrong{" "}
                  <code>null</code> will be returned.
                </p>
              </td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  name="test"
  type="date"
  ref={
    register({
      valueAsDate: true,
    })
  }
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                setValueAs:
                <br />
                <code
                  className={typographyStyles.typeText}
                >{`<T>(value: any) => T`}</code>
              </td>
              <td>
                <p>Return input value by running through the function.</p>
              </td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  name="test"
  ref={
    register({
      setValueAs: (value) => parseInt(value),
    })
  }
/>`}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
