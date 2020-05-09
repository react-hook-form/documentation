export default `import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

function IsolateReRender({ control }) {
  const firstName = useWatch({
    control,
    name: 'firstName', // watching firstName only
    defaultValue: 'default' // default value before the render
  });

  return <div>{firstName}</div>; // only re-render at the component level, when firstName changes
}

function App() {
  const { register, control, handleSubmit } = useForm();
  
  return (
    <form onSubmit={handleSubmit(data => console.log("data", data))}>
      <input ref={register} name="firstName" />
      <IsolateReRender control={control} />
      
      <input type="submit" />
    </form>
  );
}
`
