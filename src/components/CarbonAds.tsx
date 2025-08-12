"use client"
import { useEffect, useRef, useState, useCallback } from "react"
import { usePathname } from "next/navigation"

const CARBON_SCRIPT_ID = "_carbonads_js"
const CARBON_SCRIPT_SRC =
  "https://cdn.carbonads.com/carbon.js?serve=CW7DTKQ7&placement=react-hook-formcom&format=cover"

// Persist mount state across SPA navigation (module-level, not per instance)
let hasMounted = false

export default function CarbonAds() {
  // --- Refs and State ---
  const containerRef = useRef<HTMLDivElement>(null)
  const debounceRef = useRef<NodeJS.Timeout | null>(null)
  const [fade, setFade] = useState(1)
  const [height, setHeight] = useState<number | null>(null)
  const pathname = usePathname()

  /**
   * Debounced reload of Carbon Ads script.
   * Removes existing ad/script, injects new script, and sets height after load.
   * Debounce prevents rapid reloads on fast route changes.
   */
  const reloadCarbonAds = useCallback(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      // Remove existing ad and script if present
      const carbon = containerRef.current?.querySelector("#carbonads")
      if (carbon) carbon.remove()
      const script = document.getElementById(CARBON_SCRIPT_ID)
      if (script) script.remove()

      // Inject new Carbon Ads script
      const newScript = document.createElement("script")
      newScript.id = CARBON_SCRIPT_ID
      newScript.async = true
      newScript.src = CARBON_SCRIPT_SRC
      newScript.type = "text/javascript"
      if (containerRef.current) {
        containerRef.current.appendChild(newScript)
      }

      // Try to set height after ad loads (poll for up to 2s)
      let heightSet = false
      const trySetHeight = () => {
        const carbon = containerRef.current?.querySelector(
          "#carbonads"
        ) as HTMLElement | null
        if (carbon && carbon.offsetHeight > 0) {
          setHeight(carbon.offsetHeight)
          heightSet = true
        }
      }
      let tries = 0
      const interval = setInterval(() => {
        trySetHeight()
        tries++
        if (heightSet || tries > 10) clearInterval(interval)
      }, 200)
    }, 100)
  }, [])

  // --- Initial Mount: Only load ad once ---
  useEffect(() => {
    // Only run on very first mount (SPA safe)
    if (!hasMounted) {
      reloadCarbonAds()
      hasMounted = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // --- Path Change: Reload ad, skip first render ---
  useEffect(() => {
    // Only reload on subsequent path changes
    if (hasMounted) {
      reloadCarbonAds()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  /**
   * On scroll, fade and shrink the ad container
   * Uses the actual #carbonads height as basis for smoothness.
   */
  useEffect(() => {
    function handleScroll() {
      const maxScroll = 200 // px after which it's fully hidden
      const scrollY = window.scrollY
      const ratio = Math.max(0, 1 - scrollY / maxScroll)
      setFade(ratio)
      const carbon = containerRef.current?.querySelector(
        "#carbonads"
      ) as HTMLElement | null
      const baseHeight = carbon ? carbon.offsetHeight : (height ?? 120)
      setHeight(Math.max(0, ratio * baseHeight))
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [height])

  // --- Render ---
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
