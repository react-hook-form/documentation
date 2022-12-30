import * as React from "react"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import UseFormContext from "../../components/UseFormContext"

export default ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useFormContext" />
      <UseFormContext currentLanguage="en" />
    </Layout>
  )
}
