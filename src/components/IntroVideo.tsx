import { useState } from "react"
import SegmentedControl from "./SegmentedControl"
import styles from "./IntroVideo.module.css"

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
