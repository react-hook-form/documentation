export default `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register } = useForm();

  return (
    <div>
      {watchChecked ? (
        <input {...register("input3")} key="key1" defaultValue="1" />
      ) : (
        <input {...register("input4")} key="key2" defaultValue="2" />
      )}
    </div>
  );
}
`
