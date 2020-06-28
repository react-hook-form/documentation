import * as React from "react"

export default {
  nestedValue: {
    title: "NestedValue",
    description: <p>当输入本身返回嵌套数据时类型是object或者array。</p>,
  },
  resolver: {
    title: "Resolver",
    description: <p>此类型将支持用户编写自定义验证解析器。</p>,
  },
  submitHandler: {
    title: "SubmitHandler",
    description: (
      <p>
        当提交的数据与<code>FormValues</code>不匹配时。
      </p>
    ),
  },
  control: {
    title: "Control",
    description: (
      <p>
        此类型支持自定义钩子，例如<code>useFieldArray</code>，
        <code>useWatch</code>的自定义钩子。
      </p>
    ),
  },
  useFormMethodsRef: {
    title: "UseFormMethodsRef",
    description: (
      <p>
        当您使用<code>Context</code>的<code>Consumer</code>代替
        <code>useFormContext</code>钩子。
      </p>
    ),
  },
}
