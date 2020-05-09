import * as React from "react"
import colors from "../../styles/colors"
import Popup from "../../components/Popup"
import CodeArea from "../../components/CodeArea"
import useFieldArrayArgument from "../../components/codeExamples/useFieldArrayArgument"
import typographyStyles from "../../styles/typography.module.css"
import buttonStyles from "../../styles/button.module.css"
import code from "../../components/codeExamples/defaultExample"

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
      </>
    ),
    description: (
      <p>
        <code>useForm</code> also has <b>optional</b> arguments. The following
        example demonstrates all options' default value.
      </p>
    ),
    validateCriteriaMode: (
      <>
        <p>
          When set to <code>firstError</code> (default), only first error from
          each field will be gathered.
        </p>
        <p>
          When set to <code>all</code>, all errors from each field will be
          gathered.
        </p>
      </>
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
          This context object will be injected into{" "}
          <code>validationResolver</code>'s second argument or{" "}
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
        significant impact on performances.
      </>
    ),
    defaultValues: (goToSection) => (
      <>
        <p>
          You can set the input's default value with{" "}
          <code>defaultValue/defaultChecked</code>{" "}
          <a
            className={buttonStyles.links}
            href="https://reactjs.org/docs/uncontrolled-components.html"
          >
            (read more from the React doc for Default Values)
          </a>{" "}
          or pass <code>defaultValues</code> as an optional argument to populate
          default values for the entire form.
        </p>

        <p>
          <b className={typographyStyles.note}>Important:</b>{" "}
          <code>defaultValues</code> is cached within the custom hook, if you
          want to reset <code>defaultValues</code> please use{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("reset")}
          >
            reset
          </button>{" "}
          api.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> Values defined in{" "}
          <code>defaultValues</code> will be injected into{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("watch")}
          >
            watch
          </button>{" "}
          as <code>defaultValue</code>.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b>{" "}
          <code>defaultValues</code> doesn't auto populate with the manually
          registered input (eg: <code>{`register({ name: 'test' })`}</code>)
          because the manual <code>register</code> field does not provide the{" "}
          <code>ref</code> to React Hook Form.
        </p>
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
        re-validated (by default, validation is triggered during an input
        change.) <Popup />
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
          <b className={typographyStyles.note}>Note:</b> Only registered fields
          with a <code>ref</code> will work. Manually registered inputs won't
          work. eg: <code>{`register({ name: 'test' }) // doesn't work`}</code>{" "}
        </p>
      </>
    ),
    nativeValidation: (goToSection) => (
      <p>
        Setting this option to <code>true</code> will enable the browser's
        native validation. You can{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
        >
          find out more about the built-in browser validation
        </a>
        , and refer to the{" "}
        <button
          className={buttonStyles.codeAsLink}
          onClick={() => goToSection("nativeValidation")}
        >
          nativeValidation
        </button>{" "}
        section for more details and examples.
      </p>
    ),
  },
  unregister: {
    title: "unregister",
    description: (
      <>
        <p>
          This method will allow you to <code>unregister</code> a single input
          or an array of inputs. This is useful when you used a custom register
          in <code>useEffect</code> and want to unregister it when the component
          unmounts.
        </p>
        <p>
          <b className={typographyStyles.note}>Note:</b> When you unregister an
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
          This method allows you to register input/select <code>Ref</code> and
          validation rules into React Hook Form.
        </p>
        <p>
          Validation rules are all based on HTML standard and also allow custom
          validation.
        </p>
        <p>
          <b className={typographyStyles.note}>Important:</b> <code>name</code>{" "}
          is <b>required</b> and <b>unique</b>. Input name also supports dot and
          bracket syntax, which allows you to easily create nested form fields.
          Example table is below:
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
        If you working on <code>arrays/array fields</code>, you can assign an
        input name as <code>name[index]</code>.{" "}
        <a
          className={buttonStyles.links}
          href="https://github.com/react-hook-form/react-hook-form/blob/master/examples/FieldArray.tsx"
          title="example for Field Array"
        >
          Check out the Field Array example
        </a>
        .
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
            is actually the case when you are working with React Native or
            custom component like{" "}
            <a
              href="https://github.com/JedWatson/react-select"
              target="_blank"
              rel="noopener noreferrer"
            >
              react-select
            </a>
            .
          </p>

          <p>
            By using a custom register call, you will need to update the input
            value with{" "}
            <button
              className={buttonStyles.codeAsLink}
              onClick={() => goToSection("setValue")}
            >
              setValue
            </button>
            , because input is no longer registered with its ref.
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
        <p>This object contain information about the form state.</p>

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
          reduces re-render feature only applies to the Web platform due to a
          lack of support on Proxy at React Native.
        </p>
      </>
    ),
    dirty: "Set to true after a user interacted with any of the inputs.",
    isSubmitted:
      "Set true after a user submitted the form. After a form's submission, its' state will remain submitted until invoked with reset method.",
    dirtyFields: "A unique set of user modified fields.",
    touched:
      "An object containing all the inputs the user has interacted with.",
    isSubmitting: (
      <>
        <code>true</code> if the form is currently being submitted.{" "}
        <code>false</code> otherwise.
      </>
    ),
    submitCount: "Number of times the form was submitted.",
    isValid: "Set to true if the form doesn't have any error.",
  },
  errors: {
    title: "errors",
    description: (currentLanguage) => (
      <>
        <p>
          Object containing form errors and error messages corresponding to each
          input.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> Difference between V3
          and V4:
        </p>

        <ul>
          <li>
            <p>V4: Nested objects</p>
            <p>
              <strong>Reason:</strong> optional chaining is getting widely
              adopted and allows better support for types..
            </p>
            <p>
              <code>{`errors?.yourDetail?.firstName;`}</code>
            </p>
          </li>
          <li>
            <p>V3: Flatten object</p>
            <p>
              <strong>Reason:</strong> simple and easy to access error.
            </p>
            <p>
              <code>{`errors['yourDetail.firstName'];`}</code>
            </p>
          </li>
        </ul>
      </>
    ),
    types: (
      <>
        This is useful when you want to return all validation errors for a
        single input. For instance, a password field that is required to have a
        minimum length AND contain a special character. Note that you need to
        set <code>validateCriteriaMode</code> to
        <code>'all'</code> for this option to work properly.
      </>
    ),
    message: `If you registered your input with an error message, then it will be put in this field. Otherwise it's an empty string by default.`,
    ref: `Reference for your input element.`,
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
              <code>defaultValue</code> as the second argument to return value.
            </p>
          </li>
          <li>
            <p>
              However, if <code>defaultValues</code> was initialised in{" "}
              <code>useForm</code> as argument, then the first render will
              return what's provided in <code>defaultValues</code>.
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
      nest: "Watch all inputs and return nested object",
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
            handleSubmit(async (data) => await fetchAPI(data))
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
          form. By supply <code>omitResetState</code>, you have the freedom to
          only reset specific piece of state. You can pass <code>values</code>{" "}
          as an optional argument to reset your form into assigned default
          values.
        </p>
        <p>
          <b className={typographyStyles.note}>Note:</b> For controlled
          components like <code>React-Select</code> which don't expose{" "}
          <code>ref</code>, you will have to reset the input value manually
          through{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("setValue")}
          >
            setValue
          </button>{" "}
          or using{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("Controller")}
          >
            Controller
          </button>{" "}
          to wrap around your controlled component.
        </p>
        <p>
          <b className={typographyStyles.note}>Note: </b> You will need to
          supply <code>defaultValues</code> at <code>useForm</code> to{" "}
          <code>reset</code> <code>Controller</code> components' value.
        </p>
      </>
    ),
  }),
  setError: {
    title: "setError",
    description: (
      <>
        <p>The function allows you to manually set one or multiple errors.</p>
        <p>
          <b className={typographyStyles.note}>Note:</b> This method will not
          persist the error and block the submit action. It's more useful during{" "}
          <code>handleSubmit</code> function when you want to give error
          feedback to the users after async validation.
        </p>
      </>
    ),
  },
  clearError: {
    title: "clearError",
    description: (
      <ul>
        <li>
          <p>
            <code>undefined</code>: reset all errors
          </p>
        </li>
        <li>
          <p>
            <code>string</code>: reset single error
          </p>
        </li>
        <li>
          <p>
            <code>string[]</code>: reset multiple errors
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
          This function allows you to dynamically set{" "}
          <strong>
            <code>registered</code>
          </strong>{" "}
          input/select value. At the same time, it tries to avoid re-rendering
          when it's not necessary. Only the following conditions will trigger a
          re-render:
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
              When setValue is invoked for the first time and formState{" "}
              <code>dirty</code> is set to true
            </p>
          </li>
          <li>
            <p>
              When setValue is invoked and formState <code>touched</code> is
              updated
            </p>
          </li>
        </ul>
        <p>
          <b className={typographyStyles.note}>Note:</b> By invoking this
          method, <code>formState</code> will set the input to{" "}
          <code>touched</code>.
        </p>
        <p>
          You can also set the <code>shouldValidate</code> parameter to{" "}
          <code>true</code>
          in order to trigger a field validation. eg:{" "}
          <code>setValue('name', 'value', true)</code>
        </p>
      </>
    ),
  },
  getValues: {
    title: "getValues",
    description: (
      <>
        <p>
          This function will return the entire form data, and it's useful when
          you want to retrieve form values.
        </p>

        <ul>
          <li>
            <p>
              By default <code>getValues()</code> will return form data in a
              flat structure. eg:{" "}
              <code>{`{ test: 'data', test1: 'data1'}`}</code>
            </p>
          </li>
          <li>
            <p>
              Working on the defined form fields,{" "}
              <code>getValues({`{ nest: true }`})</code> will return data in a
              nested structure according to input <code>name</code>. eg:{" "}
              <code>{`{ test: [1, 2], test1: { data: '23' } }`}</code>
            </p>
          </li>
        </ul>
      </>
    ),
  },
  triggerValidation: {
    title: "triggerValidation",
    description: (
      <>
        <p>To manually trigger an input/select validation in the form.</p>
        <p>
          <b className={typographyStyles.note}>Note:</b> When validation fails,
          the <code>errors</code> object will be updated.
        </p>
      </>
    ),
  },
  validationSchema: {
    title: "validationSchema",
    description: (
      <p>
        If you would like to centralize your validation rules as an external
        validation schema, you can use the <code>validationSchema</code>{" "}
        parameter. React Hook Form currently supports{" "}
        <a
          className={buttonStyles.links}
          href="https://github.com/jquense/yup"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yup
        </a>{" "}
        for object schema validation.
      </p>
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

        <p>This hook provides the following object and functions.</p>

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
              you can populate the <code>fields</code> by supply{" "}
              <code>defaultValues</code> at <code>useForm</code> hook.
            </p>
          </li>
          <li>
            <p>
              make sure you assign <code>id</code> from <code>fields</code>{" "}
              object as your component key.
            </p>
          </li>
          <li>
            <p>
              make sure to set <code>defaultValue</code> to{" "}
              <code>fields[index]</code> when you want to set default value,
              remove or reset with inputs.
            </p>
          </li>
          <li>
            <p>
              you can not call actions one after another. Actions need to be
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
              It doesn't work with custom register at <code>useEffect</code>.
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
                (obj: object | object[]) => void
              </code>
            </code>
          </td>
          <td>Append input/inputs to the end of your fields</td>
        </tr>
        <tr>
          <td>
            <code>prepend</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (obj: object | object[]) => void
              </code>
            </code>
          </td>
          <td>Prepend input/inputs to the start of your fields</td>
        </tr>
        <tr>
          <td>
            <code>insert</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (index: number, value: object) => void
              </code>
            </code>
          </td>
          <td>Insert input/inputs at particular position.</td>
        </tr>
        <tr>
          <td>
            <code>swap</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (from: number, to: number) => void
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
                (from: number, to: number) => void
              </code>
            </code>
          </td>
          <td>
            Move input/inputs to another position.
            <p>
              <b className={typographyStyles.note}>Note:</b> difference between{" "}
              <code>move</code> and <code>swap</code>, keep calling{" "}
              <code>move</code> will push input/inputs in a circle, while{" "}
              <code>swap</code> only change two input/inputs' position.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>remove</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (index?: number | number[]) => void
              </code>
            </code>
          </td>
          <td>
            Remove input/inputs at particular position, or remove all when no
            index is provided.
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
            <code>as</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              React.ElementType | string
            </code>
          </td>
          <td>✓</td>
          <td>
            Controlled component. eg: <code>as="input"</code>,{" "}
            <code>{`as={<TextInput />}`}</code> or{" "}
            <code>{`as={TextInput}`}</code>.
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
          <td>
            <code>control</code> object is from invoking <code>useForm</code>.
            it's optional if you are using FormContext.
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
            The same as uncontrolled component's <code>defaultValue</code>, when
            supply <code>boolean</code> value, it will be treated as checkbox
            input.
            <p>
              <b className={typographyStyles.note}>Note:</b> you will need to
              supply either <code>defaultValue</code> or{" "}
              <code>defaultValues</code> at <code>useForm</code>
            </p>
            <p>
              <b className={typographyStyles.note}>Note</b>: if your form will
              invoke <code>reset</code> with default values, you will need to
              provide <code>defaultValues</code> at useForm level instead of set
              inline <code>defaultValue</code>.
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
            Validation rules according to <code>register</code>.
          </td>
        </tr>
        <tr>
          <td>
            <code>onChange</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (args: any | EventTarget) => any
            </code>
          </td>
          <td></td>
          <td>
            This prop allows you to customize the return value, make sure you
            aware the shape of the external component <code>value</code> props.{" "}
            <code>value</code> or <code>checked</code> attribute will be read
            when payload's shape is an <code>object</code> which contains{" "}
            <code>type</code> attribute.
            <CodeArea
              withOutCopy
              rawData={`onChange={{([ event ]) => event.target.value}}
onChange={{([ { checked } ]) => ({ checked })}}`}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>onChangeName</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>string</code>
          </td>
          <td></td>
          <td>
            This prop allows you to target a specific event name for{" "}
            <code>onChange</code>, eg: when <code>onChange</code> event is named{" "}
            <code>onTextChange</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>onFocus</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>() => void</code>
          </td>
          <td></td>
          <td>
            <p>
              This callback allows the custom hook to focus on the input when
              there is an error. This function is applicable for both React and
              React-Native components as long as they can be focused.
            </p>
            <p>
              Here is a{" "}
              <a
                href="https://codesandbox.io/s/react-hook-form-controller-auto-focus-5tru5"
                target="_blank"
                rel="noopener noreferrer"
              >
                working example with MUI
              </a>
              .
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>onBlurName</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>string</code>
          </td>
          <td></td>
          <td>
            This prop allows you to target a specific event name for{" "}
            <code>onBlur</code>, eg: when <code>onBlur</code> event is named{" "}
            <code>onTextBlur</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>valueName</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>string</code>
          </td>
          <td></td>
          <td>
            This prop allows you to support inputs that doesn't use a prop
            called <code>value</code>. eg: <code>checked</code>,{" "}
            <code>selected</code> and etc.
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
        <p>
          Every prop you pass to the Controller component will be forwarded to
          the component instance you provided with the <code>as</code> prop. For
          instance, if you have a custom <code>Switch</code> component that
          requires a <code>label</code> prop, you can pass it to the Controller
          component directly and it will take care of forwarding the prop for
          you. The <code>name</code> prop will be used mainly to access the
          value through the form later.
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
    description: (
      <p>
        <b className={typographyStyles.note}>Note:</b> invoking{" "}
        <code>useFormContext</code> will give you all of the{" "}
        <code>useForm</code> hook functions.
      </p>
    ),
  },
  control: {
    title: "control",
    description: (
      <p>
        This object is made for React Hook Form's Controller component, which
        contains methods for registering controlled component into React Hook
        Form.
      </p>
    ),
  },
  ErrorMessage: {
    title: "ErrorMessage",
    description: (
      <p>A simple component to render associated input's error message.</p>
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
          <td>associated field name.</td>
        </tr>
        <tr>
          <td>
            <code>errors</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>object</code>
          </td>
          <td></td>
          <td>
            <code>errors</code> object from React Hook Form. It's optional if
            you are using <code>FormContext</code>.
          </td>
        </tr>
        <tr>
          <td>
            <code>message</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>string</code>
          </td>
          <td></td>
          <td>inline error message.</td>
        </tr>
        <tr>
          <td>
            <code>as</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              React.ElementType | string
            </code>
          </td>
          <td></td>
          <td>
            Wrapper component or HTML tag. eg: <code>as="span"</code> or{" "}
            <code>{`as={<Text />}`}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>children</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              ({`{ message: string, messages?: string[]}`}) => any
            </code>
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
            </a>{" "}
            for rendering error message or messages.
            <p>
              <b className={typographyStyles.note}>Note:</b> you need to set{" "}
              validateCriteriaMode to 'all' for using <code>messages</code>.
            </p>
          </td>
        </tr>
      </tbody>
    ),
  },
  NativeValidation: {
    title: "Browser built-in validation",
    description: (
      <>
        <p>
          The following example demonstrates how you can leverage the browser's
          validation. You only need to set <code>nativeValidation</code> to{" "}
          <code>true</code> and the rest of the syntax is the same as standard
          validation.
        </p>
        <p>
          <b className={typographyStyles.note}>Note</b>: This feature has been
          removed in V4 due to low usage, but you can still use it in V3
        </p>
      </>
    ),
  },
  validationResolver: {
    title: "validationResolver",
    description: (
      <>
        <p>
          This function allow you to run any external validation methods, such
          as{" "}
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
          and etc. In fact, the goal is not only limited Yup as our external
          (schema) validation library. We would like to support many other
          validation libraries to work with React Hook Form. You can even write
          your custom validation logic to validate.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> make sure you are
          returning object which contains <code>values</code> and{" "}
          <code>errors</code>, and their default value should be{" "}
          <code>{`{}`}</code>.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> returning errors
          object's key should be relevant to your inputs.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> this function will be
          cached inside the custom hook similar as <code>validationSchema</code>
          , while <code>validationContext</code> is a mutable object which can
          be changed on each re-render.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> re-validate input will
          only occur one field at time during user’s interaction, because the
          lib itself will evaluate the error object to the specific field and
          trigger re-render accordingly.
        </p>
      </>
    ),
  },
}
