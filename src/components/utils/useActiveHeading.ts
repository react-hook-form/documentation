import { useEffect, useState } from "react"

// Tracks which of the given heading ids was most recently scrolled past the
// top band of the viewport, for scroll-spy highlighting.
export default function useActiveHeading(ids: string[]) {
  const [active, setActive] = useState<string | null>(null)
  const key = ids.join(",")

  useEffect(() => {
    if (!ids.length) return

    const update = () => {
      const offset = 120
      let current: string | null = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top - offset <= 0) current = id
        else break
      }
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      setActive(atBottom ? ids[ids.length - 1] : (current ?? ids[0]))
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return active
}
