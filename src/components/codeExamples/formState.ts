export default `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    // Read the formState before render to subscribe the form state through the Proxy
    formState: { errors, isDirty, isSubmitting, touched, submitCount },
  } = useForm();
  const onSubmit = (data: FormInputs) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("test")} />
      <input type="submit" />
    </form>
  );
}
`
