import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ApiPage from '../components/ApiPage'

const Api = ({ location }) => (
  <Layout location={location}>
    <Seo title="API" />
    <ApiPage />
  </Layout>
)

export default Api
