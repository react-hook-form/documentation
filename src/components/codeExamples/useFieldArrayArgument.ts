export default `function Test() {
  const { control, register } = useForm();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "test", // unique name for your Field Array
      // keyName: 'id', default to "id", you can change the key name
    }
  );

  return (
    {fields.map((field, index) => (
      {/* important: using id from to track item added or removed */}
      <div key={field.id}>
        <input name={\`test[\${index}]\`} ref={register()} />
      </div>
    ))}
  );
}

`
