export default `import React, { useState } from "react";
import { useForm } from "react-hook-form";

function createArrayWithNumbers(length) {
  return Array.from({ length }, (_, k) => k + 1);
}

export default function App() {
  const { register, handleSubmit } = useForm();
  const [size, setSize] = useState(1);
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {createArrayWithNumbers(size).map(index => {
        return (
          <>
            <label htmlFor="firstName">First Name</label>
            <input
              placeholder="first name"
              {...register(\`firstName[\${index}]\`, { required: true })}
            />
            
            <label htmlFor="lastName">Last Name</label>
            <input
              placeholder="last name"
              {...register(\`lastName[\${index}]\`, { required: true })}
            />
          </>
        );
      })}

      <button type="button" onClick={() => setSize(size + 1)} >
        Add Person
      </button>
      
      <input type="submit" />
    </form>
  );
}
`
