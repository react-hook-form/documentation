import { memo } from "react"
import { SimpleImg } from "react-simple-img"
import clsx from "clsx"
import home from "../data/home"
import HomeSection from "./HomeSection"
import styles from "./CodePerfCompareSection.module.css"

const RESULTS = [
  {
    label: "React Hook Form",
    mounts: 1,
    changes: 1,
    time: 1800,
    src: "/images/hookform.min.png",
    height: 163,
    alt: "React Hook Form performance",
  },
  {
    label: "Others",
    mounts: 6,
    changes: 1,
    time: 2070,
    src: "/images/formik.min.png",
    height: 230,
    alt: "Formik performance",
  },
  {
    label: "Others",
    mounts: 17,
    changes: 2,
    time: 2380,
    src: "/images/reduxform.min.png",
    height: 365,
    alt: "Redux Form performance",
  },
]

function CodePerfCompareSection({ isPlayRender }: { isPlayRender: boolean }) {
  return (
    <HomeSection
      eyebrow="Benchmarks"
      title={home.mount.title}
      lead={home.mount.description}
      wide
    >
      <div className={clsx(styles.list, isPlayRender && styles.visible)}>
        {RESULTS.map((result, index) => (
          <article
            key={result.src}
            className={clsx(styles.card, index === 0 && styles.winner)}
          >
            <div className={styles.stats}>
              <h3>
                {result.label}
                {index === 0 && <span className={styles.badge}>fastest</span>}
              </h3>
              <dl>
                <div>
                  <dt>{home.mount.totalMount}</dt>
                  <dd>{result.mounts}</dd>
                </div>
                <div>
                  <dt>{home.mount.totalChange}</dt>
                  <dd>{result.changes}</dd>
                </div>
                <div className={styles.time}>
                  <dt>{home.mount.totalTime}</dt>
                  <dd>{result.time}ms</dd>
                </div>
              </dl>
            </div>
            <div className={styles.shot}>
              <SimpleImg
                src={result.src}
                placeholder={false}
                height={result.height}
                alt={result.alt}
              />
            </div>
          </article>
        ))}
      </div>
    </HomeSection>
  )
}

export default memo(CodePerfCompareSection)
