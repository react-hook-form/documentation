import Seo, { SITE_URL } from "../components/seo"
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

// Identifies the npm package and repository the site documents.
const softwareSourceCodeSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "React Hook Form",
  description: home.description,
  url: SITE_URL,
  codeRepository: "https://github.com/react-hook-form/react-hook-form",
  programmingLanguage: ["TypeScript", "JavaScript"],
  runtimePlatform: "React",
  license: "https://opensource.org/licenses/MIT",
  sameAs: ["https://www.npmjs.com/package/react-hook-form"],
}

const IndexPage = ({ monthlyDownloads }: { monthlyDownloads: number }) => (
  <>
    <Seo
      title={home.title}
      description={home.description}
      jsonLd={[softwareSourceCodeSchema]}
    />
    <Home monthlyDownloads={monthlyDownloads} />
  </>
)

export default IndexPage
