export default `import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type Inputs = {
  name: string;
  age: string;
};

const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required(),
});

const App = () => {
  const { register, handleSubmit } = useForm<Inputs>({
    resolver: yupResolver(schema), // yup, joi and even your own.
  });

  return (
    <form onSubmit={handleSubmit(d => console.log(d))}>
      <input {...register("name")} />
      <input type="number" {...register("age")} />
      <input type="submit" />
    </form>
  );
};`
