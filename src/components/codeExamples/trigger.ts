export default `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, trigger, formState: { errors } } = useForm();

  return (
    <form>
      <input {...register("firstName", { required: true })} />
      <input {...register("lastName", { required: true })} />
      <button
        type="button"
        onClick={async () => {
          const result = await trigger("lastName");
          // const result = await trigger("lastName", { shouldFocus: true }); allowed to focus input
        }}
      >
        Trigger
      </button>
      <button
        type="button"
        onClick={async () => {
          const result = await trigger(["firstName", "lastName"]);
        }}
      >
        Trigger Multiple
      </button>
      <button
        type="button"
        onClick={() => {
          trigger();
        }}
      >
        Trigger All
      </button>
    </form>
  );
}
`
