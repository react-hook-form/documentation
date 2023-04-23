import Seo from "../../components/seo"
import Layout from "../../components/layout"
import UseForm from "../../components/UseForm"

export default function UseFormPage({ location }) {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm" />
      <UseForm currentLanguage="en" />
    </Layout>
  )
}
