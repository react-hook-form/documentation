import * as React from "react"
import generic from "../data/generic"
import CodeArea from "./CodeArea"
import useFieldArray from "./codeExamples/useFieldArray"
import typographyStyles from "../styles/typography.module.css"
import tableStyles from "../styles/table.module.css"
import TabGroup from "./TabGroup"
import useFieldArrayConditional from "./codeExamples/useFieldArrayConditional"

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

      <TabGroup buttonLabels={["useFieldArray", "conditional Field Array"]}>
        <CodeArea
          rawData={useFieldArray}
          url="https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn"
        />
        <CodeArea
          rawData={useFieldArrayConditional}
          url="https://codesandbox.io/s/usefieldarray-conditional-2wi6f"
        />
      </TabGroup>

      <>
        <h2 className={typographyStyles.subTitle}>Tips</h2>
        <h4 className={typographyStyles.questionTitle}>Custom Register</h4>
        <p>
          You can also <code>register</code> inputs at <code>Controller</code>{" "}
          without the actual input. This makes <code>useFieldArray</code> quick
          flexible to use with complex data structure or the actual data is not
          stored inside an input.
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
      defaultValue={field.firstName}
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
            defaultChecked={field.checked}
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
      </>
    </>
  )
}
