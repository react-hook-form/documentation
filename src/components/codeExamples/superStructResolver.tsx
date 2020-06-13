export default `import React from 'react';
import { useForm } from 'react-hook-form';
import { superstructResolver } from '@hookform/resolvers';
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
      <label>Test</label>
      <input name="name" ref={register} />
      <input name="age" type="number" ref={register} />
      <input type="submit" />
    </form>
  );
};
`
