import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BuilderPage from "../components/BuilderPage"
import builder from "../data/builder"

const Api = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => {
  return (
    <Layout location={location} defaultLang="jp">
      <Seo
        title={builder.title.jp}
        description={builder.description.jp}
        location={location}
      />
      <BuilderPage isStatic defaultLang="jp" />
    </Layout>
  )
}

export default Api
