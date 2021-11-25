export default `import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

interface FormInputs {
  multipleErrorInput: string
}

export default function App() {
  const { register, formState: { errors }, handleSubmit } = useForm<FormInputs>({
    criteriaMode "all"
  });
  const onSubmit = (data: FormInputs) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("multipleErrorInput", {
          required: "This is required.",
          pattern: {
            value: /\d+/,
            message: "This input is number only."
          },
          maxLength: {
            value: 10,
            message: "This input exceed maxLength."
          }
        })}
      />
      <ErrorMessage
        errors={errors}
        name="multipleErrorInput"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))
        }
      />

      <input type="submit" />
    </form>
  );
}`
