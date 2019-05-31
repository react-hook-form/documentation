export default `import React from "react";
import useForm from "react-hook-form";

export default function YourForm() {
  const { register, getValues } = useForm();

  return (
    <form>
      <input name="test" ref={register} />
      <input name="test1" ref={register} />

      <button
        type="button"
        onClick={() => {
          const values = getValues();
          // you can run auto save function here eg: autoSave(values)
        }}
      >
        Get Values
      </button>
    </form>
  );
}`
