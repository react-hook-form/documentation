export default `import React from "react";
import { useForm } from "react-hook-form";

interface IFormInputs {
  name: string
  showAge: boolean
  age: number
}

function App() {
  const { register, watch, formState: { errors }, handleSubmit } = useForm<IFormInputs>();
  const watchShowAge = watch("showAge", false); // you can supply default value as second argument
  const watchAllFields = watch(); // when pass nothing as argument, you are watching everything
  const watchFields = watch(["showAge", "age"]); // you can also target specific fields by their names

  // Callback version of watch.  It's your responsibility to unsubscribe when done.
  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => console.log(value, name, type));
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true, maxLength: 50 })} />
        <input type="checkbox" {...register("showAge")} />
        {/* based on yes selection to display Age Input*/}
        {watchShowAge && (
          <input type="number" {...register("age", { min: 50 })} />
        )}
        <input type="submit" />
      </form>
    </>
  );
}
`
