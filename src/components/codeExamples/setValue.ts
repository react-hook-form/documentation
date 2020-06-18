export default `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, setValue } = useForm();

  return (
    <form>
      <input name="test" ref={register} />
      <input name="test1" ref={register} />
      <input name="object.firstName" ref={register} />
      <input name="array[0].firstName" ref={register} />
      <button type="button" onClick={() => {
        setValue("test", "bill");
        setValue("test", "bill", { shouldValidate: true });
        setValue("test", "bill", { shouldDirty: true });
        
        setValue("object", { firstName: "test" })
        setValue("array", [{ firstName: "test" }])
      }}>SetValue</button>
    </form>
  );
}`
