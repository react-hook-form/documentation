export default `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("singleErrorInput", { required: true })} />
      {errors.singleErrorInput && "Your input is required"}

      {/* refer to the type of error to display message accordingly */}
      <input {...register("multipleErrorInput", { required: true, maxLength: 50 })} />
      {errors.multipleErrorInput?.type === "required" && "Your input is required"}
      {errors.multipleErrorInput?.type === "maxLength" && "Your input exceed maxLength"}

      {/* register with validation */}
      <input type="number" {...register("numberInput", { min: 50 })} />
      {errors.numberInput && "Your input required to be more than 50"}

      {/* register with validation and error message */}
      <input {...register("errorMessage", { required: "This is required" })} />
      {errors.errorMessage?.message}

      <input type="submit" />
    </form>
  );
}
`
