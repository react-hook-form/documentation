const preFix =
  "https://github.com/react-hook-form/documentation/edit/master/src/"

const dataPreFix = "data/"
const pagesPreFix = "pages/"

const filterApiPageURL = (pathname) => {
  if (pathname.charAt(pathname.length - 1) === "/")
    return pathname.substring(0, pathname.length - 1).substring(1)

  return pathname.substring(1)
}

export const getEditLink = (
  currentLanguage: string,
  pathname: string
): string => {
  if (!pathname) return ""

  if (pathname === "/" || pathname === "") {
    return `${preFix}${dataPreFix}/home.tsx`
  } else if (pathname.includes("get-started")) {
    return `${preFix}${dataPreFix}${currentLanguage}/getStarted.tsx`
  } else if (pathname.includes("api")) {
    const splitPath = pathname.split("/")
    if (splitPath.length === 2 || splitPath[2] === "") {
      return `${preFix}${dataPreFix}${currentLanguage}/api.tsx`
    }
    return `${preFix}${pagesPreFix}${filterApiPageURL(pathname)}.tsx`
  } else if (pathname.includes("ts")) {
    return `${preFix}${dataPreFix}ts.tsx`
  } else if (pathname.includes("advanced-usage")) {
    return `${preFix}${dataPreFix}${currentLanguage}/advanced.tsx`
  } else if (pathname.includes("faqs")) {
    return `${preFix}${dataPreFix}${currentLanguage}/faq.tsx`
  } else if (pathname.includes("dev-tools")) {
    return `${preFix}${dataPreFix}${currentLanguage}/devtools.tsx`
  } else if (pathname.includes("form-builder")) {
    return `${preFix}${dataPreFix}builder.tsx`
  } else if (pathname.includes("resources")) {
    return `${preFix}${dataPreFix}resources.tsx`
  }
}
