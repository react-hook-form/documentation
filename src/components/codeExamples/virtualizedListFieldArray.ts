export default `
import React from "react";
import { FixedSizeList } from "react-window";
import { Controller, useFieldArray, useForm } from "react-hook-form";

const items = Array.from(Array(1000).keys()).map((i) => ({
  title: \`List \${i}\`,
  quantity: Math.floor(Math.random() * 10)
}))

function App() {
  const { control, getValues } = useForm({
    defaultValues: {
      test: items
    },
  });
  const { fields, remove } = useFieldArray({ control, name: "test" });

  return (
    <FixedSizeList
      width={400}
      height={500}
      itemSize={40}
      itemCount={fields.length}
      itemData={fields}
      itemKey={(i) => fields[i].id}
    >
      {({ style, index, data }) => {
        const defaultValue =
          getValues()["test"][index].quantity ?? data[index].quantity;

        return (
          <form style={style}>
            <Controller
              render={({ field }) => <input {...field} />}
              name={\`test[\${index}].quantity\`}
              defaultValue={defaultValue}
              control={control}
            />
          </form>
        );
      }}
    </FixedSizeList>
  );
}
`
