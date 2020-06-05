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
    description: <p>当提交的数据与FormValues不匹配时。</p>,
  },
  control: {
    title: "Control",
    description: (
      <p>此类型支持自定义钩子，例如useFieldArray，useWatch的自定义钩子。</p>
    ),
  },
  useFormMethodsRef: {
    title: "UseFormMethodsRef",
    description: <p>当您使用Context的Consumer代替useFormContext钩子。</p>,
  },
}
