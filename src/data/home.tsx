import typographyStyles from "../styles/typography.module.css"

export default {
  title: "React Hook Form - Performant React Form Library with Validation",
  description:
    "React Hook Form is a performant, lightweight React form library with easy validation. Zero dependencies, TypeScript support, and works with Zod, Yup and any UI library.",

  slogan:
    "A performant, flexible and extensible React form library with easy-to-use validation.",
  getStarted: "Get Started",
  demo: "Demo",
  findInteresting: {
    heading: "Ready to get started?",
    description:
      "Form handling doesn't have to be painful. React Hook Form will help you write less code while achieving better performance.",
  },
  features: [
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
      description: `Minimizes the number of re-renders, minimizes validation computation, and provides faster mounting.`,
    },
    {
      title: "Adoptable",
      description: `Since form state is inherently local, it can be easily adopted without other dependencies.`,
    },
    {
      title: "UX",
      description: `Strives to provide the best user experience and bring consistent validation strategies.
`,
    },
  ],
  isolateRender: {
    title: "Isolate Re-renders",
    description:
      "Isolate component re-renders for better performance on your page or app. Type in both forms to compare.",
  },
  watcher: {
    title: "Subscriptions",
    description:
      "Performance is an important aspect of user experience in terms of building forms. Subscribe to individual input and form state updates without re-rendering the entire form.",
  },
  mount: {
    title: "Faster Mounting",
    description:
      "Fewer components to mount means a faster first render. Here is how React Hook Form compares with others when mounting the same form.",
    totalMount: "mount",
    totalChange: "commit",
    totalTime: "total",
  },
  liveDemo: {
    description: (
      <>
        The following form demonstrates form validation in action. Each column
        represents what has been captured in the custom hook. You can also
        change fields in the form by clicking the <strong>EDIT</strong> button.
      </>
    ),
    submit: "Submit",
    watchTitle: "Watch",
    errorTitle: "Errors",
    touchedTitle: "Touched",
    watch: "Change input values to update watched values",
    error: "Validation errors will appear here",
    touched: "Touched fields will display here",
  },
  validationResolver: {
    title: "resolver",
    description: (
      <>
        <p>
          This function allows you to run any external validation methods, such
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
          and so on. In fact, the goal is not limited to Yup as our external
          (schema) validation library. We would like to support many other
          validation libraries to work with React Hook Form. You can even write
          your custom validation logic to validate.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> make sure you are
          returning an object which contains <code>values</code> and{" "}
          <code>errors</code>, and their default value should be an empty object{" "}
          <code>{`{}`}</code>.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> The keys of the
          returned errors object should match your inputs.
        </p>
      </>
    ),
  },
}
