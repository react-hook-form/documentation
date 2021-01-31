import * as React from "react"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import UseWatch from "../../components/UseWatch"

export default ({ location }: { location: any }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="TS Support" location={location} />
      <UseWatch currentLanguage="en" />
    </Layout>
  )
}
