import { Animate } from "react-simple-animate"
import { getEditLink } from "./logic/getEditLink"
import Nav from "./Nav"
import { useEffect, useState, ReactNode } from "react"
import { useRouter } from "next/router"
import styles from "./PageActions.module.css"

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter()

  const [show, setShow] = useState(false)

  const scrollHandler = () => {
    if (window.scrollY > 75) {
      setShow(true)
    } else {
      setShow(false)
    }
  }
  const editLink = getEditLink(router.asPath.split("#")[0])

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, { passive: true })
    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [])

  return (
    <>
      <a className="skip-main" href="#main">
        Skip to content
      </a>
      <Nav />
      <div
        key={
          router.asPath.split("#")[0].startsWith("/docs/")
            ? "docs"
            : router.asPath.split("#")[0]
        }
        className={
          router.asPath.split("#")[0].startsWith("/docs/")
            ? ""
            : "pageTransition"
        }
      >
        {children}
      </div>
      <Animate
        play={show}
        start={{ opacity: 0, visibility: "hidden" }}
        end={{ opacity: 1, visibility: "visible" }}
      >
        <div className={styles.actions}>
          {editLink && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.action}
              aria-label="Edit this page on GitHub"
              title="Edit this page on GitHub"
              href={editLink}
            >
              <svg viewBox="0 0 24 24" aria-hidden>
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
              </svg>
            </a>
          )}
          <button
            className={styles.action}
            aria-label="Scroll back to top"
            title="Back to top"
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              })
            }}
          >
            <svg viewBox="0 0 24 24" aria-hidden>
              <path d="M12 19V5" />
              <path d="M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </Animate>
    </>
  )
}

export default Layout
