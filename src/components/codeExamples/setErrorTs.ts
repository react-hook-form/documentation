export default `import * as React from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  username: string;
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
        name="username"
        type="text"
        onChange={() => {
          setError("username", {
            type: "manual",
            message: "Dont Forget Your Username Should Be Cool!"
          });
        }}
        ref={register}
      />
      {errors.username && <p>{errors.username.message}</p>}
      <input type="submit" />
    </form>
  );
};`
