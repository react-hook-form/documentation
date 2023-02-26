# `useForm`

[`useForm`](#useform) is the core hook that let's you pass in your form's default values, configure validation behavior and rules and sync your client form values with remote data.

```js
const form = useForm(options)
```

## Reference

### `useForm(options)`

Call [`useForm`](#useform) at the top level of your component to create a form instance.

```js
import { useForm } from 'react-hook-form'

const options = {
  // ...
}

function Form() {
  const form = useForm(options)
  // ...
}
```

### Options

#### `values`

Available since: [`v7.41.0`](https://github.com/react-hook-form/react-hook-form/releases/tag/v7.41.0)

An object containing values of a remote source. This is useful when you have data that can change while the user is filling out the form and you want to keep your client-side form values in sync with the remote data.

```js
const { data } = useQuery({
  queryKey: ['user'],
  queryFn: () => fetch('/api/user')
})

useForm({
  values: data
})
```

> **Note**
> You can provide [`resetOptions`](#values-resetoptions) to the [`useForm`](#useform) hook to determine what form values and states should be updated when the [`values`](#values) change.

#### `values` + `resetOptions`

Available since: [`v7.41.0`](https://github.com/react-hook-form/react-hook-form/releases/tag/v7.41.0)

When [`values`](#values) **is provided**, you can also provide [`resetOptions`](#values-resetoptions) to determine what form values and states should be updated when the `values` change.

Currently, [`resetOptions`](#values-resetoptions) is an object of `boolean` properties that correspond to the [`reset`](#reset) method's options.

> **Developer commentary**: The [`resetOptions`](#values-resetoptions) description can potentially be moved to the [`reset`](#reset) method's description and linked to from here. I'll will leave it here for now to emphasis the [`values` + `resetOptions`](#values-resetoptions) usage.

##### keepDirtyValues

When `true`, only the form values that weren't changed will be updated. This is useful when you want to update the form values with new data but you don't want to overwrite current user input.

> **Warning**
> The checks for the [`keepDirtyValues`](#keepdirtyvalues) and [`keepDefaultValues`](#keepdefaultvalues) options are mutually exclusive. If both are `true`, the [`keepDirtyValues`](#keepdirtyvalues) option will take precedence.

##### keepErrors

When `true`, all form values will be updated with the new [`values`](#values) but [`formState.errors`](#errors) will be kept the same despite the new [`values`](#values). This is useful when you want to update the form values with new data but you don't want to reset the current form errors.

##### keepDirty

When `true`, all form values will be updated with the new [`values`](#values) but [`formState.isDirty`](#isdirty) will remain the same despite the new [`values`](#values). This is useful when you want to update the form values with new data but you don't want to reset the form's dirtiness state.

##### keepValues

When `true`, all form values will be kept the same despite the new [`values`](#values). Only [`formState.defaultValues`](#defaultvalues) will be updated. This is useful when you want to reflect that the remote data has changed but you don't want to overwrite the current user input.

> **Warning**
> The checks for the [`keepValues`](#keepvalues) and [`keepDefaultValues`](#keepdefaultvalues) options are mutually exclusive. If both are `true`, the [`keepValues`](#keepvalues) option will take precedence.

##### keepDefaultValues

When `true`, all form values will be updated with the new [`values`](#values) but [`formState.defaultValues`](#) will remain the same despite the new [`values`](#values). This is useful when you want to update the form values with new data and sync form dirtiness states according to the new values.

> **Note**
> The input's dirtiness will be checked upon the [`values`](#values) update and the input will be marked as dirty if the new value is different from the default value. This will update both the [`formState.dirtyFields`](#dirtyfields) and [`formState.isDirty`](#isdirty) states accordingly.

> **Warning**
> The checks for the [`keepDirtyValues`](#keepdirtyvalues) and [`keepDefaultValues`](#keepdefaultvalues) options are mutually exclusive. If both are `true`, the [`keepDirtyValues`](#keepdirtyvalues) option will take precedence.

##### keepIsSubmitted

When `true`, all form values will be updated with the new [`values`](#values) but [`formState.keepIsSubmitted`](#keepissubmitted) will remain the same despite the new [`values`](#values). This is useful when you want to update the form values with new data but you don't want to reset the form's submitted state.

##### keepTouched

When `true`, all form values will be updated with the new [`values`](#values) but [`formState.isTouched`](#istouched) will remain the same despite the new [`values`](#values). This is useful when you want to update the form values with new data but you don't want to reset the form's touched state.

##### keepIsValid

When `true`, all form values will be updated with the new [`values`](#values) but [`formState.isValid`](#isvalid) will remain the same despite the new [`values`](#values) validity and the [`keepErrors`](#keeperrors) option. This is useful when you want to update the form values with new data but you don't want to reset the form's validity state.

##### keepSubmitCount:

When `true`, all form values will be updated with the new [`values`](#values) but [`formState.submitCount`](#submitcount) will remain the same. This is useful when you want to update the form values with new data but you don't want to reset the form's submit count.

```js
// This config will persist current user input, dirtiness, validity and submission form states,
// updating only the form values that weren't changed
// when the `values` change
const resetOptions = {
  keepDirtyValues: true
  keepErrors: true
  keepDirty: true
  keepIsValid: true
  keepSubmitCount: true
  keepIsSubmitted: true
}

useForm({
  values: {
    // ...
  },
  resetOptions
})
```

> **Warning**
> The [`resetOptions`](#values-resetoptions) API is a subject to change in the next major release.

> **Developer commentary**: This is also related to [`defaultValues` + `resetOptions`](#defaultvalues-resetoptions) usage which is not covered in this iteration of the documentation.

### Returns

`useForm` returns a form instance containing the following properties:

#### `watch`

#### `getValues`

#### `getFieldState`

#### `setError`

#### `clearErrors`

#### `setValue`

#### `trigger`

#### `formState`

#### `resetField`

#### `reset`

#### `handleSubmit`

#### `unregister`

#### `control`

#### `register`

#### `setFocus`