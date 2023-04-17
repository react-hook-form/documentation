import * as typographyStyles from "../styles/typography.module.css"

export default {
  title: {
    en: "Home",
  },
  description: {
    en: "React hook for form validation without the hassle",
  },
  slogan: {
    en: "Performant, flexible and extensible forms with easy-to-use validation.",
  },
  getStarted: {
    en: "Get Started",
  },
  demo: {
    en: "Demo",
  },
  findInteresting: {
    en: {
      heading: "Ready to get started?",
      description: (
        <p className={typographyStyles.homeParagraph}>
          Form handling doesn't have to be painful. React Hook Form will help
          you write less code while achieving better performance.
        </p>
      ),
    },
  },
  features: {
    en: [
      {
        title: "DX",
        description: `Intuitive, feature-complete API providing a seamless experience to developers when building forms.`,
      },
      {
        title: "HTML standard",
        description: `Leverage existing HTML markup and validate your forms with our constraint-based validation API.`,
      },
      {
        title: "Super Light",
        description: `Package size matters. React Hook Form is a tiny library without any dependencies.`,
      },
      {
        title: "Performance",
        description: `Minimizes the number of re-renders, minimizes validate computation, and faster mounting.`,
      },
      {
        title: "Adoptable",
        description: `Since form state is inherently local, it can be easily adopted without other dependencies.`,
      },
      {
        title: "UX",
        description: `Striving to provide the best user experience and bringing consistent validation strategies.
`,
      },
    ],
  },
  codeComparison: {
    en: {
      title: "Less code. More performant",
      description: (
        <p id="codeComparison" className={typographyStyles.homeParagraph}>
          React Hook Form reduces the amount of code you need to write while
          removing unnecessary re-renders. Now dive in and explore with the
          following example:
        </p>
      ),
    },
  },
  isolateRender: {
    en: {
      title: "Isolate Re-renders",
      description: (
        <>
          <p className={typographyStyles.homeParagraph}>
            You have the ability to isolate component re-renders which leads to
            better performance on your page or app. The following example
            demonstrates this:
          </p>
        </>
      ),
    },
  },
  watcher: {
    en: {
      title: "Subscriptions",
      description: (
        <p className={typographyStyles.homeParagraph}>
          Performance is an important aspect of user experience in terms of
          building forms. You will have the ability to subscribe to individual
          input and form State update without re-rendering the entire form.
        </p>
      ),
    },
  },
  mount: {
    en: {
      title: "Faster Mounting",
      description: (
        <p className={typographyStyles.homeParagraph}>
          The following screenshots demonstrate how much faster component
          mounting is with React Hook Form compared to others:
        </p>
      ),
      totalMount: "No. of mount(s)",
      totalChange: "No. of committing change(s)",
      totalTime: "Total time",
    },
  },
  liveDemo: {
    en: {
      description: (
        <>
          The following form demonstrates form validation in action. Each column
          represents what has been captured in the custom hook. You can also
          change fields in the form by clicking the <strong>EDIT</strong>{" "}
          button.
        </>
      ),
      submit: "Submit",
      watchTitle: "Watch",
      errorTitle: "Errors",
      touchedTitle: "Touched",
      watch: "Change inputs value to update watched values",
      error: "Validation errors will appear here",
      touched: "Touched fields will display here",
    },
  },
  validationResolver: {
    title: "resolver",
    description: (
      <>
        <p>
          This function allow you to run any external validation methods, such
          as{" "}
          <a
            href="https://github.com/hapijs/joi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joi
          </a>
          ,{" "}
          <a
            href="https://github.com/ianstormtaylor/superstruct"
            target="_blank"
            rel="noopener noreferrer"
          >
            Superstruct
          </a>{" "}
          and etc. In fact, the goal is not only limited Yup as our external
          (schema) validation library. We would like to support many other
          validation libraries to work with React Hook Form. You can even write
          your custom validation logic to validate.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> make sure you are
          returning object which contains <code>values</code> and{" "}
          <code>errors</code>, and their default value should be empty object{" "}
          <code>{`{}`}</code>.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> returning errors
          object's key should be relevant to your inputs.
        </p>
      </>
    ),
  },
}
