export default `import React from "react";
import { TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";

function Input({ control, name }) {
  const { field } = useController({
    name,
    control,
    rules: { required: true }
    defaultValue: '',
  });

  return (
    // field object contains onChange, onBlur, value and ref props  
    <TextField {...field} inputRef={ref} />
  );
}

function App() {
  const { control } = useForm();

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <Input control={control} name: "TextField" />
      <button>Submit</button>
    </form>
  );
}
`
