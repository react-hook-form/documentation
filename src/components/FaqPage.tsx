import Footer from "../components/Footer"
import StarRepo from "../components/StarRepo"
import * as typographyStyles from "../styles/typography.module.css"
import * as containerStyles from "../styles/container.module.css"

import FAQContent from "../content/faq.mdx"
import NewSideMenu from "./NewSideMenu"

const links = [
  {
    title: "Performance of React Hook Form",
    href: "#PerformanceofReactHookForm",
  },
  {
    title: "How to create an accessible input error and message?",
    href: "#Howtocreateanaccessibleinputerrorandmessage",
  },
  {
    title: "Does it work with Class Components?",
    href: "#DoesitworkwithClassComponents",
  },
  {
    title: "How to reset the form?",
    href: "#Howtoresettheform",
  },
  {
    title: "How to initialize form values?",
    href: "#Howtoinitializeformvalues",
  },
  {
    title: "How to share ref usage?",
    href: "#Howtosharerefusage",
  },
  {
    title: "What if you don't have access to ref?",
    href: "#Whatifyoudonthaveaccesstoref",
  },
  {
    title: "Why is the first keystroke not working?",
    href: "#Whyisthefirstkeystrokenotworking",
  },
  {
    title: "React Hook Form, Formik or Redux Form?",
    href: "#ReactHookFormFormikorReduxForm",
  },
  {
    title: "watch vs getValues vs state",
    href: "#watchvsgetValuesvsstate",
  },
  {
    title: "Why is default value not changing correctly with ternary operator?",
    href: "#Whyisdefaultvaluenotchangingcorrectlywithternaryoperator",
  },
  {
    title: "How to work with modal or tab forms?",
    href: "#Howtoworkwithmodalortabforms",
  },
]

interface Props {
  faq: any
}

const Faq = ({ faq }: Props) => {
  return (
    <div className={containerStyles.container}>
      <h1 className={typographyStyles.headingWithTopMargin} id="main">
        {faq.header.title}
      </h1>
      <p className={typographyStyles.subHeading}>{faq.header.description}</p>

      <div className={containerStyles.wrapper}>
        <NewSideMenu links={links} />

        <main>
          <FAQContent />

          <StarRepo />

          <Footer />
        </main>
      </div>
    </div>
  )
}

export default Faq
