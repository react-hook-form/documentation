export default `import React from "react";
import { useForm, Controller } from "react-hook-form";

export default function App() {
  const { control } = useForm();
  
  return (
    <Controller
      render={({ field }) => <input {...field} />}
      name="firstName"
      control={control}
      defaultValue=""
    />
  );
}
`
