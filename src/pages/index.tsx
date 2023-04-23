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
  <Layout location={location} defaultLang="en">
    <Seo title={home.title.en} description={home.description.en} />
    <Home location={location} defaultLang="en" />
  </Layout>
)

export default IndexPage
