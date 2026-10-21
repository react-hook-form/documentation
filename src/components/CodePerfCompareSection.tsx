import { memo, type CSSProperties } from "react"
import clsx from "clsx"
import home from "../data/home"
import HomeSection from "./HomeSection"
import styles from "./CodePerfCompareSection.module.css"

const RESULTS = [
  { label: "React Hook Form", mounts: 1, changes: 1, time: 1800 },
  { label: "Others", mounts: 6, changes: 1, time: 2070 },
]

const SLOWEST = Math.max(...RESULTS.map((result) => result.time))

const plural = (count: number, word: string) =>
  count === 1 ? word : `${word}s`

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
            key={result.mounts}
            className={clsx(styles.row, index === 0 && styles.winner)}
            // Timings scale with the result, so slower libraries finish later.
            style={{ "--speed": result.time / SLOWEST } as CSSProperties}
          >
            <div className={styles.stats}>
              <h3>
                {result.label}
                {index === 0 && <span className={styles.badge}>fastest</span>}
              </h3>
              <dl>
                <div>
                  <dt>{plural(result.mounts, home.mount.totalMount)}</dt>
                  <dd>{result.mounts}</dd>
                </div>
                <div>
                  <dt>{plural(result.changes, home.mount.totalChange)}</dt>
                  <dd>{result.changes}</dd>
                </div>
                <div className={styles.time}>
                  <dt>{home.mount.totalTime}</dt>
                  <dd>
                    <span
                      className={styles.count}
                      data-to={result.time}
                      style={{ "--to": result.time } as CSSProperties}
                      aria-hidden
                    />
                    <span className={styles.srOnly}>{result.time}ms</span>
                  </dd>
                </div>
              </dl>
            </div>

            {/* A flame chart of the mount: one bar per component mounted. */}
            <div
              className={styles.chart}
              style={{ "--n": result.mounts } as CSSProperties}
              aria-hidden
            >
              {Array.from({ length: result.mounts }, (_, i) => (
                <span
                  key={i}
                  className={styles.bar}
                  style={{ "--i": i } as CSSProperties}
                />
              ))}
            </div>
          </article>
        ))}
      </div>
    </HomeSection>
  )
}

export default memo(CodePerfCompareSection)
