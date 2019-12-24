import * as React from "react"
import code from "../../components/codeExamples/defaultExample"
import { Note } from "../../styles/typography"
import { Link } from "@reach/router"
import translateLink from "../../components/logic/translateLink"
import CodeArea from "../../components/CodeArea"
import { uiLibraryHookInput } from "../../components/codeExamples/getStarted"

export default {
  title: "起步",
  header: {
    title: "起步",
    description: "React Hook Form 让表单验证变得简单.",
  },
  video: {
    title: "视频教程",
    description: `在本视频教程中，我演示了使用React Hook Form的基本用法和概念。（不好意思是英文的）`,
  },
  install: {
    linkTitle: "安装",
    title: "快速启动",
    description: `安装React Hook Form只需要一个命令，你就可以开始了。`,
  },
  example: {
    title: "例子",
    description: `以下代码将演示基本用法:`,
  },
  register: {
    title: "注册表格",
    description: (
      <>
        <p>
          React Hook Form的一个关键概念是将您不受控制的组件
          <strong>注册</strong>
          到Hook中，从而使其价值得到验证并收集来以供提交。
        </p>

        <p>
          <Note>注意：</Note>每个表格都需要有一个<strong>独特</strong>
          的名称作为注册过程的密钥
        </p>

        <p>
          <Note>注意：</Note>React Native 将需要使用手动注册 (例子如下:{" "}
          <code>{`register({ name: 'test' }, { required: true })`}</code>
          或使用
          <Link to="/api#Controller">Controller</Link>
          来包装您的组件。您还可以在
          <Link to="/api/#ReactNative">React Native</Link>部分阅读更多内容。
        </p>
      </>
    ),
  },
  applyValidation: {
    title: "应用验证",
    description: currentLanguage => (
      <>
        <p>
          React Hook Form 通过与现有的
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTML标准表单验证
          </a>
          进行对齐，使表单验证变得简单。
        </p>

        <p>支持的验证规则列表:</p>
        <ul>
          <li>required</li>
          <li>min</li>
          <li>max</li>
          <li>minLength</li>
          <li>maxLength</li>
          <li>pattern</li>
          <li>validate</li>
        </ul>
        <p>
          您可以在
          <Link to={translateLink("api#register", currentLanguage)}>
            注册部分(register)
          </Link>
          阅读每个规则的更多细节。
        </p>
      </>
    ),
  },
  adapting: {
    title: "调整您现有的表格",
    description: (
      <>
        处理您现有表单很简单。 重要的步骤是将表单组件的<code>ref</code>注册。
      </>
    ),
  },
  controlledInput: {
    title: "受控输入",
    description: (
      <p>
        React Hook
        Form支持和拥护不受控制的组件和HTML输入，但是很难避免使用外部受控组件，比如说
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
        ，因此我们建立了一个包装组件:{" "}
        <Link to="/api#Controller">Controller</Link>{" "}
        来简化集成过程，同时仍然可以自由地使用自定义register满足您的需求。
      </p>
    ),
  },
  workWithUI: {
    title: "使用UI库",
    description: currentLanguage => (
      <>
        <p>React Hook Form 让外部UI组件库集成变得简单。</p>
        <p>
          <Note>注意:</Note> 大多数UI库都会将内部的<code>innerRef</code>或者
          <code>Ref</code>
          公开给与注册
          <code>
            <Link to={translateLink("api#register", currentLanguage)}>
              register
            </Link>
          </code>
          。但是，对于像react-selector和
          react-datepicker这样更复杂的组件并且不提供<code>Ref</code>
          ，您可以通过<code>register</code>在<code>useEffect</code>
          中实现，再通过运用
          <code>
            <Link to={translateLink("api#setValue", currentLanguage)}>
              setValue
            </Link>
          </code>
          更新它的值。
        </p>
        <p>
          <Note>注意:</Note>
          我们还制作了一个包装器组件
          <Link to="/api#Controller">Controller</Link>
          ，以帮助您的自定义注册表格过程。
        </p>
      </>
    ),
  },
  globalState: {
    title: "整合表单状态",
    description: `React Hook Form不要求你有一个状态(state)管理来存储你的数据，但你可以很容易地与任何一个集成。`,
  },
  reactNative: {
    title: "React Native",
    description: (
      <p>
        您将从受控制的组件中获得相同的性能增强。 但是，有一些与React
        Native不兼容的Api（与web和native的API差异）。
        您将不得不使用手动注册，如下面的示例所示。
      </p>
    ),
  },
  typeScript: {
    title: "TypeScript",
    description: (
      <p>
        React Hook Form是使用<code>Typescript</code>
        构建的，因此您可以定义一个表单数据<code>FormData</code>
        类型来支持表单值。
      </p>
    ),
  },
  errors: {
    title: "处理错误",
    description: <>React Hook Form提供了一个错误对象，用于显示表单中的错误。</>,
  },
}
