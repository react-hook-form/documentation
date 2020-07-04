import CodeArea from "../../components/CodeArea"
import validationSchema from "../../components/codeExamples/validationSchema"
import * as React from "react"
import typographyStyles from "../../styles/typography.module.css"

export default (
  <>
    <p>안녕, </p>
    <p>
      다음은 조정해야 할 주요 변경 사항입니다. 우리는 진심으로 희망합니다 이러한
      변경 사항이 코드베이스에 너무 많은 문제를 일으키지 않습니다. 만약 너라면
      배후에있는 이성적인 것들이 궁금합니다. {""}
      <a
        href="https://github.com/react-hook-form/react-hook-form/pull/1471"
        target="_blank"
        rel="noopener noreferrer"
      >
        pull request
      </a>{" "}
      자세한 사항은.
    </p>

    <p>
      <span role="img" aria-label="작은 마음">
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
          모든 구성에 대해 <code>validation</code> 접두사를 제거하고 있습니다.
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
})`}
        />
      </section>

      <code className={typographyStyles.codeHeading}>
        <h2>validationSchema: </h2>
      </code>
      <p>
        <code>validationSchema</code>가 표준으로 대체되었습니다 {""}
        <code>resolver</code>로 Yup, Joi 및 Superstruct를 순간. 더 많은 스키마를
        지원하는 공식 리졸버 라이브러리가 있습니다 미래에 검증.
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
        우리는 <code>Controller</code>의 API를 훨씬 간단하게 만들었습니다.
        소품이 제거되었고 <code>렌더러</code> 소품으로 대체되었습니다.
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
        <code>watch</code>는 더 이상 플랫 폼 값을 반환하지 않습니다. 기본적으로
        중첩 된 객체 데이터를 반환합니다.
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
        <code>getValues​​</code>는 더 이상 플랫 폼 값을 반환하지 않습니다.
        기본적으로 중첩 된 객체 데이터를 반환합니다.
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
        메소드 이름이 <code>trigger</code>로 변경되었습니다.
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
        구성 요소 이름이 <code>FormProvider</code>로 바뀌고 이제
        <code>FormContext.Consumer</code>도 사용할 수 있습니다.
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
        더티에서 <code>isDirty</code> (으)로 이름 변경
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
        <code>Set</code>에서 <code>Object</code>로 데이터 유형 변경
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

      <p>핵심 라이브러리에서 멀리 떨어지십시오.</p>

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
