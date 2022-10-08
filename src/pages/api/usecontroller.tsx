import * as React from "react"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import UseControllerContent from "../../components/UseController"

export default ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useController" />
      <UseControllerContent currentLanguage="en" />
    </Layout>
  )
}
