export default `function Test() {
  const { control, register } = useForm();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "test" // unique name for your Field Array
    }
  );

  return (
    {fields.map((field, index) => (
      {/* important: using id from to track item added or removed */}
      <div key={field.id}>
        {/* register with empty validation make sure pass empty object  */}
        <input name={\`test[\${index}}]\`} ref={register({})} />
      </div>
    ))}
  );
}

`
