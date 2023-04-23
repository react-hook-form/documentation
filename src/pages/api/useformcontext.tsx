import Seo from "../../components/seo"
import Layout from "../../components/layout"
import UseFormContext from "../../components/UseFormContext"

const Useformcontext = ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useFormContext" />
      <UseFormContext currentLanguage="en" />
    </Layout>
  )
}

export default Useformcontext
