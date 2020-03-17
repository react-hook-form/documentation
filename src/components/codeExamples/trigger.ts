export default `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, triggerValidation, errors } = useForm();
  console.log(errors);

  return (
    <form>
      <input name="lastName" ref={register({ required: true })} />
      <button
        type="button"
        onClick={() => { triggerValidation("lastName"); }}
      >
        Trigger
      </button>
      <button
        type="button"
        onClick={async () => {
          const result = await triggerValidation("lastName");
          if (result) { console.log('valid input') }
        }}
      >
        Trigger
      </button>
    </form>
  );
}`
