import * as React from "react"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import UnRegister from "../../../components/useForm/UnRegister"

export default ({ location }: { location: any }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - unregister" location={location} />
      <UnRegister currentLanguage="en" />
    </Layout>
  )
}
