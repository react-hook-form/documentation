export default `import { useForm, useFieldArray } from "react-hook-form";

const ChildComponent = ({ index, control, register }) => {
  const { fields } = useFieldArray({
    name: \`nest[$\{index\}].nestedArray\`,
    control
  });

  return (
    {fields.map((item, i) => (
      <input
        key={item.id}
        {...register(\`nest[$\{index\}].nestedArray[$\{i\}].value\`)}
        defaultValue={item.value}
      />
    ))}
  );
};

export default () => {
  const { register, control, setValue } = useForm({
    defaultValues: {
      nest: [
        { value: "1", nestedArray: [{ value: "2" }] },
        { value: "3", nestedArray: [{ value: "4" }] }
      ]
    }
  });
  const { fields } = useFieldArray({ name: "nest", control });

  React.useEffect(() => {
    setValue("nest", [
      {
        value: 0,
        nestedArray: [
          {
            value: 8
          }
        ]
      }
    ]);
  }, [setValue]);

  return (
    <>
      {fields.map((item, i) => (
        <div key={item.id}>
          <input
            {...register(\`nest[$\{i\}].value\`)}
            defaultValue={item.value}
          />
          <ChildComponent control={control} register={register} index={i} />
        </div>
      ))}
    </>
  );
};
`
