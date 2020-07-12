export default `import React from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  test: string
}

export default function App() {
  const { register, handleSubmit, errors, formState } = useForm<FormInputs>();
  const onSubmit = (data: FormInputs) => console.log(data);
  
  // Read the formState before render to subscribe the form state through Proxy
  const { isDirty, isSubmitting, touched, submitCount } = formState;
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="test" ref={register} />
      <input type="submit" />
    </form>
  );
}`
