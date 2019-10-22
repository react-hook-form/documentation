export default `import React from "react";
import useForm from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  age: yup
    .number()
    .required()
    .positive()
    .integer(),
});

export default function App() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        First Name
        <input type="text" name="firstName" ref={register} />
      </label>
      {errors.firstName && <p>{errors.firstName.message}</p>}
        
      <label>
        Age
        <input type="text" name="age" ref={register} />
      </label>
      {errors.age && <p>{errors.age.message}</p>}
      
      <input type="submit" />
    </form>
  );
}
`
