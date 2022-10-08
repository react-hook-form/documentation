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
    <Layout location={location} defaultLang="en">
      <Seo
        title={builder.title.en}
        description={builder.description.en}
        location={location}
      />
      <BuilderPage isStatic defaultLang="en" />
    </Layout>
  )
}

export default Api
