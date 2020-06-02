import * as React from "react"
import { Animate } from "react-simple-animate"
import Prism from "prismjs"
import { useStateMachine } from "little-state-machine"
import Nav from "./Nav"
import "./layout.css"

const Layout = (props: {
  children: any
  location?: {
    search: string
    pathname: string
  }
  defaultLang: string
}) => {
  const { state } = useStateMachine()
  const lightMode = state?.setting?.lightMode
  const [show, setShow] = React.useState(false)
  const scrollHandler = () => {
    if (window.scrollY > 75) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", scrollHandler)

    if (lightMode) {
      document.querySelector("body").classList.add("light")
    } else {
      document.querySelector("body").classList.remove("light")
    }

    Prism.highlightAll()
    return () => window.removeEventListener("scroll", scrollHandler)
  }, [lightMode])

  return (
    <>
      <div style={{ textAlign: "center", margin: "20px 0 20px" }}>
        Black Lives Matter.{" "}
        <a
          href="https://support.eji.org/give/153413/#!/donation/checkout"
          target="_blank"
        >
          Support the Equal Justice Initiative.
        </a>
      </div>
      <a className="skip-main" href="#main">
        Skip to content
      </a>
      <Nav defaultLang={props.defaultLang} />
      {props.children}
      <Animate play={show} start={{ opacity: 0 }} end={{ opacity: 1 }}>
        <button
          className="scrollToTop"
          aria-label="Scroll back to top"
          onClick={() => window.scrollTo(0, 0)}
        >
          ▲
        </button>
      </Animate>
    </>
  )
}

export default Layout
