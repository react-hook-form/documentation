---
title: setValues
description: Update multiple field values at once.
metaDescription: Update multiple React Hook Form field values at once using an object or a callback that receives the current form values and returns changes.
sidebar: apiLinks
---

## \</> `setValues:` <TypeText>(value: Partial\<TFieldValues\> | ((data: TFieldValues) => Partial\<TFieldValues\>), options?: SetValueConfig) => void</TypeText>

This function allows you to dynamically set multiple field values at once and have the options to validate and update the form state. It also accepts a callback function that receives the current form values, making it easy to derive the next state from the existing one.

### Props

---

| Name                                                                                                        |                                                   | Description                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`<br/><TypeText>Partial\<TFieldValues\> \| (data: TFieldValues) => Partial\<TFieldValues\></TypeText> |                                                   | An object containing the field values to update, or a callback function that receives the current form values and returns the updated values. This argument is required.                                                                                                                    |
| `options`                                                                                                   | `shouldValidate`<br/><TypeText>boolean</TypeText> | <ul><li>Whether to compute if your input is valid or not (subscribed to <TypeText>errors</TypeText>).</li><li>Whether to compute if your entire form is valid or not (subscribed to <TypeText>isValid</TypeText>).</li></ul>                                                                |
|                                                                                                             | `shouldDirty`<br/><TypeText>boolean</TypeText>    | <ul><li>Whether to compute if your input is dirty or not against your `defaultValues` (subscribed to <TypeText>dirtyFields</TypeText>).</li><li>Whether to compute if your entire form is dirty or not against your `defaultValues` (subscribed to <TypeText>isDirty</TypeText>).</li></ul> |
|                                                                                                             | `shouldTouch`<br/><TypeText>boolean</TypeText>    | Whether to set the updated inputs to be touched.                                                                                                                                                                                                                                            |

<Admonition type="important" title="Rules">

- When using the callback form, the function receives a snapshot of the current form values and should return only the fields you want to update.

- This method does not reset the form. Use [`reset`](/docs/useform/reset) if you need to reinitialize `defaultValues`.

</Admonition>

### Examples

---

**Basic**

```javascript
import { useForm } from "react-hook-form"

const App = () => {
  const { register, setValues } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  })

  return (
    <form>
      <input {...register("firstName")} />
      <input {...register("lastName")} />
      <button
        type="button"
        onClick={() => setValues({ firstName: "Bill", lastName: "Luo" })}
      >
        setValues
      </button>
    </form>
  )
}
```

**Callback (derive next state from current values)**

```javascript
import { useForm } from "react-hook-form"

const App = () => {
  const { register, setValues } = useForm({
    defaultValues: {
      name: "",
      count: 0,
    },
  })

  return (
    <form>
      <input {...register("name")} />
      <input type="number" {...register("count")} />
      <button
        type="button"
        onClick={() => {
          setValues((data) => {
            return {
              ...data,
              name: "test",
            }
          })
        }}
      >
        setValues with callback
      </button>
    </form>
  )
}
```

**With options**

```javascript
import { useForm } from "react-hook-form"

const App = () => {
  const { register, setValues } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  })

  return (
    <form>
      <input {...register("firstName", { required: true })} />
      <input {...register("lastName", { required: true })} />
      <button
        type="button"
        onClick={() =>
          setValues(
            { firstName: "Bill", lastName: "Luo" },
            { shouldValidate: true, shouldDirty: true, shouldTouch: true }
          )
        }
      >
        setValues with validation
      </button>
    </form>
  )
}
```
