import * as React from "react"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import SetFocus from "../../../components/useForm/SetFocus"

export default ({ location }: { location: any }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - setFocus" location={location} />
      <SetFocus currentLanguage="en" />
    </Layout>
  )
}
