import * as React from "react"
import colors from "../styles/colors"
import generic from "../data/generic"
import { useStateMachine } from "little-state-machine"
import { Animate } from "react-simple-animate"
import typographyStyles from "../styles/typography.module.css"
import styles from "./SideMenu.module.css"

const activateStyle = { borderBottom: `1px solid ${colors.lightPink}` }

const animateProps = {
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

const excludeTitles = [
  "useformcontext",
  "controller",
  "usefieldarray",
  "usewatch",
  "errormessage",
  "validationschema",
  "validationresolver",
  "browser built-in validation",
]

function SideMenu({
  links,
  goToSection,
  enLinks,
  isStatic,
  currentLanguage,
  activeIndex,
  version,
}: {
  links: any
  goToSection: (name: any, animate?: boolean) => void
  isStatic?: boolean
  enLinks: any
  currentLanguage: string
  activeIndex?: number
  version?: number
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
              excludeTitles.includes((link || "").toLowerCase()) ||
              isStatic
            ) {
              return (
                <Animate
                  key={link}
                  {...animateProps}
                  delay={index * 0.01}
                  render={({ style }) => (
                    <li style={style}>
                      <code className={styles.code}>{`</>`}</code>
                      {isStatic ? (
                        <button
                          onClick={() => {
                            goToSection(enLink, index)
                          }}
                          style={{
                            top: "-3px",
                            position: "relative",
                            ...(activeIndex === index ? activateStyle : {}),
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
                            ...(link === "Quick Start"
                              ? { paddingLeft: 0 }
                              : null),
                            ...(activeIndex === index ? activateStyle : {}),
                          }}
                        >
                          {linkName}
                          {rawLink.size && (
                            <span className={styles.size}>
                              ~ {rawLink.size}
                            </span>
                          )}
                        </button>
                      )}
                    </li>
                  )}
                />
              )
            }

            return (
              <Animate
                key={link}
                {...animateProps}
                delay={index * 0.01}
                render={({ style }) => (
                  <li
                    onClick={() => goToSection(enLink, index)}
                    style={{
                      ...(index > 0
                        ? {
                            marginLeft: 10,
                            ...(index !== links.length - (version === 6 ? 6 : 8)
                              ? { borderLeft: `1px solid ${colors.lightPink}` }
                              : null),
                            ...(index === 3
                              ? { paddingTop: 10, marginTop: -15 }
                              : null),
                          }
                        : null),
                      ...style,
                    }}
                  >
                    <span
                      className={`${styles.arrow} ${
                        index === links.length - (version === 6 ? 6 : 8)
                          ? styles.arrowLast
                          : ""
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
                      <code className={styles.code}>{`</>`}</code>
                    )}{" "}
                    <button
                      style={{
                        top: "-3px",
                        position: "relative",
                        ...(link === "Quick Start" ? { paddingLeft: 0 } : null),
                        ...(activeIndex === index ? activateStyle : {}),
                      }}
                    >
                      {linkName}
                      {rawLink.size && (
                        <span className={styles.size}>~ {rawLink.size}</span>
                      )}
                    </button>
                  </li>
                )}
              />
            )
          })}

          <Animate
            {...animateProps}
            delay={(links.length + 1) * 0.01}
            render={({ style }) => (
              <li style={style}>
                <code className={styles.code}>{`</>`}</code>
                <a
                  rel="noopener noreferrer"
                  href="https://github.com/bluebill1049/react-hook-form/tree/master/examples"
                  target="_blank"
                >
                  {generic.codeExample[currentLanguage]}
                </a>
              </li>
            )}
          />
        </ul>
      </div>
    </aside>
  )
}

export default React.memo(SideMenu)
