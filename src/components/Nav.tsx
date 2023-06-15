import { useState, useEffect } from "react"
import Link from "next/link"
import GitHubButton from "react-github-btn"
import nav from "../data/nav"
import Toggle from "./Toggle"
import { Animate } from "react-simple-animate"
import Search from "./Search"
import styles from "./Nav.module.css"
import colors from "../styles/colors"
import useWindowSize from "./utils/useWindowSize"
import { LARGE_SCREEN } from "../styles/breakpoints"
import { useRouter } from "next/router"
import clsx from "clsx"

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
    } else {
      if (isFocusOnSearch) {
        setLang(false)
      } else if (!isFocusOnSearch) {
        setLang(true)
      }
    }
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
            <svg viewBox="0 0 245 240">
              <path d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z" />
              <path d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z" />
            </svg>
          </a>
        </span>

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
                <div className="tag icon" />
              </div>
              <span>Articles</span>
            </Link>
            <Link
              className={router.pathname == "/resources/videos" ? "active" : ""}
              href="/resources/videos"
            >
              <div className={styles.iconWrapper}>
                <div className="tag icon" />
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
                <div className="tag icon" />
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
                <div className="tag icon" />
              </div>
              <span>3rd-Party-Bindings</span>
            </Link>

            <Link
              className={router.pathname == "/dev-tools" ? "active" : ""}
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
            className={router.pathname == "/get-started" ? "active" : ""}
            href="/get-started"
          >
            <div className={styles.iconWrapper}>
              <div className="shutdown icon" />
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
              <div className="keyboard icon" />
            </div>
            <span>API</span>
          </Link>
          <Link className={router.pathname == "/ts" ? "active" : ""} href="/ts">
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
            className={router.pathname == "/advanced-usage" ? "active" : ""}
            href="/advanced-usage"
          >
            <div className={styles.iconWrapper}>
              <div className="search icon" />
            </div>
            <span>{nav.advanced}</span>
          </Link>
          <Link
            className={router.pathname == "/faqs" ? "active" : ""}
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

          <span className="desktopOnly">
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
