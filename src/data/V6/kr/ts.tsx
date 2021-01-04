import * as React from "react"

export default {
  nestedValue: {
    title: "NestedValue",
    description: (
      <p>이 타입은 인풋 자체가 중첩된 객체를 리턴할 때 유용합니다.</p>
    ),
  },
  resolver: {
    title: "Resolver",
    description: (
      <p>이 타입은 사용자가 커스텀 유효성 검사기를 작성할 때 유용합니다.</p>
    ),
  },
  submitHandler: {
    title: "SubmitHandler",
    description: (
      <p>
        이 타입은 제출 된 데이터가 <code>FormValue</code> 타입과 일치하지 않을
        때 유용합니다.
      </p>
    ),
  },
  control: {
    title: "Control",
    description: (
      <p>
        이 타입은 <code>useFieldArray</code>, <code>useWatch</code> 및 앞으로 이
        라이브러리에 추가될 커스텀 훅을 지원합니다.
      </p>
    ),
  },
  useFormMethodsRef: {
    title: "UseFormMethodsRef",
    description: (
      <p>
        이 타입은 <code>useFormContext</code> 훅을 사용하는 대신 직접{" "}
        <code>Context</code> 와 <code>Consumer</code> 를 사용할 때 유용합니다.
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
  fieldErrors: {
    title: "FieldErrors",
    description: "",
  },
  field: {
    title: "Field",
    description: "",
  },
  fieldValues: {
    title: "FieldValues",
    description: "",
  },
  mode: {
    title: "Mode",
    description: "",
  },
  validationRules: {
    title: "RegisterOptions",
    description: "",
  },
  arrayField: {
    title: "ArrayField",
    description: "",
  },
  formStateProxy: {
    title: "FormStateProxy",
    description: "",
  },
  useFieldArrayMethods: {
    title: "UseFieldArrayMethods",
    description: "",
  },
  useControllerOptions: {
    title: "UseControllerOptions",
    description: "",
  },
  useControllerMethods: {
    title: "UseControllerMethods",
    description: "",
  },
}
