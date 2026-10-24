/**
 * Generates clean Markdown copies of every doc page plus /llms.txt and
 * /llms-full.txt for AI agents and other non-browser readers.
 *
 * Runs after `contentlayer2 build` and writes into `public/`, so the files
 * are served statically (e.g. /docs/useform.md) with no client-side JS.
 *
 * @see https://llmstxt.org
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const SITE_URL = "https://react-hook-form.com"
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..")
const PUBLIC_DIR = join(ROOT, "public")
const INDEX = join(ROOT, ".contentlayer/generated/Doc/_index.json")

// Mirrors the sidebar order in the site navigation.
const SECTIONS = [
  ["getStartedLinks", "Get Started"],
  ["integrationLinks", "Integrations"],
  ["apiLinks", "API Reference"],
  ["tsLinks", "TypeScript"],
  ["advancedLinks", "Advanced"],
  ["faqLinks", "FAQs"],
  ["migrateV7ToV8Links", "Migrate to v8"],
]

const ADMONITION_LABELS = {
  important: "Important",
  info: "Info",
  warning: "Warning",
  danger: "Danger",
  tip: "Tip",
}

const escapeHtml = (text) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

const absolute = (href) => (href.startsWith("/") ? `${SITE_URL}${href}` : href)

// `{value: 'number', message: 'string'}` -> `{ value: number, message: string }`
const prettyObject = (source) =>
  `{ ${source
    .replace(/^\{|\}$/g, "")
    .split(",")
    .map((pair) =>
      pair
        .replace(/['"]/g, "")
        .replace(/\s*:\s*/, ": ")
        .trim()
    )
    .join(", ")} }`

/** Rewrites the MDX-only syntax on a line that is not inside a code fence. */
function transformInline(line) {
  // A literal `|` would split a table cell, so only unescape outside tables.
  const isTableRow = line.trimStart().startsWith("|")
  return (
    line
      // `## \</> \`register:\`` -> `## \`register:\``
      .replace(/\\<\/>\s*/g, "")
      // Custom heading ids: `### Props {#props}`
      .replace(/\s*\{#[\w-]+\}\s*$/, "")
      .replace(/<Since version="([^"]+)"\s*\/>/g, "_(since v$1)_")
      .replace(/<PrettyObject value=\{(\{[^}]*\})\}\s*\/>/g, (_, obj) =>
        prettyObject(obj)
      )
      .replace(
        /<CodeArea[^>]*rawData=(?:\{`([\s\S]*?)`\}|"([^"]*)")\s*\/>/g,
        (_, template, plain) => {
          const body = escapeHtml((template ?? plain).replace(/\\n/g, "\n"))
            .split("\n")
            .join("<br/>")
          return `<pre><code>${body}</code></pre>`
        }
      )
      .replace(/<CodeSandbox url="([^"]+)"\s*\/>/g, "[CodeSandbox]($1)")
      .replace(/<Popup[^>]*message="([^"]+)"[^>]*\/>/g, "($1)")
      .replace(
        /(\S?)<TypeText(?: pre)?>([\s\S]*?)<\/TypeText>/g,
        (_, before, type) => {
          // Types often follow a name with no space, e.g. `required`<TypeText>.
          const gap = before && before !== " " ? `${before} ` : before
          const text = isTableRow ? type : type.replace(/\\\|/g, "|")
          // Keep markdown links and existing code spans as they are.
          const plain =
            text.includes("](") || text.includes("<") || text.startsWith("`")
          return gap + (plain ? text.trim() : `\`${text.trim()}\``)
        }
      )
      // Root-relative links -> absolute so they survive copy/paste.
      .replace(/\]\((\/[^)\s]*)\)/g, (_, href) => `](${absolute(href)})`)
  )
}

/** Converts a doc's raw MDX body into portable GitHub-flavored Markdown. */
export function mdxToMarkdown(raw) {
  const lines = raw.split("\n")
  const out = []
  let fence = null
  let tabLabels = null
  let tabIndex = 0
  let quoteDepth = 0
  let jsxBlock = null
  let nextStep = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const quote = "> ".repeat(quoteDepth)

    if (fence) {
      out.push(quote + line)
      if (line.trim() === fence) fence = null
      continue
    }

    if (/^<\/?NextSteps>\s*$/.test(line)) continue

    const nextStepOpen = line.match(
      /^\s*<NextStep href="([^"]+)" title="([^"]+)">/
    )
    if (nextStepOpen) {
      const [, href, title] = nextStepOpen
      out.push(`${quote}- [${title}](${absolute(href)})`)
      nextStep = true
      continue
    }
    if (/^\s*<\/NextStep>/.test(line)) {
      nextStep = false
      continue
    }
    if (nextStep && line.trim()) {
      out.push(`${quote}  ${transformInline(line.trim())}`)
      continue
    }

    // Multi-line JSX elements such as <SelectNav options={[...]} />
    if (jsxBlock !== null || /^<(SelectNav|TsSelectNav)\b/.test(line)) {
      jsxBlock = (jsxBlock ?? "") + line + "\n"
      if (!/\/>\s*$/.test(line)) continue
      const links = [
        ...jsxBlock.matchAll(/label:\s*"([^"]+)",\s*value:\s*"([^"]+)"/g),
      ].map(([, label, href]) => `[${label}](${absolute(href)})`)
      if (links.length) out.push(`Related: ${links.join(" · ")}`)
      jsxBlock = null
      continue
    }

    const fenceOpen = line.match(/^(\s*)(`{3,})(\w*)(.*)$/)
    if (fenceOpen) {
      const [, indent, ticks, lang, meta] = fenceOpen
      if (tabLabels?.[tabIndex]) {
        out.push(`${quote}**${tabLabels[tabIndex++]}**`, quote.trimEnd())
      }
      const sandbox = meta.match(/sandbox="([^"]+)"/)?.[1]
      if (sandbox) {
        const name = sandbox.includes("expo") ? "Expo Snack" : "CodeSandbox"
        out.push(`${quote}[Open in ${name}](${sandbox})`, quote.trimEnd())
      }
      out.push(`${quote}${indent}${ticks}${lang}`)
      fence = `${indent.trim()}${ticks}`
      continue
    }

    const tabs = line.match(/^<TabGroup buttonLabels=\{\[(.*)\]\}\s*>/)
    if (tabs) {
      tabLabels = [...tabs[1].matchAll(/"([^"]+)"/g)].map((m) => m[1])
      tabIndex = 0
      continue
    }
    if (/^<\/TabGroup>/.test(line)) {
      tabLabels = null
      continue
    }

    const admonition = line.match(
      /^<Admonition type="(\w+)"(?: title="([^"]+)")?\s*>/
    )
    if (admonition) {
      const [, type, title] = admonition
      const label = ADMONITION_LABELS[type] ?? type
      out.push(`${quote}> **${title ? `${label}: ${title}` : label}**`)
      quoteDepth++
      continue
    }
    if (/^<\/Admonition>/.test(line)) {
      quoteDepth = Math.max(0, quoteDepth - 1)
      continue
    }

    // Troubleshooting cards: keep the heading, label the Why/Fix blocks.
    if (/^<\/?(Troubleshoot|Why|Fix)>\s*$/.test(line)) {
      if (line.startsWith("<Why>")) out.push(`${quote}**Why it happens:**`)
      if (line.startsWith("<Fix>")) out.push(`${quote}**Fix:**`)
      continue
    }

    const youtube = line.match(/^<YouTube youTubeId="([^"]+)"\s*\/>/)
    if (youtube) {
      out.push(
        `${quote}[Watch on YouTube](https://www.youtube.com/watch?v=${youtube[1]})`
      )
      continue
    }

    out.push(
      (quote + transformInline(line)).replace(/^(> )+$/, (q) => q.trimEnd())
    )
  }

  return out
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

const outputPath = (slug) => join(PUBLIC_DIR, `${slug}.md`)

function renderPage(doc) {
  const description = doc.metaDescription ?? doc.description
  return [
    `# ${doc.title}`,
    "",
    `> ${description}`,
    "",
    `Source: ${SITE_URL}${doc.slug}`,
    "",
    mdxToMarkdown(doc.body.raw),
    "",
  ].join("\n")
}

function renderLlmsTxt(docs) {
  const sections = SECTIONS.map(([sidebar, heading]) => {
    const items = docs
      .filter((doc) => doc.sidebar === sidebar)
      .map(
        (doc) =>
          `- [${doc.title}](${SITE_URL}${doc.slug}.md): ${doc.metaDescription ?? doc.description}`
      )
    return items.length ? `## ${heading}\n\n${items.join("\n")}` : ""
  }).filter(Boolean)

  return `# React Hook Form

> Performant, flexible and extensible forms for React with easy-to-use validation. These docs describe React Hook Form v7 (the latest stable release); v8 is in beta and its changes are covered in the migration guide.

- Package: [react-hook-form on npm](https://www.npmjs.com/package/react-hook-form)
- Source: [github.com/react-hook-form/react-hook-form](https://github.com/react-hook-form/react-hook-form)
- Guides and learning paths: [Guides](${SITE_URL}/guides)
- Schema resolvers (Zod, Yup, Valibot, etc.): [@hookform/resolvers](https://github.com/react-hook-form/resolvers)
- Full documentation in a single file: [llms-full.txt](${SITE_URL}/llms-full.txt)

Every page below is also available as HTML by dropping the \`.md\` suffix.

${sections.join("\n\n")}

## Optional

- [DevTools](${SITE_URL}/dev-tools): Visual debugging for React Hook Form.
- [Form Builder](${SITE_URL}/form-builder): Generate form code with validation.
- [Community Integrations](${SITE_URL}/resources/3rd-party-bindings): Community bindings for UI libraries.
`
}

function sortDocs(docs) {
  const order = SECTIONS.map(([sidebar]) => sidebar)
  return [...docs].sort(
    (a, b) =>
      order.indexOf(a.sidebar) - order.indexOf(b.sidebar) ||
      a.slug.localeCompare(b.slug)
  )
}

function main() {
  const docs = sortDocs(JSON.parse(readFileSync(INDEX, "utf8")))
  const pages = docs.map((doc) => {
    const markdown = renderPage(doc)
    const file = outputPath(doc.slug)
    mkdirSync(dirname(file), { recursive: true })
    writeFileSync(file, markdown)
    return markdown
  })

  writeFileSync(join(PUBLIC_DIR, "llms.txt"), renderLlmsTxt(docs))
  writeFileSync(join(PUBLIC_DIR, "llms-full.txt"), pages.join("\n---\n\n"))
  console.log(
    `Generated ${docs.length} Markdown pages, llms.txt, llms-full.txt`
  )
}

main()
