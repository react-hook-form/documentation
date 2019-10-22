export default `
import React from "react"
import useForm, { FormContext, useFormContext } from "react-hook-form"

export default function App() {
  const methods = useForm()
  const onSubmit = data => { console.log(data) }

  return (
    <FormContext {...methods} > // pass all methods into the context
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <NestedInput />
        <input type="submit" />
      </form>
    </FormContext>
  )
}

function NestedInput() {
  const { register } = useFormContext() // retrieve all hook methods
  return <input name="test" ref={register} />
}
`
