"use client"
import { useEffect, useRef, useState } from "react"

const CARBON_SCRIPT_ID = "_carbonads_js"
const CARBON_SCRIPT_SRC =
  "https://cdn.carbonads.com/carbon.js?serve=CW7DTKQ7&placement=react-hook-formcom&format=cover"

export default function CarbonAds() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [fade, setFade] = useState(1)
  const [height, setHeight] = useState<number | null>(null)

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

    function setInitialHeight() {
      // Wait for the ad to load, then set the height
      const carbon = containerRef.current?.querySelector(
        "#carbonads"
      ) as HTMLElement | null
      if (carbon) {
        setHeight(carbon.offsetHeight)
      }
    }

    if (document.readyState === "complete") {
      injectScript()
      setTimeout(setInitialHeight, 800) // allow ad to load
    } else {
      window.addEventListener("load", () => {
        injectScript()
        setTimeout(setInitialHeight, 800)
      })
      return () => window.removeEventListener("load", injectScript)
    }
  }, [])

  // Handle scroll to fade out and reduce height
  useEffect(() => {
    function handleScroll() {
      const maxScroll = 200 // px after which it's fully hidden
      const scrollY = window.scrollY
      const ratio = Math.max(0, 1 - scrollY / maxScroll)
      setFade(ratio)
      // Use the actual #carbonads height as basis
      const carbon = containerRef.current?.querySelector(
        "#carbonads"
      ) as HTMLElement | null
      const baseHeight = carbon ? carbon.offsetHeight : (height ?? 120)
      setHeight(Math.max(0, ratio * baseHeight))
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [height])

  return (
    <div
      id="carbonAdsContainer"
      className="carbonAdsContainer"
      ref={containerRef}
      style={{
        opacity: fade,
        height: height !== null ? `${height}px` : undefined,
        transition:
          "opacity 0.4s cubic-bezier(.4,0,.2,1), height 0.6s cubic-bezier(.4,0,.2,1)",
        overflow: "hidden",
        willChange: "opacity, height",
      }}
    />
  )
}
