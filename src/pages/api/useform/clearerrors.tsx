import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import ClearErrors from "../../../components/useForm/ClearErrors"

export default function ClearErrorsPage() {
  return (
    <Layout>
      <Seo title="useForm - ClearErrors" />
      <ClearErrors />
    </Layout>
  )
}
