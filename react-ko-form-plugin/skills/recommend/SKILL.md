---
name: recommend
description: Recommend the right React Hook Form API or pattern for your use case. Use when the user asks which hook, component, or pattern to use for a specific form requirement.
argument-hint: '<use case: e.g., watch all fields, dynamic field arrays, schema validation>'
allowed-tools: Read, Glob, Grep
---

# React Hook Form API Recommendation

Recommend the most suitable React Hook Form API or pattern for the user's needs, grounded in the local documentation.

react-hook-form evolves across versions. Always verify from local docs in this skill directory rather than relying on memorized knowledge.

## MDX Component Glossary

The local docs are MDX files with custom components. Parse them as follows:

- `<TypeText>T</TypeText>` or `<TypeText pre>T</TypeText>` — inline type annotation. Read the text content as the TypeScript type.
- `<PrettyObject value={{key: 'type', ...}}/>` — renders a type shape. Read the `value` prop as the type definition.
- `<TabGroup buttonLabels={["X", "Y"]}>` — tabbed content with alternative views (e.g., TS vs JS). Read all tabs as variants.
- `<Admonition type="note|important|tip" title="...">` — callout block. Always read; contains critical rules or caveats.
- `<SelectNav options={[...]}>` — navigation menu. Skip for content purposes.
- `<CodeArea>` — code display component. Read the code content within.
- `<Popup message="...">` — tooltip hint. The `message` prop contains supplementary info.
- Ignore: `<div style={...}>`, `import ...`, `export ...` statements.

## API Mapping Table

Use this table to match developer intent to the correct API:

| Developer Intent | Recommended API | Local Doc Path |
|---|---|---|
| basic form setup | `useForm` + `register` | `${CLAUDE_SKILL_DIR}/docs/docs/useform.mdx` |
| validate fields | `register` rules or `resolver` | `${CLAUDE_SKILL_DIR}/docs/docs/useform/register.mdx` |
| dynamic add/remove fields | `useFieldArray` | `${CLAUDE_SKILL_DIR}/examples/useFieldArray.ts` (no MDX) |
| controlled/UI library components | `Controller` / `useController` | `${CLAUDE_SKILL_DIR}/docs/docs/usecontroller/controller.mdx` |
| share form state across components | `FormProvider` + `useFormContext` | `${CLAUDE_SKILL_DIR}/docs/docs/useformcontext.mdx`, `${CLAUDE_SKILL_DIR}/docs/docs/formprovider.mdx` |
| watch a specific field | `useWatch` | `${CLAUDE_SKILL_DIR}/docs/docs/usewatch.mdx` |
| watch from parent (root level) | `watch` (from useForm) | `${CLAUDE_SKILL_DIR}/docs/docs/useform/watch.mdx` |
| multi-step form | `useFormContext` + `trigger()` | `${CLAUDE_SKILL_DIR}/docs/advanced-usage.mdx` |
| load async data into form | `values` prop (not `defaultValues`) | `${CLAUDE_SKILL_DIR}/docs/docs/useform.mdx` |
| schema validation (Zod/Yup) | `@hookform/resolvers` | `${CLAUDE_SKILL_DIR}/docs/get-started.mdx` |
| debug form state | `@hookform/devtools` | (training data only — limit to install guidance) |
| set server-side errors | `setError()` | `${CLAUDE_SKILL_DIR}/docs/docs/useform/seterror.mdx` |
| set values programmatically | `setValue()` | `${CLAUDE_SKILL_DIR}/docs/docs/useform/setvalue.mdx` |
| check dirty/valid state | `formState` | `${CLAUDE_SKILL_DIR}/docs/docs/useform/formstate.mdx` |
| reset form to defaults | `reset()` | `${CLAUDE_SKILL_DIR}/docs/docs/useform/reset.mdx` |
| reset a single field | `resetField()` | `${CLAUDE_SKILL_DIR}/docs/docs/useform/resetfield.mdx` |
| read current values without subscription | `getValues()` | `${CLAUDE_SKILL_DIR}/docs/docs/useform/getvalues.mdx` |
| clear specific errors | `clearErrors()` | `${CLAUDE_SKILL_DIR}/docs/docs/useform/clearerrors.mdx` |
| check if a field is dirty/touched | `getFieldState()` | `${CLAUDE_SKILL_DIR}/docs/docs/useform/getfieldstate.mdx` |
| focus a field programmatically | `setFocus()` | `${CLAUDE_SKILL_DIR}/docs/docs/useform/setfocus.mdx` |
| remove a registered field | `unregister()` | `${CLAUDE_SKILL_DIR}/docs/docs/useform/unregister.mdx` |
| handle form submission | `handleSubmit()` | `${CLAUDE_SKILL_DIR}/docs/docs/useform/handlesubmit.mdx` |
| subscribe to form state changes outside React | `subscribe()` | `${CLAUDE_SKILL_DIR}/docs/docs/useform/subscribe.mdx` |
| type-safe functional lenses | `useLens` | `${CLAUDE_SKILL_DIR}/docs/docs/uselens.mdx` |

## Workflow

### If $ARGUMENTS is provided

1. Parse $ARGUMENTS to identify the developer intent (what form behavior they need).
2. Match against the API Mapping Table above.
3. If no direct match, search local docs by keyword:
   ```
   Grep for keywords in ${CLAUDE_SKILL_DIR}/docs/**/*.mdx
   ```
4. Read the matched doc file to extract the exact signature, options, and an example.
5. If multiple APIs are plausible, read each relevant doc and compare.
6. Respond using the Output Format below.

### If $ARGUMENTS is empty

Display the full API Mapping Table and ask:

> "Describe your form requirement and I'll recommend the right React Hook Form API."

## Special Case: useFieldArray

`useFieldArray` has no MDX documentation in the local docs directory. When recommending it:

1. Read `${CLAUDE_SKILL_DIR}/examples/useFieldArray.ts` for the primary usage pattern.
2. Read `${CLAUDE_SKILL_DIR}/examples/useFieldArrayArgument.ts` for argument shapes.
3. Inform the user: "Local docs are limited for `useFieldArray` — the recommendation below is based on code examples."
4. Still provide a complete recommendation with the import path and code patterns extracted from the examples.

## Output Format

For each recommended API, respond with this structure:

### 1. Recommended API

State the API name clearly: e.g., **`useFieldArray`**

### 2. Description

One sentence describing what it does, sourced from the local doc or example file.

### 3. Import

```ts
import { useForm, useFieldArray } from 'react-hook-form';
```

### 4. Code Example

Extract a minimal, self-contained example from the local docs or examples directory.

### 5. Comparison Table (when multiple options exist)

| API | Use Case | Performance | Complexity |
|---|---|---|---|
| `watch` | parent-level subscription | re-renders parent | low |
| `useWatch` | isolated field subscription | isolated re-renders | low |

### 6. When to choose which

Clear decision criteria — e.g., "Use `useWatch` to subscribe to a single field without re-rendering the parent. Use `watch` when you need the value at the root level or outside a component."

### 7. Related Docs

List local doc paths that were referenced:
- `${CLAUDE_SKILL_DIR}/docs/docs/usewatch.mdx`
- `${CLAUDE_SKILL_DIR}/docs/docs/useform/watch.mdx`

## Cross-Skill References

After delivering a recommendation:

- For detailed usage instructions on the chosen API: suggest `/react-ko-form:guide <api-name>`
- For generating a complete form component: suggest `/react-ko-form:form-builder`

## Version Note

Based on react-hook-form v7.x documentation.
