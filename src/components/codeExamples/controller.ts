export default `import React from "react";
import ReactDatePicker from "react-datepicker";
import { TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";

function App() {
  const { handleSubmit, control } = useForm();

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      {* // Preferred syntax on most cases. If you need props, pass TextField props to Controller props (forwarded) *}
      <Controller as={TextField} name="TextField" control={control} defaultValue="" />
      
      {* // Another approach is using render props to customise event and value *}
      <Controller
        control={control}
        name="ReactDatepicker"
        render={({ onChange, onBlur, value}) => (
          <ReactDatePicker
            onChange={onChange}
            onBlur={onBlur}
            selected={value}
          />
        )}
      />
      
      <input type="submit" />
    </form>
  );
}
`
