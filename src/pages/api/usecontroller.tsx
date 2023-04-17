import Seo from "../../components/seo"
import Layout from "../../components/layout"
import UseControllerContent from "../../components/UseController"

export default function Usecontroller({ location }) {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useController" />
      <UseControllerContent currentLanguage="en" />
    </Layout>
  )
}
