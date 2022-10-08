import * as React from "react"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import ResetField from "../../../components/useForm/resetField"

export default ({ location }: { location: any }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - resetField" location={location} />
      <ResetField currentLanguage="en" />
    </Layout>
  )
}
