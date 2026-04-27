---
title: Migrate V7 to V8 (BETA)
description: React Hook Form V8 migration guide.
sidebar: migrateV7ToV8Links
---

## Installation {#Installation}

```bash copy
npm install react-hook-form@beta
```

## React Compiler {#ReactCompiler}

V8 adds first-class support for the [React Compiler](https://react.dev/learn/react-compiler). No additional configuration is required — React Hook Form is now compatible out of the box.

## Flat Field Array {#FlatFieldArray}

V8 supports flat field arrays, allowing simpler data structures when working with `useFieldArray`.

## Breaking Changes {#BreakingChanges}

The following changes require updates to your existing code when upgrading from V7.

### Input Ref {#InputRef}

`register` now passes the input `ref` directly instead of a partial ref object.

- **Before (V7):** register passed a partial object
- **After (V8):** register passes the actual input ref

See [#12773](https://github.com/react-hook-form/react-hook-form/issues/12773) for details.

### useFieldArray {#useFieldArray}

Two changes affect `useFieldArray`:

**`id` renamed to `key`**

The internal render identifier has been renamed from `id` to `key`. Update any destructured field references:

```tsx copy
const { fields, append } = useFieldArray({ name: "items" })

// fields[0].key is the unique render identifier (was fields[0].id)
```

Note: you can still append `id` or `key` as data — neither affects the render key:

```tsx copy
append({
  key: "custom-key",  // stored as field data, does not override the render key
  id: "custom-id",    // stored as field data, does not override the render key
})

fields[0].key // unique id used for re-render (auto-generated)
```

**`keyName` prop removed**

The `keyName` option has been removed from `useFieldArray`. The render key is always `key`.

### Watch Component {#WatchComponent}

The `<Watch />` component prop `names` has been renamed to `name` for consistency with the rest of the API.

```tsx copy
// Before (V7)
<Watch names={["firstName", "lastName"]} />

// After (V8)
<Watch name={["firstName", "lastName"]} />
```

### watch Callback API {#watchCallback}

The `watch` subscription callback API has been removed. Use [`subscribe`](/docs/useform/subscribe) instead for reactive form value changes.

```tsx copy
// Before (V7)
watch((value, { name, type }) => console.log(value))

// After (V8) — use subscribe
subscribe({ formValues: true }, ({ values }) => console.log(values))
```

### setValue {#setValue}

`setValue` no longer directly updates `useFieldArray` fields. Use the `replace` method from `useFieldArray` instead when you need to overwrite an entire field array.

```tsx copy
// Before (V7)
setValue("items", newItems)

// After (V8)
const { replace } = useFieldArray({ name: "items" })
replace(newItems)
```

> See [`setValue`](/docs/useform/setvalue) and [`useFieldArray`](/docs/usefieldarray) docs for details.
