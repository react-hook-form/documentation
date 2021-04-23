export default `import React from "react";
import { useForm, useFieldArray, Controller } from "./src";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful }
  } = useForm({ defaultValues: { something: "anything" } });

  const onSubmit = (data) => {
    console.log(data);
  };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ something: '' });
    }
  }, [formState, submittedData, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("something")} />
      <input type="submit" />
    </form>
  );
}
`
