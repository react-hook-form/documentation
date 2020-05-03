export default `import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from 'react-hook-form-resolvers';

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
    validationResolver: yupResolver(schema), // yup, joi and even your own.
  });

  return (
    <form onSubmit={handleSubmit(d => console.log(d))}>
      <input name="name" ref={register} />
      <input name="age" type="number" ref={register} />
      <input type="submit" />
    </form>
  );
};`
