export default `import React, { useCallback } from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, reset } = useForm();
  const resetAsyncForm = useCallback(async () => {
    const result = await fetch('./api/formValues.json'); // result: { firstName: 'test', lastName: 'test2' }
    reset(result); // asynchronously reset your form values
  }, [reset]);
  
  useEffect(() => {
    resetAsyncForm()
  }, [resetForm])

  return (
    <form onSubmit={handleSubmit((data) => {})}>
      <input {...register("firstName")} />
      <input {...register("lastName")} />
      
      <input type="button" onClick={() => {
        reset({
          firstName: "bill"
        }, {
          keepErrors: true, 
          keepDirty: true,
        });
      }} />
      
      <button 
        onClick={() => {
          reset(formValues => ({
            ...formValues,
            lastName: 'test',
          }))
        }}
      >
        Reset partial
      </button>
    </form>
  );
}
`
