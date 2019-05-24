import * as React from 'react'
import ButtonGroup from './ButtonGroup'

import './layout.css'

const Layout = props => {
  return (
    <>
      {props.location && props.location.pathname !== '/' && <ButtonGroup pathname={props.location.pathname} />}
      <main>{props.children}</main>
    </>
  )
}

export default Layout
