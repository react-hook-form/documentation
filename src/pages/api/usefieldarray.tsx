import * as React from "react"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import UseFieldArrayContent from "../../components/UseFieldArray"

export default ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useFieldArray" />
      <UseFieldArrayContent currentLanguage="en" />
    </Layout>
  )
}
