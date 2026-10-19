import { useState } from "react"
import SegmentedControl from "./SegmentedControl"
import styles from "./IntroVideo.module.css"

export const LogoSvg = (
  <>
    <path d="M73.56,13.32H58.14a8.54,8.54,0,0,0-16.27,0H26.44a11,11,0,0,0-11,11V81.63a11,11,0,0,0,11,11H73.56a11,11,0,0,0,11-11V24.32A11,11,0,0,0,73.56,13.32Zm-30.92,2a1,1,0,0,0,1-.79,6.54,6.54,0,0,1,12.78,0,1,1,0,0,0,1,.79h5.38v6.55a3,3,0,0,1-3,3H40.25a3,3,0,0,1-3-3V15.32ZM82.56,81.63a9,9,0,0,1-9,9H26.44a9,9,0,0,1-9-9V24.32a9,9,0,0,1,9-9h8.81v6.55a5,5,0,0,0,5,5h19.5a5,5,0,0,0,5-5V15.32h8.81a9,9,0,0,1,9,9Z" />
    <path
      style={{ transform: "translateX(-25px)" }}
      d="M71.6,45.92H54a1,1,0,0,0,0,2H71.6a1,1,0,0,0,0-2Z"
    />
    <path d="M71.6,45.92H54a1,1,0,0,0,0,2H71.6a1,1,0,0,0,0-2Z" />
    <path
      style={{ transform: "translateX(-25px)" }}
      d="M71.1,69.49H53.45a1,1,0,1,0,0,2H71.1a1,1,0,0,0,0-2Z"
    />
    <path d="M71.1,69.49H53.45a1,1,0,1,0,0,2H71.1a1,1,0,0,0,0-2Z" />
  </>
)

const VIDEOS = {
  web: {
    label: "React Web",
    src: "https://www.youtube.com/embed/7ytK2qU9ac8?si=itv-Hocfih4pnRE4",
  },
  native: {
    label: "React Native",
    src: "https://www.youtube.com/embed/rIKMY5azC3A?si=fYwKNYewKAlv6hoW",
  },
}

export default function IntroVideo() {
  const [video, setVideo] = useState<keyof typeof VIDEOS>("web")

  return (
    <div className={styles.root}>
      <SegmentedControl
        className={styles.tabs}
        label="Select video"
        options={(Object.keys(VIDEOS) as (keyof typeof VIDEOS)[]).map(
          (key) => ({ value: key, label: VIDEOS[key].label })
        )}
        value={video}
        onChange={setVideo}
      />
      <div className={styles.frame}>
        <iframe
          key={video}
          src={VIDEOS[video].src}
          title={`${VIDEOS[video].label} tutorial video`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  )
}
