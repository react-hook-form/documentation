import Layout from "../components/layout"
import Seo from "../components/seo"
import DevTools from "../components/DevTools"
import api from "../data/api"

const Api = () => (
  <Layout>
    <Seo title="React Hook Form DevTools" description="Debug and inspect your React Hook Form state in real time with the official DevTools." />
    <DevTools />
  </Layout>
)

export default Api
