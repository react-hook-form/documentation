import * as React from "react"

export default {
  nestedValue: {
    title: "NestedValue",
    description: (
      <p>
        このタイプは、入力自体がネストされたデータを返す場合に役立ちます
        オブジェクト。
      </p>
    ),
  },
  resolver: {
    title: "Resolver",
    description: (
      <p>
        このタイプは、ユーザーがカスタム検証リゾルバーを作成することをサポートします。
      </p>
    ),
  },
  submitHandler: {
    title: "SubmitHandler",
    description: (
      <p>
        このタイプは、送信されたデータが<code>FormValues</code>
        と一致しない場合に役立ちます タイプ。
      </p>
    ),
  },
  control: {
    title: "Control",
    description: (
      <p>
        このタイプは、<code>useFieldArray</code>、<code>useWatch</code>
        、futureなどのカスタムフックをサポートします
        このライブラリのカスタムフック。
      </p>
    ),
  },
  useFormMethodsRef: {
    title: "UseFormMethodsRef",
    description: (
      <p>
        このタイプは、コンテキストのコンシューマを使用する代わりに便利です。
        <code>useFormContext</code>フック。
      </p>
    ),
  },
  validationRules: {
    title: "ValidationRules",
    description: "",
  },
}
