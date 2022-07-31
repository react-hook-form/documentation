import * as React from "react"
import { Link } from "gatsby"
import translateLink from "../../components/logic/translateLink"

import * as typographyStyles from "../../styles/typography.module.css"

export default {
  title: "시작하기",
  header: {
    title: "시작하기",
    description: "React Hook Form 으로 간단하게 폼의 유효성을 검사하기",
  },
  video: {
    title: "비디오 튜토리얼",
    description: `이 비디오 튜토리얼을 통해 React Hook Form 의 기본 사용법과 컨셉을 설명합니다`,
  },
  install: {
    linkTitle: "설치",
    title: "빠른 시작",
    description: `React Hook Form 을 설치하는데 한 줄 짜리 커맨드면 충분합니다.`,
  },
  example: {
    title: "예제",
    description: `다음의 코드는 기본적인 사용법을 보여줍니다.`,
  },
  register: {
    title: "필드 등록하기",
    description: (
      <>
        <p>
          React Hook Form 의 중요 컨셉 중 하나는{" "}
          <strong>
            <code>register</code>
          </strong>{" "}
          를 통해 여러분의 비제어 컴포넌트(uncontrolled component)를 Hook 과
          연결하여 값이 검사될 수 있도록 만들고 폼을 제출할 때 한꺼번에
          모아지도록 하는 것입니다.
        </p>

        <p>
          <b className={typographyStyles.note}>참고:</b> 각각의 필드는 등록
          과정의 key 로 사용하기 위해 <code>name</code> 속성이{" "}
          <strong>반드시</strong> 필요합니다.
        </p>

        <p>
          <b className={typographyStyles.note}>참고:</b> React Native 는
          수동으로 register 커맨드를 입력해야 합니다. (예:{" "}
          <code>{`register('test', { required: true })`}</code>
          또는 <Link to="/api#Controller">Controller</Link>을 사용하여 구성
          요소를 래핑합니다.
          <Link to="/api/#ReactNative">React Native</Link> 섹션에서 더 많은
          내용을 읽을 수도 있습니다.
        </p>
      </>
    ),
  },
  applyValidation: {
    title: "유효성 검사 적용하기",
    description: (currentLanguage) => (
      <>
        <p>
          React Hook Form 은 기존의{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTML 표준 폼 유효성 검사와
          </a>
          과 어우러져 폼 유효성 검사를 쉽게 만들어줍니다.
        </p>

        <p>지원되는 폼 유효성 검사 방식은 아래와 같습니다.</p>

        <ul>
          <li>
            <p>required</p>
          </li>
          <li>
            <p>min</p>
          </li>
          <li>
            <p>max</p>
          </li>
          <li>
            <p>minLength</p>
          </li>
          <li>
            <p>maxLength</p>
          </li>
          <li>
            <p>pattern</p>
          </li>
          <li>
            <p>validate</p>
          </li>
        </ul>
        <p>
          각각의 규칙에 대해 더 자세하게 알아보시려면{" "}
          <Link to={translateLink("api#register", currentLanguage)}>
            register 섹션
          </Link>
          을 살펴보세요.
        </p>
      </>
    ),
  },
  adapting: {
    title: "이미 존재하는 폼에 적용하기",
    description: (
      <>
        이미 존재하는 폼에 쉽게 적용할 수 있습니다. 중요한 것은 이미 있는
        컴포넌트의 <code>ref</code> 에 <code>register</code> 를 적용해 주는
        것입니다.
      </>
    ),
  },
  controlledInput: {
    title: "제어되는 입력 필드",
    description: (
      <p>
        React Hook Form 은 비제어 컴포넌트와 네이티브 HTML input을 활용합니다.
        하지만{" "}
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
        그리고{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://mui.com/">
          MUI
        </a>{" "}
        같이 외부 라이브러리에서 제공하는 제어 컴포넌트와 함께 사용해야 할 때가
        있습니다. 그래서 이럴 때 사용하기 위해 감싸는 컴포넌트를 제공합니다.{" "}
        <Link to="/api#Controller">Controller</Link> 은 여전히 필요에 따라 인풋
        필드를 커스텀 등록하는 방법을 제공하여 위의 외부 컴포넌트들과 쉽게
        통합할 수 있습니다.
      </p>
    ),
  },
  workWithUI: {
    title: "UI 라이브러리에 적용하기",
    description: () => (
      <>
        <p>
          React Hook Form으로 외부 UI와 쉽게 통합 할 수 있습니다. 구성 요소
          라이브러리. 팔로우 영상을 확인하실 수 있습니다.
        </p>

        <p>
          제어 된 구성 요소는 등록 할 소품을 노출하지 않습니다 (예 : {""}).
          <code> react-select </code> 또는 <code> react-datepicker </code>.
        </p>
        <p>
          이 경우 {""}
          <Link to="/ api # Controller"> Controller </Link> 래퍼 구성
          요소입니다. 등록 과정을 처리해드립니다.
        </p>
      </>
    ),
  },
  globalState: {
    title: "전역 상태와 사용하기",
    description: `React Hook Form 으로 데이터를 저장하기 위해 반드시 상태 관리 솔루션을 사용할 필요는 없지만, 쉽게 조합할 수는 있습니다.`,
  },
  reactNative: {
    title: "React Native",
    description: (
      <p>
        비제어 컴포넌트에서도 동일한 성능 향상을 얻을 수 있습니다. 하지만, 웹과
        네이티브의 API 차이로 인해 React Native와 호환되지 않는 특정 API도
        있습니다. 이 경우, 다음 예제와 같이 <b>수동 등록(manual register)</b>을
        해주어야 합니다.
      </p>
    ),
  },
  typeScript: {
    title: "TypeScript",
    description: (
      <p>
        React Hook Form은 타입스크립트로 만들어져, 폼 내 값 타입을{" "}
        <code>FormData</code> 로 설정할 수 있습니다.
      </p>
    ),
  },
  errors: {
    title: "에러 처리하기",
    description: (
      <>
        React Hook Form 은 폼 안의 에러를 보여주는 <code>errors</code> 객체를
        제공합니다.
      </>
    ),
  },
  schema: {
    title: "스키마 유효성 검사",
    description: (
      <>
        <p>
          React Hook Form 은{" "}
          <a
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </a>
          ,{" "}
          <a
            href="https://github.com/ianstormtaylor/superstruct"
            target="_blank"
            rel="noopener noreferrer"
          >
            Superstruct
          </a>{" "}
          &{" "}
          <a
            href="https://github.com/hapijs/joi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joi
          </a>
          을 활용하여 스키마 기반의 폼 유효성 검사를 제공합니다.{" "}
          <code>validationSchema</code> 를 <a href="/api#useForm">useForm</a> 에
          넘겨주어 추가 설정을 할 수 있습니다. React Hook Form 은 입력된
          데이터를 스키마와 비교하여 <a href="/api#errors">에러</a> 혹은 알맞은
          결과를 표시합니다.
        </p>
      </>
    ),
    step1: (
      <>
        <p>
          <b className={typographyStyles.note}>1단계:</b> <code>Yup</code> 을
          프로젝트에 설치합니다.
        </p>
      </>
    ),
    step2: (
      <p>
        <b className={typographyStyles.note}>2단계:</b> 유효성 검사를 위한
        스키마를 작성하고 React Hook Form 을 사용하여 인풋을 등록합니다.
      </p>
    ),
  },
}
