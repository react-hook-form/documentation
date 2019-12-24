export default `import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";

function App() {
  const { register, handleSubmit, setValue, watch, control } = useForm();
  const name = watch("name");
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>Name:</label>
      <input ref={register} name="name" />

      <label>Conditional Field:</label>
      {name !== "bill" && (
        <Controller
          name="test" 
          as={<TextField />}
          control={control} 
        />
      )}

      <input type="submit" />
    </form>
  );
}
`
