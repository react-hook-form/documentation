export default `import React, { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const useYupValidationResolver = validationSchema =>
  useCallback(
    async data => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false
        });

        return {
          values,
          errors: {}
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message
              }
            }),
            {}
          )
        };
      }
    },
    [validationSchema]
  );
  
const validationSchema = yup.object({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required")
});

export default function App() {
  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, register } = useForm({ resolver });

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <input name="firstName" ref={register} />
      <input name="lastName" ref={register} />
      <input type="submit" />
    </form>
  );
}

`
