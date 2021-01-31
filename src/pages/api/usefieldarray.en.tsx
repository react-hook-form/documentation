import * as React from "react"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import UseFieldArrayContent from "../../components/UseFieldArray"

export default ({ location }: { location: any }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="TS Support" location={location} />
      <UseFieldArrayContent currentLanguage="en" />
    </Layout>
  )
}
