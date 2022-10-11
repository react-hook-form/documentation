import * as React from "react"
import CodeArea from "../../components/CodeArea"
import useFieldArrayArgument from "../../components/codeExamples/useFieldArrayArgument"
import generic from "../generic"
import { Link } from "gatsby"
import * as typographyStyles from "../../styles/typography.module.css"
import * as buttonStyles from "../../styles/button.module.css"
import * as tableStyles from "../../styles/table.module.css"
import TabGroup from "../../components/TabGroup"

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
        <code>useForm</code> is a custom hook for managing forms with ease. It
        takes one object as <b>optional</b> argument. The following example
        demonstrates all of its properties along with their default values.
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
          <Link to="/api/usecontroller/controller">Controller</Link> component
          via its <code>defaultValue</code> property. If both{" "}
          <code>defaultValue</code> and <code>defaultValues</code> are set, the
          value from <code>defaultValues</code> will be used.
        </p>

        <h3 className={typographyStyles.rulesTitle}>Rules</h3>

        <ul>
          <li>
            <p>
              <b className={typographyStyles.note}>Important:</b> You should
              provide a proper default value and avoid <code>undefined</code>.
            </p>
            <ul>
              <li>
                <p>
                  undefined is reserved for fallback from inline{" "}
                  <code>defaultValue</code>/<code>defaultChecked</code> to hook
                  level <code>defaultValues</code>.
                </p>
              </li>
              <li>
                <p>
                  <code>undefined</code> value is conflicting with controlled
                  component as default state
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              {" "}
              <code>defaultValues</code> are cached{" "}
              <strong>on the first render</strong> within the custom hook. If
              you want to reset the <code>defaultValues</code>, you should use
              the <Link to="/api/useform/reset">reset</Link> api.
            </p>
          </li>
          <li>
            <p>
              <code>defaultValues</code> will be injected into{" "}
              <Link to="/api/useform/watch">watch</Link>,{" "}
              <Link to="/api/usewatch">useWatch</Link>,{" "}
              <Link to="/api/usecontroller/controller">Controller</Link> and{" "}
              <Link to="/api/usecontroller">useController</Link>'s{" "}
              <code>defaultValue</code>.
            </p>
          </li>
          <li>
            <p>
              <code>defaultValues</code> will be included in the submission
              result by default, if this is not the desired behavior use{" "}
              <code>shouldUnregister: true</code> instead which means input
              values will host within all the fields.
            </p>
          </li>
          <li>
            <p>
              It's recommend to avoid including custom object which contains
              prototype methods as the <code>defaultValues</code>, such as{" "}
              <code>moment</code>, <code>luxon</code> and etc. Those type of an
              object will not be cloned internally.
            </p>
          </li>
          <li>
            <p>There are other options to include form data:</p>
            <CodeArea
              rawData={`// include hidden input
<input {...register("hidden")} type="hidden" />

// register input with value
register("hidden", { value: "data" })

// include data onSubmit
const onSubmit = (data) => {
  const output = {
    ...data,
    others: "others"
  }
}
`}
            />
          </li>
        </ul>
      </>
    ),
    reValidateMode: (
      <p>
        This option allows you to configure validation strategy when inputs with
        errors get re-validated <strong>after</strong> a user submits the form (
        <code>onSubmit</code> event). By default, validation is triggered during
        the input change event.
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
            <p>
              By default <code>shouldUnregister: false</code>: unmounted fields
              will <strong>not</strong> be validated by build-in validation.
            </p>
          </li>
          <li>
            <p>
              By setting <code>shouldUnregister</code> to true at{" "}
              <code>useForm</code> level, <code>defaultValues</code> will{" "}
              <b>not</b> be merged against submission result.
            </p>
          </li>
          <li>
            <p>
              set <code>shouldUnregister: true</code> will set your form behave
              more closer as native.
            </p>
            <p>Form values will be lived inside your inputs itself.</p>
            <ul>
              <li>
                <p>input unmount will remove value.</p>
              </li>
              <li>
                <p>input hidden should be applied for hidden data.</p>
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

          <table className={tableStyles.table}>
            <tbody>
              <tr>
                <th>Type</th>
                <th>Input Name</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>
                  <code className={typographyStyles.typeText}>string</code>
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
                  <code>{`''`}</code>
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

        <h2 className={typographyStyles.subTitle}>Props</h2>

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
                  <code className={typographyStyles.typeText}>string</code>
                </td>
                <td>
                  <p>Input's name being registered.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
    example: "Submit Result",
    selectHelp:
      "By selecting the register option, the API table below will get updated.",
    options: {
      title: "Select Options",
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
            <Link to="/api/usecontroller">useController</Link> and{" "}
            <Link to="/api/usecontroller/controller">Controller</Link> component
            to take care this process for you.
          </p>

          <p>
            If you choose to manually register fields, you will need to update
            the input value with{" "}
            <Link to="/api/useform/setvalue">setValue</Link>.
          </p>

          <CodeArea
            rawData={`register('firstName', { required: true, min: 8 });

<TextInput onTextChange={(value) => setValue('lastChange', value))} />
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
  name={firstName.name}
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
          <p>
            A Boolean which, if true, indicates that the input must have a value
            before the form can be submitted. You can assign a string to return
            an error message in the <code>errors</code> object.
          </p>

          <p>
            <b className={typographyStyles.note}>Note:</b> This config aligns
            with web constrained API for required input validation, for{" "}
            <code>object</code> or <code>array</code> type of input use{" "}
            <code>validate</code> function instead.
          </p>
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
            This function will be executed on its own without depending on other
            validation rules included in the <code>required</code> attribute.
          </p>
          <p>
            <b className={typographyStyles.note}>Note:</b> for{" "}
            <code>object</code> or <code>array</code> input data, it's
            recommended to use the <code>validate</code> function for validation
            as the other rules mostly apply to <code>string</code>,{" "}
            <code>string[]</code>, <code>number</code> and <code>boolean</code>{" "}
            data types.
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
          This object contains information about the entire form state. It helps
          you to keep on track with the user's interaction with your form
          application.
        </p>
      </>
    ),
    isSubmitSuccessful: (
      <p>
        Indicate the form was successfully submitted without any{" "}
        <code>Promise</code> rejection or <code>Error</code> been thrown within
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
            <p>
              Make sure to provide all inputs' defaultValues at the useForm, so
              hook form can have a single source of truth to compare whether the
              form is dirty.
            </p>
            <CodeArea
              rawData={`const {
  formState: { isDirty, dirtyFields },
  setValue,
} = useForm({ defaultValues: { test: "" } });

// isDirty: true
setValue('test', 'change')
 
// isDirty: false because there getValues() === defaultValues
setValue('test', '') 
`}
            />
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
        <p>
          Dirty fields will <strong>not</strong> represent as{" "}
          <code>isDirty</code> formState, because dirty fields are marked field
          dirty at field level rather the entire form. If you want to determine
          the entire form state use <code>isDirty</code> instead.
        </p>
      </>
    ),
    touched:
      "An object containing all the inputs the user has interacted with.",
    defaultValues: (
      <p>
        The value which has been set at{" "}
        <Link to="/api/useform" aria-label="read more about reset api">
          useForm
        </Link>
        's defaultValues or updated defaultValues via{" "}
        <Link to="/api/useform/reset" aria-label="read more about reset api">
          reset
        </Link>{" "}
        API.
      </p>
    ),
    isSubmitting: (
      <>
        <code>true</code> if the form is currently being submitted.{" "}
        <code>false</code> otherwise.
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
          <Link to="/api/useformstate/errormessage">ErrorMessage</Link>{" "}
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
          This method will watch specified inputs and return their values. It is
          useful to render input value and for determining what to render by
          condition.
        </p>
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

        <h2 id="rules" className={typographyStyles.rulesTitle}>
          Rules
        </h2>
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
              <code>handleSubmit</code> function will not swallow errors that
              occurred inside your onSubmit callback, so we recommend you to try
              and catch inside async request and handle those errors gracefully
              for your customers.
            </p>

            <CodeArea
              rawData={`const onSubmit = () => {
  // async request which may result error
  throw new Error("Something is wrong");
};

<>
  <form
    onSubmit={(e) => {
      handleSubmit(onSubmit)(e)
      // you will have to catch those error and handle them
      .catch(() => {});
    }}
  />
  // The following is a better approach
  <form
    onSubmit={handleSubmit(() => {
      try {
        request();
      } catch (e) {
        // handle your error state here
      }
    })}
  />
</>;
`}
            />
          </li>
        </ul>
      </>
    ),
  },
  reset: {
    title: "reset",
    description: (
      <>
        <p>
          Reset the entire form state, fields reference, and subscriptions.
          There are optional arguments and will allow partial form state reset.
        </p>

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
                  <p>
                    An optional object to reset form values, and it's
                    recommended to provide the <strong>entire</strong>{" "}
                    <>defaultValues</> when supplied.
                  </p>
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
                    <code>isDirty</code> will temporarily remain as the current
                    state until further user's action.
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
                  <code>keepDirtyValues</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  <p>
                    <code>DirtyFields</code> and <code>isDirty</code> will
                    remained, and only none dirty fields will be updated to the
                    latest rest value.{" "}
                    <a
                      href="https://codesandbox.io/s/react-keepdirtyvalues-o8to91"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Check out the example.
                    </a>
                  </p>
                  <p>
                    <b className={typographyStyles.note}>Important: </b>
                    formState <code>dirtyFields</code> will need to be
                    subscribed.
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

                  <ul>
                    <li>
                      <p>
                        <code>isDirty</code> will be checked again: it is set to
                        be the result of the comparison of any new values
                        provided against the original <code>defaultValues</code>
                        .
                      </p>
                    </li>
                    <li>
                      <p>
                        <code>dirtyFields</code> will be updated again if values
                        are provided: it is set to be result of the comparison
                        between the new values provided against the original
                        <code>defaultValues</code>.
                      </p>
                    </li>
                  </ul>
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
                    <code>isTouched</code> state will be unchanged.
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

        <h2 id="rules" className={typographyStyles.rulesTitle}>
          Rules
        </h2>

        <ul>
          <li>
            <p>
              For controlled components you will need to pass{" "}
              <code>defaultValues</code> to <code>useForm</code> in order to{" "}
              <code>reset</code> the <code>Controller</code> components' value.
            </p>
          </li>
          <li>
            <p>
              When <code>defaultValues</code> is not supplied to{" "}
              <code>reset</code> API, then HTML native{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset"
              >
                reset
              </a>{" "}
              API will be invoked to restore the form.
            </p>
          </li>
          <li>
            <p>
              Avoid calling <code>reset</code> before <code>useForm</code>'s{" "}
              <code>useEffect</code> is invoked, this is because{" "}
              <code>useForm</code>'s subscription needs to be ready before{" "}
              <code>reset</code> can send a signal to flush form state update.
            </p>
          </li>
          <li>
            <p>
              It's recommended to <code>reset</code> inside{" "}
              <code>useEffect</code> after submission.
            </p>
            <CodeArea
              rawData={`useEffect(() => {
  reset({
    data: 'test'
  })
}, [isSubmitSuccessful])
`}
            />
          </li>
        </ul>
      </>
    ),
  },
  setError: {
    title: "setError",
    description: (
      <>
        <p>The function allows you to manually set one or more errors.</p>

        <h2 className={typographyStyles.subTitle}>Props</h2>

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <tbody>
              <tr>
                <th>Name</th>
                <th width="200px">Type</th>
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
                  >{`{ type: string, message?: string, types: MultipleFieldErrors }`}</code>
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

        <h2 id="rules" className={typographyStyles.rulesTitle}>
          Rules
        </h2>

        <ul>
          <li>
            <p>
              This method will not persist the associated input error if the
              input passes <code>register</code>'s associated rules.
            </p>
            <CodeArea
              rawData={`register('registerInput', { minLength: 4 }});
setError('registerInput', { type: 'custom', message: 'custom message' });
// validation will pass as long as minLength requirement pass
`}
            />
          </li>
          <li>
            <p>
              An error that is not associated with an input field will be
              persisted until cleared with <code>clearErrors</code>.
            </p>
            <CodeArea
              rawData={`setError('notRegisteredInput', { type: 'custom', message: 'custom message' });
// clearErrors() need to invoked manually to remove that custom error 
`}
            />
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
          <li>
            <p>
              This method will force set <code>isValid</code> formState to{" "}
              <code>false</code>, however, it's important to aware{" "}
              <code>isValid</code> will always be derived by the validation
              result from your input registration rules or schema result.
            </p>
          </li>
        </ul>
      </>
    ),
  },
  clearError: {
    title: "clearErrors",
    description: (
      <>
        <p>This function can manually clear errors in the form.</p>

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

        <h2 id="rules" className={typographyStyles.rulesTitle}>
          Rules
        </h2>

        <ul>
          <li>
            <p>
              This will not affect the validation rules attached to each inputs.
            </p>
          </li>
          <li>
            <p>
              This method doesn't affect validation rules or{" "}
              <code>isValid</code> formState.
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
          <strong>registered</strong> field and have the options to validate and
          update the form state. At the same time, it tries to avoid unnecessary
          rerender.
        </p>

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
                      <p>Target a single field by name.</p>
                    </li>
                    <li>
                      <p>When used with field array.</p>
                      <ul>
                        <li>
                          <p>
                            You can use methods such as{" "}
                            <Link to="/api/usefieldarray#replace">
                              <code>replace</code>
                            </Link>{" "}
                            or{" "}
                            <Link to="/api/usefieldarray#update">
                              <code>update</code>
                            </Link>{" "}
                            for field array, however, they will cause the
                            component to unmount and remount for the targeted
                            field array.
                          </p>

                          <CodeArea
                            rawData={`const { update } = useFieldArray({ name: 'array' });
                            
// unmount fields and remount with updated value
update(0, { test: '1', test1: '2' }) 

// will directly update input value
setValue('array.0.test1', '1');
setValue('array.0.test2', '2');
`}
                          />
                        </li>
                        <li>
                          <p>
                            It will not create a new field when targeting a
                            non-existing field.
                          </p>

                          <CodeArea
                            rawData={`const { replace } = useFieldArray({ name: 'test' })
                          
// ❌ doesn't create new input  
setValue('test.101.data') 

// ✅ work on refresh entire field array
replace([{data: 'test'}]) 
`}
                          />
                        </li>
                      </ul>
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
                    The value for the field. This argument is required and can
                    not be <code>undefined</code>.
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>options</code>
                </td>
                <td>
                  <code>shouldValidate</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  <ul>
                    <li>
                      <p>
                        Whether to compute if your input is valid or not
                        (subscribed to{" "}
                        <code className={typographyStyles.typeText}>
                          errors
                        </code>
                        ).
                      </p>
                    </li>
                    <li>
                      <p>
                        Whether to compute if your entire form is valid or not
                        (subscribed to{" "}
                        <code className={typographyStyles.typeText}>
                          isValid
                        </code>
                        ).
                      </p>
                    </li>
                    <li>
                      This option will update <code>touchedFields</code> at the
                      specified field level <b>not</b> the entire form touched
                      fields.
                    </li>
                  </ul>
                  <CodeArea
                    rawData={`setValue('name', 'value', { shouldValidate: true })`}
                    withOutCopy
                  />
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
                <td>
                  <ul>
                    <li>
                      <p>
                        Whether to compute if your input is dirty or not against
                        your defaultValues (subscribed to{" "}
                        <code className={typographyStyles.typeText}>
                          dirtyFields
                        </code>
                        ).
                      </p>
                    </li>
                    <li>
                      <p>
                        Whether to compute if your entire form is dirty or not
                        against your defaultValues (subscribed to{" "}
                        <code className={typographyStyles.typeText}>
                          isDirty
                        </code>
                        ).
                      </p>
                    </li>
                    <li>
                      This option will update <code>dirtyFields</code> at the
                      specified field level <b>not</b> the entire form dirty
                      fields.
                    </li>
                  </ul>

                  <CodeArea
                    rawData={`setValue('name', 'value', { shouldDirty: true })`}
                    withOutCopy
                  />
                </td>
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
                <td>
                  <p>Whether to set the input itself to be touched.</p>
                  <CodeArea
                    rawData={`setValue('name', 'value', { shouldTouch: true })`}
                    withOutCopy
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="rules" className={typographyStyles.rulesTitle}>
          Rules
        </h2>

        <ul>
          <li>
            <p>Only the following conditions will trigger a re-render:</p>
            <ul>
              <li>
                <p>When an error is triggered or corrected by a value update</p>
              </li>
              <li>
                <p>
                  When setValue cause state update, such as dirty and touched.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              It's recommended to target the field's name rather than make the
              second argument a nested object.
            </p>

            <CodeArea
              rawData={`setValue('yourDetails.firstName', 'value'); // ✅ performant
setValue('yourDetails', { firstName: 'value' }); // less performant

register('nestedValue', { value: { test: 'data' } }); // register a nested value input
setValue('nestedValue.test', 'updatedData'); // ❌ failed to find the relevant field
setValue('nestedValue', { test: 'updatedData' } ); // ✅ setValue find input and update
`}
              withOutCopy
            />
          </li>
          <li>
            <p>
              It's recommended to register the input's name before invoking{" "}
              <code>setValue</code>. To update the entire Field Array, make sure
              the <code>useFieldArray</code> hook is being executed first.
            </p>
            <p>
              <b className={typographyStyles.note}>Important: </b> use{" "}
              <Link to="/api/usefieldarray#replace">
                <code>replace</code>
              </Link>{" "}
              from <code>useFieldArray</code> instead, update entire field array
              with <code>setValue</code> will be removed in the next major
              version.
            </p>
            <CodeArea
              rawData={`// you can update an entire Field Array,
setValue('fieldArray', [{ test: '1' }, { test: '2' }]); // ✅

// you can setValue to a unregistered input
setValue('notRegisteredInput', 'value'); // ✅ prefer to be registered

// the following will register a single input (without register invoked)
setValue('resultSingleNestedField', { test: '1', test2: '2' }); // 🤔

// with registered inputs, the setValue will update both inputs correctly.
register('notRegisteredInput.test', '1')
register('notRegisteredInput.test2', '2')
setValue('notRegisteredInput', { test: '1', test2: '2' }); // ✅ sugar syntax to setValue twice
`}
              withOutCopy
            />
          </li>
        </ul>
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

        <h2 className={typographyStyles.subTitle}>Props</h2>

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <tbody>
              <tr>
                <th>{generic.type["en"]}</th>
                <th>{generic.description["en"]}</th>
              </tr>
              <tr>
                <td>
                  <code className={typographyStyles.typeText}>undefined</code>
                </td>
                <td>Returns the entire form values.</td>
              </tr>
              <tr>
                <td>
                  <code className={typographyStyles.typeText}>string</code>
                </td>
                <td>Gets the value at path of the form values. </td>
              </tr>
              <tr>
                <td>
                  <code className={typographyStyles.typeText}>array</code>
                </td>
                <td>
                  Returns an array of the value at path of the form values.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={typographyStyles.subTitle}>Example</h3>

        <div className={tableStyles.tableWrapper}>
          <p>
            The example below shows what to expect when you invoke{" "}
            <code>getValues</code> method.
          </p>

          <CodeArea
            rawData={`<input {...register('root.test1')} />
<input {...register('root.test2')} />
`}
          />

          <table className={tableStyles.table}>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Output</th>
              </tr>
              <tr>
                <td>
                  <code>getValues()</code>
                </td>
                <td>
                  <code>{`{ root: { test1: '', test2: ''} }`}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>getValues("yourDetails")</code>
                </td>
                <td>
                  <code>{`{ test1: '', test2: ''}`}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>getValues("yourDetails.firstName")</code>
                </td>
                <td>
                  <code>{`{ test1: '' }`}</code>
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

        <h2 id="rules" className={typographyStyles.rulesTitle}>
          Rules
        </h2>

        <ul>
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
          Custom hook for working with Field Arrays (dynamic form). The
          motivation is to provide better user experience and performance. You
          can watch{" "}
          <a
            href="https://www.youtube.com/watch?v=Q7lrHuUfgIs"
            target="_blank"
            rel="noopener noreferrer"
          >
            this short video
          </a>{" "}
          to visualize the performance enhancement.
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
                    Name of the field array. <b>Note: </b>Do not support dynamic
                    name.
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
                  <code>shouldUnregister</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td></td>
                <td>
                  <p>Whether Field Array will be unregistered after unmount.</p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>keyName</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>string = id</code>
                </td>
                <td></td>
                <td>
                  <p>
                    Name of the attribute with autogenerated identifier to use
                    as the <code>key</code> prop. This prop is no longer
                    required and will be removed in the next major version.
                  </p>
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
                    The same validation <code>rules</code> API as for{" "}
                    <Link to="/api/useform/register">register</Link>, which
                    includes:
                  </p>
                  <p>required, minLength, maxLength, validate</p>
                  <CodeArea
                    url="https://codesandbox.io/s/react-hook-form-usefieldarray-rules-iyejbp?file=/src/index.js"
                    withOutCopy
                    rawData={`useFieldArray({
  rules: { minLength: 4 }
})
`}
                  />
                  <p>
                    In case of validation error, the <code>root</code> property
                    is appended to{" "}
                    <code>formState.errors?.fieldArray?.root</code>
                    of type{" "}
                    <Link to="ts/#FieldError">
                      <code>FieldError</code>
                    </Link>
                    <p>
                      <b className={typographyStyles.note}>Important: </b>This
                      is only applicable to <strong>built-in</strong> validation
                      only
                    </p>
                    <Link to="/api/useform/#validationResolver">Resolvers</Link>{" "}
                    are yet to support <code>useFieldArray</code> root level
                    validation.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 id="shouldUnregister-example" className={typographyStyles.subTitle}>
          Examples
        </h3>

        <CodeArea rawData={useFieldArrayArgument} />
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
            <code>key</code> for your component.
          </td>
        </tr>
        <tr>
          <td>
            <code id="append">append</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (obj: object | object[], focusOptions) =&gt; void
              </code>
            </code>
          </td>
          <td>
            <p>
              Append input/inputs to the end of your fields and focus. The input
              value will be registered during this action.
            </p>
            <p>
              <b className={typographyStyles.note}>Important: </b>append data is
              required and not partial.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code id="prepend">prepend</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (obj: object | object[], focusOptions) =&gt; void
            </code>
          </td>
          <td>
            <p>
              Prepend input/inputs to the start of your fields and focus. The
              input value will be registered during this action.
            </p>
            <p>
              <b className={typographyStyles.note}>Important: </b>prepend data
              is required and not partial.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code id="insert">insert</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              {`(index: number, value: object | object[], focusOptions) => void`}
            </code>
          </td>
          <td>
            <p>Insert input/inputs at particular position and focus. </p>
            <p>
              <b className={typographyStyles.note}>Important: </b>insert data is
              required and not partial.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code id="swap">swap</code>
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
            <code id="move">move</code>
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
            <code id="update">update</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (index: number, obj: object) =&gt; void
              </code>
            </code>
          </td>
          <td>
            <p>
              Update input/inputs at a particular position, updated fields will
              get unmount and remount. If this is not desired behavior, please
              use{" "}
              <Link to="/api/useform/setvalue">
                <code>setValue</code>
              </Link>{" "}
              API instead.
            </p>
            <p>
              <b className={typographyStyles.note}>Important: </b>update data is
              required and not partial.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code id="replace">replace</code>
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
            <code id="remove">remove</code>
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
              It's important to be aware of each prop's responsibility when
              working with external controlled components, such as MUI, AntD,
              Chakra UI. Controller acts as a "spy" on your input by reporting
              and setting value.
            </p>
            <ul>
              <li>
                <p>
                  <b>onChange</b>: send data back to hook form
                </p>
              </li>
              <li>
                <p>
                  <b>onBlur</b>: report input has been interacted (focus and
                  blur)
                </p>
              </li>
              <li>
                <p>
                  <b>value</b>: set up input initial and updated value
                </p>
              </li>
              <li>
                <p>
                  <b>ref</b>: allow input to be focused with error
                </p>
              </li>
              <li>
                <p>
                  <b>name</b>: give input an unique name
                </p>
              </li>
            </ul>
            <p>The following codesandbox demonstrate the usages:</p>

            <ul>
              <li>
                <p>
                  <a
                    href="https://codesandbox.io/s/react-hook-form-v7-controller-5h1q5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MUI and other components
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://codesandbox.io/s/chakra-ui-5mp8g"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chakra UI components
                  </a>
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              Do not <code>register</code> input again. This component is made
              to take care of the registration process.
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
              Customise what value gets sent to hook form by transforming the
              value during <code>onChange</code>.
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
            <Link to="/ts#FieldPath" title="FieldPath type">
              <code className={typographyStyles.typeText}>FieldPath</code>
            </Link>
          </td>
          <td>✓</td>
          <td>Unique name of your input.</td>
        </tr>
        <tr>
          <td>control</td>
          <td>
            <Link to="/ts#Control" title="Control type">
              <code className={typographyStyles.typeText}>Control</code>
            </Link>
          </td>
          <td></td>
          <td>
            <Link to="/api/useform/control">
              <code>control</code>
            </Link>{" "}
            object is from invoking <code>useForm</code>. Optional when using{" "}
            <code>FormProvider</code>.
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
      onBlur={onBlur} // notify when input is touched
      onChange={onChange} // send value to hook form
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
      onChange={onChange} // send value to hook form
      onBlur={onBlur} // notify when input is touched
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
            <code className={typographyStyles.typeText}>unknown</code>
          </td>
          <td></td>
          <td>
            <p>
              <b className={typographyStyles.note}>Important:</b> Can not apply{" "}
              <code>undefined</code> to <code>defaultValue</code> or{" "}
              <code>defaultValues</code> at <code>useForm</code>.
            </p>
            <ul>
              <li>
                <p>
                  You need to either set <code>defaultValue</code> at the
                  field-level or <code>useForm</code>'s{" "}
                  <code>defaultValues</code>. <code>undefined</code> is not a
                  valid value.
                </p>
              </li>
              <li>
                <p>
                  If your form will invoke <code>reset</code> with default
                  values, you will need to provide <code>useForm</code> with{" "}
                  <code>defaultValues</code>.
                </p>
              </li>
              <li>
                <p>
                  Calling <code>onChange</code> with <code>undefined</code> is
                  not valid. You should use <code>null</code> or the empty
                  string as your default/cleared value instead.
                </p>
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
              Validation rules in the same format for{" "}
              <Link to="/api/useform/register#options">
                <code>register</code> options
              </Link>
              , which includes:
            </p>
            <p>required, min, max, minLength, maxLength, pattern, validate</p>
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
            <p>
              <b>Note:</b> this prop should be avoided when using with{" "}
              <code>useFieldArray</code> as <code>unregister</code> function
              gets called after input unmount/remount and reorder.
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
          <a target="_blank" rel="noopener noreferrer" href="https://mui.com/">
            MUI
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

        <h2 id="rules" className={typographyStyles.rulesTitle}>
          Rules
        </h2>

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
            href="https://github.com/ealush/vest"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vest
          </a>
          ,{" "}
          <a
            href="https://github.com/ajv-validator/ajv"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ajv
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
            color: "white",
            borderRadius: 4,
            display: "block",
          }}
        >
          npm install @hookform/resolvers
        </code>
      </>
    ),
  },
  useWatch: {
    title: "useWatch",
    description: (
      <p>
        Behaves similarly to the <code>watch</code> API, however, this will
        isolate re-rendering at the custom hook level and potentially result in
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
            <Link to="/ts#FieldPath" title="FieldPath type">
              <code className={typographyStyles.typeText}>FieldPath</code>
            </Link>
          </td>
          <td>✓</td>
          <td>Unique name of your input.</td>
        </tr>
        <tr>
          <td>
            <code>control</code>
          </td>
          <td>
            <Link to="/ts#Control" title="Control type">
              <code className={typographyStyles.typeText}>Control</code>
            </Link>
          </td>
          <td></td>
          <td>
            <Link to="/api/useform/control">
              <code>control</code>
            </Link>{" "}
            object provided by invoking <code>useForm</code>. Optional when
            using <code>FormProvider</code>.
          </td>
        </tr>
        <tr>
          <td>
            <code>defaultValue</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>unknown</code>
          </td>
          <td></td>
          <td>
            <p>
              <b className={typographyStyles.note}>Important:</b> Can not apply{" "}
              <code>undefined</code> to <code>defaultValue</code> or{" "}
              <code>defaultValues</code> at <code>useForm</code>.
            </p>
            <ul>
              <li>
                <p>
                  You need to either set <code>defaultValue</code> at the
                  field-level or <code>useForm</code>'s{" "}
                  <code>defaultValues</code>. <code>undefined</code> is not a
                  valid value.
                </p>
              </li>
              <li>
                <p>
                  If your form will invoke <code>reset</code> with default
                  values, you will need to provide <code>useForm</code> with{" "}
                  <code>defaultValues</code>.
                </p>
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
              Validation rules in the same format for <code>register</code>,
              which includes:
            </p>
            <p>required, min, max, minLength, maxLength, pattern, validate</p>
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
            <p>
              <b>Note:</b> this prop should be avoided when using with{" "}
              <code>useFieldArray</code> as <code>unregister</code> function
              gets called after input unmount/remount and reorder.
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
              It's important to be aware of each prop's responsibility when
              working with external controlled components, such as MUI, AntD,
              Chakra UI. Its job is to spy on the input, report, and set its
              value.
            </p>

            <ul>
              <li>
                <p>
                  <b>onChange</b>: send data back to hook form
                </p>
              </li>
              <li>
                <p>
                  <b>onBlur</b>: report input has been interacted (focus and
                  blur)
                </p>
              </li>
              <li>
                <p>
                  <b>value</b>: set up input initial and updated value
                </p>
              </li>
              <li>
                <p>
                  <b>ref</b>: allow input to be focused with error
                </p>
              </li>
              <li>
                <p>
                  <b>name</b>: give input an unique name
                </p>
              </li>
            </ul>

            <p>
              It's fine to host your state and combined with{" "}
              <code>useController</code>.
            </p>

            <CodeArea
              url="https://codesandbox.io/s/usecontroller-own-state-wncet2?file=/src/App.tsx"
              rawData={`const { field } = useController();
const [value, setValue] = useState(field.value);

onChange={(event) => {
  field.onChange(parseInt(event.target.value)) // data send back to hook form
  setValue(event.target.value) // UI state
}}
`}
            />
          </li>
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
          <Link to="/api/usecontroller/controller">
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

        <h2 id="props" className={typographyStyles.subTitle}>
          Props
        </h2>

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
                  <p>A input field name to focus</p>
                </td>
              </tr>
              <tr>
                <td>
                  <code>options</code>
                </td>
                <td>
                  <code>shouldSelect</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>boolean</code>
                </td>
                <td>
                  <p>Whether to select the input content on focus.</p>
                  <CodeArea
                    rawData={`const { setFocus } = useForm()\n
setFocus("name", { shouldSelect: true })
`}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="rules" className={typographyStyles.rulesTitle}>
          Rules
        </h2>

        <ul>
          <li>
            <p>
              This API will invoke focus method from the ref, so it's important
              to provide <code>ref</code> during <code>register</code>.
            </p>
          </li>
          <li>
            <p>
              Avoid calling <code>setFocus</code> right after <code>reset</code>{" "}
              as all input references will be removed by <code>reset</code> API.
            </p>
          </li>
        </ul>
      </>
    ),
  },
}
