import * as React from "react"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import UseFormContext from "../../components/UseFormContext"

export default ({ location }: { location: any }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useFormContext" location={location} />
      <UseFormContext currentLanguage="en" />
    </Layout>
  )
}
