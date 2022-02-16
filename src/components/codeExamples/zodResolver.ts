export default `import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string(),
  age: z.number()
});

const App = () => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema)
  });

  return (
    <form onSubmit={handleSubmit(d => console.log(d)}>
      <input {...register("name")} />
      <input {...register("age")} type="number" />
      <input type="submit" />
    </form>
  );
};
`
