import * as React from "react"
import code from "../../components/codeExamples/defaultExample"
import { Link } from "@reach/router"
import translateLink from "../../components/logic/translateLink"
import CodeArea from "../../components/CodeArea"
import { uiLibraryHookInput } from "../../components/codeExamples/getStarted"
import typographyStyles from "../../styles/typography.module.css"

export default {
  title: "Get Started",
  header: {
    title: "Get Started",
    description: "Simple form validation with React Hook Form.",
  },
  video: {
    title: "Video Tutorial",
    description: `In this video tutorial, I have demonstrated the basic usage and concept of using React Hook Form.`,
  },
  install: {
    linkTitle: "Installation",
    title: "Quick start",
    description: `Installing React Hook Form only takes a single command and you're ready to roll.`,
  },
  example: {
    title: "Example",
    description: `The following code will demonstrate the basic usage:`,
  },
  register: {
    title: "Register fields",
    description: (
      <>
        <p>
          One of the key concepts for React Hook Form is to{" "}
          <strong>
            <code>register</code>
          </strong>{" "}
          your uncontrolled component into the Hook and hence enabling its value
          to be validated and gathered for submitting.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> Each field is{" "}
          <strong>required</strong> to have a unique <code>name</code> as a key
          for the registration process.
        </p>

        <p>
          <b className={typographyStyles.note}>Note: </b>React Native will need
          to use a manual register command:{" "}
          <code>{`register({ name: 'test' }, { required: true })`}</code> or
          using <Link to="/api#Controller">Controller</Link> to wrap and auto
          register your component. You can also read more at{" "}
          <Link to="/api/#ReactNative">React Native</Link> section.
        </p>
      </>
    ),
  },
  applyValidation: {
    title: "Apply validation",
    description: currentLanguage => (
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
          <Link to={translateLink("api#register", currentLanguage)}>
            register section
          </Link>
          .
        </p>
      </>
    ),
  },
  adapting: {
    title: "Adapting existing form",
    description: (
      <>
        Working on an existing form is simple. The important step is to apply{" "}
        <code>register</code> into existing component's <code>ref</code>.
      </>
    ),
  },
  controlledInput: {
    title: "Controlled Input",
    description: (
      <>
        <p>
          React Hook Form embrace uncontrolled components and native HTML
          inputs, however it's hard to avoid working with external controlled
          component such as{" "}
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
          , hence we have built a wrapper component:{" "}
          <Link to="/api#Controller">Controller</Link> to streamline the
          integration process while still giving you the freedom to use custom
          register with your needs.
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
  workWithUI: {
    title: "Work with UI library",
    description: currentLanguage => (
      <>
        <p>
          React Hook Form has made it easy to integrate with external UI
          component libraries.
        </p>
        <p>
          <b className={typographyStyles.note}>Option 1:</b> The best way is to
          check if the component you wish to use exposes an{" "}
          <code>innerRef</code> or <code>ref</code> that can be used to{" "}
          <code>
            <Link to={translateLink("api#register", currentLanguage)}>
              register
            </Link>
          </code>
          . For example: Material-UI's <code>TextField</code> accepts{" "}
          <code>inputRef</code> as one of it's props. Simply pass{" "}
          <code>register</code> to it.
        </p>
        <p>
          <code>
            {
              '<TextField inputRef={register} label="First name" name="FirstName"/>'
            }
          </code>
        </p>
        <p>
          <b className={typographyStyles.note}>Option 2:</b> Sometimes
          components don't expose a prop to register, for example{" "}
          <code>react-select</code> or <code>react-datepicker</code>.
        </p>
        <p>
          The next easiest way is to use the{" "}
          <Link to="/api#Controller">Controller</Link> wrapper component, which
          will take care of the custom register process for you.
        </p>
        <CodeArea rawData={uiLibraryHookInput} />
        <p>
          <b className={typographyStyles.note}>Option 3:</b> Lastly we can set
          up a custom register using the{" "}
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
    title: "Integrate global state",
    description: `React Hook Form doesn't require you to have a state management to store your data, but you can easily integrate with one.`,
  },
  reactNative: {
    title: "React Native",
    description: (
      <p>
        You will get the same performance enhancement from an Uncontrolled
        Component. However, there are certain APIs which are not compatible with
        React Native (duo to the API difference from web and native). You will
        have to use a <b>manual register</b> as shown in the following example.
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
  errors: {
    title: "Handle errors",
    description: (
      <>
        React Hook Form provides an <code>errors</code> object to show you the
        errors within the form.
      </>
    ),
  },
}
