export default `import React from "react";
import { useForm } from "react-hook-form";
import Joi from "@hapi/joi";

const validationSchema = Joi.object({
  username: Joi.string().required()
});

const resolver = (data: any, validationContext) => {
  const { error, value: values } = validationSchema.validate(data, {
    abortEarly: false
  });

  return {
    values: error ? {} : values,
    errors: error
      ? error.details.reduce((previous, currentError) => {
          return {
            ...previous,
            [currentError.path[0]]: currentError
          };
        }, {})
      : {}
  };
};

export default function App() {
  const { register, handleSubmit, errors } = useForm({
    validationResolver: resolver,
    validationContext: { test: "test" }
  });

  return (
    <form onSubmit={handleSubmit(d => console.log(d))}>
      <input type="text" name="username" ref={register} />
      <input type="submit" />
    </form>
  );
}
`
