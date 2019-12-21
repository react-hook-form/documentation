export default `import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
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
      <Controller
        as={<TextField />}
        name="firstName"
        control={control}
      />
      
      <Controller
        as={<TextField />}
        name="lastName"
        control={control}
      />
      <input type="submit" />
    </form>
  );
}
`
