export default `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data, e) => {
    // e.target.reset(); // HTML standard reset() function will only reset inputs' value
  };
  
  useEffect(async () => {
    const result = await fetch('./api/formValues.json'); // result: { firstName: 'test', lastName: 'test2' }
    reset(result); // asynchronously reset your form values
  }, [reset])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register({ required: true })} />
      <input name="lastName" ref={register} />
      <input type="reset" /> // standard reset button
      <input type="button" onClick={reset} />
      <input type="button" onClick={() => reset({ firstName: "bill" }); }} /> // reset form with values
      <input type="button" onClick={() => {
        reset({
          firstName: "bill"
        }, {
          errors: true, // errors will not be reset 
          dirtyFields: true, // dirtyFields will not be reset
          dirty: true, // dirty will not be reset
          isSubmitted: false,
          touched: false,
          isValid: false,
          submitCount: false,
        });
      }} />
    </form>
  );
}
`
