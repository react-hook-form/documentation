# `handleSubmit`

`handleSubmit` is a `function` that validates form values and triggers form submission.

```js
handleSubmit(onValid, onInvalid)
```

## Reference

### `handleSubmit(onValid, onInvalid)`

`handleSubmit` execution will trigger a chain of form submission events.

```jsx
import { useForm } from 'react-hook-form'

function Form () {
  const { handleSubmit } = useForm()

  const onSubmit = (data, event) => {
    // ...
  }

   const onError = (errors, event) => {
    // ...
   }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      {/* ... */}
    </form>
  )
}
```

<!-- Mention formState updates during and after the validation process -->

> **Note**
> `handleSubmit` can be called on events other than `submit`. For example, you can call it on `onClick` or `onTouchEnd` events.
> ```jsx
>   return <button onClick={handleSubmit(onSubmit, onError)}>Submit</button>
> ```

### Options

#### `onValid`

[`onValid`](#onvalid) is a callback `function` that will be invoked when the form is submitted and there are no validation [`errors`](errors). It receives the form values as the first argument and the propagated `event` as the second argument.

```jsx
const onSubmit = (data, event) => {
  // ...
}
```

`onValid` can also be an `async` function. 

```jsx
const onSubmit = async (data, event) => {
  await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify(data)
  })
}
```

#### `onInvalid`

[`onInvalid`](#oninvalid) is a callback `function` that will be invoked when the form is submitted and there are validation errors. It receives the form [`errors`](errors) as the first argument and the propagated `event` as the second argument.

```jsx
const onError = (errors, event) => {
  // ...
}
```
