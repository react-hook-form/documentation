const preFix =
  "https://github.com/react-hook-form/documentation/edit/master/src/"

const dataPreFix = "data/"
const content = "content/"

export const getEditLink = (pathname: string): string => {
  if (!pathname) return ""

  if (pathname === "/" || pathname === "") {
    return `${preFix}${dataPreFix}/home.tsx`
  } else if (pathname.includes("get-started")) {
    return `${preFix}${content}get-started.mdx`
  } else if (pathname.includes("advanced-usage")) {
    return `${preFix}${content}advanced-usage.mdx`
  } else if (pathname.includes("migrate-v7-to-v8")) {
    return `${preFix}${content}migrate-v7-to-v8.mdx`
  } else if (pathname.startsWith("/docs/") && pathname !== "/docs/") {
    // e.g. /docs/useform → content/docs/useform.mdx
    // e.g. /docs/useform/register → content/docs/useform/register.mdx
    const docPath = pathname.substring(1)
    return `${preFix}${content}${docPath}.mdx`
  } else if (pathname.includes("ts")) {
    return `${preFix}${content}ts.mdx`
  } else if (pathname.includes("faqs")) {
    return `${preFix}${content}faqs.mdx`
  } else if (pathname.includes("dev-tools")) {
    return `${preFix}${dataPreFix}devtools.tsx`
  } else if (pathname.includes("form-builder")) {
    return `${preFix}${dataPreFix}builder.tsx`
  } else if (pathname.includes("resources")) {
    return `${preFix}${dataPreFix}resources.tsx`
  }

  return ""
}
