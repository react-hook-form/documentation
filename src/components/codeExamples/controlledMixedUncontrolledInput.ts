export default `import React, { useEffect } from "react";
import { Input, Select, MenuItem } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";

const defaultValues = {
  select: "",
  input: ""
};

function App() {
  const { handleSubmit, reset, watch, control } = useForm({ defaultValues });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        as={
          <Select>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
          </Select>
        }
        control={control}
        name="select"
        defaultValue={10}
      />
      
      <Input inputRef={register} name="input" />

      <button type="button" onClick={() => reset({ defaultValues })}>Reset</button>
      <input type="submit" />
    </form>
  );
}

`
