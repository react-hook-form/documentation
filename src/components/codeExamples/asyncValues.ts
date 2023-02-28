export default `function App() {
  const { data } = useQuery(); // data returns { firstName: '', lastName: '' }
  const { register, handleSubmit } = useForm({
    values: data,
    resetOptions: {
      keepDirtyValues: true, // keep dirty fields unchanged, but update defaultValues
    }
  });
}`
