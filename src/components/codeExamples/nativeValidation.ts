export default `import React from "react";
import useForm from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm({ nativeValidation: true });
  const onSubmit = async data => { alert(JSON.stringify(data)); };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="firstName"
        ref={register({ required: "Please enter your first name." })} // custom message
      />
      <input name="lastName" ref={register({ required: true })} />
      <input type="submit" />
    </form>
  );
}
`
