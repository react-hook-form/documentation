export default `import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const defaultValues = {
  firstName: "bill",
  lastName: "luo"
};

export default function App() {
  const { register, reset, watch, setValue } = useForm({
    defaultValues
  });
  const values = watch();

  useEffect(() => {
    register("firstName", { required: true });
    register("lastName");
  }, [register]);

  return (
    <form>
      <input
        name="firstName"
        onChange={e => setValue("firstName", e.target.value)}
        value={values.firstName}
        placeholder="First Name"
      />
      <input
        name="lastName"
        onChange={e => setValue("lastName", e.target.value)}
        value={values.lastName}
        placeholder="Last Name"
      />
      <button
        type="button"
        onClick={() => {
          reset(defaultValues);
        }}
      >
        Reset
      </button>
    </form>
  );
}
`
