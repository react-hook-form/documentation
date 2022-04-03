import * as React from "react"
import CodeArea from "../components/CodeArea"
import TabGroup from "../components/TabGroup"
import handleSubmitCodeTs from "../components/codeExamples/handleSubmitCodeTs"

export default {
  nestedValue: {
    title: "NestedValue",
    description: (
      <TabGroup buttonLabels={["Code Example", "Type"]}>
        <CodeArea
          url="https://codesandbox.io/s/react-hook-form-nestedvalue-lskdv"
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
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<{
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

const { formState: { errors } } = useForm<FormValues>();

errors?.key1?.message // no type error
errors?.key2?.message // no type error
errors?.key3?.message // no type error
errors?.key4?.message // no type error`}
        />
      </TabGroup>
    ),
  },
  resolver: {
    title: "Resolver",
    description: (
      <CodeArea
        url={"https://codesandbox.io/s/react-hook-form-resolver-forked-mjsx7"}
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
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <input {...register("firstName")} placeholder="Bill" />
      {errors?.firstName && <p>{errors.firstName.message}</p>}
      
      <input {...register("lastName")} placeholder="Luo" />

      <input type="submit" />
    </form>
  );
}
`}
      />
    ),
  },
  submitHandler: {
    title: "SubmitHandler",
    description: (
      <CodeArea
        rawData={handleSubmitCodeTs}
        url="https://codesandbox.io/s/react-hook-form-handlesubmit-ts-v7-z9z0g"
      />
    ),
  },
  control: {
    title: "Control",
    description: (
      <CodeArea
        url="https://codesandbox.io/s/control-2mg07"
        rawData={`import React from "react";
import { useForm, useWatch, Control } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
};

function IsolateReRender({ control }: { control: Control<FormValues> }) {
  const firstName = useWatch({
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
      <input {...register("firstName")} />
      <input {...register("lastName")} />
      <IsolateReRender control={control} />

      <input type="submit" />
    </form>
  );
}
`}
      />
    ),
  },
  UseFormReturnRef: {
    title: "UseFormReturn",
    description: (
      <CodeArea
        url={
          "https://codesandbox.io/s/react-hook-form-UseFormReturn-forked-yl40u"
        }
        rawData={`import React from "react";
import { useForm, UseFormReturn, SubmitHandler } from "react-hook-form";

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
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
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
          <Input {...register("firstName")} />
          <Input {...register("lastName")} />
          <Select
            {...register("sex")}
            options={[
              { label: "Female", value: "female" },
              { label: "Male", value: "male" },
              { label: "Other", value: "other" }
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
    ),
  },
  useFormOptions: {
    title: "UseFormProps",
    description: (
      <CodeArea
        rawData={`export type UseFormProps<
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
    ),
  },
  UseFieldArrayProps: {
    title: "UseFieldArrayProps",
    description: (
      <CodeArea
        rawData={`export type UseFieldArrayProps<
  TKeyName extends string = 'id',
  TControl extends Control = Control
> = {
  name: string;
  keyName?: TKeyName;
  control?: TControl;
};`}
      />
    ),
  },
  UseFieldArrayReturn: {
    title: "UseFieldArrayReturn",
    description: (
      <CodeArea
        rawData={`
      export type UseFieldArrayReturn<
        TFieldValues extends FieldValues = FieldValues,
        TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
        TKeyName extends string = 'id',
      > = {
        swap: (indexA: number, indexB: number) => void;
        move: (indexA: number, indexB: number) => void;
        prepend: (
          value:
            | Partial<FieldArray<TFieldValues, TFieldArrayName>>
            | Partial<FieldArray<TFieldValues, TFieldArrayName>>[],
          options?: FieldArrayMethodProps,
        ) => void;
        append: (
          value:
            | Partial<FieldArray<TFieldValues, TFieldArrayName>>
            | Partial<FieldArray<TFieldValues, TFieldArrayName>>[],
          options?: FieldArrayMethodProps,
        ) => void;
        remove: (index?: number | number[]) => void;
        insert: (
          index: number,
          value:
            | Partial<FieldArray<TFieldValues, TFieldArrayName>>
            | Partial<FieldArray<TFieldValues, TFieldArrayName>>[],
          options?: FieldArrayMethodProps,
        ) => void;
        update: (
          index: number,
          value: Partial<FieldArray<TFieldValues, TFieldArrayName>>,
        ) => void;
        replace: (
          value:
            | Partial<FieldArray<TFieldValues, TFieldArrayName>>
            | Partial<FieldArray<TFieldValues, TFieldArrayName>>[],
        ) => void;
        fields: FieldArrayWithId<TFieldValues, TFieldArrayName, TKeyName>[];
      };`}
      />
    ),
  },
  fieldError: {
    title: "FieldError",
    description: (
      <CodeArea
        rawData={`export type FieldError = {
  type: string;
  ref?: Ref;
  types?: MultipleFieldErrors;
  message?: Message;
};
`}
      />
    ),
  },
  fieldErrors: {
    title: "FieldErrors",
    description: (
      <CodeArea
        rawData={`export type FieldErrors<
  TFieldValues extends FieldValues = FieldValues
> = DeepMap<TFieldValues, FieldError>;
`}
      />
    ),
  },
  field: {
    title: "Field",
    description: (
      <CodeArea
        rawData={`export type Field = {
  ref: Ref;
  mutationWatcher?: MutationWatcher;
  options?: RadioOrCheckboxOption[];
} & RegisterOptions;
`}
      />
    ),
  },
  fieldPath: {
    title: "FieldPath",
    description: (
      <>
        <p>
          This type is useful when you define custom component's{" "}
          <code>name</code> prop, and it will type check again your field path.
        </p>
        <CodeArea
          rawData={`export type FieldPath<TFieldValues extends FieldValues> = Path<TFieldValues>;`}
        />
      </>
    ),
  },
  fieldValues: {
    title: "FieldValues",
    description: (
      <CodeArea rawData={`export type FieldValues = Record<string, any>;`} />
    ),
  },
  mode: {
    title: "Mode",
    description: (
      <CodeArea
        rawData={`export type Mode = {
  onBlur: 'onBlur';
  onChange: 'onChange';
  onSubmit: 'onSubmit';
  onTouched: 'onTouched';
  all: 'all';
};`}
      />
    ),
  },
  validationRules: {
    title: "RegisterOptions",
    description: (
      <CodeArea
        rawData={`export type RegisterOptions = Partial<{
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
    ),
  },
  fieldArrayWithId: {
    title: "FieldArrayWithId",
    description: (
      <CodeArea
        rawData={`export export type FieldArrayWithId<
  TFieldValues extends FieldValues = FieldValues,
  TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>,
  TKeyName extends string = 'id',
> = FieldArray<TFieldValues, TFieldArrayName> & Record<TKeyName, string>;
`}
      />
    ),
  },
  formStateProxy: {
    title: "FormStateProxy",
    description: (
      <CodeArea
        rawData={`export type FormStateProxy<TFieldValues extends FieldValues = FieldValues> = {
  isDirty: boolean;
  dirtyFields: Dirtied<TFieldValues>;
  isSubmitted: boolean;
  submitCount: number;
  touched: FieldNames<TFieldValues>;
  isSubmitting: boolean;
  isValid: boolean;
  errors: FieldErrors<TFieldValues>;
};
`}
      />
    ),
  },
  UseControllerProps: {
    title: "UseControllerProps",
    description: (
      <CodeArea
        rawData={`export type UseControllerProps<
  TFieldValues extends FieldValues = FieldValues
> = {
  name: FieldName<TFieldValues>;
  rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' >;
  onFocus?: () => void;
  defaultValue?: unknown;
  control?: Control<TFieldValues>;
};
`}
      />
    ),
  },
  UseControllerReturn: {
    title: "UseControllerReturn",
    description: (
      <CodeArea
        rawData={`export type UseControllerReturn<
  TFieldValues extends FieldValues = FieldValues
> = {
  field: ControllerRenderProps<TFieldValues>;
  fieldState: InputState;
};
`}
      />
    ),
  },
}
