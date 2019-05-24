import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import App from '../components/App'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Seo title="Home" description="React hook for form validation without the hassle" />
    <App location={location} />
  </Layout>
)

export default IndexPage
