import * as React from "react"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import UseForm from "../../components/UseForm"

export default ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm" />
      <UseForm currentLanguage="en" />
    </Layout>
  )
}
