import * as React from "react"
import code from "../../components/codeExamples/defaultExample"
import { Link } from "gatsby"
import translateLink from "../../components/logic/translateLink"
import CodeArea from "../../components/CodeArea"
import {
  uiLibraryHookInput,
  uiLibraryHookInputTs,
} from "../../components/codeExamples/getStarted"
import typographyStyles from "../../styles/typography.module.css"

export default {
  title: "はじめる",
  header: {
    title: "はじめる",
    description: "React Hook Form によるシンプルなフォームバリデーション。",
  },
  video: {
    title: "ビデオチュートリアル",
    description: `このビデオチュートリアルでは、React Hook Form の基本的な使用法とコンセプトを説明します。`,
  },
  install: {
    linkTitle: "インストール",
    title: "クイックスタート",
    description:
      "一つのインストールコマンドだけで、React Hook Form を使用する準備が整います。",
  },
  example: {
    title: "例",
    description: `下記のコードは基本的な使用法を示します。`,
  },
  register: {
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
          ) をフックに
          <strong>
            登録（<code>register</code>)
          </strong>{" "}
          し、フォームフィールドの値を検証と収集できるようにすることです。
        </p>

        <p>
          <b className={typographyStyles.note}>注意：</b>{" "}
          各フィールドには登録プロセスの key としてユニークな <code>name</code>{" "}
          属性が<strong>必須</strong>です。
        </p>

        <p>
          <b className={typographyStyles.note}>注意：</b>React Native は手動登録
          (manual <code>register</code>) する必要があります。 (例：{" "}
          <code>{`register({ name: 'test' }, { required: true })`}</code>
          または、
          <Link to="/api#Controller">Controller</Link>
          を使用してコンポーネントをラップします。
          <Link to="/api/#ReactNative">React Native</Link>
          セクションで詳細を読むこともできます。
        </p>
      </>
    ),
  },
  applyValidation: {
    title: "バリデーションを適用する",
    description: (currentLanguage) => (
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
  adapting: {
    title: "既存のフォームに適用する",
    description: (
      <>
        既存のフォームの処理はシンプルです。重要なステップは、既存のコンポーネントの{" "}
        <code>ref</code> に <code>register</code> を適用することです。
      </>
    ),
  },
  controlledInput: {
    title: "制御された Input",
    description: (
      <p>
        React Hook Form は、非制御コンポーネントとネイティブ HTML input{" "}
        をサポートしますが、{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/JedWatson/react-select"
        >
          React-Select
        </a>{" "}
        や{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ant-design/ant-design"
        >
          AntD
        </a>{" "}
        、{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://material-ui.com/"
        >
          Material-UI
        </a>{" "}
        などの外部の制御された UI{" "}
        コンポーネントライブラリと組み合わせての使用を避けることは難しいため、
        ラッパーコンポーネントを作成しました。{" "}
        <Link to="/api#Controller">Controller</Link>{" "}
        は、必要に応じてカスタム登録を自由に使用できると同時に、統合プロセスを簡素化します。
      </p>
    ),
  },
  workWithUI: {
    title: "UI ライブラリを使用する",
    description: (currentLanguage) => (
      <>
        <p>
          React Hook Form は、外部 UI
          コンポーネントライブラリとの統合が容易です。
        </p>
        <p>
          <b className={typographyStyles.note}>オプション1：</b>{" "}
          最適な方法は、使用したい外部コンポーネントが{" "}
          <code>
            <Link to={translateLink("api#register", currentLanguage)}>
              register
            </Link>
          </code>{" "}
          に使用できる <code>innerRef</code> または <code>ref</code>{" "}
          を公開しているかどうかを確認することです。 例えば、Material-UI の{" "}
          <code>TextField</code> は、 props の1つとして <code>inputRef</code>{" "}
          を受け付けます。
          <code>inputRef</code> に <code>register</code> を渡すだけです
        </p>
        <p>
          <code>
            {
              '<TextField inputRef={register} label="First name" name="FirstName"/>'
            }
          </code>
        </p>
        <p>
          <b className={typographyStyles.note}>オプション2：</b> 例えば、{" "}
          <code>react-select</code> や <code>react-datepicker</code>{" "}
          などのように、 コンポーネントによっては register のための prop
          が公開されていないことがあります。
        </p>
        <p>
          次に簡単な方法は、ラッパーコンポーネントである{" "}
          <Link to="/api#Controller">Controller</Link> を使用することです。
          このコンポーネントはカスタム登録処理を行います。
        </p>

        <CodeArea
          rawData={uiLibraryHookInput}
          url="https://codesandbox.io/s/react-hook-form-with-ui-library-lg33x"
          tsRawData={uiLibraryHookInputTs}
          tsUrl="https://codesandbox.io/s/react-hook-form-with-ui-library-ts-dkjbf"
        />
        <p>
          <b className={typographyStyles.note}>オプション3：</b> 最後に{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://reactjs.org/docs/hooks-effect.html"
          >
            useEffect
          </a>{" "}
          フックを使用してカスタム登録を設定し、{" "}
          <code>
            <Link to={translateLink("api#setValue", currentLanguage)}>
              setValue
            </Link>
          </code>{" "}
          を介して値を更新できます。
        </p>
      </>
    ),
  },
  globalState: {
    title: "グローバルな状態に統合する",
    description: `React Hook Form では、データを保存するために状態管理ライブラリを使用する必要はありませんが、簡単に統合することができます。`,
  },
  reactNative: {
    title: "React Native",
    description: (
      <p>
        非制御コンポーネントでも、同じようにパフォーマンスが向上します。
        ただし、React Native と互換性のない API がいくつかあります (Web
        とネイティブとの API の違い)。 下記の例に示すように、
        <b>
          手動登録 (manual <code>register</code>)
        </b>{" "}
        を使用する必要があります。
      </p>
    ),
  },
  typeScript: {
    title: "TypeScript",
    description: (
      <p>
        React Hook Form は <code>TypeScript</code>{" "}
        を使用して構築されているため、フォームの値をサポートするための{" "}
        <code>FormData</code> 型を定義することができます。
      </p>
    ),
  },
  schema: {
    title: "スキーマバリデーション",
    description: (
      <>
        <p>
          React Hook Form は、{" "}
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
          </a>{" "}
          を活用してスキーマベースのフォームバリデーションをサポートしています。
          省略可能な引数として <code>validationSchema</code> を{" "}
          <a href="/api#useForm">useForm</a> に渡すことができます。 React Hook
          Form は、入力されたデータをスキーマに対してバリデーションを行い、{" "}
          <a href="/api#errors">errors</a> や妥当な結果を返します。
        </p>
      </>
    ),
    step1: (
      <>
        <p>
          <b className={typographyStyles.note}>ステップ1：</b> <code>Yup</code>{" "}
          をプロジェクトにインストールします。
        </p>
      </>
    ),
    step2: (
      <p>
        <b className={typographyStyles.note}>ステップ2：</b>{" "}
        バリデーション用のスキーマを作成し、 React Hook Form を使用して input
        を登録します。
      </p>
    ),
  },
  errors: {
    title: "エラーを処理する",
    description: (
      <>
        React Hook Form はフォーム内のエラーを表す <code>errors</code>{" "}
        オブジェクトを提供しています。
      </>
    ),
  },
}
