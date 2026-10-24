import styles from "./selectNav.module.css"
import { useRouter } from "next/router"
import { Pages } from "@/types/types"

type Props = {
  pages: Pages
  // Base path for anchor-only sidebars, e.g. "/ts" for "#UseFormProps".
  basePath: string
}

export function SelectNav({ pages, basePath }: Props) {
  const router = useRouter()
  const [pathAndQuery, hash] = router.asPath.split("#")
  const pathname = pathAndQuery.split("?")[0]
  const currentHref = hash ? `${pathname}#${hash}` : pathname
  const toHref = (target: string) =>
    target.startsWith("#") ? `${basePath}${target}` : target
  const isCurrent = (target: string) => toHref(target) === currentHref

  if (!pages.length) return null

  const current = pages
    .flatMap((page) => [page, ...(page.pages ?? [])])
    .find((page) => isCurrent(page.pathname))

  return (
    <div className={styles.root}>
      {/* eslint-disable-next-line jsx-a11y/no-onchange */}
      <select
        className={styles.select}
        aria-label="Select documentation page"
        value={current ? toHref(current.pathname) : ""}
        onChange={(e) => {
          router.push(e.target.value)
        }}
      >
        <option value="" disabled>
          Select page...
        </option>
        {pages.map((page) =>
          page.pages ? (
            <optgroup key={page.pathname} label={page.name}>
              <option value={toHref(page.pathname)}>{page.name}</option>
              {page.pages.map((child) => (
                <option key={child.pathname} value={toHref(child.pathname)}>
                  {child.name}
                </option>
              ))}
            </optgroup>
          ) : (
            <option key={page.pathname} value={toHref(page.pathname)}>
              {page.name}
            </option>
          )
        )}
      </select>

      <svg className={styles.chevron} viewBox="0 0 12 12" aria-hidden="true">
        <path d="m2.5 4 3.5 3.5L9.5 4" />
      </svg>
    </div>
  )
}
