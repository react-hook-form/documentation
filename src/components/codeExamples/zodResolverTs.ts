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

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <input name="name" ref={register} />
      <input name="age" type="number" ref={register} />
      <input type="submit" />
    </form>
  );
};

export default App;
`
