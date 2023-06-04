export const formWeb = `import { useForm, Form } from 'react-hook-form';

function App() {
  const {
    control,
    register,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    // progressive: true, optional prop for progressive enhancement
  });

  return (
    <div>
      // Use action prop to make post submission with formData
      <Form
        action="/api"
        control={control}
        onSuccess={() => {
          alert("Success");
        }}
        onError={() => {
          alert("error");
        }}
      >
        <input {...register("name")} />
  
        {isSubmitSuccessful && <p>Form submit successful.</p>}
  
        {errors?.root?.server && <p>Form submit failed.</p>}
  
        <button>submit</button>
      </Form>
      
      // Manual form submission
      <Form
        onSubmit={async ({ formData, data, formDataJson, event }) => {
          await fetch("api", {
            method: "post",
            body: formData,
          });
        }}
      >
        <input {...register("test")} />
        <button>submit</button>
      </Form>
    </div>
  );
}
`

export const formNative = `import { useForm, Form } from 'react-hook-form';

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
