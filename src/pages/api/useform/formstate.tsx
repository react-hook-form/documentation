import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import FormState from "../../../components/useForm/FormState"

const Formstate = ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - FormState" />
      <FormState currentLanguage="en" />
    </Layout>
  )
}

export default Formstate
