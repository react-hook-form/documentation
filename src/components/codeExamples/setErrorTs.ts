export default `import * as React from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  username: string;
};

const App = () => {
  const { register, handleSubmit, setError, formState: { errors } } = useForm<FormInputs>();
  const onSubmit = (data: FormInputs) => {
    console.log(data)
  };

  React.useEffect(() => {
    setError("username", {
      type: "manual",
      message: "Dont Forget Your Username Should Be Cool!"
    });
  }, [setError])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} />
      {errors.username && <p>{errors.username.message}</p>}

      <input type="submit" />
    </form>
  );
};`
