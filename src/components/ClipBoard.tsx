import { useRef, useEffect, useState } from "react"
import generic from "../data/generic"

const ClipBoard = ({
  className,
  onClick,
}: {
  onClick: () => void
  className?: string
}) => {
  const [copiedCode, setCopiedCode] = useState<boolean>(false)
  const timer = useRef(null)

  useEffect(() => {
    if (copiedCode) {
      timer.current = setTimeout(() => {
        setCopiedCode(false)
      }, 3000)
    }

    return () => clearTimeout(timer.current)
  }, [copiedCode])

  return (
    <button
      className={className}
      onClick={() => {
        onClick()
        setCopiedCode(true)
      }}
      aria-label={generic.copied}
    >
      {copiedCode ? generic.codeCopied : generic.copy}
    </button>
  )
}

export default ClipBoard
