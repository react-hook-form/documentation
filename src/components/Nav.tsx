import * as React from "react"
import { Link } from "gatsby"
import GitHubButton from "react-github-btn"
import { useStateMachine } from "little-state-machine"
import nav from "../data/nav"
import translateLink from "./logic/translateLink"
import { updateCurrentLanguage } from "../actions/languageActions"
import { globalHistory, navigate } from "@reach/router"
import Toggle from "./Toggle"
import { Animate } from "react-simple-animate"
import Search from "./Search"
import styles from "./Nav.module.css"
import colors from "../styles/colors"

export default function Nav({ defaultLang }: { defaultLang: string }) {
  const {
    action,
    state,
    state: { language, setting = {} },
  } = useStateMachine(updateCurrentLanguage)
  const [showLang, setLang] = React.useState(null)
  const [showMenu, setShowMenu] = React.useState(false)
  const lightMode = state?.setting?.lightMode
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }
  const location = globalHistory.location

  React.useEffect(() => {
    if (setting.isFocusOnSearch) {
      setLang(false)
    } else if (!setting.isFocusOnSearch) {
      setLang(true)
    }
  }, [setting.isFocusOnSearch])

  return (
    <>
      <div className={styles.iconGroup}>
        <Search />

        {showLang && (
          <>
            <Toggle />
            <div
              className={`${styles.langSelect} ${
                lightMode ? styles.lightLangSelect : ""
              }`}
            >
              {/* eslint-disable-next-line jsx-a11y/no-onchange*/}
              <select
                aria-label="Select a language"
                onChange={(e: any) => {
                  const selectedLanguage = e.target.value
                  action(e.target.value)

                  let url = location.pathname.substr(1)

                  switch (url) {
                    case "jp/":
                      url = "jp"
                      break
                    case "zh/":
                      url = "zh"
                      break
                    case "kr/":
                      url = "kr"
                      break
                    case "pt/":
                      url = "pt"
                      break
                    case "ru/":
                      url = "ru"
                    case "es/":
                      url = "es"
                      break
                  }

                  navigate(getNavLink(url, selectedLanguage))
                }}
                value={currentLanguage}
              >
                {/* eslint-disable jsx-a11y/accessible-emoji */}
                <option value="en">🇦🇺 English</option>
                <option value="zh">🇨🇳 简体中文</option>
                <option value="jp">🇯🇵 日本語</option>
                <option value="kr">🇰🇷 한국어</option>
                <option value="pt">🇧🇷 Português</option>
                <option value="es">🇪🇸 Español</option>
                <option value="ru">🇷🇺 Русский</option>
                {/* eslint-enable jsx-a11y/accessible-emoji */}
              </select>
            </div>
          </>
        )}
      </div>

      <div className={styles.gitHubButtonWrap}>
        <span className={styles.icon}>
          <a
            href="https://twitter.com/HookForm"
            target="_blank"
            rel="noopener noreferrer"
            title="React Hook Form Twitter"
          >
            <svg viewBox="0 0 24 24">
              <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </g>
            </svg>
          </a>
        </span>

        <GitHubButton
          href="https://github.com/bluebill1049/react-hook-form"
          data-size="large"
          data-show-count
          aria-label="Star react-hook-form on GitHub"
        />
      </div>

      {showMenu && (
        <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
          <nav
            className={`${styles.actionButtonGroup} ${
              lightMode ? styles.darkActionButtonGroup : ""
            } ${styles.mobileMenu}`}
            style={{
              bottom: 43,
            }}
          >
            <Link
              activeClassName="active"
              to={translateLink("/faqs", currentLanguage)}
            >
              <div className={styles.iconWrapper}>
                <div className="eye icon" />
              </div>
              <span>{nav[currentLanguage].faqs}</span>
            </Link>

            <Link
              activeClassName="active"
              to={translateLink("/resources", currentLanguage)}
            >
              <div className={styles.iconWrapper}>
                <div className="tag icon" />
              </div>
              <span>Resources</span>
            </Link>

            <Link
              activeClassName="active"
              to={translateLink("/dev-tools", currentLanguage)}
            >
              <div className={styles.iconWrapper}>
                <div className="laptop icon" />
              </div>
              <span>DevTools</span>
            </Link>

            <Link
              activeClassName="active"
              to={translateLink("/form-builder", currentLanguage)}
            >
              <div className={styles.iconWrapper}>
                <div className="edit icon" />
              </div>
              <span>{nav[currentLanguage].builder}</span>
            </Link>
          </nav>
        </Animate>
      )}

      <div className={lightMode ? styles.lightActionButtonWrapper : ""}>
        <nav
          className={`${styles.actionButtonGroup} ${
            lightMode ? styles.darkActionButtonGroup : ""
          }`}
        >
          <Link
            activeClassName="active"
            to={translateLink("/", currentLanguage)}
          >
            <div className={styles.iconWrapper}>
              <div className="flag icon" />
            </div>
            <span>{nav[currentLanguage].home}</span>
          </Link>
          <Link
            activeClassName="active"
            to={translateLink("/get-started", currentLanguage)}
          >
            <div className={styles.iconWrapper}>
              <div className="shutdown icon" />
            </div>
            <span>{nav[currentLanguage].getStarted}</span>
          </Link>
          <Link
            activeClassName="active"
            to={translateLink("/api", currentLanguage)}
          >
            <div className={styles.iconWrapper}>
              <div className="keyboard icon" />
            </div>
            <span>API</span>
          </Link>
          <Link
            activeClassName="active"
            to={translateLink("/ts", currentLanguage)}
          >
            <div className={styles.iconWrapper}>
              <span
                style={{
                  border: "1px solid white",
                  display: "inline-block",
                  lineHeight: 1.8,
                  width: 16,
                  height: 16,
                  fontSize: 8,
                  marginTop: 2,
                  background: "white",
                  color: "black",
                  fontWeight: 600,
                }}
              >
                TS
              </span>
            </div>
            <span>TS</span>
          </Link>
          <Link
            activeClassName="active"
            to={translateLink("/advanced-usage", currentLanguage)}
          >
            <div className={styles.iconWrapper}>
              <div className="search icon" />
            </div>
            <span>{nav[currentLanguage].advanced}</span>
          </Link>
          <Link
            activeClassName="active"
            to={translateLink("/faqs", currentLanguage)}
          >
            <div className={styles.iconWrapper}>
              <div className="eye icon" />
            </div>
            <span>{nav[currentLanguage].faqs}</span>
          </Link>
          <span className="desktopOnly">
            <span className={styles.tools}>
              <span
                style={{
                  position: "relative",
                  top: 2,
                }}
              >
                <span className={styles.menuExpandLink}>
                  {nav[currentLanguage].tools.nav}{" "}
                  <span
                    style={{
                      fontSize: 10,
                      display: "inline",
                      marginLeft: 2,
                      top: -1,
                      position: "relative",
                    }}
                  >
                    ▼
                  </span>
                </span>
              </span>
            </span>
            <div
              style={{
                position: "absolute",
                overflow: "hidden",
                marginLeft: -10,
                zIndex: 4,
              }}
            >
              <div
                style={{
                  overflow: "hidden",
                }}
              >
                <div className={styles.menuExpand}>
                  <Link
                    activeClassName="active"
                    to={translateLink("/dev-tools", currentLanguage)}
                  >
                    {nav[currentLanguage].tools.devTools}
                  </Link>

                  <Link
                    activeClassName="active"
                    to={translateLink("/form-builder", currentLanguage)}
                  >
                    {nav[currentLanguage].tools.formBuilder}
                  </Link>
                </div>
              </div>
            </div>
          </span>
          <Link
            activeClassName="active"
            className={styles.mobileNav}
            to={translateLink("/dev-tools", currentLanguage)}
          >
            <div className={styles.iconWrapper}>
              <div className="laptop icon" />
            </div>
            <span>DevTools</span>
          </Link>
          <Link
            activeClassName="active"
            className={styles.mobileNav}
            to={translateLink("/form-builder", currentLanguage)}
          >
            <div className={styles.iconWrapper}>
              <div className="edit icon" />
            </div>
            <span>{nav[currentLanguage].builder}</span>
          </Link>
          <Link
            activeClassName="active"
            to={translateLink("/resources", currentLanguage)}
          >
            <div className={styles.iconWrapper}>
              <div className="tag icon" />
            </div>
            <span>{nav[currentLanguage].resources}</span>
          </Link>
          <a
            href="https://github.com/react-hook-form/react-hook-form/releases"
            target="_blank"
            className="desktopOnly"
            rel="noreferrer noopener"
          >
            {nav[currentLanguage].releases}
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setShowMenu(!showMenu)
            }}
          >
            <div className={styles.iconWrapper}>
              <div className="more icon"></div>
            </div>
            More
          </a>

          <a
            href="https://opencollective.com/react-hook-form"
            target="_blank"
            className="desktopOnly donation"
            rel="noreferrer noopener"
            title="Donate to the project"
            style={{
              color: colors.secondary,
              minWidth: 20,
              marginLeft: -10,
            }}
          >
            ♥
          </a>
        </nav>
      </div>
    </>
  )
}

export function getNavLink(path: string, selectedLanguage: string) {
  const i18nPagePathRegex = /^([a-z]{2})(\/\S+|\?.+)/
  const i18nHomePageRegex = /^[a-z]{2}$/
  const i18nPageMatched = path.match(i18nPagePathRegex)
  const isHomePage = i18nHomePageRegex.test(path)

  if (selectedLanguage === "en") {
    if (isHomePage) {
      return "/"
    }
    if (i18nPageMatched != null) {
      return i18nPageMatched[2]
    }
    return path
  }

  const targetPath =
    i18nPageMatched != null
      ? i18nPageMatched[2].substr(1)
      : isHomePage
      ? ""
      : path
  return translateLink(targetPath, selectedLanguage)
}
