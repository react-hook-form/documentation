import * as React from "react"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import SetError from "../../../components/useForm/SetError"

export default ({ location }: { location: any }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - setError" location={location} />
      <SetError currentLanguage="en" />
    </Layout>
  )
}
