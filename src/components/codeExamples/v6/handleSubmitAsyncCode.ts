export default `import React from "react";
import { useForm } from "react-hook-form";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function App() {
  const { register, handleSubmit, errors, formState } = useForm();
  const onSubmit = async data => {
    await sleep(2000);
    if (data.username === "bill") {
      alert(JSON.stringify(data));
    } else {
      alert("There is an error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">User Name</label>
      <input name="username" placeholder="Bill" ref={register} />

      <input type="submit" />
    </form>
  );
}
`
