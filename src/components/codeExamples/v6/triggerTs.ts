export default `import React from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  firstName: string
  lastName: string
}

export default function App() {
  const { register, trigger, errors } = useForm<FormInputs>();

  return (
    <form>
      <input name="firstName" ref={register({ required: true })} />
      <input name="lastName" ref={register({ required: true })} />
      <button type="button" onClick={() => { trigger("lastName"); }}>Trigger</button>
      <button type="button" onClick={() => { trigger(["firstName", "lastName"]); }}>Trigger Multiple</button>
      <button type="button" onClick={() => { trigger(); }}>Trigger All</button>
      <button
        type="button"
        onClick={async () => {
          const result = await trigger("lastName");
          if (result) { console.log("valid input") }
        }}
      >
        Trigger Result
      </button>
    </form>
  );
}`
