export default `import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
  };
  const { onChange, ...rest } = register("username");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        onChange={(e) => {
          setError("username", {
            type: "manual",
            message: "Dont Forget Your Username Should Be Cool!",
          });
          onChange(e);
        }}
        {...rest}
      />
      {errors.username && <p>{errors.username.message}</p>}

      <button
        type="button"
        onClick={() => {
          setError("test", { type: "focus" }, { shouldFocus: true });
        }}
      >
        Set Error Focus
      </button>
      <input type="submit" />
    </form>
  );
};
`
