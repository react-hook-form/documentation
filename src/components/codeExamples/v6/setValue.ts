export default `import * as React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = data => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register} />
      <input name="lastName" ref={register} />
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
