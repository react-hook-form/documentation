export default `import React, { useEffect } from "react";
import { RHFInput } from 'react-hook-form-input';
import { Input, Select, MenuItem } from "@material-ui/core";
import useForm from "react-hook-form";

const defaultValues = {
  select: "",
  input: ""
};

function App() {
  const { register, handleSubmit, setValue, reset, watch } = useForm({ defaultValues });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RHFInput
        as={
          <Select>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        }
        setValue={setValue}
        register={register}
        name="select"
      />
      
      <Input inputRef={register} name="input" />

      <button type="button" onClick={() => reset({ defaultValues })}>Reset</button>
      <input type="submit" />
    </form>
  );
}

`
