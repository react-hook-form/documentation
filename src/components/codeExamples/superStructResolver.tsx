export default `import React from 'react';
import { useForm } from 'react-hook-form';
import { superstructResolver } from '@hookform/resolvers/superstruct';
import { struct } from 'superstruct';

const schema = struct({
  name: 'string',
  age: 'number',
});

const App = () => {
  const { register, handleSubmit } = useForm({
    resolver: superstructResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(d => console.log(d))}>
      <input {...register("name")} />
      <input {...register("age")} type="number" />
      <input type="submit" />
    </form>
  );
};
`
