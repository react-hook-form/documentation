const preFix =
  "https://github.com/react-hook-form/documentation/edit/master/src/data/"

export const getEditLink = (
  currentLanguage: string,
  pathname: string
): string => {
  if (!pathname) return ""

  if (pathname === "/" || pathname === "") {
    return preFix + "home.tsx"
  } else if (pathname.includes("get-started")) {
    return `${preFix}${currentLanguage}/getStarted.tsx`
  } else if (pathname.includes("api")) {
    return `${preFix}${currentLanguage}/api.tsx`
  } else if (pathname.includes("ts")) {
    return `${preFix}ts.tsx`
  } else if (pathname.includes("advanced-usage")) {
    return `${preFix}${currentLanguage}/advanced.tsx`
  } else if (pathname.includes("faqs")) {
    return `${preFix}${currentLanguage}/faq.tsx`
  } else if (pathname.includes("dev-tools")) {
    return `${preFix}${currentLanguage}/devtools.tsx`
  } else if (pathname.includes("form-builder")) {
    return `${preFix}builder.tsx`
  } else if (pathname.includes("resources")) {
    return `${preFix}resources.tsx`
  }
}
