import Link from "next/link"
import colors from "../../styles/colors"
import styles from "./SideMenu.module.css"
import typographyStyles from "../../styles/typography.module.css"
import { useRouter } from "next/router"
import { Pages } from "../../types/types"

function Menu({ pages }: { pages: Pages }) {
  const router = useRouter()
  const { pathname } = router

  return (
    <aside className={styles.menu}>
      <div>
        <div className={styles.titleList}>
          <h4
            className={typographyStyles.title}
            style={{
              fontSize: 16,
              color: colors.lightBlue,
            }}
          >
            Menu
          </h4>
        </div>

        <ul className="scrollArea">
          {pages.map((page) => {
            const isActive = pathname === page.pathname

            return (
              <li key={page.pathname} className={styles.menuItem}>
                <code aria-hidden className={styles.code}>{`</>`}</code>
                <Link
                  className={isActive ? styles.isActive : ""}
                  href={page.pathname}
                >
                  {page.name}
                </Link>

                {page?.pages && (
                  <ul>
                    {page.pages.map((page) => {
                      const isActive = pathname === page.pathname

                      return (
                        <li key={page.pathname} className={styles.menuItem}>
                          <code
                            aria-hidden
                            className={styles.code}
                          >{`</>`}</code>{" "}
                          <Link
                            className={isActive ? styles.isActive : ""}
                            href={page.pathname}
                          >
                            {page.name}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default Menu
