import code from "../components/codeExamples/defaultExample"
import * as React from "react"
import Link from "../styles/link"
import { Note } from "../styles/typography"
import { CodeAsLink, CodeHeading } from "../components/ApiPage"

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
      jp: {},
      zh: {},
    },
    description: {
      en: (
        <p>
          <code>useForm</code> also has <b>optional</b> arguments. The following
          example demonstrate all options' default value.
        </p>
      ),
      jp: {},
      zh: {},
    },
    validateOnSubmit: {
      en: (
        <>
          Validation will trigger on the <code>submit</code> event and invalid
          inputs will attach <code>onChange</code> event listeners to
          re-validate them.
        </>
      ),
      jp: {},
      zh: {},
    },
    validateOnBlur: {
      en: (
        <>
          Validation will trigger on the <code>blur</code> event.
        </>
      ),
      jp: {},
      zh: {},
    },
    validateOnChange: {
      en: (
        <>
          Validation will trigger on the <code>change</code> event with each
          input, and lead to multiple re-renders. Not recommended: Consider this
          as a bad performance practice.
        </>
      ),
      jp: {},
      zh: {},
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
      jp: {},
      zh: {},
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
      jp: {},
      zh: {},
    }),
    reValidateMode: {
      en: (
        <p>
          This option allow you to config when input with errors gets
          re-validate, by default it's triggered during input change.
        </p>
      ),
      jp: {},
      zh: {},
    },
    validationFields: {
      en: (
        <p>
          Providing an array of fields means only included fields will be
          validated. This option is useful when you want to toggle which fields
          are required to validate.
        </p>
      ),
      jp: {},
      zh: {},
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
      jp: {},
      zh: {},
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
      jp: {},
      zh: {},
    }),
  },
  unregister: {
    en: (
      <p>
        This method will allow you to <code>unregister</code> a single input or
        an array of inputs.
      </p>
    ),
    jp: {},
    zh: {},
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
    jp: {},
    zh: {},
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
    jp: {},
    zh: {},
  }),
  setError: {
    en: <p>Allows you to manually set an input error.</p>,
    jp: "",
    zh: "",
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
    jp: "",
    zh: "",
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
    jp: {},
    zh: {},
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
    jp: {},
    zh: {},
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
    jp: {},
    zh: {},
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
    jp: {},
    zh: {},
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
    jp: {},
    zh: {},
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
    jp: {},
    zh: {},
  },
  TypeScript: {
    en: (
      <p>
        React Hook Form is built with <code>Typescript</code>, so you can define{" "}
        <code>FormData</code> type to support form values.
      </p>
    ),
    jp: {},
    zh: {},
  },
}
