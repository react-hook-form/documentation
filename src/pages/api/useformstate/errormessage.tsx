import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import api from "../../../data/api"
import ErrorMessage from "../../../components/ErrorMessage"

const Errormessage = () => {
  return (
    <Layout>
      <Seo title="useFormState - ErrorMessage" />
      <ErrorMessage api={api} />
    </Layout>
  )
}

export default Errormessage
