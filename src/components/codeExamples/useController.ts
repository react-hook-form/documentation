export default `import React from "react";
import { TextField } from "@material-ui/core";
import { useController } from "react-hook-form";

function Input({ control, name }) {
  const { field, state: { invalid, isTouched, isDirty } } = useController({
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
`
