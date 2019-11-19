export default `import React from "react";
import useForm from "react-hook-form";
import joi from "@hapi/joi";

const schema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required()
});

// Build your resolver to display errors or pass valid values
const resolver = (data: any) => {
  const { error, value: values } = validationSchema.validate(data, {
    abortEarly: false,
  });

  return {
    values: error ? {} : values,
    errors: error
      ? error.details.reduce((previous, currentError) => {
          return {
            ...previous,
            [currentError.path[0]]: currentError,
          };
        }, {})
      : {},
  };
};

function App() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: { resolver }
   });
  
  return (
    <form onSubmit={handleSubmit(d => console.log(d))}>
      <input type="text" name="username" ref={register} />
    </form>
  );
}`
