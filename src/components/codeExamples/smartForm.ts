export default `import React from "react";
import { Form, Input, Select } from "./Components";

export default function App() {
  const onSubmit = data => console.log(data);

  return (
    <Form onSubmit={onSubmit}>
      <Input name="firstName" />
      <Input name="lastName" />
      <Select name="gender" options={["female", "male", "other"]} />

      <Input type="submit" value="Submit" />
    </Form>
  );
}
`
