export default `import React from "react";
import { useForm } from "react-hook-form";

interface IFormInputs {
  password: string
}

export default function App() {
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>({
    // by setting criteriaMode to 'all',
    // all validation errors for single field will display at once
    criteriaMode: "all",
    mode: "onChange"
  });

  const onSubmit = (data: IFormInputs) => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Password</label>
      <input
        type="password"
        {...register("password", { required: true, minLength: 10, pattern: /\d+/gi })}
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
