import { useEffect, useState } from "react"
import generic from "../data/generic"

const ClipBoard = ({
  className,
  onClick,
}: {
  onClick: () => void
  className?: string
}) => {
  const [copiedCode, setCopiedCode] = useState<boolean>(false)

  useEffect(() => {
    if (!copiedCode) {
      return
    }

    const timerId = setTimeout(() => {
      setCopiedCode(false)
    }, 3000)

    return () => clearTimeout(timerId)
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
