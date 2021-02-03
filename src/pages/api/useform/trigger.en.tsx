import * as React from "react"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import Trigger from "../../../components/useForm/Trigger"

export default ({ location }: { location: any }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - trigger" location={location} />
      <Trigger currentLanguage="en" />
    </Layout>
  )
}
