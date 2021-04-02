export default `import React from "react";
import { TextField } from "@material-ui/core";
import { useController, control } from "react-hook-form";

function Input({ control, name }) {
  const {
    field: { ref, ...inputProps },
    meta: { invalid, isTouched, isDirty },
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
