import * as React from "react"
import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"
import SideMenu from "./SideMenu"
import { useStateMachine } from "little-state-machine"
import CodeArea from "./CodeArea"
import TabGroup from "./TabGroup"

const links = [
  {
    title: "NestedValue",
  },
  {
    title: "Resolver",
  },
  {
    title: "SubmitHandler",
  },
  {
    title: "Control",
  },
]

const enLinks = [
  {
    title: "NestedValue",
  },
  {
    title: "Resolver",
  },
  {
    title: "SubmitHandler",
  },
  {
    title: "Control",
  },
]

export default ({ defaultLang }: { defaultLang: string }) => {
  const {
    state,
    state: { language },
  } = useStateMachine()
  const [activeIndex, setActiveIndex] = React.useState(0)
  // @ts-ignore
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }

  return (
    <div className={containerStyles.container}>
      <section>
        <h1 className={typographyStyles.headingWithTopMargin} id="main">
          TS Support
        </h1>
        <p className={typographyStyles.subHeading}>
          List of exported TS Types.
        </p>
      </section>

      <div className={containerStyles.wrapper}>
        <SideMenu
          isStatic
          version={6}
          links={links}
          activeIndex={activeIndex}
          enLinks={enLinks}
          goToSection={() => {}}
          currentLanguage={currentLanguage}
        />

        <main>
          <section>
            <code className={typographyStyles.codeHeading}>
              <h2>NestedValue</h2>
            </code>

            <p>
              This type will be useful when the input itself return nested data
              object.
            </p>

            <TabGroup buttonLabels={["Code Example", "Type"]}>
              <CodeArea
                url="https://codesandbox.io/s/react-hook-form-nestedvalue-dujyc"
                rawData={`import React from 'react';
import { useForm, NestedValue } from 'react-hook-form';
import { Autocomplete, TextField, Select } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

type Option = {
  label: string;
  value: string;
};

const options = [
  { label: 'Chocolate', value: 'chocolate' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Vanilla', value: 'vanilla' },
];

export default function App() {
  const { register, handleSubmit, watch, setValue, errors } = useForm<{
    autocomplete: NestedValue<Option[]>;
    select: NestedValue<number[]>;
  }>({
    defaultValues: { autocomplete: [], select: [] },
  });
  const onSubmit = handleSubmit((data) => console.log(data));

  React.useEffect(() => {
    register('autocomplete', {
      validate: (value) => value.length || 'This is required.',
    });
    register('select', {
      validate: (value) => value.length || 'This is required.',
    });
  }, [register]);

  return (
    <form onSubmit={onSubmit}>
      <Autocomplete
        options={options}
        getOptionLabel={(option: Option) => option.label}
        onChange={(e, options) => setValue('autocomplete', options)}
        renderInput={(params) => (
          <TextField
            {...params}
            error={Boolean(errors?.autocomplete)}
            helperText={errors?.autocomplete?.message}
          />
        )}
      />

      <Select value="" onChange={(e) => setValue('muiSelect', e.target.value as number[])}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
      </Select>

      <input type="submit" />
    </form>
  );
}`}
              />
              <CodeArea
                rawData={`import { useForm, NestedValue } from 'react-hook-form';

type FormValues = {
  key1: string;
  key2: number;
  key3: NestedValue<{
    key1: string;
    key2: number;
  }>;
  key4: NestedValue<string[]>
};

const { errors } = useForm<FormValues>();

errors?.key1?.message // no type error
errors?.key2?.message // no type error
errors?.key3?.message // no type error
errors?.key4?.message // no type error`}
              />
            </TabGroup>
          </section>

          <hr />

          <section>
            <code className={typographyStyles.codeHeading}>
              <h2>Resolver</h2>
            </code>

            <p>
              This type will support users to write custom validation resolver.
            </p>

            <CodeArea
              rawData={`import React from 'react';
import { useForm, Resolver } from 'react-hook-form';

type FormValues = {
  firstName: string;
  lastName: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.firstName ? values : {},
    errors: !values.firstName
      ? {
          firstName: {
            type: 'required',
            message: 'This is required.',
          },
        }
      : {},
  };
};

export default function App() {
  const { register, handleSubmit, errors } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <input name="firstName" placeholder="Kotaro" ref={register} />
      {errors?.firstName && <p>{errors.firstName.message}</p>}
      
      <label>Last Name</label>
      <input name="lastName" placeholder="Sugawara" ref={register} />

      <input type="submit" />
    </form>
  );
}
`}
            />
          </section>

          <hr />

          <section>
            <code className={typographyStyles.codeHeading}>
              <h2>SubmitHandler</h2>
            </code>
            <p>
              This type is useful when submitted data is not matching with{" "}
              <code>FormValues</code> type.
            </p>

            <CodeArea
              rawData={`import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

export default function App() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register} />
      <input name="lastName" ref={register} />
      <input name="email" type="email" ref={register} />

      <input type="submit" />
    </form>
  );
}
`}
            />
          </section>

          <hr />

          <section>
            <code className={typographyStyles.codeHeading}>
              <h2>Control</h2>

              <p>
                This type support custom hook such as <code>useFieldArray</code>
                , <code>useWatch</code> and future custom hooks in this library.
              </p>
            </code>

            <CodeArea
              rawData={`import React from "react";
import { useForm, useWatch, Control } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
};

function IsolateReRender({ control }: { control: Control }) {
  const firstName = useWatch<FormValues["firstName"]>({
    control,
    name: "firstName",
    defaultValue: "default"
  });

  return <div>{firstName}</div>;
}

export default function App() {
  const { register, control, handleSubmit } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <input ref={register} name="firstName" />
      <input ref={register} name="lastName" />
      <IsolateReRender control={control} />

      <input type="submit" />
    </form>
  );
}
`}
            />
          </section>

          <hr />

          <section>
            <code className={typographyStyles.codeHeading}>
              <h2>UseFormMethods</h2>
            </code>

            <p>
              This type is useful when you are using <code>Context</code>'s{" "}
              <code>Consumer</code> instead of <code>useFormContext</code> hook.
            </p>

            <CodeArea
              rawData={`import React from "react";
import { useForm, UseFormMethods, SubmitHandler } from "react-hook-form";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input ref={ref} {...props} />
));

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { options: Option[] };

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, ...props }, ref) => (
    <select ref={ref} {...props}>
      {options.map(({ label, value }) => (
        <option value={value}>{label}</option>
      ))}
    </select>
  )
);

type FormProps<TFormValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormMethods<TFormValues>) => React.ReactNode;
};

const Form = <TFormValues extends Record<string, any> = Record<string, any>>({
  onSubmit,
  children
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>();
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  );
};

type FormValues = {
  firstName: string;
  lastName: string;
  sex: string;
};

export default function App() {
  const onSubmit = (data: FormValues) => alert(JSON.stringify(data));

  return (
    <Form<FormValues> onSubmit={onSubmit}>
      {({ register }) => (
        <>
          <Input name="firstName" ref={register} />
          <Input name="lastName" ref={register} />
          <Select
            name="sex"
            ref={register}
            options={[
              { label: "Female", value: "female" },
              { label: "Male", value: "male" }
            ]}
          />
          <Input type="submit" />
        </>
      )}
    </Form>
  );
}
`}
            />
          </section>
        </main>
      </div>
    </div>
  )
}
