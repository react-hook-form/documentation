import generic from "../data/generic"
import CodeArea from "./CodeArea"
import useFieldArray from "./codeExamples/useFieldArray"
import typographyStyles from "../styles/typography.module.css"
import tableStyles from "../styles/table.module.css"
import TabGroup from "./TabGroup"
import useFieldArrayConditional from "./codeExamples/useFieldArrayConditional"
import useFieldArrayTS from "./codeExamples/useFieldArrayTS"
import useFieldArrayFocus from "./codeExamples/useFieldArrayFocus"
import Link from "next/link"
import useFieldArrayPreview from "./codeExamples/useFieldArrayPreview"

export default function UseFieldArrayContent({ api }: { api: any }) {
  return (
    <>
      <code className={typographyStyles.codeHeading}>
        <h2>
          useFieldArray:{" "}
          <Link href="/ts#UseFieldArrayProps">
            <code className={typographyStyles.typeText}>
              UseFieldArrayProps
            </code>
          </Link>
        </h2>
      </code>

      {api.useFieldArray.description}

      <h2 className={typographyStyles.subTitle}>Return</h2>

      <div className={tableStyles.tableWrapper}>
        <table className={tableStyles.table}>
          <tbody>
            <tr>
              <th>{generic.name}</th>
              <th>{generic.type}</th>
              <th>{generic.description}</th>
            </tr>
            {api.useFieldArray.table}
          </tbody>
        </table>
      </div>

      <h2 id="rules" className={typographyStyles.rulesTitle}>
        Rules
      </h2>

      <ul>
        <li>
          <p>
            <code>useFieldArray</code> automatically generates a unique
            identifier named <code>id</code> which is used for <code>key</code>{" "}
            prop. For more information why this is required:{" "}
            <a
              href="https://reactjs.org/docs/lists-and-keys.html#keys"
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
          <p>It's recommend to not stack actions one after another.</p>
          <CodeArea
            withOutCopy
            rawData={`
onClick={() => {
  append({ test: 'test' });
  remove(0);
}}
            
// ✅ Better solution: the remove action is happened after the second render
React.useEffect(() => {
  remove(0);
}, [remove])

onClick={() => {
  append({ test: 'test' });
}}
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
            or <code>Controller</code>.
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
              href="https://github.com/react-hook-form/react-hook-form/issues/4055"
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

      <h2 id="example" className={typographyStyles.subTitle}>
        Examples
      </h2>

      <TabGroup
        buttonLabels={[
          "useFieldArray",
          "Nested Form",
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
          rawData={useFieldArrayPreview}
          url="https://codesandbox.io/s/usefieldarray-with-preview-odmtx5"
        />
        <CodeArea
          rawData={useFieldArrayConditional}
          url="https://codesandbox.io/s/usefieldarray-conditional-2wi6f"
        />
        <CodeArea rawData={useFieldArrayFocus} />
      </TabGroup>

      <h2 className={typographyStyles.subTitle}>Video</h2>
      <p>
        The following video explains the basic usage of{" "}
        <code>useFieldArray</code>.
      </p>

      <iframe
        width="100%"
        height="528"
        title="react hook form - useFieldArray"
        src="https://www.youtube.com/embed/4MrbfGSFY2A"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <h2 className={typographyStyles.subTitle}>Tips</h2>
      <h4 className={typographyStyles.questionTitle}>Custom Register</h4>
      <p>
        You can also <code>register</code> inputs at <code>Controller</code>{" "}
        without the actual input. This makes <code>useFieldArray</code> quick
        and flexible to use with complex data structure or the actual data is
        not stored inside an input.
      </p>

      <CodeArea
        url="https://codesandbox.io/s/usefieldarray-virtual-input-v9wyw"
        rawData={`import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";

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
  const { control, register } = useForm();
  const { fields, append, prepend } = useFieldArray({
    control,
    name: "test"
  });

  return (
    <form>
      {fields.map((field, index) => (
        <ConditionalInput key={field.id} {...{ control, index, field }} />
      ))}
    </form>
  );
}
`}
      />

      <h4 className={typographyStyles.questionTitle}>Controlled Field Array</h4>

      <p>
        There will be cases where you want to control the entire field array,
        which means each onChange reflects on the <code>fields</code> object.
      </p>

      <CodeArea
        url="https://codesandbox.io/s/infallible-bush-c92l0?file=/src/App.tsx"
        rawData={`import { useForm, useFieldArray } from "react-hook-form";

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
    </form>
  );
}`}
      />
    </>
  )
}
