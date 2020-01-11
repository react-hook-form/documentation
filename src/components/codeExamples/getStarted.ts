export const registerCode = `import React from 'react'
import { useForm } from 'react-hook-form'

export default function App() {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register} />
      <select name="gender" ref={register}>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <input type="submit" />
    </form>
  );
}`

export const migrateCode = `import React from 'react'
import { useForm } from 'react-hook-form'

// The following component is an example of your existing Input Component 
const Input = ({ label, register, required }) => ( 
  <>
    <label>{label}</label>
    <input name={label} ref={register({ required })} />
  </>
)

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef(({ label, register }, ref) => ( 
  <>
    <label>{label}</label>
    <select name={label} ref={ref}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
))

export default function App() {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" register={register} required />
      <Select label="Age" ref={register} />
      <input type="submit" />
    </form>
  )
}`

export const uiLibrary = `import React from 'react';
import { useForm } from 'react-hook-form';
import Select from "react-select";
import Input from "@material-ui/core/Input";
import { Input as InputField } from 'antd';

export default function App() {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = data => console.log(data);
  const [values, setReactSelectValue] = useState({ selectedOption: [] });

  const handleMultiChange = selectedOption => {
    setValue("reactSelect", selectedOption);
    setReactSelectValue({ selectedOption });
  }
  
  const handleChange = (e) => {
    setValue("AntdInput", e.target.value);
  }
  
  React.useEffect(() => {
    register({ name: "reactSelect" }); // custom register react-select 
    register({ name: "AntdInput" }); // custom register antd input
  }, [register])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name="HelloWorld" inputRef={register} />
      <InputField name="AntdInput" onChange={handleChange} />
      <Select
        value={values.selectedOption}
        options={options}
        onChange={handleMultiChange}
        isMulti
      />
      <input type="submit" />
    </form>
  );
}
`

export const uiLibraryHookInput = `import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Input from "@material-ui/core/Input";
import { Input as InputField } from "antd";

export default function App() {
  const { control, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller as={<Input />} name="HelloWorld" control={control} />
      <Controller as={<InputField />} name="AntdInput" control={control} />
      <Controller
        as={<Select />}
        name="reactSelect"
        control={control}
        onChange={([selected]) => {
          // React Select return object instead of value for selection
          return { value: selected };
        }}
      />

      <input type="submit" />
    </form>
  );
}
`

export const controlledComponent = `import React from "react";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import { TextField, Checkbox } from "@material-ui/core";

function App() {
  const methods = useForm();
  const { handleSubmit, control, reset } = methods;
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {* // Preferred syntax on most cases. If you need props, pass TextField props to Controller props (forwarded) *}
      <Controller as={TextField} name="TextField" control={control} />
      
      {* // Another possibility, any potential props passed to <Checkbox/> will be overrided. SomeName => Checkbox *}
      <Controller
        as={<Checkbox name="SomeName"/>}
        name="Checkbox"
        value="test"
        control={control}
      />

      <button>Submit</button>
    </form>
  );
}
`

export const globalState = `import React from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import updateAction from './actions'

export default function App(props) {
  const { register, handleSubmit, setValue } = useForm()
  // Submit your data into Redux store
  const onSubmit = (data) => props.updateAction(data)
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name="firstName" defaultValue={props.firstName} ref={register} />
      <Input name="lastName" defaultValue={props.lastName} ref={register} />
      <input type="submit" />
    </form>
  );
}

// Connect your component with redux
connect(({ firstName, lastName }) => ({ firstName, lastName }), updateAction)(YourForm)
`

export const errors = `import React from 'react'
import { useForm } from 'react-hook-form'

export default function App() {
  const { register, errors, handleSubmit } = useForm()
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name="firstName" ref={register({ required: true })} />
      {errors.firstName && 'First name is required'}
      <Input name="lastName" ref={register({ required: true })} />
      {errors.lastName && 'Last name is required'}
      <input type="submit" />
    </form>
  );
}
`

export const applyValidation = `import React from 'react'
import { useForm } from 'react-hook-form'

export default function App() {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register({ required: true, maxlength: 20 })} />
      <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
      <input name="age" type="number" ref={register({ min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}`
