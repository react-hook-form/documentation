export default `import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, errors, formState } = useForm();
  const onSubmit = data => console.log(data);
  // Read the formState before render to subscribe the form state through the Proxy
  const { dirty, isSubmitting, touched, submitCount } = formState;
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="test" ref={register} />
      <input type="submit" />
    </form>
  );
}`
