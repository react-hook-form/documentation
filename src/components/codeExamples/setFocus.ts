export default `import * as React from "react";
import { useForm } from "./src";

export default function App() {
  const { register, handleSubmit, setFocus } = useForm();
  const onSubmit = (data) => console.log(data);
  renderCount++;

  React.useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="First Name" />
      <input type="submit" />
    </form>
  );
}
`
