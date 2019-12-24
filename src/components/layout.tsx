import * as React from "react"
import styled from "styled-components"
import { Animate } from "react-simple-animate"
import Nav from "./Nav"
import colors from "../styles/colors"
import "./layout.css"
import breakpoints from "../styles/breakpoints"

const ScrollTop = styled.button`
  display: none;

  &:hover {
    border-color: ${colors.secondary};
  }

  @media ${breakpoints.fromMediumScreen} {
    display: block;
    background: ${colors.primary};
    position: fixed;
    right: 30px;
    color: white;
    bottom: 30px;
    height: 40px;
    width: 40px;
    z-index: 10;
    border-radius: 5px;
  }
`

const Layout = (props: {
  children: any
  location?: {
    search: string
    pathname: string
  }
  defaultLang: string
}) => {
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

    return () => window.removeEventListener("scroll", scrollHandler)
  }, [])

  return (
    <>
      <a className="skip-main" href="#main">
        Skip to content
      </a>
      <Nav defaultLang={props.defaultLang} />
      {props.children}
      <Animate play={show} start={{ opacity: 0 }} end={{ opacity: 1 }}>
        <ScrollTop
          aria-label="Scroll back to top"
          onClick={() => window.scrollTo(0, 0)}
        >
          ▲
        </ScrollTop>
      </Animate>
    </>
  )
}

export default Layout
