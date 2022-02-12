import * as React from "react"
import generic from "../data/generic"
import CodeArea from "./CodeArea"
import useFieldArray from "./codeExamples/useFieldArray"
import * as typographyStyles from "../styles/typography.module.css"
import * as tableStyles from "../styles/table.module.css"
import TabGroup from "./TabGroup"
import useFieldArrayConditional from "./codeExamples/useFieldArrayConditional"
import useFieldArrayTS from "./codeExamples/useFieldArrayTS"
import useFieldArrayFocus from "./codeExamples/useFieldArrayFocus"

export default function UseFieldArrayContent({
  currentLanguage,
  api,
}: {
  currentLanguage: string
  api: any
}) {
  return (
    <>
      <code className={typographyStyles.codeHeading}>
        <h2>
          useFieldArray:
          <br />
          <span
            className={typographyStyles.typeText}
          >{`({ control?: Control, name: string, keyName?: string = 'id' }) => object`}</span>
        </h2>
      </code>

      {api.useFieldArray.description}

      <h2 className={typographyStyles.subTitle}>Return</h2>

      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table}>
          <tbody>
            <tr>
              <th>{generic.name[currentLanguage]}</th>
              <th>{generic.type[currentLanguage]}</th>
              <th>{generic.description[currentLanguage]}</th>
            </tr>
            {api.useFieldArray.table}
          </tbody>
        </table>
      </div>

      <h2 id={"rules"} className={typographyStyles.rulesTitle}>
        Rules
      </h2>

      <ul>
        <li>
          <p>
            <code>useFieldArray</code> automatically generates a unique
            identifier named <code>id</code> which is used for <code>key</code>{" "}
            prop. For more information why this is required:{" "}
            <a
              href={"https://reactjs.org/docs/lists-and-keys.html#keys"}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://reactjs.org/docs/lists-and-keys.html#keys
            </a>
          </p>
          <p>
            The <code>field.id</code> (and not <code>index</code>) must be added
            as the component key to prevent re-renders breaking the fields:
            <CodeArea
              withOutCopy
              rawData={`// ✅ correct:
{fields.map((field, index) => <input key={field.id} ... />)}

// ❌ incorrect:
{fields.map((field, index) => <input key={index} ... />)}
`}
            />
          </p>
        </li>
        <li>
          <p>
            You can not call actions one after another. Actions need to be
            triggered per render.
          </p>
          <CodeArea
            withOutCopy
            rawData={`// ❌ The following is not correct
handleChange={() => {
  if (fields.length === 2) {
    remove(0);
  }
  append({ test: 'test' });
}}

// ✅ The following is correct and second action is triggered after next render
handleChange={() => {
  append({ test: 'test' });
}}

React.useEffect(() => {
  if (fields.length === 2) {
    remove(0);
  }
}, [fields])
            `}
          />
        </li>
        <li>
          <p>
            Each <code>useFieldArray</code> is unique and has its own state
            update, which means you should not have multiple useFieldArray with
            the same <code>name</code>.
          </p>
        </li>
        <li>
          <p>
            Each input name needs to be unique, if you need to build checkbox or
            radio with the same name then use it with <code>useController</code>{" "}
            or <code>controller</code>.
          </p>
        </li>
        <li>
          <p>Does not support flat field array.</p>
        </li>
        <li>
          <p>
            When you append, prepend, insert and update the field array, the obj
            can't be empty object <code>{}</code> rather need to supply all your
            input's defaultValues.
          </p>
          <CodeArea
            withOutCopy
            rawData={`append(); ❌
append({}); ❌
append({ firstName: 'bill', lastName: 'luo' }); ✅`}
          />
        </li>
      </ul>

      <h2 className={typographyStyles.subTitle}>TypeScript</h2>

      <ul>
        <li>
          <p>
            when register input <code>name</code>, you will have to cast them as{" "}
            <code>const</code>
          </p>
          <CodeArea
            withOutCopy
            rawData={`<input key={field.id} {...register(\`test.\${index}.test\` as const)} />`}
          />
        </li>
        <li>
          <p>
            we do not support circular reference. Refer to this this{" "}
            <a
              href={
                "https://github.com/react-hook-form/react-hook-form/issues/4055"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Github issue
            </a>{" "}
            for more detail.
          </p>
        </li>
        <li>
          <p>
            for nested field array, you will have to cast the field array by its
            name.
          </p>
          <CodeArea
            withOutCopy
            rawData={`const { fields } = useFieldArray({ name: \`test.\${index}.keyValue\` as 'test.0.keyValue' });`}
          />
        </li>
      </ul>

      <h2 id={"example"} className={typographyStyles.subTitle}>
        Examples
      </h2>

      <TabGroup
        buttonLabels={[
          "useFieldArray",
          "conditional Field Array",
          "Focus Name/index",
        ]}
      >
        <CodeArea
          rawData={useFieldArray}
          tsRawData={useFieldArrayTS}
          tsUrl="https://codesandbox.io/s/calc-i231d"
          url="https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn"
        />
        <CodeArea
          rawData={useFieldArrayConditional}
          url="https://codesandbox.io/s/usefieldarray-conditional-2wi6f"
        />
        <CodeArea rawData={useFieldArrayFocus} />
      </TabGroup>

      <>
        <h2 className={typographyStyles.subTitle}>Tips</h2>
        <h4 className={typographyStyles.questionTitle}>Custom Register</h4>
        <p>
          You can also <code>register</code> inputs at <code>Controller</code>{" "}
          without the actual input. This makes <code>useFieldArray</code> quick
          and flexible to use with complex data structure or the actual data is
          not stored inside an input.
        </p>

        <CodeArea
          url={"https://codesandbox.io/s/usefieldarray-virtual-input-v9wyw"}
          rawData={`import * as React from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";

const ConditionalInput = ({ control, index, field }) => {
  const value = useWatch({
    name: "test",
    control
  });

  return (
    <Controller
      control={control}
      name={\`test.\$\{index\}.firstName\`}
      render={({ field }) =>
        value?.[index]?.checkbox === "on" ? <input {...field} /> : null
      }
    />
  );
};

function App() {
  const { handleSubmit, control, register } = useForm();
  const { fields, append, prepend } = useFieldArray({
    control,
    name: "test"
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <section key={field.id}>
          <input
            type="checkbox"
            value="on"
            {...register(\`test.\${index}.checkbox\`)}
          />
          <ConditionalInput {...{ control, index, field }} />
        </section>
      ))}

      <button
        type="button"
        onClick={() => append({ firstName: "append value" }) }
      >
        append
      </button>
      <input type="submit" />
    </form>
  );
}
`}
        />

        <h4 className={typographyStyles.questionTitle}>
          Controlled Field Array
        </h4>

        <p>
          There will be cases where you want to control the entire field array,
          which means each onChange reflects on the <code>fields</code> object.
          You can achieve this by merge with <code>useWatch</code> or{" "}
          <code>watch</code>'s result.
        </p>

        <CodeArea
          url="https://codesandbox.io/s/infallible-bush-c92l0?file=/src/App.tsx"
          rawData={`import * as React from "react";
import { useForm, useFieldArray } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, control, watch } = useForm<FormValues>();
  const { fields, append } = useFieldArray({
    control,
    name: "fieldArray"
  });
  const watchFieldArray = watch("fieldArray");
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index]
    };
  });

  return (
    <form>
      {controlledFields.map((field, index) => {
        return <input {...register(\`fieldArray.\${index}.name\` as const)} />;
      })}

      <button
        type="button"
        onClick={() =>
          append({
            name: "bill"
          })
        }
      >
        Append
      </button>
    </form>
  );
}`}
        />

        <h4 className={typographyStyles.questionTitle}>Conditional inputs</h4>

        <p>
          <code>useFieldArray</code> is uncontrolled by default, which means{" "}
          <code>defaultValue</code> is rendered during input's mounting. This is
          different from the controlled form, which the local state is keeping
          updated during user interaction's <code>onChange</code>. When inputs
          get unmounted and remounted, you want to read what's in the current
          form values from <code>getValue</code> function. For individual input,
          you can safely use <code>useWatch</code> hook to retain input value as
          well.
        </p>

        <CodeArea
          url="https://codesandbox.io/s/react-hook-form-conditional-0g9qx"
          rawData={`import React from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";

const Input = ({ name, control, register, index }) => {
  const value = useWatch({
    control,
    name
  });
  return <input {...register(\`test.\${index}.age\`)} defaultValue={value} />;
};

function App() {
  const [show, setShow] = React.useState(true);
  const { register, control, getValues, handleSubmit } = useForm({
    defaultValues: {
      test: [{ firstName: "Bill", lastName: "Luo", age: "2" }]
    }
  });
  const { fields, remove } = useFieldArray({
    control,
    name: "test"
  });
  const onSubmit = (data) => console.log("data", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {show && (
        <ul>
          {fields.map((item, index) => {
            return (
              <li key={item.id}>
                <input {...register(\`test.\${index}.firstName\`)} />
                <Input
                  register={register}
                  control={control}
                  index={index}
                  name={\`test.\${index}.age\`}
                />
              </li>
            );
          })}
        </ul>
      )}
      <section>
        <button
          type="button"
          onClick={() => {
            setShow(!show);
          }}
        >
          Hide
        </button>
      </section>

      <input type="submit" />
    </form>
  );
}
`}
        />
      </>
    </>
  )
}
