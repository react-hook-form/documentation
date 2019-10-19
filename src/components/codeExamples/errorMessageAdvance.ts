export default `import React from "react";
import useForm, { useFormContext } from "react-hook-form";

const ErrorMessage = ({ errors, name, messages }) => {
  // Note: if you are using FormContext, then you can use Errors without props eg:
  // const { errors } = useFormContext();
  if (!errors.name) return null;

  return <p>{messages[errors.name][errors.name.type]}</p>;
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
      <inpuput name="test" ref={register({ minLength: 8 })} />
      <ErrorMessage errors={errors} name="test" />
    </form>
  );
};
`
