export default `import React from "react";
import { useForm, useWatch } from "react-hook-form";

interface FormInputs {
  firstName: string
}

function FirstNameWatched({ control }: { control: Control<FormInputs> }) {
  const firstName = useWatch({
    control,
    name: "firstName", // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
    defaultValue: "default" // default value before the render
  });

  return <p>Watch: {firstName}</p>; // only re-render at the component level, when firstName changes
}

function App() {
  const { register, control, handleSubmit } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name:</label>
      <input {...register("firstName")} />
      <input type="submit" />
      <FirstNameWatched control={control} />
    </form>
  );
}`
