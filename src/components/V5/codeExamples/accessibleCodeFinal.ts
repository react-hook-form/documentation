export default `import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label for="name">Name</label>
      <input
        type="text"
        id="name"
        {/* use aria-invalid to indicate field contain error */}
        aria-invalid={errors.name ? "true" : "false"}
        {/* use aria-describedby to associate with error messages */}
        aria-describedby="error-name-required error-name-maxLength"
        ref={register({ required: true, maxLength: 30 })}
      />
      {/* the id field is used to associated with aria-describedby*/}
      <span
        role="alert"
        id="error-name-required"
        style={{
          display: errors.name && errors.name.type === "required"
            ? "block"
            : "none"
        }}
      >
        This is required
      </span>
      <span
        role="alert"
        id="error-name-maxLength"
        style={{
          display: errors.name && errors.name.type === "maxLength"
            ? "block"
            : "none"
        }}
      >
        Max length exceeded
      </span>
      <input type="submit" />
    </form>
  );
}
`
