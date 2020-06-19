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
        Этот тип полезен, когда отправленные данные не совпадают с FormValues
        тип.
      </p>
    ),
  },
  control: {
    title: "Control",
    description: (
      <p>
        Этот тип поддерживает пользовательский хук, такой как useFieldArray,
        useWatch и future пользовательские хуки в этой библиотеке.
      </p>
    ),
  },
  useFormMethodsRef: {
    title: "UseFormMethodsRef",
    description: (
      <p>
        Этот тип полезен, когда вы используете Consumer вместо Context
        перехватывай useFormContext.
      </p>
    ),
  },
}
