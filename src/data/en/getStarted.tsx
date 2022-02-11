import * as React from "react"
import { Link } from "@reach/router"
import translateLink from "../../components/logic/translateLink"
import * as typographyStyles from "../../styles/typography.module.css"

export default {
  title: "Get Started",
  header: {
    title: "Get Started",
    description: "Simple form validation with React Hook Form.",
  },
  video: {
    title: "React Web Video Tutorial",
    description: `This video tutorial illustrates the basic usage and concepts of React Hook Form.`,
  },
  install: {
    linkTitle: "Installation",
    title: "Quick start",
    description: `Installing React Hook Form only takes a single command and you're ready to roll.`,
  },
  example: {
    title: "Example",
    description: `The following code excerpt demonstrates a basic usage example:`,
  },
  register: {
    title: "Register fields",
    description: (
      <>
        <p>
          One of the key concepts in React Hook Form is to{" "}
          <strong>
            <code>register</code>
          </strong>{" "}
          your component into the hook. This will make its value available for
          both the form validation and submission.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> Each field is{" "}
          <strong>required</strong> to have a <code>name</code> as a key for the
          registration process.
        </p>
      </>
    ),
  },
  applyValidation: {
    title: "Apply validation",
    description: (currentLanguage) => (
      <>
        <p>
          React Hook Form makes form validation easy by aligning with the
          existing{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTML standard for form validation
          </a>
          .
        </p>

        <p>List of validation rules supported:</p>

        <ul>
          <li>
            <p style={{ margin: "2px 0" }}>required</p>
          </li>
          <li>
            <p style={{ margin: "2px 0" }}>min</p>
          </li>
          <li>
            <p style={{ margin: "2px 0" }}>max</p>
          </li>
          <li>
            <p style={{ margin: "2px 0" }}>minLength</p>
          </li>
          <li>
            <p style={{ margin: "2px 0" }}>maxLength</p>
          </li>
          <li>
            <p style={{ margin: "2px 0" }}>pattern</p>
          </li>
          <li>
            <p style={{ margin: "2px 0" }}>validate</p>
          </li>
        </ul>
        <p>
          You can read more detail on each rule in the{" "}
          <Link to={translateLink("api#register", currentLanguage)}>
            register section
          </Link>
          .
        </p>
      </>
    ),
  },
  adapting: {
    title: "Integrating an existing form",
    description: (
      <p>
        Integrating an existing form should be simple. The important step is to{" "}
        <code>register</code> the component's <code>ref</code> and assign
        relevant props to your input.
      </p>
    ),
  },
  controlledInput: {
    title: "Integrating Controlled Inputs",
    description: (
      <>
        <p>
          This library embraces uncontrolled components and native HTML inputs,
          however, it's hard to avoid working with external controlled
          components such as{" "}
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
          . To make this simple, we provide a wrapper component:{" "}
          <Link to="/api#Controller">Controller</Link> to streamline the
          integration process while still giving you the freedom to use a custom
          register.
        </p>
      </>
    ),
  },
  workWithUI: {
    title: "Integrating with UI libraries",
    description: (
      <>
        <p>
          React Hook Form has made it easy to integrate with external UI
          component libraries. If the component doesn't expose input's{" "}
          <code>ref</code>, then you should use the{" "}
          <Link to="/api#Controller">Controller</Link> component, which will
          take care of the registration process.
        </p>
      </>
    ),
  },
  globalState: {
    title: "Integrating with global state",
    description: (
      <p>
        It doesn't require you to rely on a state management library, but you
        can easily integrate with them.
      </p>
    ),
  },
  reactNative: {
    title: "React Native",
    description: (
      <p>
        You will get the same performance boost and enhancement in React Native.
        To integrate with input component, You can use register your component
        or wrapped with <code>Controller</code>.
      </p>
    ),
  },
  typeScript: {
    title: "TypeScript",
    description: (
      <p>
        React Hook Form is built with <code>TypeScript</code>, and you can
        define a <code>FormData</code> type to support form values.
      </p>
    ),
  },
  schema: {
    title: "Schema Validation",
    description: (
      <>
        <p>
          We also support schema-based form validation with{" "}
          <a
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </a>
          ,{" "}
          <a
            href="https://github.com/vriad/zod"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zod
          </a>{" "}
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
          , where you can pass your <code>schema</code> to{" "}
          <a href="/api#useForm">useForm</a> as an optional config. It will
          validate your input data against the schema and return with either{" "}
          <a href="/api#errors">errors</a> or a valid result.
        </p>
      </>
    ),
    step1: (
      <>
        <p>
          <b className={typographyStyles.note}>Step 1:</b> Install{" "}
          <code>Yup</code> into your project.
        </p>
      </>
    ),
    step2: (
      <p>
        <b className={typographyStyles.note}>Step 2:</b> Prepare your schema for
        validation and register inputs with React Hook Form.
      </p>
    ),
  },
  errors: {
    title: "Handle errors",
    description: (
      <p>
        React Hook Form provides an <code>errors</code> object to show you the
        errors in the form. <code>errors</code>'s type will return given
        validation constraints. The following example showcases a required
        validation rule.
      </p>
    ),
  },
}
