import * as React from "react"
import Prism from "prismjs"
import CodeArea from "./CodeArea"
import generic from "../data/generic"
import * as typographyStyles from "../styles/typography.module.css"
import * as tableStyles from "../styles/table.module.css"
import * as styles from "./ApiRefTable.module.css"
import register from "./codeExamples/register"
import registerTs from "./codeExamples/registerTs"

export default function ApiRefTable({
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
                <code>register("firstName")</code>
              </td>
              <td>
                <code>{`{firstName: 'value'}`}</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>register("name.firstName")</code>
              </td>
              <td>
                <code>{`{name: { firstName: 'value' }}`}</code>
              </td>
            </tr>
            <tr>
              <td>
                <code>register("name.firstName.0")</code>
              </td>
              <td>
                <code>{`{name: { firstName: [ 'value' ] }}`}</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <fieldset className={styles.fieldset} style={{ marginTop: 40 }}>
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
                  minWidth: isStandard ? 140 : 240,
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
                  minWidth: 250,
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
                  React.Ref
                </code>
              </td>
              <td>React element ref</td>
              <td>
                <CodeArea
                  withOutCopy
                  style={{ marginTop: -10 }}
                  rawData={`<input {...register("test")} />`}
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
  message: string
}`}
                </code>
              </td>
              <td>{api.register.validation.required}</td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  {...register("test", {
    ${
      isStandard
        ? "required: true"
        : `required: 'error message' // JS only: <p>error message</p> TS only support string`
    }
  })}
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
  message: string
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
  {...register("test", {
      ${
        isStandard
          ? "maxLength: 2"
          : `maxLength : {
        value: 2,
        message: 'error message' // JS only: <p>error message</p> TS only support string
      }`
      }
  })}
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
  message: string
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
  {...register("test", {
    minLength: ${
      isStandard
        ? 1
        : `{
      value: 1,
      message: 'error message' // JS only: <p>error message</p> TS only support string
    }`
    }
  })}
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
  message: string
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
  type="number"
  {...register('test', {
    max: ${
      isStandard
        ? 3
        : `{
      value: 3,
      message: 'error message' // JS only: <p>error message</p> TS only support string
    }`
    }
  })}
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
  message: string
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
  type="number"
  {...register("test", {
    min: ${
      isStandard
        ? 3
        : `{
      value: 3,
      message: 'error message' // JS only: <p>error message</p> TS only support string
    }`
    }
  })}
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
  message: string
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
  {...register("test", {
    pattern: ${
      isStandard
        ? "/[A-Za-z]{3}/"
        : `{
      value: /[A-Za-z]{3}/,
      message: 'error message' // JS only: <p>error message</p> TS only support string
    }`
    }
  })}
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
  {...register("test", {
    validate: ${
      isStandard
        ? `value => value === '1'`
        : `value => value === '1' || 'error message'  // JS only: <p>error message</p> TS only support string`
    }
  })}
/>
// object of callback functions
<input
  {...register("test1", {
    validate: ${
      isStandard
        ? `{
      positive: v => parseInt(v) > 0,
      lessThanTen: v => parseInt(v) < 10,
      checkUrl: async () => await fetch(),
    }`
        : `{
      positive: v => parseInt(v) > 0 || 'should be greater than 0',
      lessThanTen: v => parseInt(v) < 10 || 'should be lower than 10',
      // you can do asynchronous validation as well
      checkUrl: async () => await fetch() || 'error message',  // JS only: <p>error message</p> TS only support string
      messages: v => !v && ['test', 'test2']
    }`
    }
  })}
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
                <ul>
                  <li>
                    <p>
                      <code>valueAs</code> process is happening{" "}
                      <strong>before</strong> validation.
                    </p>
                  </li>
                  <li>
                    <p>Only applies to text input.</p>
                  </li>
                  <li>
                    Does not transform <code>defaultValue</code> or
                    <code>defaultValues</code>.
                  </li>
                </ul>
              </td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  type="number"
  {...register("test", {
    valueAsNumber: true,
  })}
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
                  Returns a <code>Date</code> object normally. If something goes
                  wrong <code>null</code> will be returned.
                </p>
                <ul>
                  <li>
                    <p>
                      <code>valueAs</code> process is happening{" "}
                      <strong>before</strong> validation.
                    </p>
                  </li>
                  <li>
                    <p>Only applies to text input.</p>
                  </li>
                  <li>
                    Does not transform <code>defaultValue</code> or
                    <code>defaultValues</code>.
                  </li>
                </ul>
              </td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  type="date"
  {...register("test", {
    valueAsDate: true,
  })}
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
                <ul>
                  <li>
                    <p>
                      <code>valueAs</code> process is happening{" "}
                      <strong>before</strong> validation. Also,{" "}
                      <code>setValueAs</code> is ignored if either{" "}
                      <code>valueAsNumber</code> or <code>valueAsDate</code> are{" "}
                      <code>true</code>.
                    </p>
                  </li>
                  <li>
                    <p>Only applies to text input.</p>
                  </li>
                  <li>
                    Does not transform <code>defaultValue</code> or
                    <code>defaultValues</code>.
                  </li>
                </ul>
              </td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  type="number"
  {...register("test", {
    setValueAs: v => parseInt(v),
  })}
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>disable</code>
                <br />
                <code
                  className={typographyStyles.typeText}
                >{`boolean = false`}</code>
              </td>
              <td>
                Set <code>disable</code> to <code>true</code> will lead input
                value to be <code>undefined</code> and input control to be
                disabled.
              </td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  {...register("test", {
    disabled: true
  })}
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>value</code>
                <br />
                <code className={typographyStyles.typeText}>unknown</code>
              </td>
              <td>
                <p>Set up value for the registered input.</p>
              </td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`register('firstName', { value: 'bill' })`}
                />
              </td>
            </tr>
            <tr>
              <td>
                shouldUnregister:
                <br />
                <code className={typographyStyles.typeText}>boolean</code>
              </td>
              <td>
                <p>
                  Input will be unregistered after unmount and defaultValues
                  will be removed as well.
                </p>
              </td>
              <td>
                <CodeArea
                  style={{ marginTop: -10 }}
                  withOutCopy
                  rawData={`<input
  {...register("test", {
    shouldUnregister: true,
  })}
/>`}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <CodeArea
          rawData={register}
          url="https://codesandbox.io/s/react-hook-form-js-wbybv"
          tsRawData={registerTs}
          tsUrl="https://codesandbox.io/s/react-hook-form-register-ts-ip2j3"
        />

        {api.register.options.note}
      </div>
    </>
  )
}
