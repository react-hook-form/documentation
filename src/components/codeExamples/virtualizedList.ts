export default `import React from "react";
import { FormContext, useForm, useFormContext } from "react-hook-form";
import { VariableSizeList as List } from "react-window";

const items = Array.from(Array(1000).keys()).map((i) => ({
  title: "List \${i}",
  quantity: Math.floor(Math.random() * 10),
}));

const WindowedRow = React.memo(({ index, style, data, getValues, setValue }) => {
  const values = getValues();
  const qtyKey = "[\${index}].quantity";
  const qty = values[qtyKey];

  return (
    <div>
      <input
        // Rather than ref={register}, we use defaultValue and setValue
        defaultValue={qty}
        onChange={(e) => {
          setValue(
            qtyKey,
            isNaN(Number(e.target.value)) ? 0 : Number(e.target.value)
          );
        }}
      />
    </div>
  );
});

export default React.memo(({ items }) => {
  const formMethods = useForm({ defaultValues: items });
  const onSubmit = (data) => console.log(data);

  // We manually call register here for each field.
  React.useEffect(() => {
    items.forEach((item, idx) => {
      formMethods.register("[\${idx}].quantity");
    });
  }, [formMethods, items]);

  return (
    <form onSubmit={formMethods.handleSubmit(onSubmit)}>
      <List
        itemCount={items.length}
        itemSize={() => 50}
        itemData={items}
        {{ ...formMethods }}
      >
        {WindowedRow}
      </List>
      <button type="submit">Submit</button>
    </form>
  );
});
`
