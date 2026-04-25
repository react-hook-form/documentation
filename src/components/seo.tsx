import Head from "next/head"
import { useRouter } from "next/router"

const SITE_URL = "https://react-hook-form.com"
const DEFAULT_TITLE = "React Hook Form - Simple React forms validation"
const DEFAULT_DESCRIPTION =
  "Performant, flexible and extensible forms with easy-to-use validation."
const OG_IMAGE =
  "https://raw.githubusercontent.com/react-hook-form/documentation/master/src/images/react-hook-form-og.png"

function SEO({ title, description }: { title: string; description?: string }) {
  const router = useRouter()
  const metaTitle = title || DEFAULT_TITLE
  const metaDescription = description || DEFAULT_DESCRIPTION
  const canonical = `${SITE_URL}${router.asPath.split("?")[0]}`

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} key="description" />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@bluebill1049" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Head>
  )
}

export default SEO
