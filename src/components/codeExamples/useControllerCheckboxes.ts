export default `import * as React from "react";
import { useController, useForm } from "react-hook-form";

const Checkboxes = ({ options, control, name }) => {
  const { field } = useController({
    control,
    name
  });
  const [value, setValue] = React.useState(field.value || []);

  return (
    <>
      {options.map((option, index) => (
        <input
          onChange={(e) => {
            const valueCopy = [...value];

            // update checkbox value
            valueCopy[index] = e.target.checked ? e.target.value : null;

            // send data to react hook form
            field.onChange(valueCopy);

            // update local state
            setValue(valueCopy);
          }}
          key={option}
          type="checkbox"
          value={option}
        />
      ))}
    </>
  );
};

export default function App() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      controlled: [],
      uncontrolled: []
    }
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section>
        <h2>uncontrolled</h2>
        <input {...register("uncontrolled")} type="checkbox" value="A" />
        <input {...register("uncontrolled")} type="checkbox" value="B" />
        <input {...register("uncontrolled")} type="checkbox" value="C" />
      </section>

      <section>
        <h2>controlled</h2>
        <Checkboxes
          options={["a", "b", "c"]}
          control={control}
          name="controlled"
        />
      </section>
      <input type="submit" />
    </form>
  );
}
`
