import CodeArea from "../../components/CodeArea"
import validationSchema from "../../components/codeExamples/validationSchema"
import * as React from "react"
import typographyStyles from "../../styles/typography.module.css"

export default (
  <>
    <p>Olá,</p>
    <p>
      Aqui teremos algumas mudanças que você precisará ajustar. Nós sinceramente
      esperamos que tais mudanças não criem muitos problemas na sua codebase. Se você
      estiver curioso sobre alguns raciocínios por trás das mudanças, você pode dar uma
      olhada nesse {" "} 
      <a
        href="https://github.com/react-hook-form/react-hook-form/pull/1471"
        target="_blank"
        rel="noopener noreferrer"
      >
        pull request
      </a>{" "}
      para mais detalhes.
    </p>

    <p>
      ❤️ <i>React Hook Form Team</i>
    </p>

    <hr />

    <main>
      <section>
        <code className={typographyStyles.codeHeading}>
          <h2>useForm: </h2>
        </code>

        <p>
          Nós estamos removendo o prefixo <code>validation</code> para todas as configurações.
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
        <code>validationSchema</code> foi substituido pelo padrão {" "}
        <code>resolver</code>, e você pode usar Yup, Joi e Superstruct no
        momento. Nós temos uma bibliotea de resolver oficial para suportar
        mais schemas de validação no futuro.
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
        <h2>watch: </h2>
      </code>

      <p>
        <code>watch</code> Não retornará mais valores planos, ao invés
        passará a retornar objetos com dados aninhados por padrão.
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
        <code>getValues</code> Não retornará mais valores planos, ao invés
        passará a retornar objetos com dados aninhados por padrão.
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
        o nome <code>method</code> foi renomeado para <code>trigger</code>.
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
        O nome do <code>component</code> foi renomeado para <code>FormProvider</code>,
        além disso você pode usar <code>FormContext.Consumer</code> também.
      </p>

      <CodeArea
        withOutCopy
        rawData={`- <FormContext {...methods}>
+ <FormProvider {...methods}>`}
      />

      <code className={typographyStyles.codeHeading}>
        <h2>Dirty: </h2>
      </code>

      <p>Mudando o nome de dirty para `isDirty`.</p>

      <CodeArea
        withOutCopy
        rawData={`- const { dirty } = formState;
+ const { isDirty } = formState;`}
      />

      <code className={typographyStyles.codeHeading}>
        <h2>dirtyFields: </h2>
      </code>

      <p>Trocando o tipo de dado de `Set` para `Object`</p>

      <CodeArea
        withOutCopy
        rawData={`- const { dirtyFields } = formState;
- dirtyFields.has('test');
+ const { isDirty } = formState;
+ dirtyFields.test;`}
      />
    </main>
  </>
)
