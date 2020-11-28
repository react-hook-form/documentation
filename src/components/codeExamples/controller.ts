export default `import React from "react";
import { TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";

function App() {
  const { handleSubmit, control } = useForm();

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      {* // Another approach is using render props to customise event and value *}
      <Controller
        control={control}
        name="TextField"
        render={({ onChange, onBlur, value, ref}) => (
          <TextField
            onChange={onChange}
            onBlur={onBlur}
            selected={value}
            inputRef={ref}
          />
        )}
      />
      
      {* // This is the preferred syntax for most cases. If you need props, pass TextField props to Controller props (forwarded) *}
      <Controller as={TextField} name="TextField" control={control} defaultValue="" />
      
      <input type="submit" />
    </form>
  );
}
`
