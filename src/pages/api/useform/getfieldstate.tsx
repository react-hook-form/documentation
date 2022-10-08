import * as React from "react"
import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import { GetFieldState } from "../../../components/useForm/GetFieldState"

export default ({ location }: { location: any }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - FormState" location={location} />
      <GetFieldState />
    </Layout>
  )
}
