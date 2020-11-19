export default `import React, { useEffect } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";

function App() {
  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: {
      loadState: "unloaded",
      names: [{ firstName: "Bill", lastName: "Luo" }]
    }
  });
  const { fields, remove } = useFieldArray({
    control,
    name: "names"
  });

  // it's import to invoke reset after useFieldArray
  useEffect(() => {
    setTimeout(() => {
      reset({
        names: [
          {
            firstName: "Bill1",
            lastName: "Luo1"
          },
        ]
      });
    }, 1000);
  }, [reset]);

  const onSubmit = (data) => console.log("data", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <input
              name={\`names[\${index}].firstName\`}
              defaultValue={\`\${item.firstName}\`}
              ref={register()}
            />

            <Controller
              as={<input />}
              name={\`names[\${index}].lastName\`}
              control={control}
              defaultValue={item.lastName}
            />
          </li>
        ))}
      </ul>

      <input type="submit" />
    </form>
  );
}
`
