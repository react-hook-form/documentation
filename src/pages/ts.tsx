import Seo from "../components/seo"
import Layout from "../components/layout"
import TsPage from "../components/tsPage"

const Ts = ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="TS Support" />
      <TsPage defaultLang="en" />
    </Layout>
  )
}

export default Ts
