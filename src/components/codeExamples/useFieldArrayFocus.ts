export default `import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

const App = () => {
  const { register, control } = useForm<{
    test: { value: string }[];
  }>({
    defaultValues: {
      test: [{ value: '1' }, { value: '2' }],
    },
  });
  const { fields, prepend, append } = useFieldArray({
    name: 'test',
    control,
  });
  
  return (
    <form>
      {fields.map((field, i) => (
        <input key={field.id} {...register(\`test.\${i}.value\` as const)} />
      ))}
      <button
        type="button"
        onClick={() => prepend({ value: '' }, { focusIndex: 1 })}
      >
        prepend
      </button>
      <button
        type="button"
        onClick={() => append({ value: '' }, { focusName: 'test.0.value' })}
      >
        append
      </button>
    </form>
  );
};
`
