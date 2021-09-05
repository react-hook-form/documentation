import * as React from "react"
import CodeArea from "../../components/CodeArea"
import useFieldArrayArgument from "../../components/codeExamples/useFieldArrayArgument"
import generic from "../generic"
import { Link } from "gatsby"
import * as typographyStyles from "../../styles/typography.module.css"
import * as buttonStyles from "../../styles/button.module.css"
import * as tableStyles from "../../styles/table.module.css"
import TabGroup from "../../components/TabGroup"
import formStateUseEffect from "../../components/codeExamples/formStateUseEffect"
import formStateUseEffectTs from "../../components/codeExamples/formStateUseEffectTs"
import defaultValues from "../../components/codeExamples/defaultValues"
import defaultValuesTs from "../../components/codeExamples/defaultValuesTs"

export default {
  title: "API Documentation",
  header: {
    description: "focuses on providing the best DX by simplifying the API.",
  },
  useForm: {
    title: "useForm",
    intro: (
      <>
        By invoking <code>useForm</code>, you will receive the following methods{" "}
        :
      </>
    ),
    description: (
      <p>
        <code>useForm</code> is custom hook for managing forms with ease. It
        takes <b>optional</b> arguments. The following example demonstrates all
        of the arguments along with their default values.
      </p>
    ),
    validateCriteriaMode: (
      <ul style={{ marginLeft: 0, paddingLeft: 15 }}>
        <li>
          <p>
            When set to <code>firstError</code> (default), only the first error
            from each field will be gathered.
          </p>
        </li>
        <li>
          <p>
            When set to <code>all</code>, all errors from each field will be
            gathered.
          </p>
        </li>
      </ul>
    ),
    validateContext: (
      <>
        <p>
          This context <code>object</code> is mutable and will be injected into{" "}
          the <code>resolver</code>'s second argument or{" "}
          <a
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </a>{" "}
          validation's context object.
        </p>
      </>
    ),
    validateOnSubmit: (
      <>
        Validation will trigger on the <code>submit</code> event and invalid
        inputs will attach <code>onChange</code> event listeners to re-validate
        them.
      </>
    ),
    validateOnBlur: (
      <>
        Validation will trigger on the <code>blur</code> event.
      </>
    ),
    validateOnChange: (
      <>
        Validation will trigger on the <code>change</code> event with each
        input, and lead to multiple re-renders. Warning: this often comes with a
        significant impact on performance.
      </>
    ),
    validationOnAll: (
      <>
        Validation will trigger on the <code>blur</code> and <code>change</code>{" "}
        events.
      </>
    ),
    validationOnTouched: (
      <>
        <p>
          Validation will trigger on the first <code>blur</code> event. After
          that, it will trigger on every <code>change</code> event.
        </p>
        <p>
          <b className={typographyStyles.note}>Note:</b> when using with{" "}
          <code>Controller</code>, make sure to wire up <code>onBlur</code> with{" "}
          the <code>render</code> prop.
        </p>
      </>
    ),
    defaultValues: (
      <>
        <p>
          The <code>defaultValues</code> for inputs are used as the initial
          value when a component is first rendered, before a user interacts with
          it. It is <b>encouraged</b> that you set <code>defaultValues</code>{" "}
          for all inputs to non-
          <code>undefined</code> values such as the empty <code>string</code> or{" "}
          <code>null</code>.
        </p>
        <p>
          You can set an input's default value with{" "}
          <code>defaultValue/defaultChecked</code>{" "}
          <a
            className={buttonStyles.links}
            href="https://reactjs.org/docs/uncontrolled-components.html"
          >
            (read more from the React doc for Default Values)
          </a>
          . You can pass <code>defaultValues</code> as an optional argument to{" "}
          <code>useForm()</code> to populate the default values for the entire
          form, or set values on an individual{" "}
          <Link to={"/api/usecontroller/controller"}>Controller</Link> component
          via its <code>defaultValue</code> property. If both{" "}
          <code>defaultValue</code> and <code>defaultValues</code> are set, the
          value from <code>defaultValues</code> will be used.
        </p>

        <h2 className={typographyStyles.subTitle}>Rules</h2>

        <ul>
          <li>
            <p>
              {" "}
              <code>defaultValues</code> are cached{" "}
              <strong>on the first render</strong> within the custom hook. If
              you want to reset the <code>defaultValues</code>, you should use
              the <Link to={"/api/useform/reset"}>reset</Link> api.
            </p>
          </li>
          <li>
            <p>
              <code>defaultValues</code> will be injected into{" "}
              <Link to={"/api/useform/watch"}>watch</Link>,{" "}
              <Link to={"/api/usewatch"}>useWatch</Link>,{" "}
              <Link to={"/api/usecontroller/controller"}>Controller</Link> and{" "}
              <Link to={"/api/usecontroller"}>useController</Link>'s{" "}
              <code>defaultValue</code>.
            </p>
          </li>
          <li>
            <p>
              It's not default state for the form, to include additional form
              values. To do so:
            </p>
            <ol>
              <li>
                <p>
                  Register hidden inputs. For example:{" "}
                  <code>{`<input type="hidden" {...register('test')} />`}</code>
                </p>
              </li>
              <li>
                <p>Combine values via the onSubmit callback.</p>
              </li>
              <li>
                <p>
                  Register an input with a value. For example:{" "}
                  <code>{`register('test')({ test: "test"})`}</code>
                </p>
              </li>
            </ol>
          </li>
          <li>
            <p>
              <code>defaultValues</code> will be shallowly merged with form
              submission data.
            </p>

            <CodeArea
              url="https://codesandbox.io/s/react-hook-form-defaultvalues-v7-vd85w"
              rawData={defaultValues}
              tsUrl="https://codesandbox.io/s/react-hook-form-defaultvalues-v6-ts-forked-7z3v0"
              tsRawData={defaultValuesTs}
            />
          </li>
          <li>
            <p>
              From version 7.6.0 onwards with <code>shouldUnregister</code> set
              to <>false</>, any missing registered inputs from{" "}
              <code>defaultValues</code> will get automatically registered.
              However, it's still recommend using the <code>register</code>{" "}
              method and provide hidden input to follow HTML standard.
            </p>

            <p>
              <b className={typographyStyles.note}>Important:</b> each object
              key will be <code>register</code> as an input.
            </p>

            <CodeArea
              rawData={`const App = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      // missing "test.lastName" input will be registered
      test: { firstName: 'bill', lastName: 'luo' },
      test1: ['test', 'test1']
    },
  });
  
  // Inputs will get register via defaultValues 
  // register('test.lastName')
  // register('test1.0')
  // register('test1.1')
  
  const onSubmit = (data) => console.log(data); // { test: { firstName: 'bill', lastName: 'luo' } };
  
  // ✅ alternative custom register
  // useEffect(() => {
  //  register('test.lastName');
  // }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('test.firstName')} />
      // <input {...register('test.lastName')} type="hidden" /> ✅ alternative hidden input
      <button />
    </form>
  );
};`}
            />
          </li>
        </ul>
      </>
    ),
    reValidateMode: (
      <p>
        This option allows you to configure when inputs with errors get
        re-validated <strong>after</strong> submit. By default, validation is
        only triggered during an input change.
      </p>
    ),
    validationFields: (
      <p>
        Providing an array of fields means only included fields will be
        validated. This option is useful when you want to toggle which fields
        are required to validate.
      </p>
    ),
    submitFocusError: (
      <>
        <p>
          When set to true (default) and the user submits a form that fails the
          validation, it will set focus on the first field with an error.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> only registered fields
          with a <code>ref</code> will work. Custom registered inputs do not
          apply. For example: <code>{`register('test') // doesn't work`}</code>{" "}
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> the focus order is
          based on the <code>register</code> order.
        </p>
      </>
    ),
    shouldUnregister: (
      <>
        <p>
          By default, an input value will be retained when input is removed.
          However, you can set <code>shouldUnregister</code> to{" "}
          <code>true</code> to <code>unregister</code> input during unmount.
        </p>

        <ul>
          <li>
            <p>
              This is a global config that overwrites child-level config, if you
              want to have individual behavior, then you should set the config
              at the component or hook level, not at <code>useForm</code>.
            </p>
          </li>
          <li>
            <>
              By setting <code>shouldUnregister</code> to true at{" "}
              <code>useForm</code> level, <code>defaultValues</code> will{" "}
              <b>not</b> be merged against submission result.
            </>
          </li>
          <li>
            <p>
              set <code>shouldUnregister: true</code> will set your form behave
              more closer as native.
            </p>
            <ul>
              <li>
                <p>input unmount will remove value.</p>
              </li>
              <li>
                <p>input hidden should applied for hidden data.</p>
              </li>
              <li>
                <p>
                  only registered input will be included as submission data.
                </p>
              </li>
              <li>
                <p>
                  unmounted input will need to notify at either{" "}
                  <code>useForm</code>, or <code>useWatch</code>'s{" "}
                  <code>useEffect</code> for hook form to verify input is
                  unmounted from the DOM.
                </p>

                <CodeArea
                  rawData={`const NotWork = () => {
  const [show, setShow] = React.useState(false);
  // ❌ won't get notified, need to invoke unregister
  return {show && <input {...register('test')} />}                
}

const Work = () => {
  const { show } = useWatch()
  // ✅ get notified at useEffect
  return {show && <input {...register('test1')} />}                
}

const App = () => {
  const [show, setShow] = React.useState(false);
  const { control } = useForm({ shouldUnregister: true });
  return (
    <div>
      // ✅ get notified at useForm's useEffect
      {show && <input {...register('test2')} />}                
      <NotWork />
      <Work control={control} />
    </div>
  )
}
`}
                />
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
    delayError: (
      <p>
        This config will delay the error state to be displayed to the end-user
        in milliseconds. Correct the error input will remove the error instantly
        and delay will not be applied.
      </p>
    ),
  },
  unregister: {
    title: "unregister",
    description: (
      <>
        <p>
          This method allows you to <code>unregister</code> a single input or an
          array of inputs. It also provides a second optional argument to keep
          state after unregistering an input.
        </p>

        <h2 className={typographyStyles.subTitle}>Rules</h2>

        <ul>
          <li>
            <p>
              This method will remove input reference and its value which means{" "}
              <b>build-in validation</b> rules will be removed as well.
            </p>
          </li>
          <li>
            <p>
              By <code>unregister</code> an input, it will not affect or
              unregister your schema validation.
            </p>
            <CodeArea
              rawData={`const schema = yup.object().shape({
  firstName: yup.string().required()
});

unregister("firstName"); // this will not remove the validation against firstName input
`}
            />
          </li>
        </ul>

        <div className={tableStyles.tableWrapper}>
          <h2 className={typographyStyles.subTitle}>Props</h2>

          <p>
            The example below shows what to expect when you invoke the{" "}
            <code>unregister</code> method.
          </p>

          <CodeArea
            rawData={`<input {...register('yourDetails.firstName')} />
<input {...register('yourDetails.lastName')} />
`}
          />

          <p>
            The example below shows what to expect when you invoke the{" "}
            <code>unregister</code> method.
          </p>

          <table className={tableStyles.table}>
            <tbody>
              <tr>
                <th>Type</th>
                <th>Input Name</th>
                <th>Example</th>
              </tr>
              <tr>
                <td>
                  <code className={typographyStyles.typeText}>
                    string // as key name
                  </code>
                </td>
                <td>
                  <code>unregister("yourDetails")</code>
                </td>
                <td>
                  <code>{`{}`}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code className={typographyStyles.typeText}>string</code>
                </td>
                <td>
                  <code>unregister("yourDetails.firstName")</code>
                </td>
                <td>
                  <code>{`{ lastName: '' }`}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code className={typographyStyles.typeText}>string[]</code>
                </td>
                <td>
                  <code>unregister(["yourDetails.lastName"])</code>
                </td>
                <td>
                  <code>{`{ firstName: '' }`}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  register: {
    title: "register",
    description: (
      <>
        <p>
          This method allows you to register an input or select element and
          apply validation rules to React Hook Form. Validation rules are all
          based on the HTML standard and also allow for custom validation
          methods.
        </p>

        <p>
          By invoking the register function and supplying an input's name, you
          will receive the following methods:
        </p>

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <thead>
              <tr>
                <th>{generic.name.en}</th>
                <th>{generic.type.en}</th>
                <th>{generic.description.en}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>onChange</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>
                    ChangeHandler
                  </code>
                </td>
                <td>
                  <p>
                    <code>onChange</code> prop to subscribe the input change
                    event.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>onBlur</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>
                    ChangeHandler
                  </code>
                </td>
                <td>
                  <p>
                    <code>onBlur</code> prop to subscribe the input blur event.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>ref</code>
                </td>
                <td>
                  <code
                    className={typographyStyles.typeText}
                  >{`React.Ref<any>`}</code>
                </td>
                <td>
                  <p>Input reference for hook form to register.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>name</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>{`string`}</code>
                </td>
                <td>
                  <p>Input's name being registered.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className={typographyStyles.subTitle}>Rules</h2>

        <ul>
          <li>
            <p>
              It is <b>required</b> and <b>unique</b> (except native radio and
              checkbox). Input name supports both dot and bracket syntax, which
              allows you to easily create nested form fields.
            </p>
          </li>
          <li>
            <p>
              It can neither start with a number nor use number as key name.
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
        </ul>
      </>
    ),
    example: "Submit Result",
    selectHelp:
      "By selecting the register option, the API table below will get updated.",
    options: {
      title: "Register Options",
      registerWithValidation: "Register with validation",
      registerWithValidationMessage:
        "Register with validation and error message",
      note: (
        <>
          <h2 className={typographyStyles.subTitle}>Tips</h2>

          <h4 className={typographyStyles.questionTitle}>Custom Register</h4>

          <p>
            You can also <code>register</code> inputs with{" "}
            <code>useEffect</code> and treat them as virtual inputs. For
            controlled components, we provide a custom hook{" "}
            <Link to={"/api/usecontroller"}>useController</Link> and{" "}
            <Link to={"/api/usecontroller/controller"}>Controller</Link>{" "}
            component to take care this process for you.
          </p>

          <p>
            If you choose to manually register fields, you will need to update
            the input value with{" "}
            <Link to={"/api/useform/setvalue"}>setValue</Link>.
          </p>

          <CodeArea
            rawData={`register('firstName', { required: true, min: 8 });
            
const { onChange } = register('lastChange'); // this onChange method can update the input value

// This will work for React Native, except you can't reset input value
<TextInput onTextChange={onChange} />`}
          />

          <h4 className={typographyStyles.questionTitle}>
            Custom onChange, onBlur
          </h4>

          <p>
            When you want to combine with your <code>onChange</code>,{" "}
            <>onBlur</>, you can achieve by the following:
          </p>

          <CodeArea
            rawData={`// onChange got overwrite by register method
<input onChange={handleChange} {...register('test')} />

// register's onChange got overwrite by register method
<input {...register('test')} onChange={handleChange}/>

const firstName = register('firstName', { required: true })
<input 
  onChange={(e) => {
    firstName.onChange(e); // method from hook form register
    handleChange(e); // your method
  }}
  onBlur={firstName.onBlur}
  ref={firstName.ref} 
/>
`}
          />

          <h4 className={typographyStyles.questionTitle}>
            How to work with innerRef, inputRef?
          </h4>

          <p>
            When the custom input component didn't expose ref correctly, you can
            get it working via the following.
          </p>

          <CodeArea
            rawData={`// not working, because ref is not assigned
<TextInput {...register('test')} />

const firstName = register('firstName', { required: true })
<TextInput 
  onChange={firstName.onChange}
  onBlur={firstName.onBlur}
  inputRef={firstName.ref} // you can achieve the same for different ref name such as innerRef
/>

// correct way to forward input's ref
const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
    <option value="20">20</option>
    <option value="30">30</option>
  </select>
));
`}
          />
        </>
      ),
    },
    validation: {
      required: (
        <>
          A Boolean which, if true, indicates that the input must have a value
          before the form can be submitted. You can assign a string to return an
          error message in the <code>errors</code> object.
        </>
      ),
      maxLength: "The maximum length of the value to accept for this input.",
      minLength: "The minimum length of the value to accept for this input.",
      max: "The maximum value to accept for this input.",
      min: "The minimum value to accept for this input.",
      pattern: (
        <>
          <p>The regex pattern for the input.</p>
          <p>
            <b className={typographyStyles.note}>Note:</b> A RegExp object with
            the /g flag keeps track of the lastIndex where a match occurred.
          </p>
        </>
      ),
      validate: (
        <>
          <p>
            You can pass a callback function as the argument to validate, or you
            can pass an object of callback functions to validate all of them.
          </p>
          <p>
            <b className={typographyStyles.note}>Note:</b> for{" "}
            <code>object</code> or <code>array</code> input data, it's recommend
            to use the <code>validate</code> function for validation as the
            other rules mostly apply to <code>string</code>,{" "}
            <code>string[]</code>, <code>number</code> and <code>boolean</code>{" "}
            data type.
          </p>
        </>
      ),
    },
  },
  formState: {
    title: "formState",
    description: (
      <>
        <p>
          This object contains information about the form state. If you want to
          subscribe to <code>formState</code> via <code>useEffect</code>, make
          sure that you place the entire <code>formState</code> in the optional
          array.
        </p>

        <h2 className={typographyStyles.subTitle}>Rules</h2>

        <p>
          <code>formState</code> is wrapped with a{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Proxy
          </a>{" "}
          to improve render performance and skip extra logic if specific state
          is not subscribed to. Therefore make sure you invoke or read it before{" "}
          a <code>render</code> in order to enable the state update. This
          reduced re-render feature only applies to the Web platform due to a
          lack of support for Proxy in React Native.
        </p>

        <TabGroup buttonLabels={["snippet", "example"]}>
          <CodeArea
            rawData={`useEffect(() => {
  if (formState.errors.firstName) {
    // do the your logic here
  }
}, [formState]); // ✅ 
// ❌ formState.errors will not trigger the useEffect        
`}
          />
          <CodeArea
            rawData={formStateUseEffect}
            tsRawData={formStateUseEffectTs}
          />
        </TabGroup>

        <CodeArea
          rawData={`// ❌ formState.isValid is accessed conditionally, 
// so the Proxy does not subscribe to changes of that state
return <button disabled={!formState.isDirty || !formState.isValid} />;
  
// ✅ read all formState values to subscribe to changes
const { isDirty, isValid } = formState;
return <button disabled={!isDirty || !isValid} />;
`}
        />
      </>
    ),
    isSubmitSuccessful: (
      <p>
        Indicate the form was successfully submitted without any{" "}
        <code>Promise</code> rejection or <code>Error</code> been threw within
        the <code>handleSubmit</code> callback.
      </p>
    ),
    isDirty: (
      <>
        <p>
          Set to <code>true</code> after the user modifies any of the inputs.
        </p>
        <ul>
          <li>
            Make sure to provide all inputs' defaultValues at the useForm, so
            hook form can have a single source of truth to compare whether the
            form is dirty.
          </li>
          <li>
            <p>
              File typed input will need to be managed at the app level due to
              the ability to cancel file selection and{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/API/FileList"
                target="_blank"
                rel="noopener noreferrer"
              >
                FileList
              </a>{" "}
              object.
            </p>
          </li>
          <li>
            <p>
              Native inputs will return <code>string</code> type by default.
            </p>
          </li>
          <li>
            <p>
              <code>isDirty</code> state will be affected with actions from{" "}
              <code>useFieldArray</code>. For example below:
            </p>
            <CodeArea
              rawData={`useForm({ defaultValues: { test: [] } })
const { append } = useFieldArray({ name: 'test' })

// append will make form dirty, because a new input is created
// and form values is no longer deeply equal defaultValues.
append({ firstName: '' }); 
`}
            />
          </li>
        </ul>
      </>
    ),
    isSubmitted: (
      <>
        Set to <code>true</code> after the form is submitted. Will remain{" "}
        <code>true</code> until the <code>reset</code> method is invoked.
      </>
    ),
    dirtyFields: (
      <>
        <p>
          An object with the user-modified fields. Make sure to provide all
          inputs' defaultValues via useForm, so the library can compare against
          the <code>defaultValues</code>.
        </p>
      </>
    ),
    touched:
      "An object containing all the inputs the user has interacted with.",
    isSubmitting: (
      <>
        <code>true</code> if the form is currently being submitted.{" "}
        <code>false</code> if otherwise.
      </>
    ),
    submitCount: "Number of times the form was submitted.",
    isValid: (
      <>
        Set to <code>true</code> if the form doesn't have any errors.
      </>
    ),
    isValidating: (
      <>
        Set to <code>true</code> during validation.
      </>
    ),
  },
  errors: {
    title: "errors",
    description: () => (
      <>
        <p>
          Object containing form errors and error messages corresponding to each
          field.
        </p>
      </>
    ),
    types: (
      <>
        <p style={{ marginTop: 0 }}>
          This is useful when you want to return all validation errors for a
          single input. For instance, a password field that is required to have
          a minimum length and contain a special character.
        </p>
        <p>
          <b className={typographyStyles.note}>Note:</b> You need to set{" "}
          <code>criteriaMode</code> to <code>'all'</code> for this option to
          work.
        </p>
      </>
    ),
    message: `If you registered your input with an error message, then it will be put in this field, otherwise it's an empty string by default.`,
    ref: `Reference for your input element.`,
    note: (
      <>
        <p>
          <b className={typographyStyles.note}>Important:</b> Avoid using error
          object key names to avoid data overwrite. <br />
          eg:{" "}
          <code>
            register('user'); register('user.type');{" "}
            <span role="img" aria-label="Big Red X">
              ❌
            </span>
            {" // error's type will get overwritten."}
          </code>
        </p>
        <p>
          <b className={typographyStyles.note}>Note:</b> You can use the{" "}
          <Link to={"/api/useformstate/errormessage"}>ErrorMessage</Link>{" "}
          component to help display your error states
        </p>
      </>
    ),
  },
  watch: {
    title: "watch",
    description: (
      <>
        <p>
          This will watch specified inputs and return their values. It is useful
          for determining what to render.
        </p>

        <h2 className={typographyStyles.subTitle}>Rules</h2>

        <ul>
          <li>
            <p>
              When <code>defaultValue</code> is not defined, the first render of{" "}
              <code>watch</code> will return <code>undefined</code> because it
              is called before <code>register</code>, but you can set the{" "}
              <code>defaultValue</code> as the second argument or provide{" "}
              <code>defaultValues</code> via <code>useForm</code> to avoid this
              behaviour.
            </p>
          </li>
          <li>
            <p>
              If <code>defaultValues</code> was initialised in{" "}
              <code>useForm</code> as an argument, then the first render will
              return what's provided in <code>defaultValues</code>.
            </p>
          </li>
          <li>
            <p>
              After the first render, default values will be shallowly merged
              with the current form values from the inputs.
            </p>
          </li>
          <li>
            <p>
              This API will trigger re-render at the root of your app or form,
              consider using a callback or the{" "}
              <Link to={"/api/usewatch"}>useWatch</Link> api if you are
              experiencing performance issues.
            </p>
          </li>
          <li>
            <p>
              <code>watch</code> result is optimised for render phase instead of{" "}
              <code>useEffect</code>'s deps, to detect value update you may want
              to use an external custom hook for value comparison.
            </p>
          </li>
        </ul>
      </>
    ),
    tableTitle: {
      single: (
        <>
          Watch input value by name (similar to lodash{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://lodash.com/docs/4.17.15#get"
          >
            get
          </a>{" "}
          function)
        </>
      ),
      multiple: "Watch multiple inputs",
      all: "Watch all inputs",
      callback: "Watch all inputs and invoke a callback",
    },
  },
  handleSubmit: {
    title: "handleSubmit",
    description: (
      <>
        <p>
          This function will receive the form data if form validation is
          successful.
        </p>

        <h2 className={typographyStyles.subTitle}>Rules</h2>
        <ul>
          <li>
            <p>You can easily submit form asynchronously with handleSubmit.</p>
            <CodeArea
              rawData={`// It can be invoked remotely as well
handleSubmit(onSubmit)();

// You can pass an async function for asynchronous validation.
handleSubmit(async (data) => await fetchAPI(data))`}
            />
          </li>
          <li>
            <p>
              <code>disabled</code> inputs will appear as <code>undefined</code>{" "}
              values in form values. If you want to prevent users from updating
              an input and wish to retain the form value, you can use{" "}
              <code>readOnly</code> or disable the entire {`<fieldset />`}. Here
              is an{" "}
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
              During the callback, if the function itself throws an error inside
              of <code>handleSubmit</code>, it will not swallow the error itself
              but bubble it up instead and <code>isSubmitSuccessful</code> will
              be remained as <code>false</code>.
            </p>

            <CodeArea
              rawData={`const onSubmit = () => {
  throw new Error('Something is wrong')
}

handleSubmit(onSubmit).catch((e) => {
  // you will need to catch that error
})`}
            />
          </li>
        </ul>

        <h2 className={typographyStyles.subTitle}>Props</h2>

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>SubmitHandler</td>
                <td>
                  <code
                    className={typographyStyles.typeText}
                  >{`(data: Object, e?: Event) => void`}</code>
                </td>
                <td>A successful callback.</td>
              </tr>
              <tr>
                <td>SubmitErrorHandler</td>
                <td>
                  <code
                    className={typographyStyles.typeText}
                  >{`(errors: Object, e?: Event) => void`}</code>
                </td>
                <td>An error callback.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  reset: {
    title: "reset",
    description: (
      <>
        <p>Reset either the entire form state or part of the form state.</p>

        <h2 className={typographyStyles.subTitle}>Rules</h2>

        <ul>
          <li>
            <p>
              For controlled components like <code>React-Select</code> which do
              not expose a <code>ref</code> prop, you will have to reset the
              input value manually with{" "}
              <Link to={"/api/useform/setvalue"}>setValue</Link> or connect your
              component via <Link to={"/api/usecontroller"}>useController</Link>{" "}
              or <Link to={"/api/usecontroller/controller"}>Controller</Link>.
            </p>
          </li>
          <li>
            <p>
              You will need to pass <code>defaultValues</code> to{" "}
              <code>useForm</code> in order to <code>reset</code> the{" "}
              <code>Controller</code> components' value.
            </p>
          </li>
          <li>
            <p>
              When you are subscribed to <code>formState</code>, it's important
              to decouple <code>reset</code> with <code>handleSubmit</code>.
              Both will update <code>formState</code> and{" "}
              <code>handleSubmit</code> is async by default. You can check out a
              working example below:
            </p>
          </li>
          <li>
            <p>
              When invoking <code>{`reset({ value })`}</code> without supplying{" "}
              <code>defaultValues</code> via <code>useForm</code>, the library
              will replace <code>defaultValues</code> with a shallow clone{" "}
              <code>value</code> object which you provide <b>(not deepClone)</b>
              .
            </p>
            <CodeArea
              rawData={`// ❌ avoid the following with deep nested default values
const defaultValues = { object: { deepNest: { file: new File() } } };
useForm({ defaultValues });
reset(defaultValues); // share the same reference

// ✅ it's safer with the following, as we only doing shallow clone with defaultValues
useForm({ deepNest: { file: new File() } });
reset({ deepNest: { file: new File() } });
`}
            />
          </li>
          <li>
            <p>
              It's recommended to not invoke <code>reset</code> inside{" "}
              <code>onReset</code> or <code>onSubmit</code> callback.
            </p>
            <ul>
              <li>
                <p>
                  We can't set value for native input during{" "}
                  <code>onReset</code> event.
                </p>
              </li>
              <li>
                <p>
                  Because onSubmit callback is async and includes its validation
                  when <code>reset</code> inside the callback it will intercept
                  the result of formState update. This will be problematic when
                  you subscribed to the formState.
                </p>
              </li>
            </ul>
          </li>
        </ul>

        <h2 className={typographyStyles.subTitle}>Props</h2>

        <p>
          <code>Reset</code> has the ability to retain formState. Here are the
          options you may use:{" "}
        </p>

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <thead>
              <tr>
                <th>{generic.name.en}</th>
                <th>{generic.type.en}</th>
                <th>{generic.description.en}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>values</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>object</code>
                </td>
                <td>
                  <p>An optional object to reset form values.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>keepErrors</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  <p>
                    All errors will remain. This will not guarantee with further
                    user actions.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>keepDirty</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  <p>
                    <code>DirtyFields</code> form state will remain, and{" "}
                    <code>isDirty</code> will be temporarily remain as the
                    current state until further user's action.
                  </p>

                  <p>
                    <b className={typographyStyles.note}>Important: </b>this
                    keep option doesn't reflect form input values but only dirty
                    fields form state.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>keepValues</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  <p>Form input values will be unchanged.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>keepDefaultValues</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  <p>
                    Keep the same defaultValues which are initialised via{" "}
                    <code>useForm</code>.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>keepIsSubmitted</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  <p>
                    <code>isSubmitted</code> state will be unchanged.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>keepTouched</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  <p>
                    <code>isSubmitted</code> state will be unchanged.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>keepIsValid</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  <p>
                    <code>isValid</code> will temporarily persist as the current
                    state until additional user actions.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>keepSubmitCount</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  <p>
                    <code>submitCount</code> state will be unchanged.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  setError: {
    title: "setError",
    description: (
      <>
        <p>The function allows you to manually set one or more errors.</p>

        <h2 className={typographyStyles.subTitle}>Rules</h2>

        <ul>
          <li>
            <p>
              This method will not persist the associated input error if the
              input passes validation.
            </p>
          </li>
          <li>
            <p>
              An error that is not associated with an input field will be
              persisted until cleared with <code>clearErrors</code>.
            </p>
          </li>
          <li>
            <p>
              Can be useful in the <code>handleSubmit</code> method when you
              want to give error feedback to a user after async validation. (ex:
              API returns validation errors)
            </p>
          </li>
          <li>
            <p>
              <code>shouldFocus</code> doesn't work when an input has been
              disabled.
            </p>
          </li>
        </ul>

        <h2 className={typographyStyles.subTitle}>Props</h2>

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <tbody>
              <tr>
                <th>Name</th>
                <th width={"200px"}>Type</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>
                  <code>name</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>string</code>
                </td>
                <td>
                  <p>input's name.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>error</code>
                </td>
                <td>
                  <code
                    className={typographyStyles.typeText}
                  >{`{ type: string, message?: string }`}</code>
                </td>
                <td>
                  <p>Set an error with its type and message.</p>
                </td>
              </tr>
              <tr>
                <td>config</td>
                <td>
                  <code
                    className={typographyStyles.typeText}
                  >{`{ shouldFocus?: boolean }`}</code>
                </td>
                <td>
                  <p>
                    Should focus the input during setting an error. This only
                    works when the input's reference is registered, it will not
                    work for custom register as well.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  clearError: {
    title: "clearErrors",
    description: (
      <>
        <p>This function can manually clear errors in the form.</p>

        <h2 className={typographyStyles.subTitle}>Rules</h2>

        <ul>
          <li>
            <p>
              This will not affect the validation rules attached to each inputs.
            </p>
          </li>
          <li>
            <p>
              This function will not update formState (set <code>isValid</code>{" "}
              to true). It only clear errors.
            </p>
          </li>
        </ul>

        <h2 className={typographyStyles.subTitle}>Props</h2>

        <table className={tableStyles.table}>
          <tbody>
            <tr>
              <th>Type</th>
              <th>Description</th>
              <th>Example</th>
            </tr>
            <tr>
              <td>
                <code className={typographyStyles.typeText}>undefined</code>
              </td>
              <td>Remove all errors.</td>
              <td>
                <code>clearErrors()</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className={typographyStyles.typeText}>string</code>
              </td>
              <td>Remove single error.</td>
              <td>
                <code>clearErrors("yourDetails.firstName")</code>
              </td>
            </tr>
            <tr>
              <td>
                <code className={typographyStyles.typeText}>string[]</code>
              </td>
              <td>Remove multiple errors.</td>
              <td>
                <code>clearErrors(["yourDetails.lastName"])</code>
              </td>
            </tr>
          </tbody>
        </table>

        <ul>
          <li>
            <p>
              <code>undefined</code>: reset all errors
            </p>
          </li>
          <li>
            <p>
              <code>string</code>: reset the error on a single field or by key
              name.
            </p>

            <CodeArea
              rawData={`register('test.firstName', { required: true });
register('test.lastName', { required: true });
clearErrors('test'); // will clear both errors from test.firstName and test.lastName
clearErrors('test.firstName'); // for clear single input error
`}
              withOutCopy
            />
          </li>
          <li>
            <p>
              <code>string[]</code>: reset errors on the given fields
            </p>
          </li>
        </ul>
      </>
    ),
  },
  setValue: {
    title: "setValue",
    description: (
      <>
        <p>
          This function allows you to dynamically set the value of a{" "}
          <strong>
            <code>registered</code>
          </strong>{" "}
          field. At the same time, it tries to avoid unnecessary re-rerenders.
        </p>

        <h2 className={typographyStyles.subTitle}>Rules</h2>
        <ul>
          <li>
            <p>Only the following conditions will trigger a re-render:</p>
            <ul>
              <li>
                <p>When an error is triggered by a value update</p>
              </li>
              <li>
                <p>When an error is corrected by a value update</p>
              </li>
              <li>
                <p>
                  When setValue is invoked for the first time and{" "}
                  <code>formState.isDirty</code> is set to true
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              You can also set the <code>shouldValidate</code> parameter to{" "}
              <code>true</code> in order to trigger a field validation.
            </p>

            <CodeArea
              rawData={`setValue('name', 'value', { shouldValidate: true })`}
              withOutCopy
            />
          </li>
          <li>
            <p>
              You can also set the <code>shouldDirty</code> parameter to{" "}
              <code>true</code> in order to set field to dirty.
            </p>

            <CodeArea
              rawData={`setValue('name', 'value', { shouldDirty: true })`}
              withOutCopy
            />
          </li>
          <li>
            <p>
              It's recommended to target the field's name rather than make the
              second argument a nested object.
            </p>

            <CodeArea
              rawData={`setValue('yourDetails.firstName', 'value'); // ✅ performant
setValue('yourDetails', { firstName: 'value' }); // less performant `}
              withOutCopy
            />
          </li>
          <li>
            <p>
              It's recommended to register the input's name before invoking{" "}
              <code>setValue</code>. However, the following usages are still
              permitted.
            </p>
            <p>
              To update the entire Field Array, make sure the{" "}
              <code>useFieldArray</code> hook is being executed.
            </p>
            <CodeArea
              rawData={`// you can update an entire Field Array, 
// this will trigger an entire field array to be remount and refreshed with updated values.
setValue('fieldArray', [{ test: '1' }, { test: '2' }]); // ✅

// you can setValue to a unregistered input
setValue('notRegisteredInput', 'value'); // ✅ prefer to be registered

// the following will register a single input (without register) 
// and update its value in case you expected to be two inputs
setValue('notRegisteredInput', { test: '1', test2: '2' }); // 🤔

// with registered inputs, the setValue will update both inputs correctly.
register('notRegisteredInput.test', '1')
register('notRegisteredInput.test2', '2')
setValue('notRegisteredInput', { test: '1', test2: '2' }); // ✅
`}
              withOutCopy
            />
          </li>
        </ul>

        <h2 className={typographyStyles.subTitle}>Props</h2>

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <tbody>
              <tr>
                <th>Name</th>
                <th></th>
                <th>Type</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>
                  <code>name</code>
                </td>
                <td></td>
                <td>
                  <code className={typographyStyles.typeText}>string</code>
                </td>
                <td>
                  <ul>
                    <li>
                      <p>Target a single input by its name.</p>
                    </li>
                    <li>
                      <p>
                        Target a field array name. Note it will update both the{" "}
                        <code>fields</code> object and the entire field array's
                        internal state.
                      </p>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>
                  <code>value</code>
                </td>
                <td></td>
                <td>
                  <code className={typographyStyles.typeText}>unknown</code>
                </td>
                <td>
                  <p>
                    The value for the field. Make sure you supply the entire
                    array when you update <code>useFieldArray</code>.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>config</code>
                </td>
                <td>
                  <code>shouldValidate</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  Whether or not trigger validation while setting the input's
                  value.
                </td>
              </tr>
              <tr>
                <td>
                  <code></code>
                </td>
                <td>
                  <code>shouldDirty</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>Whether to set the input itself to dirty.</td>
              </tr>
              <tr>
                <td>
                  <code></code>
                </td>
                <td>
                  <code>shouldTouch</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>Whether to set the input itself to be touched.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  getValues: {
    title: "getValues",
    description: (
      <>
        <p>
          An optimized helper for reading form values. The difference between{" "}
          <code>watch</code> and <code>getValues</code> is that{" "}
          <code>getValues</code> <strong>will not</strong> trigger re-renders or
          subscribe to input changes.
        </p>
        <div className={tableStyles.tableWrapper}>
          <CodeArea
            rawData={`<input {...register('yourDetails.firstName')} />
<input {...register('yourDetails.lastName')} />
`}
          />

          <p>
            The example below shows what to expect when you invoke{" "}
            <code>getValues</code> method.
          </p>

          <table className={tableStyles.table}>
            <tbody>
              <tr>
                <th>Input Name</th>
                <th>Example</th>
              </tr>
              <tr>
                <td>
                  <code>getValues("yourDetails")</code>
                </td>
                <td>
                  <code>{`{ firstName: '', lastName: '' }`}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>getValues("yourDetails.firstName")</code>
                </td>
                <td>
                  <code>{`{ firstName: '' }`}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>getValues(["yourDetails.lastName"])</code>
                </td>
                <td>
                  <code>{`['']`}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className={typographyStyles.subTitle}>Rules</h2>

        <ul>
          <li>
            <p>
              Do not use this method inside a render method. It is intended for
              reading values in an event handler or callback function.
            </p>
          </li>
          <li>
            <p>
              Disabled inputs will be returned as <code>undefined</code>. If you
              want to prevent users from updating the input and still retain the
              field value, you can use <code>readOnly</code> or disable the
              entire {`<fieldset />`}. Here is an{" "}
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
              It will return <code>defaultValues</code> from{" "}
              <code>useForm</code> before the <b>initial</b> render.
            </p>
          </li>
          <li>
            <p>
              After the initial render, form values will be shallowly merged
              with <code>defaultValues</code>.
            </p>
          </li>
          <li>
            <p>
              <code>getValues()</code>: Reads all form values.
            </p>
          </li>
          <li>
            <p>
              <code>getValues('test')</code>: Read an individual field value by{" "}
              <strong>name</strong>.
            </p>
          </li>
          <li>
            <p>
              <code>getValues(['test', 'test1'])</code>: Read multiple fields by{" "}
              <strong>name</strong>.
            </p>
          </li>
        </ul>
      </>
    ),
  },
  trigger: {
    title: "trigger",
    description: (
      <>
        <p>
          Manually triggers form or input validation. This method is also useful
          when you have dependant validation (input validation depends on
          another input's value).
        </p>
        <h2 className={typographyStyles.subTitle}>Props</h2>

        <table className={tableStyles.table}>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Example</th>
            </tr>
            <tr>
              <td>name</td>
              <td>
                <code className={typographyStyles.typeText}>undefined</code>
              </td>
              <td>Triggers validation on all fields.</td>
              <td>
                <code>trigger()</code>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <code className={typographyStyles.typeText}>string</code>
              </td>
              <td>
                Triggers validation on a specific field value by{" "}
                <strong>name</strong>
              </td>
              <td>
                <code>trigger("yourDetails.firstName")</code>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <code className={typographyStyles.typeText}>string[]</code>
              </td>
              <td>
                Triggers validation on multiple fields by <strong>name</strong>.
              </td>
              <td>
                <code>trigger(["yourDetails.lastName"])</code>
              </td>
            </tr>
            <tr>
              <td>shouldFocus</td>
              <td>
                <code className={typographyStyles.typeText}>boolean</code>
              </td>
              <td>
                <p>
                  Should focus the input during setting an error. This only
                  works when the input's reference is registered, it will not
                  work for custom register as well.
                </p>
              </td>
              <td>
                <code>{`trigger('name', { shouldFocus: true })`}</code>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  useFieldArray: {
    title: "useFieldArray",
    description: (
      <>
        <p>
          Custom hook for working with uncontrolled Field Arrays (dynamic
          inputs). The motivation is to provide better user experience and form
          performance. You can watch{" "}
          <a
            href="https://www.youtube.com/watch?v=Q7lrHuUfgIs"
            target="_blank"
            rel="noopener noreferrer"
          >
            this short video
          </a>{" "}
          to compare controlled vs uncontrolled Field Array.
        </p>

        <h2 className={typographyStyles.subTitle}>Props</h2>

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <thead>
              <tr>
                <th>{generic.name.en}</th>
                <th width="140px">{generic.type.en}</th>
                <th width="90px">{generic.required.en}</th>
                <th>{generic.description.en}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>name</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>string</code>
                </td>
                <td>✓</td>
                <td>
                  <p>
                    Name of the field.{" "}
                    <b className={typographyStyles.note}>Important: </b> make
                    sure name is in object shape:{" "}
                    <code>name={`test.0.name`}</code> as we don't support flat
                    arrays.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>control</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>Object</code>
                </td>
                <td></td>
                <td>{generic.control.en}</td>
              </tr>
              <tr>
                <td>
                  <code>keyName</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>
                    string = 'id'
                  </code>
                </td>
                <td></td>
                <td>
                  field array <code>key</code> value, default to "id", you can
                  change the key name.
                </td>
              </tr>
              <tr>
                <td>
                  <code>shouldUnregister</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>
                    boolean = false
                  </code>
                </td>
                <td></td>
                <td>
                  <p>Field Array will be unregistered after unmount.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeArea rawData={useFieldArrayArgument} />

        <h2 className={typographyStyles.subTitle}>Rules</h2>

        <ul>
          <li>
            <p>
              The <code>field.id</code> (and not <code>index</code>) must be
              added as the component key to prevent re-renders breaking the
              fields:
              <CodeArea
                withOutCopy
                rawData={`// ✅ correct:
{fields.map((field, index) => (
  <div key={field.id}>
    <input ... />
  </div>
))}
// ✅ correct:
{fields.map((field, index) => <input key={field.id} ... />)}
// ❌ incorrect:
{fields.map((field, index) => <input key={index} ... />)}
`}
              />
            </p>
          </li>
          <li>
            <p>
              <code>defaultValue</code> <strong>must</strong> be set for all
              inputs. Supplied <code>defaultValues</code> in the{" "}
              <code>useForm</code> hook will prepare the <code>fields</code>{" "}
              object with default value.
            </p>
          </li>
          <li>
            <p>
              You can not call actions one after another. Actions need to be
              triggered per render.
            </p>
            <CodeArea
              withOutCopy
              rawData={`// ❌ The following is not correct
handleChange={() => {
  if (fields.length === 2) {
    remove(0);
  }
  append({ test: 'test' });
}}

// ✅ The following is correct and second action is triggered after next render
handleChange={() => {
  append({ test: 'test' });
}}

React.useEffect(() => {
  if (fields.length === 2) {
    remove(0);
  }
}, [fields])
            `}
            />
          </li>
          <li>
            <p>
              Each <code>useFieldArray</code> is unique and has its own state
              update, which means you should not have multiple useFieldArray
              with the same <code>name</code>.
            </p>
          </li>
          <li>
            <p>
              Each input name needs to be unique, if you need to build checkbox
              or radio with the same name then use it with{" "}
              <code>useController</code> or <code>controller</code>.
            </p>
          </li>
          <li>
            <p>Does not support flat field array.</p>
          </li>
          <li>
            <p>
              When you append, prepend, insert and update the field array, the
              obj can't be empty object <code>{}</code> rather need to supply
              all your input's defaultValues.
            </p>
            <CodeArea
              withOutCopy
              rawData={`append(); ❌
append({}); ❌
append({ firstName: 'bill', lastName: 'luo' }); ✅`}
            />
          </li>
        </ul>

        <h2 className={typographyStyles.subTitle}>TypeScript</h2>

        <ul>
          <li>
            <p>
              when register input <code>name</code>, you will have to cast them
              as <code>const</code>
            </p>
            <CodeArea
              withOutCopy
              rawData={`<input key={field.id} {...register(\`test.\${index}.test\` as const)} defaultValue={field.test} />`}
            />
          </li>
          <li>
            <p>
              we do not support circular reference. Refer to this this{" "}
              <a
                href={
                  "https://github.com/react-hook-form/react-hook-form/issues/4055"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Github issue
              </a>{" "}
              for more detail.
            </p>
          </li>
          <li>
            <p>
              for nested field array, you will have to cast the field array by
              its name.
            </p>
            <CodeArea
              withOutCopy
              rawData={`const { fields } = useFieldArray({ name: \`test.\${index}.keyValue\` as 'test.0.keyValue' });`}
            />
          </li>
        </ul>
      </>
    ),
    table: (
      <>
        <tr>
          <td>
            <code>fields</code>
          </td>
          <td width={320}>
            <code className={typographyStyles.typeText}>
              object & {`{ id: string }`}
            </code>
          </td>
          <td>
            This <code>object</code> contains the <code>defaultValue</code> and{" "}
            <code>key</code> for all your inputs. It's important to assign{" "}
            <code>defaultValue</code> to the inputs.
            <p>
              <b className={typographyStyles.note}>Important: </b> Because each
              input can be uncontrolled, <code>id</code> is required with mapped
              components to help React to identify which items have changed, are
              added, or are removed.
            </p>
            <CodeArea
              rawData={`{fields.map((data, index) =>
  <input
    key={data.id}
    defaultValue={data.value}
    name={\`data.\${index}.value\`}
  />;
);}`}
              withOutCopy
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>append</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (obj: object | object[],{" "}
                {`{ shouldFocus?: boolean; focusIndex?: number; focusName?: string; }`}
                ) =&gt; void
              </code>
            </code>
          </td>
          <td>
            <p>
              Append input/inputs to the end of your fields and focus. The input
              value will be registered during this action.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>prepend</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (obj: object | object[],{" "}
              {`{ shouldFocus?: boolean; focusIndex?: number; focusName?: string; }`}
              ) =&gt; void
            </code>
          </td>
          <td>
            <p>
              Prepend input/inputs to the start of your fields and focus. The
              input value will be registered during this action.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>insert</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              {`(index: number, value: object | object[], { shouldFocus?: boolean; focusIndex?: number; focusName?: string; }) => void`}
            </code>
          </td>
          <td>
            <p>Insert input/inputs at particular position and focus. </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>swap</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (from: number, to: number) =&gt; void
              </code>
            </code>
          </td>
          <td>Swap input/inputs position.</td>
        </tr>
        <tr>
          <td>
            <code>move</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (from: number, to: number) =&gt; void
              </code>
            </code>
          </td>
          <td>Move input/inputs to another position.</td>
        </tr>
        <tr>
          <td>
            <code>update</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (index?: number, obj: object) =&gt; void
              </code>
            </code>
          </td>
          <td>Update input/inputs at particular position.</td>
        </tr>
        <tr>
          <td>
            <code>replace</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (obj: object[]) =&gt; void
              </code>
            </code>
          </td>
          <td>Replace the entire field array values.</td>
        </tr>
        <tr>
          <td>
            <code>remove</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (index?: number | number[]) =&gt; void
              </code>
            </code>
          </td>
          <td>
            Remove input/inputs at particular position, or remove all when no
            index provided.
          </td>
        </tr>
      </>
    ),
  },
  Controller: {
    title: "Controller",
    tips: (
      <>
        <h2 className={typographyStyles.subTitle}>Tips</h2>

        <ul>
          <li>
            <p>
              Do not <code>register</code> input again. This component is made
              to take care the registration process.
            </p>
            <CodeArea
              rawData={`<Controller 
  name="test"
  render={({ field }) => {
    // return <input {...field} {...register('test')} />; ❌ double up the registration  
    return <input {...field} />; // ✅  
  }} 
/>        
`}
            />
          </li>
          <li>
            <p>
              Customise what value gets send to hook form by transform the value
              during <codee>onChange</codee>.
            </p>
            <CodeArea
              rawData={`<Controller 
  name="test"
  render={({ field }) => {
    // sending integer instead of string.
    return <input {...field} onChange={(e) => field.onChange(parseInt(e.target.value))} />;  
  }} 
/>    
`}
            />
          </li>
        </ul>
      </>
    ),
    table: (
      <tbody>
        <tr>
          <td>
            <code>name</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>string</code>
          </td>
          <td>✓</td>
          <td>Unique name of your input.</td>
        </tr>
        <tr>
          <td>
            <code>control</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Object</code>
          </td>
          <td></td>
          <td>
            <code>control</code> object is from invoking <code>useForm</code>.
            Optional when using <code>FormProvider</code>.
          </td>
        </tr>
        <tr>
          <td>
            <code>render</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Function</code>
          </td>
          <td></td>
          <td>
            <p>
              This is a{" "}
              <a
                href="https://reactjs.org/docs/render-props.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                render prop
              </a>
              . A function that returns a React element and provides the ability
              to attach events and value into the component. This simplifies
              integrating with external controlled components with non-standard
              prop names. Provides <code>onChange</code>, <code>onBlur</code>,{" "}
              <code>name</code>, <code>ref</code> and <code>value</code> to the
              child component, and also a <code>fieldState</code> object which
              contains specific input state.
            </p>
            <TabGroup buttonLabels={["Standard", "With Focus"]}>
              <CodeArea
                withOutCopy
                url="https://codesandbox.io/s/react-hook-form-v7-controller-5h1q5"
                rawData={`<Controller
  control={control}
  name="test"
  render={({
    field: { onChange, onBlur, value, name, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState,
  }) => (
    <Checkbox
      onBlur={onBlur}
      onChange={onChange}
      checked={value}
      inputRef={ref}
    />
  )}
/>`}
              />
              <CodeArea
                withOutCopy
                url="https://codesandbox.io/s/react-hook-form-focus-okzu8"
                rawData={`<Controller
  render={({
    field: { onChange, onBlur, value, name, ref },
    fieldState: { invalid, isTouched, isDirty, error },
  }) => (
    <TextField
      value={value}
      onChange={onChange}
      inputRef={ref} // wire up the input ref
    />
  )}
  name="TextField"
  control={control}
  rules={{ required: true }}
/>`}
              />
            </TabGroup>
          </td>
        </tr>
        <tr>
          <td>
            <code>defaultValue</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>any</code>
          </td>
          <td></td>
          <td>
            The same as an uncontrolled component's <code>defaultValue</code>.
            When passing a <code>boolean</code> value, it will be treated as
            checkbox input. For more details, see useForm's{" "}
            <code>defaultValues</code> section.
            <ul>
              <li>
                <p>
                  You need to either provide <code>defaultValue</code> at the
                  field-level or <code>useForm</code> with{" "}
                  <code>defaultValues</code>.
                </p>
                <p>
                  <b className={typographyStyles.note}>Note:</b> inline{" "}
                  <code>defaultValue</code> is required when working with{" "}
                  <code>useFieldArray</code> by integrating with the value from{" "}
                  <code>fields</code> object.
                </p>
              </li>
              <li>
                <p>
                  If your form will invoke <code>reset</code> with default
                  values, you will need to call <code>useForm</code> with{" "}
                  <code>defaultValues</code> instead of setting the{" "}
                  <code>defaultValue</code> on individual fields.
                </p>
              </li>
              <li>
                Setting <code>defaultValue</code> inline or at{" "}
                <code>useForm</code> can not be <code>undefined</code>.
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <code>rules</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Object</code>
          </td>
          <td></td>
          <td>
            <>
              Validation rules in the same format as for <code>register</code>.
            </>
            <p>
              <b className={typographyStyles.note}>Important:</b> doesn't
              support <code>setValueAs</code> or <code>valueAs*</code> for{" "}
              <code>useController</code>.
            </p>
            <CodeArea
              url="https://codesandbox.io/s/controller-rules-ipynf"
              withOutCopy
              rawData="rules={{ required: true }}"
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>shouldUnregister</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>boolean = false</code>
          </td>
          <td></td>
          <td>
            <p>
              Input will be unregistered after unmount and defaultValues will be
              removed as well.
            </p>
          </td>
        </tr>
      </tbody>
    ),
    description: (
      <>
        <p>
          React Hook Form embraces uncontrolled components and native inputs,
          however it's hard to avoid working with external controlled component
          such as{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/JedWatson/react-select"
          >
            React-Select
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ant-design/ant-design"
          >
            AntD
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/"
          >
            Material-UI
          </a>
          . This wrapper component will make it easier for you to work with
          them.
        </p>
      </>
    ),
  },
  useFormContext: {
    title: "useFormContext",
    introduction: (
      <>
        <p>
          This custom hook allows you to access the form context.{" "}
          <code>useFormContext</code> is intended to be used in deeply nested
          structures, where it would become inconvenient to pass the context as
          a prop.
        </p>
        <p>
          You need to wrap your form with the <code>FormProvider</code>{" "}
          component for <code>useFormContext</code> to work properly.
        </p>
      </>
    ),
    description: "",
  },
  control: {
    title: "control",
    description: (
      <>
        <p>
          This object contains methods for registering components into React
          Hook Form.
        </p>

        <h2 className={typographyStyles.subTitle}>Rules</h2>

        <p>
          <b className={typographyStyles.note}>Important:</b> do not access any
          of the properties inside this object directly. It's for internal usage
          only.
        </p>
      </>
    ),
  },
  ErrorMessage: {
    title: "ErrorMessage",
    description: (
      <p>A simple component to render associated input's error message.</p>
    ),
    table: {
      name: <>Name of the field.</>,
      errors: (
        <>
          <code>errors</code> object from React Hook Form. Optional if you are
          using <code>FormProvider</code>.
        </>
      ),
      message: <>Inline error message.</>,
      as: (
        <>
          Wrapper component or HTML tag. For example: <code>as="span"</code> or{" "}
          <code>{`as={<Text />}`}</code>
        </>
      ),
      render: (
        <>
          This is a{" "}
          <a
            href="https://reactjs.org/docs/render-props.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            render prop
          </a>{" "}
          for rendering error message or messages.
          <p>
            <b className={typographyStyles.note}>Note:</b> you need to set{" "}
            <code>criteriaMode</code> to 'all' for using <code>messages</code>.
          </p>
        </>
      ),
    },
  },
  resolver: {
    title: "resolver",
    description: (
      <>
        <p>
          This function allows you to use any external validation library such
          as{" "}
          <a
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </a>
          ,{" "}
          <a
            href="https://github.com/vriad/zod"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zod
          </a>
          ,{" "}
          <a
            href="https://github.com/hapijs/joi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joi
          </a>
          ,{" "}
          <a
            href="https://github.com/ianstormtaylor/superstruct"
            target="_blank"
            rel="noopener noreferrer"
          >
            Superstruct
          </a>
          ,{" "}
          <a
            href="https://github.com/ealush/vest"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vest
          </a>{" "}
          and many others. The goal is to make sure you can seamlessly integrate
          whichever validation library you prefer. If you're not using a
          library, you can always write your own logic to validate your forms.
        </p>

        <code
          style={{
            fontSize: 16,
            padding: 15,
            background: "#191d3a",
            borderRadius: 4,
            display: "block",
          }}
        >
          npm install @hookform/resolvers
        </code>

        <h2 className={typographyStyles.subTitle}>Rules</h2>

        <ul>
          <li>
            <p>
              Make sure you are returning an object that has both a{" "}
              <code>values</code> and an <code>errors</code> property. Their
              default values should be an empty object. For example:{" "}
              <code>{`{}`}</code>.
            </p>
          </li>

          <li>
            <p>
              The keys of the <code>error</code> object should match the{" "}
              <code>name</code> values of your fields.
            </p>
          </li>

          <li>
            <p>
              This function will be cached, while <code>context</code> is a
              mutable <code>object</code> that can be changed on each re-render.
            </p>
          </li>

          <li>
            <p>
              Re-validation of an input will only occur one field at time during
              a user’s interaction. The lib itself will evaluate the{" "}
              <code>error</code> object to trigger a re-render accordingly.
            </p>
          </li>

          <li>
            <p>
              A resolver cannot be used with the built-in validators (e.g.:{" "}
              required, min, etc.)
            </p>
          </li>
        </ul>
      </>
    ),
  },
  useWatch: {
    title: "useWatch",
    description: (
      <p>
        Behaves similarly to the <code>watch</code> API, however, this will
        isolate re-rendering at the component level and potentially result in
        better performance for your application.
      </p>
    ),
  },
  useController: {
    title: "useController",
    table: (
      <tbody>
        <tr>
          <td>
            <code>name</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>string</code>
          </td>
          <td>✓</td>
          <td>Unique name of your input.</td>
        </tr>
        <tr>
          <td>
            <code>control</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Object</code>
          </td>
          <td></td>
          <td>
            <code>control</code> object provided by invoking{" "}
            <code>useForm</code>. Optional when using <code>FormProvider</code>.
          </td>
        </tr>
        <tr>
          <td>
            <code>defaultValue</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>any</code>
          </td>
          <td></td>
          <td>
            The same as an uncontrolled component's <code>defaultValue</code>.
            When passing a <code>boolean</code> value, it will be treated as
            checkbox input. For more details, see useForm's{" "}
            <code>defaultValues</code> section.
            <ul>
              <li>
                <p>
                  You need to either set <code>defaultValue</code> at the
                  field-level or call <code>useForm</code> with{" "}
                  <code>defaultValues</code>. If both are set,
                  <code>devaultValues</code> will be used.
                </p>
                <p>
                  <b className={typographyStyles.note}>Note:</b> inline{" "}
                  <code>defaultValue</code> is required when working with{" "}
                  <code>useFieldArray</code> by integrating with the value from{" "}
                  <code>fields</code> object.
                </p>
              </li>
              <li>
                <p>
                  If your form will invoke <code>reset</code> with default
                  values, you will need to call <code>useForm</code> with{" "}
                  <code>defaultValues</code> instead of setting the{" "}
                  <code>defaultValue</code> on individual fields.
                </p>
              </li>
              <li>
                Setting <code>defaultValue</code> inline or at{" "}
                <code>useForm</code> can not be <code>undefined</code>.
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <code>rules</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Object</code>
          </td>
          <td></td>
          <td>
            <p>
              Validation rules in the same format as for <code>register</code>.
            </p>
            <p>
              <b className={typographyStyles.note}>Important:</b> doesn't
              support
              <code>valueAs</code> for <code>useController</code>.
            </p>
            <CodeArea
              url="https://codesandbox.io/s/controller-rules-8pd7z?file=/src/App.tsx"
              withOutCopy
              rawData="rules={{ required: true }}"
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>shouldUnregister</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>boolean = false</code>
          </td>
          <td></td>
          <td>
            <p>
              Input will be unregistered after unmount and defaultValues will be
              removed as well.
            </p>
          </td>
        </tr>
      </tbody>
    ),
    tips: (
      <>
        <h2 className={typographyStyles.subTitle}>Tips</h2>

        <ul>
          <li>
            <p>
              Do not <code>register</code> input again. This custom hook is
              designed to take care of the registration process.
            </p>
            <CodeArea
              rawData={`const { field } = useController({ name: 'test' })

<input {...field} /> // ✅ 
<input {...field} {...register('test')} /> // ❌ double up the registration        
`}
            />
          </li>
          <li>
            <p>
              It's ideal to use a single <code>useController</code> per
              component. If you need to use more than one, make sure you rename
              the prop. May want to consider using <code>Controller</code>{" "}
              instead.
            </p>
            <CodeArea
              rawData={`const { field: input } = useController({ name: 'test' })
const { field: checkbox } = useController({ name: 'test1' })

<input {...input} />
<input {...checkbox} />        
`}
            />
          </li>
        </ul>
      </>
    ),
    description: (
      <>
        <p>
          This custom hook powers{" "}
          <Link to={"/api/usecontroller/controller"}>
            <code>Controller</code>
          </Link>
          . Additionally, it shares the same props and methods as{" "}
          <code>Controller</code>. It's useful for creating reusable Controlled
          input.
        </p>
      </>
    ),
  },
  setFocus: {
    description: (
      <>
        <p>
          This method will allow users to programmatically focus on input. Make
          sure input's ref is registered into the hook form.
        </p>

        <h2 className={typographyStyles.subTitle}>Rules</h2>

        <p>
          This API will invoke focus method from the ref, so it's important to
          provide <code>ref</code> during <code>register</code>.
        </p>
      </>
    ),
  },
}
