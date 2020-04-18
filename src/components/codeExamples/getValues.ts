export default `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, getValues } = useForm();

  return (
    <form>
      <input name="test" ref={register} />
      <input name="test1" ref={register} />

      <button
        type="button"
        onClick={() => {
          const values = getValues();
          const singleValue = getValues("test");
          const nestedObjectValue = getValues({ nested: true });
        }}
      >
        Get Values
      </button>
    </form>
  );
}`
