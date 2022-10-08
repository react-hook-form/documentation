import * as React from "react"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import SetValue from "../../../components/useForm/SetValue"

export default ({ location }: { location: any }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - setValue" location={location} />
      <SetValue currentLanguage="en" />
    </Layout>
  )
}
