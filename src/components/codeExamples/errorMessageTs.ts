export default `import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

interface FormInputs {
  singleErrorInput: string
}

export default function App() {
  const { register, formState: { errors }, handleSubmit } = useForm<FormInputs>();
  const onSubmit = (data: FormInputs) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("singleErrorInput", { required: "This is required." })} />
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
