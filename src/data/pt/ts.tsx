import * as React from "react"

export default {
  nestedValue: {
    title: "NestedValue",
    description: (
      <p>
        Esse tipo será útil quando a própria entrada retornar dados aninhados
        objeto.
      </p>
    ),
  },
  resolver: {
    title: "Resolver",
    description: (
      <p>
        Esse tipo dará suporte aos usuários para escrever um resolvedor de
        validação personalizado.
      </p>
    ),
  },
  submitHandler: {
    title: "SubmitHandler",
    description: (
      <p>
        Esse tipo é útil quando os dados enviados não correspondem aos
        <code>FormValues</code> tipo.
      </p>
    ),
  },
  control: {
    title: "Control",
    description: (
      <p>
        Esse tipo suporta gancho personalizado, como <code>useFieldArray</code>,{" "}
        <code>useWatch</code> e future ganchos personalizados nesta biblioteca.
      </p>
    ),
  },
  useFormMethodsRef: {
    title: "UseFormMethodsRef",
    description: (
      <p>
        Esse tipo é útil quando você está usando o consumidor do contexto em vez
        de gancho <code>useFormContext</code>.
      </p>
    ),
  },
  validationRules: {
    title: "ValidationRules",
    description: "",
  },
}
