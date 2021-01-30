export default `import * as React from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  username: string;
  firstName: string;
};

const App = () => {
  const { register, handleSubmit, setError, errors } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Username</label>
      <input
        onChange={() => {
          setError("username", {
            type: "manual",
            message: "Dont Forget Your Username Should Be Cool!"
          });
        }}
        {...register("username")}
      />
      {errors.username && <p>{errors.username.message}</p>}
      <label>First Name</label>
      <input {...register("firstName")} />
      {errors.firstName && <p>{errors.firstName.message}</p>}
      <button
        type="button"
        onClick={() => {
          [
            {
              type: "manual",
              name: "username",
              message: "Double Check This"
            },
            {
              type: "manual",
              name: "firstName",
              message: "Triple Check This"
            }
          ].forEach(({ name, type, message }) =>
            setError(name, { type, message })
          );
        }}
      >
        Trigger Name Errors
      </button>
      <input type="submit" />
    </form>
  );
};
`
