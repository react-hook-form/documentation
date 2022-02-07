export default `import { useForm, FormProvider, useFormContext } from "react-hook-form";

type FormValues = {
  test: { name: string }[];
};

const Test = () => {
  const context = useFormContext<FormValues>();

  return (
    <>
      {context?.fieldArrays?.test.map((field) => (
        <input key={field.id} />
      ))}
    </>
  );
};

const App = () => {
  const methods = useForm();
  const testFieldArray = useFieldArray({
    control: methods.control,
    name: 'test',
  });

  return (
    <FormProvider
      {...methods}
      fieldArrays={{
        test: testFieldArray,
      }}
    >
      <form>
        <Test />
      </form>
    </FormProvider>
  );
};
`
