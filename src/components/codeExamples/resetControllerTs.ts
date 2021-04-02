export default `import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";

interface IFormInputs {
  firstName: string
  lastName: string
}

export default function App() {
  const { register, handleSubmit, reset, setValue, control } = useForm<IFormInputs>();
  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller 
        render={({ field }) => <TextField {...field} />} 
        name="firstName"
        control={control} 
        rules={ required: true } 
        defaultValue=""
      />
      <Controller 
        render={({ field }) => <TextField {...field} />} 
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
