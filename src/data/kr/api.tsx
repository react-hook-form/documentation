import * as React from "react"
import colors from "../../styles/colors"
import CodeArea, { CodeSandBoxLink } from "../../components/CodeArea"
import useFieldArrayArgument from "../../components/codeExamples/useFieldArrayArgument"
import generic from "../generic"
import typographyStyles from "../../styles/typography.module.css"
import buttonStyles from "../../styles/button.module.css"
import tableStyles from "../../styles/table.module.css"

export default {
  title: "API 설명서",
  header: {
    description:
      "단순화된 API 를 통해 최고의 DX 를 제공하는데 초점을 맞추었습니다.",
  },
  useForm: {
    title: "useForm",
    intro: (
      <>
        <code>useForm</code> 을 호출하여 다음의 메소드들을 사용할 수 있습니다.{" "}
      </>
    ),
    description: (
      <p>
        <code>useForm</code> 에서는 <b>옵셔널</b>한 인자도 있습니다. 아래의
        예제는 모든 옵션의 기본값을 보여줍니다.
      </p>
    ),
    validateCriteriaMode: (
      <ul style={{ marginLeft: 0, paddingLeft: 15 }}>
        <li>
          <p>
            <code>firstError</code>(기본값) 으로 설정한 경우, 각 필드의 첫 번째
            에러만 수집됩니다.
          </p>
        </li>
        <li>
          <p>
            <code>all</code> 로 설정할 경우, 각 필드의 모든 에러가 수집됩니다.
          </p>
        </li>
      </ul>
    ),
    validationResolver: (goToSection) => (
      <>
        <p>
          이 콜백 함수는 어떠한 스키마나 커스텀 유효성 검사 함수를 끼워넣어
          실행시킬 수 있도록 합니다. 이 함수는 전체 폼의 <code>values</code> 를
          인자로 가지고 있으며, 결과를 검증한 다음
          <code>values</code> 와 <code>errors</code> 값 모두를 리턴해야 합니다.
          자세한 내용은
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("validationResolver")}
          >
            validationResolver
          </button>{" "}
          섹션에서 확인하세요.
        </p>
        <p>
          <b className={typographyStyles.note}>참고:</b> 이 함수는 훅 안에서
          캐싱됩니다. 함수를 컴포넌트 바깥으로 옮기거나 메모이즈 해셔야 할
          겁니다.
        </p>
      </>
    ),
    validateContext: (
      <>
        <p>
          이 컨텍스트 객체는 가변이며, <code>resolver</code> 의 두 번째 인자로
          주입되거나{" "}
          <a
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </a>{" "}
          유효성 검사의 컨텍스트 객체로 주입됩니다.
        </p>
      </>
    ),
    validateOnSubmit: (
      <>
        유효성 검사는 <code>submit</code> 이벤트에서 트리거되며, 유효하지 않은
        입력은 <code>onChange</code> 이벤트 리스너를 연결하여 유효성을 다시
        확인합니다.
      </>
    ),
    validateOnBlur: (
      <>
        <code>blur</code> 이벤트에서 유효성 검사가 트리거됩니다.
      </>
    ),
    validateOnChange: (
      <>
        유효성 검사는 각 입력창의 <code>change</code> 이벤트로 시작되어, 여러번
        다시 렌더링합니다. 이 방법은 랜더링 성능을 떨어뜨리므로 추천하지
        않습니다.
      </>
    ),
    validationOnAll: (
      <>
        유효성 검사는 <code>blur</code> 및 <code>change</code>
        이벤트에서 트리거됩니다. 경고 : <code>onChange</code>
        모드와 마찬가지로 <code>all</code> 옵션을 활성화하면 성능에 큰 영향을 줄
        수 있습니다.
      </>
    ),
    validationOnTouched: <>입력이 터치 될 때까지 유효성 검사가 트리거됩니다.</>,
    defaultValues: (goToSection) => (
      <>
        <p>
          입력의 기본값을 <code>defaultValue/defaultChecked</code> 로 설정
          하거나{" "}
          <a
            className={buttonStyles.links}
            href="https://ko.reactjs.org/docs/uncontrolled-components.html"
          >
            (기본값에 대한 React 문서를 읽어보세요)
          </a>
          , <code>defaultValues</code> 를 옵셔널 인수로 전달 하여 전체 폼의
          기본값을 채울 수 있습니다.
        </p>

        <p>
          <b className={typographyStyles.note}>중요:</b>{" "}
          <code>defaultValues</code> 는 커스텀 훅 안에서 캐싱되므로,{" "}
          <code>defaultValues</code> 값을 초기화하고 싶으시다면{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("reset")}
          >
            reset
          </button>{" "}
          API 를 사용하세요.
        </p>

        <p>
          <b className={typographyStyles.note}>참고:</b>{" "}
          <code>defaultValues</code> 에서 정의된 값은{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("watch")}
          >
            watch
          </button>{" "}
          의 <code>defaultValue</code> 값으로 주입됩니다.
        </p>

        <p>
          <b className={typographyStyles.note}>참고:</b>{" "}
          <code>defaultValue</code> 는 수동으로 등록된 인풋(예:{" "}
          <code>{`register({ name: 'test' })`}</code>)에는 자동으로 생성되지
          않습니다. 왜냐하면 커스텀 <code>register</code> 를 사용하여 등록한
          필드는 React Hook Form 에 <code>ref</code> 를 전달하지 않기
          때문입니다.
        </p>
      </>
    ),
    validationSchema: (goToSection) => (
      <p>
        스키마 수준에서 폼 유효성 검사 규칙을 적용하기 위해 <code>Yup</code> 을
        사용하세요. 자세한 사항은{" "}
        <button
          className={buttonStyles.codeAsLink}
          onClick={() => goToSection("validationSchema")}
        >
          validationSchema
        </button>{" "}
        섹션을 참고하세요.
      </p>
    ),
    reValidateMode: (
      <p>
        이 옵션을 사용하여 입력의 재유효성 검사를 언제 할지 설정 할 수 있습니다.
        (기본적으로 입력이 변경될 때 유효성 검사가 트리거 됩니다. )
      </p>
    ),
    validationFields: (
      <p>
        어떤 필드가 검증될 것인지 배열 형태로 전달합니다. 이 옵션은 어떤 필드에
        유효성 검사를 적용할 지 토글(toggle)을 원할 경우에 유용합니다.
      </p>
    ),
    submitFocusError: (
      <>
        <p>
          기본적으로 사용자가 폼을 제출하고 에러가 있는 경우, 에러가 있는 첫번째
          필드에 포커스 됩니다.
        </p>

        <p>
          <b className={typographyStyles.note}>참고:</b> <code>ref</code> 로
          등록된 필드만 작동합니다. 수동으로 등록하면 동작하지 않습니다. 예 :{" "}
          <code>{`register({ name: 'test' }) // 동작하지 않음`}</code>{" "}
        </p>

        <p>
          <b className={typographyStyles.note}>참고:</b> 에러가 발생한 입력값에
          포커스되는 순서는 <code>register</code> 된 순서를 따릅니다.
        </p>
      </>
    ),
    shouldUnregister: (
      <p>
        기본적으로 입력이 제거되면 React Hook Form 은{" "}
        <code>MutationObserver</code> 를 사용하여 언마운트 된 입력을 감지하고{" "}
        <code>unregister</code> 합니다. 그러나 언마운트 할 때 입력 상태가
        손실되지 않도록 <code>shouldUnregister</code> 를 <code>false</code> 로
        설정할 수 있습니다.
      </p>
    ),
  },
  unregister: {
    title: "unregister",
    description: (
      <>
        <p>
          이 함수로 단일 입력 혹은 배열로 지정된 여러 입력들을{" "}
          <code>unregister</code> 할 수 있습니다.
        </p>
        <p>
          <b className={typographyStyles.note}>참고:</b> 입력을 등록
          취소(unregister)하면, 제출된 폼 데이터에 해당 값이 더 이상 포함되지
          않습니다.
        </p>
      </>
    ),
  },
  register: {
    title: "register",
    description: (
      <>
        <p>
          이 함수에서 입력/선택(input/select) <code>Ref</code> 를 등록하고,
          React Hook Form 을 통한 유효성 검사를 적용할 수 있습니다.
        </p>
        <p>
          유효성 검사 규칙은 모두 HTML 표준을 기반으로 하며, 커스텀 유효성 검사
          규칙을 적용할 수 있습니다.
        </p>
        <p>
          <b className={typographyStyles.note}>중요:</b> <code>name</code>은{" "}
          <b>필수</b>이며 <b>단일값(unique)</b>이어야 합니다. 인풋의 name은
          점(dot)과 괄호 구문도 지원하므로, 중첩 된 폼 필드를 쉽게 만들 수
          있습니다. 예제는 다음과 같습니다.
        </p>
      </>
    ),
    fieldArray: (
      <p
        style={{
          paddingLeft: 10,
          borderLeft: `4px solid ${colors.lightPink}`,
        }}
      >
        간단한 배열 필드(<code>Array Fields</code>)를 다루고 있다면, 인풋 이름을{" "}
        <code>name[index]</code> 형태로 지정할 수 있습니다.
        <a
          className={buttonStyles.links}
          href="https://github.com/react-hook-form/react-hook-form/blob/master/examples/FieldArray.tsx"
          title="example for Field Array"
        >
          여기서 배열 필드 예제를 확인하세요
        </a>
        . 더 복잡한 로직을 구현해야 한다면, <code>useFieldArray</code> 단락을
        확인해보세요.
      </p>
    ),
    example: "제출 결과",
    selectHelp:
      "등록 옵션(Register Options)을 선택하면, 아래의 API 테이블이 업데이트됩니다.",
    options: {
      title: "Register Options",
      registerWithValidation: "유효성 검사 규칙을 지정하면서 등록할 경우",
      registerWithValidationMessage:
        "유효성 검사 규칙 및 에러 메시지를 지정하면서 등록할 경우",
      note: (goToSection) => (
        <>
          <h2 className={typographyStyles.title}>커스텀 등록</h2>
          <p>
            커스텀 컴포넌트와 <code>Ref</code>에 액세스 할 수 없는 경우, 입력을
            수동으로 등록 할 수 있습니다. 이는 실제로 React Native 또는{" "}
            <a
              href="https://github.com/JedWatson/react-select"
              target="_blank"
              rel="noopener noreferrer"
            >
              react-select
            </a>{" "}
            와 같은 커스텀 컴포넌트와 작업할 때 사용될 수 있습니다. 또한 이
            작업을 대신 처리해주는{" "}
            <button
              className={buttonStyles.codeAsLink}
              onClick={() => goToSection("Controller")}
            >
              Controller
            </button>{" "}
            컴포넌트를 제공하고 있습니다.
          </p>

          <p>
            Custome register를 사용하면, 입력은 더이상 ref로 등록되지 않으므로,{" "}
            <button
              className={buttonStyles.codeAsLink}
              onClick={() => goToSection("setValue")}
            >
              setValue
            </button>{" "}
            을 통해 입력 값을 업데이트해 주어야 합니다.
          </p>

          <p>
            <code
              className={typographyStyles.codeBlock}
            >{`register({ name: 'firstName' }, { required: true, min: 8 })`}</code>
          </p>

          <p>
            <b className={typographyStyles.note}>참고:</b> 값을 업데이트하는
            동안 커스텀 등록된 입력을 다시 렌더링 하도록 하려면, 등록된 입력의
            타입을 지정해 주어야 합니다.
          </p>

          <p>
            <code
              className={typographyStyles.codeBlock}
            >{`register({ name: 'firstName', type: 'custom' }, { required: true, min: 8 })`}</code>
          </p>

          <p>
            <b className={typographyStyles.note}>참고:</b> 같은 이름을 가진
            여러개의 라디오 인풋에는 유효성 검사를 마지막 인풋에 등록해야 훅이
            하나의 그룹으로 인지하여 검사를 실행합니다.
          </p>
        </>
      ),
    },
    validation: {
      required: (
        <>
          폼 제출을 위해 반드시 필요한 경우, true로 지정합니다. 에러시 반환할
          문자열 메세지는 <code>errors</code> 객체에 지정할수 있습니다.
        </>
      ),
      maxLength: "입력에 허용되는 최대 길이입니다.",
      minLength: "입력에 허용되는 최소 길이입니다.",
      max: "입력에 허용되는 최대 값입니다.",
      min: "입력에 허용되는 최소 값입니다.",
      pattern: "입력에 대한 정규식 패턴입니다.",
      validate: `콜백 함수를 인수로 전달하거나 콜백 함수의 객체를 전달하여 검증할 수 있습니다. (예제 참조)`,
    },
  },
  formState: {
    title: "formState",
    description: (
      <>
        <p>폼 상태(form state)에 대한 정보를 포함합니다</p>

        <p>
          <b className={typographyStyles.note}>중요:</b> <code>formState</code>{" "}
          는 랜더링 퍼포먼스 향상을 위해{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Proxy
          </a>{" "}
          로 감싸져 있습니다. 그러니 상태를 업데이트 하려면 <code>render</code>{" "}
          전에 읽거나 실행해야 합니다. 이 다시 렌더링 기능 생략 기능은 웹
          플랫폼에만 적용됩니다. React Native에서 <code>Proxy</code>를
          지원합니다.
        </p>
      </>
    ),
    isDirty: (
      <>
        사용자가 어떤 인풋이라도 수정했다면 <code>true</code> 가 됩니다.
        <p>
          <b className={typographyStyles.note}>참고:</b> 파일 타입의 인풋은
          애플리케이션 계층에서 관리가 되어야 합니다. 파일 선택을 취소할 수도
          있고{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/FileList"
            target="_blank"
            rel="noopener noreferrer"
          >
            FileList
          </a>{" "}
          객체도 있기 때문입니다.
        </p>
      </>
    ),
    isSubmitted: (
      <>
        사용자가 폼을 제출하고 나면 <code>true</code> 가 됩니다.{" "}
        <code>reset</code> 메서드가 호출될 때까지 이 상태는 유지됩니다.
      </>
    ),
    dirtyFields: "사용자가 수정한 필드들이 기록된 객체입니다.",
    touched: "사용자가 건드렸던 모든 인풋을 가지고 있는 객체입니다.",
    isSubmitting: (
      <>
        폼 제출하는 동안은 <code>true</code> 로, 그 후에는 <code>false</code> 가
        됩니다.
      </>
    ),
    submitCount: "폼을 제출한 횟수",
    isValid: (
      <>
        에러가 없다면 <code>true</code> 가 됩니다.
      </>
    ),
  },
  errors: {
    title: "errors",
    description: () => (
      <>
        <p>각 인풋에 대응되는 폼 에러 혹은 에러 메시지를 가진 객체입니다.</p>{" "}
      </>
    ),
    types: (
      <>
        <p style={{ marginTop: 0 }}>
          하나의 인풋에서 발생할 수 있는 모든 에러를 리턴하려 할 때 유용합니다.
          예를 들어, 최소 길이를 충족하면서 특수 문자를 포함해야 하는 패스워드
          필드를 검사할 때가 있습니다.
        </p>
        <p>
          <b className={typographyStyles.note}>참고:</b> 이 옵션을 사용하기
          위해서 <code>validateCriteriaMode</code> 옵션을 <code>all</code> 로
          설정해야 합니다.
        </p>
      </>
    ),
    message: `메시지는 기본적으로 빈 문자열입니다. 하지만 에러 메시지와 함께 유효성 검사를 함께 등록하면, 이 값이 반환됩니다.`,
    ref: `입력 엘레먼트에 대한 ref`,
    note: (goToSection) => (
      <p>
        <b className={typographyStyles.note}>참고: </b>{" "}
        <button
          className={buttonStyles.codeAsLink}
          onClick={() => goToSection("ErrorMessage")}
        >
          ErrorMessage
        </button>{" "}
        를 사용하여 오류 상태를 처리 할 수 ​​있습니다.
      </p>
    ),
  },
  watch: {
    title: "watch",
    description: (
      <>
        <p>
          지정된 인풋을 관찰(watch)하고, 그 값들을 반환하며, 렌더링 할 대상을
          결정할 때 유용합니다.
        </p>

        <ul>
          <li>
            <p>
              <code>defaultValue</code>가 정의되지 않은 경우,{" "}
              <code>register</code>가 아직 호출이 안되었기 때문에{" "}
              <code>watch</code>의 첫번째 렌더링에서는 <code>undefined</code> 을
              반환합니다. 하지만, 두번째 인수로 <code>defaultValue</code>를
              설정하여 값을 반환 할 수 있습니다.
            </p>
          </li>
          <li>
            <p>
              <code>useForm</code> 에서 <code>defaultValues</code>로 정의가 되어
              있다면, 첫번째 렌더링에서 <code>defaultValues</code>에 적용된
              내용을 반환합니다.
            </p>
          </li>
        </ul>
      </>
    ),
    tableTitle: {
      single: (
        <>
          name으로 입력값 확인 (lodash{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://lodash.com/docs/4.17.15#get"
          >
            get
          </a>{" "}
          기능과 유사)
        </>
      ),
      multiple: "여러 입력을 확인",
      all: "모든 입력을 확인",
    },
  },
  handleSubmit: {
    title: "handleSubmit",
    description: (
      <>
        <p>
          이 함수는 유효성 검사가 완료 되었을 때 폼 데이터를 전달합니다.
          원격으로도 호출 할 수 있습니다.
        </p>
        <p>
          <code className={typographyStyles.codeBlock}>
            handleSubmit(onSubmit)()
          </code>
        </p>
        <p>
          <b className={typographyStyles.note}>참고:</b> 비동기 유효성 검사를
          위한 <code>async</code> 함수를 전달할 수도 있습니다 . 예 :{" "}
        </p>
        <p>
          <code className={typographyStyles.codeBlock}>
            handleSubmit(async (data) =&gt; await fetchAPI(data))
          </code>
        </p>
      </>
    ),
  },
  reset: (goToSection) => ({
    title: "reset",
    description: (
      <>
        <p>
          이 함수는 폼 안의 필드 값과 에러를 초기화(reset) 합니다.{" "}
          <code>omitResetState</code>를 사용하면 자유롭게 특정 상태만 초기화할
          수 있습니다. 부가적으로 <code>values</code> 를 전달하면 이 값을
          초기화되는 폼의 기본 값으로 재설정 할 수 있습니다.
        </p>
        <p>
          <b className={typographyStyles.note}>참고:</b>{" "}
          <code>React-Select</code> 와 같이 <code>ref</code> 를 노출시키지 않는
          컴포넌트는,{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("setValue")}
          >
            setValue
          </button>
          를 통해 수동으로 입력값을 재설정해주어야 합니다. 또는{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("Controller")}
          >
            Controller
          </button>
          을 사용하여 제어 컴포넌트를 감싸 처리할 수 있습니다.
        </p>
        <p>
          <b className={typographyStyles.note}>참고:</b> <code>Controller</code>{" "}
          컴포넌트의 값을 재설정하려면
          <code>useForm</code> 호출 시 <code>defaultValues​​</code> 를
          지정해주어야 합니다.
        </p>
      </>
    ),
  }),
  setError: {
    title: "setError",
    description: (
      <>
        <p>
          이 함수를 사용하면 한개 혹은 그 이상의 입력값 에러를 수동으로 설정할
          수 있습니다.
        </p>
        <ul>
          <li>
            <p>
              이 메서드는 인풋과 연관된 에러인 경우 유효성 검사를 통과하면 에러
              값을 유지하지 않습니다.
            </p>
          </li>
          <li>
            <p>
              인풋 필드와 연관되지 않은 에러를 지정한 경우 에러 값이 유지됩니다.
              이 경우 반드시 <code>clearError</code>를 사용하여 수동으로
              제거해야합니다.
            </p>
          </li>
          <li>
            <p>
              <code>handleSubmit</code> 안에서 비동기적으로 유효성 검사를 수행한
              뒤 사용자에게 에러 피드백을 제공할 때 유용합니다.
            </p>
          </li>
        </ul>
      </>
    ),
  },
  clearError: {
    title: "clearErrors",
    description: (
      <ul>
        <li>
          <p>
            <code>undefined</code>: 모든 에러를 리셋
          </p>
        </li>
        <li>
          <p>
            <code>string</code>: 하나의 에러 리셋
          </p>
        </li>
        <li>
          <p>
            <code>string[]</code>: 여러개의 에러 리셋
          </p>
        </li>
      </ul>
    ),
  },
  setValue: {
    title: "setValue",
    description: (
      <>
        <p>
          이 함수를 통해 동적으로 인풋/셀렉트 값을 설정할 수 있습니다. 그와
          동시에, 아래의 조건이 충족할 때만 다시 랜더링되어 불필요한 리랜더링을
          피하려 합니다.
        </p>
        <ul>
          <li>
            <p>값이 업데이트 되면서 에러를 일으킬 때</p>
          </li>
          <li>
            <p>값이 업데이트 되면서 에러를 바로잡을 때</p>
          </li>
          <li>
            <p>
              맨 처음 실행되어 폼의 <code>isDirty</code> 상태가{" "}
              <code>true</code> 가 되었을 때
            </p>
          </li>
        </ul>
        <p>
          <code>shouldValidate</code>를 <code>true</code>로 설정하여, 필드
          유효성 검사를 트리거할 수 도 있습니다.
        </p>

        <CodeArea
          rawData={`setValue('name', 'value', { shouldValidate: true })`}
          withOutCopy
        />

        <p>
          필드를 건드려진 상태(dirty)로 설정하기 위해 <code>shouldDirty</code>{" "}
          옵션을 <code>true</code>로 설정할 수도 있습니다.
        </p>

        <CodeArea
          rawData={`setValue('name', 'value', { shouldDirty: true })`}
          withOutCopy
        />
      </>
    ),
  },
  getValues: {
    title: "getValues",
    description: (
      <>
        <p>
          폼의 값을 읽을 때 사용합니다. <code>watch</code> 와 다르게{" "}
          <code>getValues​​</code> 는 리랜더링을 일으키거나 입력값의 변화를
          구독하지 않는다는 것입니다. 이 함수는 아래의 방식으로 사용합니다.
        </p>

        <ul>
          <li>
            <p>
              <code>getValues​​()</code>: 폼의 전체 값을 읽습니다.
            </p>
          </li>
          <li>
            <p>
              <code>getValues​​('test')</code>: 폼 안의 개별 인풋 값을 읽습니다.
              <strong>name</strong>.
            </p>
          </li>
          <li>
            <p>
              <code>getValues​​(['test', 'test1'])</code>: 인풋의{" "}
              <strong>name</strong> 속성을 지정하여 여러 값을 읽습니다.
            </p>
          </li>
        </ul>
      </>
    ),
  },
  trigger: {
    title: "trigger",
    description: (
      <>
        <p>폼의 인풋/셀렉트 유효성 검사를 수동으로 트리거합니다.</p>
      </>
    ),
  },
  useFieldArray: {
    title: "useFieldArray",
    description: (
      <>
        <p>
          비제어 필드 배열 (동적 입력값) 에 대응하기 위한 커스텀 훅입니다. 이
          훅은 더 나은 사용자 경험과 폼 퍼포먼스를 제공하기 위해서 태어났습니다.{" "}
          <a
            href="https://www.youtube.com/watch?v=Q7lrHuUfgIs"
            target="_blank"
            rel="noopener noreferrer"
          >
            이 짧은 비디오를 보고
          </a>{" "}
          제어 vs 비제어 필드 배열을 비교할 수 있습니다.
        </p>

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <thead>
              <tr>
                <th>{generic.name.kr}</th>
                <th width="140px">{generic.type.kr}</th>
                <th width="90px">{generic.required.kr}</th>
                <th>{generic.description.kr}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>name</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>string</code>
                </td>
                <td></td>
                <td>연결할 필드 이름</td>
              </tr>
              <tr>
                <td>
                  <code>control</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>Object</code>
                </td>
                <td></td>
                <td>{generic.control.kr}</td>
              </tr>
              <tr>
                <td>
                  <code>keyName</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>
                    string = 'id'
                  </code>
                </td>
                <td></td>
                <td>
                  필드 배열 <code>key</code> 값, 기본값은 "id"입니다. 키 이름을
                  변경할 수 있습니다.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeArea rawData={useFieldArrayArgument} />

        <p>
          <b className={typographyStyles.note}>중요: </b>
          <code>useFieldArray</code>는 비제어 컴포넌트 기반으로 구성됩니다.
          아래의 참고 사항은 폼을 구현하면서 비제어 컴포넌트의 특성 상 유념해야
          하는 점을 새겨둘 수 있도록 돕습니다.
        </p>

        <ul>
          <li>
            <p>
              <code>useForm</code> hook 에 있는 <code>defaultValues</code> 를
              전달하여 <code>fields</code> 를 생성할 수 있습니다.
            </p>
          </li>
          <li>
            <p>
              <code>fields</code> 객체의 <code>id</code> 값을 컴포넌트의 key 로
              전달하는 것을 잊지 마세요.
            </p>
          </li>
          <li>
            <p>
              <code>fields[index]</code> 에 <code>defaultValue</code> 를
              설정하는 것을 잊지 마세요.
            </p>
          </li>
          <li>
            <p>
              액션을 연속하여 호출할 수 없습니다. 액션은 매 랜더링마다
              수행되어야 합니다.
            </p>
            <CodeArea
              withOutCopy
              rawData={`// ❌ The following is not correct
handleChange={() => {
  if (fields.length === 2) {
    remove(0);
  }
  append({ test: 'test' });
}}

// ✅ The following is correct and second action is triggered after next render
handleChange={() => {
  append({ test: 'test' });
}}

React.useEffect(() => {
  if (fields.length === 2) {
    remove(0);
  }
}, fields)
            `}
            />
          </li>
          <li>
            <p>
              만약 <code>useFieldArray</code> 를 사용하는 경우, 배열 인풋을
              등록할 때 <code>{`ref={register}`}</code> 대신{" "}
              <code>{`ref={register()}`}</code> 형태로 사용하는 것이 중요합니다.
              그래야 <code>register</code> 가 배열의 <code>map</code> 함수
              안에서 수행됩니다.
            </p>
          </li>
          <li>
            <p>
              <code>useEffect</code> 안에서 커스텀 등록을 하거나, 조건부
              랜더링을 할 때는 동작하지 않습니다. 조건부 랜더링을 하면서
              사용하려면 스타일을 정의하여 보이거나 보이지 않도록(visibility)
              토글하고 <code>validate</code> 함수를 사용하여 조건부 유효성
              검사를 수행하세요.
            </p>
          </li>
        </ul>
      </>
    ),
    table: (
      <>
        <tr>
          <td>
            <code>fields</code>
          </td>
          <td width={320}>
            <code className={typographyStyles.typeText}>
              object & {`{ id: string }`}
            </code>
          </td>
          <td>
            이 객체는 input 을 생성하고 랜더링하기 위한 주요 객체(source of
            truth)입니다.
            <p>
              <b className={typographyStyles.note}>중요: </b> 모든 입력 필드는
              비제어 상태이기 떄문에, <code>map</code> 으로 생성되는 컴포넌트에
              <code>id</code> 값을 필수로 전달해주어야 합니다. 그래야 리액트가
              어떤 아이템이 추가되고, 변경되고, 제거되는지 파악할 수 있습니다.
            </p>
            <p>
              예: <code>{`{fields.map(d => <input key={d.id} />)}`}</code>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>append</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (obj: object, shouldFocus: boolean = true) =&gt; void
            </code>
          </td>
          <td>입력 필드(들)를 현재 필드들 마지막에 추가합니다.</td>
        </tr>
        <tr>
          <td>
            <code>prepend</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (obj: object, shouldFocus: boolean = true) =&gt; void
            </code>
          </td>
          <td>입력 필드(들)를 현재 필드들 맨 앞에 추가합니다.</td>
        </tr>
        <tr>
          <td>
            <code>insert</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (index: number, value: object, shouldFocus: boolean = true) =&gt;
              void
            </code>
          </td>
          <td>입력 필드(들)를 특정 위치에 추가하고 포커스합니다.</td>
        </tr>
        <tr>
          <td>
            <code>swap</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (from: number, to: number) =&gt; void
            </code>
          </td>
          <td>입력 필드(들)의 위치를 서로 교체합니다.</td>
        </tr>
        <tr>
          <td>
            <code>move</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (from: number, to: number) =&gt; void
            </code>
          </td>
          <td>입력 필드(들)를 다른 위치로 이동합니다.</td>
        </tr>
        <tr>
          <td>
            <code>remove</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (index?: number | number[]) =&gt; void
            </code>
          </td>
          <td>
            특정 위치에 있는 입력 필드(들)를 제거합니다. 인덱스를 넣지 않았다면
            전체를 제거합니다.
          </td>
        </tr>
      </>
    ),
  },
  Controller: {
    title: "Controller",
    table: (
      <tbody>
        <tr>
          <td>
            <code>name</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>string</code>
          </td>
          <td>✓</td>
          <td>인풋의 고유한 이름.</td>
        </tr>
        <tr>
          <td>
            <code>control</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Object</code>
          </td>
          <td></td>
          <td>
            <code>control</code> 객체는 <code>useForm</code> 호출 후 리턴된 값
            중 하나입니다. 만약 <code>FormContext</code> 를 사용한다면 넣지
            않아도 됩니다.
          </td>
        </tr>
        <tr>
          <td>
            <code>as</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>React.ElementType</code>
          </td>
          <td></td>
          <td>
            <p style={{ marginTop: 0 }}>
              Controller 는 as 로 전달되는 컴포넌트에 <code>onChange</code>,{" "}
              <code>onBlur</code> 그리고 <code>value</code> props 를 주입합니다.
            </p>

            <p>
              Controller 컴포넌트에 전달되는 모든 prop 은 <code>as</code> 로
              전달되는 컴포넌트에도 주입됩니다. 예를 들어 <code>label</code>{" "}
              prop 을 요구하는 <code>Switch</code> 컴포넌트를 만들었다고 할 때,
              이 prop 을 Controller 컴포넌트에 직접 주입하여 여러분이 사용하는
              컴포넌트에 전달되도록 할 수 있습니다.
            </p>
            <CodeArea
              withOutCopy
              url="https://codesandbox.io/s/react-hook-form-v6-controller-24gcl"
              rawData={`<Controller 
  as={<TextInput />} 
  control={control} 
  name="test" 
/>`}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>render</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Function</code>
          </td>
          <td></td>
          <td>
            이것은{" "}
            <a
              href="https://reactjs.org/docs/render-props.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              render prop
            </a>{" "}
            입니다. React 엘리먼트를 리턴하는 함수이며, 컴포넌트에 이벤트나 값을
            결합할 수 있습니다. 이를 통해 <code>onChange</code>,{" "}
            <code>onBlur</code> 및 <code>value</code> 같은 표준적인 이름을
            사용하지 않는 외부 컴포넌트에 쉽게 적용할 수 있습니다.
            <CodeArea
              withOutCopy
              url="https://codesandbox.io/s/react-hook-form-v6-controller-24gcl"
              rawData={`<Controller
                  control={control}
                  name='test'
                  render={({ onChange, onBlur, value }) => (
                    <Input
                      onTextChange={onChange}
                      onTextBlur={onBlur}
                      textValue={value}
                    />
                  )}
                />
                <Controller render={props => <Input {...props} />} />`}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>defaultValue</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>any</code>
          </td>
          <td />
          <td>
            비제어 컴포넌트의 <code>defaultValue</code> 와 같습니다.{" "}
            <code>boolean</code> 값이 주어졌을 때는, 체크박스 입력값으로
            다루어집니다.
            <p>
              <b className={typographyStyles.note}>참고: </b>{" "}
              <code>defaultValue</code> 를 직접 주입하거나 <code>useForm</code>{" "}
              호출할 때 <code>defaultValues</code> 을 넣어주어야 할 것입니다.
            </p>
            <p>
              <b className={typographyStyles.note}>참고: </b> 만약 폼이 기본값과
              함께 <code>reset</code>을 호출한다면, 인라인 값으로{" "}
              <code>defaultValues</code> 를 제공하는 대신 useForm 을 호출할 때{" "}
              <code>defaultValues​​</code> 를 제공해주어야 합니다.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>rules</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Object</code>
          </td>
          <td />
          <td>
            <code>register</code> 를 호출할 때 지정하는 유효성 검사 규칙과 같은
            포맷으로 넣어줍니다.
            <CodeArea
              url="https://codesandbox.io/s/controller-rules-8pd7z?file=/src/App.tsx"
              withOutCopy
              rawData="rules={{ required: true }}"
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>onFocus</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>() =&gt; void</code>
          </td>
          <td></td>
          <td>
            <p style={{ marginTop: 0 }}>
              유효성 검사 에러가 발생했을 때 이 콜백을 이용하여 특정 인풋으로
              포커스를 이동시킬 수 있습니다. 이 함수는 포커스만 시킬 수 있다면
              React 및 React-Native 컴포넌트에 모두 적용됩니다.
            </p>

            <CodeSandBoxLink
              style={{
                position: "relative",
                left: 0,
                float: "right",
                display: "flex",
              }}
              url="https://codesandbox.io/s/react-hook-form-controllerautofocus-v6-eeo66"
            />
          </td>
        </tr>
      </tbody>
    ),
    description: (
      <>
        <p>
          React Hook Form 은 비제어 컴포넌트와 네이티브 입력을 활용하지만{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/JedWatson/react-select"
          >
            React-Select
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ant-design/ant-design"
          >
            AntD
          </a>{" "}
          혹은{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/"
          >
            Material-UI
          </a>{" "}
          와 같은 제어 컴포넌트를 사용하는 외부 라이브러리와 조합하여 사용하는
          것을 피할 수는 없습니다. 이 래퍼 컴포넌트는 위와 같은 컴포넌트와 쉽게
          조합하여 사용할 수 있도록 도와주는 역할을 합니다.
        </p>
      </>
    ),
  },
  useFormContext: {
    title: "useFormContext",
    introduction: (
      <>
        <p>
          폼 컨텍스트(Form Context) 에 접근하기 위한 훅 함수입니다.{" "}
          <code>useFormContext</code> 는 깊게 중첩된 구조에서 컨텍스트를 prop
          으로 전달하기 어려울 때 사용합니다.
        </p>
        <p>
          <code>useFormContext</code> 를 사용하려면 폼 컴포넌트를{" "}
          <code>FormContext</code> Provider 로 감싸야 합니다.
        </p>
      </>
    ),
    description: "",
  },
  control: {
    title: "control",
    description: (
      <p>
        이 객체는 React Hook Form 의 Controller 컴포넌트를 위해 만들어졌습니다.
        안에는 제어되는 컴포넌트를 React Hook Form 에 등록하기 위한 메서드가
        담겨 있습니다.
      </p>
    ),
  },
  ErrorMessage: {
    title: "ErrorMessage",
    description: (
      <p>입력값의 에러 메세지를 랜더링하기 위한 간단한 컴포넌트입니다.</p>
    ),
    table: {
      name: <>연결할 필드 이름.</>,
      errors: (
        <>
          <code>useForm</code> 에서 리턴된 <code>errors</code> 객체. FormContext
          를 쓴다면 필수 값은 아닙니다.
        </>
      ),
      message: <>인라인 오류 메시지.</>,
      as: (
        <>
          감싸질 컴포넌트나 HTML 태그. 예: <code>as="span"</code> 나{" "}
          <code>{`as={<Text />}`}</code> 등.
        </>
      ),
      render: (
        <>
          에러 메세지나 일반 메세지를 랜더링하기 위한{" "}
          <a
            href="https://reactjs.org/docs/render-props.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            render prop
          </a>{" "}
          입니다.
          <p>
            <b className={typographyStyles.note}>참고:</b> <code>messages</code>{" "}
            속성을 사용하기 위해 validateCriteriaMode 가 'all' 로 설정되어
            있어야 합니다.
          </p>
        </>
      ),
    },
  },
  resolver: {
    title: "resolver",
    description: (
      <>
        <p>
          이 함수는{" "}
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
          등의 외부 유효성 검사 방법들을 실행할 수 있도록 합니다. 실제로, 이
          함수의 목적은 단순히 외부 유효성 검사 라이브러리로 Yup 등을 제한된
          범위로 지원하는 정도에서 끝나지 않습니다. 우리는 다양한 라이브러리가
          React Hook Form 과 함께 동작할 수 있도록 지원하려 합니다. 심지어
          유효성 검사 로직을 직접 커스터마이징할 수도 있습니다.
        </p>

        <p>
          우리는 공식적으로 Yup, Joi 및 Superstruct를{" "}
          <a
            href="https://github.com/react-hook-form/react-hook-form-resolvers"
            target="_blank"
            rel="noopener noreferrer"
          >
            표준 리졸버
          </a>
          로 지원하고 있습니다.
        </p>

        <code
          style={{
            fontSize: 16,
            padding: 15,
            background: "#191d3a",
            borderRadius: 4,
            display: "block",
          }}
        >
          npm install @hookform/resolvers
        </code>

        <p>
          커스텀 리졸버를 작성하실 때{" "}
          <b className={typographyStyles.note}>참고 사항</b>:
        </p>

        <ul>
          <li>
            <p>
              반드시 <code>values</code> 와 <code>errors</code> 객체를 모두
              포함하여 리턴시키세요, 그리고 이 객체들의 기본값은 빈 객체{" "}
              <code>{`{}`}</code> 가 되어야 합니다.
            </p>
          </li>

          <li>
            <p>errors 객체의 키 값은 반드시 인풋과 연결되어야 합니다.</p>
          </li>

          <li>
            <p>
              <code>context</code> 인수는 가변 객체이므로 매번 리랜더링마다 바뀔
              수 있습니다. 따라서 이 함수는 커스텀 훅 안에서 캐싱될 필요가
              있습니다.
            </p>
          </li>

          <li>
            <p>
              입력값을 다시 검사하는 것은 사용자의 행동에 따라 한 필드당
              하나씩만 동작합니다. 왜냐하면 라이브러리 자체에서 에러 객체의 특정
              필드를 대조해보고 그에 따라 리랜더링을 실행하기 때문입니다.
            </p>
          </li>
        </ul>
      </>
    ),
  },
  useWatch: {
    title: "useWatch",
    description: (
      <p>
        <code>watch</code> API 와 같은 기능을 공유하고 있지만, 이 훅은 컴포넌트
        레벨의 리랜더링을 격리할 수 있으며 여러분의 애플리케이션에 더 나은
        퍼포먼스를 제공할 수 있습니다.
      </p>
    ),
  },
}
