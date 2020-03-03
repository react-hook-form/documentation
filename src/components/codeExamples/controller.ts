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
      {* // Preferred syntax on most cases. If you need props, pass TextField props to Controller props (forwarded) *}
      <Controller as={TextField} name="TextField" control={control} defaultValue="" />
      
      {* // Another possibility, any potential props passed to <Checkbox/> will be overrided. SomeName => Checkbox *}
      <Controller
        as={<Select options={options} />}
        control={control}
        rules={{ required: true }}
        onChange={([selected]) => {
          // React Select return object instead of value for selection
          return { value: selected };
        }}
        name="reactSelect"
        defaultValue={{ value: 'chocolate' }}
      />
      
      <button>submit</button>
    </form>
  );
}
`
