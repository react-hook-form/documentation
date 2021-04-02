export default `import React from "react";
import { TextField } from "@material-ui/core";
import { useController, useForm } from "react-hook-form";

function Input({ control, name }) {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "",
  });

  return <TextField {...inputProps} inputRef={ref} />;
}

function App() {
  const { control } = useForm();
  
  return <Input name="firstName" control={control} />;
}
`
