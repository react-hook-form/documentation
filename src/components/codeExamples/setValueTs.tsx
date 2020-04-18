export default `import React from "react"
import { useForm } from "react-hook-form"

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
  const { setValue } = useForm<FormValues>()
  
  setValue('string', 'test')
  // function setValue<"string", string>(name: "string", value: string, shouldValidate?: boolean | undefined): void
  setValue('number', 1)
  // function setValue<"number", number>(name: "number", value: number, shouldValidate?: boolean | undefined): void
  setValue('number', 'error')
  // ❌: type error
  setValue([{ string: 'test' }])
  // function setValue<"string">(namesWithValue: DeepPartial<Pick<FormValues, "string">>[], shouldValidate?: boolean | undefined): void
  setValue([{ number: 'error' }])
  // ❌: type error
  setValue([{
    string: 'test',
    number: 1
  }])
  // function setValue<"string" | "number">(namesWithValue: DeepPartial<Pick<FormValues, "string" | "number">>[], shouldValidate?: boolean | undefined): void
  setValue([
    { string: 'test' },
    { number: 1 },
  ])
  // function setValue<"string" | "number">(namesWithValue: DeepPartial<Pick<FormValues, "string" | "number">>[], shouldValidate?: boolean | undefined): void
  setValue('object', { number: 1 });
  // function setValue<"object", { number: number }>(name: "object", value: DeepPartial<{ number: number; boolean: boolean }>, shouldValidate?: boolean | undefined): void
  setValue('object.boolean', true);
  // function setValue<"object.boolean", boolean>(name: "object.boolean", value: boolean, shouldValidate?: boolean | undefined): void
  setValue('array', [{ string: 'test' }])
  // function setValue<"array", { string: string; }[]>(name: "array", value?: (DeepPartial<{ string: string; boolean: boolean; }> | undefined)[] | undefined, shouldValidate?: boolean | undefined): void
  setValue('array[1].boolean', true)
  // function setValue<"array[1].boolean", boolean>(name: "array[1].boolean", value: boolean, shouldValidate?: boolean | undefined): void
  setValue('array[1].boolean', 'noerror')
  // function setValue<"array[1].boolean", string>(name: "array[1].boolean", value: string, shouldValidate?: boolean | undefined): void
  setValue<string, boolean>('array[1].boolean', 'error')
  // ❌: type error
  setValue([{ array: [{ boolean: false }]}])
  // function setValue<"array">(namesWithValue: DeepPartial<Pick<FormValues, "array">>[], shouldValidate?: boolean | undefined): void
  
  return <form />;
}`
