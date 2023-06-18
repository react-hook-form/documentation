import Head from "next/head"

const site = {
  siteMetadata: {
    title: `React Hook Form - Simple React forms validation`,
    description: `Performant, flexible and extensible forms with easy-to-use validation.`,
    author: `@bluebill1049`,
    siteUrl: "https://www.react-hook-form.com",
    languages: {
      langs: ["en", "es", "jp", "zh", "kr", "pt", "ru"],
      defaultLangKey: "en",
    },
  },
}

function SEO({ title, description }: { title: string; description?: string }) {
  const metaDescription = description || site.siteMetadata.description

  return (
    <Head>
      <title>{title || site.siteMetadata.title}</title>
      <meta
        property="description"
        content={metaDescription}
        key="description"
      />
      <meta
        name="twitter:description"
        content="Performant, flexible and extensible forms with easy-to-use validation."
      ></meta>
      <meta name="twitter:creator" content={site.siteMetadata.author}></meta>
      <meta
        property="twitter:image"
        content="https://raw.githubusercontent.com/react-hook-form/documentation/master/src/images/react-hook-form-og.png"
      ></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta property="og:type" content="website"></meta>
      <meta
        property="og:description"
        content="Performant, flexible and extensible forms with easy-to-use validation."
      ></meta>
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/react-hook-form/documentation/master/src/images/react-hook-form-og.png"
      ></meta>
    </Head>
  )
}

export default SEO
