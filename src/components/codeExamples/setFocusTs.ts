export default `import * as React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
};

export default function App() {
  const { register, handleSubmit, setFocus } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => console.log(data);

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
