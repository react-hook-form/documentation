export default `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First name</label>
      <input
        id="firstName"
        type="text"
        aria-invalid={errors.firstName ? "true" : "false"}
        name="firstName"
        ref={register({ required: true })}
      />
      { errors.firstName && (
          <span role="alert">
            This field is required
          </span>
        )
      }

      <input type="submit" />
    </form>
  );
}`
