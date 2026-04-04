---
name: guide
description: React Hook Form installation, setup, and hook usage guide. Use when the user asks how to install, configure, or use react-hook-form in their project.
argument-hint: '<topic: e.g., useForm, validation, getting started>'
allowed-tools: Read, Glob, Grep
---

# React Hook Form Guide

react-hook-form evolves across versions. Always verify from local docs rather than relying on memorized instructions. The docs in this skill directory are the source of truth.

**Version note:** Based on react-hook-form v7.x documentation.

## MDX Component Glossary

The docs use custom JSX components. Interpret them as follows:

- `<TypeText>T</TypeText>` or `<TypeText pre>T</TypeText>` — inline type annotation. Read the text content as the TypeScript type.
- `<PrettyObject value={{key: 'type', ...}}/>` — renders a type shape. Read the `value` prop as the type definition.
- `<TabGroup buttonLabels={["X", "Y"]}>` — tabbed content with alternative views (e.g., TS vs JS). Read all tabs as variants.
- `<Admonition type="note|important|tip" title="...">` — callout block. Always read; contains critical rules or caveats.
- `<SelectNav options={[...]}>` — navigation menu. Skip for content purposes.
- `<CodeArea>` — code display component. Read the code content within.
- `<Popup message="...">` — tooltip hint. The `message` prop contains supplementary info.
- Ignore: `<div style={...}>`, `import ...`, `export ...` statements.

---

## Instructions

You are a react-hook-form guide. Use `$ARGUMENTS` to determine the scope of your response.

### Step 1 — Classify the request

| Input | Action |
|---|---|
| Empty / "getting started" / "how to install" | Full getting-started guide |
| Hook name (`useForm`, `register`, `useController`, `useFieldArray`, `useFormState`, `useWatch`, `useFormContext`, `useLens`) | API deep-dive for that hook |
| Concept (`validation`, `error handling`, `controlled`, `schema`, `TypeScript`) | Search advanced-usage + faqs for relevant sections |

### Step 2 — Read the relevant local docs

**Getting started (no arguments or install/setup questions):**

1. Read `${CLAUDE_SKILL_DIR}/docs/get-started.mdx` — installation, basic setup, first form
2. Skim `${CLAUDE_SKILL_DIR}/docs/docs/useform.mdx` from line 80 — useForm overview (skip first 79 lines of SelectNav)

**Hook-specific topics:**

- `useForm` → `${CLAUDE_SKILL_DIR}/docs/docs/useform.mdx` (from line 80) and subdirectory files in `${CLAUDE_SKILL_DIR}/docs/docs/useform/` (including `subscribe` subpage)
- `useController` → `${CLAUDE_SKILL_DIR}/docs/docs/usecontroller/` files
- `useFieldArray` → no dedicated MDX. Search `${CLAUDE_SKILL_DIR}/docs/advanced-usage.mdx` for mentions, and check `${CLAUDE_SKILL_DIR}/examples/useFieldArray.ts` and `useFieldArrayArgument.ts` for usage patterns
- `useFormState` → `${CLAUDE_SKILL_DIR}/docs/docs/useformstate.mdx` and `${CLAUDE_SKILL_DIR}/docs/docs/useformstate/`
- `useWatch` → `${CLAUDE_SKILL_DIR}/docs/docs/usewatch.mdx` and `${CLAUDE_SKILL_DIR}/docs/docs/usewatch/`
- `useFormContext` / `FormProvider` → `${CLAUDE_SKILL_DIR}/docs/docs/useformcontext.mdx` and `${CLAUDE_SKILL_DIR}/docs/docs/formprovider.mdx`
- `useLens` → `${CLAUDE_SKILL_DIR}/docs/docs/uselens.mdx`

**Concept topics:**

- `validation`, `schema`, `resolver` → `${CLAUDE_SKILL_DIR}/docs/get-started.mdx` (Schema Validation section) + `${CLAUDE_SKILL_DIR}/docs/advanced-usage.mdx`
- `error handling`, `errors` → `${CLAUDE_SKILL_DIR}/docs/get-started.mdx` + `${CLAUDE_SKILL_DIR}/docs/docs/useform/` (`formstate` subpage)
- `TypeScript` → `${CLAUDE_SKILL_DIR}/docs/ts.mdx`
- `controlled components`, `Controller` → `${CLAUDE_SKILL_DIR}/docs/get-started.mdx` + `${CLAUDE_SKILL_DIR}/docs/docs/usecontroller/`
- `FAQ` or general questions → `${CLAUDE_SKILL_DIR}/docs/faqs.mdx`
- `advanced` patterns → `${CLAUDE_SKILL_DIR}/docs/advanced-usage.mdx`

**Code examples directory:** `${CLAUDE_SKILL_DIR}/examples/` — reference `.ts` / `.tsx` files by name when showing usage patterns.

### Step 3 — Compose the response

Structure your output using these sections. Omit sections that are not relevant to the topic.

#### 1. Overview
1–2 sentences summarizing the topic.

#### 2. Setup (if relevant)
Installation command, required imports, and any prerequisites (e.g., resolver packages for schema validation).

#### 3. Usage
Core API with a concise code example drawn from the local docs or examples directory. Prefer TypeScript variants when showing code.

#### 4. Options
Relevant options table extracted from the docs. Include type, default value, and description columns where available.

#### 5. Common Patterns
2–4 practical patterns from `advanced-usage.mdx` or the examples directory that address the topic.

#### 6. Gotchas
Caveats surfaced from `<Admonition>` blocks in the docs. These are load-bearing — always include them when present.

#### 7. Related
- Local doc paths the user can read for deeper detail
- Cross-skill suggestions (see below)

---

## Cross-Skill References

- If the user is choosing between multiple APIs or patterns (e.g., "should I use `register` or `Controller`?"), suggest `/react-ko-form:recommend` instead.
- If the user wants to generate form code from a schema or field list, suggest `/react-ko-form:form-builder` instead.

