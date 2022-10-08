import * as React from "react"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import FormState from "../../../components/useForm/FormState"

export default ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - FormState" />
      <FormState currentLanguage="en" />
    </Layout>
  )
}
