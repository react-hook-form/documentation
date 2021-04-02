export default `import React from "react";
import { useForm, FormProvider, FormContext, useFormContext } from "react-hook-form";

export default function App() {
  const methods = useForm();
  const onSubmit = data => console.log(data);

  return (
    <FormProvider {...methods} > // pass all methods into the context
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <NestedInput />
        <input type="submit" />
      </form>
    </FormProvider>
  );
}

function NestedInput() {
  return (
    <FormContext.Consumer>
      {({ register }) => <input name="test" ref={register} />}
    </FormContext.Consumer>
  );
}
`
