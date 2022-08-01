export default `import * as React from "react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";

export default function App() {
  const { control, handleSubmit } = useForm();
  const { fields, append, update } = useFieldArray({
    control,
    name: 'array'
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      {fields.map((field, index) => (
        <Edit
          key={field.id}
          control={control}
          update={update}
          index={index}
          value={field}
        />
      ))}

      <button
        type="button"
        onClick={() => {
          append({ firstName: "" });
        }}
      >
        append
      </button>
      <input type="submit" />
    </form>
  );
}

const Display = ({ control, index }) => {
  const data = useWatch({
    control,
    name: \`array.\${index}\`
  });
  return <p>{data?.firstName}</p>;
};

const Edit = ({ update, index, value, control }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: value
  });

  return (
    <div>
      <Display control={control} index={index} />
      
      <input
        placeholder="first name"
        {...register(\`firstName\`, { required: true })}
      />

      <button
        type="button"
        onClick={handleSubmit((data) => update(index, data))}
      >
        Submit
      </button>
    </div>
  );
};

`
