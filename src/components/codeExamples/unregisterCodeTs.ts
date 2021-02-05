export default `import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

interface IFormInputs {
  firstName: string;
  lastName?: string;
}

export default function App() {
  const { register, handleSubmit, unregister } = useForm<IFormInputs>();
  const onSubmit = (data: IFormInputs) => console.log(data);

  React.useEffect(() => {
    register("lastName");
  }, [register])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <button type="button" onClick={() => unregister("lastName")}>unregister</button>
      <input type="submit" />
    </form>
  );
};

`
