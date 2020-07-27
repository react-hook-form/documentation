import CodeArea from "../../components/CodeArea"
import validationSchema from "../../components/codeExamples/validationSchema"
import * as React from "react"
import typographyStyles from "../../styles/typography.module.css"

export default (
  <>
    <p>嗨，您好 </p>
    <p>
      这是您需要调整的重大更改。我们衷心希望
      这些更改不会给您的代码库带来太多麻烦。如果你
      想知道背后的一些基本原理，可以看看这个
      <a
        href="https://github.com/react-hook-form/react-hook-form/pull/1471"
        target="_blank"
        rel="noopener noreferrer"
      >
        pull request
      </a>
      更多细节。
    </p>

    <p>
      <span role="img" aria-label="小小的心">
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
          我们将删除所有配置的<code>validation</code>前缀。
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
        <code>validationSchema</code>已替换为标准
        <code>resolver</code>
        ，您可以在使用Yup，Joi和Superstruct。我们有一个官方的解析器库来支持更多模式
        将来进行验证。
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
        我们使<code>Controller</code>的API更加简单，以下 props已删除，并替换为
        <code>render</code>道具。
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
        <code>watch</code>将不再返回平面格式值，而是
        默认情况下将返回嵌套的对象数据。
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
        <code>getValues</code>将不再返回平面格式值
        默认情况下，它将返回嵌套的对象数据。
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
        方法的名称重命名为<code>trigger</code>。
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
        组件的名称重命名为<code>FormProvider</code>，现在您也可以使用
        <code>FormContext.Consumer</code>。
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
        将名称从dirty更改为<code>isDirty</code>。
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
        将数据类型从<code>Set</code>更改为<code>Object</code>.
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

      <p>远离核心库。</p>

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
