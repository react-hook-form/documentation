import * as React from "react"
import colors from "../../styles/colors"
import CodeArea, { CodeSandBoxLink } from "../../components/CodeArea"
import useFieldArrayArgument from "../../components/codeExamples/useFieldArrayArgument"
import generic from "../generic"
import typographyStyles from "../../styles/typography.module.css"
import tableStyles from "../../styles/table.module.css"
import buttonStyles from "../../styles/button.module.css"

export default {
  title: "API文档",
  header: {
    description: "专注于通过简化API提供最佳开发体验",
  },
  useForm: {
    title: "useForm",
    description: (
      <p>
        <code>useForm</code>也接受<strong>可选</strong>参数。
        下面的示例展示了所有选项的默认值。
      </p>
    ),
    validationResolver: (goToSection) => (
      <>
        <p>
          该回调函数使您可以运行任何模式或自定义校验。该函数的完整形式为
          <code>values</code>作为 参数，您将需要校验结果并返回两者
          <code>values</code>和<code>errors</code>。
        </p>

        <p>
          <b className={typographyStyles.note}>注意：</b>
          只要有错误对象不是空对象，反应钩子形式将考虑该形式视为无效。
        </p>

        <p>
          请在此阅读更多信息：
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("validationResolver")}
          >
            validationResolver
          </button>
          。
        </p>
      </>
    ),
    validateContext: (
      <>
        <p>
          该上下文对象将被注入<code>resolver</code>的第二个参数或
          <a
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            对
          </a>
          校验的上下文对象。
        </p>
      </>
    ),
    validateCriteriaMode: (
      <>
        <p>
          默认行为<code>firstError</code>将校验
          所有字段的校验，并收集所有遇到的第一个错误。
        </p>
        <p>
          设置为<code>all</code>时，所有字段的校验将是
          运行并收集遇到的所有错误。
        </p>
      </>
    ),
    validateOnSubmit: (
      <>
        校验将在<code>submit</code>事件
        上触发，无效的输入将附加onChange事件侦听器以重新校验。
      </>
    ),
    validateOnBlur: (
      <>
        校验将在<code>blur</code>事件上触发。
      </>
    ),
    validateOnChange: (
      <>
        校验将在每个输入组件的<code>change</code>
        事件上触发，会导致大量的重渲染。警告：这样通常会对性能造成影响。
      </>
    ),
    validationOnTouched: <>直到输入被触动，才会触发验证。</>,
    validationOnAll: (
      <>
        校验将在<code>blur</code>和<code>change</code>
        事件上触发。
      </>
    ),
    defaultValues: (goToSection) => (
      <>
        <ul>
          <li>
            <p>
              您可以使用<code>defaultValue/defaultChecked</code>
              设置输入组件的默认值
              <a
                className={buttonStyles.links}
                href="https://reactjs.org/docs/uncontrolled-components.html"
              >
                （从React文档中了解默认值的更多内容）
              </a>
              ，或者将<code>defaultValues</code>
              作为可选参数来填充整个表单的默认值。
            </p>
          </li>

          <li>
            <p>
              <b className={typographyStyles.note}>重要提示：</b>
              <code>defaultValues</code>将在首次渲染时缓存在自定义hook中，要重置
              <code>defaultValues</code>，请使用
              <button
                className={buttonStyles.codeAsLink}
                onClick={() => goToSection("reset")}
              >
                reset
              </button>
              api。
            </p>
          </li>

          <li>
            <p>
              <b className={typographyStyles.note}>注意:</b>
              <code>defaultValues</code>
              中定义的值将如<code>defaultValue</code>一样注入
              <button
                className={buttonStyles.codeAsLink}
                onClick={() => goToSection("watch")}
              >
                watch
              </button>
              。
            </p>
          </li>

          <li>
            <p>
              手动注册的输入组件不会自动填充（例如：
              <code>{`register({ name: 'test' })`}</code>
              ），因为React Hook Form没有自定义<code>register</code>表单项的
              <code>ref</code>。
            </p>
          </li>

          <li>
            <p>它并不是表单的默认状态, 要包含其他的表单值，可以这样做:</p>
            <ol>
              <li>
                <p>
                  注册隐藏的输入组件:{" "}
                  <code>{`<input type="hidden" ref={register} name="test" />`}</code>
                </p>
              </li>
              <li>
                <p>在提交回调里组合所有的值.</p>
              </li>
            </ol>
          </li>
        </ul>
      </>
    ),
    validationSchema: (goToSection) => (
      <p>
        将表单校验规则应用于架构级别的<code>Yup</code>，请参阅校验架构
        <button
          className={buttonStyles.codeAsLink}
          onClick={() => goToSection("validationSchema")}
        >
          validationSchema
        </button>
        部分。
      </p>
    ),
    reValidateMode: (
      <p>
        此选项允许您配置提交后有错误的输入组件重新校验的场景（默认情况下，在输入组件变化时触发校验）。
      </p>
    ),
    validationFields: (
      <p>
        提供字段数组意味着只包含字段将会被校验。
        此选项很有用需要校验当您要切换什么表格需要校验。
      </p>
    ),
    submitFocusError: (
      <>
        <p>
          默认情况下，当用户提交表单并包含错误时, 具有错误的第一个字段将被聚焦。
        </p>

        <p>
          <b className={typographyStyles.note}>注意:</b> 只有具有
          <code>ref</code>的注册字段将工作。 手动注册的输入将无法正常工作。
          比如: <code>{`register({ name: 'test' }) // 不会工作`}</code>{" "}
        </p>
      </>
    ),
    nativeValidation: (goToSection) => (
      <p>
        将此选项设置为<code>true</code>将启用浏览器的本机校验。{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
        >
          您可以了解有关内置浏览器校验的更多信息
        </a>
        ，并参考本机校验部分
        <button
          className={buttonStyles.codeAsLink}
          onClick={() => goToSection("nativeValidation")}
        >
          nativeValidation
        </button>
        了解更多详细信息和示例。
      </p>
    ),
  },
  unregister: {
    title: "unregister",
    description: (
      <>
        <p>
          此方法允许您<code>unregister</code>单个或一组输入组件。
        </p>
        <p>
          <b className={typographyStyles.note}>注意:</b>{" "}
          取消注册输入时，它的值将不再被包含在被提交的表单数据中。
        </p>
      </>
    ),
  },
  register: {
    title: "register",
    description: (
      <>
        <p>
          该方法允许您将输入组件/选择组件中的<code>Ref</code>
          和校验规则注册到 React Hook Form 中。
        </p>
        <p>校验规则都是基于HTML标准，也允许自定义校验。</p>
        <p>
          <b className={typographyStyles.note}>重要:</b> <code>name</code>是
          <strong>必需</strong>且<strong>唯一</strong>的（非数字起始）。
          输入组件名称还支持点和方括号语法，它允许您轻松创建嵌套的表单项。
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
        如果用在简单的表单项列表上，则可以将输入名称指定为
        <code>name[index]</code>。{" "}
        <a
          className={buttonStyles.links}
          href="https://github.com/react-hook-form/react-hook-form/blob/master/examples/FieldArray.tsx"
          title="example for Field Array"
        >
          查看Field Array数组示例
        </a>
        。 进阶用法可以查看 <code>useFieldArray</code>.
      </p>
    ),
    example: "提交结果",
    selectHelp: "通过选择该选项，下面的API表将得到更新。",
    options: {
      title: "注册选项",
      registerWithValidation: "含校验规则的注册",
      registerWithValidationMessage: "含校验规则和错误消息的注册",
      note: (goToSection) => (
        <>
          <h2 className={typographyStyles.title}>自定义注册</h2>
          <p>
            您还可以手动注册输入组件，这在使用自定义组件和无法访问
            <code>Ref</code>
            的情况下非常有用。在使用React Native或自定义组件（如
            <a
              href="https://github.com/JedWatson/react-select"
              target="_blank"
              rel="noopener noreferrer"
            >
              react-select
            </a>
            ）时很常见。为了使用简单，我们提供了
            <button
              className={buttonStyles.codeAsLink}
              onClick={() => goToSection("Controller")}
            >
              Controller
            </button>{" "}
            组件来为您处理这个过程。
          </p>

          <p>
            如果你决定不使用<code>Controller</code>来手动注册表单项,
            那么就需要使用{" "}
            <button
              className={buttonStyles.codeAsLink}
              onClick={() => goToSection("setValue")}
            >
              setValue
            </button>
            更新输入组件的值。
          </p>

          <p>
            <code
              className={typographyStyles.codeBlock}
            >{`register('firstName', { required: true, min: 8 })`}</code>
          </p>

          <p>
            <b className={typographyStyles.note}>注意：</b>{" "}
            如果你想要自定义组件在值更新时触发一次重渲染，那么你应该为注册的输入组件提供一个类型。
          </p>

          <p>
            <code
              className={typographyStyles.codeBlock}
            >{`register({ name: 'firstName', type: 'custom' }, { required: true, min: 8 })`}</code>
          </p>

          <p>
            <b className={typographyStyles.note}>注意：</b>{" "}
            如果多个单选框类型的输入组件都有一样的name，则需要在最后一个输入组件注册校验规则以使
            hook 知道要将它们一起校验。
          </p>
        </>
      ),
    },
    validation: {
      required: (
        <>
          布尔项，true表示输入必须有值，才能提交表单。 您可以在
          <code>errors</code>中赋值为字符串以返回错误消息。
        </>
      ),
      maxLength: "文本框能接受的最大字符数。",
      minLength: "文本框能输入的最小字符数。",
      max: "接受的最大值。",
      min: "接受的最小值。",
      pattern: "校验文本框内容的正则表达式。",
      validate: `您可以把回调函数作为参数传给validate，或者传入值为回调函数的对象来逐个校验。（参考例子)`,
    },
  },
  formState: {
    title: "formState",
    description: (
      <>
        <p>包含表单状态信息的对象。</p>

        <p>
          <b className={typographyStyles.note}>重要：</b>
          <code>formState</code>使用
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Proxy
          </a>
          包装以提高渲染性能，因此请使您在渲染前先调用/读取它，以使状态可以更新。
          减少重渲染的功能仅适用于Web平台，React Native因不支持
          <code>Proxy</code>而无法使用。
        </p>
      </>
    ),
    isSubmitSuccessful: <p>表示表格已成功提交。</p>,
    isDirty: (
      <>
        在用户与任何输入组件交互后设置为<code>true</code>。
        <p>
          <b className={typographyStyles.note}>注意：</b>
          由于取消文件选择功能以及{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/FileList"
            target="_blank"
            rel="noopener noreferrer"
          >
            FileList
          </a>{" "}
          对象，文件型输入组件需要在应用层管理。
        </p>
      </>
    ),
    dirtyFields: "用户更改过的表单项。",
    isSubmitted: (
      <>
        在用户提交表单后设置<code>true</code>
        。提交表单后，其状态将保持提交状态，直到使用reset方法调用为止。
      </>
    ),
    touched: "包含用户交互过的所有表单项的对象。",
    isSubmitting: (
      <>
        在表单提交将设置为<code>true</code>，提交后设置为<code>false</code>。
      </>
    ),
    submitCount: "提交表单次数。",
    isValid: (
      <>
        如果没有任何错误，设置为<code>true</code>。
      </>
    ),
  },
  errors: {
    title: "errors",
    description: () => (
      <>
        <p>包含每个输入组件表单错误和错误消息的对象。</p>
      </>
    ),
    types: (
      <>
        在需要某个输入组件所有的校验错误时使用。比如；一个必填的密码框
        同时限定了最小长度以及需要包含的特殊字符串 。
      </>
    ),
    message: `默认情况下消息是空字符串。 但是，如果注册时配置了错误信息，那么它将被返回。`,
    ref: `输入元素的引用。`,
    note: (goToSection) => (
      <>
        <p>
          <b className={typographyStyles.note}>注意：</b>{" "}
          避免使用对象键作为名称以致数据被覆盖。
          <br />
          eg:{" "}
          <code>
            register('user'); register('user.type');{" "}
            <span role="img" aria-label="Big Red X">
              ❌
            </span>
            {" // error's type will get overwritten."}
          </code>
        </p>
        <p>
          <b className={typographyStyles.note}>注意：</b> 您可以使用{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("ErrorMessage")}
          >
            ErrorMessage
          </button>{" "}
          组件展示错误状态。
        </p>
      </>
    ),
  },
  watch: {
    title: "watch",
    description: (
      <>
        <p>监听制定的表单项并返回他们的值，可用于监听决定重渲染的表单项。</p>

        <ul>
          <li>
            <p>
              未定义<code>defaultValue</code>时，<code>watch</code>
              首次渲染会返回
              <code>undefined</code>，因为它在<code>register</code>
              之前被调用，但是您可以将<code>defaultValue</code>
              设置为第二个参数。
            </p>
          </li>
          <li>
            <p>
              如果<code>defaultValues</code>在使用表单
              <code>useForm</code>作为参数初始化，则首次渲染将返回
              <code>defaultValues</code>中提供的内容。
            </p>
          </li>
          <li>
            <p>
              对于<code>useFieldArray</code>
              来说，当它包含的所有的表单项都被移除后，将会返回
              <code>defaultValues</code>，可以通过查看<code>fields.length</code>
              来确定这一点。
            </p>
          </li>
        </ul>
      </>
    ),
    tableTitle: {
      single: (
        <>
          通过名称监听输入组件（类似于lodash的
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://lodash.com/docs/4.17.15#get"
          >
            get
          </a>
          函数)
        </>
      ),
      multiple: "监听多个输入组件",
      all: "监听所有输入组件",
    },
  },
  handleSubmit: {
    title: "handleSubmit",
    description: (
      <>
        <p>当表单校验成功时，此函数将传递表单数据并可以远程调用。</p>
        <p>
          <code className={typographyStyles.codeBlock}>
            handleSubmit(onSubmit)()
          </code>
        </p>
        <p>
          <b className={typographyStyles.note}>注意:</b> 您可以传递
          <code>async</code>函数用于异步校验。例如：
        </p>
        <p>
          <code className={typographyStyles.codeBlock}>
            handleSubmit(async (data) =&gt; await fetchAPI(data))
          </code>
        </p>
      </>
    ),
  },
  reset: (goToSection) => ({
    title: "reset",
    description: (
      <>
        <p>
          此函数将重置表单中的字段值和错误。通过提供<code>omitResetState</code>
          ，您就可以 部分状态。可以将<code>values</code>
          作为可选参数传递，以将表单重置为默认值。
        </p>
        <p>
          <b className={typographyStyles.note}>注意:</b> 对于像
          <code>React-Select</code>这样没有暴露
          <code>ref</code>
          的受控组件，您必须通过
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("setValue")}
          >
            setValue
          </button>
          手动重置或使用
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("Controller")}
          >
            Controller
          </button>
          来包装您的受控组件。
        </p>
        <p>
          <b className={typographyStyles.note}>注意:</b> 您将需要在
          <code>useForm</code>传入<code>defaultValues</code>来重置
          <code>Controller</code>
          组件的值。
        </p>
      </>
    ),
  }),
  setError: {
    title: "setError",
    description: (
      <>
        <p>该函数允许您手动设置输入单个或多项错误。</p>
        <ul>
          <li>
            <p>如果输入组件的值通过校验，此方法将不会保留相关的输入错误。</p>
          </li>
          <li>
            <p>
              设置与输入组件字段无关的错误，并将在通过
              <code>clearError</code>手动删除之前一直保留。
            </p>
          </li>
          <li>
            <p>
              可用于<code>handleSubmit</code>
              函数调用后，向用户提供异步校验的错误反馈。(API返回了校验错误)
            </p>
          </li>
        </ul>
      </>
    ),
  },
  clearError: {
    title: "clearErrors",
    description: (
      <ul>
        <li>
          <p>
            <code>undefined</code>: 重置所有错误
          </p>
        </li>
        <li>
          <p>
            <code>string</code>: 重置单个表单项错误
          </p>
        </li>
        <li>
          <p>
            <code>string[]</code>: 重置指定所有表单项的错误
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
          该函数允许您动态设置注册过的表单项的值。
          同时，它也会尝试避免不必要的重渲染。与只有以下情况将触发重渲染:
        </p>
        <ul>
          <li>
            <p>值更新时未通过错误校验</p>
          </li>
          <li>
            <p>值更新时通过错误校验</p>
          </li>
          <li>
            <p>
              首次调用且<code>formState.isDirty</code>为true
            </p>
          </li>
        </ul>
        <p>
          可以将<code>shouldValidate</code>参数设置为<code>true</code>{" "}
          以强制触发表单项的校验。
        </p>

        <CodeArea
          rawData={`setValue('name', 'value', { shouldValidate: true })`}
          withOutCopy
        />

        <p>
          您也可以将<code>shouldDirty</code>参数设置为<code>true</code>
          ，以将表单项设置为dirty。
        </p>

        <CodeArea
          rawData={`setValue('name', 'value', { shouldDirty: true })`}
          withOutCopy
        />
      </>
    ),
  },
  getValues: {
    title: "getValues",
    description: (
      <>
        <p>
          优化过的读取表单值的方法。不会像<code>watch</code>
          一样触发重渲染及监听输入组件变化。
        </p>

        <ul>
          <li>
            <p>
              <code>getValues()</code>：读取整个表单值。
            </p>
          </li>
          <li>
            <p>
              <code>getValues('test')</code>：通过
              <strong>name</strong>读取单个输入组件值。
            </p>
          </li>
          <li>
            <p>
              <code>getValues(['test'，'test1'])</code>：通过
              <strong>name</strong>读取多个输入组件值。
            </p>
          </li>
        </ul>
      </>
    ),
  },
  trigger: {
    title: "trigger",
    description: (
      <>
        <p>手动触发表单校验。</p>
        <ul>
          <li>
            <p>
              <code>trigger()</code>: 触发所有表单项的校验。
            </p>
          </li>
          <li>
            <p>
              <code>trigger('test')</code>: 触发<strong>name</strong>
              对应的单个表单项校验。
            </p>
          </li>
          <li>
            <p>
              <code>trigger(['test', 'test1'])</code>: 触发<strong>name</strong>
              对应的多个表单项校验。
            </p>
          </li>
        </ul>
      </>
    ),
  },
  validationSchema: {
    title: "validationSchema",
    description: (
      <p>
        如果您希望使用外部校验模式，可以在
        <code>useForm</code>应用校验模式<code>validationSchema</code>
        作为可选参数。 React Hook Form当前支持
        <a
          className={buttonStyles.links}
          href="https://github.com/jquense/yup"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yup
        </a>
        进行对象模式校验。
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
            <code className={typographyStyles.typeText}>string</code>
          </td>
          <td>✓</td>
          <td>输入组件的唯一名称。</td>
        </tr>
        <tr>
          <td>
            <code>as</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>React.ElementType</code>
          </td>
          <td></td>
          <td>
            <p style={{ marginTop: 0 }}>
              <code>Controller</code>将<code>onChange</code>，
              <code>onBlur</code>和<code>value</code>属性注入组件。
            </p>

            <p>
              你传给<code>Controller</code>组件的所有属性都会传给<code>as</code>
              指向的组件。比如：你有一个自定义的<code>Switch</code> 组件，它需要
              <code>label</code> 属性, 你可以直接传给<code>Controller</code>
              ，它会帮你传递给包装的组件。
            </p>

            <p>
              <b className={typographyStyles.note}>注意：</b>{" "}
              以下属性将会传入你的组件<code>onChange</code>, <code>onBlur</code>
              , <code>value</code>.
            </p>
            <CodeArea
              withOutCopy
              url="https://codesandbox.io/s/react-hook-form-v6-controller-ts-4dpm9"
              rawData={`<Controller 
  as={<TextInput />} 
  control={control} 
  name="test" 
/>
<Controller 
  as={TextInput} 
  control={control} 
  name="test" 
/>`}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>render</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Function</code>
          </td>
          <td></td>
          <td>
            这是一个
            <a
              href="https://reactjs.org/docs/render-props.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              render prop
            </a>
            。返回React元素并将事件和值附加到组件中的函数：
            。这很容易与带有非标准属性名称的外部受控组件集成，为子组件提供
            <code>onChange</code>，<code>onBlur</code>和<code>value</code>属性。
            。
            <CodeArea
              withOutCopy
              url="https://codesandbox.io/s/react-hook-form-v6-controller-ts-4dpm9"
              rawData={`<Controller
                  control={control}
                  name='test'
                  render={({ onChange, onBlur, value }) => (
                    <Input
                      onTextChange={onChange}
                      onTextBlur={onBlur}
                      textValue={value}
                    />
                  )}
                />
                <Controller render={props => <Input {...props} />} />`}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>control</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Object</code>
          </td>
          <td>✓</td>
          <td>{generic.control.zh}</td>
        </tr>
        <tr>
          <td>
            <code>defaultValue</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>any</code>
          </td>
          <td></td>
          <td>
            与非受控组件的<code>defaultValue</code>相同，当传入
            <code>boolean</code>值时，它将被视为复选框输入。
            <p>
              <b className={typographyStyles.note}>注意:</b>{" "}
              需要在表单项层级使用
              <code>defaultValue</code>或在调用<code>useForm</code>时传入
              <code>defaultValues</code>
            </p>
            <p>
              <b className={typographyStyles.note}>注意</b>: 如果您的表单需要在
              <code>reset</code>时使用默认值，您将需要 在调用
              <code>useForm</code>时设置<code>defaultValues</code>
              而不是在单独的表单项上设置<code>defaultValue</code>。
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>rules</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Object</code>
          </td>
          <td></td>
          <td>
            与<code>register</code>格式一致的校验规则
            <CodeArea
              url="https://codesandbox.io/s/controller-rules-8pd7z?file=/src/App.tsx"
              withOutCopy
              rawData="rules={{ required: true }}"
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>onFocus</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>() =&gt; void</code>
          </td>
          <td></td>
          <td>
            <p>
              此回调允许自定义hook在有错误情况聚焦到对应的输入组件。无论React和React-Native
              只要组件可以聚焦，它都可以使用。
            </p>
            <CodeSandBoxLink
              style={{
                position: "relative",
                left: 0,
                float: "right",
                display: "flex",
              }}
              url="https://codesandbox.io/s/react-hook-form-controllerautofocus-v6-eeo66"
            />
          </td>
        </tr>
      </tbody>
    ),
    description: (
      <>
        <p>
          React Hook Form优先采用非受控组件和原生的输入组件，
          然而难以避免使用到第三方的受控组件，如
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
          和{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/"
          >
            Material-UI
          </a>
          。 这个包装组件将使您的工作更轻松。
        </p>
      </>
    ),
  },
  useFormContext: {
    title: "useFormContext",
    introduction: (
      <>
        <p>
          可以获取表单<code>context</code>的 hook函数{" "}
          <code>useFormContext</code>
          用于那些难以传递context作为属性的嵌套结构很深的场景。
        </p>
        <p>
          使用<code>useFormContext</code>需要用<code>FormContext</code>
          包装表单。
        </p>
      </>
    ),
    description: "",
  },
  control: {
    title: "control",
    description: (
      <p>
        为React Hook Form的Controller组件提供的对象，包含了 React Hook Form
        注册受控组件所需的方法。
      </p>
    ),
  },
  ErrorMessage: {
    title: "ErrorMessage",
    description: <p>展示输入组件错误信息的简易组件</p>,
    table: {
      name: <>表单项名称</>,
      errors: (
        <>
          React Hook Form中的<code>errors</code>
          对象。如果您使用的是FormContext，则为可选。
        </>
      ),
      message: <>内联错误信息。</>,
      as: (
        <>
          包装组件或HTML标签。 例如: <code>as="span"</code> or{" "}
          <code>{`as={<Text />}`}</code>
        </>
      ),
      render: (
        <>
          这是一个{" "}
          <a
            href="https://reactjs.org/docs/render-props.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            render prop
          </a>{" "}
          用于呈现单个或多个错误信息。
          <p>
            <b className={typographyStyles.note}>注意:</b>
            您需要设置将<code>validateCriteriaMode</code>设置为“all”以使用
            <code>message</code>.
          </p>
        </>
      ),
    },
  },
  shouldUnregister: (
    <p>
      默认情况下，当输入组件被删除时，React Hook Form使用
      <code>MutationObserver</code>来检测并<code>unregister</code>
      那些已卸载的输入组件。然而，您可以将<code>shouldUnregister</code>设置为
      <code>false</code>，以防止由于卸载而丢失输入状态。
    </p>
  ),
  useFieldArray: {
    title: "useFieldArray",
    description: (
      <>
        <p>
          处理非受控表单项列表（一组动态的输入组件）的自定义 hook。
          用于提高用户体验和性能。可以观看{" "}
          <a
            href="https://www.youtube.com/watch?v=Q7lrHuUfgIs"
            target="_blank"
            rel="noopener noreferrer"
          >
            这个短视频
          </a>{" "}
          以比较受控/非受控的表单项列表。
        </p>

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <thead>
              <tr>
                <th>{generic.name.zh}</th>
                <th width="140px">{generic.type.zh}</th>
                <th width="90px">{generic.required.zh}</th>
                <th>{generic.description.zh}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>name</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>string</code>
                </td>
                <td></td>
                <td>
                  <>
                    表单项名称。
                    <b className={typographyStyles.note}>重要：</b>{" "}
                    确保名称为对象键结构: <code>name={`test[index].name`}</code>{" "}
                    因为我们不支持扁平数组。
                  </>
                </td>
              </tr>
              <tr>
                <td>
                  <code>control</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>Object</code>
                </td>
                <td></td>
                <td>{generic.control.zh}</td>
              </tr>
              <tr>
                <td>
                  <code>keyName</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>
                    string = 'id'
                  </code>
                </td>
                <td></td>
                <td>
                  表单项列表<code>key</code>的值，默认为“ id”，您可以
                  更改key的名称。
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeArea rawData={useFieldArrayArgument} />

        <p>
          <b className={typographyStyles.note}>重要: </b>{" "}
          <code>useFieldArray</code>建立在非受控组件之上。
          以下说明将帮助您了解并牢记其实施过程中的行为。
        </p>

        <ul>
          <li>
            <p>
              可以通过在<code>userform</code>中的
              <code>defaultValues</code>来填充<code>表单项列表</code>。
            </p>
          </li>
          <li>
            <p>
              确保您将来自<code>fields</code>对象的
              <code>id</code>分配为组件键。
            </p>
          </li>
          <li>
            <p>
              确保通过<code>fields[index]</code>设置<code>defaultValue</code>。
            </p>
          </li>
          <li>
            <p>您不能在动作里调用其他的动作，而应该在每次渲染中触发动作。</p>
            <CodeArea
              withOutCopy
              rawData={`// ❌ The following is not correct
handleChange={() => {
  if (fields.length === 2) {
    remove(0);
  }
  append({ test: 'test' });
}}

// ✅ The following is correct and second action is triggered after next render
handleChange={() => {
  append({ test: 'test' });
}}

React.useEffect(() => {
  if (fields.length === 2) {
    remove(0);
  }
}, fields)
            `}
            />
          </li>
          <li>
            <p>
              与<code>useFieldArray</code>一起使用时，请使用
              <code>{`ref={register()}`}</code>而不是
              <code>{`ref={register}`}</code>，这一点很重要，使得
              <code>register</code>将在映射期间被调用。
            </p>
          </li>
          <li>
            它不适用于<code>useEffect</code>
            上的自定义注册或者是条件渲染。对于条件渲染的场景，尝试使用样式控制组件是否可见，以及控制校验函数。
          </li>
          <li>
            <p>
              在<code>watch</code>整个表单项列表时，需要在<code>fields</code>{" "}
              设置初始值以避免返回空值。例如：{" "}
              <code>watch('fieldArray', fields)</code>
            </p>
          </li>
          <li>
            <p>
              当所有的输入组件都从表单项列表移除时，
              <code>watch</code> 将返回 <code>defaultValues</code>。你可以使用
              <code>fields.length</code>来避免这个行为。例如；
              <code>fields.length ? watch('fieldArray', fields) : []</code>
            </p>
          </li>
        </ul>
      </>
    ),
    table: (
      <>
        <tr>
          <td>
            <code>fields</code>
          </td>
          <td width={320}>
            <code className={typographyStyles.typeText}>
              object & {`{ id: string }`}
            </code>
          </td>
          <td>
            此对象是映射和渲染输入组件的数据来源
            <p>
              <b className={typographyStyles.note}>重要: </b>
              由于每个输入可以是非受控的, 因此<code>id</code>
              对React确认组件是已更改、添加或删除来说是必须的。
            </p>
            <p>
              eg: <code>{`{fields.map(d => <input key={d.id} />)}`}</code>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>append</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (obj: object | object[], shouldFocus?: boolean = true) =&gt;
                void
              </code>
            </code>
          </td>
          <td>将单个/多个输入组件追加到表单项列表的末尾并聚焦。</td>
        </tr>
        <tr>
          <td>
            <code>prepend</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (obj: object | object[], shouldFocus?: boolean = true) =&gt;
                void
              </code>
            </code>
          </td>
          <td>将单个/多个输入组件插入到表单项列表的头部并聚焦。</td>
        </tr>
        <tr>
          <td>
            <code>insert</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (index: number, value: object, shouldFocus?: boolean = true)
                =&gt; void
              </code>
            </code>
          </td>
          <td>将单个/多个输入组件插入到表单项列表的特定位置并聚焦。</td>
        </tr>
        <tr>
          <td>
            <code>swap</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (from: number, to: number) =&gt; void
              </code>
            </code>
          </td>
          <td>交换单个/多个输入组件的位置</td>
        </tr>
        <tr>
          <td>
            <code>move</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (from: number, to: number) =&gt; void
              </code>
            </code>
          </td>
          <td>将单个/多个输入组件移动到另一位置。</td>
        </tr>
        <tr>
          <td>
            <code>remove</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (index?: number | number[]) =&gt; void
              </code>
            </code>
          </td>
          <td>
            在特定位置删除单个/多个输入组件，不传入索引时删除列表内全部表单项。
          </td>
        </tr>
      </>
    ),
  },
  resolver: {
    title: "resolver",
    description: (
      <>
        <p>
          该函数允许使用外部校验库，例如
          <a
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </a>
          ,{" "}
          <a
            href="https://github.com/hapijs/joi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joi
          </a>
          ，
          <a
            href="https://github.com/ianstormtaylor/superstruct"
            target="_blank"
            rel="noopener noreferrer"
          >
            Superstruct
          </a>
          以及其他的。我们的目标是确保用户可以无缝集成任何喜欢的校验库。如果你并没有使用一个库，那也可以一直编写自己的逻辑来校验表单。
        </p>

        <p>
          目前，
          <a
            href="https://github.com/react-hook-form/react-hook-form-resolvers"
            target="_blank"
            rel="noopener noreferrer"
          >
            官方支持
          </a>
          了Yup, Joi and Superstruct的解析器。
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

        <p>关于构建自定义解析器的说明：</p>

        <ul>
          <li>
            <p>
              确保返回的对象包含
              <code>values</code>和<code>errors</code>
              属性，并且它们的默认值应为
              <code>{`{}`}</code>。
            </p>
          </li>
          <li>
            <p>
              返回
              <code>error</code>对象的键应和表单项的<code>name</code>值匹配。
            </p>
          </li>
          <li>
            <p>
              该函数将被缓存在的自定义hook中，而
              <code>context</code>则是每次重渲染都会变更的可变对象。
            </p>
          </li>
          <li>
            <p>
              用户交互时，输入组件只会有一个表单项发生重新校验。库本身会计算错误对象，并且触发相应的重渲染。
            </p>
          </li>
        </ul>
      </>
    ),
  },
  useWatch: {
    title: "useWatch",
    description: (
      <p>
        与<code>watch</code> API功能相近，但是，
        会在您的组件级别区隔重渲染，并可能为您的应用程序提供更好的性能。
      </p>
    ),
  },
}
