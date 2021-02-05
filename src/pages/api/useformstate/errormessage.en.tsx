import * as React from "react"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import api from "../../../data/en/api"
import ErrorMessage from "../../../components/ErrorMessage"

export default ({ location }: { location: any }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useFormState - ErrorMessage" location={location} />
      <ErrorMessage currentLanguage="en" api={api} />
    </Layout>
  )
}
