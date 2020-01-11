import code from "../../components/codeExamples/defaultExample"
import * as React from "react"
import Link from "../../styles/link"
import { Link as NavLink } from "gatsby"
import { CodeBlock, Note, Title, TypeText } from "../../styles/typography"
import { CodeAsLink } from "../../components/ApiPage"
import colors from "../../styles/colors"
import translateLink from "../../components/logic/translateLink"
import Popup from "../../components/Popup"

export default {
  title: "Документация по API",
  header: {
    description:
      "React Hook Form сфокусирован на предоставлении лучшего опыта разработки за счет упрощения API.",
  },
  useForm: {
    title: "useForm",
    intro: (
      <>
        Вызывая <code>useForm</code>, вы получите следующие методы{" "}
      </>
    ),
    description: (
      <p>
        <code>useForm</code> также имеет <b>необязательные</b> аргументы. В
        следующем примере приведены значение по умолчанию для всех параметров.
      </p>
    ),
    validateCriteriaMode: (
      <>
        <p>
          <code>firstErrorDetected</code> - значение по умолчанию, будут
          проверены все валидируемые поля и собраны все первоначальные ошибки.
        </p>
        <p>
          Если для данного параметра установлено значение <code>all</code>, то
          будет выполнена проверка всех полей и собраны все обнаруженные ошибки.
        </p>
      </>
    ),
    validateOnSubmit: (
      <>
        Валидация будет выполнена по событию <code>submit</code> и всем
        невалидным полям будет добавлен обработчик на событие{" "}
        <code>onChange</code> для повторной валидации.
      </>
    ),
    validateOnBlur: (
      <>
        Валидация будет выполнена по событию <code>blur</code>.
      </>
    ),
    validateOnChange: (
      <>
        Валидация будет выполнена по событию <code>change</code> для каждого
        поля, и это приведёт к массовым перерисовкам. Не рекомендуется:
        считается, что это ухудшает производительность.
      </>
    ),
    defaultValues: goToSection => (
      <>
        <p>
          Вы можете установить зачение по умолчанию для поля с помощью{" "}
          <code>defaultValue/defaultChecked</code>{" "}
          <Link href="https://reactjs.org/docs/uncontrolled-components.html">
            (узнать больше из доки по React для Default Values)
          </Link>{" "}
          или передать <code>defaultValues</code> в качестве необязального
          параметра для заполнения значений по умолчанию для всей формы.
        </p>

        <p>
          <Note>Примечание:</Note> Значение, определённое в{" "}
          <code>defaultValues</code> будет добавлено в{" "}
          <CodeAsLink onClick={() => goToSection("watch")}>watch</CodeAsLink> в
          качестве <code>defaultValue</code>.
        </p>

        <p>
          <Note>Примечание:</Note> <code>defaultValues</code> не заполняется
          автоматически при регистрации вручную (т.е.:{" "}
          <code>{`register({ name: 'test' })`}</code>) потому что поле,
          зарегистрированное <code>register</code> вручную, не передаёт{" "}
          <code>ref</code> в React Hook Form.
        </p>
      </>
    ),
    validationSchema: goToSection => (
      <p>
        Применение правил валидации с <code>Yup</code> на уровне схемы,
        перейдите в раздел{" "}
        <CodeAsLink onClick={() => goToSection("ValidationSchema")}>
          validationSchema
        </CodeAsLink>{" "}
        .
      </p>
    ),
    reValidateMode: (
      <p>
        Этот параметр позволяет настроить, когда поля с ошибками будут повторно
        валидироваться (по умолчанию проверка запускается при любом изменении в
        поле). <Popup />
      </p>
    ),
    validationFields: (
      <p>
        Предоставление массива полей означает, что будут проверены только
        добавленные в массив поля. Эта опция полезна, когда вы хотите
        переключать, какие поля требуются для проверки.
      </p>
    ),
    submitFocusError: (
      <>
        <p>
          По умолчанию, когда пользователь отправляет форму и она содержит
          ошибку, первое поле с ошибкой будет в фокусе.
        </p>

        <p>
          <Note>Примечание:</Note> Только зарегистрированные поля с{" "}
          <code>ref</code>
          будут работать. Поля, зарегистрированные вручную, работать не будут.
          т.е.: <code>{`register({ name: 'test' }) // не работает`}</code>{" "}
        </p>
      </>
    ),
    nativeValidation: goToSection => (
      <p>
        Устанавливая эту опцию в <code>true</code> включит нативную браузерную
        валидацию. Вы можете{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
        >
          узнать больше о браузерной валидации
        </a>
        , и перейти в раздел{" "}
        <CodeAsLink onClick={() => goToSection("nativeValidation")}>
          nativeValidation
        </CodeAsLink>{" "}
        , где приведено больше деталей и примеров.
      </p>
    ),
  },
  unregister: {
    title: "unregister",
    description: (
      <>
        <p>
          Этот метод позволяет вам отменить регистрацию <code>unregister</code>
          единичных полей или массива полей. Это удобно, если вы
          зарегистрировали поле внутри <code>useEffect</code> в качестве
          кастомной регистрации и вам нужно отменить регистрацию после
          отключения (unmount) компонента.
        </p>
        <p>
          <Note>Примечание:</Note> Когда вы регистрируете поле, его значение
          больше не будет включено в данные формы, которые будут отправляться.
        </p>
      </>
    ),
  },
  register: {
    title: "register",
    description: (
      <>
        <p>
          Этот метод позволяет регистрировать input/select <code>Ref</code> и
          правила их валидации в React Hook Form.
        </p>
        <p>
          Правила валидации основаны на HTML стандарте и также позволяют
          добавлять кастомную валидацию.
        </p>
        <p>
          <Note>Важно:</Note> значени <code>name</code> - <b>обязательное</b> и{" "}
          <b>уникальное</b>. Имя поля также поддерживает "dot and bracket
          syntax", который даёт вам возможность создавать вложенные поля формы.
          Форма с примером приведена ниже:
        </p>
      </>
    ),
    fieldArray: (
      <p
        style={{
          paddingLeft: 10,
          borderLeft: `4px solid ${colors.lightPink}`,
        }}
      >
        Если вы работаете с <code>массивом/массивами полей</code>, вы можете
        задать имя поля как <code>name[index]</code>.{" "}
        <Link
          href="https://github.com/react-hook-form/react-hook-form/blob/master/examples/FieldArray.tsx"
          title="пример массива полей"
        >
          Посмотреть пример с массивом полей
        </Link>
        .
      </p>
    ),
    example: "Результат отправки формы",
    selectHelp:
      "При выборе способа регистрации, таблица API, приведенная ниже, будет обновлена.",
    options: {
      title: "Register options",
      registerWithValidation: "Регистрация с валидацией",
      registerWithValidationMessage:
        "Регистрация с валидацией и сообщением об ошибке",
      note: goToSection => (
        <>
          <Title>Кастомная регистрация</Title>
          <p>
            Вы также можете зарегистрировать поля вручную, что может быть удобно
            при работе с кастомными компонентами, когда <code>Ref</code>{" "}
            неприменим. Это также актуально, когда вы работаете с React Native с
            такими кастомными компонентами как{" "}
            <a
              href="https://github.com/JedWatson/react-select"
              target="_blank"
              rel="noopener noreferrer"
            >
              react-select
            </a>
            .
          </p>

          <p>
            При использовании вызова кастомной регистрации, вам нужно обновить
            значение поля с помощью{" "}
            <CodeAsLink onClick={() => goToSection("setValue")}>
              setValue
            </CodeAsLink>
            , потому что поле больше не является зарегистрированным с помощью
            его ref.
          </p>

          <p>
            <CodeBlock>{`register({ name: 'firstName' }, { required: true, min: 8 })`}</CodeBlock>
          </p>

          <p>
            <Note>Примечание:</Note> Если вы хотите, чтобы регистрация
            кастомного поля вызывала повторный рендеринг после обновления его
            значения, то вам нужно указать тип зарегистрированного поля.
          </p>
        </>
      ),
    },
    validation: {
      required: (
        <>
          Булевые "правдивые" значения указывают на то, что поле должн иметь
          значение перед отправкой формы. Вы также можете указать строку с
          текстом ошибки для объекта ошибки (<code>errors</code> object).
        </>
      ),
      maxLength: "Максимальная разрешённая длинна поля.",
      minLength: "Минимальная разрешённая длинна поля.",
      max: "Максимальное разрешённое значение для данного поля.",
      min: "Минимальное разрешённое значение для данного поля.",
      pattern: "Шаблон regex для данного поля",
      validate: `Вы можете передать функцию обратного вызова в качестве аргумента для валидации или передать объект функций обратного вызова для проверки всех из них (см. примеры)`,
    },
  },
  formState: {
    title: "formState",
    description: "Этот объект содержит информацию о состоянии формы.",
    dirty: "Устанавливается в true после изменения любого поля.",
    isSubmitted: "Устанавливается в true после отправки формы.",
    touched:
      "Объект, содержаций все поля, с которыми взаимодействовал пользователь.",
    isSubmitting: (
      <>
        Во время отправки формы будет выставлено в <code>true</code> и после
        отправки будет выставлено в <code>false</code>
      </>
    ),
    submitCount: "Количество отправлений формы.",
    isValid: "Устанавливается в true, если нет ошибок.",
  },
  errors: {
    title: "errors",
    description: () => (
      <>
        <p>
          Объект, содержащий ошибки формы или сообщения об ошибках для каждого
          поля.
        </p>

        <p>
          <Note>Примечание:</Note> Есть развница в V3 и V4:
        </p>

        <ul>
          <li>
            <p>V4: Наследуемый объект</p>
            <p>
              <strong>Причина:</strong> так как опциональный чейнинг становится
              все более популярным в сообществе и для поддержки лучшего типа.
            </p>
            <p>
              <code>{`errors?.yourDetail?.firstName;`}</code>
            </p>
          </li>
          <li>
            <p>V3: Flatten object</p>
            <p>
              <strong>Причина:</strong> простой доступ к ошибке.
            </p>
            <p>
              <code>{`errors['yourDetail.firstName'];`}</code>
            </p>
          </li>
        </ul>
      </>
    ),
    types: (
      <>
        Это полезно для проверки входных данных, таких как правила пароля,
        которые должны возвращать несколько ошибок для одного поля. Чтобы
        включить эту функцию, убедитесь, что вы установили{" "}
        <code>validateCriteriaMode: 'all'</code>.
      </>
    ),
    message: `Сообщение является пустой строкой по умолчанию. Однако, если вы зарегистрируете валидацию с сообщением об ошибке, то затем она будет возвращена.`,
    ref: `Ссылка на ваш элемент поля.`,
  },
  watch: {
    title: "watch",
    description: (
      <>
        <p>
          This will watch specified input/inputs and return its value, and it's
          useful for determining what to render.
        </p>

        <ul>
          <li>
            <p>
              When <code>defaultValue</code> is not defined, the first render of{" "}
              <code>watch</code> will return <code>undefined</code> because it
              is called before <code>register</code>, but you can set the{" "}
              <code>defaultValue</code> as the second argument to return value.
            </p>
          </li>
          <li>
            <p>
              However, if <code>defaultValues</code> was initialised in{" "}
              <code>useForm</code> as argument, then the first render will
              return what's provided in <code>defaultValues</code>.
            </p>
          </li>
        </ul>
      </>
    ),
    tableTitle: {
      single: (
        <>
          Watch input value by name (similar to lodash{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://lodash.com/docs/4.17.15#get"
          >
            get
          </a>{" "}
          function)
        </>
      ),
      multiple: "Watch multiple inputs",
      all: "Watch all inputs",
      nest: "Watch all inputs and return nested object",
    },
  },
  handleSubmit: {
    title: "handleSubmit",
    description: (
      <>
        <p>
          This function will pass the form data when form validation is
          successful.
        </p>
        <p>
          <Note>Примечание:</Note> You can pass an <code>async</code> function
          for asynchronous validation. т.е.:{" "}
        </p>
        <p>
          <CodeBlock>
            handleSubmit(async (data) => await fetchAPI(data))
          </CodeBlock>
        </p>
      </>
    ),
  },
  reset: goToSection => ({
    title: "reset",
    description: (
      <>
        <p>
          This function will reset the fields' values and errors within the
          form. You can pass <code>values</code> as an optional argument to
          reset your form into assigned default values.
        </p>
        <p>
          <Note>Примечание:</Note> For controlled components like{" "}
          <code>React-Select</code> which don't expose <code>ref</code>, you
          will have to reset the input value manually through{" "}
          <CodeAsLink onClick={() => goToSection("setValue")}>
            setValue
          </CodeAsLink>{" "}
          or using{" "}
          <CodeAsLink onClick={() => goToSection("Controller")}>
            Controller
          </CodeAsLink>{" "}
          to wrap around your controlled component.
        </p>
      </>
    ),
  }),
  setError: {
    title: "setError",
    description: (
      <p>The function allows you to manually set one or multiple errors.</p>
    ),
  },
  clearError: {
    title: "clearError",
    description: (
      <ul>
        <li>
          <p>
            <code>undefined</code>: reset all errors
          </p>
        </li>
        <li>
          <p>
            <code>string</code>: reset single error
          </p>
        </li>
        <li>
          <p>
            <code>string[]</code>: reset multiple errors
          </p>
        </li>
      </ul>
    ),
  },
  setValue: {
    title: "setValue",
    description: (
      <>
        <p>
          This function allows you to dynamically set input/select value. At the
          same time, it tries to avoid re-render when it's not necessary and
          only the following conditions will trigger re-render.
        </p>
        <ul>
          <li>
            <p>When an error is triggered by a value update</p>
          </li>
          <li>
            <p>When an error is corrected by a value update</p>
          </li>
          <li>
            <p>
              When setValue is invoked for the first time and formState{" "}
              <code>dirty</code> is set to true
            </p>
          </li>
          <li>
            <p>
              When setValue is invoked and formState <code>touched</code> is
              updated
            </p>
          </li>
        </ul>
        <p>
          <Note>Примечание:</Note> By invoking this method,{" "}
          <code>formState</code> will push the input's <code>name</code> into{" "}
          <code>touched</code>.
        </p>
        <p>
          You can also set <code>shouldValidate</code> to <code>true</code> and
          it will trigger field validation. т.е.:{" "}
          <code>setValue('name', 'value', true)</code>
        </p>
      </>
    ),
  },
  getValues: {
    title: "getValues",
    description: (
      <>
        <p>
          This function will return the entire form data, and it's useful in a
          function when you want to retrieve form values.
        </p>

        <ul>
          <li>
            <p>
              By default <code>getValues()</code> will return form data in a
              flat structure. т.е.:{" "}
              <code>{`{ test: 'data', test1: 'data1'}`}</code>
            </p>
          </li>
          <li>
            <p>
              Working on the defined form fields,{" "}
              <code>getValues({`{ nest: true }`})</code> will return data in a
              nested structure according to input <code>name</code>. т.е.:{" "}
              <code>{`{ test: [1, 2], test1: { data: '23' } }`}</code>
            </p>
          </li>
        </ul>
      </>
    ),
  },
  triggerValidation: {
    title: "triggerValidation",
    description: (
      <>
        <p>To manually trigger an input/select validation in the form.</p>
        <p>
          <Note>Примечание:</Note> When validation fails, the{" "}
          <code>errors</code> object will be updated.
        </p>
      </>
    ),
  },
  validationSchema: {
    title: "ValidationSchema",
    description: (
      <p>
        If you would like to centralize your validation rules with external
        validation schema, you can apply <code>validationSchema</code> at{" "}
        <code>useForm</code> as an optional argument. React Hook Form currently
        supports{" "}
        <Link
          href="https://github.com/jquense/yup"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yup
        </Link>{" "}
        for object schema validation.
      </p>
    ),
  },
  Controller: {
    title: "Controller",
    table: (
      <tbody>
        <tr>
          <td>
            <code>name</code>
          </td>
          <td>
            <TypeText>string</TypeText>
          </td>
          <td>✓</td>
          <td>Unique name of your input.</td>
        </tr>
        <tr>
          <td>
            <code>as</code>
          </td>
          <td>
            <TypeText>React.ElementType | string</TypeText>
          </td>
          <td>✓</td>
          <td>
            Controlled component. т.е.: <code>as="input"</code> or{" "}
            <code>{`as={<TextInput />}`}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>control</code>
          </td>
          <td>
            <TypeText>Object</TypeText>
          </td>
          <td />
          <td>
            <code>control</code> object is from invoking <code>useForm</code>.
            it's optional if you are using FormContext.
          </td>
        </tr>
        <tr>
          <td>
            <code>defaultValue</code>
          </td>
          <td>
            <TypeText>any</TypeText>
          </td>
          <td />
          <td>
            The same as uncontrolled component's <code>defaultValue</code>, when
            supply <code>boolean</code> value, it will be treated as checkbox
            input.
            <p>
              <Note>Примечание:</Note> you will need to supply either{" "}
              <code>defaultValue</code> or <code>defaultValues</code> at{" "}
              <code>useForm</code>
            </p>
            <p>
              <Note>Note</Note>: When provided, this take priority over{" "}
              <code>useForm</code> <code>defaultValues</code> for given key.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>rules</code>
          </td>
          <td>
            <TypeText>Object</TypeText>
          </td>
          <td />
          <td>
            Validation rules according to <code>register</code>.
          </td>
        </tr>
        <tr>
          <td>
            <code>onChange</code>
          </td>
          <td>
            <TypeText>(args: any) => any</TypeText>
          </td>
          <td />
          <td>
            This <code>onChange</code> prop allow you to customise the return
            value. <br />
            <code>т.е.: {`onChange={{(data) => data.value}}`}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>onBlur</code>
          </td>
          <td>
            <TypeText>(args: any) => any</TypeText>
          </td>
          <td />
          <td>
            This <code>onBlur</code> prop allow you to customise the return
            value. <br />
            <code>т.е.: {`onBlur={{(data) => data.value}}`}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>onChangeName</code>
          </td>
          <td>
            <TypeText>string</TypeText>
          </td>
          <td />
          <td>
            This prop allow you to target that specific event name, т.е.: when{" "}
            <code>onChange</code> event is named <code>onTextChange</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>onBlurName</code>
          </td>
          <td>
            <TypeText>string</TypeText>
          </td>
          <td />
          <td>
            This prop allow you to target that specific event name, т.е.: when{" "}
            <code>onBlur</code> event is named <code>onTextBlur</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>valueName</code>
          </td>
          <td>
            <TypeText>string</TypeText>
          </td>
          <td />
          <td>
            This prop allows you to override the <code>value</code> prop and
            support other components which doesn't use <code>value</code> prop.
            т.е.: <code>checked</code>, <code>selected</code> and ect...
          </td>
        </tr>
      </tbody>
    ),
    description: (
      <>
        <p>
          React Hook Form embrace uncontrolled components and native inputs,
          however it's hard to avoid working with external controlled component
          such as{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/JedWatson/react-select"
          >
            React-Select
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ant-design/ant-design"
          >
            AntD
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/"
          >
            Material-UI
          </a>
          . This wrapper component will make your life easier to work with them.
        </p>
        <p>
          Every props you pass to Controller component, will be forwarded to the
          Component instance you provided with the <code>as</code> prop. That
          means imagine you have a custom <code>Switch</code> component that
          require a <code>label</code> prop. You can pass this prop to the
          Controller component directly. The <code>name</code> prop will be used
          mainly to access the value through the form later.
        </p>

        <p>
          If you use a <code>defaultValue</code> prop, it will take priority
          over the <code>useForm</code> <code>defaultValues</code> value for
          your property given at <code>name</code> prop.
        </p>
      </>
    ),
  },
  formContext: {
    title: "FormContext",
    introduction: (
      <p>
        Form context is intended to solve the problem when there are deep nested
        inputs in your components tree, and passing methods deep down as{" "}
        <code>props</code> becomes painful.
      </p>
    ),
    description: (
      <>
        <p>
          Once your form is wrapped with <code>FormContext</code>, the{" "}
          <code>useFormContext</code>: <TypeText>function</TypeText> can be
          invoked in its child component.
        </p>
        <p>
          <Note>Примечание:</Note> invoking <code>useFormContext</code> will
          give you all of the <code>useForm</code> hook functions.
        </p>
      </>
    ),
  },
  control: {
    title: "control",
    description: (
      <p>
        This object is made for React Hook Form's Controller component, which
        contains methods for registering controlled component into React Hook
        Form.
      </p>
    ),
  },
  ErrorMessage: {
    title: "ErrorMessage",
    description: (
      <p>A simple component to render associated input's error message.</p>
    ),
    table: (
      <tbody>
        <tr>
          <td>
            <code>name</code>
          </td>
          <td>
            <TypeText>string</TypeText>
          </td>
          <td>✓</td>
          <td>associated field name.</td>
        </tr>
        <tr>
          <td>
            <code>errors</code>
          </td>
          <td>
            <TypeText>object</TypeText>
          </td>
          <td />
          <td>
            <code>errors</code> object from React Hook Form. it's optional if
            you are using FormContext.
          </td>
        </tr>
        <tr>
          <td>
            <code>as</code>
          </td>
          <td>
            <TypeText>React.ElementType | string</TypeText>
          </td>
          <td />
          <td>
            Wrapper component or HTML tag. т.е.: <code>as="span"</code> or{" "}
            <code>{`as={<Text />}`}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>children</code>
          </td>
          <td>
            <TypeText>
              ({`{ message: string, messages: string[]}`}) => any
            </TypeText>
          </td>
          <td />
          <td>
            This is a{" "}
            <a
              href="https://reactjs.org/docs/render-props.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              render prop
            </a>{" "}
            for rendering error message or messages.
          </td>
        </tr>
      </tbody>
    ),
  },
  NativeValidation: {
    title: "Browser built-in validation",
    description: (
      <p>
        The following example demonstrates how you can leverage the browser's
        validation. You only need to set <code>nativeValidation</code> to{" "}
        <code>true</code> and the rest of the syntax is the same as standard
        validation.
      </p>
    ),
  },
}
