import * as React from "react"
import code from "../components/codeExamples/defaultExample"
import { Note, Title } from "../styles/typography"
import { Link } from "@reach/router"
import colors from "../styles/colors"

export default {
  header: {
    en: {
      title: "Get Started",
      subHeading: "Simple form validation with React Hook Form.",
    },
    jp: {},
    zh: {},
  },
  video: {
    en: {
      title: "Video Tutorial",
      subHeading: `In this video tutorial, i have demonstrated the basic usage and concept of using React Hook Form.`,
    },
    jp: {},
    zh: {},
  },
  install: {
    en: {
      title: "Installation",
      description: `Installing React Hook Form only takes a single command and you're ready to roll.`,
    },
    jp: {},
    zh: {},
  },
  example: {
    en: {
      title: "Example",
      description: `The following code will demonstrate the basics usage.`,
    },
    jp: {},
    zh: {},
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
            <Note>Note: </Note>React Native will need to use custom register eg:{" "}
            <code>{`regsiter({ name: 'test' }, { required: true })`}</code>
          </p>
        </>
      ),
    },
    jp: {},
    zh: {},
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
    jp: {},
    zh: {},
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
    jp: {},
    zh: {},
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
    jp: {},
    zh: {},
  },
  globalState: {
    en: {
      title: "Integrate global state",
      description: `React Hook Form doesn't require you to have a state management to store your data, but you can easily integrate with one.`,
    },
    jp: {},
    zh: {},
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
  },
}
