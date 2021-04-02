import * as React from "react"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import ClearErrors from "../../../components/useForm/ClearErrors"

export default ({ location }: { location: any }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="UseForm - ClearErrors" location={location} />
      <ClearErrors currentLanguage="en" />
    </Layout>
  )
}
