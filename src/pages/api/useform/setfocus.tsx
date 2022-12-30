import * as React from "react"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import SetFocus from "../../../components/useForm/SetFocus"

export default ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - setFocus" />
      <SetFocus currentLanguage="en" />
    </Layout>
  )
}
