import * as React from "react"
import code from "../../components/codeExamples/defaultExample"
import { Link } from "@reach/router"
import translateLink from "../../components/logic/translateLink"
import typographyStyles from "../../styles/typography.module.css"
import CodeArea from "../../components/CodeArea"
import {
  uiLibraryHookInput,
  uiLibraryHookInputTs,
} from "../../components/codeExamples/getStarted"
import VideoList from "../../components/VideoList"

export default {
  title: "起步",
  header: {
    title: "起步",
    description: "React Hook Form 简化表单校验.",
  },
  video: {
    title: "视频教程",
    description: `在本视频教程中，我演示了使用React Hook Form的基本用法和概念。`,
  },
  install: {
    linkTitle: "安装",
    title: "快速入门",
    description: `仅需一个命令，即可尝试React Hook Form。`,
  },
  example: {
    title: "例子",
    description: `以下代码将演示基本用法:`,
  },
  register: {
    title: "注册表单项",
    description: (
      <>
        <p>
          React Hook Form的一个关键概念是将非受控组件
          <strong>注册</strong>
          到Hook中，从而在表单校验和提交时可以获取到它的值。
        </p>

        <p>
          <b className={typographyStyles.note}>注意：</b>每个表单项都需要
          <strong>唯一</strong>的<code>name</code>作为注册的键
        </p>

        <p>
          <b className={typographyStyles.note}>注意：</b>React Native
          将需要使用手动注册 (例子如下:{" "}
          <code>{`register({ name: 'test' }, { required: true })`}</code>
          或使用
          <Link to="/api#Controller">Controller</Link>
          来包装并注册你的组件。
        </p>
      </>
    ),
  },
  applyValidation: {
    title: "校验",
    description: (currentLanguage) => (
      <>
        <p>
          React Hook Form 结合了
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTML标准表单校验
          </a>
          ，使表单校验变得简单。
        </p>

        <p>支持的校验规则列表:</p>
        <ul>
          <li>
            <p>required</p>
          </li>
          <li>
            <p>min</p>
          </li>
          <li>
            <p>max</p>
          </li>
          <li>
            <p>minLength</p>
          </li>
          <li>
            <p>maxLength</p>
          </li>
          <li>
            <p>pattern</p>
          </li>
          <li>
            <p>validate</p>
          </li>
        </ul>
        <p>
          你可以在
          <Link to={translateLink("api#register", currentLanguage)}>
            注册表单项(register)
          </Link>
          阅读每个规则的更多细节。
        </p>
      </>
    ),
  },
  adapting: {
    title: "适配已有表单",
    description: (
      <>
        处理已有表单很简单。关键步骤是将<code>register</code>应用到已有组件的
        <code>ref</code>中。
      </>
    ),
  },
  controlledInput: {
    title: "受控输入",
    description: (currentLanguage) => (
      <>
        <p>
          React Hook
          Form优先采用非受控组件和HTML输入框，但是很难避免使用外部受控组件，比如
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
          ，因此我们提供了一个包装组件:{" "}
          <Link to="/api#Controller">Controller</Link>{" "}
          来简化集成过程，同时仍然可以自由地使用自定义register满足你的需求。
        </p>
        <p>
          了解更多{" "}
          <Link to={translateLink("api#Controller", currentLanguage)}>
            Controller
          </Link>{" "}
          组件的内容.
        </p>
      </>
    ),
  },
  workWithUI: {
    title: "使用UI库",
    description: (currentLanguage) => (
      <>
        <p>
          React Hook Form 与第三方UI组件库一起使用非常方便。你可以观看下方视频
        </p>
        <VideoList
          lists={[
            {
              url: "https://www.youtube.com/watch?v=PquWexbGcVc",
              title: "如何在 Material UI 中使用 React-Hook-Form",
            },
            {
              url: "https://www.youtube.com/watch?v=0nDGeQKLFjo",
              title: "React Hook Form - React 表单第二章",
            },
          ]}
          play
        />

        <p>
          <b className={typographyStyles.note}>使用方法 1:</b>{" "}
          最好的方式是检查你想要使用的组件是否暴露了 <code>ref</code> 可以用于{" "}
          <code>
            <Link to={translateLink("api#register", currentLanguage)}>
              register
            </Link>
          </code>
          。例如: Material-UI 的 <code>TextField</code> 的 props 就包含了{" "}
          <code>inputRef</code> 。 你可以直接将 <code>register</code> 传递给它。
        </p>
        <p>
          <code>{'<TextField inputRef={register} name="FirstName"/>'}</code>
        </p>
        <p>
          <b className={typographyStyles.note}>使用方法 2:</b> 有时组件没有暴露
          prop 用来注册, 例如 <code>react-select</code> 或者{" "}
          <code>react-datepicker</code>。
        </p>
        <p>
          第二种方法是使用{" "}
          <Link to={translateLink("/api#Controller", currentLanguage)}>
            Controller
          </Link>{" "}
          包裹组件，他会帮你处理注册过程。
        </p>
        <CodeArea
          rawData={uiLibraryHookInput}
          url="https://codesandbox.io/s/react-hook-form-with-ui-library-lg33x"
          tsRawData={uiLibraryHookInputTs}
          tsUrl="https://codesandbox.io/s/react-hook-form-with-ui-library-ts-dkjbf"
        />
        <p>
          <b className={typographyStyles.note}>使用方法 3:</b> 最后我们可以通过{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://reactjs.org/docs/hooks-effect.html"
          >
            useEffect
          </a>{" "}
          Hook 自定义注册并更新表单项的值。{" "}
          <code>
            <Link to={translateLink("api#setValue", currentLanguage)}>
              setValue
            </Link>
          </code>
        </p>
      </>
    ),
  },
  globalState: {
    title: "集成全局状态",
    description: `React Hook Form不需要类似 Redux 的状态管理工具来存储状态，但你可以很容易地与任何一个集成。`,
  },
  reactNative: {
    title: "React Native",
    description: (
      <p>
        你将从受控组件中获得相同的性能增强。 但是，有一些与React
        Native不兼容的Api（出于web和native的API差异）。 你将不得不使用
        <code>Controller</code> 或 <b>custom register</b>，如下面的示例所示。
      </p>
    ),
  },
  typeScript: {
    title: "TypeScript",
    description: (
      <p>
        React Hook Form是使用<code>TypeScript</code>
        构建的，因此你可以定义一个<code>FormData</code>类型 来表达表单值。
      </p>
    ),
  },
  errors: {
    title: "处理错误",
    description: (
      <>
        React Hook Form提供了一个<code>errors</code>对象显示表单中的错误。
      </>
    ),
  },
  schema: {
    title: "数据格式校验",
    description: (currentLanguage) => (
      <>
        <p>
          React Hook Form支持使用
          <a
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </a>
          ,{" "}
          <a
            href="https://github.com/ianstormtaylor/superstruct"
            target="_blank"
            rel="noopener noreferrer"
          >
            Superstruct
          </a>{" "}
          &{" "}
          <a
            href="https://github.com/hapijs/joi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joi
          </a>
          进行基于数据格式的表单校验，你可以将<code>schema</code>
          用作可选配置传给
          <Link to={translateLink("/api#useForm", currentLanguage)}>
            useForm
          </Link>
          。 React Hook Form将根据数据格式校验你的输入数据，并返回
          <Link to={translateLink("/api#errors", currentLanguage)}>错误</Link>
          或有效结果。
        </p>
      </>
    ),
    step1: (
      <>
        <p>
          <b className={typographyStyles.note}>步骤1:</b> 将<code>Yup</code>
          安装到你的项目中。
        </p>
      </>
    ),
    step2: (
      <p>
        <b className={typographyStyles.note}>步骤2:</b>{" "}
        准备你的数据格式以进行校验并注册到React Hook Form.
      </p>
    ),
  },
}
