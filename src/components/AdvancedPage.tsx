import Footer from "./Footer"
import StarRepo from "./StarRepo"
import advanced from "../data/advanced"
import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"
import AdvancedContent from "../content/advanced.mdx"
import NewSideMenu from "./NewSideMenu"

const links = [
  {
    title: "Accessibility (A11y)",
    href: "#AccessibilityA11y",
  },
  {
    title: "Wizard Form / Funnel",
    href: "#WizardFormFunnel",
  },
  {
    title: "Smart Form Component",
    href: "#SmartFormComponent",
  },
  {
    title: "Error Messages",
    href: "#ErrorMessages",
  },
  {
    title: "Connect Form",
    href: "#ConnectForm",
  },
  {
    title: "FormProvider Performance",
    href: "#FormProviderPerformance",
  },
  {
    title: "Controlled mixed with Uncontrolled Components",
    href: "#ControlledmixedwithUncontrolledComponents",
  },
  {
    title: "Custom Hook with Resolver",
    href: "#CustomHookwithResolver",
  },
  {
    title: "Working with virtualized lists",
    href: "#Workingwithvirtualizedlists",
  },
  {
    title: "Testing Form",
    href: "#TestingForm",
  },
  {
    title: "Transform and Parse",
    href: "#TransformandParse",
  },
]

function Advanced() {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        {advanced.header.title}
      </h1>
      <p className={typographyStyles.subHeading}>
        {advanced.header.description}
      </p>

      <div className={containerStyles.wrapper}>
        <NewSideMenu links={links} />

        <main>
          <AdvancedContent />
          <StarRepo />

          <Footer />
        </main>
      </div>
    </div>
  )
}

export default Advanced
