import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../components/HomePage"
import home from "../data/home"

const IndexPage = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout location={location} defaultLang="ru">
    <Seo
      title={home.title.ru}
      description={home.description.ru}
      location={location}
    />
    <Home location={location} defaultLang="ru" />
  </Layout>
)

export default IndexPage
