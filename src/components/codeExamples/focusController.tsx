export default `import React, { useEffect, useRef } from "react"
import { useForm } from "react-hook-form"

export default function App() {
  const inputRef = useRef();
  const { control, handleSubmit, formState } = useForm({});

  useEffect(() => {
    if (formState.errors.test) {
      inputRef.current.focus();
    }
  }, [formState]);

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <Controller as={<ExternalInput ref={inputRef} />} name="test" control={control} rules={{ required: true }} />
      <button>Submit</button>
    </form>
  );
}`
