export default `import React, { memo } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

// we can use React.memo to prevent re-render except dirty state changed
const NestedInput = memo(
  ({ register, formState: { dirty } }) => (
    <div>
      <input name="test" ref={register} />
      {dirty && <p>This field is dirty</p>}
    </div>
  ),
  (prevProps, nextProps) =>
    prevProps.formState.dirty === nextProps.formState.dirty
);

export const NestedInputContainer = ({ children }) => {
  const methods = useFormContext();

  return <NestedInput {...methods} />;
};

export default function App() {
  const methods = useForm();
  const onSubmit = data => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <NestedInputContainer />
        <input type="submit" />
      </form>
    </FormProvider>
  );
}
`
