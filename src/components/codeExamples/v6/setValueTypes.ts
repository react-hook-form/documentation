export default `import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  string: string;
  number: number;
  object: {
    number: number;
    boolean: boolean;
  };
  array: {
    string: string;
    boolean: boolean;
  }[];
};

export default function App() {
  const { setValue } = useForm<FormValues>();
  
  setValue("string", "test");
  // function setValue<"string", string>(name: "string", value: string, shouldValidate?: boolean | undefined): void
  setValue("number", 1);
  // function setValue<"number", number>(name: "number", value: number, shouldValidate?: boolean | undefined): void
  setValue("number", "error");
  
  return <form />;
}`
