import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import Controller from "../../../components/useController/Controller"

export default function ControllerPage({ location }) {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="Controller" />
      <Controller currentLanguage="en" />
    </Layout>
  )
}
