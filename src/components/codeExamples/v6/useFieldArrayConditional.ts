export default `import React from 'react';
import { useForm, useWatch, useFieldArray, Control } from 'react-hook-form';

const ConditionField = ({
  control,
  index,
}: {
  control: Control;
  index: number;
}) => {
  const output = useWatch({
    name: 'data',
    control,
    defaultValue: 'yay! I am watching you :)',
  });

  return (
    <>
      {/* Required shouldUnregister: false */}
      {output[index]?.name === "bill" && (
        <input ref={control.register()} name={\`data[$\{index\}].conditional\`} />
      )}
      {/* doesn't required shouldUnregister: false */}
      <input
        name={\`data[$\{index\}].easyConditional\`}
        style={{ display: output[index]?.name === "bill" ? "block" : "none" }}
      />
    </>
  );
};

const UseFieldArrayUnregister: React.FC = () => {
  const { control, handleSubmit, register } = useForm<{
    data: { name: string }[];
  }>({
    defaultValues: {
      data: [{ name: 'test' }, { name: 'test1' }, { name: 'test2' }],
    },
    mode: 'onSubmit',
    shouldUnregister: false,
  });
  const { fields } = useFieldArray<{ name: string }>({
    control,
    name: 'data',
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((data, index) => (
        <>
          <input
            name={\`data[$\{index\}].name\`}
            defaultValue={data.name}
            ref={register()}
          />
          <ConditionField control={control} index={index} />
        </>
      ))}
      <input type="submit" />
    </form>
  );
};
`
