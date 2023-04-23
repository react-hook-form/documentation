import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import HandleSubmit from "../../../components/useForm/HandleSubmit"

const Handlesubmit = ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - handleSubmit" />
      <HandleSubmit currentLanguage="en" />
    </Layout>
  )
}

export default Handlesubmit
