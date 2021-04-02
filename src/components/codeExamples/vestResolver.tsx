export default `import * as React from 'react';
import { useForm } from 'react-hook-form';
import { vestResolver } from '@hookform/resolvers/vest';
import vest, { test, enforce } from 'vest';

const validationSuite = vest.create((data = {}) => {
  test('username', 'Username is required', () => {
    enforce(data.username).isNotEmpty();
  });

  test('username', 'Must be longer than 3 chars', () => {
    enforce(data.username).longerThan(3);
  });

  test('password', 'Password is required', () => {
    enforce(data.password).isNotEmpty();
  });

  test('password', 'Password must be at least 5 chars', () => {
    enforce(data.password).longerThanOrEquals(5);
  });

  test('password', 'Password must contain a digit', () => {
    enforce(data.password).matches(/[0-9]/);
  });

  test('password', 'Password must contain a symbol', () => {
    enforce(data.password).matches(/[^A-Za-z0-9]/);
  });
});

const App = () => {
  const { register, handleSubmit } = useForm({
    resolver: vestResolver(validationSuite),
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register("username")} />
      <input {...register("password")} />
      <input type="submit" />
    </form>
  );
};
`
