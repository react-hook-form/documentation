export default `import React from 'react'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { VariableSizeList as List } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import ReactDOM from 'react-dom'
import './styles.css'

const items = Array.from(Array(1000).keys()).map((i) => ({
  title: \`List \${i}\`,
  quantity: Math.floor(Math.random() * 10),
}))

const WindowedRow = React.memo(({ index, style, data }) => {
  const { register } = useFormContext()

  return <input {...register(\`\${index}.quantity\`)} />
})

export const App = () => {
  const onSubmit = (data) => console.log(data)
  const formMethods = useForm({ defaultValues: items })

  return (
    <form className="form" onSubmit={formMethods.handleSubmit(onSubmit)}>
      <FormProvider {...formMethods}>
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              itemCount={items.length}
              itemSize={() => 100}
              width={width}
              itemData={items}>
              {WindowedRow}
            </List>
          )}
        </AutoSizer>
      </FormProvider>
      <button type="submit">Submit</button>
    </form>
  )
}
`
