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
    <Layout location={location} defaultLang="kr">
      <Seo
        title={builder.title.kr}
        description={builder.description.kr}
        location={location}
      />
      <BuilderPage isStatic defaultLang="kr" />
    </Layout>
  )
}

export default Api
