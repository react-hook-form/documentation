export default `import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";

function App() {
  const { register, setValue, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        as={<TextField />}
        name="firstName"
        control={control}
      />
      
      <input type="submit" />
    </form>
  );
}
`
