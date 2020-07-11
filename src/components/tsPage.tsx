import * as React from "react"
import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"
import SideMenu from "./SideMenu"
import { useStateMachine } from "little-state-machine"
import CodeArea from "./CodeArea"
import TabGroup from "./TabGroup"
import * as TS from "../data/ts"
import handleSubmitCodeTs from "./codeExamples/handleSubmitCodeTs"

const enLinks = [
  TS.en.nestedValue,
  TS.en.resolver,
  TS.en.submitHandler,
  TS.en.control,
  TS.en.useFormMethodsRef,
  TS.en.useFormOptions,
  TS.en.useFieldArrayOptions,
  TS.en.fieldError,
  TS.en.field,
  TS.en.mode,
  TS.en.validationRules,
]

export default ({ defaultLang }: { defaultLang: string }) => {
  const {
    state: { language },
  } = useStateMachine()
  const tsSectionsRef = React.useRef({
    NestedValueRef: null,
    ResolverRef: null,
    SubmitHandlerRef: null,
    ControlRef: null,
    UseFormMethodsRef: null,
    ValidationRulesRef: null,
    UseFormOptionsRef: null,
    UseFieldArrayOptionsRef: null,
    FieldErrorRef: null,
    FieldRef: null,
    ModeRef: null,
  })
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }

  React.useEffect(() => {
    if (location.hash) {
      setTimeout(() => goToSection(location.hash.substr(1)), 10)
    }
  }, [])

  const goToSection = (name) => {
    const url = window.location.href
    const hashIndex = url.indexOf("#")
    const filterName = name.replace(/ |-/g, "")

    history.pushState(
      {},
      null,
      hashIndex < 0
        ? `${url}#${filterName}`
        : `${url.substr(0, hashIndex)}#${filterName}`
    )

    const refName = `${filterName}Ref`

    if (tsSectionsRef.current[refName]) {
      tsSectionsRef.current[refName].scrollIntoView({ behavior: "smooth" })
    }
  }

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
          links={enLinks}
          enLinks={enLinks}
          goToSection={goToSection}
          currentLanguage={currentLanguage}
        />

        <main>
          <section ref={(ref) => (tsSectionsRef.current.NestedValueRef = ref)}>
            <code className={typographyStyles.codeHeading}>
              <h2>{TS[currentLanguage].nestedValue.title}</h2>
            </code>

            {TS[currentLanguage].nestedValue.description}

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

          <section ref={(ref) => (tsSectionsRef.current.ResolverRef = ref)}>
            <code className={typographyStyles.codeHeading}>
              <h2>{TS[currentLanguage].resolver.title}</h2>
            </code>

            {TS[currentLanguage].resolver.description}

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

          <section
            ref={(ref) => (tsSectionsRef.current.SubmitHandlerRef = ref)}
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS[currentLanguage].submitHandler.title}</h2>
            </code>
            {TS[currentLanguage].submitHandler.description}

            <CodeArea
              rawData={handleSubmitCodeTs}
              url="https://codesandbox.io/s/react-hook-form-handlesubmit-ts-994mz"
            />
          </section>

          <hr />

          <section ref={(ref) => (tsSectionsRef.current.ControlRef = ref)}>
            <code className={typographyStyles.codeHeading}>
              <h2>{TS[currentLanguage].control.title}</h2>
            </code>
            {TS[currentLanguage].control.description}

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

          <section
            ref={(ref) => (tsSectionsRef.current.UseFormMethodsRef = ref)}
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS[currentLanguage].useFormMethodsRef.title}</h2>
            </code>
            {TS[currentLanguage].useFormMethodsRef.description}

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
  const onSubmit = (data: FormValues) => console.log(data);

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

          <hr />

          <section
            ref={(ref) => (tsSectionsRef.current.UseFormOptionsRef = ref)}
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS[currentLanguage].useFormOptions.title}</h2>
            </code>
            {TS[currentLanguage].useFormOptions.description}

            <CodeArea
              rawData={`type UseFormOptions<
  TFieldValues extends FieldValues = FieldValues,
  TContext extends object = object
> = Partial<{
  mode: Mode;
  reValidateMode: Mode;
  defaultValues: UnpackNestedValue<DeepPartial<TFieldValues>>;
  resolver: Resolver<TFieldValues, TContext>;
  context: TContext;
  shouldFocusError: boolean;
  shouldUnregister: boolean;
  criteriaMode: 'firstError' | 'all';
}>;
`}
            />
          </section>

          <hr />

          <section
            ref={(ref) => (tsSectionsRef.current.UseFieldArrayOptionsRef = ref)}
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS[currentLanguage].useFieldArrayOptions.title}</h2>
            </code>
            {TS[currentLanguage].useFieldArrayOptions.description}

            <CodeArea
              rawData={`export type UseFieldArrayOptions<
  TKeyName extends string = 'id',
  TControl extends Control = Control
> = {
  name: string;
  keyName?: TKeyName;
  control?: TControl;
};`}
            />
          </section>

          <hr />

          <section ref={(ref) => (tsSectionsRef.current.FieldErrorRef = ref)}>
            <code className={typographyStyles.codeHeading}>
              <h2>{TS[currentLanguage].fieldError.title}</h2>
            </code>
            {TS[currentLanguage].fieldError.description}

            <CodeArea
              rawData={`type FieldError = {
  type: string;
  ref?: Ref;
  types?: MultipleFieldErrors;
  message?: Message;
};
`}
            />
          </section>

          <hr />

          <section ref={(ref) => (tsSectionsRef.current.FieldRef = ref)}>
            <code className={typographyStyles.codeHeading}>
              <h2>{TS[currentLanguage].field.title}</h2>
            </code>
            {TS[currentLanguage].field.description}

            <CodeArea
              rawData={`type Field = {
  ref: Ref;
  mutationWatcher?: MutationWatcher;
  options?: RadioOrCheckboxOption[];
} & ValidationRules;
`}
            />
          </section>

          <hr />

          <section ref={(ref) => (tsSectionsRef.current.ModeRef = ref)}>
            <code className={typographyStyles.codeHeading}>
              <h2>{TS[currentLanguage].mode.title}</h2>
            </code>
            {TS[currentLanguage].mode.description}

            <CodeArea
              rawData={`type Mode = {
  onBlur: 'onBlur';
  onChange: 'onChange';
  onSubmit: 'onSubmit';
  all: 'all';
};`}
            />
          </section>

          <hr />

          <section
            ref={(ref) => (tsSectionsRef.current.ValidationRulesRef = ref)}
          >
            <code className={typographyStyles.codeHeading}>
              <h2>{TS[currentLanguage].validationRules.title}</h2>
            </code>
            {TS[currentLanguage].validationRules.description}

            <CodeArea
              rawData={`type ValidationRules = Partial<{
  required: Message | ValidationRule<boolean>;
  min: ValidationRule<number | string>;
  max: ValidationRule<number | string>;
  maxLength: ValidationRule<number | string>;
  minLength: ValidationRule<number | string>;
  pattern: ValidationRule<RegExp>;
  validate: Validate | Record<string, Validate>;
}>;
`}
            />
          </section>
        </main>
      </div>
    </div>
  )
}
