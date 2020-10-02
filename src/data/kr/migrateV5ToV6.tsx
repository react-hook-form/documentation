import CodeArea from "../../components/CodeArea"
import validationSchema from "../../components/codeExamples/validationSchema"
import * as React from "react"
import typographyStyles from "../../styles/typography.module.css"

export default (
  <>
    <p>안녕하세요, </p>
    <p>
      이 글은 마이그레이션 시 수정이 필요한 주요 변경사항을 서술합니다. 우리는
      이런 변경 사항들이 여러분의 코드베이스에 큰 문제를 야기하지 않기를
      진심으로 희망합니다. 만약에 변경 사항에 대해 더 자세한 논리적 배경을
      원하신다면,{" "}
      <a
        href="https://github.com/react-hook-form/react-hook-form/pull/1471"
        target="_blank"
        rel="noopener noreferrer"
      >
        이 풀 리퀘스트에서
      </a>{" "}
      확인하실 수 있습니다.
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
          모든 설정에서 <code>validation</code> 접두사를 제거했습니다.
        </p>

        <CodeArea
          withOutCopy
          rawData={`const { register } = useForm({
  - validationResolver: undefined,
  + resolver: undefined,

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
        <code>validationSchema</code> 가 표준 <code>resolver</code> 로
        대체되었고, 이제 Yup, Joi, Superstruct 또한 사용할 수 있습니다. 우리는
        더욱 다양한 스키마 검증을 위하여 공식 리졸버 라이브러리를 제공합니다.
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
        우리는 <code>Controller</code>의 API를 훨씬 간단하게 만들었습니다. 또한
        아래의 props 는 제거되었고, <code>render</code> props 도 따라서
        변경되었습니다.
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
        <code>watch</code> 는 더 이상 평탄한 폼 값을 반환하지 않고, 기본적으로
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
        <code>getValues</code> 는 더 이상 평탄한 폼 값을 반환하지 않고,
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
        메소드 이름이 <code>trigger</code> 로 변경되었습니다.
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
        컴포너트 이름이 <code>FormProvider</code> 로 바뀌고 이제
        <code>FormContext.Consumer</code> 도 사용할 수 있습니다.
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
        <code>dirty</code> 에서 <code>isDirty</code> (으)로 이름 변경
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
        <code>Set</code> 에서 <code>Object</code> 로 자료 구조 변경
      </p>

      <CodeArea
        withOutCopy
        rawData={`- const { dirtyFields } = formState;
- dirtyFields.has('test');
+ const { dirtyFields } = formState;
+ dirtyFields.test;`}
      />

      <code className={typographyStyles.codeHeading}>
        <h2>ErrorMessage: </h2>
      </code>

      <p>라이브러리 코어에서 분리되었습니다.</p>

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

        <p>
          함수 이름을 <code>clearErrors</code> 로 변경했습니다.
        </p>

        <CodeArea
          withOutCopy
          rawData={`- clearError('test')
+ clearErrors('test')`}
        />
      </code>

      <code className={typographyStyles.codeHeading}>
        <h2>setError: </h2>
      </code>

      <p>호출 방식이 변경되었고, 더 이상 다중 에러를 지원하지 않습니다.</p>

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

      <p>
        호출 방식이 변경되었고, 더 이상 기본적으로 필드를 dirty 로 처리하지
        않습니다. 또한 다중 에러를 지원하지 않습니다.
      </p>

      <CodeArea
        withOutCopy
        rawData={`- setValue('test', 'data')
+ setValue('test', 'data', { shouldDirty: true })

- setValue([ { test: "1", }, { test1: "2", } ])
+ [ { name: 'test', value: 'data' } ].forEach(({ name, value }) => setValue(name, value))
`}
      />
    </main>
  </>
)
