import * as React from "react"

export default {
  nestedValue: {
    title: "NestedValue",
    description: (
      <p>
        Este tipo será útil cuando la entrada en sí misma devuelva datos
        anidados objeto.
      </p>
    ),
  },
  resolver: {
    title: "Resolver",
    description: (
      <p>
        Este tipo ayudará a los usuarios a escribir un solucionador de
        validación personalizado.
      </p>
    ),
  },
  submitHandler: {
    title: "SubmitHandler",
    description: (
      <p>
        Este tipo es útil cuando los datos enviados no coinciden con{" "}
        <code>FormValues</code>
        tipo.
      </p>
    ),
  },
  control: {
    title: "Control",
    description: (
      <p>
        Este tipo admite enlaces personalizados como <code>useFieldArray</code>,{" "}
        <code>useWatch</code> y future ganchos personalizados en esta
        biblioteca.
      </p>
    ),
  },
  useFormMethodsRef: {
    title: "UseFormMethodsRef",
    description: (
      <p>
        Este tipo es útil cuando está utilizando el consumidor de contexto en
        lugar de <code>useFormContext</code> hook.
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
  field: {
    title: "Field",
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
}
