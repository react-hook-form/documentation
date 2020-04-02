export default `import { useCallback } from "react";
import { useForm } from "react-hook-form";

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

const validationSchema = useMemo(
  () =>
    yup.object({
      firstName: yup.string().required("Required"),
      lastName: yup.string().required("Required")
    }),
  []
);

const validationResolver = useYupValidationResolver(validationSchema);

const form = useForm({ validationResolver });
`
