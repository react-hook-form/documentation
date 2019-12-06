import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BuilderPage from "../components/BuilderPage"
import builder from "../data/builder"

const ApiPT = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => {
  return (
    <Layout location={location} defaultLang="pt">
      <Seo
        title={builder.title.pt}
        description={builder.description.pt}
        location={location}
      />
      <BuilderPage isStatic defaultLang="pt" />
    </Layout>
  )
}

export default ApiPT
