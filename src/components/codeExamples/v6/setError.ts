export default `import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, setError, errors } = useForm();
  const onSubmit = data => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="username"
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
