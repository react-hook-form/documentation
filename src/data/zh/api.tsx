import code from "../../components/codeExamples/defaultExample"
import * as React from "react"
import Link from "../../styles/link"
import { CodeBlock, Note, Title, TypeText } from "../../styles/typography"
import { CodeAsLink, Table } from "../../components/ApiPage"
import colors from "../../styles/colors"
import translateLink from "../../components/logic/translateLink"
import Popup from "../../components/Popup"
import generic from "../generic"

export default {
  title: "API文档",
  header: {
    description: "React Hook Form专注于通过简化API提供最佳开发者体验",
  },
  useForm: {
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
    validateCriteriaMode: (
      <>
        <p>
          默认行为<code>firstErrorDetected</code>将验证
          所有字段的验证，并收集所有遇到的第一个错误。
        </p>
        <p>
          设置为<code> all </code>时，所有字段的验证将是
          运行并收集遇到的所有错误。
        </p>
      </>
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
          <CodeAsLink onClick={() => goToSection("watch")}>watch</CodeAsLink>。
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
        <CodeAsLink onClick={() => goToSection("ValidationSchema")}>
          validationSchema
        </CodeAsLink>
        部分。
      </p>
    ),
    reValidateMode: (
      <p>
        此选项允许您在有错误的输入重新验证时进行配置（默认情况下，在输入更改期间触发验证）。{" "}
        <Popup />
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
          默认情况下，当用户提交表单并包含错误时, 具有错误的第一个字段将被聚焦。
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
  unregister: {
    title: "unregister",
    description: (
      <>
        <p>此方法将允许您取消注册单个输入或输入的数组。</p>
        <p>
          <Note>注意:</Note>{" "}
          取消注册输入时，其值将不再被包含在被提交的表单数据中。当您手动在
          <code> useEffect </code>
          注册输入时会有用，同时当组件卸载时你也可以用它来取消注册。
        </p>
      </>
    ),
  },
  register: {
    title: "register",
    description: (
      <>
        <p>
          此方法允许您将输入/选择中的<code>Ref</code>和验证规则注册到React Hook
          Form。
        </p>
        <p>验证规则都是基于HTML标准，也允许自定义验证。</p>
        <p>
          <Note>重要:</Note> 名称<code>name</code>是<strong>必需</strong>的和
          <strong>唯一</strong>的。
          输入名称还支持点和括号语法，它允许您轻松创建表单。 示例表如下:
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
        如果您使用数组/数组字段，则可以将输入名称指定为
        <code>name[index]</code>。{" "}
        <Link
          href="https://github.com/react-hook-form/react-hook-form/blob/master/examples/FieldArray.tsx"
          title="example for Field Array"
        >
          查看Field Array数组示例
        </Link>
        .
      </p>
    ),
    example: "提交结果",
    selectHelp: "通过选择该选项，下面的API表将得到更新。",
    options: {
      title: "注册选项",
      registerWithValidation: "注册验证",
      registerWithValidationMessage: "注册验证和错误消息",
      note: goToSection => (
        <>
          <Title>手动注册输入</Title>
          <p>
            您还可以手动注册输入，这在使用自定义组件和无法访问<code>Ref</code>
            时情况下非常有用。 实际上，当您使用React Native或自定义组件（如
            <a
              href="https://github.com/JedWatson/react-select"
              target="_blank"
              rel="noopener noreferrer"
            >
              react-select
            </a>
            ）时， 你需要手动注册。
          </p>

          <p>
            通过使用自定义注册时，您将需要使用
            <CodeAsLink onClick={() => goToSection("setValue")}>
              setValue
            </CodeAsLink>
            来更新输入值，因为输入注册没有<code>ref</code>。
          </p>

          <p>
            <CodeBlock>{`register({ name: 'firstName' }, { required: true, min: 8 })`}</CodeBlock>
          </p>

          <p>
            <Note>注意:</Note>{" "}
            如果您希望自定义注册输入在其值更新过程中触发重新render，那么你应该给您注册的输入的类型加以
            <code>type</code>。
          </p>
        </>
      ),
    },
    validation: {
      required: (
        <>
          如果为true，则表示输入必须具有值，然后才能提交表单。
          您可以分配一个字符串以在错误对象中，来让<code>errors</code>
          返回错误消息。
        </>
      ),
      maxLength: "文本框能接受的最大字符数。",
      minLength: "文本框能输入的最小字符数，并且仍然被认为是有效的。",
      max: "为此输入接受的最大值。",
      min: "要接受此输入的最小值。",
      pattern: "验证文本框内容的正则表达式。",
      validate: `您可以callback调函数作为参数来验证，或者您可以callback调函数的对象来验证所有这些函数。（参考例子)`,
    },
  },
  formState: {
    title: "formState",
    description: "此对象包含有关表单状态的信息。",
    dirty: (
      <>
        在用户与任何输入互动后设置为<code>true</code>。
      </>
    ),
    isSubmitted: (
      <>
        在用户提交表单后设置<code>true</code>。
      </>
    ),
    touched: "已被接触过的所有输入的数组。",
    isSubmitting: (
      <>
        在表单提交将设置为<code>true</code>，提交后设置为<code>false</code>
      </>
    ),
    submitCount: "提交表格数量。",
    isValid: (
      <>
        如果没有任何错误，设置为<code>true</code>。
      </>
    ),
  },
  errors: {
    title: "errors",
    description: currentLanguage => (
      <>
        <p>对象包含属于每个输入的表单错误或错误消息。</p>

        <p>
          <Note>{generic.note[currentLanguage]}:</Note> V3和V4之间的区别：
        </p>

        <ul>
          <li>
            <p>V4: 嵌套对象</p>
            <p>
              <strong>原因:</strong> 随着optional chaining接越来越多
              在社区中流行并支持更好的type。
            </p>
            <p>
              <code>{`errors?.yourDetail?.firstName;`}</code>
            </p>
          </li>
          <li>
            <p>V3: 展平对象</p>
            <p>
              <strong>原因:</strong> 简单易访问的错误。
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
    message: `默认情况下消息是空字符串。 但是，如果您使用错误消息注册验证，那么它将被返回。`,
    ref: `输入元素的参考。`,
  },
  watch: {
    title: "watch",
    description: (
      <>
        <p>这将监视指定的输入并返回其值。</p>

        <ul>
          <li>
            <p>
              当未定义<code>defaultValue</code>时，watch的第一个render将返回
              <code>undefined</code>，因为它在<code>register</code>
              之前被调用，但是您可以将<code>defaultValue</code>
              设置为返回值（第二个参数）。
            </p>
          </li>
          <li>
            <p>
              但是，如果<code>defaultValues</code>在使用表单
              <code>useForm</code>作为参数初始化，则第一个render将返回
              <code>defaultValues</code>中提供的内容。
            </p>
          </li>
        </ul>
      </>
    ),
    tableTitle: {
      single: (
        <>
          按名称观看输入值（类似于lodash的
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://lodash.com/docs/4.17.15#get"
          >
            get
          </a>
          功能)
        </>
      ),
      multiple: "观看多个输入",
      all: "观看所有输入",
      nest: "观察所有输入并返回嵌套对象",
    },
  },
  handleSubmit: {
    title: "handleSubmit",
    description: (
      <>
        <p>当表单验证成功时，此函数将传递表单数据。</p>
        <p>
          <Note>注意:</Note> 您可以传递<code>async</code>验证。例如：
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
          此函数将重置表单中的字段值和错误。 您可以将值<code>values</code>
          作为可选参数传递，以将表单重置为已分配的默认值。
        </p>
        <p>
          <Note>注意:</Note> 对于像<code>React-Select</code>这样不公开
          <code>ref</code>
          的受控组件，您必须通过
          <CodeAsLink onClick={() => goToSection("setValue")}>
            setValue
          </CodeAsLink>
          手动重置输入值或使用
          <CodeAsLink onClick={() => goToSection("Controller")}>
            Controller
          </CodeAsLink>
          来包装您的受控组件。
        </p>
      </>
    ),
  }),
  setError: {
    title: "setError",
    description: <p>允许您手动设置输入单个和多项错误。</p>,
  },
  clearError: {
    title: "clearError",
    description: (
      <ul>
        <li>
          <p>
            <code>undefined</code>: 重置所有错误
          </p>
        </li>
        <li>
          <p>
            <code>string</code>: 重置单个错误
          </p>
        </li>
        <li>
          <p>
            <code>string[]</code>: 重置多个错误
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
          此功能允许您动态设置输入/选择值。
          在同时，尝试避免不必要的重新渲染，与此同时只有以下情况将触发重新渲染:
        </p>
        <ul>
          <li>
            <p>值更新时触发错误</p>
          </li>
          <li>
            <p>值更新时纠正错误</p>
          </li>
          <li>
            <p>
              首次调用并触发表单<code>dirty</code>
            </p>
          </li>
          <li>
            <p>
              更新表格状态<code>touched</code>
            </p>
          </li>
        </ul>
        <p>
          <Note>注意:</Note> 通过调用此方法，<code>formState</code>
          将将输入的名称<code>name</code>推入触摸<code>touched</code>。
        </p>
        <p>
          This function will return the entire form data. 您还可以将
          <code>shouldValidate</code>设置为<code>true</code>
          ，并将触发字段验证。例如：
          <br />
          <code>setValue('name', 'value', true)</code>
        </p>
      </>
    ),
  },
  getValues: {
    title: "getValues",
    description: (
      <>
        <p>此函数将返回整个表单数据。</p>

        <ul>
          <li>
            <p>
              默认情况下，<code>getValues()</code>
              将在平坦结构中返回表单数据。例如:{" "}
              <code>{`{ test: 'data', test1: 'data1'}`}</code>
            </p>
          </li>
          <li>
            <p>
              使用定义的表单，<code>getValues({`{ nest: true }`})</code>
              将根据输入名称返回嵌套结构中的数据。 例如:{" "}
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
        <p>手动触发表单中的输入/选择验证。</p>
        <p>
          <Note>注意:</Note> 当验证失败时，<code>errors</code>对象将被更新。
        </p>
      </>
    ),
  },
  validationSchema: {
    title: "ValidationSchema",
    description: (
      <p>
        如果您希望使用外部验证模式，可以在
        <code>useForm</code>应用验证模式<code>validationSchema</code>
        作为可选参数。 React Hook Form当前支持
        <Link
          href="https://github.com/jquense/yup"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yup
        </Link>
        进行对象模式验证。
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
            Controlled component. eg: <code>as="input"</code> or{" "}
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
          <td>✓</td>
          <td>
            <code>control</code> object is from invoking <code>useForm</code>.
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
            <p>
              <Note>Note:</Note> <code>min</code> and <code>max</code>{" "}
              validators are not going to work due to the input type, replace
              with validate function instead.
            </p>
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
            <code>eg: {`onChange={{(data) => data.value}}`}</code>
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
            <code>eg: {`onBlur={{(data) => data.value}}`}</code>
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
            This prop allow you to target that specific event name, eg: when{" "}
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
            This prop allow you to target that specific event name, eg: when{" "}
            <code>onBlur</code> event is named <code>onTextBlur</code>
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
      </>
    ),
  },
  formContext: {
    title: "FormContext",
    introduction: (
      <p>
        当组件存在深处时传递<code>props</code>变得痛苦，这个组件解决这个问题。
      </p>
    ),
    description: (
      <>
        <p>
          一旦你的表单被<code>FormContext</code>包装，
          <code>useFormContext</code>:函数可以在其子组件中调用。
        </p>
        <p>
          <Note>注意:</Note> 调用使用<code>useFormContext</code>将为您提供所有
          <code>useForm</code>函数。
        </p>
      </>
    ),
  },
  control: {
    title: "control",
    description: (
      <p>
        该对象是为React Hook Form的Controller组件制作的。包含React Hook
        Form的方法和同时将受控组件注册。
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
          <td>关联的表格名称。</td>
        </tr>
        <tr>
          <td>
            <code>errors</code>
          </td>
          <td>
            <TypeText>object</TypeText>
          </td>
          <td>✓</td>
          <td>
            React Hook表单中的<code> errors </code>对象
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
            包装器组件或HTML标签。 例如: <code>as="span"</code> or{" "}
            <code>{`as={<Text />}`}</code>
          </td>
        </tr>
      </tbody>
    ),
  },
  NativeValidation: {
    title: "Browser built-in validation",
    description: (
      <p>
        下面的示例演示了如何利用浏览器的验证。 您只需要将本机验证
        <code>nativeValidation</code>设置为<code>true</code>
        ，其余语法与标准验证相同。
      </p>
    ),
  },
}
