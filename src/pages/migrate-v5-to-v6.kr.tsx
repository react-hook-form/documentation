import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import MigrateV5ToV6 from "../components/migrateV5ToV6Page"
import migrateV5ToV6Kr from "../data/kr/migrateV5ToV6"

export default ({ location }) => {
  return (
    <Layout location={location} defaultLang="kr">
      <Seo title="Migrate From V5 to V6" location={location} />
      <MigrateV5ToV6 defaultLang="kr" content={migrateV5ToV6Kr} />
    </Layout>
  )
}
