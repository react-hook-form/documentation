export default `import React from "react"
import useForm from "react-hook-form"

export default function YourForm() {
  const { register, setValue } = useForm()

  return (
    <form>
      <input name="test" ref={register} />
      <button type="button" onClick={() => {
        // manually set the 'test' field with value 'bill'
        setValue('test', 'bill')
      }}>SetValue</button>
    </form>
  )
}`
