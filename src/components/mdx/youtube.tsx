import { FunctionComponent } from "react"

import { GeneralObserver } from "../general-observer"

interface YouTubeProps {
  /** YouTube id */
  youTubeId: string

  /** Auto play the video */
  autoPlay?: boolean

  /** No Cookie option */
  noCookie?: boolean
}

export const YouTube: FunctionComponent<YouTubeProps> = (
  props: YouTubeProps
) => {
  const { youTubeId, autoPlay = false, noCookie = false } = props

  const provider = noCookie
    ? "https://www.youtube-nocookie.com"
    : "https://www.youtube.com"

  const src = `${provider}/embed/${youTubeId}?&autoplay=${autoPlay.toString()}`

  return (
    <GeneralObserver>
      <iframe
        data-testid="youtube"
        title={`youTube-${youTubeId}`}
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        width="100%"
        height="500"
      />
    </GeneralObserver>
  )
}
