import Link from "next/link"
import styles from "./V8Notice.module.css"

// API pages affected by a breaking change in the v8 beta, pointing at the
// matching section of /migrate-v7-to-v8. Keep in sync with that guide.
const V8_CHANGES: Record<string, { summary: string; anchor: string }> = {
  "/docs/usecontroller": {
    summary: "field.ref is the actual DOM element instead of a partial proxy.",
    anchor: "InputRef",
  },
  "/docs/usecontroller/controller": {
    summary: "field.ref is the actual DOM element instead of a partial proxy.",
    anchor: "InputRef",
  },
  "/docs/usefieldarray": {
    summary:
      "fields[].id is renamed to key, and the keyName option is removed.",
    anchor: "useFieldArray",
  },
  "/docs/usewatch/watch": {
    summary: "The names prop is renamed to name.",
    anchor: "WatchComponent",
  },
  "/docs/useform/watch": {
    summary:
      "The WatchObserver type for the callback overload is no longer exported. Prefer subscribe.",
    anchor: "watchCallback",
  },
  "/docs/useformcontext": {
    summary:
      "With the React Compiler, read formState in nested components through useFormState.",
    anchor: "ReactCompiler",
  },
}

export default function V8Notice({ slug }: { slug: string }) {
  const change = V8_CHANGES[slug]
  if (!change) return null

  return (
    <aside className={styles.notice}>
      <span className={styles.badge}>v8 beta</span>
      <p>
        {change.summary}{" "}
        <Link href={`/migrate-v7-to-v8#${change.anchor}`}>
          Migration notes →
        </Link>
      </p>
    </aside>
  )
}
