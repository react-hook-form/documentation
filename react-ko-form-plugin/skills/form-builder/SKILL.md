---
name: form-builder
description: Generate complete React Hook Form code from natural language field definitions. Use when the user wants to scaffold a typed form with validation and error handling.
argument-hint: '<form description: e.g., login form with email and password>'
allowed-tools: Read, Glob, Grep, Write
---

# form-builder

Generate a complete, typed React Hook Form component from a plain-language description.

## Source-of-Truth Grounding

Before generating code, always verify API options from local docs:

- Register validation options: `${CLAUDE_SKILL_DIR}/docs/docs/useform/register.mdx`
- useForm options (mode, defaultValues, etc.): `${CLAUDE_SKILL_DIR}/docs/docs/useform.mdx` — skip the first 79 lines (SelectNav navigation component, content starts at line 80)

## MDX Component Glossary

- `<TypeText>T</TypeText>` or `<TypeText pre>T</TypeText>` — inline type annotation. Read the text content as the TypeScript type.
- `<PrettyObject value={{key: 'type', ...}}/>` — renders a type shape. Read the `value` prop as the type definition.
- `<TabGroup buttonLabels={["X", "Y"]}>` — tabbed content with alternative views (e.g., TS vs JS). Read all tabs as variants.
- `<Admonition type="note|important|tip" title="...">` — callout block. Always read; contains critical rules or caveats.
- `<SelectNav options={[...]}>` — navigation menu. Skip for content purposes.
- `<CodeArea>` — code display component. Read the code content within.
- `<Popup message="...">` — tooltip hint. The `message` prop contains supplementary info.
- Ignore: `<div style={...}>`, `import ...`, `export ...` statements.

## $ARGUMENTS Handling

**Arguments provided** → parse field definitions → follow the Code Generation Workflow below.

**No arguments** → show the following examples and ask the user to describe their form:

```
Usage examples:
  /react-ko-form:form-builder login form with email and password
  /react-ko-form:form-builder registration with name, email, password (min 8), confirm password, and terms checkbox
  /react-ko-form:form-builder contact form with name, email, phone (optional), and message (textarea)

Describe your form and I'll generate the complete TypeScript component.
```

## Code Generation Workflow

### Step 1 — Parse the input

Extract from the natural language description:

- Field names
- Field types (text, email, password, number, checkbox, textarea, select, URL, phone)
- Validation requirements (required, minLength, maxLength, pattern, min, max, validate)
- Optional vs required fields

### Step 2 — Read local docs

Read both files to verify current API options before generating:

1. `${CLAUDE_SKILL_DIR}/docs/docs/useform/register.mdx` — validation rule options
2. `${CLAUDE_SKILL_DIR}/docs/docs/useform.mdx` (from line 80) — useForm options

### Step 3 — Generate the component

Produce all of the following in order:

1. TypeScript `interface` for form field types
2. `useForm<T>()` hook setup with appropriate options
3. `register()` calls with validation rules
4. `formState.errors` error handling for each validated field
5. `handleSubmit` + `onSubmit` function
6. Complete JSX form component

## Complexity Limit

For forms with **more than 8 fields**: generate the TypeScript interface and `useForm` setup first, then ask the user to confirm before generating the full JSX.

## Common Validation Patterns

| Field Type | Validation Rules |
|---|---|
| email | `{ required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" } }` |
| password | `{ required: "Password is required", minLength: { value: 8, message: "At least 8 characters" } }` |
| confirm password | `{ validate: (value, formValues) => value === formValues.password \|\| "Passwords do not match" }` |
| phone | `{ pattern: { value: /^\+?[0-9\s\-()]{7,15}$/, message: "Invalid phone number" } }` |
| number | `{ min: 0, max: 999, valueAsNumber: true }` |
| URL | `{ pattern: { value: /^https?:\/\/.+/, message: "Invalid URL" } }` |
| required checkbox | `{ required: "You must accept the terms" }` |
| textarea | `{ required: "Message is required", maxLength: { value: 500, message: "Max 500 characters" } }` |

## Dynamic Fields (useFieldArray)

`useFieldArray` has no MDX documentation. When dynamic fields are requested:

1. Read `${CLAUDE_SKILL_DIR}/examples/useFieldArray.ts` and `${CLAUDE_SKILL_DIR}/examples/useFieldArrayArgument.ts`
2. Key API: `useFieldArray({ control, name })` returns `{ fields, append, remove, prepend, swap, move, insert, update, replace }`
3. Always use `field.id` as key (not array index)
4. Provide full default shape on `append()`: `append({ name: "", quantity: 1 })`
5. Register nested fields as: `` register(`items.${index}.name`) ``

## Output Example

Given: "login form with email and password"

```tsx
import { useForm } from "react-hook-form";

interface LoginFormValues {
  email: string;
  password: string;
}

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ mode: "onBlur" });

  const onSubmit = (data: LoginFormValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      {/* Repeat the pattern above for each field */}

      <button type="submit">Submit</button>
    </form>
  );
}
```

## Constraints

- Generate basic HTML elements only (no MUI, shadcn, Chakra, or other UI libraries)
- Always use TypeScript with generics (`useForm<FormType>`)
- Always include error handling for each validated field
- File output: ask the user where to write the file; default to chat output

## Cross-Skill References

- Unsure which API to use? Try `/react-ko-form:recommend`
- Need detailed API usage? Try `/react-ko-form:guide <api-name>`

---

Based on react-hook-form v7.x documentation.
