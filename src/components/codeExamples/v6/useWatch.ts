export default `import React from "react";
import { useForm, useWatch } from "react-hook-form";

function FirstNameWatched({ control }) {
  const firstName = useWatch({
    control,
    name: 'firstName', // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
    defaultValue: 'default' // default value before the render
  });

  return <div>{firstName}</div>; // only re-render at the component level, when firstName changes
}

function App() {
  const { register, control, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input ref={register} name="firstName" />
      <input ref={register} name="lastName" />
      <input type="submit" />

      <FirstNameWatched control={control} />
    </form>
  );
}
`
