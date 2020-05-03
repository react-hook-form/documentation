export default `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        aria-invalid={errors.firstName ? "true" : "false"}
        aria-describedby="firstNameError"
        name="firstName"
        ref={register({ required: true })}
      />
      <span id="firstNameError" style={{ display: errors.firstName ? "block" : "none" }}>
        This field is required
      </span>

      <input type="submit" />
    </form>
  );
}`
