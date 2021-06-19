export default `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
  const onSubmit = async data => { console.log(data); };

  // you can still disabled the native validation, CSS selectors such as
  // invalid and valid still going to work 
  // <form onSubmit={handleSubmit(onSubmit)} novalidate>

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", { required: "Please enter your first name." })} // custom message
      />
      <input type="submit" />
    </form>
  );
}
`
