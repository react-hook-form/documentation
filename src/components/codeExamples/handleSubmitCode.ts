export default `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <input name="firstName" ref={register} />
      <input name="lastName" ref={register} />
      <button type="submit">Submit</button>
    </form>
  );
}`
