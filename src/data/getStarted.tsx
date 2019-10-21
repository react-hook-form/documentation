import * as React from "react"
import code from "../components/codeExamples/defaultExample"
import { Note } from "../styles/typography"
import { Link } from "@reach/router"
import colors from "../styles/colors"

export default {
  title: {
    en: "Get Started",
    jp: "始める",
    zh: "起步",
  },
  header: {
    en: {
      title: "Get Started",
      description: "Simple form validation with React Hook Form.",
    },
    jp: {
      title: "はじめる",
      description: "React Hook Form によるシンプルなフォームバリデーション",
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
    jp: {
      title: "ビデオチュートリアル",
      description: `このビデオチュートリアルでは、React Hook Form の基本的な使用法とコンセプトを示しました。`,
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
    jp: {
      linkTitle: "クイックスタート",
      title: "インストール",
      description: "React Hook Form をインストールするためのコマンドは1つだけで、準備が整います。",
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
    jp: {
      title: "例",
      description: `次のコードは基本的な使用法を示します。`,
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
    jp: {
      title: "レジスターフィールド",
      description: (
        <>
          <p>
            React Hook Form の重要なコンセプトの一つは非制御コンポーネントをフックに{" "}
            <strong>
              <code>register</code>
            </strong>{" "}
            可能で、その値をフォームの送信用に検証と収集できるようにすることです。
          </p>

          <p>
            <Note>注意：</Note> 各フィールドには登録プロセスのキーとしてユニークな <code>name</code> が<strong>必須</strong>です。
          </p>

          <p>
            <Note>注意：</Note>React Native は manual register を使用する必要があります。 (例：{" "}
            <code>{`register({ name: 'test' }, { required: true })`}</code>
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
      description: (
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
            <Link to="api#register">register section</Link>.
          </p>
        </>
      ),
    },
    jp: {
      title: "バリデーションを適用する",
      description: (
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
            <Link to="api#register">register セクション</Link>で各ルールの詳細を読むことができます。
          </p>
        </>
      ),
    },
    zh: {
      title: "应用验证",
      description: (
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
            您可以在<Link to="api#register">注册部分</Link>
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
    jp: {
      title: "既存のフォームの適用",
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
      description: (
        <>
          <p>
            React Hook Form has made it easy to integrate with external UI
            component libraries.
          </p>
          <p>
            <span style={{ color: colors.lightPink }}>Note:</span> Most UI
            libraries do expose <code>innerRef</code> or <code>ref</code> to{" "}
            <code>register</code>. For components that are more complicated like{" "}
            <code>react-select</code> or <code>react-datepicker</code>, you can
            manually update the value via <code>setValue</code> or trigger an
            error with <code>setError</code>.
          </p>
        </>
      ),
    },
    jp: {
      title: "UI ライブラリを使用する",
      description: (
        <>
          <p>
            React Hook Formを使用すると、外部の UI コンポーネントライブラリと簡単に統合できます。
          </p>
          <p>
            <span style={{ color: colors.lightPink }}>注釈:</span> ほとんどの UI ライブラリは{" "}
            <code>innerRef</code> か <code>ref</code> を <code>register</code> に公開します。
            <code>react-select</code> や <code>react-datepicker</code> などのより複雑なコンポーネントの場合、{" "}
            <code>setValue</code> を使用して値を手動で更新したり、<code>setError</code> を使用してエラーをトリガーすることができます。
          </p>
        </>
      ),
    },
    zh: {
      title: "使用UI库",
      description: (
        <>
          <p>React Hook Form 使得它易于与外部UI组件库集成。</p>
          <p>
            大多数UI库都会将内部<code>innerRef</code>或者<code>Ref</code>
            公开给注册。 对于像react-selector和
            react-datepicker这样更复杂的组件，您可以通过setValue手动更新值或通过setError触发错误。
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
    jp: {
      title: "グローバルな状態に統合する",
      description: `React Hook Form ではデータを保存するための状態管理ライブラリは必要ありませんが、簡単に統合することができます。`,
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
    jp: {
      title: "エラーを処理する",
      description: (
        <>
          React Hook Form はフォーム内のエラーを表す <code>errors</code> オブジェクトを提供しています。
        </>
      ),
    },
    zh: {
      title: "处理错误",
      description: (
        <>
          React Hook Form提供了一个错误对象，用于显示表单中的错误。
        </>
      ),
    },
  },
}
