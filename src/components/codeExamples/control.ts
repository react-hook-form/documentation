export default `import React from "react";
import { useForm, Controller } from "react-hook-form";

function App() {
  const { control, handleSubmit } = useForm();

  return (
    <form>
      <Controller
        as={<input />}
        name="firstName"
        control={control}
        defaultValue=""
      />
    </form>
  );
}
`
