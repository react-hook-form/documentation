export default `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="singleErrorInput" ref={register({ required: true })} />
      {errors.singleErrorInput && "Your input is required"}

      {/* refer to the type of error to display message accordingly */}
      <input
        name="multipleErrorInput"
        ref={register({ required: true, maxLength: 50 })}
      />
      {errors.multipleErrorInput?.type === "required" &&
        "Your input is required"}
      {errors.multipleErrorInput?.type === "maxLength" &&
        "Your input exceed maxLength"}

      {/* register with validation */}
      <input type="number" name="numberInput" ref={register({ min: 50 })} />
      {errors.numberInput && "Your input required to be more than 50"}

      {/* register with validation and error message */}
      <input
        name="errorMessage"
        ref={register({ required: "This is required" })}
      />
      {errors.errorMessage?.message}
      <input type="submit" />
    </form>
  );
}
`
