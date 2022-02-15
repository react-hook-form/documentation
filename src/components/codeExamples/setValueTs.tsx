export default `import { useForm } from "react-hook-form";

const App = () => {
  const { register, setValue } = useForm({
    firstName: ''
  });

  return (
    <form>
      <input {...register("firstName", { required: true })} />
      <button onClick={() => setValue("firstName", "Bill")}>
        setValue
      </button>
      <button
        onClick={() =>
          setValue("firstName", "Luo", {
            shouldValidate: true,
            shouldDirty: true
          })
        }
      >
        setValue options
      </button>
    </form>
  );
};
`
