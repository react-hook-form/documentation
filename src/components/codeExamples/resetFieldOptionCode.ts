export default `import * as React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    resetField,
    formState: { isDirty, isValid, errors, touchedFields, dirtyFields }
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: ""
    }
  });

  return (
    <form>
      <input {...register("firstName", { required: true })} />

      <p>isDirty: {isDirty && "dirty"}</p>
      <p>touchedFields: {touchedFields.firstName && "touched field"}</p>
      <p>dirtyFields:{dirtyFields.firstName && "dirty field"}</p>
      <p>isValid: {isValid && "valid"}</p>
      <p>error: {errors.firstName && "error"}</p>
      
      <hr />

      <button
        type="button"
        onClick={() => resetField("firstName", { keepError: true })}
      >
        Reset keep error
      </button>
      <button
        type="button"
        onClick={() => resetField("firstName", { keepTouched: true })}
      >
        Reset keep touched fields
      </button>
      <button
        type="button"
        onClick={() => resetField("firstName", { keepDirty: true })}
      >
        Reset keep dirty fields
      </button>
      <button
        type="button"
        onClick={() => resetField("firstName", { defaultValue: "New" })}
      >
        update defaultValue
      </button>
    </form>
  );
}
`
