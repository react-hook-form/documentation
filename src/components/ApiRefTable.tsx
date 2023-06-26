import { useState } from "react"
import CodeArea from "./CodeArea"
import generic from "../data/generic"
import typographyStyles from "../styles/typography.module.css"
import tableStyles from "../styles/table.module.css"
import styles from "./ApiRefTable.module.css"
import register from "./codeExamples/register"
import registerTs from "./codeExamples/registerTs"

export default function ApiRefTable({ api }: { api: any }) {
  const [isStandard, toggleOption] = useState(true)

  return (
    <>
      {api.register.description}

      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table}>
          <tbody>
            <tr>
              <th>
                Input <code>{generic.name}</code>
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

      <h2 className={typographyStyles.subTitle}>Return</h2>

      <section>
        <p>
          <b className={typographyStyles.note}>Tip:</b>: What's happened to the
          input after invoke register API:
        </p>
      </section>

      <CodeArea
        rawData={`const { onChange, onBlur, name, ref } = register('firstName'); 
// include type check against field path with the name you have supplied.
        
<input 
  onChange={onChange} // assign onChange event 
  onBlur={onBlur} // assign onBlur event
  name={name} // assign name prop
  ref={ref} // assign ref prop
/>
// same as above
<input {...register('firstName')} />
`}
      />

      <h2 className={typographyStyles.subTitle} id="options">
        Options
      </h2>

      <p>{api.register.selectHelp}</p>

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

        <h2 id="rules" className={typographyStyles.rulesTitle}>
          Rules
        </h2>

        <ul>
          <li>
            <p>
              <code>name</code> is <b>required</b> and <b>unique</b> (except
              native radio and checkbox). Input name supports both dot and
              bracket syntax, which allows you to easily create nested form
              fields.
            </p>
          </li>
          <li>
            <p>
              <code>name</code> can neither start with a number nor use number
              as key name. Please avoid special characters as well.
            </p>
          </li>
          <li>
            <p>
              we are using dot syntax only for typescript usage consistency, so
              bracket <code>[]</code> will not work for array form value.
            </p>

            <CodeArea
              rawData={`register('test.0.firstName'); // ✅
register('test[0]firstName'); // ❌`}
            />
          </li>
          <li>
            <p>
              <code>disabled</code> input will result in an{" "}
              <code>undefined</code> form value. If you want to prevent users
              from updating the input, you can use <code>readOnly</code> or
              disable the entire {`<fieldset />`}. Here is an{" "}
              <a
                href="https://codesandbox.io/s/react-hook-form-disabled-inputs-oihxx"
                target="_blank"
                rel="noopener noreferrer"
              >
                example
              </a>
              .
            </p>
          </li>
          <li>
            <p>
              To produce an array of fields, input names should be followed by a{" "}
              dot and number. For example: <code>test.0.data</code>
            </p>
          </li>
          <li>
            <p>
              Changing the name on each render will result in new inputs being
              registered. It's recommend to keep static names for each
              registered input.
            </p>
          </li>
          <li>
            <p>
              Input value and reference will no longer gets removed based on
              unmount. You can invoke unregister to remove that value and
              reference.
            </p>
          </li>
          <li>
            <p>
              Individual register option can't be removed by{" "}
              <code>undefined</code> or <code>{`{}`}</code>. You can update
              individual attribute instead.
            </p>

            <CodeArea
              rawData={`register('test', { required: true });
register('test', {}); // ❌
register('test', undefined); // ❌
register('test', { required: false });  // ✅
`}
            />
          </li>
          <li>
            <p>
              There are certain keyword which need to avoid before conflicting
              with type check. They are <code>ref</code>, <code>_f</code>
            </p>
          </li>
        </ul>

        <h2 id="example" className={typographyStyles.subTitle}>
          Examples
        </h2>

        <CodeArea
          rawData={register}
          url="https://codesandbox.io/s/register-is0sfo"
          tsRawData={registerTs}
          tsUrl="https://codesandbox.io/s/react-hook-form-register-ts-ip2j3"
        />

        <h2 className={typographyStyles.subTitle}>Video</h2>
        <p>
          The following video explain <code>register</code> API in detail.
        </p>

        <iframe
          width="100%"
          height="528"
          title="react hook form controller build"
          src="https://www.youtube.com/embed/JFIpCoajYkA"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        {api.register.options.note}
      </div>
    </>
  )
}
