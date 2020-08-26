import * as React from "react"

export default {
  nestedValue: {
    title: "NestedValue",
    description: (
      <p>
        Этот тип будет полезен, когда сам вход возвращает вложенные данные
        объект.
      </p>
    ),
  },
  resolver: {
    title: "Resolver",
    description: (
      <p>
        Этот тип будет поддерживать пользователей для написания собственного
        распознавателя проверки.
      </p>
    ),
  },
  submitHandler: {
    title: "SubmitHandler",
    description: (
      <p>
        Этот тип полезен, когда отправленные данные не совпадают с{" "}
        <code>FormValues</code>
        тип.
      </p>
    ),
  },
  control: {
    title: "Control",
    description: (
      <p>
        Этот тип поддерживает пользовательский хук, такой как{" "}
        <code>useFieldArray</code>,<code>useWatch</code> и future
        пользовательские хуки в этой библиотеке.
      </p>
    ),
  },
  useFormMethodsRef: {
    title: "UseFormMethodsRef",
    description: (
      <p>
        Этот тип полезен, когда вы используете <code>Consumer</code> вместо{" "}
        <code>Context</code>
        перехватывай <code>useFormContext</code>.
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
    title: "ValidationRules",
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
