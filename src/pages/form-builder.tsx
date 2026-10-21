import Seo from "../components/seo"
import BuilderPage from "../components/BuilderPage"
import builder from "../data/builder"

const Api = () => {
  return (
    <>
      <Seo title={builder.title} description={builder.description} />
      <BuilderPage isStatic />
    </>
  )
}

export default Api
