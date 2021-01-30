export default `import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, watch, setValue, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: ""
    }
  });
  const { firstName, lastName } = watch();

  useEffect(() => {
    register("firstName");
    register("lastName");
  }, [register]);

  const handleChange = (e, name) => {
    setValue(name, e.target.value);
  };

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        onChange={(e) => handleChange(e, "firstName")}
        value={firstName}
      />

      <input onChange={(e) => handleChange("lastName", e)} value={lastName} />
      <input type="submit" />
    </form>
  );
}
`
