import * as React from "react"

export default {
  nestedValue: {
    title: "NestedValue",
    description: (
      <p>
        This type will be useful when the input itself return nested data
        object.
      </p>
    ),
  },
  resolver: {
    title: "Resolver",
    description: (
      <p>This type will support users to write custom validation resolver.</p>
    ),
  },
  submitHandler: {
    title: "SubmitHandler",
    description: (
      <p>
        This type is useful when submitted data is not matching with{" "}
        <code>FormValues</code>
        type.
      </p>
    ),
  },
  control: {
    title: "Control",
    description: (
      <p>
        This type support custom hook such as <code>useFieldArray</code>,{" "}
        <code>useWatch</code> and future custom hooks in this library.
      </p>
    ),
  },
  useFormMethodsRef: {
    title: "UseFormMethods",
    description: (
      <p>
        This type is useful when you are using <code>Context</code>'s{" "}
        <code>Consumer</code> instead of&nbsp;
        <code>useFormContext</code> hook.
      </p>
    ),
  },
  useFormOptions: {
    title: "UseFormOptions",
    description: "",
  },
  useFieldArrayOptions: {
    title: "UseFieldArrayOptions",
    description: "",
  },
  fieldError: {
    title: "FieldError",
    description: "",
  },
  fieldErrors: {
    title: "FieldErrors",
    description: "",
  },
  field: {
    title: "Field",
    description: "",
  },
  fieldValues: {
    title: "FieldValues",
    description: "",
  },
  mode: {
    title: "Mode",
    description: "",
  },
  validationRules: {
    title: "RegisterOptions",
    description: "",
  },
  arrayField: {
    title: "ArrayField",
    description: "",
  },
  formStateProxy: {
    title: "FormStateProxy",
    description: "",
  },
}
