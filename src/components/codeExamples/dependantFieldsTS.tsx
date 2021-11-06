export default `import * as React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  a: string;
  b: string;
  c: string;
};

export default function App() {
  const { watch, register, handleSubmit, setValue, formState } = useForm<
    FormValues
  >({
    defaultValues: {
      a: "",
      b: "",
      c: ""
    }
  });
  const onSubmit = (data: FormValues) => console.log(data);
  const [a, b] = watch(["a", "b"]);

  React.useEffect(() => {
    if (formState.touchedFields.a && formState.touchedFields.b && a && b) {
      setValue("c", \`\${a} \${b}\`);
    }
  }, [setValue, a, b, formState]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("a")} placeholder="a" />
      <input {...register("b")} placeholder="b" />
      <input {...register("c")} placeholder="c" />
      <input type="submit" />

      <button
        type="button"
        onClick={() => {
          setValue("a", "what", { shouldTouch: true });
          setValue("b", "ever", { shouldTouch: true });
        }}
      >
        trigger value
      </button>
    </form>
  );
}
`
