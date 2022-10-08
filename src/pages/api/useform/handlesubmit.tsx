import * as React from "react"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import HandleSubmit from "../../../components/useForm/HandleSubmit"

export default ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - handleSubmit" />
      <HandleSubmit currentLanguage="en" />
    </Layout>
  )
}
