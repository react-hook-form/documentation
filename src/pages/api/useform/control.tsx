import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import Control from "../../../components/useForm/Control"

export default function ControlPage({ location }) {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - control" />
      <Control currentLanguage="en" />
    </Layout>
  )
}
