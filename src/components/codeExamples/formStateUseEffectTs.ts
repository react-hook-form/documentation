export default `import React from "react";
import { useForm } from "react-hook-form";
type FormInputs = {
  test: string
}
export default function App() {
  const {
    register,
    handleSubmit,
    formState
  } = useForm<FormInputs>();
  const onSubmit = (data: FormInputs) => console.log(data);
  
  React.useEffect(() => {
    console.log("touchedFields", formState.touchedFields);
  }, [formState]);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("test")} />
      <input type="submit" />
    </form>
  );
}
`
