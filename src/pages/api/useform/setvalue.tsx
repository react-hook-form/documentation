import * as React from "react"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import SetValue from "../../../components/useForm/SetValue"

export default ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - setValue" />
      <SetValue currentLanguage="en" />
    </Layout>
  )
}
