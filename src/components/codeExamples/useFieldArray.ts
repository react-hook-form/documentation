export default `import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

function App() {
  const { register, control, handleSubmit } = useForm({
    // defaultValues: {}; you can populate the fields by this attribute 
  });
  const { fields, append, prepend, remove } = useFieldArray({
    control,
    name: "test"
  });
  
  return (
    <form onSubmit={handleSubmit(data => console.log("data", data))}>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            {/* important: useFieldArray only works with ref={register()} */}
            <input name={\`test[\${index}].name\`} defaultValue={item.name} ref={register()} />
            <button onClick={() => remove(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => append({ name: "test" })} >
        append
      </button>
      <button type="button" onClick={() => prepend({ name: "test1" })}>
        prepend
      </button>
    </form>
  );
}
`
