export default `import React from 'react';
import Select from 'react-select';
import { TextField } from "@material-ui/core";
import { useForm, Controller } from 'react-hook-form';

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
        onChange={([selected]) => {
          // React Select return object instead of value for selection
          return { value: selected };
        }}
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
