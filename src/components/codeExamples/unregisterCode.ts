export default `import React from "react"
import useForm from "react-hook-form"

export default function YourForm() {
  const { register, handleSubmit, unregister } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="firstName" ref={register} />
      <input type="text" name="lastName" ref={register} />
      <button type="button" onClick={() => unregister('lastName')}>unregister</button>
      <input type="submit" />
    </form>
  )
}`
