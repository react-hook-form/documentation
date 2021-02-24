import * as React from "react"
import colors from "../../styles/colors"
import CodeArea, { CodeSandBoxLink } from "../../components/CodeArea"
import useFieldArrayArgument from "../../components/codeExamples/useFieldArrayArgument"
import generic from "../generic"
import typographyStyles from "../../styles/typography.module.css"
import buttonStyles from "../../styles/button.module.css"
import tableStyles from "../../styles/table.module.css"
import controller from "../../components/codeExamples/controller"
import controllerTs from "../../components/codeExamples/controllerTs"
import TabGroup from "../../components/TabGroup"
import formStateUseEffect from "../../components/codeExamples/formStateUseEffect"
import formStateUseEffectTs from "../../components/codeExamples/formStateUseEffectTs"

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
    validationOnTouched: (
      <>
        <p>
          Validation will trigger on the first <code>blur</code> event. After
          that, it will trigger on every <code>change</code> event.
        </p>
        <p>
          <b className={typographyStyles.note}>Note:</b> when using with{" "}
          <code>Controller</code>, make sure to wire up <code>onBlur</code> with{" "}
          <code>render</code> prop.
        </p>
      </>
    ),
    defaultValues: (goToSection) => (
      <>
        <p>
          The <code>defaultValue</code> for an input is used as the initial
          value when a component is first rendered, before a user interacts with
          it. The main difference between the input's <code>defaultValue</code>{" "}
          and <code>value</code> properties is that the <code>value</code>{" "}
          indicates the input from the user, whereas the{" "}
          <code>defaultValue</code> indicates the initial value as set by your
          application code. The <code>defaultValue</code> might reflect some
          "business logic" for your form (e.g. the default value for the field{" "}
          <em>color</em> is set to <em>purple</em>) or if your app allows
          editing previously saved form data it could be the previously saved
          value for the field of this input.
        </p>
        <p>
          <b className={typographyStyles.note}>Note:</b> It is encouraged that
          you set a <code>defaultValue</code> for all inputs to non-
          <code>undefined</code> such as the empty string or <code>null</code>.
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
          , pass <code>defaultValues</code> as an optional argument to{" "}
          <code>useForm()</code> to populate the default values for the entire
          form, or set values on an individual
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("Controller")}
          >
            Controller
          </button>{" "}
          component via its <code>defaultValue</code> property.
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
          <b className={typographyStyles.note}>Important:</b> This prop is
          getting deprecated in the next major version. Join the{" "}
          <a
            href="https://github.com/react-hook-form/react-hook-form/discussions/3714"
            target="_blank"
            rel="noopener noreferrer"
          >
            discussion
          </a>
          .
        </p>
        <p>
          By default, when an input is removed, React Hook Form uses{" "}
          <code>MutationObserver</code> to detect and <code>unregister</code>{" "}
          the input(s) that are unmounted. However, you can set{" "}
          <code>shouldUnregister</code> to false to maintain the input state
          even when unmounting occurs.
        </p>

        <ul>
          <li>
            <p>
              Inputs state will have remained when unmounted and fall back to{" "}
              <code>defaultValues</code> when the value is{" "}
              <code>undefined</code>.
            </p>
          </li>
          <li>
            <p>
              Inputs will no longer be able to <code>unregister</code>, this
              will disable <code>unregister</code> method as well.
            </p>
          </li>
        </ul>
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
            >{`register('firstName', { required: true, min: 8 })`}</code>
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
      pattern: (
        <>
          <p>The regex pattern for the input.</p>
          <p>
            <b className={typographyStyles.note}>Note:</b> A RegExp object with
            the /g flag keeps track of the lastIndex where a match occurred.
          </p>
        </>
      ),
      validate: `You can pass a callback function as the argument to validate, or you can pass an object of callback functions to validate all of them. (refer to the examples)`,
    },
  },
  formState: {
    title: "formState",
    description: (
      <>
        <p>
          This object contains information about the form state. If you want to
          subscribe to <code>formState</code> update at <code>useEffect</code>,
          make sure that you place the entire <code>formState</code> in the
          optional array.
        </p>

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
return <button disabled={isDirty || isValid} />;
`}
        />
      </>
    ),
    isSubmitSuccessful: <p>Indicate the form was successfully submitted.</p>,
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
              File typed input will need to manage at app level due to the
              ability to cancel file selection and{" "}
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
          <b className={typographyStyles.note}>Important:</b> This prop is
          renamed to <code>dirty</code>. Join the{" "}
          <a
            href="https://github.com/react-hook-form/react-hook-form/discussions/3714"
            target="_blank"
            rel="noopener noreferrer"
          >
            discussion
          </a>
          . An object with the user-modified fields.{" "}
          <p>
            Make sure to provide all inputs' defaultValues at the useForm, so
            hook form can compare with the <code>defaultValue</code>.
          </p>
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
          <b className={typographyStyles.note}>Important:</b> This prop is
          getting deprecated in the next major version and read from{" "}
          <code>formState</code> instead. Join the{" "}
          <a
            href="https://github.com/react-hook-form/react-hook-form/discussions/3714"
            target="_blank"
            rel="noopener noreferrer"
          >
            discussion
          </a>
          .
        </p>
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
    note: (goToSection) => (
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
              <code>defaultValue</code> as the second argument or provide{" "}
              <code>defaultValues</code> at <code>useForm</code> to avoid this
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
              <b className={typographyStyles.note}>Note:</b> when watching{" "}
              <code>useFieldArray</code>
            </p>

            <ul>
              <li>
                <p>
                  When all inputs removed, it will return{" "}
                  <code>defaultValues</code>, you can work around this issue by
                  checking <code>fields.length</code>.
                </p>
              </li>
              <li>
                <p>
                  Input state live inside each field with uncontrolled form, and
                  hence it's important to leave <code>defaultValue</code> for
                  watch API. <code>watch('fieldArray', fields)</code>
                </p>
              </li>
            </ul>
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
          Reset the fields' values and errors. By supplying{" "}
          <code>omitResetState</code>, you have the freedom to only reset
          specific parts of the state. You can pass <code>values</code> as an
          optional argument to reset your form to the assigned default values.
        </p>
        <ul>
          <li>
            <p>
              For controlled components like <code>React-Select</code> which do
              not expose a <code>ref</code> prop, you will have to reset the
              input value manually with{" "}
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
              When you are subscribed/read the <code>formState</code>, it's
              important to decouple <code>reset</code> with{" "}
              <code>handleSubmit</code>, both are update <code>formState</code>{" "}
              and <code>handleSubmit</code> is async by default. You can check
              out a working example below:
            </p>
          </li>
          <li>
            <p>
              When invoking <code>{`reset({ value })`}</code> without supply{" "}
              <code>defaultValues</code> at <code>useForm</code>, hook form will
              replace <code>defaultValues</code> with shallow clone{" "}
              <code>value</code> object which you have supplied (not deepClone).
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
              It's <b className={typographyStyles.note}>important</b> to invoke{" "}
              <code>reset</code> after initializing <code>useFieldArray</code>{" "}
              the order matters. The <code>reset</code> API needs to aware of
              the field array shape before performing a reset properly.
            </p>
          </li>
        </ul>
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
              An error that is not associated with an input field will be
              persisted until cleared with <code>clearErrors</code>.
            </p>
            <p>
              <b className={typographyStyles.note}>Note:</b> for TypeScript
              users, please consider{" "}
              <a
                href="https://www.carlrippon.com/react-hook-form-server-validation/"
                target="_blank"
                rel="noopener noreferrer"
              >
                this approach
              </a>{" "}
              for setting server-side error or outside declared field type.
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
              <code>shouldFocusError</code> doesn't work with input been
              disabled.
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

        <p>
          It's recommended to target field name instead using second argument
          with nested object.
        </p>

        <CodeArea
          rawData={`setValue('yourDetails.firstName', 'value'); // ✅ performant
setValue('yourDetails', { firstName: 'value' }); // less performant `}
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

        <p>
          <b className={typographyStyles.note}>Important: </b>You shouldn't use
          this method inside render. This is suitable for reading values in an
          event handler.
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
          <b className={typographyStyles.note}>Important: </b>To be able to
          efficiently manipulate arrays of uncontrolled components{" "}
          <code>useFieldArray</code> has some rules you need to be aware of:
        </p>

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
              When <code>watch</code>-ing the entire Field Array, it's important
              to supply a default value with <code>fields</code> to avoid empty
              values from getting returned. eg:{" "}
              <code>watch('fieldArray', fields)</code>
            </p>
          </li>
          <li>
            <p>
              When all inputs are removed from the Field Array,{" "}
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
    name={\`data[\${index}].value\`}
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
                (obj: object | object[], shouldFocus: boolean = true) =&gt; void
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
                (obj: object | object[], shouldFocus: boolean = true) =&gt; void
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
                (index: number, value: object | object[], shouldFocus: boolean =
                true) =&gt; void
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
              child component.
            </p>
            <TabGroup buttonLabels={["Standard", "With Focus"]}>
              <CodeArea
                withOutCopy
                url="https://codesandbox.io/s/react-hook-form-v6-controller-qsd8r"
                rawData={`<Controller
  control={control}
  name="test"
  render={(
    { onChange, onBlur, value, name, ref },
    { invalid, isTouched, isDirty }
  ) => (
    <Checkbox
      onBlur={onBlur}
      onChange={(e) => onChange(e.target.checked)}
      checked={value}
      inputRef={ref}
    />
  )}
/>`}
              />
              <CodeArea
                withOutCopy
                url="https://codesandbox.io/s/react-hook-form-focus-74ecu"
                rawData={`<Controller
  render={(props) => (
    <TextField
      value={props.value}
      onChange={props.onChange}
      inputRef={props.ref} // wire up the input ref
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
            <code>as</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>React.ElementType</code>
          </td>
          <td></td>
          <td>
            <p>
              <b className={typographyStyles.note}>Important:</b> This prop is
              getting deprecated in the next major version, use{" "}
              <code>render</code> instead. Join the{" "}
              <a
                href="https://github.com/react-hook-form/react-hook-form/discussions/3714"
                target="_blank"
                rel="noopener noreferrer"
              >
                discussion
              </a>
              .
            </p>
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

            <ul>
              <li>
                <p>
                  The following props will be passed into your component: <br />
                  <code>onChange</code>, <code>onBlur</code>, <code>value</code>
                  , <code>name</code>, <code>ref</code>
                </p>
              </li>

              <li>
                <p>
                  For TypeScript user, if you are using custom component with
                  required fields: <code>onChange</code>, <code>onBlur</code>,{" "}
                  <code>value</code>, It will complain about missing declared
                  field. Please use <code>render</code> instead of{" "}
                  <code>as</code>.
                </p>
              </li>
            </ul>

            <CodeArea
              withOutCopy
              url="https://codesandbox.io/s/react-hook-form-controller-as-prop-k90yy"
              rawData={`<Controller
  // props: onChange, onBlur, ref, name, value
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
            checkbox input. For more details, see useForm's{" "}
            <code>defaultValues</code> section.
            <ul>
              <li>
                <p>
                  You need to either set <code>defaultValue</code> at the
                  field-level or call <code>useForm</code> with{" "}
                  <code>defaultValues</code>.
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

            <ul>
              <li>
                <p>
                  Input focus order is according to registration order, which
                  means native input registered with <code>ref</code> will be
                  the first to be focused on the error due to{" "}
                  <code>Controller</code> registration occurred during{" "}
                  <code>useEffect</code>.
                </p>
              </li>

              <li>
                <p>
                  If your input disabled based on{" "}
                  <code>form.formState.isSubmitting</code>, you must enabled it
                  before invoke focus method.
                </p>
              </li>
            </ul>
            <CodeArea
              withOutCopy
              url="https://codesandbox.io/s/react-hook-form-controllerautofocus-v6-eeo66"
              rawData={`<Controller
  onFocus={() => {
    // when input is been disabled.
    inputRef.current.disabled = false;
    inputRef.current?.focus();
  }}
/>`}
            />
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
      <p>
        This object contains methods for registering components into React Hook
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
          using <code>FormProvider</code>.
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
          </a>{" "}
          and many others. Our goal is to make sure you can seamlessly integrate
          whichever validation library you prefer. If you're not using a
          library, you can always write your own logic to validate your forms.
        </p>

        <p>
          At this time, we offer{" "}
          <a
            href="https://github.com/react-hook-form/resolvers"
            target="_blank"
            rel="noopener noreferrer"
          >
            officially supported resolvers
          </a>{" "}
          for: Yup, Zod, Joi and Superstruct.
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
              This function will be cached, while <code>context</code> is a
              mutable <code>object</code> which can be changed on each
              re-render.
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

          <li>
            <p>
              Resolver can not be used with built-in (eg: required, min and etc)
              validator, and stick with either usage.
            </p>
          </li>
        </ul>
      </>
    ),
  },
  useWatch: {
    title: "useWatch",
    description: (
      <>
        <p>
          Behaves similarly to the <code>watch</code> API, however, this will
          isolate re-rendering at the component level and potentially result in
          better performance for your application.
        </p>
      </>
    ),
  },
  useController: {
    title: "useController",
    description: (
      <>
        <p>
          This custom hook is what powers <code>Controller</code>, and shares
          the same props and methods as <code>Controller</code>. It's useful to
          create reusable Controlled input, while <code>Controller</code> is the
          flexible option to drop into your page or form.
        </p>
        <p>
          Please refer <code>Controller</code> section for this hook's
          arguments. It shares the same arguments except <code>as</code> and{" "}
          <code>renders</code>.
        </p>
      </>
    ),
  },
}
