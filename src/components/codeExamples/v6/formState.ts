export default `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    errors,
    // Read the formState before render to subscribe the form state through Proxy
    formState: { isDirty, isSubmitting, touched, submitCount },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="test" ref={register} />
      <input type="submit" />
    </form>
  );
}
`
