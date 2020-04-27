export default `import * as React from "react";
import { useForm } from "react-hook-form";
import * as Joi from "@hapi/joi";

type Inputs = {
  username: string;
};

type Context = {
  test: string;
};


const validationSchema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
});

export default function App() {
  const { register, handleSubmit, errors } = useForm<Inputs, Context>({
    validationResolver: (data, validationContext) => {
      const { error, value: values } = validationSchema.validate(data, { abortEarly: false });

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
    },
    validationContext: { test: "test" }
  });

  return (
    <div className="App">
      <h1>validationResolver</h1>

      <form onSubmit={handleSubmit(d => console.log(d))}>
        <input type="text" name="username" ref={register} />
        <input type="submit" />
      </form>
    </div>
  );
}

`
