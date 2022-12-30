import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({
  location,
}: {
  location: {
    search: string
    pathname: string
  }
}) => (
  <Layout defaultLang="en">
    <Seo title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just found a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
