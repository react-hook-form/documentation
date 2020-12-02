import * as React from "react"
import { Animate } from "react-simple-animate"
import { getEditLink } from "./logic/getEditLink"
import { useStateMachine } from "little-state-machine"
import Nav from "./Nav"
import { updateSetting } from "../actions/settingActions"
import "./layout.css"

const Layout = (props: {
  children: any
  location?: {
    search: string
    pathname: string
  }
  defaultLang: string
}) => {
  const {
    actions,
    state,
    state: { language },
  } = useStateMachine({ updateSetting })
  const { currentLanguage } =
    language && language.currentLanguage ? language : { currentLanguage: "en" }
  const lightMode = state?.setting?.lightMode
  const [show, setShow] = React.useState(false)
  const scrollHandler = () => {
    if (window.scrollY > 75) {
      setShow(true)
    } else {
      setShow(false)
    }
  }
  const editLink = getEditLink(currentLanguage, props.location?.pathname)

  React.useEffect(() => {
    window.addEventListener("scroll", scrollHandler)

    if (lightMode === null && window.matchMedia) {
      actions.updateSetting({
        lightMode: window.matchMedia("(prefers-color-scheme: light)").matches,
      })
    }

    return () => window.removeEventListener("scroll", scrollHandler)
  }, [])

  if (lightMode) {
    document.querySelector("body").classList.add("light")
  } else {
    document.querySelector("body").classList.remove("light")
  }

  return (
    <>
      <a className="skip-main" href="#main">
        Skip to content
      </a>
      <Nav defaultLang={props.defaultLang} />
      {props.children}
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
          onClick={() => window.scrollTo(0, 0)}
        >
          ▲
        </button>
      </Animate>
    </>
  )
}

export default Layout
