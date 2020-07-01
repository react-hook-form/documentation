export default `import React, { useEffect, useRef } from "react"
import { useForm } from "react-hook-form"

export default function App() {
  const inputRef = useRef();
  const { control, handleSubmit, errors } = useForm({});

  useEffect(() => {
    if (errors.test) {
      inputRef.current.focus();
    }
  });

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <Controller as={<ExternalInput ref={inputRef} />} name="test" control={control} rules={{ required: true }} />
      <button>Submit</button>
    </form>
  );
}`
