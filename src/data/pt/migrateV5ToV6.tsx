import CodeArea from "../../components/CodeArea"
import validationSchema from "../../components/codeExamples/validationSchema"
import * as React from "react"
import typographyStyles from "../../styles/typography.module.css"

export default (
  <>
    <p>Hi there, </p>
    <p>
      Here are the breaking changes you would need to adjust. We sincerely hope
      those changes aren't creating too much trouble for your codebase. If you
      are wondering some of the rationals behind, you can take a look at this{" "}
      <a
        href="https://github.com/react-hook-form/react-hook-form/pull/1471"
        target="_blank"
        rel="noopener noreferrer"
      >
        pull request
      </a>{" "}
      for more details.
    </p>

    <p>
      <span role="img" aria-label="pequeno coração">
        ❤️{" "}
      </span>
      <i>React hook Form Team</i>
    </p>

    <hr />

    <main>
      <section>
        <code className={typographyStyles.codeHeading}>
          <h2>useForm: </h2>
        </code>

        <p>
          We are removing <code>validation</code> prefix for all the config.
        </p>

        <CodeArea
          withOutCopy
          rawData={`const { register } = useForm({
  - validationResolver: undefined,
  + resolver: undefined,

  - validationContext: undefined,
  + context: undefined,

  - validationContext: undefined,
  + context: undefined,

  - validateCriteriaMode: "firstError",
  + criteriaMode: "firstError",
  
  - submitFocusError: true,
  + shouldFocusError: true,
})`}
        />
      </section>

      <code className={typographyStyles.codeHeading}>
        <h2>validationSchema: </h2>
      </code>
      <p>
        <code>validationSchema</code> has been replace with standard{" "}
        <code>resolver</code>, and you can use Yup, Joi and Superstruct at the
        moment. We have an official resolver library to support more schema
        validation in the future.
      </p>

      <code
        style={{
          fontSize: 16,
          padding: 15,
          background: "#191d3a",
          borderRadius: 4,
          display: "block",
        }}
      >
        npm install @hookform/resolvers
      </code>

      <CodeArea withOutCopy rawData={validationSchema} />

      <code className={typographyStyles.codeHeading}>
        <h2>Controller: </h2>
      </code>
      <p>
        We made <code>Controller</code>'s API much simpler, and the following
        props have been removed and replaced with <code>render</code> props.
      </p>
      <ul>
        <li>
          <p style={{ textDecoration: "line-through" }}>onChange</p>
        </li>
        <li>
          <p style={{ textDecoration: "line-through" }}>onBlur</p>
        </li>
        <li>
          <p style={{ textDecoration: "line-through" }}>onChangeName</p>
        </li>
        <li>
          <p style={{ textDecoration: "line-through" }}>onBlueName</p>
        </li>
        <li>
          <p style={{ textDecoration: "line-through" }}>valueName</p>
        </li>
      </ul>
      <CodeArea
        withOutCopy
        rawData={`- <Controller as={Input}
-   name="test"
-   onChange={([_, value]) => value}
-   onChangeName="onTextChange"
-   onBlur={([_, value]) => value}
-   onBlurName="onTextChange"
-   valueName="textValue"
- />

+ <Controller name="test"
+   render={({ onChange, onBlur, value }) => {
+     return <Input
+       valueName={value}
+       onTextChange={(val) => onChange(value)}
+       onTextBlur={(val) => onBlur(value)}
+     />
+   }}
+ />`}
      />

      <code className={typographyStyles.codeHeading}>
        <h2>watch: </h2>
      </code>

      <p>
        <code>watch</code> will no longer return flat form values, instead it
        will return nested object data by default.
      </p>

      <CodeArea
        withOutCopy
        rawData={`- watch({ nest: true });
+ watch();`}
      />

      <code className={typographyStyles.codeHeading}>
        <h2>getValues: </h2>
      </code>

      <p>
        <code>getValues</code> will no longer return flat form values, instead
        it will return nested object data by default.
      </p>

      <CodeArea
        withOutCopy
        rawData={`- getValues({ nest: true });
+ getValues();`}
      />

      <code className={typographyStyles.codeHeading}>
        <h2>triggerValidation: </h2>
      </code>

      <p>
        method's name is renamed to <code>trigger</code>.
      </p>

      <CodeArea
        withOutCopy
        rawData={`- triggerValidation();
+ trigger();
`}
      />

      <code className={typographyStyles.codeHeading}>
        <h2>FormContext: </h2>
      </code>

      <p>
        component's name is renamed to <code>FormProvider</code>, and now you
        can use <code>FormContext.Consumer</code> as well.
      </p>

      <CodeArea
        withOutCopy
        rawData={`- <FormContext {...methods}>
+ <FormProvider {...methods}>`}
      />

      <code className={typographyStyles.codeHeading}>
        <h2>Dirty: </h2>
      </code>

      <p>
        Changing name from dirty to <code>isDirty</code>.
      </p>

      <CodeArea
        withOutCopy
        rawData={`- const { dirty } = formState;
+ const { isDirty } = formState;`}
      />

      <code className={typographyStyles.codeHeading}>
        <h2>dirtyFields: </h2>
      </code>

      <p>
        Changing data type from <code>Set</code> to <code>Object</code>
      </p>

      <CodeArea
        withOutCopy
        rawData={`- const { dirtyFields } = formState;
- dirtyFields.has('test');
+ const { isDirty } = formState;
+ dirtyFields.test;`}
      />

      <code className={typographyStyles.codeHeading}>
        <h2>ErrorMessage: </h2>
      </code>

      <p>Afaste-se da biblioteca principal.</p>

      <code
        style={{
          fontSize: 16,
          padding: 15,
          background: "#191d3a",
          borderRadius: 4,
          display: "block",
        }}
      >
        npm install @hookform/error-message
      </code>
      <code className={typographyStyles.codeHeading}>
        <h2>clearErrors: </h2>

        <CodeArea
          withOutCopy
          rawData={`- clearError('test')
+ clearErrors('test')`}
        />
      </code>

      <code className={typographyStyles.codeHeading}>
        <h2>setError: </h2>
      </code>

      <CodeArea
        withOutCopy
        rawData={`- setError('test', 'required', 'message')
+ setError('test', { type: 'required', message: 'message' })

- setError([ { name: 'test1', type: "max", }, { name: 'test', type: "min", } ])
+ [
+   { name: 'test1', type: "max" },
+   { name: 'test', type: "min" }
+ ].forEach(({ name, type }) => setError(name, { type }))
`}
      />

      <code className={typographyStyles.codeHeading}>
        <h2>setValue: </h2>
      </code>

      <CodeArea
        withOutCopy
        rawData={`- setValue('test', 'data')
+ setError('test', 'data', { shouldDirty: true })

- setValue([ { test: "1", }, { test1: "2", } ])
+ [ { name: 'test', value: 'data' } ].forEach(({ name, value }) => setValue(name, value))
`}
      />
    </main>
  </>
)
