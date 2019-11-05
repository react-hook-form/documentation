import * as React from "react"
import code from "../components/codeExamples/defaultExample"
import { Note } from "../styles/typography"
import { Link } from "@reach/router"
import colors from "../styles/colors"
import translateLink from "../components/logic/translateLink"

export default {
  title: {
    en: "Get Started",
    kr: "시작하기",
    jp: "はじめる",
    zh: "起步",
  },
  header: {
    en: {
      title: "Get Started",
      description: "Simple form validation with React Hook Form.",
    },
    kr: {
      title: "시작하기",
      description: "React Hook Form 으로 간단하게 폼의 유효성을 검사하기",
    },
    jp: {
      title: "はじめる",
      description: "React Hook Form によるシンプルなフォームバリデーション。",
    },
    zh: {
      title: "起步",
      description: "React Hook Form 让表单验证变得简单.",
    },
  },
  video: {
    en: {
      title: "Video Tutorial",
      description: `In this video tutorial, I have demonstrated the basic usage and concept of using React Hook Form.`,
    },
    kr: {
      title: "비디오 튜토리얼",
      description: `이 비디오 튜토리얼을 통해 React Hook Form 의 기본 사용법과 컨셉을 설명합니다`,
    },
    jp: {
      title: "ビデオチュートリアル",
      description: `このビデオチュートリアルでは、React Hook Form の基本的な使用法とコンセプトを説明します。`,
    },
    zh: {
      title: "视频教程",
      description: `在本视频教程中，我已经演示了使用React Hook Form的基本用法和概念。`,
    },
  },
  install: {
    en: {
      linkTitle: "Installation",
      title: "Quick start",
      description: `Installing React Hook Form only takes a single command and you're ready to roll.`,
    },
    kr: {
      linkTitle: "설치",
      title: "빠른 시작",
      description: `React Hook Form 을 설치하는데 한 줄 짜리 커맨드면 충분합니다.`,
    },
    jp: {
      linkTitle: "インストール",
      title: "クイックスタート",
      description:
        "一つのインストールコマンドだけで、React Hook Form を使用する準備が整います。",
    },
    zh: {
      linkTitle: "安装",
      title: "快速启动",
      description: `安装React Hook Form只需要一个命令，你就可以开始了。`,
    },
  },
  example: {
    en: {
      title: "Example",
      description: `The following code will demonstrate the basic usage:`,
    },
    kr: {
      title: "예제",
      description: `다음의 코드는 기본적인 사용법을 보여줍니다.`,
    },
    jp: {
      title: "例",
      description: `下記のコードは基本的な使用法を示します。`,
    },
    zh: {
      title: "例子",
      description: `以下代码将演示基本用法:`,
    },
  },
  register: {
    en: {
      title: "Register fields",
      description: (
        <>
          <p>
            One of the key concepts for React Hook Form is to{" "}
            <strong>
              <code>register</code>
            </strong>{" "}
            your uncontrolled component into the Hook and hence enabling its
            value to be validated and gathered for submitting.
          </p>

          <p>
            <Note>Note:</Note> Each field is <strong>required</strong> to have a
            unique <code>name</code> as a key for the registration process.
          </p>

          <p>
            <Note>Note: </Note>React Native will need to use a manual register
            command (e.g.:{" "}
            <code>{`register({ name: 'test' }, { required: true })`}</code>
          </p>
        </>
      ),
    },
    kr: {
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
            <Note>참고:</Note> 각각의 필드는 등록 과정의 key 로 사용하기 위해{" "}
            <code>name</code> 속성이 <strong>반드시</strong> 필요합니다.
          </p>

          <p>
            <Note>참고:</Note> React Native 는 수동으로 register 커맨드를
            입력해야 합니다. (예:{" "}
            <code>{`register({ name: 'test' }, { required: true })`}</code>
          </p>
        </>
      ),
    },
    jp: {
      title: "フィールドを登録する",
      description: (
        <>
          <p>
            React Hook Form の重要なコンセプトの一つは、非制御コンポーネント (
              <a
              href="https://reactjs.org/docs/uncontrolled-components.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Uncontrolled Components
            </a>
            ) を{" "}
            <strong>
              <code>register</code>
            </strong>{" "}
            を適用してフックに登録し、フォームフィールドの値を検証と収集できるようにすることです。
          </p>

          <p>
            <Note>注意：</Note>{" "}
            各フィールドには登録プロセスの key としてユニークな <code>name</code> 属性が<strong>必須</strong>です。
          </p>

          <p>
            <Note>注意：</Note>React Native は手動登録 (manual <code>register</code>) する必要があります。{" "}
            (例： <code>{`register({ name: 'test' }, { required: true })`}</code>
          </p>
        </>
      ),
    },
    zh: {
      title: "注册表格",
      description: (
        <>
          <p>
            React Hook Form的一个关键概念是将您不受控制的组件
            <strong>注册</strong>到Hook中，从而使其价值得到验证并收集以供提交。
          </p>

          <p>
            <Note>注意：</Note>每个表格都需要有一个<strong>独特</strong>
            的名称作为注册过程的密钥
          </p>

          <p>
            <Note>注意：</Note>React Native 将需要使用手动注册 (例子如下:{" "}
            <code>{`register({ name: 'test' }, { required: true })`}</code>
          </p>
        </>
      ),
    },
  },
  applyValidation: {
    en: {
      title: "Apply validation",
      description: currentLanguage => (
        <>
          <p>
            React Hook Form make form validation easy by aligning with existing{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTML standard form validation
            </a>
            .
          </p>

          <p>List of validation rules supported by:</p>
          <ul>
            <li>required</li>
            <li>min</li>
            <li>max</li>
            <li>minLength</li>
            <li>maxLength</li>
            <li>pattern</li>
            <li>validate</li>
          </ul>
          <p>
            You can read more detail on each rule at the{" "}
            <Link to={translateLink("api#register", currentLanguage)}>
              register section
            </Link>
            .
          </p>
        </>
      ),
    },
    kr: {
      title: "유효성 검사 적용하기",
      description: currentLanguage => (
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
            <li>required</li>
            <li>min</li>
            <li>max</li>
            <li>minLength</li>
            <li>maxLength</li>
            <li>pattern</li>
            <li>validate</li>
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
    jp: {
      title: "バリデーションを適用する",
      description: currentLanguage => (
        <>
          <p>
            React Hook Form は既存の
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTML 標準のフォームバリデーション
            </a>
            合わせることにより、フォームバリデーションを容易にします。
          </p>

          <p>サポートされているバリデーションルール一覧：</p>
          <ul>
            <li>required</li>
            <li>min</li>
            <li>max</li>
            <li>minLength</li>
            <li>maxLength</li>
            <li>pattern</li>
            <li>validate</li>
          </ul>
          <p>
            <Link to={translateLink("api#register", currentLanguage)}>
              register セクション
            </Link>
            で各ルールの詳細を読むことができます。
          </p>
        </>
      ),
    },
    zh: {
      title: "应用验证",
      description: currentLanguage => (
        <>
          <p>
            React Hook Form 通过与现有的
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTML标准表单验证
            </a>
            进行对齐，使表单验证变得简单。
          </p>

          <p>支持的验证规则列表:</p>
          <ul>
            <li>required</li>
            <li>min</li>
            <li>max</li>
            <li>minLength</li>
            <li>maxLength</li>
            <li>pattern</li>
            <li>validate</li>
          </ul>
          <p>
            您可以在
            <Link to={translateLink("api#register", currentLanguage)}>
              注册部分
            </Link>
            阅读每个规则的更多细节。
          </p>
        </>
      ),
    },
  },
  adapting: {
    en: {
      title: "Adapting existing form",
      description: (
        <>
          Working on an existing form is simple. The important step is to apply{" "}
          <code>register</code> into existing component's <code>ref</code>.
        </>
      ),
    },
    kr: {
      title: "이미 존재하는 폼에 적용하기",
      description: (
        <>
          이미 존재하는 폼에 쉽게 적용할 수 있습니다. 중요한 것은 이미 있는
          컴포넌트의 <code>ref</code> 에 <code>register</code> 를 적용해 주는
          것입니다.
        </>
      ),
    },
    jp: {
      title: "既存のフォームに適用する",
      description: (
        <>
          既存のフォームの処理はシンプルです。重要なステップは、既存のコンポーネントの{" "}
          <code>ref</code> に <code>register</code> を適用することです。
        </>
      ),
    },
    zh: {
      title: "调整现有的表格",
      description: (
        <>
          处理现有表单很简单。 重要的步骤是将寄存器应用到现有组件的
          <code>ref</code>中。
        </>
      ),
    },
  },
  workWithUI: {
    en: {
      title: "Work with UI library",
      description: currentLanguage => (
        <>
          <p>
            React Hook Form has made it easy to integrate with external UI
            component libraries.
          </p>
          <p>
            <span style={{ color: colors.lightPink }}>Note:</span> Most UI
            libraries do expose <code>innerRef</code> or <code>ref</code> to{" "}
            <code>
              <Link to={translateLink("api#register", currentLanguage)}>
                register
              </Link>
            </code>
            . For components that are more complicated like{" "}
            <code>react-select</code> or <code>react-datepicker</code>, you can
            manually update the value via{" "}
            <code>
              <Link to={translateLink("api#setValue", currentLanguage)}>
                setValue
              </Link>
            </code>{" "}
            or trigger an error with{" "}
            <code>
              <Link to={translateLink("api#setError", currentLanguage)}>
                setError
              </Link>
            </code>
            .
          </p>
        </>
      ),
    },
    kr: {
      title: "UI 라이브러리에 적용하기",
      description: currentLanguage => (
        <>
          <p>
            React Hook Form 은 외부 UI 컴포넌트 라이브러리와 쉽게 연동할 수
            있습니다.
          </p>
          <p>
            <Note>참고:</Note> 대부분의 UI 라이브러리는 <code>innerRef</code> 나{" "}
            <code>ref</code> 로{" "}
            <code>
              <Link to={translateLink("api#register", currentLanguage)}>
                register
              </Link>
            </code>
            를 할 수 있습니다.
            <code>react-select</code> 나 <code>react-datepicker</code> 같이 더
            복잡한 컴포넌트를 다루려면{" "}
            <code>
              <Link to={translateLink("api#setValue", currentLanguage)}>
                setValue
              </Link>
            </code>
            를 사용하여 수동으로 값을 업데이트 하거나{" "}
            <code>
              <Link to={translateLink("api#setError", currentLanguage)}>
                setError
              </Link>
            </code>
            로 에러를 일으켜야 합니다.
          </p>
        </>
      ),
    },
    jp: {
      title: "UI ライブラリを使用する",
      description: currentLanguage => (
        <>
          <p>
            React Hook Form は、外部 UI コンポーネントライブラリに統合しやすいです。
          </p>
          <p>
            <span style={{ color: colors.lightPink }}>注釈:</span> ほとんどの UI
            ライブラリは <code>innerRef</code> か <code>ref</code> に{" "}
            <code>
              <Link to={translateLink("api#register", currentLanguage)}>
                register
              </Link>
            </code>{" "}
            を適用することができます。
            <code>react-select</code> や <code>react-datepicker</code>{" "}
            などのより複雑なコンポーネントの場合、{" "}
            <code>
              <Link to={translateLink("api#setValue", currentLanguage)}>
                setValue
              </Link>
            </code>{" "}
            を使用して値を手動で更新したり、
            <code>
              <Link to={translateLink("api#setError", currentLanguage)}>
                setError
              </Link>
            </code>{" "}
            を使用してエラーをトリガーすることができます。
          </p>
        </>
      ),
    },
    zh: {
      title: "使用UI库",
      description: currentLanguage => (
        <>
          <p>React Hook Form 使得它易于与外部UI组件库集成。</p>
          <p>
            大多数UI库都会将内部<code>innerRef</code>或者<code>Ref</code>
            公开给注册
            <code>
              <Link to={translateLink("api#register", currentLanguage)}>
                register
              </Link>
            </code>
            。 对于像react-selector和
            react-datepicker这样更复杂的组件，您可以通过
            <code>
              <Link to={translateLink("api#setValue", currentLanguage)}>
                setValue
              </Link>
            </code>
            手动更新值或通过
            <code>
              <Link to={translateLink("api#setError", currentLanguage)}>
                setError
              </Link>
            </code>
            触发错误。
          </p>
        </>
      ),
    },
  },
  globalState: {
    en: {
      title: "Integrate global state",
      description: `React Hook Form doesn't require you to have a state management to store your data, but you can easily integrate with one.`,
    },
    kr: {
      title: "전역 상태와 사용하기",
      description: `React Hook Form 으로 데이터를 저장하기 위해 반드시 상태 관리 솔루션을 사용할 필요는 없지만, 쉽게 조합할 수는 있습니다.`,
    },
    jp: {
      title: "グローバルな状態に統合する",
      description: `React Hook Form では、データを保存するために状態管理ライブラリを使用する必要はありませんが、簡単に統合することができます。`,
    },
    zh: {
      title: "整合表单状态",
      description: `React Hook Form不要求你有一个状态管理来存储你的数据，但你可以很容易地与任何一个集成。`,
    },
  },
  errors: {
    en: {
      title: "Handle errors",
      description: (
        <>
          React Hook Form provides an <code>errors</code> object to show you the
          errors within the form.
        </>
      ),
    },
    kr: {
      title: "에러 처리하기",
      description: (
        <>
          React Hook Form 은 폼 안의 에러를 보여주는 <code>errors</code> 객체를
          제공합니다.
        </>
      ),
    },
    jp: {
      title: "エラーを処理する",
      description: (
        <>
          React Hook Form はフォーム内のエラーを表す <code>errors</code>{" "}
          オブジェクトを提供しています。
        </>
      ),
    },
    zh: {
      title: "处理错误",
      description: (
        <>React Hook Form提供了一个错误对象，用于显示表单中的错误。</>
      ),
    },
  },
}
