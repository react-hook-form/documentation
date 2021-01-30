export default `import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, watch, formState: { errors }, handleSubmit } = useForm();
  const watchShowAge = watch("showAge", false); // you can supply default value as second argument
  const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
  const watchFields = watch(["showAge", "number"]); // you can also target specific fields by their names

  const onSubmit = data => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="checkbox" {...register("showAge")} />
        
        {/* based on yes selection to display Age Input*/}
        {watchShowAge && <input type="number" {...register("age", { min: 50 })} />}
        
        <input type="submit" />
      </form>
    </>
  );
}
`
