import type { NextApiRequest, NextApiResponse } from "next"

// TODO: Move to 301 after testing in production. Browser aggressively caches 301 requests and can cause issues.
export default function handler(
  { query }: NextApiRequest,
  res: NextApiResponse
) {
  if (typeof query.route === "string") {
    return res.redirect(307, `/docs/${query.route}`)
  }

  if (Array.isArray(query.route)) {
    const redirect = query.route.join("/")

    return res.redirect(307, `/docs/${redirect}`)
  }

  res.redirect(307, "/docs")
}
