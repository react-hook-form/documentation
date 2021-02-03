import * as React from "react"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import UseFormState from "../../components/UseFormState"

export default ({ location }: { location: any }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm" location={location} />
      <UseFormState currentLanguage="en" />
    </Layout>
  )
}
