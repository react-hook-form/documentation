import * as React from "react"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import Controller from "../../../components/useController/Controller"

export default ({ location }: { location: any }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="Controller" location={location} />
      <Controller currentLanguage="en" />
    </Layout>
  )
}
