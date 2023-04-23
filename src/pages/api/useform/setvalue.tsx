import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import SetValue from "../../../components/useForm/SetValue"

const Setvalue = ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - setValue" />
      <SetValue currentLanguage="en" />
    </Layout>
  )
}

export default Setvalue
