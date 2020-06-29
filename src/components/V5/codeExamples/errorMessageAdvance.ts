export default `import React from "react";
import { useForm, useFormContext } from "react-hook-form";

const ErrorMessage = ({ errors, name, messages }) => {
  // Note: if you are using FormContext, then you can use Errors without props eg:
  // const { errors } = useFormContext();
  if (!errors[name]) return null;

  return <p>{messages[errors[name]].message}</p>;
};

const messages = {
  test: {
    min: "This field required minLength of 8"
  }
};

export default () => {
  const { register, errors } = useForm();

  return (
    <form>
      <input name="test" ref={register({ required: "This is required." })} />
      <ErrorMessage errors={errors} name="test" />
    </form>
  );
};
`
