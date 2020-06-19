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
        This type is useful when submitted data is not matching with FormValues
        type.
      </p>
    ),
  },
  control: {
    title: "Control",
    description: (
      <p>
        This type support custom hook such as useFieldArray, useWatch and future
        custom hooks in this library.
      </p>
    ),
  },
  useFormMethodsRef: {
    title: "UseFormMethods",
    description: (
      <p>
        This type is useful when you are using Context's Consumer instead of
        useFormContext hook.
      </p>
    ),
  },
}
