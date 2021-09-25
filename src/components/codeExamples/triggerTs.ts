export default `import React from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  firstName: string
  lastName: string
}

export default function App() {
  const { register, trigger, formState: { errors } } = useForm<FormInputs>();

  return (
    <form>
      <input {...register("firstName", { required: true })} />
      <input {...register("lastName", { required: true })} />
      <button type="button" onClick={() => { trigger("lastName"); }}>Trigger</button>
      <button type="button" onClick={() => { trigger(["firstName", "lastName"]); }}>Trigger Multiple</button>
      <button type="button" onClick={() => { trigger(); }}>Trigger All</button>
    </form>
  );
}`
