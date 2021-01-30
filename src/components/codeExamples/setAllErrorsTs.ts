export default `import * as React from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  lastName: string;
};

const App = () => {
  const { register, handleSubmit, setError, formState: { errors } } = useForm<FormInputs>({
    criteriaMode: 'all',
  });
  
  const onSubmit = (data: FormInputs) => console.log(data);
  
  React.useEffect(() => {
    setError("lastName", {
      types: {
        required: "This is required",
        minLength: "This is minLength"
      }
    });
  }, [setValue])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Last Name</label>
      <input {...register("lastName")} />
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
