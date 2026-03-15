import Head from "next/head"
import { useRouter } from "next/router"

const site = {
  siteMetadata: {
    title: `React Hook Form - 간단한 리액트 폼 유효성 검사`,
    description: `성능이 좋고, 유연하며 확장 가능한 폼에 사용하기 쉬운 유효성 검사 기능이 포함되어 있어요.`,
    author: `@bluebill1049`,
    siteUrl: "https://react-ko-form.netlify.app",
  },
}

const ORIGINAL_SITE_URL = "https://react-hook-form.com"

function SEO({ title, description }: { title: string; description?: string }) {
  const router = useRouter()
  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title
  const pathname = router.asPath.split("?")[0].split("#")[0]
  const canonicalUrl = `${site.siteMetadata.siteUrl}${
    pathname === "/" ? "" : pathname
  }`
  const originalUrl = `${ORIGINAL_SITE_URL}${pathname === "/" ? "" : pathname}`
  const ogImageUrl = `${site.siteMetadata.siteUrl}/images/react-hook-form-og.png`

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} key="description" />
      <link rel="canonical" href={canonicalUrl} key="canonical" />

      {/* hreflang */}
      <link
        rel="alternate"
        hrefLang="ko"
        href={canonicalUrl}
        key="hreflang-ko"
      />
      <link
        rel="alternate"
        hrefLang="en"
        href={originalUrl}
        key="hreflang-en"
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={originalUrl}
        key="hreflang-default"
      />

      {/* Open Graph */}
      <meta property="og:title" content={metaTitle} key="og:title" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content={metaDescription}
        key="og:description"
      />
      <meta property="og:url" content={canonicalUrl} key="og:url" />
      <meta property="og:image" content={ogImageUrl} key="og:image" />
      <meta property="og:locale" content="ko_KR" key="og:locale" />
      <meta
        property="og:site_name"
        content="React Ko Form"
        key="og:site_name"
      />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} key="twitter:title" />
      <meta
        name="twitter:description"
        content={metaDescription}
        key="twitter:description"
      />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:image" content={ogImageUrl} key="twitter:image" />
    </Head>
  )
}

export default SEO
