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
    <Layout location={location} defaultLang="de">
      <Seo
        title={builder.title.de}
        description={builder.description.de}
        location={location}
      />
      <BuilderPage isStatic defaultLang="de" />
    </Layout>
  )
}

export default Api
