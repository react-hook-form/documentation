import code from "../components/codeExamples/defaultExample"
import * as React from "react"
import Link from "../styles/link"
import { Note, TypeText } from "../styles/typography"
import { CodeAsLink } from "../components/ApiPage"

export default {
  header: {
    description: {
      en:
        "React Hook Form focuses on providing the best DX by simplifying the API.",
      jp: "",
      zh: "",
    },
  },
  useForm: {
    en: {
      title: "useForm",
      intro: (
        <>
          By invoking <code>useForm</code>, you will receive the following
          methods{" "}
        </>
      ),
      description: (
        <p>
          <code>useForm</code> also has <b>optional</b> arguments. The following
          example demonstrates all options' default value.
        </p>
      ),
      validateOnSubmit: (
        <>
          Validation will trigger on the <code>submit</code> event and invalid
          inputs will attach <code>onChange</code> event listeners to
          re-validate them.
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
          input, and lead to multiple re-renders. Not recommended: Consider this
          as a bad performance practice.
        </>
      ),
      defaultValues: goToSection => (
        <>
          <p>
            You can set the input's default value with{" "}
            <code>defaultValue/defaultChecked</code>{" "}
            <Link href="https://reactjs.org/docs/uncontrolled-components.html">
              (read more from the React doc for Default Values)
            </Link>{" "}
            or pass <code>defaultValues</code> as an optional argument to
            populate default values for the entire form.
          </p>

          <p>
            <Note>Note:</Note> Values defined in <code>defaultValues</code> will
            be injected into{" "}
            <CodeAsLink onClick={() => goToSection("watch")}>watch</CodeAsLink>{" "}
            as <code>defaultValue</code>.
          </p>

          <p>
            <Note>Note:</Note> <code>defaultValues</code> doesn't auto populate
            with the manually registered input (eg:{" "}
            <code>{`register({ name: 'test' })`}</code>) because the manual{" "}
            <code>register</code> field does not provide the <code>ref</code> to
            React Hook Form.
          </p>
        </>
      ),
      validationSchema: goToSection => (
        <p>
          Apply form validation rules with <code>Yup</code> at the schema level,
          please refer to the{" "}
          <CodeAsLink onClick={() => goToSection("validationSchema")}>
            validationSchema
          </CodeAsLink>{" "}
          section.
        </p>
      ),
      reValidateMode: (
        <p>
          This option allows you to configure when inputs with errors getd
          re-validated (by default, validation is triggered during an input
          change.)
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
            By default when the user submits a form and that contains an error,
            the first field with an error will be focused.
          </p>

          <p>
            <Note>Note:</Note> Only registered fields with a <code>ref</code>{" "}
            will work. Manually registered inputs won't work. eg:{" "}
            <code>{`register({ name: 'test' }) // doesn't work`}</code>{" "}
          </p>
        </>
      ),
      nativeValidation: goToSection => (
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
          <CodeAsLink onClick={() => goToSection("nativeValidation")}>
            nativeValidation
          </CodeAsLink>{" "}
          section for more details and examples.
        </p>
      ),
    },
    jp: {
      title: "useForm",
      intro: (
        <>
          By invoking <code>useForm</code>, you will receive the following
          methods{" "}
        </>
      ),
      description: (
        <p>
          <code>useForm</code> also has <b>optional</b> arguments. The following
          example demonstrates all options' default value.
        </p>
      ),
      validateOnSubmit: (
        <>
          Validation will trigger on the <code>submit</code> event and invalid
          inputs will attach <code>onChange</code> event listeners to
          re-validate them.
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
          input, and lead to multiple re-renders. Not recommended: Consider this
          as a bad performance practice.
        </>
      ),
      defaultValues: goToSection => (
        <>
          <p>
            You can set the input's default value with{" "}
            <code>defaultValue/defaultChecked</code>{" "}
            <Link href="https://reactjs.org/docs/uncontrolled-components.html">
              (read more from the React doc for Default Values)
            </Link>{" "}
            or pass <code>defaultValues</code> as an optional argument to
            populate default values for the entire form.
          </p>

          <p>
            <Note>Note:</Note> Values defined in <code>defaultValues</code> will
            be injected into{" "}
            <CodeAsLink onClick={() => goToSection("watch")}>watch</CodeAsLink>{" "}
            as <code>defaultValue</code>.
          </p>

          <p>
            <Note>Note:</Note> <code>defaultValues</code> doesn't auto populate
            with the manually registered input (eg:{" "}
            <code>{`register({ name: 'test' })`}</code>) because the manual{" "}
            <code>register</code> field does not provide the <code>ref</code> to
            React Hook Form.
          </p>
        </>
      ),
      validationSchema: goToSection => (
        <p>
          Apply form validation rules with <code>Yup</code> at the schema level,
          please refer to the{" "}
          <CodeAsLink onClick={() => goToSection("validationSchema")}>
            validationSchema
          </CodeAsLink>{" "}
          section.
        </p>
      ),
      reValidateMode: (
        <p>
          This option allows you to configure when inputs with errors getd
          re-validated (by default, validation is triggered during an input
          change.)
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
            By default when the user submits a form and that contains an error,
            the first field with an error will be focused.
          </p>

          <p>
            <Note>Note:</Note> Only registered fields with a <code>ref</code>{" "}
            will work. Manually registered inputs won't work. eg:{" "}
            <code>{`register({ name: 'test' }) // doesn't work`}</code>{" "}
          </p>
        </>
      ),
      nativeValidation: goToSection => (
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
          <CodeAsLink onClick={() => goToSection("nativeValidation")}>
            nativeValidation
          </CodeAsLink>{" "}
          section for more details and examples.
        </p>
      ),
    },
    zh: {
      title: "useForm",
      intro: (
        <>
          By invoking <code>useForm</code>, you will receive the following
          methods{" "}
        </>
      ),
      description: (
        <p>
          <code>useForm</code> also has <b>optional</b> arguments. The following
          example demonstrates all options' default value.
        </p>
      ),
      validateOnSubmit: (
        <>
          Validation will trigger on the <code>submit</code> event and invalid
          inputs will attach <code>onChange</code> event listeners to
          re-validate them.
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
          input, and lead to multiple re-renders. Not recommended: Consider this
          as a bad performance practice.
        </>
      ),
      defaultValues: goToSection => (
        <>
          <p>
            You can set the input's default value with{" "}
            <code>defaultValue/defaultChecked</code>{" "}
            <Link href="https://reactjs.org/docs/uncontrolled-components.html">
              (read more from the React doc for Default Values)
            </Link>{" "}
            or pass <code>defaultValues</code> as an optional argument to
            populate default values for the entire form.
          </p>

          <p>
            <Note>Note:</Note> Values defined in <code>defaultValues</code> will
            be injected into{" "}
            <CodeAsLink onClick={() => goToSection("watch")}>watch</CodeAsLink>{" "}
            as <code>defaultValue</code>.
          </p>

          <p>
            <Note>Note:</Note> <code>defaultValues</code> doesn't auto populate
            with the manually registered input (eg:{" "}
            <code>{`register({ name: 'test' })`}</code>) because the manual{" "}
            <code>register</code> field does not provide the <code>ref</code> to
            React Hook Form.
          </p>
        </>
      ),
      validationSchema: goToSection => (
        <p>
          Apply form validation rules with <code>Yup</code> at the schema level,
          please refer to the{" "}
          <CodeAsLink onClick={() => goToSection("validationSchema")}>
            validationSchema
          </CodeAsLink>{" "}
          section.
        </p>
      ),
      reValidateMode: (
        <p>
          This option allows you to configure when inputs with errors getd
          re-validated (by default, validation is triggered during an input
          change.)
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
            By default when the user submits a form and that contains an error,
            the first field with an error will be focused.
          </p>

          <p>
            <Note>Note:</Note> Only registered fields with a <code>ref</code>{" "}
            will work. Manually registered inputs won't work. eg:{" "}
            <code>{`register({ name: 'test' }) // doesn't work`}</code>{" "}
          </p>
        </>
      ),
      nativeValidation: goToSection => (
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
          <CodeAsLink onClick={() => goToSection("nativeValidation")}>
            nativeValidation
          </CodeAsLink>{" "}
          section for more details and examples.
        </p>
      ),
    },
  },
  unregister: {
    en: (
      <>
        <p>
          This method will allow you to <code>unregister</code> a single input
          or an array of inputs.
        </p>
        <p>
          <Note>Note:</Note> When you unregister an input, its value will no
          longer be included in the form data that gets submitted.
        </p>
      </>
    ),
    jp: (
      <>
        <p>
          This method will allow you to <code>unregister</code> a single input
          or an array of inputs.
        </p>
        <p>
          <Note>Note:</Note> When you unregister an input, its value will no
          longer be included in the form data that gets submitted.
        </p>
      </>
    ),
    zh: (
      <>
        <p>
          This method will allow you to <code>unregister</code> a single input
          or an array of inputs.
        </p>
        <p>
          <Note>Note:</Note> When you unregister an input, its value will no
          longer be included in the form data that gets submitted.
        </p>
      </>
    ),
  },
  register: {
    en: {
      title: "register",
      description: (
        <>
          <p>
            This method allows you to register input/select <code>Ref</code> and
            validation rules into React Hook Form.
          </p>
          <p>
            Validation rules are all based on HTML standard and also allow
            custom validation.
          </p>
          <p>
            <Note>Important:</Note> <code>name</code> is <b>required</b> and{" "}
            <b>unique</b>. Input name also supports dot and bracket syntax,
            which allows you to easily create nested form fields. Example table
            is below:
          </p>
        </>
      ),
      example: "Submit Result",
      options: {
        title: "Register options",
        registerWithValidation: "Register with validation",
        registerWithValidationMessage:
          "Register with validation and error message",
        note: goToSection => (
          <>
            <p>
              <Note>Note:</Note> You can also register inputs manually, which is
              useful when working with custom components and <code>Ref</code> is
              not accessible. This is actually the case when you are working
              with React Native or custom component like{" "}
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
              <code onClick={() => goToSection("setValue")}>setValue</code>,
              because input is no longer registered with its ref.
            </p>

            <p>
              <code>{`register({ name: 'firstName' }, { required: true, min: 8 })`}</code>
            </p>

            <p>
              <Note>Note:</Note> If you want the custom registered input to
              trigger a re-render during its value update, then you should give
              a type to your registered input.
            </p>
          </>
        ),
      },
      validation: {
        required: (
          <>
            A Boolean which, if true, indicates that the input must have a value
            before the form can be submitted. You can assign a string to return
            an error message in the <code>errors</code> object.
          </>
        ),
        maxLength: "The maximum length of the value to accept for this input.",
        minLength: "The minimum length of the value to accept for this input.",
        max: "The maximum value to accept for this input.",
        min: "The minimum value to accept for this input.",
        regex: "The regex pattern for the input.",
        validate: `You can pass a callback function as the argument to validate, or you can pass an object of callback functions to validate all of them. (refer to the examples)`,
      },
    },
    jp: {
      title: "register",
      description: (
        <>
          <p>
            This method allows you to register input/select <code>Ref</code> and
            validation rules into React Hook Form.
          </p>
          <p>
            Validation rules are all based on HTML standard and also allow
            custom validation.
          </p>
          <p>
            <Note>Important:</Note> <code>name</code> is <b>required</b> and{" "}
            <b>unique</b>. Input name also supports dot and bracket syntax,
            which allows you to easily create nested form fields. Example table
            is below:
          </p>
        </>
      ),
      example: "Submit Result",
      options: {
        title: "Register options",
        registerWithValidation: "Register with validation",
        registerWithValidationMessage:
          "Register with validation and error message",
        note: goToSection => (
          <>
            <p>
              <Note>Note:</Note> You can also register inputs manually, which is
              useful when working with custom components and <code>Ref</code> is
              not accessible. This is actually the case when you are working
              with React Native or custom component like{" "}
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
              <code onClick={() => goToSection("setValue")}>setValue</code>,
              because input is no longer registered with its ref.
            </p>

            <p>
              <code>{`register({ name: 'firstName' }, { required: true, min: 8 })`}</code>
            </p>

            <p>
              <Note>Note:</Note> If you want the custom registered input to
              trigger a re-render during its value update, then you should give
              a type to your registered input.
            </p>
          </>
        ),
      },
      validation: {
        required: (
          <>
            A Boolean which, if true, indicates that the input must have a value
            before the form can be submitted. You can assign a string to return
            an error message in the <code>errors</code> object.
          </>
        ),
        maxLength: "The maximum length of the value to accept for this input.",
        minLength: "The minimum length of the value to accept for this input.",
        max: "The maximum value to accept for this input.",
        min: "The minimum value to accept for this input.",
        regex: "The regex pattern for the input.",
        validate: `You can pass a callback function as the argument to validate, or you can pass an object of callback functions to validate all of them. (refer to the examples)`,
      },
    },
    zh: {
      title: "register",
      description: (
        <>
          <p>
            This method allows you to register input/select <code>Ref</code> and
            validation rules into React Hook Form.
          </p>
          <p>
            Validation rules are all based on HTML standard and also allow
            custom validation.
          </p>
          <p>
            <Note>Important:</Note> <code>name</code> is <b>required</b> and{" "}
            <b>unique</b>. Input name also supports dot and bracket syntax,
            which allows you to easily create nested form fields. Example table
            is below:
          </p>
        </>
      ),
      example: "Submit Result",
      options: {
        title: "Register options",
        registerWithValidation: "Register with validation",
        registerWithValidationMessage:
          "Register with validation and error message",
        note: goToSection => (
          <>
            <p>
              <Note>Note:</Note> You can also register inputs manually, which is
              useful when working with custom components and <code>Ref</code> is
              not accessible. This is actually the case when you are working
              with React Native or custom component like{" "}
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
              <code onClick={() => goToSection("setValue")}>setValue</code>,
              because input is no longer registered with its ref.
            </p>

            <p>
              <code>{`register({ name: 'firstName' }, { required: true, min: 8 })`}</code>
            </p>

            <p>
              <Note>Note:</Note> If you want the custom registered input to
              trigger a re-render during its value update, then you should give
              a type to your registered input.
            </p>
          </>
        ),
      },
      validation: {
        required: (
          <>
            A Boolean which, if true, indicates that the input must have a value
            before the form can be submitted. You can assign a string to return
            an error message in the <code>errors</code> object.
          </>
        ),
        maxLength: "The maximum length of the value to accept for this input.",
        minLength: "The minimum length of the value to accept for this input.",
        max: "The maximum value to accept for this input.",
        min: "The minimum value to accept for this input.",
        regex: "The regex pattern for the input.",
        validate: `You can pass a callback function as the argument to validate, or you can pass an object of callback functions to validate all of them. (refer to the examples)`,
      },
    },
  },
  formState: {
    en: {
      title: "formState",
    },
    jp: {
      title: "formState",
    },
    zh: {
      title: "formState",
    },
  },
  errors: {
    en: {
      title: "errors",
    },
    jp: {
      title: "errors",
    },
    zh: {
      title: "errors",
    },
  },
  watch: {
    en: {
      title: "watch",
      description: (
        <>
          <p>This will watch specified input/inputs and return its value.</p>

          <ul>
            <li>
              <p>
                When <code>defaultValue</code> is not defined, the first render
                of <code>watch</code> will return <code>undefined</code> because
                it is called before <code>register</code>, but you can set the{" "}
                <code>defaultValue</code> as the second argument to return
                value.
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
    },
    jp: {
      title: "watch",
      description: (
        <>
          <p>This will watch specified input/inputs and return its value.</p>

          <ul>
            <li>
              <p>
                When <code>defaultValue</code> is not defined, the first render
                of <code>watch</code> will return <code>undefined</code> because
                it is called before <code>register</code>, but you can set the{" "}
                <code>defaultValue</code> as the second argument to return
                value.
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
    },
    zh: {
      title: "watch",
      description: (
        <>
          <p>This will watch specified input/inputs and return its value.</p>

          <ul>
            <li>
              <p>
                When <code>defaultValue</code> is not defined, the first render
                of <code>watch</code> will return <code>undefined</code> because
                it is called before <code>register</code>, but you can set the{" "}
                <code>defaultValue</code> as the second argument to return
                value.
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
    },
  },
  handleSubmit: {
    en: {
      title: "handleSubmit",
      description: (
        <>
          <p>
            This function will pass the form data when form validation is
            successful.
          </p>
          <p>
            <Note>Note:</Note> You can pass an <code>async</code> function for
            asynchronous validation. eg:{" "}
            <code>handleSubmit(async (data) => await fetchAPI(data))</code>
          </p>
        </>
      ),
    },
    jp: {
      title: "handleSubmit",
      description: (
        <>
          <p>
            This function will pass the form data when form validation is
            successful.
          </p>
          <p>
            <Note>Note:</Note> You can pass an <code>async</code> function for
            asynchronous validation. eg:{" "}
            <code>handleSubmit(async (data) => await fetchAPI(data))</code>
          </p>
        </>
      ),
    },
    zh: {
      title: "handleSubmit",
      description: (
        <>
          <p>
            This function will pass the form data when form validation is
            successful.
          </p>
          <p>
            <Note>Note:</Note> You can pass an <code>async</code> function for
            asynchronous validation. eg:{" "}
            <code>handleSubmit(async (data) => await fetchAPI(data))</code>
          </p>
        </>
      ),
    },
  },
  reset: {
    en: goToSection => ({
      title: "reset",
      description: (
        <>
          <p>
            This function will reset the fields' values and errors within the
            form. You can pass <code>values</code> as an optional argument to
            reset your form into assigned default values.
          </p>
          <p>
            <Note>Note:</Note> For controlled components like{" "}
            <code>React-Select</code> which don't expose <code>ref</code>, you
            will have to reset the input value manually through{" "}
            <code onClick={() => goToSection("setValue")}>setValue</code>.
          </p>
        </>
      ),
    }),
    jp: goToSection => ({
      title: "reset",
      description: (
        <>
          <p>
            This function will reset the fields' values and errors within the
            form. You can pass <code>values</code> as an optional argument to
            reset your form into assigned default values.
          </p>
          <p>
            <Note>Note:</Note> For controlled components like{" "}
            <code>React-Select</code> which don't expose <code>ref</code>, you
            will have to reset the input value manually through{" "}
            <code onClick={() => goToSection("setValue")}>setValue</code>.
          </p>
        </>
      ),
    }),
    zh: goToSection => ({
      title: "reset",
      description: (
        <>
          <p>
            This function will reset the fields' values and errors within the
            form. You can pass <code>values</code> as an optional argument to
            reset your form into assigned default values.
          </p>
          <p>
            <Note>Note:</Note> For controlled components like{" "}
            <code>React-Select</code> which don't expose <code>ref</code>, you
            will have to reset the input value manually through{" "}
            <code onClick={() => goToSection("setValue")}>setValue</code>.
          </p>
        </>
      ),
    }),
  },
  setError: {
    en: {
      title: "setError",
      description: <p>Allows you to manually set an input error.</p>,
    },
    jp: {
      title: "setError",
      description: <p>Allows you to manually set an input error.</p>,
    },
    zh: {
      title: "setError",
      description: <p>Allows you to manually set an input error.</p>,
    },
  },
  clearError: {
    en: {
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
    jp: {
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
    zh: {
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
  },
  setValue: {
    en: {
      title: "setValue",
      description: (
        <>
          <p>This function allows you to dynamically set input/select value.</p>
          <p>
            <Note>Note:</Note> By invoking this method, <code>formState</code>{" "}
            will push the input's <code>name</code> into <code>touched</code>.
          </p>
          <p>
            You can also set <code>shouldValidate</code> to <code>true</code>{" "}
            and it will trigger field validation. eg:{" "}
            <code>setValue('name', 'value', true)</code>
          </p>
        </>
      ),
    },
    jp: {
      title: "setValue",
      description: (
        <>
          <p>This function allows you to dynamically set input/select value.</p>
          <p>
            <Note>Note:</Note> By invoking this method, <code>formState</code>{" "}
            will push the input's <code>name</code> into <code>touched</code>.
          </p>
          <p>
            You can also set <code>shouldValidate</code> to <code>true</code>{" "}
            and it will trigger field validation. eg:{" "}
            <code>setValue('name', 'value', true)</code>
          </p>
        </>
      ),
    },
    zh: {
      title: "setValue",
      description: (
        <>
          <p>This function allows you to dynamically set input/select value.</p>
          <p>
            <Note>Note:</Note> By invoking this method, <code>formState</code>{" "}
            will push the input's <code>name</code> into <code>touched</code>.
          </p>
          <p>
            You can also set <code>shouldValidate</code> to <code>true</code>{" "}
            and it will trigger field validation. eg:{" "}
            <code>setValue('name', 'value', true)</code>
          </p>
        </>
      ),
    },
  },
  getValues: {
    en: {
      title: "getValues",
      description: (
        <>
          <p>This function will return the entire form data.</p>

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
    jp: {
      title: "getValues",
      description: (
        <>
          <p>This function will return the entire form data.</p>

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
    zh: {
      title: "getValues",
      description: (
        <>
          <p>This function will return the entire form data.</p>

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
  },
  triggerValidation: {
    en: {
      title: "triggerValidation",
      description: (
        <>
          <p>To manually trigger an input/select validation in the form.</p>
          <p>
            <Note>Note:</Note> When validation fails, the <code>errors</code>{" "}
            object will be updated.
          </p>
        </>
      ),
    },
    jp: {
      title: "triggerValidation",
      description: (
        <>
          <p>To manually trigger an input/select validation in the form.</p>
          <p>
            <Note>Note:</Note> When validation fails, the <code>errors</code>{" "}
            object will be updated.
          </p>
        </>
      ),
    },
    zh: {
      title: "triggerValidation",
      description: (
        <>
          <p>To manually trigger an input/select validation in the form.</p>
          <p>
            <Note>Note:</Note> When validation fails, the <code>errors</code>{" "}
            object will be updated.
          </p>
        </>
      ),
    },
  },
  reactNative: {
    en: {
      title: "React Native",
      description: (
        <p>
          You will get the same performance enhancement from an Uncontrolled
          Component. However, there are certain APIs which are not compatible
          with React Native (duo to the API difference from web and native). You
          will have to use a <b>manual register</b> as shown in the following
          example.
        </p>
      ),
    },
    jp: {
      title: "React Native",
      description: (
        <p>
          You will get the same performance enhancement from an Uncontrolled
          Component. However, there are certain APIs which are not compatible
          with React Native (duo to the API difference from web and native). You
          will have to use a <b>manual register</b> as shown in the following
          example.
        </p>
      ),
    },
    zh: {
      title: "React Native",
      description: (
        <p>
          You will get the same performance enhancement from an Uncontrolled
          Component. However, there are certain APIs which are not compatible
          with React Native (duo to the API difference from web and native). You
          will have to use a <b>manual register</b> as shown in the following
          example.
        </p>
      ),
    },
  },
  validationSchema: {
    en: {
      title: "validationSchema",
      description: (
        <p>
          If you would like to centralize your validation rules with external
          validation schema, you can apply <code>validationSchema</code> at{" "}
          <code>useForm</code> as an optional argument. React Hook Form
          currently supports{" "}
          <Link
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </Link>{" "}
          for object schema validation.
        </p>
      ),
    },
    jp: {
      title: "validationSchema",
      description: (
        <p>
          If you would like to centralize your validation rules with external
          validation schema, you can apply <code>validationSchema</code> at{" "}
          <code>useForm</code> as an optional argument. React Hook Form
          currently supports{" "}
          <Link
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </Link>{" "}
          for object schema validation.
        </p>
      ),
    },
    zh: {
      title: "validationSchema",
      description: (
        <p>
          If you would like to centralize your validation rules with external
          validation schema, you can apply <code>validationSchema</code> at{" "}
          <code>useForm</code> as an optional argument. React Hook Form
          currently supports{" "}
          <Link
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </Link>{" "}
          for object schema validation.
        </p>
      ),
    },
  },
  NativeValidation: {
    en: {
      title: "NativeValidation",
      description: (
        <p>
          The following example demonstrates how you can leverage the browser's
          validation. You only need to set <code>nativeValidation</code> to{" "}
          <code>true</code> and the rest of the syntax is the same as standard
          validation.
        </p>
      ),
    },
    jp: {
      title: "NativeValidation",
      description: (
        <p>
          The following example demonstrates how you can leverage the browser's
          validation. You only need to set <code>nativeValidation</code> to{" "}
          <code>true</code> and the rest of the syntax is the same as standard
          validation.
        </p>
      ),
    },
    zh: {
      title: "NativeValidation",
      description: (
        <p>
          The following example demonstrates how you can leverage the browser's
          validation. You only need to set <code>nativeValidation</code> to{" "}
          <code>true</code> and the rest of the syntax is the same as standard
          validation.
        </p>
      ),
    },
  },
  typeScript: {
    en: {
      title: "TypeScript",
      description: (
        <p>
          React Hook Form is built with <code>Typescript</code>, so you can
          define a <code>FormData</code> type to support form values.
        </p>
      ),
    },
    jp: {
      title: "TypeScript",
      description: (
        <p>
          React Hook Form is built with <code>Typescript</code>, so you can
          define a <code>FormData</code> type to support form values.
        </p>
      ),
    },
    zh: {
      title: "TypeScript",
      description: (
        <p>
          React Hook Form is built with <code>Typescript</code>, so you can
          define a <code>FormData</code> type to support form values.
        </p>
      ),
    },
  },
  formContext: {
    en: {
      title: "FormContext",
      introduction: (
        <p>
          Form context is intended to solve the problem when there are deep
          nested inputs in your components tree, and passing methods deep down
          as <code>prop</code> becomes painful.
        </p>
      ),
      description: (
        <>
          <p>
            Once your form is wrapped with <code>FormContext</code>, the{" "}
            <code>useFormContext</code>: <TypeText>function</TypeText> can be
            invoked in its child component.
          </p>
          <p>
            <Note>Note:</Note> invoking <code>useFormContext</code> will give
            you all of the <code>useForm</code> hook functions.
          </p>
        </>
      ),
    },
    jp: {
      title: "FormContext",
      introduction: (
        <p>
          Form context is intended to solve the problem when there are deep
          nested inputs in your components tree, and passing methods deep down
          as <code>prop</code> becomes painful.
        </p>
      ),
      description: (
        <>
          <p>
            Once your form is wrapped with <code>FormContext</code>, the{" "}
            <code>useFormContext</code>: <TypeText>function</TypeText> can be
            invoked in its child component.
          </p>
          <p>
            <Note>Note:</Note> invoking <code>useFormContext</code> will give
            you all of the <code>useForm</code> hook functions.
          </p>
        </>
      ),
    },
    zh: {
      title: "FormContext",
      introduction: (
        <p>
          Form context is intended to solve the problem when there are deep
          nested inputs in your components tree, and passing methods deep down
          as <code>prop</code> becomes painful.
        </p>
      ),
      description: (
        <>
          <p>
            Once your form is wrapped with <code>FormContext</code>, the{" "}
            <code>useFormContext</code>: <TypeText>function</TypeText> can be
            invoked in its child component.
          </p>
          <p>
            <Note>Note:</Note> invoking <code>useFormContext</code> will give
            you all of the <code>useForm</code> hook functions.
          </p>
        </>
      ),
    },
  },
}
