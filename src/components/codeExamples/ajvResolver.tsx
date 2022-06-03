export default `import { useForm } from 'react-hook-form';
import { ajvResolver } from '@hookform/resolvers/ajv';

// must use \`minLength: 1\` to implement required field
const schema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      minLength: 1,
      errorMessage: { minLength: 'username field is required' },
    },
    password: {
      type: 'string',
      minLength: 1,
      errorMessage: { minLength: 'password field is required' },
    },
  },
  required: ['username', 'password'],
  additionalProperties: false,
};

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: ajvResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register('username')} />
      {errors.username && <p>{errors.username.message}</p>}
      <input {...register('password')} />
      {errors.password && <p>{errors.password.message}</p>}
      <button type="submit">submit</button>
    </form>
  );
};
`
