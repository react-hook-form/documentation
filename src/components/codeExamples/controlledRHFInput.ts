export default `import React, { useEffect } from "react";
import useForm from "react-hook-form";
import { RHFInput }  from "react-hook-form-input";
import { TextField } from "@material-ui/core";

function App() {
  const { register, setValue, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: ""
    }
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RHFInput
        as={<TextField />}
        name="firstName"
        register={register}
        setValue={setValue}
      />
      
      <RHFInput
        as={<TextField />}
        name="lastName"
        register={register}
        setValue={setValue}
      />
      <input type="submit" />
    </form>
  );
}
`
