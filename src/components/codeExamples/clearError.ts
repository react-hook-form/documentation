export default `import * as React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, errors, handleSubmit, clearErrors } = useForm();

  const onSubmit = data => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" type="text" ref={register({ required: true })} />
      {errors.firstName && <p>This Field is Required</p>}
      <input name="lastName" type="text" ref={register({ required: true })} />
      {errors.lastName && <p>This Field is Required</p>}
      <input name="username" type="text" ref={register({ required: true })} />
      {errors.username && <p>This Field is Required</p>}
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
