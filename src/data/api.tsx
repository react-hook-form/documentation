import code from "../components/codeExamples/defaultExample"
import * as React from "react"
import Link from "../styles/link"
import { Note } from "../styles/typography"
import { CodeAsLink, CodeHeading, Type } from "../components/ApiPage"

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
    intro: {
      en: (
        <>
          By invoking <code>useForm</code>, you will receive the following
          methods{" "}
        </>
      ),
      jp: (
        <>
          By invoking <code>useForm</code>, you will receive the following
          methods{" "}
        </>
      ),
      zh: (
        <>
          By invoking <code>useForm</code>, you will receive the following
          methods{" "}
        </>
      ),
    },
    description: {
      en: (
        <p>
          <code>useForm</code> also has <b>optional</b> arguments. The following
          example demonstrate all options' default value.
        </p>
      ),
      jp: (
        <p>
          <code>useForm</code> also has <b>optional</b> arguments. The following
          example demonstrate all options' default value.
        </p>
      ),
      zh: (
        <p>
          <code>useForm</code> also has <b>optional</b> arguments. The following
          example demonstrate all options' default value.
        </p>
      ),
    },
    validateOnSubmit: {
      en: (
        <>
          Validation will trigger on the <code>submit</code> event and invalid
          inputs will attach <code>onChange</code> event listeners to
          re-validate them.
        </>
      ),
      jp: (
        <>
          Validation will trigger on the <code>submit</code> event and invalid
          inputs will attach <code>onChange</code> event listeners to
          re-validate them.
        </>
      ),
      zh: (
        <>
          Validation will trigger on the <code>submit</code> event and invalid
          inputs will attach <code>onChange</code> event listeners to
          re-validate them.
        </>
      ),
    },
    validateOnBlur: {
      en: (
        <>
          Validation will trigger on the <code>blur</code> event.
        </>
      ),
      jp: (
        <>
          Validation will trigger on the <code>blur</code> event.
        </>
      ),
      zh: (
        <>
          Validation will trigger on the <code>blur</code> event.
        </>
      ),
    },
    validateOnChange: {
      en: (
        <>
          Validation will trigger on the <code>change</code> event with each
          input, and lead to multiple re-renders. Not recommended: Consider this
          as a bad performance practice.
        </>
      ),
      jp: (
        <>
          Validation will trigger on the <code>change</code> event with each
          input, and lead to multiple re-renders. Not recommended: Consider this
          as a bad performance practice.
        </>
      ),
      zh: (
        <>
          Validation will trigger on the <code>change</code> event with each
          input, and lead to multiple re-renders. Not recommended: Consider this
          as a bad performance practice.
        </>
      ),
    },
    defaultValues: goToSection => ({
      en: (
        <>
          <p>
            You can set input's default value with{" "}
            <code>defaultValue/defaultChecked</code>{" "}
            <Link href="https://reactjs.org/docs/uncontrolled-components.html">
              (read more at React doc for Default Values)
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
            with manually registered input (eg:
            <code>{`register({ name: 'test' })`}</code>) because manual{" "}
            <code>register</code> field is not providing <code>ref</code> to
            React Hook Form.
          </p>
        </>
      ),
      jp: (
        <>
          <p>
            You can set input's default value with{" "}
            <code>defaultValue/defaultChecked</code>{" "}
            <Link href="https://reactjs.org/docs/uncontrolled-components.html">
              (read more at React doc for Default Values)
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
            with manually registered input (eg:
            <code>{`register({ name: 'test' })`}</code>) because manual{" "}
            <code>register</code> field is not providing <code>ref</code> to
            React Hook Form.
          </p>
        </>
      ),
      zh: (
        <>
          <p>
            You can set input's default value with{" "}
            <code>defaultValue/defaultChecked</code>{" "}
            <Link href="https://reactjs.org/docs/uncontrolled-components.html">
              (read more at React doc for Default Values)
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
            with manually registered input (eg:
            <code>{`register({ name: 'test' })`}</code>) because manual{" "}
            <code>register</code> field is not providing <code>ref</code> to
            React Hook Form.
          </p>
        </>
      ),
    }),
    validationSchema: goToSection => ({
      en: (
        <p>
          Apply form validation rules with <code>Yup</code> at the schema level,
          please refer the{" "}
          <CodeAsLink onClick={() => goToSection("validationSchema")}>
            validationSchema
          </CodeAsLink>{" "}
          section.
        </p>
      ),
      jp: (
        <p>
          Apply form validation rules with <code>Yup</code> at the schema level,
          please refer the{" "}
          <CodeAsLink onClick={() => goToSection("validationSchema")}>
            validationSchema
          </CodeAsLink>{" "}
          section.
        </p>
      ),
      zh: (
        <p>
          Apply form validation rules with <code>Yup</code> at the schema level,
          please refer the{" "}
          <CodeAsLink onClick={() => goToSection("validationSchema")}>
            validationSchema
          </CodeAsLink>{" "}
          section.
        </p>
      ),
    }),
    reValidateMode: {
      en: (
        <p>
          This option allow you to config when input with errors gets
          re-validate, by default it's triggered during input change.
        </p>
      ),
      jp: (
        <p>
          This option allow you to config when input with errors gets
          re-validate, by default it's triggered during input change.
        </p>
      ),
      zh: (
        <p>
          This option allow you to config when input with errors gets
          re-validate, by default it's triggered during input change.
        </p>
      ),
    },
    validationFields: {
      en: (
        <p>
          Providing an array of fields means only included fields will be
          validated. This option is useful when you want to toggle which fields
          are required to validate.
        </p>
      ),
      jp: (
        <p>
          Providing an array of fields means only included fields will be
          validated. This option is useful when you want to toggle which fields
          are required to validate.
        </p>
      ),
      zh: (
        <p>
          Providing an array of fields means only included fields will be
          validated. This option is useful when you want to toggle which fields
          are required to validate.
        </p>
      ),
    },
    submitFocusError: {
      en: (
        <>
          <p>
            By default when the user submits a form and that contains an error,
            the first field with an error will be focused.
          </p>

          <p>
            <Note>Note:</Note> Only registered fields with <code>ref</code> will
            work. Manually registered inputs won't work. eg:{" "}
            <code>{`register({ name: 'test' }) // doesn't work`}</code>{" "}
          </p>
        </>
      ),
      jp: (
        <>
          <p>
            By default when the user submits a form and that contains an error,
            the first field with an error will be focused.
          </p>

          <p>
            <Note>Note:</Note> Only registered fields with <code>ref</code> will
            work. Manually registered inputs won't work. eg:{" "}
            <code>{`register({ name: 'test' }) // doesn't work`}</code>{" "}
          </p>
        </>
      ),
      zh: (
        <>
          <p>
            By default when the user submits a form and that contains an error,
            the first field with an error will be focused.
          </p>

          <p>
            <Note>Note:</Note> Only registered fields with <code>ref</code> will
            work. Manually registered inputs won't work. eg:{" "}
            <code>{`register({ name: 'test' }) // doesn't work`}</code>{" "}
          </p>
        </>
      ),
    },
    nativeValidation: goToSection => ({
      en: (
        <p>
          Setting this option to <code>true</code> will enable browser's native
          validation. You can{" "}
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
          section for more detail and example.
        </p>
      ),
      jp: (
        <p>
          Setting this option to <code>true</code> will enable browser's native
          validation. You can{" "}
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
          section for more detail and example.
        </p>
      ),
      zh: (
        <p>
          Setting this option to <code>true</code> will enable browser's native
          validation. You can{" "}
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
          section for more detail and example.
        </p>
      ),
    }),
  },
  unregister: {
    en: (
      <>
        <p>
          This method will allow you to <code>unregister</code> a single input or
          an array of inputs.
        </p>
        <p>
          <Note>Note:</Note> When you unregister an input, its value will no longer
          be included in the form data that gets submitted.
        </p>
      </>
    ),
    jp: (
      <>
        <p>
          This method will allow you to <code>unregister</code> a single input or
          an array of inputs.
        </p>
        <p>
          <Note>Note:</Note> When you unregister an input, its value will no longer
          be included in the form data that gets submitted.
        </p>
      </>
    ),
    zh: (
      <>
        <p>
          This method will allow you to <code>unregister</code> a single input or
          an array of inputs.
        </p>
        <p>
          <Note>Note:</Note> When you unregister an input, its value will no longer
          be included in the form data that gets submitted.
        </p>
      </>
    ),
  },
  register: {
    description: {
      en: (
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
            <b>unique</b>. Input name also support dot and bracket syntax, which
            allow you to easily create nested form fields. Example table is
            below:
          </p>
        </>
      ),
      jp: (
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
            <b>unique</b>. Input name also support dot and bracket syntax, which
            allow you to easily create nested form fields. Example table is
            below:
          </p>
        </>
      ),
      zh: (
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
            <b>unique</b>. Input name also support dot and bracket syntax, which
            allow you to easily create nested form fields. Example table is
            below:
          </p>
        </>
      ),
    },
    example: {
      en: "Submit Result",
      jp: "",
      zh: "",
    },
    options: {
      en: {
        title: "Register options",
        registerWithValidation: "Register with validation",
        registerWithValidationMessage:
          "Register with validation and error message",
        note: goToSection => (
          <>
            <p>
              <Note>Note:</Note> You can also register input manually, which is
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
              By using custom register, you will need to update the input value
              with <code onClick={() => goToSection("setValue")}>setValue</code>
              , because input is no longer registered with its ref.
            </p>

            <p>
              <code>{`register({ name: 'firstName' }, { required: true, min: 8 })`}</code>
            </p>

            <p>
              <Note>Note:</Note> If you want custom register input to trigger
              re-render during value update, then you should give a type to your
              registered input.
            </p>
          </>
        ),
      },
      jp: {
        title: "Register options",
        registerWithValidation: "Register with validation",
        registerWithValidationMessage:
          "Register with validation and error message",
        note: goToSection => (
          <>
            <p>
              <Note>Note:</Note> You can also register input manually, which is
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
              By using custom register, you will need to update the input value
              with <code onClick={() => goToSection("setValue")}>setValue</code>
              , because input is no longer registered with its ref.
            </p>

            <p>
              <code>{`register({ name: 'firstName' }, { required: true, min: 8 })`}</code>
            </p>

            <p>
              <Note>Note:</Note> If you want custom register input to trigger
              re-render during value update, then you should give a type to your
              registered input.
            </p>
          </>
        ),
      },
      zh: {
        title: "Register options",
        registerWithValidation: "Register with validation",
        registerWithValidationMessage:
          "Register with validation and error message",
        note: goToSection => (
          <>
            <p>
              <Note>Note:</Note> You can also register input manually, which is
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
              By using custom register, you will need to update the input value
              with <code onClick={() => goToSection("setValue")}>setValue</code>
              , because input is no longer registered with its ref.
            </p>

            <p>
              <code>{`register({ name: 'firstName' }, { required: true, min: 8 })`}</code>
            </p>

            <p>
              <Note>Note:</Note> If you want custom register input to trigger
              re-render during value update, then you should give a type to your
              registered input.
            </p>
          </>
        ),
      },
    },
    validation: {
      en: {
        required: (
          <>
            A Boolean which, if true, indicates that the input must have a value
            before the form can be submitted. you can assign as string to return
            error message in the <code>errors</code> object.
          </>
        ),
        maxLength: "The maximum length of the value to accept for this input.",
        minLength: "The minimum length of the value to accept for this input.",
        max: "The maximum value to accept for this input.",
        min: "The minimum value to accept for this input.",
        regex: "The regex pattern for the input.",
        validate: `You can pass a callback function as the argument to validate, or you can pass an object of callback functions to validate all of them. (refer to the examples)`,
      },
      jp: {
        required: (
          <>
            A Boolean which, if true, indicates that the input must have a value
            before the form can be submitted. you can assign as string to return
            error message in the <code>errors</code> object.
          </>
        ),
        maxLength: "The maximum length of the value to accept for this input.",
        minLength: "The minimum length of the value to accept for this input.",
        max: "The maximum value to accept for this input.",
        min: "The minimum value to accept for this input.",
        regex: "The regex pattern for the input.",
        validate: `You can pass a callback function as the argument to validate, or you can pass an object of callback functions to validate all of them. (refer to the examples)`,
      },
      zh: {
        required: (
          <>
            A Boolean which, if true, indicates that the input must have a value
            before the form can be submitted. you can assign as string to return
            error message in the <code>errors</code> object.
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
  handleSubmit: {
    en: (
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
    jp: (
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
    zh: (
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
  reset: goToSection => ({
    en: (
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
    jp: (
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
    zh: (
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
  setError: {
    en: <p>Allows you to manually set an input error.</p>,
    jp: <p>Allows you to manually set an input error.</p>,
    zh: <p>Allows you to manually set an input error.</p>,
  },
  clearError: {
    en: (
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
    jp: (
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
    zh: (
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
    en: (
      <>
        <p>This function allows you to dynamically set input/select value.</p>
        <p>
          <Note>Note:</Note> By invoking this method, <code>formState</code>{" "}
          will push input's <code>name</code> into <code>touched</code>.
        </p>
        <p>
          You can also set <code>shouldValidate</code> to <code>true</code> and
          it will trigger field validation. eg:{" "}
          <code>setValue('name', 'value', true)</code>
        </p>
      </>
    ),
    jp: (
      <>
        <p>This function allows you to dynamically set input/select value.</p>
        <p>
          <Note>Note:</Note> By invoking this method, <code>formState</code>{" "}
          will push input's <code>name</code> into <code>touched</code>.
        </p>
        <p>
          You can also set <code>shouldValidate</code> to <code>true</code> and
          it will trigger field validation. eg:{" "}
          <code>setValue('name', 'value', true)</code>
        </p>
      </>
    ),
    zh: (
      <>
        <p>This function allows you to dynamically set input/select value.</p>
        <p>
          <Note>Note:</Note> By invoking this method, <code>formState</code>{" "}
          will push input's <code>name</code> into <code>touched</code>.
        </p>
        <p>
          You can also set <code>shouldValidate</code> to <code>true</code> and
          it will trigger field validation. eg:{" "}
          <code>setValue('name', 'value', true)</code>
        </p>
      </>
    ),
  },
  getValues: {
    en: (
      <>
        <p>This function will return the entire form data.</p>

        <ul>
          <li>
            By default <code>getValues()</code> will return form data in a flat
            structure. eg: <code>{`{ test: 'data', test1: 'data1'}`}</code>
          </li>
          <li>
            Working on array fields form,{" "}
            <code>getValues({`{ nest: true }`})</code> will return data in a
            nested structure according to input <code>name</code>. eg:{" "}
            <code>{`{ test: [1, 2], test1: { data: '23' } }`}</code>
          </li>
        </ul>
      </>
    ),
    jp: (
      <>
        <p>This function will return the entire form data.</p>

        <ul>
          <li>
            By default <code>getValues()</code> will return form data in a flat
            structure. eg: <code>{`{ test: 'data', test1: 'data1'}`}</code>
          </li>
          <li>
            Working on array fields form,{" "}
            <code>getValues({`{ nest: true }`})</code> will return data in a
            nested structure according to input <code>name</code>. eg:{" "}
            <code>{`{ test: [1, 2], test1: { data: '23' } }`}</code>
          </li>
        </ul>
      </>
    ),
    zh: (
      <>
        <p>This function will return the entire form data.</p>

        <ul>
          <li>
            By default <code>getValues()</code> will return form data in a flat
            structure. eg: <code>{`{ test: 'data', test1: 'data1'}`}</code>
          </li>
          <li>
            Working on array fields form,{" "}
            <code>getValues({`{ nest: true }`})</code> will return data in a
            nested structure according to input <code>name</code>. eg:{" "}
            <code>{`{ test: [1, 2], test1: { data: '23' } }`}</code>
          </li>
        </ul>
      </>
    ),
  },
  triggerValidation: {
    en: (
      <>
        <p>To manually trigger an input/select validation in the form.</p>
        <p>
          <Note>Note:</Note> When validation fails, the <code>errors</code>{" "}
          object will be updated.
        </p>
      </>
    ),
    jp: (
      <>
        <p>To manually trigger an input/select validation in the form.</p>
        <p>
          <Note>Note:</Note> When validation fails, the <code>errors</code>{" "}
          object will be updated.
        </p>
      </>
    ),
    zh: (
      <>
        <p>To manually trigger an input/select validation in the form.</p>
        <p>
          <Note>Note:</Note> When validation fails, the <code>errors</code>{" "}
          object will be updated.
        </p>
      </>
    ),
  },
  reactNative: {
    en: (
      <p>
        You will get the same performance enhancement from Uncontrolled
        Component. However, there are certain API which isn't compatible with
        React Native (duo to the API difference from web and native). We will
        have to use <b>custom register</b> in the following example.
      </p>
    ),
    jp: (
      <p>
        You will get the same performance enhancement from Uncontrolled
        Component. However, there are certain API which isn't compatible with
        React Native (duo to the API difference from web and native). We will
        have to use <b>custom register</b> in the following example.
      </p>
    ),
    zh: (
      <p>
        You will get the same performance enhancement from Uncontrolled
        Component. However, there are certain API which isn't compatible with
        React Native (duo to the API difference from web and native). We will
        have to use <b>custom register</b> in the following example.
      </p>
    ),
  },
  validationSchema: {
    en: (
      <p>
        If you would like to centralize your validation rules with external
        validation schema, you can apply <code>validationSchema</code> at{" "}
        <code>useForm</code> as an optional argument. React Hook Form currently
        supports{" "}
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
    jp: (
      <p>
        If you would like to centralize your validation rules with external
        validation schema, you can apply <code>validationSchema</code> at{" "}
        <code>useForm</code> as an optional argument. React Hook Form currently
        supports{" "}
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
    zh: (
      <p>
        If you would like to centralize your validation rules with external
        validation schema, you can apply <code>validationSchema</code> at{" "}
        <code>useForm</code> as an optional argument. React Hook Form currently
        supports{" "}
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
  NativeValidation: {
    en: (
      <p>
        The following example demonstrates how you can leverage the browser's
        validation. You only need to set <code>nativeValidation</code> to{" "}
        <code>true</code> and rest of the syntax is the same as standard
        validation.
      </p>
    ),
    jp: (
      <p>
        The following example demonstrates how you can leverage the browser's
        validation. You only need to set <code>nativeValidation</code> to{" "}
        <code>true</code> and rest of the syntax is the same as standard
        validation.
      </p>
    ),
    zh: (
      <p>
        The following example demonstrates how you can leverage the browser's
        validation. You only need to set <code>nativeValidation</code> to{" "}
        <code>true</code> and rest of the syntax is the same as standard
        validation.
      </p>
    ),
  },
  TypeScript: {
    en: (
      <p>
        React Hook Form is built with <code>Typescript</code>, so you can define{" "}
        <code>FormData</code> type to support form values.
      </p>
    ),
    jp: (
      <p>
        React Hook Form is built with <code>Typescript</code>, so you can define{" "}
        <code>FormData</code> type to support form values.
      </p>
    ),
    zh: (
      <p>
        React Hook Form is built with <code>Typescript</code>, so you can define{" "}
        <code>FormData</code> type to support form values.
      </p>
    ),
  },
  FormContext: {
    en: {
      introduction: (
        <p>
          Form context is aim to solve problem when there are deep nested inputs
          in your components tree, and pass methods deep down as{" "}
          <code>prop</code> becoming painful.
        </p>
      ),
      description: (
        <>
          <p>
            Once your form is wrapped with <code>FormContext</code>,{" "}
            <code>useFormContext</code>: <Type>Function</Type> can be invoked in
            its child component.
          </p>
          <p>
            <Note>Note:</Note> invoke <code>useFormContext</code> will give you
            all the <code>useForm</code> hook functions.
          </p>
        </>
      ),
    },
    jp: {
      introduction: (
        <p>
          Form context is aim to solve problem when there are deep nested inputs
          in your components tree, and pass methods deep down as{" "}
          <code>prop</code> becoming painful.
        </p>
      ),
      description: (
        <>
          <p>
            Once your form is wrapped with <code>FormContext</code>,{" "}
            <code>useFormContext</code>: <Type>Function</Type> can be invoked in
            its child component.
          </p>
          <p>
            <Note>Note:</Note> invoke <code>useFormContext</code> will give you
            all the <code>useForm</code> hook functions.
          </p>
        </>
      ),
    },
    zh: {
      introduction: (
        <p>
          Form context is aim to solve problem when there are deep nested inputs
          in your components tree, and pass methods deep down as{" "}
          <code>prop</code> becoming painful.
        </p>
      ),
      description: (
        <>
          <p>
            Once your form is wrapped with <code>FormContext</code>,{" "}
            <code>useFormContext</code>: <Type>Function</Type> can be invoked in
            its child component.
          </p>
          <p>
            <Note>Note:</Note> invoke <code>useFormContext</code> will give you
            all the <code>useForm</code> hook functions.
          </p>
        </>
      ),
    },
  },
}
