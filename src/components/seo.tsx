import * as React from "react"
import Helmet from "react-helmet"
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n"
import { useStateMachine } from "little-state-machine"
import { updateCurrentLanguage } from "../actions/languageActions"
import "intl"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  title,
  description,
  location,
}: {
  title: string
  description?: string
  location: { pathname: string }
}) {
  const { action } = useStateMachine(updateCurrentLanguage)
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            languages {
              defaultLangKey
              langs
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const { langs, defaultLangKey } = site.siteMetadata.languages
  const url = location.pathname
  const langKey = getCurrentLangKey(langs, defaultLangKey, url)
  const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, "/")

  React.useEffect(() => {
    action(
      getLangs(langs, langKey, getUrlForLang(homeLink, url)).filter(
        ({ selected }) => selected
      )[0].langKey
    )
  }, [])

  return (
    <Helmet
      htmlAttributes={{
        lang: langKey,
      }}
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
            "https://repository-images.githubusercontent.com/174038031/01768c80-a4f5-11e9-8007-1dc851d42b5d",
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
            "https://repository-images.githubusercontent.com/174038031/01768c80-a4f5-11e9-8007-1dc851d42b5d",
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
