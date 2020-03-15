import React from "react"

export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <script
      async
      type="text/javascript"
      src="//cdn.carbonads.com/carbon.js?serve=CE7DKK3Y&placement=react-hook-formcom"
      id="_carbonads_js"
    ></script>,
  ])
}
