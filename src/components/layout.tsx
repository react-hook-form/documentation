import * as React from "react"
import styled from "styled-components"
import { Animate } from "react-simple-animate"
import Nav from "./Nav"
import colors from "../styles/colors"
import "./layout.css"

const ScrollTop = styled.button`
  display: none;

  @media (min-width: 768px) {
    display: block;
    background: ${colors.primary};
    position: fixed;
    right: 30px;
    color: white;
    bottom: 30px;
    height: 40px;
    width: 40px;
    border-radius: 5px;
  }
`

const Layout = (props: {
  children: any
  location?: {
    search: string
    pathname: string
  }
}) => {
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 75) {
        setShow(true)
      } else {
        setShow(false)
      }
    })
  }, [])

  return (
    <>
      {props.location && props.location.pathname !== "/" && (
        <Nav pathname={props.location.pathname} />
      )}
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
