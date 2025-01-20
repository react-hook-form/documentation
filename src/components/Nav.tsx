import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import GitHubButton from "react-github-btn"
import { Animate } from "react-simple-animate"
import clsx from "clsx"
import nav from "../data/nav"
import colors from "../styles/colors"
import { LARGE_SCREEN } from "../styles/breakpoints"
import Toggle from "./Toggle"
import Search from "./Search"
import styles from "./Nav.module.css"
import useWindowSize from "./utils/useWindowSize"

export default function Nav() {
  const [isFocusOnSearch, setIsFocusOnSearch] = useState(false)
  const [showLang, setLang] = useState(false)
  const [show, setShow] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const router = useRouter()
  const { pathname } = router

  const { width } = useWindowSize()

  useEffect(() => {
    if (LARGE_SCREEN <= width) {
      setLang(true)
      return
    }

    if (isFocusOnSearch) {
      setLang(false)
      return
    }

    setLang(true)
  }, [isFocusOnSearch, width])

  useEffect(() => {
    setShow(true)
  }, [setShow])

  return (
    <>
      <div className={styles.iconGroup}>
        {show && (
          <Search focus={isFocusOnSearch} setFocus={setIsFocusOnSearch} />
        )}

        {showLang && <Toggle />}
      </div>

      <div className={styles.gitHubButtonWrap}>
        <span className={`${styles.icon} desktopOnly`}>
          <a
            href="https://discord.gg/yYv7GZ8"
            target="_blank"
            rel="noopener noreferrer"
            title="React Hook Form Discord"
          >
            <svg viewBox="0 0 127.14 96.36">
              <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
            </svg>
          </a>
        </span>

        <span className={`${styles.icon} ${styles.donate}`}>
          <a
            href="https://opencollective.com/react-hook-form"
            target="_blank"
            rel="noreferrer noopener"
            title="Donate to the project"
          >
            ♥
          </a>
        </span>

        <span className={styles.icon}>
          <a
            href="https://twitter.com/HookForm"
            target="_blank"
            rel="noopener noreferrer"
            title="React Hook Form Twitter"
          >
            <svg viewBox="0 0 1200 1227">
              <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
            </svg>
          </a>
        </span>

        <GitHubButton
          href="https://github.com/react-hook-form/react-hook-form"
          data-size="large"
          data-show-count
          aria-label="Star react-hook-form on GitHub"
        />
      </div>

      {showMenu && (
        <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
          <nav
            className={clsx(styles.actionButtonGroup, styles.mobileMenu)}
            style={{
              bottom: 43,
            }}
          >
            <Link
              className={router.pathname == "/faqs" ? "active" : ""}
              href="/faqs"
            >
              <div className={styles.iconWrapper}>
                <div className="eye icon" />
              </div>
              <span>{nav.faqs}</span>
            </Link>

            <Link
              className={
                router.pathname == "/resources/articles" ? "active" : ""
              }
              href="/resources/articles"
            >
              <div className={styles.iconWrapper}>
                <div className="icon tag" />
              </div>
              <span>Articles</span>
            </Link>
            <Link
              className={router.pathname == "/resources/videos" ? "active" : ""}
              href="/resources/videos"
            >
              <div className={styles.iconWrapper}>
                <div className="icon tag" />
              </div>
              <span>Videos</span>
            </Link>
            <Link
              className={
                router.pathname == "/resources/newsletters" ? "active" : ""
              }
              href="/resources/newsletters"
            >
              <div className={styles.iconWrapper}>
                <div className="icon tag" />
              </div>
              <span>Newsletters</span>
            </Link>
            <Link
              className={
                router.pathname == "/resources/3rd-party-bindings"
                  ? "active"
                  : ""
              }
              href="/resources/3rd-party-bindings"
            >
              <div className={styles.iconWrapper}>
                <div className="icon tag" />
              </div>
              <span>3rd-Party-Bindings</span>
            </Link>

            <Link
              className={router.asPath == "/dev-tools" ? "active" : ""}
              href="/dev-tools"
            >
              <div className={styles.iconWrapper}>
                <div className="laptop icon" />
              </div>
              <span>DevTools</span>
            </Link>
          </nav>
        </Animate>
      )}

      <div className={clsx(styles.actionButtonWrapper)}>
        <nav className={clsx(styles.actionButtonGroup)}>
          <Link className={router.pathname == "/" ? "active" : ""} href="/">
            <div className={styles.iconWrapper}>
              <div className="flag icon" />
            </div>
            <span>{nav.home}</span>
          </Link>
          <Link
            className={router.asPath == "/get-started" ? "active" : ""}
            href="/get-started"
          >
            <div className={styles.iconWrapper}>
              <div className="icon shutdown" />
            </div>
            <span>{nav.getStarted}</span>
          </Link>
          <Link
            className={router.pathname == "/docs" ? "active" : ""}
            style={
              pathname.includes("/docs")
                ? {
                    borderBottom: "1px solid #bf1650",
                  }
                : {}
            }
            href="/docs"
          >
            <div className={styles.iconWrapper}>
              <div className="icon keyboard" />
            </div>
            <span>API</span>
          </Link>
          <Link className={router.asPath == "/ts" ? "active" : ""} href="/ts">
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

                  fontWeight: 600,
                }}
              >
                TS
              </span>
            </div>
            <span>TS</span>
          </Link>
          <Link
            className={router.asPath == "/advanced-usage" ? "active" : ""}
            href="/advanced-usage"
          >
            <div className={styles.iconWrapper}>
              <div className="icon search" />
            </div>
            <span>{nav.advanced}</span>
          </Link>
          <Link
            className={`desktopOnly ${
              router.asPath == "/faqs" ? "active" : ""
            }`}
            href="/faqs"
          >
            <div className={styles.iconWrapper}>
              <div className="eye icon" />
            </div>
            <span>{nav.faqs}</span>
          </Link>
          <span
            className="desktopOnly"
            style={
              pathname.includes("dev-tools") ||
              pathname.includes("form-builder")
                ? {
                    borderBottom: "1px solid #bf1650",
                  }
                : {}
            }
          >
            <span className={styles.tools}>
              <span
                style={{
                  position: "relative",
                  top: 2,
                }}
              >
                <span className={styles.menuExpandLink}>
                  {nav.tools.nav}{" "}
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
                    className={
                      router.pathname == "/form-builder" ? "active" : ""
                    }
                    href="/form-builder"
                  >
                    {nav.tools.formBuilder}
                  </Link>

                  <a
                    href="https://www.beekai.com/features/form-builder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkExternal}
                  >
                    <b>BEEKAI</b> Form Builder{" "}
                    <img
                      src="/images/open-link.svg"
                      alt="BEEKAI Form Builder"
                    />
                  </a>

                  <Link
                    className={router.pathname == "/dev-tools" ? "active" : ""}
                    href="/dev-tools"
                  >
                    {nav.tools.devTools}
                  </Link>
                </div>
              </div>
            </div>
          </span>

          <span
            className="desktopOnly"
            style={
              pathname.includes("resources")
                ? {
                    borderBottom: "1px solid #bf1650",
                  }
                : {}
            }
          >
            <span className={styles.tools}>
              <span
                style={{
                  position: "relative",
                  top: 2,
                }}
              >
                <span className={styles.menuExpandLink}>
                  {nav.resources}{" "}
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
                    className={
                      router.pathname == "/resources/articles" ? "active" : ""
                    }
                    href="/resources/articles"
                  >
                    Articles
                  </Link>{" "}
                  <Link
                    className={
                      router.pathname == "/resources/videos" ? "active" : ""
                    }
                    href="/resources/videos"
                  >
                    Videos
                  </Link>
                  <Link
                    className={
                      router.pathname == "/resources/newsletters"
                        ? "active"
                        : ""
                    }
                    href="/resources/newsletters"
                  >
                    Newsletters
                  </Link>
                  <Link
                    className={
                      router.pathname == "/resources/3rd-party-bindings"
                        ? "active"
                        : ""
                    }
                    href="/resources/3rd-party-bindings"
                  >
                    3rd Party Bindings
                  </Link>
                </div>
              </div>
            </div>
          </span>
          <Link
            className={clsx(
              styles.mobileNav,
              router.pathname == "/form-builder" ? "active" : ""
            )}
            href="/form-builder"
          >
            <div className={styles.iconWrapper}>
              <div className="edit icon" />
            </div>
            <span>{nav.builder}</span>
          </Link>
          <a
            href="https://github.com/react-hook-form/react-hook-form/releases"
            target="_blank"
            className="desktopOnly"
            rel="noreferrer noopener"
          >
            {nav.releases}
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className={styles.mobileOnly}
            href="#"
            onClick={(e) => {
              e.preventDefault()
              setShowMenu(!showMenu)
            }}
          >
            <div className={styles.iconWrapper}>
              <div className="icon more"></div>
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
