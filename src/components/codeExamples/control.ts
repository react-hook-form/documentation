export default `import { useForm, Controller } from "react-hook-form";

function App() {
  const { control } = useForm();
  
  return (
    <Controller
      render={({ field }) => <input {...field} />}
      name="firstName"
      control={control}
      defaultValue=""
    />
  );
}
`
