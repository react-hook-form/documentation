export default `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, errors, setError } = useForm();
  
  useEffect(() => register('username'), [register]);

  return (
    <form>
      <input
        name="username"
        onChange={e => {
          // set an error with type and message
          setError("username", { type: "notMatch", message: "please choose a different username" });
          // this error is not associated with an actual input, will require manual clear error
          setError("persist", { type: "manual", message: "This error message will require clearError." });
        }}
        ref={register}
      />
      {errors.username && errors.username.message}
    </form>
  );
}`
