import * as React from "react"
import Helmet from "react-helmet"

function SEO({ title, description }: { title: string; description?: string }) {
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

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          content:
            "https://raw.githubusercontent.com/react-hook-form/documentation/master/src/images/react-hook-form-og.png",
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          property: `twitter:image`,
          content:
            "https://raw.githubusercontent.com/react-hook-form/documentation/master/src/images/react-hook-form-og.png",
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    />
  )
}

export default SEO
