import code from "../components/codeExamples/defaultExample"
import * as React from "react"
import Link from "../styles/link"
import { Link as NavLink } from 'gatsby';
import { Note, TypeText } from "../styles/typography"
import { CodeAsLink } from "../components/ApiPage"
import colors from "../styles/colors"
import translateLink from "../components/logic/translateLink"

export default {
  header: {
    description: {
      en:
        "React Hook Form focuses on providing the best DX by simplifying the API.",
      jp: "",
      zh: "",
    },
  },
  useForm: {
    en: {
      title: "useForm",
      intro: (
        <>
          By invoking <code>useForm</code>, you will receive the following
          methods{" "}
        </>
      ),
      description: (
        <p>
          <code>useForm</code> also has <b>optional</b> arguments. The following
          example demonstrates all options' default value.
        </p>
      ),
      validateOnSubmit: (
        <>
          Validation will trigger on the <code>submit</code> event and invalid
          inputs will attach <code>onChange</code> event listeners to
          re-validate them.
        </>
      ),
      validateOnBlur: (
        <>
          Validation will trigger on the <code>blur</code> event.
        </>
      ),
      validateOnChange: (
        <>
          Validation will trigger on the <code>change</code> event with each
          input, and lead to multiple re-renders. Not recommended: Consider this
          as a bad performance practice.
        </>
      ),
      defaultValues: goToSection => (
        <>
          <p>
            You can set the input's default value with{" "}
            <code>defaultValue/defaultChecked</code>{" "}
            <Link href="https://reactjs.org/docs/uncontrolled-components.html">
              (read more from the React doc for Default Values)
            </Link>{" "}
            or pass <code>defaultValues</code> as an optional argument to
            populate default values for the entire form.
          </p>

          <p>
            <Note>Note:</Note> Values defined in <code>defaultValues</code> will
            be injected into{" "}
            <CodeAsLink onClick={() => goToSection("watch")}>watch</CodeAsLink>{" "}
            as <code>defaultValue</code>.
          </p>

          <p>
            <Note>Note:</Note> <code>defaultValues</code> doesn't auto populate
            with the manually registered input (eg:{" "}
            <code>{`register({ name: 'test' })`}</code>) because the manual{" "}
            <code>register</code> field does not provide the <code>ref</code> to
            React Hook Form.
          </p>
        </>
      ),
      validationSchema: goToSection => (
        <p>
          Apply form validation rules with <code>Yup</code> at the schema level,
          please refer to the{" "}
          <CodeAsLink onClick={() => goToSection("validationSchema")}>
            validationSchema
          </CodeAsLink>{" "}
          section.
        </p>
      ),
      reValidateMode: (
        <p>
          This option allows you to configure when inputs with errors getd
          re-validated (by default, validation is triggered during an input
          change.)
        </p>
      ),
      validationFields: (
        <p>
          Providing an array of fields means only included fields will be
          validated. This option is useful when you want to toggle which fields
          are required to validate.
        </p>
      ),
      submitFocusError: (
        <>
          <p>
            By default when the user submits a form and that contains an error,
            the first field with an error will be focused.
          </p>

          <p>
            <Note>Note:</Note> Only registered fields with a <code>ref</code>{" "}
            will work. Manually registered inputs won't work. eg:{" "}
            <code>{`register({ name: 'test' }) // doesn't work`}</code>{" "}
          </p>
        </>
      ),
      nativeValidation: goToSection => (
        <p>
          Setting this option to <code>true</code> will enable the browser's
          native validation. You can{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
          >
            find out more about the built-in browser validation
          </a>
          , and refer to the{" "}
          <CodeAsLink onClick={() => goToSection("nativeValidation")}>
            nativeValidation
          </CodeAsLink>{" "}
          section for more details and examples.
        </p>
      ),
    },
    jp: {
      title: "useForm",
      intro: (
        <>
          By invoking <code>useForm</code>, you will receive the following
          methods{" "}
        </>
      ),
      description: (
        <p>
          <code>useForm</code> also has <b>optional</b> arguments. The following
          example demonstrates all options' default value.
        </p>
      ),
      validateOnSubmit: (
        <>
          Validation will trigger on the <code>submit</code> event and invalid
          inputs will attach <code>onChange</code> event listeners to
          re-validate them.
        </>
      ),
      validateOnBlur: (
        <>
          Validation will trigger on the <code>blur</code> event.
        </>
      ),
      validateOnChange: (
        <>
          Validation will trigger on the <code>change</code> event with each
          input, and lead to multiple re-renders. Not recommended: Consider this
          as a bad performance practice.
        </>
      ),
      defaultValues: goToSection => (
        <>
          <p>
            You can set the input's default value with{" "}
            <code>defaultValue/defaultChecked</code>{" "}
            <Link href="https://reactjs.org/docs/uncontrolled-components.html">
              (read more from the React doc for Default Values)
            </Link>{" "}
            or pass <code>defaultValues</code> as an optional argument to
            populate default values for the entire form.
          </p>

          <p>
            <Note>Note:</Note> Values defined in <code>defaultValues</code> will
            be injected into{" "}
            <CodeAsLink onClick={() => goToSection("watch")}>watch</CodeAsLink>{" "}
            as <code>defaultValue</code>.
          </p>

          <p>
            <Note>Note:</Note> <code>defaultValues</code> doesn't auto populate
            with the manually registered input (eg:{" "}
            <code>{`register({ name: 'test' })`}</code>) because the manual{" "}
            <code>register</code> field does not provide the <code>ref</code> to
            React Hook Form.
          </p>
        </>
      ),
      validationSchema: goToSection => (
        <p>
          Apply form validation rules with <code>Yup</code> at the schema level,
          please refer to the{" "}
          <CodeAsLink onClick={() => goToSection("validationSchema")}>
            validationSchema
          </CodeAsLink>{" "}
          section.
        </p>
      ),
      reValidateMode: (
        <p>
          This option allows you to configure when inputs with errors getd
          re-validated (by default, validation is triggered during an input
          change.)
        </p>
      ),
      validationFields: (
        <p>
          Providing an array of fields means only included fields will be
          validated. This option is useful when you want to toggle which fields
          are required to validate.
        </p>
      ),
      submitFocusError: (
        <>
          <p>
            By default when the user submits a form and that contains an error,
            the first field with an error will be focused.
          </p>

          <p>
            <Note>Note:</Note> Only registered fields with a <code>ref</code>{" "}
            will work. Manually registered inputs won't work. eg:{" "}
            <code>{`register({ name: 'test' }) // doesn't work`}</code>{" "}
          </p>
        </>
      ),
      nativeValidation: goToSection => (
        <p>
          Setting this option to <code>true</code> will enable the browser's
          native validation. You can{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
          >
            find out more about the built-in browser validation
          </a>
          , and refer to the{" "}
          <CodeAsLink onClick={() => goToSection("nativeValidation")}>
            nativeValidation
          </CodeAsLink>{" "}
          section for more details and examples.
        </p>
      ),
    },
    zh: {
      title: "useForm",
      intro: (
        <>
          通过调用使用<code>useForm</code>，您将收到以下方法{" "}
        </>
      ),
      description: (
        <p>
          <code>useForm</code>也有<strong>可选</strong>的参数。
          下面的示例演示了所有选项的默认值。
        </p>
      ),
      validateOnSubmit: (
        <>
          验证将在<code>提交</code>
          时触发，无效的输入将附加onChange事件侦听器以重新验证它们。
        </>
      ),
      validateOnBlur: (
        <>
          验证将在离开<code>blur</code>表格事件上触发。
        </>
      ),
      validateOnChange: (
        <>
          验证将在每个输入<code>change</code>
          的事件上触发，并导致多个重新renders。 不推荐这个方法的实践性能。
        </>
      ),
      defaultValues: goToSection => (
        <>
          <p>
            您可以使用defaultValue/defaultChecked设置输入的默认值
            <Link href="https://reactjs.org/docs/uncontrolled-components.html">
              （从React文档中读取默认值的更多内容）
            </Link>
            ，或者将defaultValues作为可选参数来填充整个表单的默认值。
          </p>

          <p>
            <Note>注意:</Note> 默认值<code>defaultValues</code>
            中定义的值将作为默认值<code>defaultValue</code>注入
            <CodeAsLink onClick={() => goToSection("watch")}>watch</CodeAsLink>
            。
          </p>

          <p>
            React Hook Form. 默认值<code>defaultValues</code>
            不会使用手动注册的输入（例如：注册
            <code>{`register({ name: 'test' })`}</code>
            ）自动填充，因为手动注册<code>register</code>字段不会提供
            <code>ref</code>到React Hook Form。
          </p>
        </>
      ),
      validationSchema: goToSection => (
        <p>
          将表单验证规则应用于架构级别的<code>Yup</code>，请参阅验证架构
          <CodeAsLink onClick={() => goToSection("validationSchema")}>
            validationSchema
          </CodeAsLink>
          部分。
        </p>
      ),
      reValidateMode: (
        <p>
          此选项允许您在有错误的输入重新验证时进行配置（默认情况下，在输入更改期间触发验证）。
        </p>
      ),
      validationFields: (
        <p>
          提供字段数组意味着只包含字段将会被验证。
          此选项很有用需要验证当您要切换什么表格需要验证。
        </p>
      ),
      submitFocusError: (
        <>
          <p>
            默认情况下，当用户提交表单并包含错误时,
            具有错误的第一个字段将被聚焦。
          </p>

          <p>
            <Note>注意:</Note> 只有具有<code>ref</code>的注册字段将工作。
            手动注册的输入将无法正常工作。 比如:{" "}
            <code>{`register({ name: 'test' }) // 不会工作`}</code>{" "}
          </p>
        </>
      ),
      nativeValidation: goToSection => (
        <p>
          将此选项设置为<code>true</code>将启用浏览器的本机验证。{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
          >
            您可以了解有关内置浏览器验证的更多信息
          </a>
          ，并参考本机验证部分
          <CodeAsLink onClick={() => goToSection("nativeValidation")}>
            nativeValidation
          </CodeAsLink>
          了解更多详细信息和示例。
        </p>
      ),
    },
  },
  unregister: {
    en: (
      <>
        <p>
          This method will allow you to <code>unregister</code> a single input
          or an array of inputs.
        </p>
        <p>
          <Note>Note:</Note> When you unregister an input, its value will no
          longer be included in the form data that gets submitted.
        </p>
      </>
    ),
    jp: (
      <>
        <p>
          This method will allow you to <code>unregister</code> a single input
          or an array of inputs.
        </p>
        <p>
          <Note>Note:</Note> When you unregister an input, its value will no
          longer be included in the form data that gets submitted.
        </p>
      </>
    ),
    zh: (
      <>
        <p>
          This method will allow you to <code>unregister</code> a single input
          or an array of inputs.
        </p>
        <p>
          <Note>注意:</Note> When you unregister an input, its value will no
          longer be included in the form data that gets submitted.
        </p>
      </>
    ),
  },
  register: {
    en: {
      title: "register",
      description: (
        <>
          <p>
            This method allows you to register input/select <code>Ref</code> and
            validation rules into React Hook Form.
          </p>
          <p>
            Validation rules are all based on HTML standard and also allow
            custom validation.
          </p>
          <p>
            <Note>Important:</Note> <code>name</code> is <b>required</b> and{" "}
            <b>unique</b>. Input name also supports dot and bracket syntax,
            which allows you to easily create nested form fields. Example table
            is below:
          </p>
        </>
      ),
      fieldArray: (
        <p
          style={{
            fontSize: 14,
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
      options: {
        title: "Register options",
        registerWithValidation: "Register with validation",
        registerWithValidationMessage:
          "Register with validation and error message",
        note: goToSection => (
          <>
            <p>
              <Note>Note:</Note> You can also register inputs manually, which is
              useful when working with custom components and <code>Ref</code> is
              not accessible. This is actually the case when you are working
              with React Native or custom component like{" "}
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
              <code onClick={() => goToSection("setValue")}>setValue</code>,
              because input is no longer registered with its ref.
            </p>

            <p>
              <code>{`register({ name: 'firstName' }, { required: true, min: 8 })`}</code>
            </p>

            <p>
              <Note>Note:</Note> If you want the custom registered input to
              trigger a re-render during its value update, then you should give
              a type to your registered input.
            </p>
          </>
        ),
      },
      validation: {
        required: (
          <>
            A Boolean which, if true, indicates that the input must have a value
            before the form can be submitted. You can assign a string to return
            an error message in the <code>errors</code> object.
          </>
        ),
        maxLength: "The maximum length of the value to accept for this input.",
        minLength: "The minimum length of the value to accept for this input.",
        max: "The maximum value to accept for this input.",
        min: "The minimum value to accept for this input.",
        regex: "The regex pattern for the input.",
        validate: `You can pass a callback function as the argument to validate, or you can pass an object of callback functions to validate all of them. (refer to the examples)`,
      },
    },
    jp: {
      title: "register",
      description: (
        <>
          <p>
            This method allows you to register input/select <code>Ref</code> and
            validation rules into React Hook Form.
          </p>
          <p>
            Validation rules are all based on HTML standard and also allow
            custom validation.
          </p>
          <p>
            <Note>Important:</Note> <code>name</code> is <b>required</b> and{" "}
            <b>unique</b>. Input name also supports dot and bracket syntax,
            which allows you to easily create nested form fields. Example table
            is below:
          </p>
        </>
      ),
      fieldArray: (
        <p
          style={{
            fontSize: 14,
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
      options: {
        title: "Register options",
        registerWithValidation: "Register with validation",
        registerWithValidationMessage:
          "Register with validation and error message",
        note: goToSection => (
          <>
            <p>
              <Note>Note:</Note> You can also register inputs manually, which is
              useful when working with custom components and <code>Ref</code> is
              not accessible. This is actually the case when you are working
              with React Native or custom component like{" "}
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
              <code onClick={() => goToSection("setValue")}>setValue</code>,
              because input is no longer registered with its ref.
            </p>

            <p>
              <code>{`register({ name: 'firstName' }, { required: true, min: 8 })`}</code>
            </p>

            <p>
              <Note>Note:</Note> If you want the custom registered input to
              trigger a re-render during its value update, then you should give
              a type to your registered input.
            </p>
          </>
        ),
      },
      validation: {
        required: (
          <>
            A Boolean which, if true, indicates that the input must have a value
            before the form can be submitted. You can assign a string to return
            an error message in the <code>errors</code> object.
          </>
        ),
        maxLength: "The maximum length of the value to accept for this input.",
        minLength: "The minimum length of the value to accept for this input.",
        max: "The maximum value to accept for this input.",
        min: "The minimum value to accept for this input.",
        regex: "The regex pattern for the input.",
        validate: `You can pass a callback function as the argument to validate, or you can pass an object of callback functions to validate all of them. (refer to the examples)`,
      },
    },
    zh: {
      title: "register",
      description: (
        <>
          <p>
            此方法允许您将输入/选择<code>Ref</code>和验证规则注册到React Hook
            Form。
          </p>
          <p>验证规则都是基于HTML标准，也允许自定义验证。</p>
          <p>
            <Note>重要:</Note> 名称<code>name</code>是<strong>必需</strong>的和
            <strong>唯一</strong>的。
            输入名称还支持点和括号语法，它允许您轻松创建嵌套表单字段。
            示例表如下:
          </p>
        </>
      ),
      fieldArray: (
        <p
          style={{
            fontSize: 14,
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
      options: {
        title: "Register options",
        registerWithValidation: "Register with validation",
        registerWithValidationMessage:
          "Register with validation and error message",
        note: goToSection => (
          <>
            <p>
              <Note>Note:</Note> You can also register inputs manually, which is
              useful when working with custom components and <code>Ref</code> is
              not accessible. This is actually the case when you are working
              with React Native or custom component like{" "}
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
              <code onClick={() => goToSection("setValue")}>setValue</code>,
              because input is no longer registered with its ref.
            </p>

            <p>
              <code>{`register({ name: 'firstName' }, { required: true, min: 8 })`}</code>
            </p>

            <p>
              <Note>Note:</Note> If you want the custom registered input to
              trigger a re-render during its value update, then you should give
              a type to your registered input.
            </p>
          </>
        ),
      },
      validation: {
        required: (
          <>
            A Boolean which, if true, indicates that the input must have a value
            before the form can be submitted. You can assign a string to return
            an error message in the <code>errors</code> object.
          </>
        ),
        maxLength: "The maximum length of the value to accept for this input.",
        minLength: "The minimum length of the value to accept for this input.",
        max: "The maximum value to accept for this input.",
        min: "The minimum value to accept for this input.",
        regex: "The regex pattern for the input.",
        validate: `You can pass a callback function as the argument to validate, or you can pass an object of callback functions to validate all of them. (refer to the examples)`,
      },
    },
  },
  formState: {
    en: {
      title: "formState",
      description: "This object contain information about the form state.",
      dirty: "Set to true after a user interacted with any of the inputs.",
      isSubmitted: "Set true after a user submitted the form.",
      touched: "An array of all inputs which have been interacted.",
      isSubmitting: (
        <>
          During form submitting will set to <code>true</code> and after
          submitting set to <code>false</code>
        </>
      ),
      submitCount: "Number of forms submit.",
      isValid: "Set true if doesn't have any error.",
    },
    jp: {
      title: "formState",
      description: "This object contain information about the form state.",
      dirty: "Set to true after a user interacted with any of the inputs.",
      isSubmitted: "Set true after a user submitted the form.",
      touched: "An array of all inputs which have been interacted.",
      isSubmitting: (
        <>
          During form submitting will set to <code>true</code> and after
          submitting set to <code>false</code>
        </>
      ),
      submitCount: "Number of forms submit.",
      isValid: "Set true if doesn't have any error.",
    },
    zh: {
      title: "formState",
      description: "This object contain information about the form state.",
      dirty: "Set to true after a user interacted with any of the inputs.",
      isSubmitted: "Set true after a user submitted the form.",
      touched: "An array of all inputs which have been interacted.",
      isSubmitting: (
        <>
          During form submitting will set to <code>true</code> and after
          submitting set to <code>false</code>
        </>
      ),
      submitCount: "Number of forms submit.",
      isValid: "Set true if doesn't have any error.",
    },
  },
  errors: {
    en: {
      title: "errors",
      description: currentLanguage => (
        <>
          <p>
            Object contains form errors or error messages which belong to each
            input.
          </p>

          <p>
            <Note>Note:</Note> You can also learn recipes on{" "}
            <NavLink
              to={translateLink("advanced-usage#ErrorMessage", currentLanguage)}
            >
              Error Message
            </NavLink>{" "}
            from advanced page.
          </p>
        </>
      ),
      message: `Message is an empty string by default. However, if you register validation with error message, then it will be returned.`,
      ref: `Reference for your input element.`,
    },
    jp: {
      title: "errors",
      description: currentLanguage => (
        <>
          <p>
            Object contains form errors or error messages which belong to each
            input.
          </p>

          <p>
            <Note>Note:</Note> You can also learn recipes on{" "}
            <Link
              to={translateLink("advanced-usage#ErrorMessage", currentLanguage)}
            >
              Error Message
            </Link>{" "}
            from advanced page .
          </p>
        </>
      ),
      message: `Message is an empty string by default. However, if you register validation with error message, then it will be returned.`,
      ref: `Reference for your input element.`,
    },
    zh: {
      title: "errors",
      description: currentLanguage => (
        <>
          <p>
            Object contains form errors or error messages which belong to each
            input.
          </p>

          <p>
            <Note>Note:</Note> You can also learn recipes on{" "}
            <Link
              to={translateLink("advanced-usage#ErrorMessage", currentLanguage)}
            >
              Error Message
            </Link>{" "}
            from advanced page .
          </p>
        </>
      ),
      message: `Message is an empty string by default. However, if you register validation with error message, then it will be returned.`,
      ref: `Reference for your input element.`,
    },
  },
  watch: {
    en: {
      title: "watch",
      description: (
        <>
          <p>This will watch specified input/inputs and return its value.</p>

          <ul>
            <li>
              <p>
                When <code>defaultValue</code> is not defined, the first render
                of <code>watch</code> will return <code>undefined</code> because
                it is called before <code>register</code>, but you can set the{" "}
                <code>defaultValue</code> as the second argument to return
                value.
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
      },
    },
    jp: {
      title: "watch",
      description: (
        <>
          <p>This will watch specified input/inputs and return its value.</p>

          <ul>
            <li>
              <p>
                When <code>defaultValue</code> is not defined, the first render
                of <code>watch</code> will return <code>undefined</code> because
                it is called before <code>register</code>, but you can set the{" "}
                <code>defaultValue</code> as the second argument to return
                value.
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
      },
    },
    zh: {
      title: "watch",
      description: (
        <>
          <p>This will watch specified input/inputs and return its value.</p>

          <ul>
            <li>
              <p>
                When <code>defaultValue</code> is not defined, the first render
                of <code>watch</code> will return <code>undefined</code> because
                it is called before <code>register</code>, but you can set the{" "}
                <code>defaultValue</code> as the second argument to return
                value.
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
      },
    },
  },
  handleSubmit: {
    en: {
      title: "handleSubmit",
      description: (
        <>
          <p>
            This function will pass the form data when form validation is
            successful.
          </p>
          <p>
            <Note>Note:</Note> You can pass an <code>async</code> function for
            asynchronous validation. eg:{" "}
            <code>handleSubmit(async (data) => await fetchAPI(data))</code>
          </p>
        </>
      ),
    },
    jp: {
      title: "handleSubmit",
      description: (
        <>
          <p>
            This function will pass the form data when form validation is
            successful.
          </p>
          <p>
            <Note>Note:</Note> You can pass an <code>async</code> function for
            asynchronous validation. eg:{" "}
            <code>handleSubmit(async (data) => await fetchAPI(data))</code>
          </p>
        </>
      ),
    },
    zh: {
      title: "handleSubmit",
      description: (
        <>
          <p>
            This function will pass the form data when form validation is
            successful.
          </p>
          <p>
            <Note>Note:</Note> You can pass an <code>async</code> function for
            asynchronous validation. eg:{" "}
            <code>handleSubmit(async (data) => await fetchAPI(data))</code>
          </p>
        </>
      ),
    },
  },
  reset: {
    en: goToSection => ({
      title: "reset",
      description: (
        <>
          <p>
            This function will reset the fields' values and errors within the
            form. You can pass <code>values</code> as an optional argument to
            reset your form into assigned default values.
          </p>
          <p>
            <Note>Note:</Note> For controlled components like{" "}
            <code>React-Select</code> which don't expose <code>ref</code>, you
            will have to reset the input value manually through{" "}
            <code onClick={() => goToSection("setValue")}>setValue</code>.
          </p>
        </>
      ),
    }),
    jp: goToSection => ({
      title: "reset",
      description: (
        <>
          <p>
            This function will reset the fields' values and errors within the
            form. You can pass <code>values</code> as an optional argument to
            reset your form into assigned default values.
          </p>
          <p>
            <Note>Note:</Note> For controlled components like{" "}
            <code>React-Select</code> which don't expose <code>ref</code>, you
            will have to reset the input value manually through{" "}
            <code onClick={() => goToSection("setValue")}>setValue</code>.
          </p>
        </>
      ),
    }),
    zh: goToSection => ({
      title: "reset",
      description: (
        <>
          <p>
            This function will reset the fields' values and errors within the
            form. You can pass <code>values</code> as an optional argument to
            reset your form into assigned default values.
          </p>
          <p>
            <Note>Note:</Note> For controlled components like{" "}
            <code>React-Select</code> which don't expose <code>ref</code>, you
            will have to reset the input value manually through{" "}
            <code onClick={() => goToSection("setValue")}>setValue</code>.
          </p>
        </>
      ),
    }),
  },
  setError: {
    en: {
      title: "setError",
      description: <p>Allows you to manually set an input error.</p>,
    },
    jp: {
      title: "setError",
      description: <p>Allows you to manually set an input error.</p>,
    },
    zh: {
      title: "setError",
      description: <p>Allows you to manually set an input error.</p>,
    },
  },
  clearError: {
    en: {
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
    jp: {
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
    zh: {
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
  },
  setValue: {
    en: {
      title: "setValue",
      description: (
        <>
          <p>This function allows you to dynamically set input/select value.</p>
          <p>
            <Note>Note:</Note> By invoking this method, <code>formState</code>{" "}
            will push the input's <code>name</code> into <code>touched</code>.
          </p>
          <p>
            You can also set <code>shouldValidate</code> to <code>true</code>{" "}
            and it will trigger field validation. eg:{" "}
            <code>setValue('name', 'value', true)</code>
          </p>
        </>
      ),
    },
    jp: {
      title: "setValue",
      description: (
        <>
          <p>This function allows you to dynamically set input/select value.</p>
          <p>
            <Note>Note:</Note> By invoking this method, <code>formState</code>{" "}
            will push the input's <code>name</code> into <code>touched</code>.
          </p>
          <p>
            You can also set <code>shouldValidate</code> to <code>true</code>{" "}
            and it will trigger field validation. eg:{" "}
            <code>setValue('name', 'value', true)</code>
          </p>
        </>
      ),
    },
    zh: {
      title: "setValue",
      description: (
        <>
          <p>This function allows you to dynamically set input/select value.</p>
          <p>
            <Note>Note:</Note> By invoking this method, <code>formState</code>{" "}
            will push the input's <code>name</code> into <code>touched</code>.
          </p>
          <p>
            You can also set <code>shouldValidate</code> to <code>true</code>{" "}
            and it will trigger field validation. eg:{" "}
            <code>setValue('name', 'value', true)</code>
          </p>
        </>
      ),
    },
  },
  getValues: {
    en: {
      title: "getValues",
      description: (
        <>
          <p>This function will return the entire form data.</p>

          <ul>
            <li>
              <p>
                By default <code>getValues()</code> will return form data in a
                flat structure. eg:{" "}
                <code>{`{ test: 'data', test1: 'data1'}`}</code>
              </p>
            </li>
            <li>
              <p>
                Working on the defined form fields,{" "}
                <code>getValues({`{ nest: true }`})</code> will return data in a
                nested structure according to input <code>name</code>. eg:{" "}
                <code>{`{ test: [1, 2], test1: { data: '23' } }`}</code>
              </p>
            </li>
          </ul>
        </>
      ),
    },
    jp: {
      title: "getValues",
      description: (
        <>
          <p>This function will return the entire form data.</p>

          <ul>
            <li>
              <p>
                By default <code>getValues()</code> will return form data in a
                flat structure. eg:{" "}
                <code>{`{ test: 'data', test1: 'data1'}`}</code>
              </p>
            </li>
            <li>
              <p>
                Working on the defined form fields,{" "}
                <code>getValues({`{ nest: true }`})</code> will return data in a
                nested structure according to input <code>name</code>. eg:{" "}
                <code>{`{ test: [1, 2], test1: { data: '23' } }`}</code>
              </p>
            </li>
          </ul>
        </>
      ),
    },
    zh: {
      title: "getValues",
      description: (
        <>
          <p>This function will return the entire form data.</p>

          <ul>
            <li>
              <p>
                By default <code>getValues()</code> will return form data in a
                flat structure. eg:{" "}
                <code>{`{ test: 'data', test1: 'data1'}`}</code>
              </p>
            </li>
            <li>
              <p>
                Working on the defined form fields,{" "}
                <code>getValues({`{ nest: true }`})</code> will return data in a
                nested structure according to input <code>name</code>. eg:{" "}
                <code>{`{ test: [1, 2], test1: { data: '23' } }`}</code>
              </p>
            </li>
          </ul>
        </>
      ),
    },
  },
  triggerValidation: {
    en: {
      title: "triggerValidation",
      description: (
        <>
          <p>To manually trigger an input/select validation in the form.</p>
          <p>
            <Note>Note:</Note> When validation fails, the <code>errors</code>{" "}
            object will be updated.
          </p>
        </>
      ),
    },
    jp: {
      title: "triggerValidation",
      description: (
        <>
          <p>To manually trigger an input/select validation in the form.</p>
          <p>
            <Note>Note:</Note> When validation fails, the <code>errors</code>{" "}
            object will be updated.
          </p>
        </>
      ),
    },
    zh: {
      title: "triggerValidation",
      description: (
        <>
          <p>To manually trigger an input/select validation in the form.</p>
          <p>
            <Note>Note:</Note> When validation fails, the <code>errors</code>{" "}
            object will be updated.
          </p>
        </>
      ),
    },
  },
  reactNative: {
    en: {
      title: "React Native",
      description: (
        <p>
          You will get the same performance enhancement from an Uncontrolled
          Component. However, there are certain APIs which are not compatible
          with React Native (duo to the API difference from web and native). You
          will have to use a <b>manual register</b> as shown in the following
          example.
        </p>
      ),
    },
    jp: {
      title: "React Native",
      description: (
        <p>
          You will get the same performance enhancement from an Uncontrolled
          Component. However, there are certain APIs which are not compatible
          with React Native (duo to the API difference from web and native). You
          will have to use a <b>manual register</b> as shown in the following
          example.
        </p>
      ),
    },
    zh: {
      title: "React Native",
      description: (
        <p>
          You will get the same performance enhancement from an Uncontrolled
          Component. However, there are certain APIs which are not compatible
          with React Native (duo to the API difference from web and native). You
          will have to use a <b>manual register</b> as shown in the following
          example.
        </p>
      ),
    },
  },
  validationSchema: {
    en: {
      title: "validationSchema",
      description: (
        <p>
          If you would like to centralize your validation rules with external
          validation schema, you can apply <code>validationSchema</code> at{" "}
          <code>useForm</code> as an optional argument. React Hook Form
          currently supports{" "}
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
    jp: {
      title: "validationSchema",
      description: (
        <p>
          If you would like to centralize your validation rules with external
          validation schema, you can apply <code>validationSchema</code> at{" "}
          <code>useForm</code> as an optional argument. React Hook Form
          currently supports{" "}
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
    zh: {
      title: "validationSchema",
      description: (
        <p>
          If you would like to centralize your validation rules with external
          validation schema, you can apply <code>validationSchema</code> at{" "}
          <code>useForm</code> as an optional argument. React Hook Form
          currently supports{" "}
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
  },
  NativeValidation: {
    en: {
      title: "NativeValidation",
      description: (
        <p>
          The following example demonstrates how you can leverage the browser's
          validation. You only need to set <code>nativeValidation</code> to{" "}
          <code>true</code> and the rest of the syntax is the same as standard
          validation.
        </p>
      ),
    },
    jp: {
      title: "NativeValidation",
      description: (
        <p>
          The following example demonstrates how you can leverage the browser's
          validation. You only need to set <code>nativeValidation</code> to{" "}
          <code>true</code> and the rest of the syntax is the same as standard
          validation.
        </p>
      ),
    },
    zh: {
      title: "NativeValidation",
      description: (
        <p>
          The following example demonstrates how you can leverage the browser's
          validation. You only need to set <code>nativeValidation</code> to{" "}
          <code>true</code> and the rest of the syntax is the same as standard
          validation.
        </p>
      ),
    },
  },
  typeScript: {
    en: {
      title: "TypeScript",
      description: (
        <p>
          React Hook Form is built with <code>Typescript</code>, so you can
          define a <code>FormData</code> type to support form values.
        </p>
      ),
    },
    jp: {
      title: "TypeScript",
      description: (
        <p>
          React Hook Form is built with <code>Typescript</code>, so you can
          define a <code>FormData</code> type to support form values.
        </p>
      ),
    },
    zh: {
      title: "TypeScript",
      description: (
        <p>
          React Hook Form is built with <code>Typescript</code>, so you can
          define a <code>FormData</code> type to support form values.
        </p>
      ),
    },
  },
  formContext: {
    en: {
      title: "FormContext",
      introduction: (
        <p>
          Form context is intended to solve the problem when there are deep
          nested inputs in your components tree, and passing methods deep down
          as <code>prop</code> becomes painful.
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
            <Note>Note:</Note> invoking <code>useFormContext</code> will give
            you all of the <code>useForm</code> hook functions.
          </p>
        </>
      ),
    },
    jp: {
      title: "FormContext",
      introduction: (
        <p>
          Form context is intended to solve the problem when there are deep
          nested inputs in your components tree, and passing methods deep down
          as <code>prop</code> becomes painful.
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
            <Note>Note:</Note> invoking <code>useFormContext</code> will give
            you all of the <code>useForm</code> hook functions.
          </p>
        </>
      ),
    },
    zh: {
      title: "FormContext",
      introduction: (
        <p>
          Form context is intended to solve the problem when there are deep
          nested inputs in your components tree, and passing methods deep down
          as <code>prop</code> becomes painful.
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
            <Note>Note:</Note> invoking <code>useFormContext</code> will give
            you all of the <code>useForm</code> hook functions.
          </p>
        </>
      ),
    },
  },
}
