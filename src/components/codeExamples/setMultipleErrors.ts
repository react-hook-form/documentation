export default `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, errors, setError } = useForm()

  return (
    <form>
      <input name="username" ref={register} />
      {errors.username && errors.username.message}
      
      <input name="lastName" ref={register} />
      {errors.lastName && errors.lastName.message}
      
      <button type="button" onClick={() => {
        setError([
          {
            type: 'required',
            name: 'lastName',
            message: 'This is required.',
          },
          {
            type: 'minLength',
            name: 'username',
            message: 'Minlength is 10',
          },
        ]);
      }}>
        Set Errors for a single field
      </button>
    </form>
  )
}`
