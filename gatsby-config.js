// eslint-disable-next-line @typescript-eslint/no-var-requires
const languages = require("./src/data/languages")

module.exports = {
  siteMetadata: {
    title: `React Hook Form - Simple React forms validation`,
    description: `Performant, flexible and extensible forms with easy-to-use validation.`,
    author: `@bluebill1049`,
    siteUrl: `https://www.react-hook-form.com`,
    languages,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyForNull: `en`,
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: false,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#bf1650`,
        showSpinner: false,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `react-hook-form`,
        short_name: `react-hook-form`,
        start_url: `/`,
        background_color: `#1e2a4a`,
        theme_color: `#1e2a4a`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-139961497-1`,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-139961497-1`,
        head: false,
        anonymize: true,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
