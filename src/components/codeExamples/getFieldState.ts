export default `import * as React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    getFieldState,
    formState: { isDirty, isValid }
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: ""
    }
  });
  
  // you can invoke before render or within the render function
  const { isDirty, invalid, isTouched, error } = getFieldState('firstName')

  return (
    <form>
      <input {...register("firstName", { required: true })} />
      <p>{getFieldState('firstName').isDirty && "dirty"}</p>
      <button type="button" onClick={() => console.log(getFieldState()))}>field state</button>
    </form>
  );
}
`
