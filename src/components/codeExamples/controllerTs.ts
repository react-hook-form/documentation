export default `import React from "react";
import ReactDatePicker from "react-datepicker";
import { TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";

type FormValues = {
  ReactDatepicker: string;
} 

function App() {
  const { handleSubmit, control } = useForm<FormValues>();

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <Controller
        control={control}
        name="ReactDatepicker"
        render={({ field: { onChange, onBlur, value, ref } }) => (
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
