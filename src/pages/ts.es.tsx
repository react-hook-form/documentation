import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import TsPage from "../components/tsPage"

export default ({ location }) => {
  return (
    <Layout location={location} defaultLang="es">
      <Seo title="TS Support" location={location} />
      <TsPage defaultLang="es" />
    </Layout>
  )
}
