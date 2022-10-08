import * as React from "react"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import UseFormState from "../../components/UseFormState"

export default ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useFormState" />
      <UseFormState currentLanguage="en" />
    </Layout>
  )
}
