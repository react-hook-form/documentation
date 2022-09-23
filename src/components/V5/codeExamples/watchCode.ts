export default `import { useForm } from "react-hook-form";

export default function App(props) {
  const { register, watch } = useForm();
  const watchYes = watch("yes", props.yes); // supply default value as second argument
  const watchAllFields = watch(); // watching every fields in the form
  const watchFields = watch(["yes", "number"]); // target specific fields by their names
  // watch array fields by the key, pet[0] and pet[1] will both be watched and returns values
  const pets = watch("pet"); 
  
  return (
    <form>
      <input name="textInput" ref={register({ required: true, maxLength: 50 })} />
      <input type="checkbox" name="yes" ref={register} />
      <input name="pet[0]" ref={register} />
      <input name="pet[1]" ref={register} />
      
      {watchYes && <input type="number" name="numberInput" ref={register({ min: 50 })} />}
      {/* based on yes selection to display numberInput */}
    </form>
  );
}`
