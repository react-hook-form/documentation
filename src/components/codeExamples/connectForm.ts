export default `import { FormProvider, useForm, useFormContext } from "react-hook-form";

export const ConnectForm = ({ children }) => {
 const methods = useFormContext();
 
 return children({ ...methods });
};

export const DeepNest = () => (
  <ConnectForm>
    {({ register }) => <input {...register("deepNestedInput")} />}
  </ConnectForm>
);

export const App = () => {
  const methods = useForm();
  
  return (
    <FormProvider {...methods} >
      <form>
        <DeepNest />
      </form>
    </FormProvider>
  );
}
`
