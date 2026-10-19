import Link from "next/link"
import clsx from "clsx"
import styles from "./SideMenu.module.css"
import { useRouter } from "next/router"
import { Pages } from "../../types/types"
import { CARBON_SCRIPT_ID, CarbonAds } from "@/components/CarbonAds"
import useActiveHeading from "../utils/useActiveHeading"

function Menu({ pages = [], title }: { pages: Pages; title?: string }) {
  const { asPath } = useRouter()
  const pathname = asPath.split("#")[0]

  // Anchor-only sidebars (Get Started, TS, FAQs...) act as the page's table of
  // contents, so highlight whichever section is in view.
  const anchorIds = pages
    .filter((page) => page.pathname.startsWith("#"))
    .map((page) => page.pathname.slice(1))
  const activeAnchor = useActiveHeading(anchorIds)

  const isActive = (target: string) =>
    target.startsWith("#")
      ? activeAnchor === target.slice(1)
      : pathname === target

  return (
    <aside className={styles.menu} aria-label="Documentation menu">
      <div className={styles.inner}>
        {title && <p className={styles.title}>{title}</p>}

        <ul className={styles.list}>
          {pages.map((page) => {
            const childActive = page.pages?.some((p) => pathname === p.pathname)

            return (
              <li key={page.pathname}>
                <Link
                  className={clsx(
                    styles.link,
                    page.pages && styles.groupLink,
                    isActive(page.pathname) && styles.active,
                    childActive && styles.parentActive
                  )}
                  aria-current={isActive(page.pathname) ? "page" : undefined}
                  href={page.pathname}
                >
                  <code aria-hidden className={styles.code}>{`</>`}</code>
                  {page.name}
                </Link>

                {page.pages && (
                  <ul className={styles.subList}>
                    {page.pages.map((child) => (
                      <li key={child.pathname}>
                        <Link
                          className={clsx(
                            styles.link,
                            styles.subLink,
                            isActive(child.pathname) && styles.active
                          )}
                          aria-current={
                            isActive(child.pathname) ? "page" : undefined
                          }
                          href={child.pathname}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
        <div className={styles.ads}>
          <CarbonAds id={CARBON_SCRIPT_ID} />
        </div>
      </div>
    </aside>
  )
}

export default Menu
