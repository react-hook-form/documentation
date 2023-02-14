export const formWeb = `import { useForm } from 'react-hook-form';

function App() {
  const { control, register, formState: { isSubmitSuccessful, errors } } = useForm({
    // progressive: true, optional prop for progressive enhancement
  });
  
  return (
    <Form action="/api" control={control}>
      <input {...register('name')} />
    
      {isSubmitSuccessful && <p>Form submit successful.<p>}
      
      {errors?.root?.server && <p>Form submit failed.</p>}
    
      <button>submit</button>
    </Form>
  )
}`

export const formNative = `import { uesForm } from 'react-hook-form';

function App() {
  const { control, register, formState: { isSubmitSuccessful, errors } } = useForm();
  
  return (
    <Form 
      action="/api" 
      control={control} 
      render={({ submit }) => {
        <View>
          {isSubmitSuccessful && <Text>Form submit successful.<Text>}
          
          {errors?.root?.server && <Text>Form submit failed.</Text>}
        
          <Button onPress={() => submit()} />
        </View>
      }}
    />
  )
}`
