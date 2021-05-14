export default `import React from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  test: string
}

export default function App() {
  const {
    register,
    handleSubmit,
    // Read the formState before render to subscribe the form state through Proxy
    formState: { errors, isDirty, isSubmitting, touched, submitCount },
  } = useForm<FormInputs>();
  const onSubmit = (data: FormInputs) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("test")} />
      <input type="submit" />
    </form>
  );
}
`
