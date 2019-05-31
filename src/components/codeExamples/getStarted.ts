export const registerCode = `import React from 'react'
import useForm from 'react-hook-form'

function YourForm() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register} />
      <input name="lastName" ref={register} />
      <select name="gender" ref={register}>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <input type="submit" />
    </form>
  );
}`

export const migrateCode = `import React from 'react'
import useForm from 'react-hook-form'

// The following component is an example of your existing Input Component 
const Input => ({ label, register, required }) = ( 
  <>
    <label>label</label>
    <input name={label} ref={register({ required })} />
  </>
)

function YourForm() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" register={register} required />
      <input type="submit" />
    </form>
  )
}`

export const uiLibrary = `import React from 'react'
import useForm from 'react-hook-form'
import Select from "react-select"
import Input from "@material-ui/core/Input"

function YourForm() {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => console.log(data)
  const [values, setReactSelect] = useState({ selectedOption: [] })

  const handleMultiChange = selectedOption => {
    setValue("reactSelect", selectedOption)
    setReactSelect({ selectedOption })
  }
  
  React.useEffect(() => {
    register({ name: "reactSelect" })
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name="HelloWorld" inputRef={register} />
        
      <Select
        value={values.selectedOption}
        options={options}
        onChange={handleMultiChange}
        isMulti
      />
      
      <input type="submit" />
    </form>
  )
}
`

export const globalState = `import React from 'react'
import useForm from 'react-hook-form'
import { connect } from 'react-redux'
import updateAction from './actions'

function YourForm(props) {
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
import useForm from 'react-hook-form'

function YourForm(props) {
  const { register, errors } = useForm()
  
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
import useForm from 'react-hook-form'

function YourForm() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register({ required: true, maxlength: 20 })} />
      <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
      <input name="age" type="number" ref={register({ min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}`
