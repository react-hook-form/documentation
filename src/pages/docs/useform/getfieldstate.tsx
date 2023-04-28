import Seo from "../../../components/seo"
import Layout from "../../../components/layout"
import { GetFieldState } from "../../../components/useForm/GetFieldState"

const Getfieldstate = () => {
  return (
    <Layout>
      <Seo title="useForm - FormState" />
      <GetFieldState />
    </Layout>
  )
}

export default Getfieldstate
