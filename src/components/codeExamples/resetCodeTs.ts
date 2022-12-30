export default `import { useForm } from "react-hook-form";

interface UseFormInputs {
  firstName: string
  lastName: string
}

export default function Form() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<UseFormInputs>();
  const onSubmit = (data: UseFormInputs) => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First name</label>
      <input {...register("firstName", { required: true })} />

      <label>Last name</label>
      <input {...register("lastName")} />

      <input type="submit" />
      <input
        type="reset"
        value="Standard Reset Field Values"
      />
      <input
        type="button"
        onClick={() => reset()}
        value="Custom Reset Field Values & Errors"
      />
    </form>
  );
}
`
