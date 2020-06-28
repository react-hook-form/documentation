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
      <p>
        이 유형은 사용자가 사용자 정의 유효성 검증 분석기를 작성할 수 있도록
        지원합니다.
      </p>
    ),
  },
  submitHandler: {
    title: "SubmitHandler",
    description: (
      <p>
        이 유형은 제출 된 데이터가 <code>FormValue</code> 와 일치하지 않을 때
        유용합니다 유형.
      </p>
    ),
  },
  control: {
    title: "Control",
    description: (
      <p>
        이 유형은 <code>useFieldArray</code>, <code>useWatch</code> 및 future와
        같은 사용자 정의 후크를 지원합니다. 이 라이브러리의 사용자 정의 후크.
      </p>
    ),
  },
  useFormMethodsRef: {
    title: "UseFormMethodsRef",
    description: (
      <p>
        이 유형은 컨텍스트 대신 소비자를 사용할 때 유용합니다.{" "}
        <code>useFormContext</code>
        후크.
      </p>
    ),
  },
}
