export default `import { useForm } from "react-hook-form";

const App = () => {
  const { register, setValue } = useForm();
  
  return (
    <form>
      <input {...register("firstName")} />
      <button type="button" onClick={() => setValue("firstName", "Bill")}>
        setValue
      </button>
      <button
        type="button"
        onClick={() =>
          setValue("lastName", "firstName", {
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
