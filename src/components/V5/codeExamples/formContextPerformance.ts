export default `import React from "react";
import { useForm, FormContext, useFormContext } from "react-hook-form";

export default function App() {
  const methods = useForm();
  const onSubmit = data => console.log(data);

  return (
    <FormContext {...methods}>
      // pass all methods into the context
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <NestedInput />
        <input type="submit" />
      </form>
    </FormContext>
  );
}

function NestedInput() {
  const {
    register,
    formState: { dirty }
  } = useFormContext();
  
  // we can use React.memo to prevent re-render except dirty state changed
  return React.useMemo(
    () => (
      <div>
        <input name="test" ref={register} />
        {dirty && <p>This field is dirty</p>}
      </div>
    ),
    [dirty]
  );
}

`
