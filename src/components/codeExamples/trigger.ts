export default `import React from "react"
import useForm from "react-hook-form"

export default function App() {
  const { register, triggerValidation, errors } = useForm()
  console.log(errors)
  
  return (
    <form>
      <input name="firstName" ref={register({ required: true })} />
      <input name="lastName" ref={register({ required: true })} />
      <button
        type="button"
        onClick={async () => {
          console.log("firstName validation result: ", await triggerValidation({ name: 'firstName' }))
         
          // you can trigger validation with value. It is useful for custom input when ref is not registered
          await triggerValidation({ name: 'lastName', value: 'test' })
          
          // you can trigger multiple fields validation
          await triggerValidation([{ name: 'lastName' }, { name: 'firstName' }])
          
          // you can trigger the entire form validation by supply empty argument
          await triggerValidation()
        }}
      >
        Trigger
      </button>
    </form>
  )
}`
