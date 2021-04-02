export default `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, formState: { errors }, handleSubmit } = useForm({
    // by setting criteriaMode to 'all', 
    // all validation errors for single field will display at once
    criteriaMode: "all"
  });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="password"
        {...register("password", { required: true, minLength: 10, pattern: /\\d+/ })}
      />
      {/* without enter data for the password input will result both messages to appear */}
      {errors?.password?.types?.required && <p>password required</p>}
      {errors?.password?.types?.minLength && <p>password minLength 10</p>}
      {errors?.password?.types?.pattern && <p>password number only</p>}

      <input type="submit" />
    </form>
  );
}
`
