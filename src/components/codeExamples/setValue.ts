export default `import React from "react"
import { useForm } from "react-hook-form"

export default function App() {
  const { register, setValue } = useForm()

  return (
    <form>
      <input name="test" ref={register} />
      <input name="test1" ref={register} />
      <input name="object.firstName" ref={register} />
      <input name="array[0].firstName" ref={register} />
      <button type="button" onClick={() => {
        // manually set the 'test' field with value 'bill'
        setValue('test', 'bill')
        
        // set multiple values
        setValue([
          { test : '1', },
          { test1 : '2', },
        ])
        
        // set value as object or array
        setValue('object', { firstName: 'test' })
        setValue('array', [{ firstName: 'test' }])
      }}>SetValue</button>
    </form>
  )
}`
