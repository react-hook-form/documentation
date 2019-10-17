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
    <Layout location={location} defaultLang="zh">
      <Seo
        title={builder.title.zh}
        description={builder.description.zh}
        location={location}
      />
      <BuilderPage isStatic defaultLang="zh" />
    </Layout>
  )
}

export default Api
