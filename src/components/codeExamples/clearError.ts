export default `import * as React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, formState: { errors }, handleSubmit, clearErrors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName', { required: true })} />
      <input {...register('lastName', { required: true })} />
      <input {...register('username', { required: true })} />
      <button type="button" onClick={() => clearErrors("firstName")}>
        Clear First Name Errors
      </button>
      <button
        type="button"
        onClick={() => clearErrors(["firstName", "lastName"])}
      >
        Clear First and Last Name Errors
      </button>
      <button type="button" onClick={() => clearErrors()}>
        Clear All Errors
      </button>
      <input type="submit" />
    </form>
  );
};
`
