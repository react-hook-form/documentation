import { memo } from "react"
import colors from "../styles/colors"
import generic from "../data/generic"
import styles from "./SideMenu.module.css"
import typographyStyles from "../styles/typography.module.css"
import { useRouter } from "next/router"

export const animateProps = {
  play: true,
  start: {
    opacity: 0,
    transform: "translateX(-30px)",
  },
  end: {
    opacity: 1,
  },
  easeType: "cubic-bezier(0.37, 0, 0.63, 1)",
}

function SideMenu({
  links,
}: {
  links: { title: string; href: string }[]
  activeIndex?: number
}) {
  const router = useRouter()

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
            {generic.menu}
          </h4>
        </div>

        <ul className="scrollArea">
          {links.map((rawLink, index) => {
            const link = rawLink.title

            return (
              <li key={`menu-${index}`}>
                <code aria-hidden className={styles.code}>{`</>`}</code>
                <button
                  onClick={() => {
                    router.push({ hash: rawLink.href })
                  }}
                  style={{
                    top: "-3px",
                    position: "relative",
                  }}
                >
                  {link}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}

export default memo(SideMenu)
