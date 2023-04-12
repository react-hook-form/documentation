const path = require("path")

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  ns: ["common"],
  defaultNs: "common",
  /** To avoid issues when deploying to some paas (vercel...) */
  localePath:
    typeof window === "undefined"
      ? path.resolve("./public/locales")
      : "/locales",

  reloadOnPrerender: process.env.NODE_ENV === "development",
}
