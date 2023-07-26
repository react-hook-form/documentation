import api from "@/data/api"
import { useState } from "react"
import generic from "@/data/generic"
import typographyStyles from "@/styles/typography.module.css"
import tableStyles from "@/styles/table.module.css"
import styles from "../ApiRefTable.module.css"
import CodeArea from "../CodeArea"

const Register = () => {
  const [isStandard, toggleOption] = useState(true)
  return (
    <>
      <fieldset className={styles.fieldset} style={{ marginTop: 20 }}>
        <legend>{api.register.options.title}</legend>
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
        <table className={tableStyles.table}>
          <tbody>
            <tr>
              <th
                style={{
                  minWidth: isStandard ? 140 : 240,
                }}
              >
                {generic.name}
              </th>
              <th
                style={{
                  minWidth: 300,
                }}
              >
                {generic.description}
              </th>
              <th
                style={{
                  minWidth: 250,
                }}
              >
                {generic.codeExample}
              </th>
            </tr>
            <tr>
              <td>
                <code>ref</code>
                <br />
                <code className={typographyStyles.typeText}>React.Ref</code>
              </td>
              <td>React element ref</td>
              <td>
                <CodeArea
                  withOutCopy
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
                  withOutCopy
                  rawData={`<input
  {...register("test", {
    validate: ${
      isStandard
        ? `(value, formValues) => value === '1'`
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
      validateNumber: (_, values) =>
        !!(values.number1 + values.number2), 
      checkUrl: async () => await fetch(),
    }`
        : `{
      positive: v => parseInt(v) > 0 || 'should be greater than 0',
      lessThanTen: v => parseInt(v) < 10 || 'should be lower than 10',
      validateNumber: (_: number, formValues: FormValues) => {
        return formValues.number1 + formValues.number2 === 3 || 'Check sum number';
      },
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
                    <p>
                      Only applicable and support to {`<input type="number" />`}
                      , but we still cast to number type without trim or any
                      other data manipulation.
                    </p>
                  </li>
                  <li>
                    Does not transform <code>defaultValue</code> or{" "}
                    <code>defaultValues</code>.
                  </li>
                </ul>
              </td>
              <td>
                <CodeArea
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
                  wrong <code>Invalid Date</code> will be returned.
                </p>
                <ul>
                  <li>
                    <p>
                      <code>valueAs</code> process is happening{" "}
                      <strong>before</strong> validation.
                    </p>
                  </li>
                  <li>
                    <p>Only applies to {`<input />`}.</p>
                  </li>
                  <li>
                    Does not transform <code>defaultValue</code> or{" "}
                    <code>defaultValues</code>.
                  </li>
                </ul>
              </td>
              <td>
                <CodeArea
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
                    Does not transform <code>defaultValue</code> or{" "}
                    <code>defaultValues</code>.
                  </li>
                </ul>
              </td>
              <td>
                <CodeArea
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
                <code>disabled</code>
                <br />
                <code className={typographyStyles.typeText}>
                  boolean = false
                </code>
              </td>
              <td>
                <p>
                  Set <code>disabled</code> to <code>true</code> will lead input
                  value to be <code>undefined</code> and input control to be
                  disabled.
                </p>
                <ul>
                  <p>
                    <code>Disabled</code> prop will also omit{" "}
                    <strong>built-in</strong> validation rules.
                  </p>
                  <p>
                    For schema validation, you can leverage the{" "}
                    <code>undefined</code> value returned from input or context
                    object.
                  </p>
                </ul>
              </td>
              <td>
                <CodeArea
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
                <code>onChange</code>
                <br />
                <code
                  className={typographyStyles.typeText}
                >{`(e: SyntheticEvent) => void`}</code>
              </td>
              <td>
                <p>
                  <code>onChange</code> function event to be invoked in the
                  change event.
                </p>
              </td>
              <td>
                <CodeArea
                  withOutCopy
                  rawData={`register('firstName', {
  onChange: (e) => console.log(e)
})`}
                />
              </td>
            </tr>
            <tr>
              <td>
                <code>onBlur</code>
                <br />
                <code
                  className={typographyStyles.typeText}
                >{`(e: SyntheticEvent) => void`}</code>
              </td>
              <td>
                <p>
                  <code>onBlur</code> function event to be invoked in the blur
                  event.
                </p>
              </td>
              <td>
                <CodeArea
                  withOutCopy
                  rawData={`register('firstName', {
  onBlur: (e) => console.log(e)
})`}
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
                <p>
                  Set up value for the registered input. This prop should be
                  utilised inside <code>useEffect</code> or invoke once, each
                  re-run will update or overwrite the input value which you have
                  supplied.
                </p>
              </td>
              <td>
                <CodeArea
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
                <p>
                  <b>Note:</b> this prop should be avoided when using with{" "}
                  <code>useFieldArray</code> as <code>unregister</code> function
                  gets called after input unmount/remount and reorder.
                </p>
              </td>
              <td>
                <CodeArea
                  withOutCopy
                  rawData={`<input
  {...register("test", {
    shouldUnregister: true,
  })}
/>`}
                />
              </td>
            </tr>
            <tr>
              <td>
                deps:
                <br />
                <code className={typographyStyles.typeText}>
                  string | string[]
                </code>
              </td>
              <td>
                <p>
                  Validation will be triggered for the dependent inputs,it only
                  limited to <code>register</code> api not <code>trigger</code>.
                </p>
              </td>
              <td>
                <CodeArea
                  withOutCopy
                  rawData={`<input
  {...register("test", {
    deps: ['inputA', 'inputB'],
  })}
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

export default Register
