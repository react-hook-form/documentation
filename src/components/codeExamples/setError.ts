export default `import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
