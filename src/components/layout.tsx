import { Animate } from "react-simple-animate"
import { getEditLink } from "./logic/getEditLink"
import Nav from "./Nav"
import { useEffect, useState, ReactNode } from "react"
import { useRouter } from "next/router"

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const location = router

  const [show, setShow] = useState(false)
  const scrollHandler = () => {
    if (window.scrollY > 75) {
      setShow(true)
    } else {
      setShow(false)
    }
  }
  const editLink = getEditLink(location?.pathname)

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler)

    return () => window.removeEventListener("scroll", scrollHandler)
  }, [])

  return (
    <>
      {/*<div className="banner">*/}
      {/*  <p>*/}
      {/*    Next-gen <strong>form building</strong> platform with code generation.*/}
      {/*    <a*/}
      {/*      href="https://beekai.com/"*/}
      {/*      title="Learn more about BEEKAI form builder"*/}
      {/*      target="_blank"*/}
      {/*      rel="noreferrer"*/}
      {/*    >*/}
      {/*      Find out more*/}
      {/*    </a>*/}
      {/*  </p>*/}
      {/*</div>*/}
      <a className="skip-main" href="#main">
        Skip to content
      </a>
      <Nav />
      {children}
      <Animate
        play={show}
        start={{ opacity: 0, visibility: "hidden" }}
        end={{ opacity: 1, visibility: "visible" }}
      >
        {editLink && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="editPage"
            aria-label="Edit Page"
            href={editLink}
          >
            Edit
          </a>
        )}
        <button
          className="scrollToTop"
          aria-label="Scroll back to top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }
        >
          ▲
        </button>
      </Animate>
    </>
  )
}

export default Layout
