export default `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register } = useForm();

  return (
    <div>
      {watchChecked ? (
        <input ref={register} name="input3" type="text" key="key1" defaultValue="1" />
      ) : (
        <input ref={register} name="input4" type="text" key="key2" defaultValue="2" />
      )}
    </div>
  );
}
`
