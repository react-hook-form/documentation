export default `import React, { useEffect } from "react";
import { Input, Select, MenuItem } from "@material-ui/core";
import { useForm } from "react-hook-form";

const defaultValues = {
  select: "",
  input: ""
};

function App() {
  const { register, handleSubmit, setValue, reset, watch } = useForm({ defaultValues });
  const selectValue = watch("select");
  const onSubmit = data => console.log(data);

  useEffect(() => {
    register({ name: "select" });
  }, [register]);

  const handleChange = e => setValue("select", e.target.value);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select value={selectValue} onChange={handleChange}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
      </Select>
      <Input {...register("input")} />
      
      <button type="button" onClick={() => reset({ ...defaultValues })}>Reset</button>
      <input type="submit" />
    </form>
  );
}

`
