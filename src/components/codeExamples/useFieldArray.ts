export default `import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

function App() {
  const { register, control, handleSubmit, reset } = useForm({
    // defaultValues: {}; you can populate the fields by this attribute 
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "test"
    }
  );

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <input
                defaultValue={"{item.firstName}"} // make sure to set up defaultValue
                ref={register()}
              />

              <Controller
                as={<input />}
                name={"test[{index}].lastName"}
                control={control}
                defaultValue={item.lastName} // make sure to set up defaultValue
              />
              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <section>
        <button
          type="button"
          onClick={() => {
            append({ firstName: "appendBill", lastName: "appendLuo" });
          }}
        >
          append
        </button>
        <button
          type="button"
          onClick={() =>
            prepend({
              firstName: "prependFirstName",
              lastName: "prependLastName"
            })
          }
        >
          prepend
        </button>
        <button
          type="button"
          onClick={() =>
            insert(parseInt(2, 10), {
              firstName: "insertFirstName",
              lastName: "insertLastName"
            })
          }
        >
          insert at
        </button>
      </section>
      <input type="submit" />
    </form>
  );
`
