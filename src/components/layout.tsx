import * as React from 'react'
import Nav from './Nav'

import './layout.css'

const Layout = props => {
  return (
    <>
      {props.location && props.location.pathname !== '/' && <Nav pathname={props.location.pathname} />}
      {props.children}
    </>
  )
}

export default Layout
