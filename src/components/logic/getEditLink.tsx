const preFix =
  "https://github.com/react-hook-form/documentation/edit/master/src/"

const dataPreFix = "data/"
const pagesPreFix = "pages/"
const content = "content/"

const filterApiPageURL = (pathname) => {
  if (pathname.charAt(pathname.length - 1) === "/")
    return pathname.substring(0, pathname.length - 1).substring(1)

  return pathname.substring(1)
}

export const getEditLink = (pathname: string) => {
  if (!pathname) return ""

  if (pathname === "/" || pathname === "") {
    return `${preFix}${dataPreFix}/home.tsx`
  } else if (pathname.includes("get-started")) {
    return `${preFix}${dataPreFix}getStarted.tsx`
  } else if (pathname.includes("api")) {
    const splitPath = pathname.split("/")
    if (splitPath.length === 2 || splitPath[2] === "") {
      return `${preFix}${dataPreFix}api.tsx`
    }
    return `${preFix}${pagesPreFix}${filterApiPageURL(pathname)}.tsx`
  } else if (pathname.includes("ts")) {
    return `${preFix}${content}ts.mdx`
  } else if (pathname.includes("advanced-usage")) {
    return `${preFix}${content}advanced.mdx`
  } else if (pathname.includes("faqs")) {
    return `${preFix}${content}faq.mdx`
  } else if (pathname.includes("dev-tools")) {
    return `${preFix}${dataPreFix}devtools.tsx`
  } else if (pathname.includes("form-builder")) {
    return `${preFix}${dataPreFix}builder.tsx`
  } else if (pathname.includes("resources")) {
    return `${preFix}${dataPreFix}resources.tsx`
  }
}
