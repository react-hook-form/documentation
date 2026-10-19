import { memo, useState } from "react"
import clsx from "clsx"
import home from "../data/home"
import HomeSection from "./HomeSection"
import styles from "./IsolateRender.module.css"

const CHILDREN = ["Child Component A", "Child Component B", "Child Component C"]

function ChildRow({ label, renders }: { label: string; renders: number }) {
  return (
    <div
      className={clsx(
        styles.child,
        renders > 0 && (renders % 2 ? styles.flashA : styles.flashB)
      )}
    >
      <span>{label}</span>
      <span className={clsx(styles.count, renders > 0 && styles.countHot)}>
        {renders} re-render{renders === 1 ? "" : "s"}
      </span>
    </div>
  )
}

function Panel({
  title,
  tag,
  childRenders,
  onType,
  highlight,
}: {
  title: string
  tag: string
  childRenders: number
  onType: () => void
  highlight?: boolean
}) {
  const [keystrokes, setKeystrokes] = useState(0)

  return (
    <form
      className={clsx(styles.panel, highlight && styles.panelHighlight)}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className={styles.panelHeader}>
        <h3>{title}</h3>
        <span className={styles.tag}>{tag}</span>
      </div>
      <input
        className={clsx(
          styles.input,
          keystrokes > 0 && (keystrokes % 2 ? styles.flashA : styles.flashB)
        )}
        aria-label={`${title} re-render demo`}
        placeholder="Type here to see the result…"
        onChange={() => {
          setKeystrokes((k) => k + 1)
          onType()
        }}
      />
      {CHILDREN.map((label) => (
        <ChildRow key={label} label={label} renders={childRenders} />
      ))}
    </form>
  )
}

function IsolateRender({ isIsolatePlay }: { isIsolatePlay: boolean }) {
  const [controlledRenders, setControlledRenders] = useState(0)

  return (
    <HomeSection
      id="isolate"
      eyebrow="Performance"
      title={home.isolateRender.title}
      lead={home.isolateRender.description}
    >
      <div className={clsx(styles.compare, isIsolatePlay && styles.visible)}>
        <Panel
          title="React Hook Form"
          tag="uncontrolled"
          childRenders={0}
          onType={() => {}}
          highlight
        />
        <div className={styles.vs} aria-hidden>
          VS
        </div>
        <Panel
          title="Controlled Form"
          tag="useState"
          childRenders={controlledRenders}
          onType={() => setControlledRenders((n) => n + 1)}
        />
      </div>
    </HomeSection>
  )
}

export default memo(IsolateRender)
