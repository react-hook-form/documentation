import * as React from "react"
import { Link } from "gatsby"
import colors from "../../../styles/colors"
import Popup from "../../../components/Popup"
import CodeArea from "../../../components/CodeArea"
import useFieldArrayArgument from "../../../components/codeExamples/useFieldArrayArgument"
import typographyStyles from "../../../styles/typography.module.css"
import buttonStyles from "../../../styles/button.module.css"

export default {
  title: "API 설명서",
  header: {
    description: "단순화된 API 로 최고의 DX 를 제공하는데 초점을 맞추었습니다.",
  },
  v5upgradeAlert: (
    <p>
      <span style={{ fontSize: 12 }}>►</span> React Hook Form V6이
      출시되었습니다. 업그레이드를 계획하고 있다면{" "}
      <Link to="/kr/migrate-v5-to-v6">V6 마이그레이션 안내서</Link> 를
      읽어보십시오.
    </p>
  ),
  useForm: {
    title: "useForm",
    intro: (
      <>
        <code>useForm</code> 을 호출하여 다음의 메소드들을 사용할 수 있습니다..{" "}
      </>
    ),
    description: (
      <p>
        <code>useForm</code> 은 또한 <b>선택적으로(optional)</b> 인자를
        받습니다. 아래의 예제는 모든 옵션과 그 기본값을 나타냅니다.
      </p>
    ),
    validateCriteriaMode: (
      <>
        <p>
          <code>firstError</code> (기본값)으로 설정 시, 각 필드의 첫 번째 에러만
          모아집니다.
        </p>
        <p>
          <code>all</code> 로 설정 시, 각 필드의 모든 에러가 모아집니다.
        </p>
      </>
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
          캐쉬됩니다. 따라서 이 함수를 컴포넌트 바깥으로 이동시키거나 메모이즈
          처리를 해야 합니다.
        </p>
      </>
    ),
    validateContext: (
      <>
        <p>
          이 컨텍스트 객체는 <code>validationResolver</code> 의 두 번째 인자로
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
        다시 렌더링합니다. 이 방법은 랜더링 성능을 떨어뜨리므로 주의하십시오.
      </>
    ),
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
          , <code>defaultValues</code> 를 선택적인(optional) 인수로 전달 하여
          전체 폼의 기본값을 채울 수 있습니다.
        </p>

        <p>
          <b className={typographyStyles.note}>중요:</b>{" "}
          <code>defaultValues</code> 는 훅 안에서 캐시됩니다. 만약{" "}
          <code>defaultValues</code> 를 초기화하고 싶다면,{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("reset")}
          >
            reset
          </button>{" "}
          api 를 사용해주세요.
        </p>

        <p>
          <b className={typographyStyles.note}>참고:</b>{" "}
          <code>defaultValues</code> 내 정의 된 값은{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("watch")}
          >
            watch
          </button>{" "}
          의 <code>defaultValue</code> 값으로 주입됩니다.
        </p>

        <p>
          <b className={typographyStyles.note}>참고:</b> 수동{" "}
          <code>register</code> 필드는 React Hook Form의 <code>ref</code> 를
          제공하지 않기에, 수동 입력 필드(예를 들어,{" "}
          <code>{`register({ name: 'test' })`}</code> )의{" "}
          <code>defaultValues</code> 는 자동 완성 되지 않습니다.
        </p>
      </>
    ),
    validationSchema: (goToSection) => (
      <p>
        <code>Yup</code> 의 스키마 레벨 폼 유효성 검사 규칙을 적용해 보세요.{" "}
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
        <Popup />
      </p>
    ),
    validationFields: (
      <p>
        제공되는 필드 배열은 앞으로 검증될 필드만 포함합니다. 이 옵션은 유효성
        검사가 필요한 필드에 대해서 토글(toggle)을 원할 경우에 유용합니다.
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
      </>
    ),
    nativeValidation: (goToSection) => (
      <p>
        이 옵션을 <code>true</code> 로 설정하면 브라우저의 기본 유효성 검사가
        활성화됩니다.
        {"  "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
        >
          브라우저 기본 유효성 검사
        </a>
        에 대한 내용을 확인하시고 좀 더 자세한 내용과 예시는{" "}
        <button
          className={buttonStyles.codeAsLink}
          onClick={() => goToSection("nativeValidation")}
        >
          nativeValidation
        </button>{" "}
        에서 참고하실 수 있습니다.
      </p>
    ),
  },
  unregister: {
    title: "unregister",
    description: (
      <>
        <p>
          이 함수로 단일 입력 혹은 여러 입력들을 <code>unregister</code> 할 수
          있습니다. 이 함수는 <code>useEffect</code> 로 입력을 등록한 뒤,
          컴포넌트가 언마운트 되면서 등록을 해제하고자 할 때 유용합니다.
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
          이 함수에서 input/select <code>Ref</code> 와 유효성 검사 규칙을
          등록(register)할 수 있습니다.
        </p>
        <p>
          유효성 검사 규칙은 모두 HTML 표준을 기반으로 하며, 커스텀 유효성
          검사도 가능합니다.
        </p>
        <p>
          <b className={typographyStyles.note}>중요:</b> <code>name</code> 은{" "}
          <b>필수</b>이며 <b>고유의(unique)</b> 값이어야 합니다. 인풋의 name 은
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
        <code>arrays/array</code> 필드의 경우, <code>name[index]</code> 와 같이
        name을 지정할 수 있습니다.{" "}
        <a
          className={buttonStyles.links}
          href="https://github.com/react-hook-form/react-hook-form/blob/master/examples/FieldArray.tsx"
          title="example for Field Array"
        >
          Field Array 예제를 확인하세요.
        </a>
        .
      </p>
    ),
    example: "제출 결과",
    selectHelp:
      "등록 옵션(Register Options)을 선택하면, 아래의 API 테이블이 변경됩니다.",
    options: {
      title: "Register Options",
      registerWithValidation: "유효성 검사와 함께 등록",
      registerWithValidationMessage: "유효성 검사 및 에러 메시지 등록",
      note: (goToSection) => (
        <>
          <h2 className={typographyStyles.title}>Custom Register</h2>
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
            와 같은 커스텀 컴포넌트와 작업할 때 사용될 수 있습니다.
          </p>

          <p>
            Custome register를 사용하면, 입력은 더이상 ref 로 등록되지 않으므로,{" "}
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
            >{`register('firstName', { required: true, min: 8 })`}</code>
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
            <b className={typographyStyles.note}>참고:</b> 같은 name 을 가진
            여러개의 라디오 인풋의 경우, 마지막 인풋에 유효성 검사 규칙을
            등록해야 React Hook Form 이 같은 라디오 그룹을 인지할 수 있습니다.
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
      pattern: "입력에 대한 정규표현식 패턴입니다.",
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
          플랫폼에만 적용됩니다. React Native에서는 <code>Proxy</code> 가 잘
          지원되지 않기 때문입니다.
        </p>
      </>
    ),
    dirty: "사용자가 어떠한 입력이라도 했다면, true로 설정됩니다.",
    isSubmitted:
      "사용자가 폼을 제출 한 후 true로 설정됩니다. 양식을 제출 한 후 reset 메소드가 호출 될 때까지 해당 상태가 제출 된 상태로 유지됩니다.",
    dirtyFields: "사용자가 수정한 필드의 모음",
    touched: "상호 작용된 모든 입력 필드의 배열입니다.",
    isSubmitting: (
      <>
        폼 제출하는 동안은 <code>true</code> 로, 그 후에는 <code>false</code>가
        됩니다.
      </>
    ),
    submitCount: "제출 한 폼의 수",
    isValid: "에러가 없다면, true로 설정됩니다.",
  },
  errors: {
    title: "errors",
    description: (currentLanguage) => (
      <>
        <p>각 입력에 대한 폼 에러 혹은 에러 메시지를 가진 객체입니다.</p>{" "}
        <p>
          <b className={typographyStyles.note}>참고:</b> V3 과 V4 의 차이점:
        </p>
        <ul>
          <li>
            <p>V4: 중첩된 객체</p>
            <p>
              <strong>사용 이유:</strong> 옵셔널 체이닝이 커뮤니티 사이에서 많이
              알려졌고, 더 나은 타입 지원을 합니다.
            </p>
            <p>
              <code>{`errors?.yourDetail?.firstName;`}</code>
            </p>
          </li>
          <li>
            <p>V3: 평탄한 객체</p>
            <p>
              <strong>사용 이유:</strong> 단순하고 에러에 접근하기 쉽습니다.
            </p>
            <p>
              <code>{`errors['yourDetail.firstName'];`}</code>
            </p>
          </li>
        </ul>
      </>
    ),
    types: (
      <>
        여러 종류의 에러가 하나의 필드에 적용되어야 하는 비밀번호 규칙 같은
        입력의 유효성 검사를 할 때 유용합니다. 이 기능을 활성화하려면,{" "}
        <code>validateCriteriaMode: 'all'</code> 으로 설정해두는 것을 잊지
        마세요.
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
        를 사용하여 오류 상태를 처리 할 수 있습니다.
      </p>
    ),
  },
  watch: {
    title: "watch",
    description: (
      <>
        <p>
          지정된 입력을 확인(watch)하고, 그 값들을 반환하며, 렌더링 할 대상을
          결정할 때 유용합니다.
        </p>

        <ul>
          <li>
            <p>
              <code>defaultValue</code>가 정의 안되어 있는 경우,{" "}
              <code>register</code>가 아직 호출이 안되었기 때문에{" "}
              <code>watch</code>의 첫번째 렌더링에서는 <code>undefined</code> 을
              반환합니다. 하지만, 두번째 인수로 <code>defaultValue</code>를
              설정하여 값을 반환 할 수 있습니다.
            </p>
          </li>
          <li>
            <p>
              하지만 <code>useForm</code> 에서 <code>defaultValues</code> 가
              정의되어 있다면, 첫번째 렌더링에서 <code>defaultValues</code> 에
              적용된 내용을 반환합니다.
            </p>
          </li>
        </ul>
      </>
    ),
    tableTitle: {
      single: (
        <>
          주어진 name 에 해당하는 입력값을 관찰합니다. (lodash{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://lodash.com/docs/4.17.15#get"
          >
            get
          </a>{" "}
          함수와 유사)
        </>
      ),
      multiple: "여러 입력을 관찰",
      all: "모든 입력을 관찰",
      nest: "모든 입력을 관찰하고 중첩 된 객체를 반환",
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
          위한 <code>async</code> 함수를 전달할 수 있습니다. 예 :{" "}
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
          이 함수는 폼 내의 필드 값과 에러를 재설정(reset) 합니다.{" "}
          <code>omitResetState</code> 를 제공하면 자유롭게 특정 상태만
          재설정합니다. <code>values</code> 를 선택적(optional) 인수로 전달하면
          폼의 기본 값으로 재설정 할 수 있습니다.
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
          </button>{" "}
          를 통해 수동으로 입력값을 재설정해주어야 합니다. 또는{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("Controller")}
          >
            Controller
          </button>{" "}
          을 사용하여 제어 컴포넌트를 감싸 처리할 수 있습니다.
        </p>
        <p>
          <b className={typographyStyles.note}>참고:</b> <code>Controller</code>{" "}
          컴포넌트의 값을 <code>reset</code> 처리할 때를 위해,{" "}
          <code>useForm</code> 호출 시 <code>defaultValues</code> 를 입력해야 할
          수도 있습니다.
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
        <p>
          <b className={typographyStyles.note}>참고:</b> 이 메서드는 에러를
          유지하거나 폼 제출을 막지 않습니다. 비동기로 유효성 검사를 실행하고
          나서 <code>handleSubmit</code> 함수가 실행되는 중에 에러를 표시하고
          싶을 때 활용하기 좋습니다.
        </p>
      </>
    ),
  },
  clearError: {
    title: "clearError",
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
          이 함수를 통해 동적으로 <strong>등록된</strong> input/select 값을
          설정할 수 있습니다. 그와 동시에, 아래의 조건이 충족할 때만 다시
          랜더링되어 불필요한 리랜더링을 피하려 합니다.
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
              맨 처음 실행되어 폼이 <code>dirty</code> 상태가 되도록 했을 때
            </p>
          </li>
          <li>
            <p>
              formState 를 <code>touched</code> 로 업데이트 했을 때
            </p>
          </li>
        </ul>
        <p>
          <b className={typographyStyles.note}>참고:</b> 이 함수를 호출함으로써,{" "}
          <code>formState</code>는 이 해당 인풋을 <code>touched</code>로
          설정하게 됩니다.
        </p>
        <p>
          <code>shouldValidate</code> 를 <code>true</code> 로 설정하여, 필드
          유효성 검사를 트리거할 수 도 있습니다. 예 :{" "}
          <code>setValue('name', 'value', true)</code>
        </p>
      </>
    ),
  },
  getValues: {
    title: "getValues",
    description: (
      <>
        <p>
          이 함수는 전체 폼 데이터를 반환하는 함수이며, 폼 안의 값을 가져올 때
          유용합니다.
        </p>
        <ul>
          <li>
            <p>
              기본적으로, <code>getValues()</code>는 폼 데이터를 평탄한
              구조(flat structure)로 반환합니다. 예 :{" "}
              <code>{`{ test: 'data', test1: 'data1'}`}</code>
            </p>
          </li>
          <li>
            <p>
              <code>getValues({`{ nest: true }`})</code> 로 호출할 경우는{" "}
              <code>name</code> 입력 값에 따라 중첩된 구조의 데이터로
              반환됩니다. 예 :{" "}
              <code>{`{ test: [1, 2], test1: { data: '23' } }`}</code>
            </p>
          </li>
        </ul>
      </>
    ),
  },
  triggerValidation: {
    title: "triggerValidation",
    description: (
      <>
        <p>폼의 input/select 유효성 검사를 수동으로 트리거합니다.</p>
        <p>
          <b className={typographyStyles.note}>참고:</b> 유효성 검사에 실패하면{" "}
          <code>errors</code> 객체가 업데이트됩니다.
        </p>
      </>
    ),
  },
  validationSchema: {
    title: "validationSchema",
    description: (
      <p>
        유효성 검사 규칙을 외부의 유효성 검사 도구로 집중시키고 싶다면,{" "}
        <code>validationSchema</code> 패러매터를 적용 할 수 있습니다. 현재 React
        Hook Form 은 객체 스키마 유효성 검사를 위해{" "}
        <a
          className={buttonStyles.links}
          href="https://github.com/jquense/yup"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yup
        </a>{" "}
        을 지원합니다.
      </p>
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

        <p>이 훅은 아래의 객체와 함수를 제공합니다.</p>

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
              기본값을 설하거나, 제거하거나, 재설정하려는 경우{" "}
              <code>defaultValue</code>를 <code>fields[index]</code> 로
              설정하십시오.
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
            <code>useEffect</code> 안에서 임의로 <code>register</code> 를
            호출하는 방식으로는 작동하지 않습니다.
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
            <code>
              <code className={typographyStyles.typeText}>
                (obj: object) =&gt; void
              </code>
            </code>
          </td>
          <td>입력 필드(들)를 현재 필드들 마지막에 추가합니다.</td>
        </tr>
        <tr>
          <td>
            <code>prepend</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (obj: object) =&gt; void
              </code>
            </code>
          </td>
          <td>입력 필드(들)를 현재 필드들 맨 앞에 추가합니다.</td>
        </tr>
        <tr>
          <td>
            <code>insert</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (index: number, value: object) =&gt; void
              </code>
            </code>
          </td>
          <td>입력 필드(들)를 특정 위치에 추가합니다.</td>
        </tr>
        <tr>
          <td>
            <code>swap</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (from: number, to: number) =&gt; void
              </code>
            </code>
          </td>
          <td>입력 필드(들)의 위치를 서로 교체합니다.</td>
        </tr>
        <tr>
          <td>
            <code>move</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (from: number, to: number) =&gt; void
              </code>
            </code>
          </td>
          <td>
            입력 필드(들)를 다른 위치로 이동합니다.
            <p>
              <b className={typographyStyles.note}>참고:</b> <code>move</code>{" "}
              와 <code>swap</code> 의 차이점을 설명하자면, <code>move</code> 를
              계속 호출하는 것은 입력 필드(들)를 임의의 공간 안에 집어넣는 것과
              비슷하고, <code>swap</code> 은 두 입력 필드들의 위치만 바꾸는
              것입니다.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>remove</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (index?: number | number[]) =&gt; void
              </code>
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
          <td>입력값을 위한 고유의 이름.</td>
        </tr>
        <tr>
          <td>
            <code>as</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              React.ElementType | string
            </code>
          </td>
          <td>✓</td>
          <td>
            제어 컴포넌트. 예: <code>{`as={TextInput}`}</code> 혹은{" "}
            <code>{`as={<TextInput />}`}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>control</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Object</code>
          </td>
          <td>✓</td>
          <td>
            <code>control</code> 객체는 <code>useForm</code> 을 호출하여 나온
            것을 넣어주면 됩니다. FormContext 를 사용하고 있다면 필수는
            아닙니다.
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
              <code>defaultValue</code> 또는 <code>useForm</code> 의{" "}
              <code>defaultValues</code> 을 넣어주어야 할 것입니다.
            </p>
            <p>
              <b className={typographyStyles.note}>참고: </b> 만약 폼이 기본값과
              함께 <code>reset</code>을 호출한다면, 인라인 값으로{" "}
              <code>defaultValues</code> 를 제공하는 대신 useForm 단계에서{" "}
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
            <code>register</code> 에 따른 유효성 검사 규칙입니다. 이{" "}
            <code>object</code> 는 <code>Controller</code> 안에서 캐시됩니다.
          </td>
        </tr>
        <tr>
          <td>
            <code>onChange</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (args: any | EventTarget) =&gt; any
            </code>
          </td>
          <td />
          <td>
            리턴 값을 커스터마이징 할 수 있습니다, 외부 컴포넌트의{" "}
            <code>value</code> prop 이 어떤 형태를 가지고 있는지 알고 있어야
            합니다. 이벤트 핸들러에 전달된 값이 <code>object</code> 형태이고{" "}
            <code>type</code> 속성값을 포함하고 있는 경우 <code>value</code>{" "}
            혹은 <code>checked</code> 속성값을 읽어올 수 있습니다.
            <CodeArea
              withOutCopy
              rawData={`onChange={{([ event ]) => event.target.value}}
onChange={{([ { checked } ]) => ({ checked })}}`}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>onChangeName</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>string</code>
          </td>
          <td />
          <td>
            이 prop 은 특정한 이벤트 이름을 지정하여 그 이벤트의 변화를 바라볼
            수 있도록 합니다. 예: <code>onChange</code> 이벤트가{" "}
            <code>onTextChange</code> 로 되어있는 경우.
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
            <p>
              유효성 검사 에러가 발생했을 때 이 콜백을 이용하여 특정 인풋으로
              포커스를 이동시킬 수 있습니다. 이 함수는 포커스만 시킬 수 있다면
              React 및 React-Native 컴포넌트에 모두 적용됩니다.
            </p>
            <p>
              여기에{" "}
              <a
                href="https://codesandbox.io/s/react-hook-form-controllerautofocus-v5-un45f"
                target="_blank"
                rel="noopener noreferrer"
              >
                MUI 를 활용한 예제가 있습니다
              </a>
              .
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>onBlurName</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>string</code>
          </td>
          <td />
          <td>
            이 prop 은 특정한 이벤트 이름을 지정하여 그 이벤트의 변화를 바라볼
            수 있도록 합니다. 예: <code>onBlur</code> 이벤트가{" "}
            <code>onTextBlur</code> 로 되어있는 경우.
          </td>
        </tr>
        <tr>
          <td>
            <code>valueName</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>string</code>
          </td>
          <td />
          <td>
            이 prop 은 <code>value</code> 라는 이름의 prop 을 사용하지 않는
            컴포넌트에 사용할 수 있습니다. 예: <code>checked</code>,{" "}
            <code>selected</code> 등.
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
        <p>
          컨트롤러 컴포넌트에 넘겨주는 모든 props 는 <code>as</code> prop 에
          할당한 컴포넌트로 전달됩니다. 예를 들어 커스텀 <code>Switch</code>{" "}
          컴포넌트가 <code>label</code> prop 을 받아야 하는 경우, 컨트롤러
          컴포넌트에 직접 그 prop 을 전달하여 알아서 전달되도록 만들 수
          있습니다. <code>name</code> prop 은 나중에 주로 폼을 통해 값을 가져올
          때 사용하게 됩니다.
        </p>
      </>
    ),
  },
  useFormContext: {
    title: "useFormContext",
    introduction: (
      <>
        <p>
          폼 컨텍스트에 접근할 때 호출하는 훅 함수입니다.{" "}
          <code>useFormContext</code> 는 입력들이 컴포넌트 트리에서 깊이
          중첩되었을 때 생기는 문제를 해결하고, <code>props</code>를 더 깊이
          전달하기 위해 사용합니다.
        </p>
        <p>
          <code>useFormContext</code> 훅이 제대로 동작하려면 폼을{" "}
          <code>FormContext</code> 프로바이더 컴포넌트로 감싸주어야 합니다.
        </p>
      </>
    ),
    description: (
      <p>
        <b className={typographyStyles.note}>참고:</b>{" "}
        <code>useFormContext</code> 를 통해 모든 <code>useForm</code> 의 hook
        function이 제공됩니다.
      </p>
    ),
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
          <code>errors</code> 객체는 React Hook Form 에서 전달된 것입니다.
          FormContext 를 쓴다면 필수 값은 아닙니다.
        </>
      ),
      message: <>인라인 오류 메시지.</>,
      as: (
        <>
          감싸질 컴포넌트나 HTML 태그. 예: <code>as="span"</code> 나{" "}
          <code>{`as={<Text />}`}</code> 등.
        </>
      ),
      children: (
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
            <b className={typographyStyles.note}>Note:</b> you need to set{" "}
            validateCriteriaMode to 'all' for using <code>messages</code>.
          </p>
        </>
      ),
    },
  },
  NativeValidation: {
    title: "브라우저 내장 유효성 검사",
    description: (
      <>
        <p>
          다음 예제는 브라우저의 유효성 검사를 활용하는 방법입니다.{" "}
          <code>nativeValidation</code> 을 <code>true</code>로 설정하고, 나머지
          문법은 표준과 같습니다.
        </p>
        <p>
          <b className={typographyStyles.note}>Note</b>: This feature has been
          removed in V4 due to low usage, but you can still use it in V3
        </p>
      </>
    ),
  },
  validationResolver: {
    title: "validationResolver",
    description: (
      <>
        <p>
          이 함수는{" "}
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
          유효성 검사를 위해 직접 커스터마이징할 수도 있습니다.
        </p>
        <p>
          <b className={typographyStyles.note}>참고:</b> 반드시{" "}
          <code>values</code> 와 <code>errors</code> 객체를 모두 포함하여
          리턴시키세요, 그리고 이 객체들의 기본값은 빈 객체 <code>{`{}`}</code>{" "}
          가 되어야 합니다.
        </p>
        <p>
          <b className={typographyStyles.note}>참고:</b> errors 객체의 키 값은
          반드시 인풋 값과 연결되어야 합니다.
        </p>
        <p>
          <b className={typographyStyles.note}>참고:</b> 이 함수는{" "}
          <code>validationSchema</code> 와 유사한 커스텀 훅 안에 캐시되며,{" "}
          <code>validationContext</code> 는 매번 리랜더링 될 때마다 바뀔 수 있는
          변경 가능한(mutable) 객체입니다.
        </p>
        <p>
          <b className={typographyStyles.note}>참고:</b> 입력값을 다시 검사하는
          것은 사용자의 행동에 따라 한 필드당 하나씩만 동작합니다. 왜냐하면
          라이브러리 자체에서 에러 객체의 특정 필드를 대조해보고 그에 따라
          리랜더링을 실행하기 때문입니다.
        </p>
      </>
    ),
  },
}
