import * as React from "react"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import FormState from "../../../components/useForm/FormState"

export default ({ location }: { location: any }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="UseForm - FormState" location={location} />
      <FormState currentLanguage="en" />
    </Layout>
  )
}
