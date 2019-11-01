export default `import * as React from "react";
import useForm from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
};

export default function App() {
  const { register, setValue, handleSubmit, errors } = useForm<FormData>();
  const onSubmit = handleSubmit(({ firstName, lastName }) => {
    console.log(firstName, lastName);
  }); // firstName and lastName will have correct type

  return (
    <form onSubmit={onSubmit}>
      <label>First Name</label>
      <input name="firstName" ref={register} />
      <label>Last Name</label>
      <input name="lastName" ref={register} />
      <button
        type="button"
        onClick={() => {
          setValue("lastName", "luo"); // ✅
          setValue("firstName", true); // ❌: true is not string
          errors.bill; // ❌: property bill does not exist
        }}
      >
        SetValue
      </button>
    </form>
  );
}
`
