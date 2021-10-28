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

      <ul>
        <li>
          <p>isDirty: {isDirty && "dirty"}</p>
        </li>
        <li>
          <p>touchedFields: {touchedFields.firstName && "touched field"}</p>
        </li>
        <li>
          <p>dirtyFields:{dirtyFields.firstName && "dirty field"}</p>
        </li>
        <li>
          <p>isValid: {isValid && "valid"}</p>
        </li>
        <li>
          <p>error: {errors.firstName && "error"}</p>
        </li>
      </ul>

      <hr />

      <ul>
        <li>
          <button
            type="button"
            onClick={() => resetField("firstName", { keepError: true })}
          >
            Reset keep error
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => resetField("firstName", { keepTouched: true })}
          >
            Reset keep touched fields
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => resetField("firstName", { keepDirty: true })}
          >
            Reset keep dirty fields
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => resetField("firstName", { defaultValue: "New" })}
          >
            update defaultValue
          </button>
        </li>
      </ul>
    </form>
  );
}
`
