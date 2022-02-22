export default `import React, { useCallback } from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data, e) => {};
  
  const resetAsyncForm = useCallback(async () => {
    const result = await fetch('./api/formValues.json'); // result: { firstName: 'test', lastName: 'test2' }
    reset(result); // asynchronously reset your form values
  }, [reset]);
  
  useEffect(() => {
    resetAsyncForm()
  }, [resetForm])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} />
      <input {...register("lastName")} />
      <input type="reset" /> // standard reset button
      <input type="button" onClick={() => reset({ firstName: "bill" }); }} /> // reset form with values
      <input type="button" onClick={() => {
        reset({
          firstName: "bill"
        }, {
          keepErrors: true, 
          keepDirty: true,
          keepIsSubmitted: false,
          keepTouched: false,
          keepIsValid: false,
          keepSubmitCount: false,
        });
      }} />
    </form>
  );
}
`
