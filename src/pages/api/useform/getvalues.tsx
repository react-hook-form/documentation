import * as React from "react"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import GetValues from "../../../components/useForm/GetValues"

export default ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - getValues" />
      <GetValues currentLanguage="en" />
    </Layout>
  )
}
