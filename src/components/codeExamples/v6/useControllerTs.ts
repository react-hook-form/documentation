export default `import * as React from "react";
import { useForm, useController } from "./src";

function Input(props) {
  const { field, meta } = useController(props);

  return (
    <div>
      <input {...field} placeholder={props.name} />
      <p>{meta.isTouched && "Touched"}</p>
      <p>{meta.isDirty && "Dirty"}</p>
      <p>{meta.invalid ? "invalid" : "valid"}</p>
    </div>
  );
}

export default function App() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      FirstName: ""
    },
    mode: "onChange"
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input control={control} name="FirstName" rules={{ required: true }} />
      <input type="submit" />
    </form>
  );
}
`
