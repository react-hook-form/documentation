import { FunctionComponent } from "react"

import { GeneralObserver } from "../general-observer"

export interface IYouTubeProps {
  /** YouTube id */
  youTubeId?: string
  /** YouTube Playlist id */
  youTubePlaylistId?: string
  /** Aspect ratio of YouTube video */
  aspectRatio?: "1:1" | "16:9" | "4:3" | "3:2" | "8:5"
  /** Skip to a time in the video */
  skipTo?: {
    h: number
    m: number
    s: number
  }
  /** Auto play the video */
  autoPlay?: boolean
  /** No Cookie option */
  noCookie?: boolean
}

export const YouTube: FunctionComponent<IYouTubeProps> = ({
  youTubeId,
  youTubePlaylistId,
  autoPlay = false,
  skipTo = { h: 0, m: 0, s: 0 },
  noCookie = false,
}: IYouTubeProps) => {
  const { h, m, s } = skipTo

  const tH = h * 60
  const tM = m * 60

  const startTime = tH + tM + s

  const provider = noCookie
    ? "https://www.youtube-nocookie.com"
    : "https://www.youtube.com"
  const baseUrl = `${provider}/embed/`
  const src = `${baseUrl}${
    youTubeId
      ? `${youTubeId}?&autoplay=${autoPlay}&start=${startTime}`
      : `&videoseries?list=${youTubePlaylistId}`
  }`

  return (
    <GeneralObserver>
      <iframe
        data-testid="youtube"
        title={`youTube-${youTubeId ? youTubeId : youTubePlaylistId}`}
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
