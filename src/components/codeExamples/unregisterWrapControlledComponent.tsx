export default `import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";

function App() {
  const { register, handleSubmit, setValue, watch, control } = useForm();
  const name = watch("name");
  const onSubmit = data => console.log(data);


  // React Hook Form Input will take care controlled component's register and unregister
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Unregister Controlled Component</h1>

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
