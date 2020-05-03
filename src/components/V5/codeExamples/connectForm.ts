export default `import { FormContext, useForm, useFormContext } from "react-hook-form";

export const ConnectForm = ({ children }) => {
 const methods = useFormContext();
 
 return children({
   ...methods
 });
};

// The following example will be the usage
export const DeepNest = () => (
  <ConnectForm>
    {({ register }) => <input ref={register} name="deepNestedInput" />}
  </ConnectForm>
);

export const App = () => {
  const methods = useForm();
  
  return (
    <FormContext {...methods} >
      <form>
       <DeepNest />
      </form>
    </FormContext>
  );
}
`
