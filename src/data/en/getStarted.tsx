import * as React from "react"
import code from "../../components/codeExamples/defaultExample"
import { Link } from "@reach/router"
import translateLink from "../../components/logic/translateLink"
import CodeArea from "../../components/CodeArea"
import {
  uiLibraryHookInput,
  uiLibraryHookInputTs,
} from "../../components/codeExamples/getStarted"
import typographyStyles from "../../styles/typography.module.css"
import VideoList from "../../components/VideoList"

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
          your uncontrolled component into the hook. This will make its value
          available for both the form validation and submission.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> Each field is{" "}
          <strong>required</strong> to have a unique <code>name</code> as a key
          for the registration process.
        </p>

        <p>
          <b className={typographyStyles.note}>Note: </b>React Native will
          require you to either use a manual register command:{" "}
          <code>{`register({ name: 'test' }, { required: true })`}</code> or a{" "}
          <Link to="/api#Controller">Controller</Link> to wrap and register your
          component.
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
          <li>required</li>
          <li>min</li>
          <li>max</li>
          <li>minLength</li>
          <li>maxLength</li>
          <li>pattern</li>
          <li>validate</li>
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
      <>
        Integrating an existing form is simple. The important step is to apply{" "}
        <code>register</code> into the existing component's <code>ref</code>.
      </>
    ),
  },
  controlledInput: {
    title: "Integrating Controlled Inputs",
    description: (
      <>
        <p>
          React Hook Form embraces uncontrolled components and native HTML
          inputs, however, it's hard to avoid working with external controlled
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
          register as needed.
        </p>
        <p>
          Read more about the <Link to="/api#Controller">Controller</Link>{" "}
          component.
        </p>
      </>
    ),
  },
  workWithUI: {
    title: "Integrating with UI libraries",
    description: (currentLanguage) => (
      <>
        <p>
          React Hook Form has made it easy to integrate with external UI
          component libraries. You can check out the follow videos.
        </p>

        <VideoList
          lists={[
            {
              url: "https://www.youtube.com/watch?v=PquWexbGcVc",
              title: "How to Use React-Hook-Form With Material UI",
            },
            {
              url: "https://www.youtube.com/watch?v=0nDGeQKLFjo",
              title: "React Hook Form - React Forms Episode II",
            },
          ]}
          play
        />

        <p>
          <b className={typographyStyles.note}>Option 1:</b> The simplest way is
          to check if the component you wish to use exposes a <code>ref</code>{" "}
          that can be used to{" "}
          <code>
            <Link to={translateLink("api#register", currentLanguage)}>
              register
            </Link>
          </code>
          . For example: Material-UI and Reactstrap's <code>TextField</code>{" "}
          accepts <code>inputRef</code> as one of its props. You can simply pass{" "}
          <code>register</code> to it.
        </p>
        <CodeArea
          rawData={'<TextField inputRef={register} name="FirstName"/>'}
        />
        <p>
          <b className={typographyStyles.note}>Option 2:</b> Sometimes
          components don't expose a prop to register, for example{" "}
          <code>react-select</code> or <code>react-datepicker</code>.
        </p>
        <p>
          In this case, you should use the{" "}
          <Link to="/api#Controller">Controller</Link> wrapper component, which
          will take care of the registration process for you.
        </p>
        <CodeArea
          rawData={uiLibraryHookInput}
          url="https://codesandbox.io/s/react-hook-form-with-ui-library-lg33x"
          tsRawData={uiLibraryHookInputTs}
          tsUrl="https://codesandbox.io/s/react-hook-form-with-ui-library-ts-dkjbf"
        />
        <p>
          <b className={typographyStyles.note}>Option 3:</b> As a last resort,
          we can set up a custom register using the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://reactjs.org/docs/hooks-effect.html"
          >
            useEffect
          </a>{" "}
          Hook and update the value via{" "}
          <code>
            <Link to={translateLink("api#setValue", currentLanguage)}>
              setValue
            </Link>
          </code>
          .
        </p>
      </>
    ),
  },
  globalState: {
    title: "Integrating with global state",
    description: (
      <p>
        React Hook Form doesn't require you to rely on a state management
        library such as Redux to store your data, but you can easily integrate
        with it:
      </p>
    ),
  },
  reactNative: {
    title: "React Native",
    description: (
      <p>
        You will get the same performance enhancement from an Uncontrolled
        Component. However, there are certain APIs which are not compatible with
        React Native (due to the API differences between web and native). You
        will have to use <code>Controller</code> or <b>custom register</b> as
        shown in the following example.
      </p>
    ),
  },
  typeScript: {
    title: "TypeScript",
    description: (
      <p>
        React Hook Form is built with <code>Typescript</code>, so you can define
        a <code>FormData</code> type to support form values.
      </p>
    ),
  },
  schema: {
    title: "Schema Validation",
    description: (
      <>
        <p>
          React Hook Form supports schema-based form validation with{" "}
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
          , where you can pass your <code>schema</code> to{" "}
          <a href="/api#useForm">useForm</a> as an optional config. React Hook
          Form will validate your input data against the schema and return with
          either <a href="/api#errors">errors</a> or a valid result.
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
        errors in the form.
      </p>
    ),
  },
}
