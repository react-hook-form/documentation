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
              name={\`firstName[\${index}]\`}
              placeholder="first name"
              ref={register({ required: true })}
            />
            
            <label htmlFor="lastName">Last Name</label>
            <input
              name={\`lastName[\${index}]\`}
              placeholder="last name"
              ref={register({ required: true })}
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
