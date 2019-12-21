export default `import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import { TextField } from "@material-ui/core";

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

function App() {
  const { handleSubmit, control } = useForm();

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <Controller
        as={<Select options={options} />}
        control={control}
        rules={{ required: true }}
        name="reactSelect"
      />
      
      <Controller
        as={<TextField />}
        name="firstName"
        control={control}
      />
      
      <button>submit</button>
    </form>
  );
}
`
