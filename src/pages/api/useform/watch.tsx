import * as React from "react"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import Watch from "../../../components/useForm/Watch"

export default ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - watch" />
      <Watch currentLanguage="en" />
    </Layout>
  )
}
