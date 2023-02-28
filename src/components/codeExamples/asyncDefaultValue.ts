export default `function App() {
  const { register, handleSubmit } = useForm({
    defaultValues: async () => {
      const response = await fetch('/api')
      return await response.json() // return { firstName: '', lastName: '' }
    }
  });
}`
