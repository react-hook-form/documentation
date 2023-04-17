import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import ResetField from "../../../components/useForm/resetField"

const Resetfield = ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - resetField" />
      <ResetField currentLanguage="en" />
    </Layout>
  )
}

export default Resetfield
