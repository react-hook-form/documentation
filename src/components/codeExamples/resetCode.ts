export default `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data, e) => {
    // e.target.reset(); 
    // you can use HTML standard reset() function, but it only reset inputs' value
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register({ required: true })} />
      <input name="lastName" ref={register} />
      <input type="submit" />
      <input type="reset" /> // standard reset button
      <input type="button" onClick={reset} />
      <input
        type="button"
        onClick={() => {
          reset({
            firstName: "bill",
            lastName: "luo"
          });
        }}
      /> // reset form with values
    </form>
  );
}
`
