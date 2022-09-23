export default `import Select from "react-select";
import { TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function App() {
  const { handleSubmit, control } = useForm();

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <Controller as={TextField} name="TextField" control={control} defaultValue="" />
      
      <Controller
        as={<Select options={options} />}
        control={control}
        rules={{ required: true }}
        onChange={([selected]) => {
          // Place your logic here
          return selected;
        }}
        name="reactSelect"
        defaultValue={{ value: "chocolate" }}
      />
      
      <button>submit</button>
    </form>
  );
}
`
