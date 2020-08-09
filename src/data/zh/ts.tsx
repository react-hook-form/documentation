import * as React from "react"

export default {
  nestedValue: {
    title: "NestedValue",
    description: <p>此类型适用于输入组件返回值为嵌套对象的场景。</p>,
  },
  resolver: {
    title: "Resolver",
    description: <p>此类型将支持用户编写自定义验证解析器。</p>,
  },
  submitHandler: {
    title: "SubmitHandler",
    description: (
      <p>
        此类型适用于提交数据与<code>FormValues</code>不匹配的场景。
      </p>
    ),
  },
  control: {
    title: "Control",
    description: (
      <p>
        此类型支撑了诸如<code>useFieldArray</code>，<code>useWatch</code>
        以及未来其他的自定义hook。
      </p>
    ),
  },
  useFormMethodsRef: {
    title: "UseFormMethodsRef",
    description: (
      <p>
        此类型适用于<code>Context</code>的<code>Consumer</code>替代
        <code>useFormContext</code>hook的场景。
      </p>
    ),
  },
  useFormOptions: {
    title: "UseFormOptions",
    description: "",
  },
  useFieldArrayOptions: {
    title: "UseFieldArrayOptions",
    description: "",
  },
  fieldError: {
    title: "FieldError",
    description: "",
  },
  field: {
    title: "Field",
    description: "",
  },
  mode: {
    title: "Mode",
    description: "",
  },
  validationRules: {
    title: "ValidationRules",
    description: "",
  },
  arrayField: {
    title: "ArrayField",
    description: "",
  },
}
