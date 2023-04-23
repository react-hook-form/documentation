import Seo from "../../components/seo"
import Layout from "../../components/layout"
import UseFormState from "../../components/UseFormState"

const Useformstate = ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useFormState" />
      <UseFormState currentLanguage="en" />
    </Layout>
  )
}

export default Useformstate
