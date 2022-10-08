import * as React from "react"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import UseWatch from "../../components/UseWatch"

export default ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useWatch" />
      <UseWatch currentLanguage="en" />
    </Layout>
  )
}
