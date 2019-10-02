export default `import React from "react"
import useForm from "react-hook-form"

type FormData = {
  firstName: string,
  lastName: string
}

export default function App() {
  const { register, setValue, handleSubmit } = useForm<FormData>()
  const onSubmit = handleSubmit(({ name, email }) => {}) // firstName and lastName will have correct type

  return (
    <form onSubmit={onSubmit}>
      <input name="firstName" ref={register} />
      <input name="lastName" ref={register} />
      <button
        type="button"
        onClick={() => {
          setValue(lastName, "luo") // ✅
          setValue(firstName, true) // ❌: true is not string
          errors.bill // ❌: property bill does not exist
        }}
      >
        SetValue
      </button>
    </form>
  )
}
`
