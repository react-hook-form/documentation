import * as React from "react"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import Watch from "../../../components/useForm/Watch"

export default ({ location }: { location: any }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="UseForm - Watch" location={location} />
      <Watch currentLanguage="en" />
    </Layout>
  )
}
