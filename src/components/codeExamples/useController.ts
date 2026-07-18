export default `import { TextField } from "@material-ui/core";
import { useController, useForm } from "react-hook-form";

function Input({ control, name }) {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  return (
    <TextField 
      onChange={field.onChange} // send the value to hook form 
      onBlur={field.onBlur} // notify when the input is touched or blurred
      value={field.value} // input value
      name={field.name} // send the input name
      inputRef={field.ref} // send input ref, so we can focus on the input when an error appears
    />
  );
}
`
