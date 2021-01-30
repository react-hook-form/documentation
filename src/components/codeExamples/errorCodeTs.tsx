export default `import * as React from 'react'
import { useForm } from "react-hook-form";

interface IFormInputs {
  singleErrorInput: string
  multipleErrorInput: string
  numberInput: string
}

function App() {
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>();

  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Error</label>
      <input {...register("singleErrorInput", { required: true })} />
      {errors.singleErrorInput && <p>Your input is required</p>}

      <label>Error with type check</label>
      <input {...register("multipleErrorInput", { required: true, minLength: 5 })} />
      {errors.multipleErrorInput?.type === "required" && (
        <p>Your input is required</p>
      )}
      {errors.multipleErrorInput?.type === "minLength" && (
        <p>Your input must be larger then 3 characters</p>
      )}

      <label>Error with value</label>
      <input type="number" {...register("numberInput", { min: 50 })} />
      {errors.numberInput && <p>Your input required to be more than 50</p>}

      <input type="submit" />
    </form>
  );
}
`
