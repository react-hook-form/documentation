export default `import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, unregister } = useForm();

  const onSubmit = data => {
    alert(JSON.stringify(data));
  };
  
  useEffect(() => {
    register({ name: "customRegister" }, { required: true });
    
    return () => unregister("customRegister"); // unregister input after component unmount
  }, [register])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="firstName" ref={register} />
      <input type="text" name="lastName" ref={register} />
      <button type="button" onClick={() => unregister("lastName")}>unregister</button>
      <input type="submit" />
    </form>
  );
}`
