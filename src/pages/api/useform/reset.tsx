import * as React from "react"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import Reset from "../../../components/useForm/Reset"

export default ({ location }: { location: any }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - reset" location={location} />
      <Reset currentLanguage="en" />
    </Layout>
  )
}
