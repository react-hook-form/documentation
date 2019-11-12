export default `import React from "react";
import useForm from "react-hook-form";

export default function App() {
  const { register, setError } = useForm({
    validateCriteriaMode: "all" // you will need to enable validate all criteria mode
  });

  return (
    <form>
      <input name="username" ref={register} />
      {errors.username && errors.username.types && (
        <p>{errors.username.types.required}</p>
      )}
      {errors.username && errors.username.types && (
        <p>{errors.username.types.minLength}</p>
      )}

      <button
        type="button"
        onClick={() =>
          setError("username", {
            required: "This is required",
            minLength: "This is minLength"
          })
        }
      >
        Trigger
      </button>
    </form>
  );
}`
