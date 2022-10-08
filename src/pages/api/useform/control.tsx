import * as React from "react"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import Control from "../../../components/useForm/Control"

export default ({ location }: { location: any }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - control" location={location} />
      <Control currentLanguage="en" />
    </Layout>
  )
}
