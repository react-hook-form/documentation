import React, { useState } from "react"
import generic from "../data/generic"

const ClipBoard = ({
  currentLanguage,
  className,
  onClick,
}: {
  onClick: () => void
  className?: string
  currentLanguage: string
}) => {
  const [copiedCode, setCopiedCode] = useState<boolean>(false)

  React.useEffect(() => {
    if (copiedCode) {
      setTimeout(() => {
        setCopiedCode(false)
      }, 3000)
    }
  }, [copiedCode])

  return (
    <button
      className={className}
      onClick={() => {
        onClick()
        setCopiedCode(true)
      }}
      aria-label={generic.copied[currentLanguage]}
    >
      {copiedCode
        ? generic.codeCopied[currentLanguage]
        : generic.copy[currentLanguage]}
    </button>
  )
}

export default ClipBoard
