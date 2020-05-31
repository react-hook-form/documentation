export default `import React from "react";
import { useForm } from "react-hook-form";

export default () => {
  const { clearError, errors, register } = useForm();

  return (
    <form>
      <input name="firstName" ref={register({ required: true })} />
      {errors.firstName && "This is required"}
      <input name="lastName" ref={register({ required: true })} />
      {errors.lastName && "This is required"}

      <button type="button" onClick={() => clearError("firstName")}>
        Clear
      </button>
      <button
        type="button"
        onClick={() => clearError(["firstName", "lastName"])}
      >
        Clear Multiple
      </button>
      <button type="button" onClick={() => clearError()}>
        Clear All
      </button>
    </form>
  );
};
`
