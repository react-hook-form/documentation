export default `import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.number(),
  age: z.number()
});

type Schema = z.infer<typeof schema>;

const App = () => {
  const { register, handleSubmit } = useForm<Schema>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} />
      <input {...register("age")} type="number" />
      <input type="submit" />
    </form>
  );
};

export default App;
`
