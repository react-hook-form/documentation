import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import MigrateV5ToV6 from "../components/migrateV5ToV6Page"

export default ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="Migrate From V5 to V6" location={location} />
      <MigrateV5ToV6 defaultLang="en" />
    </Layout>
  )
}
