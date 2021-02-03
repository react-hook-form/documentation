export default `import * as React from "react";
import { useForm, useFormState } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      firstName: "firstName"
    }
  });
  const { dirtyFields } = useFormState({
    control
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="First Name" />
      {dirtyFields.firstName && <p>Field is dirty.</p>}
      
      <input type="submit" />
    </form>
  );
}
`
