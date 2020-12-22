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
    console.log("touched", formState.touched);
  }, [formState]);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="test" ref={register} />
      <input type="submit" />
    </form>
  );
}
`
