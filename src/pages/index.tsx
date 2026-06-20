import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "../components/HomePage"
import home from "../data/home"

export const getStaticProps = async () => {
  let monthlyDownloads = 0
  try {
    const res = await fetch(
      "https://api.npmjs.org/downloads/point/last-month/react-hook-form"
    )
    const data = (await res.json()) as { downloads: number }
    monthlyDownloads = data.downloads || 0
  } catch {}

  return {
    props: { monthlyDownloads },
    revalidate: 86400,
  }
}

const IndexPage = ({ monthlyDownloads }: { monthlyDownloads: number }) => (
  <Layout>
    <Seo title={home.title} description={home.description} />
    <Home monthlyDownloads={monthlyDownloads} />
  </Layout>
)

export default IndexPage
