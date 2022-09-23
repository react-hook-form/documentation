export default `import { useForm } from "react-hook-form";

type Inputs = {
  key1: string;
  key2: number;
  key3: {
    key1: number;
    key2: boolean;
  };
};

export default function App(props) {
  const { watch } = useForm<FormValues>;

  watch();
  // function watch(): FormValues
  watch({ nest: true });
  // function watch(option: { nest: boolean; }): FormValues
  watch("key1");
  // function watch<"key1">(field: "key1", defaultValue?: string | undefined): string
  watch("key1", "test");
  // function watch<"key1">(field: "key1", defaultValue?: string | undefined): string
  watch("key1", true);
  // ❌: type error
  watch("key3.key1");
  // function watch<unknown>(field: string, defaultValue?: unknown): unknown
  watch("key3.key1", 1);
  // function watch<1>(field: string, defaultValue?: 1 | undefined): number
  watch("key3.key1", "test");
  // function watch<"key3.key1", "test">(field: "key3.key1", defaultValue?: string | undefined): string
  watch("key3.key2", true);
  // function watch<true>(field: string, defaultValue?: true | undefined): boolean
  watch(["key1", "key2"]);
  // function watch<"key1" | "key2">(fields: ("key1" | "key2")[], defaultValues?: DeepPartial<Pick<FormValues, "key1" | "key2">> | undefined): Pick<FormValues, "key1" | "key2">
  watch(["key1", "key2"], { key1: "test" });
  // function watch<"key1" | "key2">(fields: ("key1" | "key2")[], defaultValues?: DeepPartial<Pick<FormValues, "key1" | "key2">> | undefined): Pick<FormValues, "key1" | "key2">
  watch(["key1", "key2"], { key1: "test", key2: true });
  // ❌: type error
  watch(["key1", "key3.key1"], { key1: "string" });
  // function watch(fields: string[], defaultValues?: DeepPartial<FormValues> | undefined): DeepPartial<FormValues>
  watch(["key1", "key3.key1"], { test: "string" });
  // ❌: type error
  watch<string, FormData["key3"]["key1"]>("key3.key1");
  //  => string
  watch<string, FormData["key3"]["key2"]>("key3.key2");
  //  => string
  
  return <form />;
}`
