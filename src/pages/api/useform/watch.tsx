import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import Watch from "../../../components/useForm/Watch"

const WatchComponent = ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - watch" />
      <Watch currentLanguage="en" />
    </Layout>
  )
}

export default WatchComponent
