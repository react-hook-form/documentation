import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import ClearErrors from "../../../components/useForm/ClearErrors"

export default function ClearErrorsPage({ location }) {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - ClearErrors" />
      <ClearErrors currentLanguage="en" />
    </Layout>
  )
}
