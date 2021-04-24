import * as React from "react"
import colors from "../../styles/colors"
import enzymeInput from "../../components/codeExamples/enzymeInput"
import focusController from "../../components/codeExamples/focusController"
import toggleFields from "../../components/codeExamples/toggleFields"
import CodeArea from "../../components/CodeArea"
import * as typographyStyles from "../../styles/typography.module.css"
import * as tableStyles from "../../styles/table.module.css"
import * as buttonStyles from "../../styles/button.module.css"

export default {
  title: "자주 묻는 질문",
  header: {
    title: "자주 묻는 질문",
    description: "자주 묻는 질문",
  },
  questions: [
    {
      title: "React Hook Form 의 퍼포먼스",
      description: (
        <p>
          이 커스텀 훅을 만들 때 가장 먼저 고려된 목표 중 하나가 퍼포먼스입니다.
          React Hook Form 은 비제어 컴포넌트를 활용하고 있기 때문에{" "}
          <code>ref</code> 에서 <code>register</code> 함수가 실행됩니다. 이러한
          접근 방식은 사용자가 타이핑하거나 값을 변경할 때 리랜더링이 일어나는
          양을 줄여줄 것입니다. 제어 컴포넌트가 아니기 때문에 페이지에
          컴포넌트가 마운트되는 속도도 훨씬 더 빠릅니다. 마운트되는 속도에 대해
          여러분이 참고하실 수 있도록 간단한 속도 비교 테스트를{" "}
          <a
            href="https://github.com/bluebill1049/react-hook-form-performance-compare"
            target="_blank"
            rel="noopener noreferrer"
          >
            이 저장소에
          </a>{" "}
          올려 두었습니다.
        </p>
      ),
    },
    {
      title: "접근성 있는 입력 에러와 메세지를 어떻게 만드나요?",
      description: (
        <p>
          React Hook Form 은{" "}
          <a
            href="https://ko.reactjs.org/docs/uncontrolled-components.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            비제어 컴포넌트
          </a>
          를 기반으로 하고 있으므로, 접근성이 높은 커스텀 폼을 쉽게 만들 수
          있습니다.
        </p>
      ),
    },
    {
      title: "클래스 컴포넌트와 사용할 수 있나요?",
      description: (
        <>
          <p>
            아니오. 사용할 수 없습니다만, 클래스 컴포넌트를 감싸는 래퍼를 만들
            수는 있습니다.
          </p>

          <blockquote>
            여러분은 클래스 컴포넌트 안에서 훅을 사용할 수 없습니다. 하지만
            확실히 클래스 컴포넌트와 훅을 사용하는 함수 컴포넌트를 같은 트리
            안에서 섞어 사용할 수 있습니다. 컴포넌트가 클래스인지, 훅을 사용하는
            함수 컴포넌트인지는 개별 컴포넌트의 세부 구현에 불과합니다. 긴
            안목으로 보아 우리는 사람들이 훅을 우선적으로 고려하여 리액트
            컴포넌트를 작성하길 기대합니다.
          </blockquote>
        </>
      ),
    },
    {
      title: "폼을 어떻게 리셋하나요?",
      description: (
        <>
          <p>폼을 초기화하는데 두 가지 방법이 있습니다.</p>
          <ul>
            <li>
              <b>HTMLFormElement.reset()</b>
              <p>
                이 메서드는 폼의 리셋 버튼을 누르는 것과 똑같이 동작하지만,
                오로지 <code>input/select/checkbox</code> 값들만 초기화합니다.
              </p>
            </li>
            <li>
              <b>
                React Hook Form API: <code>reset()</code>
              </b>
              <p>
                React Hook Form 의 <code>reset</code> 메서드는 모든 필드 값을{" "}
                리셋하며, 또한 폼 안의 모든 <code>errors</code> 를 초기화합니다.
              </p>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "어떻게 폼의 기본값을 설정하나요?",
      description: (
        <p>
          React Hook Form 은 비제어 컴포넌트를 활용합니다. 비제어 컴포넌트를
          사용하면 <code>defaultValue</code> 나 <code>defaultChecked</code> 값을
          개별 필드에 넣어 기본값을 설정할 수 있습니다. 하지만 훅에서 기본적으로
          손쉽게 모든 인풋의 기본값을 설정할 수 있는 방법을 제공합니다. 아래의
          예제를 보세요.
        </p>
      ),
    },
    {
      title: "ref 를 공유할 수 있나요?",
      description: (
        <p>
          React Hook Form 은 입력 값을 모으기 위해 <code>ref</code> 를 필요로
          합니다. 하지만 <code>ref</code> 를 다른 목적으로 (예: 해당 뷰로
          스크롤하기) 활용하고 싶을 수도 있습니다. 아래의 예제로 그 방법을
          확인해보세요.
        </p>
      ),
    },
    {
      title: "만약에 ref 에 접근할 수 없다면 어떻게 하죠?",
      description: (
        <>
          <p>
            사실 <code>ref</code> 없이 <code>register</code> 를 할 수 있습니다.
            수동으로 <code>setValue</code>, <code>setError</code> 그리고{" "}
            <code>trigger</code> 를 사용하면 됩니다.
          </p>

          <p>
            <b className={typographyStyles.note}>참고:</b> <code>ref</code> 가
            등록되지 않았기 때문에, React Hook Form 은 인풋에 이벤트 리스너를
            등록할 수 없을 겁니다. 따라서 인풋 값과 에러를 수동으로 업데이트 해
            주어야 합니다.
          </p>
        </>
      ),
    },
    {
      title: "브라우저 호환성은 어떤가요?",
      description: (
        <>
          <p>React Hook Form 은 모든 메이저 브라우저를 지원합니다.</p>

          <p>
            오래된 IE11 를 지원하려면, react-hook-form IE11 버전을 불러와서
            사용할 수 있습니다.
          </p>
        </>
      ),
    },
    {
      title: "왜 첫 번째 키 입력이 동작하지 않을까요?",
      description: (
        <>
          <p>
            <code>value</code> 대신에 <code>defaultValue</code> 를 사용하고
            있는지 다시 확인해주세요.
          </p>

          <p>
            React Hook Form 은 비제어 컴포넌트를 활용하기 때문에{" "}
            <code>onChange</code> 를 사용하여 <code>state</code> 를 바꾸고, 그
            값을 인풋의 <code>value</code> 에 반영해줄 필요가 없습니다. 따라서{" "}
            <code>value</code> 자체가 필요 없습니다. 사실 초기 값을 지정하고자
            할 때 <code>defaultValue</code> 만 넣어주면 됩니다.
          </p>
        </>
      ),
    },
    {
      title: "MutationObserver 때문에 테스트가 실패하는데요?",
      description: (
        <p>
          만약에 테스트하는데 어려움을 겪고 계시다면{" "}
          <code>MutationObserver</code> 때문입니다.{" "}
          <code>mutationobserver-shim</code> 패키지를 설치하고{" "}
          <a
            href="https://jestjs.io/docs/en/configuration"
            target="_blank"
            rel="noopener noreferrer"
          >
            setup.js 파일
          </a>
          에서 불러오세요.
        </p>
      ),
    },
    {
      title: "React Hook Form 을 Formik, Redux Form 과 비교한다면?",
      description: (
        <>
          <p>
            먼저, 모든 라이브러리들은 폼을 만드는 과정을 쉽고 좋게 만들겠다는
            공통의 문제를 해결하려고 합니다. 하지만 세 라이브러리는 약간
            근본적인 차이를 가지고 있고, react-hook-form 는 기본적으로 비제어
            컴포넌트를 활용하고 있습니다. 그리하여 여러분의 폼이 최대한의
            퍼포먼스를 내고 최소한의 리랜더링만 발생하도록 합니다. 그 위에
            react-hook-form 은 리액트 훅을 기반으로 만들어졌으며 훅으로
            사용됩니다. 따라서 별도의 컴포넌트를 불러올 필요가 없습니다. 아래에
            더 자세한 차이점을 표기했습니다.
          </p>

          <div className={tableStyles.tableWrapper}>
            <table className={tableStyles.table}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${colors.lightPink}` }}>
                  <th width={100} />
                  <th width={250}>
                    <p>React Hook Form</p>
                  </th>
                  <th>
                    <p>Formik</p>
                  </th>
                  <th>
                    <p>Redux Form</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>컴포넌트</b>
                  </td>
                  <td>
                    <a
                      href="https://ko.reactjs.org/docs/uncontrolled-components.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      비제어
                    </a>{" "}
                    &{" "}
                    <a
                      href="https://ko.reactjs.org/docs/forms.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      제어
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://ko.reactjs.org/docs/forms.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      제어
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://ko.reactjs.org/docs/forms.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      제어
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>랜더링</b>
                  </td>
                  <td>최소한의 리랜더링</td>
                  <td>인풋에 타이핑하면서 지역 상태가 변할떄마다 리랜더링</td>
                  <td>
                    인풋에 타이핑하면서 상태 관리 라이브러리(Redux)의 상태가
                    바뀔 때마다 리랜더링
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>API</b>
                  </td>
                  <td>훅</td>
                  <td>컴포넌트 (RenderProps, Form, Field) + 훅</td>
                  <td>컴포넌트 (RenderProps, Form, Field)</td>
                </tr>
                <tr>
                  <td>
                    <b>패키지 크기</b>
                  </td>
                  <td>
                    작음
                    <br />
                    <code>
                      react-hook-form@6.0.0
                      <br />
                      <b className={typographyStyles.note}>8.9KB</b>
                    </code>
                  </td>
                  <td>
                    중간
                    <br />
                    <code>
                      formik@2.1.4
                      <br />
                      <b className={typographyStyles.note}>15KB</b>
                    </code>
                  </td>
                  <td>
                    큼
                    <br />
                    <code>
                      redux-form@8.3.6
                      <br />
                      <b className={typographyStyles.note}>26.4KB</b>
                    </code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>유효성 검사</b>
                  </td>
                  <td>
                    내장됨,{" "}
                    <a
                      href="https://github.com/jquense/yup"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Yup
                    </a>
                    ,{" "}
                    <a
                      href="https://github.com/hapijs/joi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Joi
                    </a>
                    ,{" "}
                    <a
                      href="https://github.com/ianstormtaylor/superstruct"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Superstruct
                    </a>{" "}
                    혹은 직접 제작 가능
                  </td>
                  <td>
                    직접 만들어야 하거나{" "}
                    <a
                      href="https://github.com/jquense/yup"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Yup
                    </a>
                  </td>
                  <td>직접 만들어야 하거나 플러그인</td>
                </tr>
                <tr>
                  <td>
                    <b>러닝 커브</b>
                  </td>
                  <td>낮음</td>
                  <td>중간</td>
                  <td>중간</td>
                </tr>
                <tr>
                  <td>
                    <b>현황</b>
                  </td>
                  <td>중간 수준의 커뮤니티이며 성장 중</td>
                  <td>큰 커뮤니티: 커뮤니티 안에서 잘 정립된 폼 라이브러리</td>
                  <td>큰 커뮤니티: 커뮤니티 안에서 잘 정립된 폼 라이브러리</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: "제어 컴포넌트와 조합할 수 있나요?",
      description: (
        <>
          <p>
            짧게 답변드리면, <b>할 수 있습니다.</b>
          </p>
          <p>
            React-hook-form 은 사용자가 제어되는 폼을 만들도록 권장하진 않지만{" "}
            제어 컴포넌트와 쉽게 조합할 수 있습니다.
          </p>
          <p>
            그 방법은 <code>watch</code> API 를 사용하여 각 인풋 값의 변화를
            관찰하고 value prop 에 할당하는 것입니다.
          </p>
          <p>
            또는 감싸는 컴포넌트인{" "}
            <a
              href="https://www.react-hook-form.com/api#Controller"
              title="React Hook Form Controller"
            >
              Controller
            </a>{" "}
            을 사용하여 커스텀 레지스터를 관리 할 수 ​​있습니다.
          </p>
        </>
      ),
    },
    {
      title: "React Hook Form 테스트하기",
      description: (
        <div>
          <ul>
            <li>
              <p>
                왜 리액트 네이티브 환경(
                <code>react-native-testing-library</code>)에서 테스트가 되지
                않나요?
              </p>

              <p>
                React Hook Form 은 서버 사이드 랜더링 중에는 인풋을 등록할 수
                없습니다. 따라서 리액트 네이티브 환경에서 테스트 할 때{" "}
                <code>window</code> 객체가 <code>undefined</code> 가 됩니다.
                간단히 고치는 방법으로 <code>window</code> 객체를 스텁(stub)으로
                만들면 등록이 가능합니다.
              </p>
            </li>
            <li>
              <p>
                왜 <code>act</code> 경고가 뜨나요?
              </p>

              <p>
                React Hook Form 의 모든 유효성 검사 메서드는 async 함수로
                처리됩니다. 따라서{" "}
                <a
                  className={buttonStyles.codeAsLink}
                  href="https://reactjs.org/docs/test-utils.html#act"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  act
                </a>{" "}
                함수 실행 시 <code>async</code> 를 감싸주는 것이 중요합니다.
              </p>
            </li>
            <li>
              <p>왜 입력값을 바꿀 때 이벤트가 발생하지 않나요?</p>

              <p>
                React Hook Form 은 입력값이 바뀔 때 <code>input</code> 이벤트를
                사용합니다. 만약 <strong>react-testing-library</strong> 를
                사용하고 계시다면, 손쉽게
                <code>fireEvent.input</code> 로 바꾸면 됩니다. 여기{" "}
                <a
                  className={buttonStyles.codeAsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://codesandbox.io/s/react-hook-form-test-s4j7c?from-embed"
                >
                  예제 링크가 있습니다
                </a>
                .
              </p>
              <p>
                만약 <strong>enzyme</strong> 를 사용하고 계시다면, 인풋의 DOM
                노드에 수동으로 <code>value</code> 를 설정해주시고, input
                이벤트를 실행하셔야 합니다.
              </p>
              <CodeArea rawData={enzymeInput} />
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "watch vs getValues vs state",
      description: (
        <div>
          <ul>
            <li>
              <p>
                <b className={typographyStyles.note}>watch:</b> 이벤트 리스너를
                통해 인풋의 변경을 구독하고, 구독하고 있는 인풋 필드에 따라
                리랜더링됩니다.{" "}
                <a
                  href="https://codesandbox.io/s/react-hook-form-watch-with-radio-buttons-and-select-examples-ovfus"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  이 codesandbox
                </a>{" "}
                에서 실제 동작을 확인하실 수 있습니다.
              </p>
            </li>
            <li>
              <p>
                <b className={typographyStyles.note}>getValues</b>: 커스텀 훅
                안에 저장되어있는 값을 레퍼런스로 가져옵니다. 빠르고 리소스를
                적게 먹습니다. 이 메서드는 리랜더링을 일으키지 않습니다.
              </p>
            </li>
            <li>
              <p>
                <b className={typographyStyles.note}>지역 상태</b>: React 지역
                상태는 단순히 인풋의 상태를 표현하는 것 뿐 아니라 어떤 것이
                랜더되어야 할지도 결정합니다. 이 경우 매 인풋 값이 바뀔때마다
                리랜더링이 일어납니다.
              </p>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "왜 삼항 연산자를 적용한 기본값은 의도한대로 반응하지 않나요?",
      description: (
        <>
          <p>
            React Hook Form 은 전체 폼과 인풋을 제어하지 않습니다. 그래서
            리액트는 실제 입력 값이 바뀌었는지 알아차리지 못하는 것입니다. 이
            문제를 해결하기 위해 인풋 컴포넌트에 고유의 <code>key</code> prop 을
            전달해줄 수 있습니다. <code>key</code> prop 에 대해서 더 자세히
            알아보시려면{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://kentcdodds.com/blog/understanding-reacts-key-prop"
            >
              Kent C. Dodds 가 쓴 이 글을 읽어보세요
            </a>
            .
          </p>
          <CodeArea
            rawData={toggleFields}
            url="https://codesandbox.io/s/react-hook-form-faq-toggle-fields-3htr6"
          />
        </>
      ),
    },
    {
      title:
        "shouldFocusError 옵션을 주어도 Controller 에는 동작하지 않는데요?",
      description: (
        <>
          <p>
            유효성 검사 후 에러가 발생할 때, React Hook Form 은 자동으로 잘못된
            인풋 엘리먼트로 포커스를 맞춥니다. 그 인풋 엘리먼트는 적절하게 ref
            가 할당되어 있어야 합니다. 예를 들어 기본 <code>{`<input />`}</code>{" "}
            이나, 적절하게 ref 를 드러내는 서드파티 컴포넌트(예: MUI의
            <code>{`<TextField inputRef={register({required: 'Field Required'})} />`}</code>
            )처럼 말입니다.
          </p>

          <p>
            하지만 MUI의 <code>{`<Autocomplete>`}</code> 나, AntD 의{" "}
            <code>{`<XX>`}</code> 같은 일부 서드파티 컴포넌트는 형태가 바뀌기
            때문에 ref 를 예측하기 아주 어렵습니다. 그래서 React Hook Form 은
            유효성을 검사하고 에러를 적절히 찾아닐 수 있지만 이런 컴포넌트에
            바로 포커스를 맞출 수 없습니다.
          </p>

          <p>
            우회 해결책으로 실제로 인풋 ref 를 가져올 수 있다면, 유효성 검사 후
            에러가 발생할 때 수동으로 서드파티 컴포넌트의 포커스를 지정해줄 수
            있습니다.
          </p>
          <CodeArea rawData={focusController} />

          <p>
            제어되는 외부 컴포넌트에 자동으로 포커스를 맞추는 기능을 구현하는
            것이 어렵다면, "에러 발생 시 자동으로 포커스 옮기기" 기능을 비활성화
            할 수도 있습니다. 아마도 이렇게 만드는 것이 어떤 경우에는 더 나은
            사용자 경험을 제공해 줄 수도 있습니다. 사용 예:{" "}
            <code>{`useForm({shouldFocusError: false});`}</code>
          </p>
        </>
      ),
    },
    {
      title: "모달이나 탭 폼을 다룰 때는 어떻게 하나요?",
      description: (
        <>
          <p>
            React Hook Form 은 각각의 input 안의 상태를 담아두는 방식으로
            네이티브 폼의 동작을 활용하는 기본 원리를 가지고 있습니다. 이 원리를
            이해하는 것이 중요합니다(커스텀 <code>register</code> 를{" "}
            <code>useEffect</code> 안에서 실행하는 경우 제외). 모달이나 탭의
            폼을 다룰 때 흔히 잘못 이해하는 부분 중 하나가 폼/인풋 을 마운트하고
            언마운트할 때 입력 상태가 그대로 남아있으리라 생각하는 것입니다.
            대신 올바르게 구현하려면 모달이나 각각의 탭 안에 폼을 새로이
            만들면서 각각의 단계별 데이터를 지역 상태나 전역 상태로 보존하셔야
            합니다.
          </p>

          <ul>
            <li>
              <a
                href="https://codesandbox.io/s/react-hook-form-modal-form-conditional-inputs-c7n0r"
                target="_blank"
                rel="noopener noreferrer"
              >
                모달 폼과 토글 인풋 예제
              </a>
            </li>
            <li>
              <a
                href="https://codesandbox.io/s/tabs-760h9"
                target="_blank"
                rel="noopener noreferrer"
              >
                탭 폼 예제
              </a>
            </li>
          </ul>
        </>
      ),
    },
    // {
    //   title: "마운트 해제 된 구성 요소 경고?",
    //   description: (
    //     <>
    //       <p>
    //         <code> useForm </code>이 가져 오는 동안 비동기 제출 함수 실행 마운트
    //         해제하면 React at {""}에서 다음과 같은 경고가 표시됩니다.
    //         <b> 개발 빌드 </b>.
    //       </p>
    //
    //       <blockquote>
    //         마운트되지 않은 구성 요소에서 React 상태 업데이트를 수행 할 수
    //         없습니다.
    //       </blockquote>
    //
    //       <p>
    //         이것은 prod 빌드에서와 같은 경우가 아닙니다. React 빠른 새로 고침과
    //         호환됩니다. 입력의 <code> ref </code> {""}
    //         빠른 새로 고침 중에는 콜백이 다시 실행되지 않으므로 dev에서만 후크
    //         마운트 해제 검사를 비활성화했습니다.
    //       </p>
    //     </>
    //   ),
    // },
  ],
}
