export default `import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";

function App() {
  const { control, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        as={TextField}
        name="firstName"
        control={control}
        defaultValue=""
      />
      
      <input type="submit" />
    </form>
  );
}
`
