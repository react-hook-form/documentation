import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import SetError from "../../../components/useForm/SetError"

const Seterror = ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - setError" />
      <SetError currentLanguage="en" />
    </Layout>
  )
}

export default Seterror
