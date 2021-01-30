export default `import React from "react";
import { useForm, useFieldArray, Controller } from "./src";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful }
  } = useForm({ defaultValues: { something: "anything" } });
  const [submittedData, setSubmittedData] = React.useState({});

  const onSubmit = (data) => {
    setSubmittedData(data);
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ ...submittedData });
    }
  }, [isSubmitSuccessful, submittedData, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("something")} />
      <input type="submit" />
    </form>
  );
}
`
