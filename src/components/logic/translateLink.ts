import * as language from "../../data/languages"

export default (link, currentLanguage) => {
  if (currentLanguage === language.defaultLangKey) {
    return link
  }

  return `/${currentLanguage}${link ? "/" + link : ""}`
}
