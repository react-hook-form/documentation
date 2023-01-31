export default `import * as React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, setError, formState: { errors } } = useForm({
    criteriaMode: 'all',
  });
  const onSubmit = async () => {
    const response = await fetch(...)
    if (response.statusCode > 200) {
        setError('root.serverError', { 
          type: response.statusCode,
        })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Last Name</label>
      <input {...register("lastName")} />
      
      {errors.root.serverError.type === 400 && <p>server response message</p>}
      
      <button>submit</button>
    </form>
  );
};
`
