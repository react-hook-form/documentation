import typographyStyles from "../styles/typography.module.css"
import containerStyles from "../styles/container.module.css"
import StarRepo from "./StarRepo"
import Footer from "./Footer"
import TSContent from "../content/ts.mdx"
import NewSideMenu from "./NewSideMenu"

const links = [
  {
    title: "Resolver",
    href: "#Resolver",
  },
  {
    title: "SubmitHandler",
    href: "#SubmitHandler",
  },
  {
    title: "Control",
    href: "#Control",
  },
  {
    title: "UseFormReturn",
    href: "#UseFormReturn",
  },
  {
    title: "UseFormProps",
    href: "#UseFormProps",
  },
  {
    title: "UseFieldArrayReturn",
    href: "#UseFieldArrayReturn",
  },
  {
    title: "UseFieldArrayProps",
    href: "#UseFieldArrayProps",
  },
  {
    title: "UseControllerReturn",
    href: "#UseControllerReturn",
  },
  {
    title: "UseControllerProps",
    href: "#UseControllerProps",
  },
  {
    title: "FieldError",
    href: "#FieldError",
  },
  {
    title: "FieldErrors",
    href: "#FieldErrors",
  },
  {
    title: "Field",
    href: "#Field",
  },
  {
    title: "FieldPath",
    href: "#FieldPath",
  },
  {
    title: "FieldValues",
    href: "#FieldValues",
  },
  {
    title: "FieldArrayWithId",
    href: "#FieldArrayWithId",
  },
  {
    title: "Mode",
    href: "#Mode",
  },
  {
    title: "RegisterOptions",
    href: "#RegisterOptions",
  },
  {
    title: "FormStateProxy",
    href: "#FormStateProxy",
  },
  {
    title: "NestedValue",
    href: "#NestedValue",
  },
]

const TsPage = () => {
  return (
    <div className={containerStyles.container}>
      <section>
        <h1 className={typographyStyles.headingWithTopMargin} id="main">
          Typescript Support
        </h1>
        <p className={typographyStyles.subHeading}>
          List of exported Typescript Types.
        </p>
      </section>

      <div className={containerStyles.wrapper}>
        <NewSideMenu links={links} />

        <main>
          <TSContent />

          <StarRepo />

          <Footer />
        </main>
      </div>
    </div>
  )
}

export default TsPage
