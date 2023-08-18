import {
  FunctionComponent,
  RefObject,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react"

interface IGeneralObserverProps {
  /** React Children */
  children: ReactNode
  placeholder?: ReactNode
  /** Fires when IntersectionObserver enters viewport */
  onEnter?: (id?: string) => void
}

export const GeneralObserver: FunctionComponent<IGeneralObserverProps> = ({
  children,
  onEnter,
  placeholder,
}) => {
  const ref = useRef<HTMLElement>(null)
  const [isChildVisible, setIsChildVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsChildVisible(true)
          onEnter && onEnter()
        }
      },
      {
        rootMargin: "0px 0px",
        threshold: [1],
      }
    )
    if (ref && ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [ref, onEnter])

  let slot = children

  if (placeholder && isChildVisible) {
    slot = placeholder
  }

  return (
    <div ref={ref as RefObject<HTMLDivElement>} data-testid="general-observer">
      {slot}
    </div>
  )
}
