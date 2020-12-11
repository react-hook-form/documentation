export default `import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

export default function App() {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="singleErrorInput" ref={register({ required: "This is required." })} />
      <ErrorMessage errors={errors} name="singleErrorInput" />
      
      <ErrorMessage
        errors={errors}
        name="singleErrorInput"
        render={({ message }) => <p>{message}</p>}
      />
      
      <input type="submit" />
    </form>
  );
}
`
