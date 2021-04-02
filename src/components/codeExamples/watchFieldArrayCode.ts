export default `import * as React from "react";
import { useForm, useFieldArray, ArrayField } from "react-hook-form";

function App() {
  const { register, control, handleSubmit, watch } = useForm();
  const { fields, remove, append } = useFieldArray({
    name: "test",
    control
  });
  const onSubmit = (data: FormValues) => console.log(data);
  
  console.log(watch("test")); 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => {
        return (
          <input
            key={field.id}
            defaultValue={field.firstName}
            {...register(\`test[\${index}].firstName\`)}
          />
        );
      })}
      <button
        type="button"
        onClick={() =>
          append({
            firstName: "bill" + renderCount,
            lastName: "luo" + renderCount
          })
        }
      >
        Append
      </button>
    </form>
  );
}
`
