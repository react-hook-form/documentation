export default `import React, { useEffect } from "react";
import useForm from "react-hook-form";

function App() {
  const { register, watch, setValue, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: ""
    }
  });
  const { firstName, lastName } = watch();

  useEffect(() => {
    register({ name: "firstName" });
    register({ name: "lastName" });
  }, [register]);

  const handleChange = (name, e) => {
    e.persist();
    setValue(name, e.target.value);
  };

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        onChange={handleChange.bind(null, "firstName")}
        value={firstName}
      />

      <input onChange={handleChange.bind(null, "lastName")} value={lastName} />
      <input type="submit" />
    </form>
  );
}
`
