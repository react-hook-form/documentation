import { Link } from "gatsby"

export default {
  copy: "Copy",
  codeCopied: "Copied",
  required: "Required",
  learnMore: {
    title: "Want to learn more?",
    description:
      "Check out the React Hook Form documentation and learn all about the API.",
    buttonText: "Checkout API",
  },
  advanceUsage: {
    title: "Advanced Usage",
    description: `Learn how to build complex and accessible forms`,
    buttonText: `Learn Advanced Usage`,
  },
  needYourSupport: {
    title: "Thank you for your support",
    description: `If you find React Hook Form to be useful in your project, please consider to star and support it.`,
    buttonText: `Star us on GitHub`,
  },
  codeExample: "Code Examples",
  menu: "Menu",
  note: "Note",
  select: "Select",
  name: "Name",
  type: "Type",
  default: "Default",
  description: "Description",
  features: "Features",
  delete: "Delete",
  example: "Example",
  edit: "Edit",
  cancelEdit: "Cancel Edit",
  deleteAll: "Delete All",
  create: "Create",
  update: "Update",
  copied: "Copy code into your clipboard.",
  return: "Return",
  blog: "Articles/Blog",
  video: "Videos",
  newsletter: "Newsletter",
  binding: "3rd Party Bindings",
  liveDemo: "Live Demo",
  control: (
    <>
      <Link to="/api/useform/control">
        <code>control</code>
      </Link>{" "}
      object provided by <code>useForm</code>. It's optional if you are using
      FormContext.
    </>
  ),
}
