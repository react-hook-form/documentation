"use client"
import { useEffect, useRef } from "react"

const CARBON_SCRIPT_ID = "_carbonads_js"
const CARBON_SCRIPT_SRC =
  "https://cdn.carbonads.com/carbon.js?serve=CW7DTKQ7&placement=react-hook-formcom&format=cover"

export default function CarbonAds() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function injectScript() {
      if (document.getElementById(CARBON_SCRIPT_ID)) return

      const script = document.createElement("script")
      script.id = CARBON_SCRIPT_ID
      script.async = true
      script.src = CARBON_SCRIPT_SRC
      script.type = "text/javascript"

      if (containerRef.current) {
        containerRef.current.appendChild(script)
      }
    }

    if (document.readyState === "complete") {
      injectScript()
    } else {
      window.addEventListener("load", injectScript)
      return () => window.removeEventListener("load", injectScript)
    }
  }, [])

  return <div className="carbonAdsContainer" ref={containerRef} />
}
