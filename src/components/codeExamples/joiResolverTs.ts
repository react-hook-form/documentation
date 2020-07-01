export default `import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers";
import Joi from "@hapi/joi";

interface IFormInput {
  username: string;
}

const schema = Joi.object({
  username: Joi.string().required()
});

const App = () => {
  const { register, handleSubmit, errors } = useForm<IFormInput>({
    resolver: joiResolver(schema)
  });

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>username</label>
      <input name="username" ref={register} />
      <input type="submit" />
    </form>
  );
}
`
