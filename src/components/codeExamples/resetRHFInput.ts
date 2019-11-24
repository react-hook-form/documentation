export default `import React from "react";
import useForm from "react-hook-form";
import { RHFInput } from "react-hook-form-input";
import { TextField } from "@material-ui/core";

export default function App() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => { console.log(data) };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RHFInput as={<TextField />} name="firstName" rules={ required: true } />
      <RHFInput as={<TextField />} name="lastName" />
      
      <input type="submit" />
      <input type="button" onClick={reset} />
      <input
        type="button"
        onClick={() => {
          reset({
            firstName: "bill",
            lastName: "luo"
          });
        }}
      />
    </form>
  );
}
`
