import Seo from "../../components/seo"
import Layout from "../../components/layout"
import UseFieldArrayContent from "../../components/UseFieldArray"

export default function UseFieldArray({ location }) {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useFieldArray" />
      <UseFieldArrayContent currentLanguage="en" />
    </Layout>
  )
}
