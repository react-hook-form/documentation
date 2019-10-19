import * as React from "react"
import code from "../components/codeExamples/defaultExample"
import { Note } from "../styles/typography"
import { Link } from "@reach/router"
import colors from "../styles/colors"

export default {
  title: {
    en: "Get Started",
    jp: "始める",
    zh: "起步",
  },
  header: {
    en: {
      title: "Get Started",
      description: "Simple form validation with React Hook Form.",
    },
    jp: {
      title: "始める",
      description: "Simple form validation with React Hook Form.",
    },
    zh: {
      title: "起步",
      description: "Simple form validation with React Hook Form.",
    },
  },
  video: {
    en: {
      title: "Video Tutorial",
      description: `In this video tutorial, I have demonstrated the basic usage and concept of using React Hook Form.`,
    },
    jp: {
      title: "ビデオチュートリアル",
      description: `In this video tutorial, I have demonstrated the basic usage and concept of using React Hook Form.`,
    },
    zh: {
      title: "视频教程",
      description: `在本视频教程中，我已经演示了使用React Hook Form的基本用法和概念。`,
    },
  },
  install: {
    en: {
      linkTitle: "Quick start",
      title: "Installation",
      description: `Installing React Hook Form only takes a single command and you're ready to roll.`,
    },
    jp: {
      linkTitle: "クイックスタート",
      title: "Installation",
      description: `Installing React Hook Form only takes a single command and you're ready to roll.`,
    },
    zh: {
      linkTitle: "快速启动",
      title: "安装",
      description: `安装React Hook Form只需要一个命令，你就可以开始了。`,
    },
  },
  example: {
    en: {
      title: "Example",
      description: `The following code will demonstrate the basic usage:`,
    },
    jp: {
      title: "例",
      description: `The following code will demonstrate the basic usage:`,
    },
    zh: {
      title: "例子",
      description: `以下代码将演示基本用法:`,
    },
  },
  register: {
    en: {
      title: "Register fields",
      description: (
        <>
          <p>
            One of the key concepts for React Hook Form is to{" "}
            <strong>
              <code>register</code>
            </strong>{" "}
            your uncontrolled component into the Hook and hence enabling its
            value to be validated and gathered for submitting.
          </p>

          <p>
            <Note>Note:</Note> Each field is <strong>required</strong> to have a
            unique <code>name</code> as a key for the registration process.
          </p>

          <p>
            <Note>Note: </Note>React Native will need to use a manual register
            command (e.g.:{" "}
            <code>{`register({ name: 'test' }, { required: true })`}</code>
          </p>
        </>
      ),
    },
    jp: {
      title: "Register fields",
      description: (
        <>
          <p>
            One of the key concepts for React Hook Form is to{" "}
            <strong>
              <code>register</code>
            </strong>{" "}
            your uncontrolled component into the Hook and hence enabling its
            value to be validated and gathered for submitting.
          </p>

          <p>
            <Note>Note:</Note> Each field is <strong>required</strong> to have a
            unique <code>name</code> as a key for the registration process.
          </p>

          <p>
            <Note>Note: </Note>React Native will need to use a manual register
            command (e.g.:{" "}
            <code>{`register({ name: 'test' }, { required: true })`}</code>
          </p>
        </>
      ),
    },
    zh: {
      title: "Register fields",
      description: (
        <>
          <p>
            React Hook Form的一个关键概念是将您不受控制的组件
            <strong>注册</strong>到Hook中，从而使其价值得到验证并收集以供提交。
          </p>

          <p>
            <Note>注意：</Note>Each field is <strong>required</strong> to have a
            unique <code>name</code> as a key for the registration process.
          </p>

          <p>
            <Note>注意：</Note>React Native will need to use a manual register
            command (e.g.:{" "}
            <code>{`register({ name: 'test' }, { required: true })`}</code>
          </p>
        </>
      ),
    },
  },
  applyValidation: {
    en: {
      title: "Apply validation",
      description: (
        <>
          <p>
            React Hook Form make form validation easy by aligning with existing{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTML standard form validation
            </a>
            .
          </p>

          <p>List of validation rules supported by:</p>
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
            You can read more detail on each rule at the{" "}
            <Link to="api#register">register section</Link>.
          </p>
        </>
      ),
    },
    jp: {
      title: "検証を適用する",
      description: (
        <>
          <p>
            React Hook Form make form validation easy by aligning with existing{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTML standard form validation
            </a>
            .
          </p>

          <p>List of validation rules supported by:</p>
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
            You can read more detail on each rule at the{" "}
            <Link to="api#register">register section</Link>.
          </p>
        </>
      ),
    },
    zh: {
      title: "Apply validation",
      description: (
        <>
          <p>
            React Hook Form make form validation easy by aligning with existing{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTML standard form validation
            </a>
            .
          </p>

          <p>List of validation rules supported by:</p>
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
            You can read more detail on each rule at the{" "}
            <Link to="api#register">register section</Link>.
          </p>
        </>
      ),
    },
  },
  adapting: {
    en: {
      title: "Adapting existing form",
      description: (
        <>
          Working on an existing form is simple. The important step is to apply{" "}
          <code>register</code> into existing component's <code>ref</code>.
        </>
      ),
    },
    jp: {
      title: "Adapting existing form",
      description: (
        <>
          Working on an existing form is simple. The important step is to apply{" "}
          <code>register</code> into existing component's <code>ref</code>.
        </>
      ),
    },
    zh: {
      title: "Adapting existing form",
      description: (
        <>
          Working on an existing form is simple. The important step is to apply{" "}
          <code>register</code> into existing component's <code>ref</code>.
        </>
      ),
    },
  },
  workWithUI: {
    en: {
      title: "Work with UI library",
      description: (
        <>
          <p>
            React Hook Form has made it easy to integrate with external UI
            component libraries.
          </p>
          <p>
            <span style={{ color: colors.lightPink }}>Note:</span> Most UI
            libraries do expose <code>innerRef</code> or <code>ref</code> to{" "}
            <code>register</code>. For components that are more complicated like{" "}
            <code>react-select</code> or <code>react-datepicker</code>, you can
            manually update the value via <code>setValue</code> or trigger an
            error with <code>setError</code>.
          </p>
        </>
      ),
    },
    jp: {
      title: "Work with UI library",
      description: (
        <>
          <p>
            React Hook Form has made it easy to integrate with external UI
            component libraries.
          </p>
          <p>
            <span style={{ color: colors.lightPink }}>Note:</span> Most UI
            libraries do expose <code>innerRef</code> or <code>ref</code> to{" "}
            <code>register</code>. For components that are more complicated like{" "}
            <code>react-select</code> or <code>react-datepicker</code>, you can
            manually update the value via <code>setValue</code> or trigger an
            error with <code>setError</code>.
          </p>
        </>
      ),
    },
    zh: {
      title: "Work with UI library",
      description: (
        <>
          <p>
            React Hook Form has made it easy to integrate with external UI
            component libraries.
          </p>
          <p>
            <span style={{ color: colors.lightPink }}>Note:</span> Most UI
            libraries do expose <code>innerRef</code> or <code>ref</code> to{" "}
            <code>register</code>. For components that are more complicated like{" "}
            <code>react-select</code> or <code>react-datepicker</code>, you can
            manually update the value via <code>setValue</code> or trigger an
            error with <code>setError</code>.
          </p>
        </>
      ),
    },
  },
  globalState: {
    en: {
      title: "Integrate global state",
      description: `React Hook Form doesn't require you to have a state management to store your data, but you can easily integrate with one.`,
    },
    jp: {
      title: "Integrate global state",
      description: `React Hook Form doesn't require you to have a state management to store your data, but you can easily integrate with one.`,
    },
    zh: {
      title: "Integrate global state",
      description: `React Hook Form doesn't require you to have a state management to store your data, but you can easily integrate with one.`,
    },
  },
  errors: {
    en: {
      title: "Handle errors",
      description: (
        <>
          React Hook Form provides an <code>errors</code> object to show you the
          errors within the form.
        </>
      ),
    },
    jp: {
      title: "エラーを処理する",
      description: (
        <>
          React Hook Form provides an <code>errors</code> object to show you the
          errors within the form.
        </>
      ),
    },
    zh: {
      title: "Handle errors",
      description: (
        <>
          React Hook Form provides an <code>errors</code> object to show you the
          errors within the form.
        </>
      ),
    },
  },
}
