export default `import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, unregister } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <input {...register("lastName")} />
      <button type="button" onClick={() => unregister("lastName")}>unregister</button>
      <input type="submit" />
    </form>
  );
}`
