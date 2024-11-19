import { useEffect, useState } from "react"
import Link from "next/link"
import styles from "./SideMenu.module.css"
import typographyStyles from "../../styles/typography.module.css"
import colors from "../../styles/colors"
import { Pages } from "../../types/types"

function Menu({ pages = [] }: { pages: Pages }) {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = pages.flatMap((page) =>
        [page, ...(page.pages || [])].map((p) => ({
          id: p.pathname.replace("#", ""),
          top:
            document.getElementById(p.pathname.replace("#", ""))?.offsetTop ||
            0,
        }))
      )

      const currentSection = sections.reduce((acc, section) => {
        const { id, top } = section
        if (window.scrollY >= top - 100) {
          console.log(id)
          return id
        }
        return acc
      }, "")

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)

    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [pages])

  const scrollToSection = (sectionId: string, event: React.MouseEvent) => {
    event.preventDefault()
    const element = document.getElementById(sectionId.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

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
            const isActive = activeSection === page.pathname.replace("#", "")
            const hasActiveChild = page.pages?.some(
              (subPage) => activeSection === subPage.pathname.replace("#", "")
            )

            return (
              <li
                key={page.pathname}
                className={`${styles.menuItem} ${
                  isActive || hasActiveChild ? styles.activeParent : ""
                }`}
                style={{
                  display: page?.pages ? "block" : "flex",
                }}
              >
                <code aria-hidden className={styles.code}>
                  {`</>`}
                </code>
                <a
                  href={page.pathname}
                  className={isActive ? styles.isActive : ""}
                  onClick={(e) => scrollToSection(page.pathname, e)}
                >
                  {page.name}
                </a>

                {page?.pages && (
                  <ul>
                    {page.pages.map((subPage) => {
                      const isSubActive =
                        activeSection === subPage.pathname.replace("#", "")

                      return (
                        <li
                          key={subPage.pathname}
                          className={`${styles.menuItem} ${
                            isSubActive ? styles.activeItem : ""
                          }`}
                        >
                          <code aria-hidden className={styles.code}>
                            {`</>`}
                          </code>
                          <a
                            href={subPage.pathname}
                            className={isSubActive ? styles.isActive : ""}
                            onClick={(e) =>
                              scrollToSection(subPage.pathname, e)
                            }
                          >
                            {subPage.name}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>

        <div id="carbon-cover" />
      </div>
    </aside>
  )
}

export default Menu
