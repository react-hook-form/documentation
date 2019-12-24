import * as React from "react"
import { Link as PageLink } from "gatsby"
import CodeArea from "../../components/CodeArea"
import accessibleCodeBase from "../../components/codeExamples/accessibleCodeBase"
import accessibleCodeFinal from "../../components/codeExamples/accessibleCodeFinal"
import Link from "../../styles/link"
import { Note } from "../../styles/typography"
import { step1, step2, step3 } from "../../components/codeExamples/formWizard"
import smartForm from "../../components/codeExamples/smartForm"
import { CodeHeading } from "../../components/ApiPage"
import form from "../../components/codeExamples/form"
import input from "../../components/codeExamples/input"

export default {
  title: "고급 사용법",
  header: {
    title: "고급 사용법",
    description: "React Hook Form 으로 복잡하고 접근성 있는 폼을 만들기",
  },
  controlledMixedWithUnControlled: {
    title: "제어 폼과 비제어 폼의 조합",
    description: (
      <p>
        React Hook Form 은 비제어 컴포넌트를 활용하고 있지만 제어 컴포넌트와도
        함께 사용할 수 있습니다. 대부분의 UI 라이브러리들은 오로지 제어
        컴포넌트만 지원하고 있습니다. 예를 들어{" "}
        <a
          href="https://github.com/mui-org/material-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          Material-UI
        </a>{" "}
        나{" "}
        <a
          href="https://github.com/ant-design/ant-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          Antd
        </a>{" "}
        같은 라이브러리 말이죠. 다행히도 Material-UI 는 이미 비제어
        컴포넌트(React Hook Form)를 지원하는 것을 고려하고 있으니,{" "}
        <a
          href="https://github.com/mui-org/material-ui/issues/18269"
          target="_blank"
          rel="noopener noreferrer"
        >
          이슈에 투표를 하여
        </a>{" "}
        우선순위를 올려 주실 수 있습니다. 게다가 React Hook Form 을 활용하면
        제어 컴포넌트의 리랜더링 또한 최적화됩니다. 아래에 제어되는 폼과
        비제어 폼이 결합된 상태에서 폼 유효성 검사흘 하는 예를 보실 수
        있습니다.
      </p>
    ),
  },
  errorMessage: {
    title: "에러 메세지",
    description: (
      <p>
        에러 메세지는 입력값에 관하여 문제가 있을 때 사용자에게 시각적으로
        피드백을 주는 것입니다. React Hook Form 은 쉽게 에러를 되짚을 수
        있도록 에러 객체를 제공합니다. 하지만 더 나은 방식으로 에러를 스크린에
        랜더링하기 위해 몇 가지 다른 방법이 있습니다.
      </p>
    ),
    register: (
      <>
        <code>register</code> 하면서 에러 메세지를 심어보세요. 쉽게{" "}
        <code>value</code> 속성에 에러 메세지를 넣을 수 있습니다. 예:
      </>
    ),
    component: "에러 출력을 돕기 위해 ErrorMessage 컴포넌트를 만들어보세요.",
    get: (
      <p>
        만약 여러분의 프로젝트가{" "}
        <a
          href="https://lodash.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          lodash
        </a>
        를 사용하고 있다면, lodash의{" "}
        <code>
          <a
            href="https://lodash.com/docs/4.17.15#get"
            target="_blank"
            rel="noopener noreferrer"
          >
            get
          </a>
        </code>{" "}
        함수를 활용할 수 있습니다. 예:
        <br />
        <br />
        <code>{`get(errors, 'firstName.message')`}</code>
      </p>
    ),
    optionalChaining: (
      <>
        <p>
          The{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
          >
            optional chaining
          </a>{" "}
          operator <code>?.</code> permits reading the <code>errors</code>{" "}
          object without worrying about causing error due to <code>null</code>{" "}
          or <code>undefined</code>.
        </p>
        <p>
          <code>{`errors?.firstName?.message`}</code>
        </p>
      </>
    ),
  },
  accessibility: {
    title: "접근성 (A11y)",
    description: (
      <>
        <p>
          React Hook Form 은 네이티브 폼 유효성 검사를 지원합니다. 그래서
          고유의 규칙을 설정하여 입력값을 검증할 수 있습니다. 우리는 대부분
          커스텀 디자인과 레이아웃을 적용하여 폼을 만들기 때문에 폼의
          접근성(A11y)이 보장되도록 만들어야 할 책임이 있습니다.
        </p>

        <p>
          아래의 코드 예제는 의도된 대로 유효성 검사가 잘 동작하지만, 접근성을
          더 끌어올릴 수 있습니다.
        </p>

        <CodeArea rawData={accessibleCodeBase} />

        <p>
          아래의 예제는{" "}
          <a
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
            target="_blank"
          >
            ARIA
          </a>
          를 활용하여 향상된 접근성을 제공합니다.
        </p>
        <CodeArea rawData={accessibleCodeFinal} />

        <p>
          이렇게 바꾸고 나면 스크린 리더는 보이는 화면을 이렇게 읽어줍니다:{" "}
          <i>“Name, edit, invalid entry, This is required.”</i>
        </p>
      </>
    ),
  },
  wizard: {
    title: "마법사 폼 / 퍼널",
    description: (
      <>
        <p>
          서로 다른 페이지와 섹션에 걸쳐 사용자의 정보를 저장하는 일은 꽤
          흔합니다. 이럴 때는 상태 관리 라이브러리를 활용하여 다른 페이지와
          섹션에 걸쳐 사용자의 입력값을 저장해두는 것을 추천합니다. 이번
          예제에서는{" "}
          <Link
            href="https://github.com/bluebill1049/little-state-machine"
            target="_blank"
          >
            little state machine
          </Link>{" "}
          을 상태 관리 라이브러리로 사용합니다 (더 친숙하다면{" "}
          <Link href="https://github.com/reduxjs/redux" target="_blank">
            redux
          </Link>
          로 교체할 수도 있습니다).
        </p>

        <p style={{ textAlign: "center" }}>♦</p>

        <p>
          <Note>1단계:</Note> 라우트와 스토어를 설정합니다.
        </p>
        <CodeArea
          rawData={step1}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          <Note>2단계:</Note> 페이지를 생성하고, 폼을 제출할 때 데이터를
          스토어에 저장하도록 만든 뒤 다음 페이지로 이동하도록 만듭니다.
        </p>
        <CodeArea
          rawData={step2}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          <Note>3단계:</Note> 스토어에 모아진 모든 데이터를 사용하여 마지막
          폼을 제출하거나 결과물을 출력하세요.
        </p>
        <CodeArea
          rawData={step3}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          위의 패턴을 사용하면 여러 페이지에 걸쳐 사용자의 입력값을 모으는
          마법사 폼이나 퍼널을 만들 수 있습니다.
        </p>
      </>
    ),
  },
  smartForm: {
    title: "스마트 폼 컴포넌트",
    description: (
      <>
        <p>
          손쉽게 폼과 인풋 필드를 조합하는 방법 중 하나를 소개합니다.{" "}
          <code>Form</code> 컴포넌트를 만들어서 자동으로 폼 데이터를 모을 수
          있도록 만들겠습니다.
        </p>

        <CodeArea
          rawData={smartForm}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <p style={{ textAlign: "center" }}>♦</p>

        <p>각각의 컴포넌트가 어떻게 이루어져 있는지 살펴보겠습니다.</p>

        <CodeHeading>
          <h2>Form</h2>
        </CodeHeading>

        <p>
          <code>Form</code> 컴포넌트가 하는 일은 모든{" "}
          <code>react-hook-form</code> 메서드를 자손 컴포넌트로 넘기는
          것입니다.
        </p>

        <CodeArea
          rawData={form}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <CodeHeading>
          <h2>Input / Select</h2>
        </CodeHeading>

        <p>
          인풋 컴포넌트의 역할은 자기 자신을 <code>react-hook-form</code> 에
          등록하는 것입니다.
        </p>
        <CodeArea
          rawData={input}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <p>
          <code>Form</code> 컴포넌트를 사용하여 <code>react-hook-form</code>{" "}
          의 props를 자손 컴포넌트로 주입할 수 있고, 덕분에 쉽게 복잡한 폼을
          만들고 조합할 수 있습니다.
        </p>
      </>
    ),
  },
  fieldArrays: {
    title: "필드 배열",
    description: (
      <>
        <p>
          이 기능은 React Hook Form 이 제공하는 제일 좋은 기능 중 하나입니다.
          이 기능을 구현하기 위해 (다른 라이브러리같은) 컴포넌트를 불러오는
          대신에 이미 있는 HTML 마크업을 활용할 수 있습니다. 핵심은 그 안에
          있는 <code>name</code> 속성입니다. React Hook Form 에서는{" "}
          <code>name</code> 속성이 여러분이 사용하고자 하는 자료 구조를
          대변합니다.
        </p>

        <p>
          아래의 예시는 인풋의 <code>name</code> 속성을 조작하여 어떻게 필드
          배열을 만들 수 있는지 보여줍니다.
        </p>

        <p>
          <Note>Note:</Note> if your application requires functionality such
          as: Delete, Insert, Append, Preprend. Here is the{" "}
          <a
            href="https://codesandbox.io/s/react-hook-form-field-array-advanced-with-delete-insert-append-edit-l19pz"
            target="_blank"
            rel="noreferrer noopener"
          >
            link for such implementation.
          </a>{" "}
          with <PageLink to={"/api#Controller"}>Controller</PageLink>.
        </p>
      </>
    ),
  },
  schema: {
    title: "스키마 유효성 검사",
    description: (
      <>
        <p>
          React Hook Form 은{" "}
          <a href="https://github.com/jquense/yup" target="_blank">
            Yup
          </a>
          을 활용하여 스키마 기반의 폼 유효성 검사를 제공합니다.{" "}
          <code>validationSchema</code> 를 <a href="/api#useForm">useForm</a>{" "}
          에 넘겨주어 추가 설정을 할 수 있습니다. React Hook Form 은 입력된
          데이터를 스키마와 비교하여 <a href="/api#errors">에러</a> 혹은
          알맞은 결과를 표시합니다.
        </p>
      </>
    ),
    step1: (
      <>
        <p>
          <Note>1단계:</Note> <code>Yup</code> 을 프로젝트에 설치합니다.
        </p>
      </>
    ),
    step2: (
      <p>
        <Note>2단계:</Note> 유효성 검사를 위한 스키마를 작성하고 React Hook
        Form 을 사용하여 인풋을 등록합니다.
      </p>
    ),
  },
  connectForm: {
    title: "폼 연결하기",
    description: (
      <p>
        폼을 만들 때, 인풋이 아주 깊게 중첩된 컴포넌트 트리 안에 남아있어야
        하는 때가 있습니다. 그럴 때 <a href="/api#FormContext">FormContext</a>{" "}
        가 아주 유용합니다. 하지만 <code>ConnectForm</code> 을 만들고 리액트의{" "}
        <a href="https://reactjs.org/docs/render-props.html">renderProps</a>{" "}
        패턴을 활용하여 개발자 경험을 향상시킬 수 있습니다. 이러한 컴포넌트를
        사용할 때의 이점은 어디서나 인풋을 React Hook Form과 연결할 수 있다는
        것입니다.
      </p>
    ),
  },
  conditionalControlledComponent: {
    title: "조건부 제어 컴포넌트",
    // Todo: missing korean translation
    description: (
      <p>
        React Hook Form 를 사용하면 조건부 필드를 다루기 무척 쉬워집니다.
        인풋이 컴포넌트 트리에서 제거되는 순간 자동으로{" "}
        <code>unregister</code> 되기 때문입니다.{" "}
        <a
          href="https://codesandbox.io/s/13ykqx4wx7"
          target="_blank"
          rel="noopener noreferrer"
        >
          여기 예제가 있습니다.
        </a>{" "}
        하지만 이러한 동작은 제어 컴포넌트에는 적용하기 어려운데,{" "}
        <code>ref</code> 가 등록되어있지 않기 때문입니다. 이럴 때는{" "}
        <code>
          <a
            href="https://reactjs.org/docs/hooks-effect.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            useEffect
          </a>
        </code>
        를 활용할 수 있습니다. 여기 활용 예제가 있습니다:
      </p>
    ),
  },
  formContext: {
    title: "FormContext 퍼포먼스",
    description: (
      <p>
        React Hook Form 의{" "}
        <PageLink to="/api/#FormContext">FormContext</PageLink> 는{" "}
        <a
          href="https://reactjs.org/docs/context.html"
          target="_blank"
          rel="noreferrer noopener"
        >
          리액트의 Context
        </a>{" "}
        API를 기반으로 만들어졌습니다. 이를 통해 컴포넌트 트리에 걸쳐 매
        단계마다 props를 전달해줘야 하는 문제를 해결할 수 있습니다. 하지만
        React Hook Form 이 상태 업데이트를 할 때마다 컴포넌트 트리가 리랜더링
        되는 문제를 일으킵니다. 필요하다면 여전히 아래의 예제처럼 앱을
        최적화할 수 있습니다.
      </p>
    ),
  },
}
