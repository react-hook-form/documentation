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
    <Layout location={location} defaultLang="ru">
      <Seo
        title={builder.title.ru}
        description={builder.description.ru}
        location={location}
      />
      <BuilderPage isStatic defaultLang="ru" />
    </Layout>
  )
}

export default Api
