export default `import React from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

interface IFormInput {
  name: string;
  age: number;
}

const schema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required()
});

const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: joiResolver(schema)
  });
  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name"} />
      <input type="number" {...register("age"} />
      <input type="submit" />
    </form>
  );
}
`
