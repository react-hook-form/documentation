import * as React from "react"
import colors from "../../styles/colors"
import CodeArea, { CodeSandBoxLink } from "../../components/CodeArea"
import useFieldArrayArgument from "../../components/codeExamples/useFieldArrayArgument"
import generic from "../generic"
import typographyStyles from "../../styles/typography.module.css"
import buttonStyles from "../../styles/button.module.css"
import tableStyles from "../../styles/table.module.css"

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
        <code>useForm</code> also takes <b>optional</b> arguments. The following
        example demonstrates all of the arguments with their default values.
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
    validationResolver: (goToSection) => (
      <>
        <p>
          This callback function allows you to run through any schema or custom
          validation. The function has the entire form <code>values</code> as
          argument, and you will need to validate the result and return both{" "}
          <code>values</code> and <code>errors</code>. Read more at{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("validationResolver")}
          >
            validationResolver
          </button>{" "}
          section.
        </p>
        <p>
          <b className={typographyStyles.note}>Note:</b> This function will be
          cached inside the hook, you will have to either move the function
          outside of the component or memorise the function.
        </p>
      </>
    ),
    validateContext: (
      <>
        <p>
          This context <code>object</code> is mutable and will be injected into{" "}
          <code>resolver</code>'s second argument or{" "}
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
    defaultValues: (goToSection) => (
      <>
        <p>
          You can set an input's default value with{" "}
          <code>defaultValue/defaultChecked</code>{" "}
          <a
            className={buttonStyles.links}
            href="https://reactjs.org/docs/uncontrolled-components.html"
          >
            (read more from the React doc for Default Values)
          </a>{" "}
          or pass <code>defaultValues</code> as an optional argument to populate
          the default values for the entire form.
        </p>

        <ul>
          <li>
            <p>
              <b className={typographyStyles.note}>Important:</b>{" "}
              <code>defaultValues</code> is cached{" "}
              <strong>at the first render</strong> within the custom hook. If
              you want to reset the <code>defaultValues</code>, you should use
              the{" "}
              <button
                className={buttonStyles.codeAsLink}
                onClick={() => goToSection("reset")}
              >
                reset
              </button>{" "}
              api.
            </p>
          </li>
          <li>
            <p>
              Values defined in <code>defaultValues</code> will be injected into{" "}
              <button
                className={buttonStyles.codeAsLink}
                onClick={() => goToSection("watch")}
              >
                watch
              </button>{" "}
              as <code>defaultValue</code>.
            </p>
          </li>
          <li>
            <p>
              It doesn't auto populate with the manually registered input (eg:{" "}
              <code
                style={{
                  whiteSpace: "nowrap",
                }}
              >{`register({ name: 'test' })`}</code>
              ) because the custom <code>register</code> field does not provide
              the <code>ref</code> to React Hook Form.
            </p>
          </li>
          <li>
            <p>
              Its not default state for the form, to include additional form
              values:
            </p>
            <ol>
              <li>
                <p>
                  Register hidden input:{" "}
                  <code>{`<input type="hidden" ref={register} name="test" />`}</code>
                </p>
              </li>
              <li>
                <p>Combine values at onSubmit callback.</p>
              </li>
            </ol>
          </li>
        </ul>
      </>
    ),
    validationSchema: (goToSection) => (
      <p>
        Apply form validation rules with <code>Yup</code> at the schema level,
        please refer to the{" "}
        <button
          className={buttonStyles.codeAsLink}
          onClick={() => goToSection("validationSchema")}
        >
          validationSchema
        </button>{" "}
        section.
      </p>
    ),
    reValidateMode: (
      <p>
        This option allows you to configure when inputs with errors get
        re-validated after submit. By default, validation is only triggered
        during an input change.
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
          with <code>ref</code> will work. Custom <code>register</code> inputs
          do not apply. eg:{" "}
          <code>{`register({ name: 'test' }) // doesn't work`}</code>{" "}
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
          By default, when an input is removed, React Hook Form uses{" "}
          <code>MutationObserver</code> to detect and <code>unregister</code>{" "}
          the input(s) that are unmounted. However, you can set{" "}
          <code>shouldUnregister</code> to false to maintain the input state
          even when unmounting occurs.
        </p>
      </>
    ),
  },
  unregister: {
    title: "unregister",
    description: (
      <>
        <p>
          This method allows you to <code>unregister</code> a single input or an
          array of inputs.
        </p>
        <p>
          <b className={typographyStyles.note}>Note:</b> when you unregister an
          input, its value will no longer be included in the form data that gets
          submitted.
        </p>
      </>
    ),
  },
  register: {
    title: "register",
    description: (
      <>
        <p>
          This method allows you to register an input/select <code>Ref</code>{" "}
          and apply validation rules into React Hook Form.
        </p>
        <p>
          Validation rules are all based on HTML standard and also allow custom
          validation.
        </p>
        <p>
          <b className={typographyStyles.note}>Important:</b> <code>name</code>{" "}
          is <b>required</b> and <b>unique</b> (can not start with a number or
          use number as key name). Input name also supports dot and bracket
          syntax, which allows you to easily create nested form fields.
        </p>
      </>
    ),
    fieldArray: (
      <p
        style={{
          paddingLeft: 10,
          borderLeft: `4px solid ${colors.lightPink}`,
        }}
      >
        If you're working on simple <code>Array Fields</code>, you can assign an
        input name as <code>name[index]</code>.{" "}
        <a
          className={buttonStyles.links}
          href="https://github.com/react-hook-form/react-hook-form/blob/master/examples/FieldArray.tsx"
          title="example for Field Array"
        >
          Check out the Field Array example
        </a>
        . For more advance usage, make sure to checkout{" "}
        <code>useFieldArray</code>.
      </p>
    ),
    example: "Submit Result",
    selectHelp:
      "By selecting the register option, the API table below will get updated.",
    options: {
      title: "Register Options",
      registerWithValidation: "Register with validation",
      registerWithValidationMessage:
        "Register with validation and error message",
      note: (goToSection) => (
        <>
          <h2 className={typographyStyles.title}>Custom Register</h2>
          <p>
            You can also register inputs manually, which is useful when working
            with custom components and <code>Ref</code> is not accessible. This
            is common when you are working with React Native or custom
            components like{" "}
            <a
              href="https://github.com/JedWatson/react-select"
              target="_blank"
              rel="noopener noreferrer"
            >
              react-select
            </a>
            . To make this easier, we provide a{" "}
            <button
              className={buttonStyles.codeAsLink}
              onClick={() => goToSection("Controller")}
            >
              Controller
            </button>{" "}
            component to take care this process for you.
          </p>

          <p>
            If you choose to not use <code>Controller</code> and manually
            register fields, you will need to update the input value with{" "}
            <button
              className={buttonStyles.codeAsLink}
              onClick={() => goToSection("setValue")}
            >
              setValue
            </button>
            .
          </p>

          <p>
            <code
              className={typographyStyles.codeBlock}
            >{`register({ name: 'firstName' }, { required: true, min: 8 })`}</code>
          </p>

          <p>
            <b className={typographyStyles.note}>Note:</b> If you want the
            custom registered input to trigger a re-render during its value
            update, then you should give a type to your registered input.
          </p>

          <p>
            <code
              className={typographyStyles.codeBlock}
            >{`register({ name: 'firstName', type: 'custom' }, { required: true, min: 8 })`}</code>
          </p>

          <p>
            <b className={typographyStyles.note}>Note:</b> If you have multiple
            radio inputs with the same name, you need to register the validation
            to the last input so the hook knows to validate them as a group at
            the end.
          </p>
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
      pattern: "The regex pattern for the input.",
      validate: `You can pass a callback function as the argument to validate, or you can pass an object of callback functions to validate all of them. (refer to the examples)`,
    },
  },
  formState: {
    title: "formState",
    description: (
      <>
        <p>This object contains information about the form state.</p>

        <p>
          <b className={typographyStyles.note}>Important:</b>{" "}
          <code>formState</code> is wrapped with{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Proxy
          </a>{" "}
          to improve render performance, so make sure you invoke or read it
          before <code>render</code> in order to enable the state update. This
          reduced re-render feature only applies to the Web platform due to a
          lack of support for Proxy in React Native.
        </p>
      </>
    ),
    isDirty: (
      <>
        Set to <code>true</code> after the user modifies any of the inputs.
        <p>
          <b className={typographyStyles.note}>Note:</b> File typed input will
          need to manage at app level due to the ability to cancel file
          selection and{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/FileList"
            target="_blank"
            rel="noopener noreferrer"
          >
            FileList
          </a>{" "}
          object.
        </p>
      </>
    ),
    isSubmitted: (
      <>
        Set to <code>true</code> after the form is submitted. Will remain{" "}
        <code>true</code> until the <code>reset</code> method is invoked.
      </>
    ),
    dirtyFields: "An object with the user-modified fields.",
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
          <code>validateCriteriaMode</code> to <code>all</code> for this option
          to work.
        </p>
      </>
    ),
    message: `If you registered your input with an error message, then it will be put in this field, otherwise it's an empty string by default.`,
    ref: `Reference for your input element.`,
    note: (goToSection) => (
      <>
        <p>
          <b className={typographyStyles.note}>Important:</b> Avoid using error
          object key names to avoid data overwrite. <br />
          eg:{" "}
          <code>
            register('user'); register('user.type'); ❌ // error's type will get
            overwritten.
          </code>
        </p>
        <p>
          <b className={typographyStyles.note}>Note:</b> You can use the{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("ErrorMessage")}
          >
            ErrorMessage
          </button>{" "}
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

        <ul>
          <li>
            <p>
              When <code>defaultValue</code> is not defined, the first render of{" "}
              <code>watch</code> will return <code>undefined</code> because it
              is called before <code>register</code>, but you can set the{" "}
              <code>defaultValue</code> as the second argument.
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
              For <code>useFieldArray</code>, when all inputs get removed will
              return <code>defaultValues</code>, you can walk around this issue
              by checking <code>fields.length</code>.
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
    },
  },
  handleSubmit: {
    title: "handleSubmit",
    description: (
      <>
        <p>
          This function will pass the form data when form validation is
          successful and can be invoked remotely as well.
        </p>
        <p>
          <code className={typographyStyles.codeBlock}>
            handleSubmit(onSubmit)()
          </code>
        </p>
        <p>
          <b className={typographyStyles.note}>Note:</b> You can pass an{" "}
          <code>async</code> function for asynchronous validation. eg:{" "}
        </p>
        <p>
          <code className={typographyStyles.codeBlock}>
            handleSubmit(async (data) =&gt; await fetchAPI(data))
          </code>
        </p>
      </>
    ),
  },
  reset: (goToSection) => ({
    title: "reset",
    description: (
      <>
        <p>
          This function will reset the fields' values and errors within the
          form. By supplying <code>omitResetState</code>, you have the freedom
          to only reset specific parts of the state. You can pass{" "}
          <code>values</code> as an optional argument to reset your form into
          the assigned default values.
        </p>
        <p>
          <b className={typographyStyles.note}>Note:</b> For controlled
          components like <code>React-Select</code> which do not expose a{" "}
          <code>ref</code> prop, you will have to reset the input value manually
          with{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("setValue")}
          >
            setValue
          </button>{" "}
          or by wrapping your component with{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("Controller")}
          >
            Controller
          </button>
          .
        </p>
        <p>
          <b className={typographyStyles.note}>Note: </b> You will need to pass{" "}
          <code>defaultValues</code> to <code>useForm</code> in order to{" "}
          <code>reset</code> the <code>Controller</code> components' value.
        </p>
      </>
    ),
  }),
  setError: {
    title: "setError",
    description: (
      <>
        <p>The function allows you to manually set one or more errors.</p>
        <ul>
          <li>
            <p>
              This method will not persist the associated input error if the
              input passes validation.
            </p>
          </li>
          <li>
            <p>
              Allows you to set an error that is not associated with an input
              field that will be persisted until it is manually cleared with{" "}
              <code>clearError</code>.
            </p>
          </li>
          <li>
            <p>
              Can be useful in the <code>handleSubmit</code> method when you
              want to give error feedback to a user after async validation. (ex:
              API returns validation errors)
            </p>
          </li>
        </ul>
      </>
    ),
  },
  clearError: {
    title: "clearErrors",
    description: (
      <ul>
        <li>
          <p>
            <code>undefined</code>: reset all errors
          </p>
        </li>
        <li>
          <p>
            <code>string</code>: reset the error on a single field
          </p>
        </li>
        <li>
          <p>
            <code>string[]</code>: reset errors on the given fields
          </p>
        </li>
      </ul>
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
          Only the following conditions will trigger a re-render:
        </p>
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
        <p>
          You can also set the <code>shouldValidate</code> parameter to{" "}
          <code>true</code> in order to trigger a field validation.
        </p>

        <CodeArea
          rawData={`setValue('name', 'value', { shouldValidate: true })`}
          withOutCopy
        />

        <p>
          You can also set the <code>shouldDirty</code> parameter to{" "}
          <code>true</code> in order to set field to dirty.
        </p>

        <CodeArea
          rawData={`setValue('name', 'value', { shouldDirty: true })`}
          withOutCopy
        />
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

        <ul>
          <li>
            <p>
              <code>getValues()</code>: Read all form values.
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
        <p>Manually triggers form validation.</p>

        <ul>
          <li>
            <p>
              <code>trigger()</code>: Triggers validation on all fields.
            </p>
          </li>
          <li>
            <p>
              <code>trigger('test')</code>: Triggers validation on a specific
              field value by <strong>name</strong>.
            </p>
          </li>
          <li>
            <p>
              <code>trigger(['test', 'test1'])</code>: Triggers validation on
              multiple fields by <strong>name</strong>.
            </p>
          </li>
        </ul>
      </>
    ),
  },
  useFieldArray: {
    title: "useFieldArray",
    description: (
      <>
        <p>
          A custom hook for working with uncontrolled Field Arrays (dynamic
          inputs). The motivation behind this hook is to provide better user
          experience and form performance. You can watch{" "}
          <a
            href="https://www.youtube.com/watch?v=Q7lrHuUfgIs"
            target="_blank"
            rel="noopener noreferrer"
          >
            this short video
          </a>{" "}
          to compare controlled vs uncontrolled Field Array.
        </p>

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
                <td></td>
                <td>
                  <p>
                    Name of the field.{" "}
                    <b className={typographyStyles.note}>Important: </b> make
                    sure name is in object shape:{" "}
                    <code>name={`test[index].name`}</code> as we don't support
                    flat arrays.
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
            </tbody>
          </table>
        </div>

        <CodeArea rawData={useFieldArrayArgument} />

        <p>
          <b className={typographyStyles.note}>Important: </b>{" "}
          <code>useFieldArray</code> is built on top of uncontrolled components.
          The following notes will help you aware and be mindful of its
          behaviour during implementation.
        </p>

        <ul>
          <li>
            <p>
              You can populate the <code>fields</code> by supply{" "}
              <code>defaultValues</code> at <code>useForm</code> hook.
            </p>
          </li>
          <li>
            <p>
              Make sure you assign <code>id</code> from <code>fields</code>{" "}
              object as your component key.
            </p>
          </li>
          <li>
            <p>
              Make sure to set <code>defaultValue</code> to{" "}
              <code>fields[index]</code>.
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
}, fields)
            `}
            />
          </li>
          <li>
            <p>
              It's <strong>important</strong> to apply{" "}
              <code>{`ref={register()}`}</code> instead of{" "}
              <code>{`ref={register}`}</code> when working with{" "}
              <code>useFieldArray</code> so <code>register</code> will get
              invoked during <code>map</code>.
            </p>
          </li>
          <li>
            <p>
              It doesn't work with custom register at <code>useEffect</code> or
              conditional render. For conditional render consider using style to
              toggle the viability and `validate` function for conditional
              validation.
            </p>
          </li>
          <li>
            <p>
              When <code>watch</code> the entire Field Array, it's important to
              supply a default value with <code>fields</code> to avoid empty
              values gets returned. eg: <code>watch('fieldArray', fields)</code>
            </p>
          </li>
          <li>
            <p>
              When all inputs get removed from the Field Array,{" "}
              <code>watch</code> will return <code>defaultValues</code>. You can
              use <code>fields.length</code> to avoid this behaviour. eg{" "}
              <code>fields.length ? watch('fieldArray', fields) : []</code>
            </p>
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
            This object is the source of truth to map and render inputs.
            <p>
              <b className={typographyStyles.note}>Important: </b> because each
              inputs can be uncontrolled, <code>id</code> is required with
              mapped components to help React identify which items have changed,
              are added, or are removed.
            </p>
            <p>
              eg: <code>{`{fields.map(d => <input key={d.id} />)}`}</code>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>append</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (obj: object, shouldFocus: boolean = true) =&gt; void
              </code>
            </code>
          </td>
          <td>Append input/inputs to the end of your fields and focus.</td>
        </tr>
        <tr>
          <td>
            <code>prepend</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (obj: object, shouldFocus: boolean = true) =&gt; void
              </code>
            </code>
          </td>
          <td>Prepend input/inputs to the start of your fields and focus.</td>
        </tr>
        <tr>
          <td>
            <code>insert</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (index: number, value: object, shouldFocus: boolean = true)
                =&gt; void
              </code>
            </code>
          </td>
          <td>Insert input/inputs at particular position and focus.</td>
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
            Optional when using <code>FormContext</code>.
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
            prop names. Provides <code>onChange</code>, <code>onBlur</code> and{" "}
            <code>value</code> to the child component.
            <CodeArea
              withOutCopy
              url="https://codesandbox.io/s/react-hook-form-v6-controller-qsd8r"
              rawData={`<Controller
  control={control} 
  name="test" 
  render={({ onChange, onBlur, value }) => (
    <Checkbox
      onBlur={onBlur}
      onChange={e => onChange(e.target.checked)}
      checked={value}
    />
  )}
/>
<Controller render={props => <Input {...props} />} />`}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>as</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>React.ElementType</code>
          </td>
          <td></td>
          <td>
            <p style={{ marginTop: 0 }}>
              Controller will inject <code>onChange</code>, <code>onBlur</code>{" "}
              and <code>value</code> props into the component.
            </p>

            <p>
              Every prop you pass to the Controller component will be forwarded
              to the component instance you provided with the <code>as</code>{" "}
              prop. For instance, if you have a custom <code>Switch</code>{" "}
              component that requires a <code>label</code> prop, you can pass it
              to the Controller component directly and it will take care of
              forwarding the prop for you.
            </p>

            <p>
              <b className={typographyStyles.note}>Note:</b> The following props
              will be passed into your component: <code>onChange</code>,{" "}
              <code>onBlur</code>, <code>value</code>.
            </p>

            <CodeArea
              withOutCopy
              url="https://codesandbox.io/s/react-hook-form-v6-controller-24gcl"
              rawData={`<Controller 
  as={<TextInput />} 
  control={control} 
  name="test" 
/>`}
            />
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
            checkbox input.
            <p>
              <b className={typographyStyles.note}>Note:</b> You need to either
              set <code>defaultValue</code> at the field-level or call{" "}
              <code>useForm</code> with <code>defaultValues</code>.
            </p>
            <p>
              <b className={typographyStyles.note}>Note</b>: if your form will
              invoke <code>reset</code> with default values, you will need to
              call <code>useForm</code> with <code>defaultValues</code> instead
              of setting the <code>defaultValue</code> on individual fields.
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
            Validation rules in the same format as for <code>register</code>.
            <CodeArea
              url="https://codesandbox.io/s/controller-rules-8pd7z?file=/src/App.tsx"
              withOutCopy
              rawData="rules={{ required: true }}"
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>onFocus</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>() =&gt; void</code>
          </td>
          <td></td>
          <td>
            <p style={{ marginTop: 0 }}>
              This callback allows the custom hook to focus on the input when
              there is an error. This function is applicable for both React and
              React-Native components as long as they can be focused.
            </p>

            <CodeSandBoxLink
              style={{
                position: "relative",
                left: 0,
                float: "right",
                display: "flex",
              }}
              url="https://codesandbox.io/s/react-hook-form-controllerautofocus-v6-eeo66"
            />
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
          Hook function that allows you to access the form context.{" "}
          <code>useFormContext</code> is intended to be used in deeply nested
          structures, where it would become inconvenient to pass the context as
          a prop.
        </p>
        <p>
          You need to wrap your form with the <code>FormContext</code> provider
          component for <code>useFormContext</code> to work properly.
        </p>
      </>
    ),
    description: "",
  },
  control: {
    title: "control",
    description: (
      <p>
        This object is made for React Hook Form's Controller component, which
        contains methods for registering a controlled component into React Hook
        Form.
      </p>
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
          using <code>FormContext</code>.
        </>
      ),
      message: <>Inline error message.</>,
      as: (
        <>
          Wrapper component or HTML tag. eg: <code>as="span"</code> or{" "}
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
            <code>validateCriteriaMode</code> to 'all' for using{" "}
            <code>messages</code>.
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
          </a>{" "}
          and many others. Our goal is to make sure you can seamlessly integrate
          whichever validation library you prefer. If you're not using a
          library, you can always write your own logic to validate your forms.
        </p>

        <p>
          At this time, we offer{" "}
          <a
            href="https://github.com/react-hook-form/react-hook-form-resolvers"
            target="_blank"
            rel="noopener noreferrer"
          >
            officially supported resolvers
          </a>{" "}
          for: Yup, Joi and Superstruct.
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

        <p>
          <b className={typographyStyles.note}>Notes</b> on building a custom
          resolver:
        </p>

        <ul>
          <li>
            <p>
              Make sure you are returning an object that has <code>values</code>{" "}
              and <code>errors</code> properties. Their default values should be{" "}
              <code>{`{}`}</code>.
            </p>
          </li>

          <li>
            <p>
              The keys of the <code>error</code> object should match the{" "}
              <code>name</code> value of your fields.
            </p>
          </li>

          <li>
            <p>
              This function will be cached inside the custom hook, while{" "}
              <code>context</code> is a mutable <code>object</code> which can be
              changed on each re-render.
            </p>
          </li>

          <li>
            <p>
              Re-validation of an input will only occur one field at time during
              a user’s interaction. The lib itself will evaluate the{" "}
              <code>error</code>
              object to trigger a re-render accordingly.
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
}
