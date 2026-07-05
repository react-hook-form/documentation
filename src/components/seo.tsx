import Head from "next/head"
import { useRouter } from "next/router"

export const SITE_URL = "https://react-hook-form.com"
const SITE_NAME = "React Hook Form"
const DEFAULT_TITLE = "React Hook Form - Simple React forms validation"
const DEFAULT_DESCRIPTION =
  "Performant, flexible and extensible forms with easy-to-use validation."
const OG_IMAGE = `${SITE_URL}/images/react-hook-form-og.png`

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo/react-hook-form-logo.png`,
  sameAs: [
    "https://github.com/react-hook-form/react-hook-form",
    "https://twitter.com/HookForm",
  ],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
}

function SEO({
  title,
  description,
  jsonLd = [],
}: {
  title: string
  description?: string
  jsonLd?: object[]
}) {
  const router = useRouter()
  const metaTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE
  const metaDescription = description || DEFAULT_DESCRIPTION
  const canonical = `${SITE_URL}${router.asPath.split(/[?#]/)[0]}`
  const schemas = [organizationSchema, websiteSchema, ...jsonLd]

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} key="description" />
      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@HookForm" />
      <meta name="twitter:creator" content="@bluebill1049" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {schemas.map((schema, i) => (
        // eslint-disable-next-line react/no-danger
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  )
}

export default SEO
