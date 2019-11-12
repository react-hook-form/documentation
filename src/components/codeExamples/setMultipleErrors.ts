export default `import React from "react";
import useForm from "react-hook-form";

export default function App() {
  const { register, errors, setError } = useForm({
    validateCriteriaMode: 'all' // you will need to enable validate all criteria mode
  })

  return (
    <form>
      <input name="username" ref={register} />
      {errors.username && errors.username.message}
      
      <button type="button" onClick={() => setError({
        setError([
          {
            type: 'required',
            name: 'username',
            message: 'This is required.',
          },
          {
            type: 'minLength',
            name: 'username',
            message: 'Minlength is 10',
          },
        ]);
      })}>
        Set Errors for a single field
      </button>
    </form>
  )
}`
