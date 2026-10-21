import Seo from "../components/seo"
import api from "../data/api"
import ApiGallery from "../components/ApiGallery"

const Api = () => (
  <>
    <Seo
      title={api.title}
      description="Complete API reference for React Hook Form — hooks, methods, and TypeScript types."
    />
    <ApiGallery />
  </>
)

export default Api
