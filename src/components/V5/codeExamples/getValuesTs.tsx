export default `import { useForm } from "react-hook-form";

// Flat input values
type Inputs = {
  key1: string;
  key2: number;
  key3: boolean;
  key4: Date;
};

export default function App() {
  const { register, getValues } = useForm<Inputs>();
  
  getValues();
  // function getValues(): Inputs
  getValues({ nest: true });
  // function getValues<true>(payload: {
  //     nest: true;
  // }): FormValues
  getValues({ nest: false });
  // function getValues<false>(payload: {
  //     nest: false;
  // }): FormValues

  return <form />;
}

// Nested input values
type Inputs1 = {
  key1: string;
  key2: number;
  key3: {
    key1: number;
    key2: boolean;
  };
  key4: string[];
};

export default function Form() {
  const { register, getValues } = useForm<Inputs1>();
  
  getValues();
  // function getValues(): Record<string, unknown>
  getValues({ nest: true });
  // function getValues<true>(payload: {
  //     nest: true;
  // }): FormValues
  getValues({ nest: false });
  // function getValues<false>(payload: {
  //     nest: false;
  // }): Record<string, unknown>
  getValues("key1");
  // function getValues<"key1", unknown>(payload: "key1"): string
  getValues("key2");
  // function getValues<"key2", unknown>(payload: "key2"): number
  getValues("key3.key1");
  // function getValues<"key3.key1", unknown>(payload: "key3.key1"): unknown
  getValues<string, number>("key3.key1");
  // function getValues<string, number>(payload: string): number
  getValues<string, boolean>("key3.key2");
  // function getValues<string, boolean>(payload: string): boolean
  getValues("key4");
  // function getValues<"key4", unknown>(payload: "key4"): string[]

  return <form />;
}
`
