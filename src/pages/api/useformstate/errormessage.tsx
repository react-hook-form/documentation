import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import api from "../../../data/en/api"
import ErrorMessage from "../../../components/ErrorMessage"

const Errormessage = ({ location }) => {
  return (
    <Layout location={location} defaultLang="en">
      <Seo title="useFormState - ErrorMessage" />
      <ErrorMessage currentLanguage="en" api={api} />
    </Layout>
  )
}

export default Errormessage
