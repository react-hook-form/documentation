import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import UnRegister from "../../../components/useForm/UnRegister"

const Unregister = ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - unregister" />
      <UnRegister currentLanguage="en" />
    </Layout>
  )
}

export default Unregister
