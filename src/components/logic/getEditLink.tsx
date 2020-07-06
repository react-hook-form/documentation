const preFix = "https://github.com/react-hook-form/documentation/edit/master/"

export const getEditLink = (
  currentLanguage: string,
  pathname: string
): string => {
  if (pathname === "/" || pathname === "") {
    return preFix + "src/data/home.tsx"
  } else if (pathname.includes("get-started")) {
    return `${preFix}src/data/${currentLanguage}/getStarted.tsx`
  } else if (pathname.includes("api")) {
    return `${preFix}src/data/${currentLanguage}/api.tsx`
  } else if (pathname.includes("ts")) {
    return `${preFix}src/data/ts.tsx`
  } else if (pathname.includes("advanced-usage")) {
    return `${preFix}src/data/${currentLanguage}/advanced.tsx`
  } else if (pathname.includes("faqs")) {
    return `${preFix}src/data/${currentLanguage}/faq.tsx`
  } else if (pathname.includes("dev-tools")) {
    return `${preFix}src/data/${currentLanguage}/devtools.tsx`
  } else if (pathname.includes("form-builder")) {
    return `${preFix}src/data/builder.tsx`
  } else if (pathname.includes("resources")) {
    return `${preFix}src/data/resources.tsx`
  }
}
