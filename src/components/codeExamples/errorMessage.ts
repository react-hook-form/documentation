export default `import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";

export default function App() {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="singleErrorInput" ref={register({ required: 'This is required.' })} />
      <ErrorMessage errors={errors} name="singleErrorInput" />
      
      <input type="submit" />
    </form>
  );
}
`
