import * as React from "react"
import * as typographyStyles from "../../styles/typography.module.css"

export default {
  title: "개발자 도구(DevTools)",
  description:
    "React Hook Form 개발자 도구는 폼 디버깅과 유효성 검사를 쉽게 만들어줍니다.",
  install: "설치 방법",
  step1: (
    <>
      <b className={typographyStyles.note}>1단계: </b>{" "}
      <code>@hookform/devtools</code> 를 개발 의존성(dev dependency) 패키지로
      설치하세요.
    </>
  ),
  step2: (
    <>
      <b className={typographyStyles.note}>2단계: </b>설치한 패키지를 여러분의
      리액트 앱에 간단히 컴포넌트처럼 불러와서 앱 혹은 폼에 랜더링하고 그 안에{" "}
      <code>control</code> prop 을 전달합니다.
    </>
  ),
  demoDescription:
    "아래 링크의 데모를 통해 개발자 도구가 어떤식으로 동작하는지 직접 살펴볼 수 있습니다.",
  function: "기능",
  functionDetail: (
    <>
      <li>
        <p>전체 폼 상태와 입력값을 읽습니다.</p>
      </li>
      <li>
        <p>
          <b className={typographyStyles.note}>참고: </b>RHF 는 비제어 컴포넌트
          기반으로 만들어졌기 떄문에, <strong>Update</strong> 버튼은 Devtool 을
          새로고침하여 최신 입력 값과 폼 상태 값을 불러옵니다.
        </p>
      </li>
      <li>
        <p>
          입력값 혹은 폼이 유효하거나 유효하지 않을 때 시각적 피드백을
          제공합니다.
        </p>
      </li>
      <li>
        <p>등록된 인풋과 커스텀으로 등록된 컴포넌트를 검색할 수 있습니다.</p>
      </li>
      <li>
        <p>
          <b className={typographyStyles.note}>참고: </b>{" "}
          <strong>Native</strong> 버튼을 누르면 쉽게 해당 인풋의 위치로 이동할
          수 있습니다. 큰 규모의 폼을 디버깅할 때 유용하게 사용할 수 있습니다.
        </p>
      </li>
    </>
  ),
  features: [
    {
      title: "React 기반",
      description:
        "개발자 도구 자체가 리액트 기반으로 이루어져 있기 때문에, 사용자의 리액트 애플리케이션에 쉽게 적용 가능합니다.",
    },
    {
      description:
        "React Hook Form 은 리액트로 된 폼을 제작하는데 최선의 경험을 제공하는데 집중합니다. 이 개발자 도구는 여러분의 폼을 디버깅하기 쉽게 합니다.",
    },
    {
      title: "오픈 소스",
      description:
        "개발자 도구도 오픈 소스 프로젝트이기 때문에, 함께 개선시켜나갈 수 있습니다.",
    },
  ],
}
