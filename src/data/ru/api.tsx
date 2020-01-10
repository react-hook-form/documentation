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
          This method will allow you to <code>unregister</code> a single input
          or an array of inputs. This is useful when you register your input
          during <code>useEffect</code> as custom register and to unregister it
          after component unmount.
        </p>
        <p>
          <Note>Примечание:</Note> When you unregister an input, its value will
          no longer be included in the form data that gets submitted.
        </p>
      </>
    ),
  },
  register: {
    title: "register",
    description: (
      <>
        <p>
          This method allows you to register input/select <code>Ref</code> and
          validation rules into React Hook Form.
        </p>
        <p>
          Validation rules are all based on HTML standard and also allow custom
          validation.
        </p>
        <p>
          <Note>Important:</Note> <code>name</code> is <b>required</b> and{" "}
          <b>unique</b>. Input name also supports dot and bracket syntax, which
          allows you to easily create nested form fields. Example table is
          below:
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
        If you working on <code>arrays/array fields</code>, you can assign an
        input name as <code>name[index]</code>.{" "}
        <Link
          href="https://github.com/react-hook-form/react-hook-form/blob/master/examples/FieldArray.tsx"
          title="example for Field Array"
        >
          Check out the Field Array example
        </Link>
        .
      </p>
    ),
    example: "Submit Result",
    selectHelp:
      "By selecting the register option, the API table below will get updated.",
    options: {
      title: "Register options",
      registerWithValidation: "Register with validation",
      registerWithValidationMessage:
        "Register with validation and error message",
      note: goToSection => (
        <>
          <Title>Custom Register</Title>
          <p>
            You can also register inputs manually, which is useful when working
            with custom components and <code>Ref</code> is not accessible. This
            is actually the case when you are working with React Native or
            custom component like{" "}
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
            By using a custom register call, you will need to update the input
            value with{" "}
            <CodeAsLink onClick={() => goToSection("setValue")}>
              setValue
            </CodeAsLink>
            , because input is no longer registered with its ref.
          </p>

          <p>
            <CodeBlock>{`register({ name: 'firstName' }, { required: true, min: 8 })`}</CodeBlock>
          </p>

          <p>
            <Note>Примечание:</Note> If you want the custom registered input to
            trigger a re-render during its value update, then you should give a
            type to your registered input.
          </p>
        </>
      ),
    },
    validation: {
      required: (
        <>
          A Boolean which, if true, indicates that the input must have a value
          before the form can be submitted. You can assign a string to return an
          error message in the <code>errors</code> object.
        </>
      ),
      maxLength: "The maximum length of the value to accept for this input.",
      minLength: "The minimum length of the value to accept for this input.",
      max: "The maximum value to accept for this input.",
      min: "The minimum value to accept for this input.",
      pattern: "The regex pattern for the input.",
      validate: `You can pass a callback function as the argument to validate, or you can pass an object of callback functions to validate all of them. (refer to the examples)`,
    },
  },
  formState: {
    title: "formState",
    description: "This object contain information about the form state.",
    dirty: "Set to true after a user interacted with any of the inputs.",
    isSubmitted: "Set true after a user submitted the form.",
    touched: "An object of all inputs which have been interacted.",
    isSubmitting: (
      <>
        During form submitting will set to <code>true</code> and after
        submitting set to <code>false</code>
      </>
    ),
    submitCount: "Number of forms submit.",
    isValid: "Set true if doesn't have any error.",
  },
  errors: {
    title: "errors",
    description: currentLanguage => (
      <>
        <p>
          Object contains form errors or error messages which belong to each
          input.
        </p>

        <p>
          <Note>Примечание:</Note> Difference between V3 and V4:
        </p>

        <ul>
          <li>
            <p>V4: Nested object</p>
            <p>
              <strong>Reason:</strong> as optional chaining becoming more
              popular among the community and to support better type.
            </p>
            <p>
              <code>{`errors?.yourDetail?.firstName;`}</code>
            </p>
          </li>
          <li>
            <p>V3: Flatten object</p>
            <p>
              <strong>Reason:</strong> simple and easy to access error.
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
        This is useful for input validation like rules of password, which
        multiple errors need to return for a single field. To enable this
        feature, make sure you have set <code>validateCriteriaMode: 'all'</code>
        .
      </>
    ),
    message: `Message is an empty string by default. However, if you register validation with error message, then it will be returned.`,
    ref: `Reference for your input element.`,
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
          <td></td>
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
          <td></td>
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
          <td></td>
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
          <td></td>
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
          <td></td>
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
          <td></td>
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
          <td></td>
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
          <td></td>
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
          <td></td>
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
          <td></td>
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
          <td></td>
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
