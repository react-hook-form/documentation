import LearnMore from "../components/learnMore"
import Footer from "../components/Footer"
import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"
import NewSideMenu from "./NewSideMenu"
import GetStartedContent, { meta } from "../content/get-started.mdx"

const links = [
  {
    title: "Quick start",
    href: "#Quickstart",
  },
  {
    title: "React Web Video Tutorial",
    href: "#ReactWebVideoTutorial",
  },
  {
    title: "Register fields",
    href: "#Registerfields",
  },
  {
    title: "Apply validation",
    href: "#Applyvalidation",
  },
  {
    title: "Integrating an existing form",
    href: "#Integratinganexistingform",
  },
  {
    title: "Integrating with UI libraries",
    href: "#IntegratingwithUIlibraries",
  },
  {
    title: "Integrating Controlled Inputs",
    href: "#IntegratingControlledInputs",
  },
  {
    title: "Integrating with global state",
    href: "#Integratingwithglobalstate",
  },
  {
    title: "Handle errors",
    href: "#Handleerrors",
  },
  {
    title: "Schema Validation",
    href: "#SchemaValidation",
  },
  {
    title: "React Native",
    href: "#ReactNative",
  },
  {
    title: "TypeScript",
    href: "#TypeScript",
  },
  {
    title: "Design and philosophy",
    href: "#Designandphilosophy",
  },
]

const GetStartedPage = () => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        {meta.title}
      </h1>
      <p className={typographyStyles.subHeading}>{meta.description}</p>

      <div className={containerStyles.wrapper}>
        <NewSideMenu links={links} />

        <main>
          <GetStartedContent />

          <LearnMore />

          <Footer />
        </main>
      </div>
    </div>
  )
}

export default GetStartedPage
