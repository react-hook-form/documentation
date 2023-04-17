import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import Trigger from "../../../components/useForm/Trigger"

const TriggerComponent = ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useForm - trigger" />
      <Trigger currentLanguage="en" />
    </Layout>
  )
}

export default TriggerComponent
