export default `function Test() {
  const { control, register } = useForm();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "test", // unique name for your Field Array
    // keyName: "id", default to "id", you can change the key name
  });

  return (
    {fields.map((field, index) => (
      <input
        key={field.id} // important to include key with field's id
        name={\`test[\${index}].value\`}
        ref={register()} // register() when there is no validation rules 
        defaultValue={field.value} // make sure to include defaultValue
      />
    ))}
  );
}

`
