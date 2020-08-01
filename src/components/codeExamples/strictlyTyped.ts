export default `import { useTypedController } from '@hookform/strictly-typed';
import { useForm } from 'react-hook-form';
import { TextField, Checkbox } from '@material-ui/core';

type FormValues = {
  flat: string;
  nested: {
    object: { test: string };
    array: { test: boolean }[];
  };
};

export default function App() {
  const { control, handleSubmit } = useForm<FormValues>();
  const TypedController = useTypedController<FormValues>({ control });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <TypedController
        name="flat"
        defaultValue=""
        render={(props) => <TextField {...props} />}
      />

      <TypedController
        as="textarea"
        name={['nested', 'object', 'test']}
        defaultValue=""
        rules={{ required: true }}
      />

      <TypedController
        name={['nested', 'array', 0, 'test']}
        defaultValue={false}
        render={(props) => <Checkbox {...props} />}
      />

      {/* ❌: Type '"notExists"' is not assignable to type 'DeepPath<FormValues, "notExists">'. */}
      <TypedController as="input" name="notExists" defaultValue="" />

      {/* ❌: Type 'number' is not assignable to type 'string | undefined'. */}
      <TypedController
        as="input"
        name={['nested', 'object', 0, 'notExists']}
        defaultValue=""
      />

      {/* ❌: Type 'true' is not assignable to type 'string | undefined'. */}
      <TypedController as="input" name="flat" defaultValue={true} />

      <input type="submit" />
    </form>
  );
}`
