"use client"
import { useEffect, useRef } from "react"

export const CARBON_SCRIPT_ID = "_carbonads_js"
const CARBON_SCRIPT_SRC =
  "https://cdn.carbonads.com/carbon.js?serve=CW7DTKQ7&placement=react-hook-formcom&format=cover"

export function CarbonAds({ id }: { id: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function injectScript() {
      if (document.getElementById(id)) return

      const script = document.createElement("script")
      script.id = id
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

    return
  }, [id])

  return <div className="carbonAdsContainer" ref={containerRef} />
}
