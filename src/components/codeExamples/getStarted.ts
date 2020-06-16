export const registerCode = `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register} />
      <select name="gender" ref={register}>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <input type="submit" />
    </form>
  );
}`

export const registerCodeTs = `import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./styles.css";

// There are two genders here, but there can be many more!
enum GenderEnum {
  male = "male",
  female = "female"
}

interface IFormInput {
  firstName: String;
  gender: GenderEnum;
}

export default function App() {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input name="firstName" ref={register} />
      <label>Gender Selection</label>
      <select name="gender" ref={register}>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <input type="submit" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
`

export const migrateCode = `import React from "react";
import { useForm } from "react-hook-form";

// The following component is an example of your existing Input Component 
const Input = ({ label, register, required }) => ( 
  <>
    <label>{label}</label>
    <input name={label} ref={register({ required })} />
  </>
);

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef(({ label, register }, ref) => ( 
  <>
    <label>{label}</label>
    <select name={label} ref={ref}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" register={register} required />
      <Select label="Age" ref={register} />
      <input type="submit" />
    </form>
  );
}`

export const migrateCodeTs = `import React from "react";
import { useForm } from "react-hook-form";

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  register: ({ required }: { required?: boolean }) => RefReturn;
};

interface IInputProps {
  label: string;
}

// The following component is an example of your existing Input Component
const Input: React.FC<InputProps> = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input name={label} ref={register({ required })} />
  </>
);

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { options: Option[] } & HTMLSelectElement;

// you can use React.forwardRef to pass the ref too
const Select = React.forwardRef<SelectProps, { label: string }>(
  ({ label }, ref) => (
    <>
      <label>{label}</label>
      <select name={label} ref={ref}>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </>
  )
);

interface IFormValues {
  "First Name": string;
  Age: number;
}

const App = () => {
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit = (data: IFormValues) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" register={register} required />
      <Select label="Age" ref={register} />
      <input type="submit" />
    </form>
  );
};
`

export const uiLibrary = `import React from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import Input from "@material-ui/core/Input";
import { Input as InputField } from "antd";

export default function App() {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = data => console.log(data);
  
  const handleChange = (e) => {
    setValue("AntdInput", e.target.value);
  }
  
  React.useEffect(() => {
    register("AntdInput"); // custom register Antd input
  }, [register])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField name="name" onChange={handleChange} />
      <input type="submit" />
    </form>
  );
}
`

export const uiLibraryTs = `import React from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import Input from "@material-ui/core/Input";
import { Input as InputField } from "antd";

interface IFormInput {
  name: string
}

export default function App() {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = data => console.log(data);
  
  const handleChange = (e) => {
    setValue("AntdInput", e.target.value);
  }
  
  React.useEffect(() => {
    register("AntdInput"); // custom register Antd input
  }, [register])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField name="name" onChange={handleChange} />
      <input type="submit" />
    </form>
  );
}`

export const uiLibraryHookInput = `import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import MaterialUIInput from "@material-ui/core/Input";
import { Input as AntdInput } from "antd";

const App = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        as={MaterialUIInput}
        name="firstName"
        control={control}
        defaultValue=""
      />
      <Controller
        as={AntdInput}
        name="lastName"
        control={control}
        defaultValue=""
      />
      <Controller
        name="iceCreamType"
        as={Select}
        options={[
          { value: "chocolate", label: "Chocolate" },
          { value: "strawberry", label: "Strawberry" },
          { value: "vanilla", label: "Vanilla" }
        ]}
        control={control}
        rules={{ required: true }}
      />
      <input type="submit" />
    </form>
  );
};
`

export const uiLibraryHookInputTs = `import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import MaterialUIInput from "@material-ui/core/Input";
import { Input as AntdInput } from "antd";

interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: string;
}

const App = () => {
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        as={MaterialUIInput}
        name="firstName"
        control={control}
        defaultValue=""
        className="materialUIInput"
      />
      <Controller
        as={AntdInput}
        name="lastName"
        control={control}
        defaultValue=""
      />
      <Controller
        name="iceCreamType"
        as={Select}
        options={[
          { value: "chocolate", label: "Chocolate" },
          { value: "strawberry", label: "Strawberry" },
          { value: "vanilla", label: "Vanilla" }
        ]}
        control={control}
      />
      <input type="submit" />
    </form>
  );
};`

export const controlledComponent = `import React from "react";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import { TextField, Checkbox } from "@material-ui/core";

function App() {
  const methods = useForm();
  const { handleSubmit, control, reset } = methods;
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Option 1: pass a component to the Controller. */}
      <Controller as={TextField} name="TextField" control={control} defaultValue="" />
      
      {/* Option 2: use render props to assign events and value */}
      <Controller
        name="MyCheckbox"
        control={control}
        defaultValue={false}
        rules={{ required: true }}
        render=(props => <Checkbox {...props} />) // props contains: onChange, onBlur and value
      />
    </form>
  );
}
`

export const globalState = `import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import updateAction from "./actions";

export default function App(props) {
  const { register, handleSubmit, setValue } = useForm();
  // Submit your data into Redux store
  const onSubmit = data => props.updateAction(data);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name="firstName" defaultValue={props.firstName} ref={register} />
      <Input name="lastName" defaultValue={props.lastName} ref={register} />
      <input type="submit" />
    </form>
  );
}

// Connect your component with redux
connect(({ firstName, lastName }) => ({ firstName, lastName }), updateAction)(YourForm);
`

export const errors = `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, errors, handleSubmit } = useForm();
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name="firstName" ref={register({ required: true })} />
      {errors.firstName && "First name is required"}
      <Input name="lastName" ref={register({ required: true })} />
      {errors.lastName && "Last name is required"}
      <input type="submit" />
    </form>
  );
}
`

export const applyValidation = `import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register({ required: true, maxLength: 20 })} />
      <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
      <input name="age" type="number" ref={register({ min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}`

export const applyValidationTs = `import React from "react";
import { useForm } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

export default function App() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register({ required: true, maxLength: 20 })} />
      <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
      <input name="age" type="number" ref={register({ min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}`
