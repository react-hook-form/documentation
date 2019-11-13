export default `import React, { useEffect } from "react";
import useForm from "react-hook-form";

const CustomInput = React.memo(({ register, unregister, setValue, name }) => {
  useEffect(() => {
    register({ name });
    return () => unregister(name);
  }, [name, register, unregister]);
  
  return <input onChange={e => setValue(name, e.target.value)} />;
});

function App() {
  const { register, unregister, handleSubmit, setValue, watch } = useForm();
  const name = watch("name");
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Unregister Controlled Component</h1>

      <label>Name:</label>
      <input ref={register} name="name" />

      <label>Conditional Field:</label>
      {name !== "bill" && (
        <CustomInput {...{ register, unregister, setValue, name: "test" }} />
      )}

      <input type="submit" />
    </form>
  );
}
`
