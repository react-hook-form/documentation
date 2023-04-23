import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import Reset from "../../../components/useForm/Reset"

const ResetComponent = ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - reset" />
      <Reset currentLanguage="en" />
    </Layout>
  )
}

export default ResetComponent
