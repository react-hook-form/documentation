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
    <Layout location={location} defaultLang="es">
      <Seo
        title={builder.title.es}
        description={builder.description.es}
        location={location}
      />
      <BuilderPage isStatic defaultLang="es" />
    </Layout>
  )
}

export default Api
