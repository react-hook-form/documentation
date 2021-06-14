export default `import React from "react";
import { useForm } from "react-hook-form";

export default function App () {
  const {
    register,
    handleSubmit,
    formState
  } = useForm();

  const onSubmit = (data) => console.log(data);

  React.useEffect(() => {
    console.log("touchedFields", formState.touchedFields);
  },[formState]); // use entire formState object as optional array arg in useEffect, not individual properties of it


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("test")} />
      <input type="submit" />
    </form>
  );
};

`
