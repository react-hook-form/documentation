import typographyStyles from "../styles/typography.module.css"

export default {
  title: "DevTools",
  description: "React Hook Form DevTools to help debug forms with validation.",
  install: "Installation",
  step1: (
    <>
      <b className={typographyStyles.note}>Step 1: </b>install{" "}
      <code>@hookform/devtools</code> as a dev dependency package.
    </>
  ),
  step2: (
    <>
      <b className={typographyStyles.note}>Step 2: </b>Integrate with your React
      App is as simple as import a Component into your App/Form render and pass{" "}
      <code>control</code> prop into it.
    </>
  ),
  demoDescription:
    "You can interact with the following demo to see DevTool in action.",
  function: "Functionality",
  functionDetail: (
    <>
      <li>
        <p>Read inputs and entire form state.</p>
      </li>
      <li>
        <p>
          <b className={typographyStyles.note}>Note: </b>Because RHF is based on
          uncontrolled inputs, <strong>Update</strong> button will refresh the
          DevTool to read the latest input value and form state.
        </p>
      </li>
      <li>
        <p>Visual feedback when input or form is valid or invalid.</p>
      </li>
      <li>
        <p>Search registered input and also custom registered components.</p>
      </li>
      <li>
        <p>
          <b className={typographyStyles.note}>Note: </b> you can easily locate
          an input by clicking the <strong>Native</strong> button. This will be
          useful when you are working on a large form.
        </p>
      </li>
    </>
  ),
  features: [
    {
      title: "React Base",
      description:
        "DevTool itself is built by React, so you easily integrate with your React application.",
    },
    {
      description:
        "React Hook Form focuses on delivering a great experience in terms of building forms with React. This tool will help debug your forms.",
    },
    {
      title: "Open-Source",
      description:
        "DevTools is an open-source project, so we can all improve the experience together.",
    },
  ],
}
