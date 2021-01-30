export default `import * as React from "react";
import { useForm } from "react-hook-form";

import "./styles.css";

type FormInputs = {
  firstName: string;
  lastName: string;
  username: string;
};

const App = () => {
  const { register, errors, handleSubmit, clearErrors } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register({ required: true })} />
      <input name="lastName" ref={register({ required: true })} />
      <input name="username" ref={register({ required: true })} />
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
