export default `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm({ nativeValidation: true });
  const onSubmit = async data => { console.log(data); };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", { required: "Please enter your first name." })} // custom message
      />
      <input {...register("lastName", { required: true })} />
      <input type="submit" />
    </form>
  );
}
`
