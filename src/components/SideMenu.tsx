import * as React from "react"
import colors from "../styles/colors"
import generic from "../data/generic"
import styles from "./SideMenu.module.css"
import { useStateMachine } from "little-state-machine"
import typographyStyles from "../styles/typography.module.css"

function SideMenu({
  links,
  goToSection,
  enLinks,
  isStatic,
  currentLanguage,
}: {
  links: any
  goToSection: Function
  isStatic?: boolean
  enLinks: any
  currentLanguage: string
}) {
  const { state } = useStateMachine()
  const lightMode = state?.setting?.lightMode

  return (
    <aside className={`${styles.menu} ${lightMode ? styles.lightMenu : ""}`}>
      <div>
        <div className={styles.titleList}>
          <h2
            className={typographyStyles.title}
            style={{
              fontSize: 16,
              color: colors.lightBlue,
            }}
          >
            {generic.menu[currentLanguage]}
          </h2>
        </div>

        <ul className="scrollArea">
          {links.map((rawLink, index) => {
            const link =
              typeof rawLink === "function" ? rawLink().title : rawLink.title
            const enLink =
              typeof enLinks[index] === "function"
                ? enLinks[index]().title
                : enLinks[index].title

            let linkName = link.startsWith("use") ? `♆ ${link}` : link

            if (
              /^[A-Z]/.test(link[0]) &&
              !link.includes(" ") &&
              link !== "TypeScript"
            ) {
              linkName = "❒ " + linkName
            }

            if (
              [
                "useformcontext",
                "controller",
                "usefieldarray",
                "errormessage",
                "validationschema",
                "browser built-in validation",
              ].includes((link || "").toLowerCase()) ||
              isStatic
            ) {
              return (
                <li key={link}>
                  <span className={styles.code}>{`</>`}</span>
                  {isStatic ? (
                    <button
                      onClick={() => {
                        goToSection(enLink, index)
                      }}
                      style={{
                        top: "-3px",
                        position: "relative",
                      }}
                    >
                      {linkName}
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        goToSection(enLink, index)
                      }}
                      style={{
                        top: "-3px",
                        position: "relative",
                        ...(link === "Quick Start" ? { paddingLeft: 0 } : null),
                      }}
                    >
                      {linkName}
                    </button>
                  )}
                </li>
              )
            }

            return (
              <li
                key={link}
                onClick={() => goToSection(enLink, index)}
                style={{
                  ...(index > 0
                    ? {
                        marginLeft: 10,
                        ...(index !== links.length - 7
                          ? { borderLeft: `1px solid ${colors.lightPink}` }
                          : null),
                        ...(index === 3
                          ? { paddingTop: 10, marginTop: -15 }
                          : null),
                      }
                    : null),
                }}
              >
                <span
                  className={`${styles.arrow} ${
                    index === links.length - 7 ? styles.arrowLast : ""
                  }`}
                >
                  {index > 0 && (
                    <span
                      style={{
                        left: 1,
                        top: -1,
                        position: "relative",
                      }}
                    >
                      ╴
                    </span>
                  )}
                </span>
                {link !== "Quick Start" && (
                  <span className={styles.code}>{`</>`}</span>
                )}{" "}
                <button
                  style={{
                    top: "-3px",
                    position: "relative",
                    ...(link === "Quick Start" ? { paddingLeft: 0 } : null),
                  }}
                >
                  {linkName}
                </button>
              </li>
            )
          })}

          <li>
            <span className={styles.code}>{`</>`}</span>
            <a
              rel="noopener noreferrer"
              href="https://github.com/bluebill1049/react-hook-form/tree/master/examples"
              target="_blank"
            >
              {generic.codeExample[currentLanguage]}
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default React.memo(SideMenu)
