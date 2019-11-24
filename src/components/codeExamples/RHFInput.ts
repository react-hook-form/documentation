export default `import React from 'react';
import useForm from 'react-hook-form';
import { RHFInput } from 'react-hook-form-input';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

function App() {
  const { handleSubmit, register, setValue } = useForm();

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <RHFInput
        as={<Select options={options} />}
        rules={{ required: true }}
        name="reactSelect"
        register={register}
        setValue={setValue}
      />
      <button>submit</button>
    </form>
  );
}
`
