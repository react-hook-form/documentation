export default `import * as React from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  firstName: string
  lastName: string
}

const App = () => {
  const { register, handleSubmit, setValue } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} />
      <input {...register("lastName", { required: true })} />
      <button onClick={() => setValue("firstName", "Bill")}>
        Set First Name Value
      </button>
      <button
        onClick={() =>
          setValue("lastName", "Luo", {
            shouldValidate: true,
            shouldDirty: true
          })
        }
      >
        Set Last Name
      </button>
      <input type="submit" />
    </form>
  );
};
`
