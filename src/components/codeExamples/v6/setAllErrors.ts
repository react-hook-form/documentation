export default `import * as React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, setError, errors } = useForm({
    criteriaMode: 'all',
  });
  
  const onSubmit = data => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Last Name</label>
      <input
        name="lastName"
        ref={register}
        onChange={() => {
          setError("lastName", {
            types: {
              required: "This is required",
              minLength: "This is minLength"
            }
          });
        }}
      />
      {errors.lastName && errors.lastName.types && (
        <p>{errors.lastName.types.required}</p>
      )}
      {errors.lastName && errors.lastName.types && (
        <p>{errors.lastName.types.minLength}</p>
      )}
      <input type="submit" />
    </form>
  );
};
`
