import * as React from "react"

export default {
  nestedValue: {
    title: "NestedValue",
    description: (
      <p>
        このタイプは、インプット自体がネストされたオブジェクトデータを返す場合に役立ちます。
      </p>
    ),
  },
  resolver: {
    title: "Resolver",
    description: (
      <p>
        このタイプは、ユーザーがカスタムバリデーションリゾルバーを作成することをサポートします。
      </p>
    ),
  },
  submitHandler: {
    title: "SubmitHandler",
    description: (
      <p>
        このタイプは、送信されたデータが<code>FormValues</code>
        と一致しない場合に役立ちます。
      </p>
    ),
  },
  control: {
    title: "Control",
    description: (
      <p>
        このタイプは、このライブラリにある
        <code>useFieldArray</code>、<code>useWatch</code>
        、そして将来のカスタムフックなどをサポートします。
      </p>
    ),
  },
  useFormMethodsRef: {
    title: "UseFormMethodsRef",
    description: (
      <p>
        このタイプは、<code>useFormContext</code>フックの代わりに
        <code>Context</code>の<code>Consumer</code>を使う際に便利です。
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
