export default `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, errors, formState } = useForm();
  const onSubmit = data => console.log(data);
  // Read the formState before render to subscribe the form state through Proxy
  const { isDirty, isSubmitting } = formState;
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="test" ref={register} />
      {isDirty && <p>Form is dirty.</p>}
      {isSubmitting && <span>Submitting...</span>}
      <input type="submit" />
    </form>
  );
}`
