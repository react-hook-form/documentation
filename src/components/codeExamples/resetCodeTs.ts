export default `import React from "react";
import { useForm } from "react-hook-form";

interface UseFormInputs {
  firstName: string
  lastName: string
}

export default function Form() {
  const { register, handleSubmit, reset, errors } = useForm<UseFormInputs>();
  const onSubmit = (data: UseFormInputs) => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First name</label>
      <input type="text" name="firstName" ref={register({ required: true })} />

      <label>Last name</label>
      <input type="text" name="lastName" ref={register} />

      <input type="submit" />
      <input
        type="reset"
        value="Standard Reset Field Values"
      />
      <input
        type="button"
        onClick={() => reset()}
        value="Custom Reset Field Values & Errors"
      />
    </form>
  );
}
`
