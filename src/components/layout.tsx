import * as React from "react"
import { Animate } from "react-simple-animate"
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

    return () => window.removeEventListener("scroll", scrollHandler)
  }, [lightMode])

  return (
    <>
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
