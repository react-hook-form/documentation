import * as React from "react"
import { Link as PageLink } from "gatsby"
import CodeArea from "../../components/CodeArea"
import accessibleCodeBase from "../../components/codeExamples/accessibleCodeBase"
import accessibleCodeFinal from "../../components/codeExamples/accessibleCodeFinal"
import { step1, step2, step3 } from "../../components/codeExamples/formWizard"
import * as CodeExampleTestingForm from "../../components/codeExamples/testingForm"
import smartForm from "../../components/codeExamples/smartForm"
import form from "../../components/codeExamples/form"
import input from "../../components/codeExamples/input"
import typographyStyles from "../../styles/typography.module.css"
import buttonStyles from "../../styles/button.module.css"
import customHookWithValidationResolver from "../../components/codeExamples/customHookWithValidationResolver"
import virtualizedList from "../../components/codeExamples/virtualizedList"

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
        같은 라이브러리 말이죠. 뿐만 아니라 React Hook Form 을 활용하면 제어
        컴포넌트의 리랜더링 또한 최적화됩니다. 아래에 제어되는 폼과 비제어 폼이
        결합된 상태에서 폼 유효성 검사흘 하는 예를 보실 수 있습니다.
      </p>
    ),
  },
  errorMessage: {
    title: "에러 메세지",
    description: (
      <p>
        에러 메세지는 입력값에 관하여 문제가 있을 때 사용자에게 시각적인
        피드백을 줍니다. React Hook Form 은 쉽게 에러를 되짚을 수 있도록 에러
        객체를 제공합니다. 하지만 더 나은 방식으로 에러를 스크린에 랜더링하기
        위해 몇 가지 다른 방법이 있습니다.
      </p>
    ),
    register: (
      <>
        <code>register</code> 하면서 에러 메세지를 심어보세요. 쉽게{" "}
        <code>value</code> 속성에 에러 메세지를 넣을 수 있습니다.
      </>
    ),
    component: "에러 출력을 돕기 위해 ErrorMessage 컴포넌트를 만들어보세요.",
    optionalChaining: (
      <>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
          >
            옵셔널 체이닝
          </a>{" "}
          접근자 <code>?.</code> 는 <code>errors</code> 객체를 읽을 때{" "}
          <code>null</code> 이나 <code>undefined</code> 인 속성 때문에 에러가
          발생할 걱정을 하지 않고 객체의 속성에 접근할 수 있습니다.
        </p>
        <p>
          <code>{`errors?.firstName?.message`}</code>
        </p>
      </>
    ),
    get: (
      <p>
        만약 여러분의 프로젝트가{" "}
        <a href="https://lodash.com" target="_blank" rel="noopener noreferrer">
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
  },
  accessibility: {
    title: "접근성 (A11y)",
    description: (
      <>
        <p>
          React Hook Form 은 네이티브 폼 유효성 검사를 지원합니다. 그래서 고유의
          규칙을 설정하여 입력값을 검증할 수 있습니다. 우리는 대부분 커스텀
          디자인과 레이아웃을 적용하여 폼을 만들기 때문에 폼의 접근성(A11y)이
          보장되도록 만들어야 할 책임이 있습니다.
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
          </a>{" "}
          속성을 활용하여 향상된 접근성을 제공합니다.
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
          <a
            className={buttonStyles.links}
            href="https://github.com/bluebill1049/little-state-machine"
            target="_blank"
            rel="noopener noreferrer"
          >
            little state machine
          </a>{" "}
          을 상태 관리 라이브러리로 사용합니다 (더 친숙하다면{" "}
          <a
            className={buttonStyles.links}
            href="https://github.com/reduxjs/redux"
            target="_blank"
            rel="noopener noreferrer"
          >
            redux
          </a>
          로 교체할 수도 있습니다).
        </p>

        <p style={{ textAlign: "center" }}>♦</p>

        <p>
          <b className={typographyStyles.note}>1단계:</b> 라우트와 스토어를
          설정합니다.
        </p>
        <CodeArea
          rawData={step1}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          <b className={typographyStyles.note}>2단계:</b> 페이지를 생성하고,
          폼을 제출할 때 데이터를 스토어에 저장하도록 만든 뒤 다음 페이지로
          이동하도록 만듭니다.
        </p>
        <CodeArea
          rawData={step2}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          <b className={typographyStyles.note}>3단계:</b> 스토어에 모아진 모든
          데이터를 사용하여 최종 폼을 제출하거나 결과물을 출력하세요.
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

        <code className={typographyStyles.codeHeading}>
          <h2>Form</h2>
        </code>

        <p>
          <code>Form</code> 컴포넌트가 하는 일은 모든{" "}
          <code>react-hook-form</code> 메서드를 자손 컴포넌트로 넘기는 것입니다.
        </p>

        <CodeArea
          rawData={form}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <code className={typographyStyles.codeHeading}>
          <h2>Input / Select</h2>
        </code>

        <p>
          인풋 컴포넌트의 역할은 자기 자신을 <code>react-hook-form</code> 에
          등록하는 것입니다.
        </p>
        <CodeArea
          rawData={input}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <p>
          <code>Form</code> 컴포넌트를 사용하여 <code>react-hook-form</code> 의
          props를 자손 컴포넌트로 주입할 수 있고, 덕분에 쉽게 복잡한 폼을 만들고
          조합할 수 있습니다.
        </p>
      </>
    ),
  },
  fieldArrays: {
    title: "필드 배열",
    description: (
      <>
        <p>
          이 기능은 React Hook Form 이 제공하는 제일 유용한 기능 중 하나입니다.
          이 기능을 구현하기 위해 (다른 라이브러리 등의) 컴포넌트를 불러오는
          대신에 이미 있는 HTML 마크업을 활용할 수 있습니다. 핵심은 그 안에 있는{" "}
          <code>name</code> 속성입니다. React Hook Form 에서는 <code>name</code>{" "}
          속성이 여러분이 사용하고자 하는 자료 구조를 반영합니다.
        </p>

        <p>
          <b className={typographyStyles.note}>참고:</b> 더 복잡한 시나리오에
          대응하기 위한 커스텀 훅도 있습니다:{" "}
          <PageLink to="/api#useFieldArray">useFieldArray</PageLink>.
        </p>

        <p>
          아래의 예시는 인풋의 <code>name</code> 속성을 조작하여 어떻게 필드
          배열을 만들 수 있는지 보여줍니다.
        </p>

        <p>
          <b className={typographyStyles.note}>참고:</b> 여러분의 애플리케이션이
          삭제, 삽입, 앞에 붙이기(Prepend), 뒤에 붙이기(Append)를 지원해야
          한다면 <PageLink to="/api#Controller">Controller</PageLink> 로
          만들어진{" "}
          <a
            href="https://codesandbox.io/s/react-hook-form-v6-controller-append-prepepend-insert-7clz7"
            target="_blank"
            rel="noreferrer noopener"
          >
            구현체를 확인해보세요.
          </a>{" "}
        </p>
      </>
    ),
  },
  connectForm: {
    title: "폼 연결하기",
    description: (
      <p>
        폼을 만들 때, 인풋이 아주 깊게 중첩된 컴포넌트 트리 안에 있어야 할 때가
        있습니다. 그럴 때 <a href="/api#useFormContext">FormContext</a> 가 아주
        유용합니다. 하지만 <code>ConnectForm</code> 을 만들어 리액트의{" "}
        <a href="https://reactjs.org/docs/render-props.html">renderProps</a>{" "}
        패턴을 활용하여 개발자 경험을 향상시킬 수 있습니다. 이러한 컴포넌트를
        만들어 사용할 때의 이점은 어디서나 인풋을 React Hook Form과 연결할 수
        있다는 것입니다.
      </p>
    ),
  },
  conditionalControlledComponent: {
    title: "조건부 제어 컴포넌트",
    description: (
      <>
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
          하지만 이 작동방식은 제어 컴포넌트에는 잘 작동하지 않는데,{" "}
          <code>ref</code> 가 등록되어있지 않기 때문입니다. 이럴 때는 아래의
          방법을 사용할 수 있습니다.
        </p>
        <ul>
          <li>
            <p>인풋을 활성 상태를 토글하기</p>
          </li>
          <li>
            <p>모달과 팝업 폼을 위한 별도의 폼을 만들기</p>
          </li>
          <li>
            <p>
              <code>
                <a
                  href="https://reactjs.org/docs/hooks-effect.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  useEffect
                </a>
              </code>
              를 활용하여 커스텀 등록을 구현하기
            </p>
          </li>
          <li>
            <p>
              <PageLink to="/api#Controller">Controller</PageLink> 를 불러와서
              컴포넌트를 감싸면 알아서 register 와 unregister 처리하기
            </p>
          </li>
        </ul>
        <p>여기 활용 예제가 있습니다.</p>
      </>
    ),
  },
  formContext: {
    title: "FormContext 퍼포먼스",
    description: (
      <p>
        React Hook Form 의{" "}
        <PageLink to="/api/#useFormContext">FormContext</PageLink> 는{" "}
        <a
          href="https://reactjs.org/docs/context.html"
          target="_blank"
          rel="noreferrer noopener"
        >
          리액트의 Context
        </a>{" "}
        API를 기반으로 만들어졌습니다. 이를 통해 컴포넌트 트리에 걸쳐 매
        단계마다 props를 전달해줘야 하는 문제를 해결할 수 있습니다. 하지만 React
        Hook Form 이 상태 업데이트를 할 때마다 컴포넌트 트리가 리랜더링 되는
        문제를 일으킵니다. 필요하다면 여전히 아래의 예제처럼 앱을 최적화할 수
        있습니다.
      </p>
    ),
  },
  customHookwithResolver: {
    title: "Validation Resolver 를 커스텀 훅으로 정의하기",
    description: (
      <>
        <p>
          유효성 검사에 쓸 리졸버(resolver)를 커스텀 훅으로 만들 수 있습니다.
          커스텀 훅은 yup/Joi/Superstruct 같은 유효성 검사 방법과 쉽게 결합될 수
          있으며, 이런 방법들을 유효성 검사 리졸버 내부에서 사용할 수 있습니다.
        </p>
        <ul>
          <li>
            <p>
              메모이즈 된 유효성 검사 스키마(혹은 컴포펀트 바깥에 선언하여
              의존성이 생기지 않도록)를 정의하기
            </p>
          </li>
          <li>
            <p>커스텀 훅을 호출하면서 유효성 검사 스키마를 전달하기</p>
          </li>
          <li>
            <p>useForm 훅에 유효성 검사 리졸버를 전달하기</p>
          </li>
        </ul>

        <CodeArea rawData={customHookWithValidationResolver} />
      </>
    ),
  },
  workingWithVirtualizedList: {
    title: "시각화된 리스트를 다루기",
    description: (
      <>
        <p>
          데이터 표를 다루는 시나리오를 상상해봅시다. 이 테이블은 아마
          수백게에서 수천 개의 행을 포함하고 있고, 각각의 행은 인풋을 가지고
          있을 것입니다. 가장 이상적인 처리 방법은 뷰포트에 나타나는 아이템만
          랜더링하는 것이겠지만, 뷰에서 벗어난 DOM 을 아예 제거해버렸다가 다시
          추가하는 동작이 일어날 수 있습니다. 그러면 이전 아이템이 나타나야하는
          뷰포트로 돌아갔을 때 해당 아이템이 기본값으로 초기화될 것입니다.
        </p>

        <p>
          이 문제를 해결하기 위해서 필드를 수동으로 등록한 다음 프로그램적으로
          필드의 값을 설정해야 합니다.
        </p>

        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/bvaughn/react-window"
          >
            react-window
          </a>{" "}
          를 사용할 때의 예제는 다음과 같습니다.
        </p>

        <CodeArea
          rawData={virtualizedList}
          url="https://codesandbox.io/s/react-hook-form-with-react-window-b4j8n"
        />
      </>
    ),
  },
  testingForm: {
    title: "폼을 테스트하기",
    description: (
      <>
        <p>
          테스트는 아주 중요합니다. 코드에서 발생하는 버그나 실수를 줄이고,
          코드베이스를 리팩토링 할 때 안정성을 보장하기 때문입니다.
        </p>

        <p>
          우리는{" "}
          <a
            target="_ blank"
            rel="noopener noreferrer"
            href="https://testing-library.com/"
          >
            testing-library
          </a>{" "}
          사용을 권장합니다. 단순하고 사용자 행동에 더 초점을 맞추어 테스트를
          작성할 수 있기 때문입니다.
        </p>

        <p style={{ textAlign: "center" }}>♦</p>

        <p>
          <b className={typographyStyles.note}>1단계:</b> 테스트 환경을
          설정합니다.
        </p>

        <p>
          <code>mutationobserver-shim</code>을 설치하세요. react-hook-form 은
          <code>MutationObserver</code>를 사용하여 인풋이 DOM 으로부터 언마운트
          되었는지 감지하기 때문입니다.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> React Native 사용하는
          경우 기본, 당신은 설치할 필요가 없습니다{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/testing-library/jest-dom"
          >
            @testing-library/jest-dom
          </a>
          .
        </p>

        <CodeArea rawData={"npm install -D mutationobserver-shim"} />

        <p>
          <code>setup.js</code> 파일을 만들어 <code>mutationobserver-shim</code>{" "}
          를 가져옵니다.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> React Native 사용하는
          경우 네이티브, 당신은 만들어야합니다
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/react-hook-form/react-hook-form/blob/master/setup.native.ts"
          >
            setup.js
          </a>{" "}
          , 정의 <code>window</code> object.
        </p>

        <CodeArea
          rawData={'import "mutationobserver-shim";'}
          url="https://codesandbox.io/s/react-hook-form-unit-test-docs-ewpyt?file=/setup.js"
        />

        <p>
          마지막으로 <code>jest.config.js</code> 파일에서 <code>setup.js</code>{" "}
          를 가져오도록 설정합니다.
        </p>

        <CodeArea
          rawData={CodeExampleTestingForm.step1}
          url="https://codesandbox.io/s/react-hook-form-unit-test-docs-ewpyt?file=/setup.js"
        />

        <p>
          <b className={typographyStyles.note}>2단계:</b> 로그인 폼을
          작성해봅시다.
        </p>

        <p>
          폼에 맞는 role 속성을 설정했습니다. 이 속성들은 테스트를 작성할 때와
          접근성을 향상시킬 때 도움이됩니다. 더 자세한 정보는{" "}
          <a
            target="_ blank"
            rel="noopener noreferrer"
            href="https://testing-library.com/"
          >
            testing-library
          </a>{" "}
          의 문서를 확인하세요.
        </p>

        <CodeArea
          rawData={CodeExampleTestingForm.step2}
          url="https://codesandbox.io/s/react-hook-form-unit-test-docs-ewpyt?file=/src/App.js"
        />

        <p>
          <b className={typographyStyles.note}>3단계:</b> 테스트를 작성합니다.
        </p>

        <p>테스트를 작성할 때 아래의 기준을 따릅니다.</p>

        <ul>
          <li>
            <p>실패하는 테스트를 작성해봅니다.</p>

            <p>
              <code>waitFor</code> 및 <code>find*</code> 메소드를 사용하여 폼이
              제출되는 것을 감지합니다. <code>handleSubmit</code> 메서드는
              비동기적으로 실행되기 때문입니다.
            </p>
          </li>
          <li>
            <p>각 인풋에 대응하는 유효성 검사를 테스트합니다.</p>

            <p>
              <code>*ByRole</code> 메서드를 사용하여 각기 다른 엘리먼트를
              가져옵니다. 사용자가 실제로 이런 방식으로 여러분의 UI 컴포넌트를
              인지하기 때문입니다.
            </p>
          </li>
          <li>
            <p>성공하는 테스트를 실행시켜봅니다.</p>
          </li>
        </ul>

        <CodeArea
          rawData={CodeExampleTestingForm.step3}
          url="https://codesandbox.io/s/react-hook-form-unit-test-docs-ewpyt?file=/src/App.test.js"
        />
      </>
    ),
  },
}
