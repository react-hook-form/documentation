export default {
  title: "DevTools",
  description: "React Hook Form DevTools to help debug forms with validation.",
  install: "npm install -D @hookform/devtools",
  features: [
    {
      title: "Built with React",
      description:
        "DevTool itself is a React component, so it drops straight into your app.",
    },
    {
      title: "Debug with ease",
      description:
        "Inspect every registered field and the whole form state while you build.",
    },
    {
      title: "Open source",
      description:
        "DevTools is an open-source project, so we can all improve the experience together.",
    },
  ],
  steps: [
    {
      title: "Install the package",
      description: "Add @hookform/devtools as a dev dependency.",
    },
    {
      title: "Render it next to your form",
      description:
        "Import the DevTool component and pass it the control from useForm.",
    },
  ],
  demoDescription:
    "Turn on the panel, then interact with the form to watch the state update.",
  functionality: [
    "Read inputs and the entire form state.",
    "Visual feedback when an input or the form is valid or invalid.",
    "Search registered inputs, including custom registered components.",
    "Because React Hook Form uses uncontrolled inputs, press Refresh in the panel to read the latest values and form state.",
    "Click Native next to a field to locate its input, which helps on large forms.",
  ],
}
