export default `import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

function App() {
  const { handleSubmit, register, setValue, control } = useForm();

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <Controller
        as={<Select options={options} />}
        control={control}
        rules={{ required: true }}
        name="reactSelect"
      />
      <button>submit</button>
    </form>
  );
}
`
