export default `import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";

export default function App() {
  const { register, handleSubmit, reset, setValue, control } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller 
        as={TextField} 
        name="firstName"
        control={control} 
        rules={ required: true } 
        defaultValue=""
      />
      <Controller 
        as={TextField} 
        name="lastName"
        control={control}
        defaultValue="" 
      />
      
      <input type="submit" />
      <input type="button" onClick={reset} />
      <input
        type="button"
        onClick={() => {
          reset({
            firstName: "bill",
            lastName: "luo"
          });
        }}
      />
    </form>
  );
}
`
