import code from "../../components/codeExamples/defaultExample"
import * as React from "react"
import Link from "../../styles/link"
import { CodeBlock, Note, Title, TypeText } from "../../styles/typography"
import { CodeAsLink } from "../../components/ApiPage"
import colors from "../../styles/colors"
import translateLink from "../../components/logic/translateLink"
import Popup from "../../components/Popup"

export default {
  title: "API ドキュメント",
  header: {
    description:
      "React Hook Form は API をシンプルにすることにより、最高な DX を提供することに焦点を当てています。",
  },
  useForm: {
    title: "useForm",
    intro: (
      <>
        <code>useForm</code>{" "}
        を呼び出すことにより、次のメソッドを受け取ることができます。{" "}
      </>
    ),
    description: (
      <p>
        <code>useForm</code> は<b>省略可能</b>な引数もあります。
        下記の例は、全てのオプションのデフォルト値を示します。
      </p>
    ),
    validateCriteriaMode: (
      <>
        <p>
          デフォルトの設定である <code>firstErrorDetected</code>{" "}
          は、全てのフィールドのバリデーションを行い、最初に発生したエラーを収集します。
        </p>
        <p>
          このオプションを <code>all</code>{" "}
          に設定すると、全てのフィールドのバリデーションが実行され、
          発生した全てのエラーが収集されます。
        </p>
      </>
    ),
    validateOnSubmit: (
      <>
        <code>submit</code> イベントからバリデーションがトリガーされ、
        無効な入力は <code>onChange</code>{" "}
        イベントリスナーをアタッチして再度バリデーションを行います。
      </>
    ),
    validateOnBlur: (
      <>
        <code>blur</code> イベントからバリデーションがトリガーされます。
      </>
    ),
    validateOnChange: (
      <>
        入力の度に <code>change</code>{" "}
        イベントからバリデーションがトリガーされ、複数の再レンダリングが行われます。
        非推奨: これをパフォーマンスの悪い習慣と考えてください。
      </>
    ),
    defaultValues: goToSection => (
      <>
        <p>
          <code>defaultValue/defaultChecked</code> を使用して input
          のデフォルト値を設定するか{" "}
          <Link href="https://reactjs.org/docs/uncontrolled-components.html">
            (詳細については React ドキュメントを参照)
          </Link>{" "}
          、<code>defaultValues</code>{" "}
          を省略可能な引数として渡してフォーム全体のデフォルト値を設定することができます。
        </p>

        <p>
          <Note>注意：</Note> <code>defaultValues</code> で定義された値は{" "}
          <code>defaultValue</code> として{" "}
          <CodeAsLink onClick={() => goToSection("watch")}>watch</CodeAsLink>{" "}
          に注入されます。
        </p>

        <p>
          <Note>注意：</Note> 手動で <code>register</code>{" "}
          を適用したフィールドでは React Hook Form に <code>ref</code>{" "}
          を提供しないため、 手動で登録した input (例:{" "}
          <code>{`register({ name: 'test' })`}</code>) に{" "}
          <code>defaultValues</code> は自動設定されません。
        </p>
      </>
    ),
    validationSchema: goToSection => (
      <p>
        スキーマレベルで <code>Yup</code>{" "}
        を使用してフォームバリデーションルールを適用します。{" "}
        <CodeAsLink onClick={() => goToSection("ValidationSchema")}>
          validationSchema
        </CodeAsLink>{" "}
        セクションを参照してください。
      </p>
    ),
    reValidateMode: (
      <p>
        このオプションを使用すると、エラーのある入力が再度バリデーションされるタイミングを設定することができます。{" "}
        (デフォルトでは、入力変更時にバリデーションがトリガーされます。){" "}
        <Popup />
      </p>
    ),
    validationFields: (
      <p>
        フィールドの配列を指定すると、含まれているフィールドのみがバリデーションが行われます。
        このオプションは、バリデーションが必要なフィールドを切り替えたい時に便利です。
      </p>
    ),
    submitFocusError: (
      <>
        <p>
          デフォルトでは、ユーザーがフォームを送信してそのフォームにエラーが含まれている時、
          エラーのある最初のフィールドがフォーカスされます。
        </p>

        <p>
          <Note>注意：</Note> <code>ref</code>{" "}
          を持つ登録したフィールドのみが機能します。 手動で登録した input
          では機能しません。例：{" "}
          <code>{`register({ name: 'test' }) // doesn't work`}</code>{" "}
        </p>
      </>
    ),
    nativeValidation: goToSection => (
      <p>
        このオプションを <code>true</code>{" "}
        に設定すると、ブラウザーネイティブバリデーションが有効になります。
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
        >
          ビルトインブラウザーバリデーションの詳細を確認
        </a>
        できます。詳細と例については{" "}
        <CodeAsLink onClick={() => goToSection("nativeValidation")}>
          nativeValidation
        </CodeAsLink>{" "}
        セクションを参照してください。
      </p>
    ),
  },
  unregister: {
    title: "unregister",
    description: (
      <>
        <p>
          このメソッドでは、単一の input または input の配列に{" "}
          <code>unregister</code> を適用することができます。 これは、{" "}
          <code>useEffect</code> でカスタム登録として input を登録 (
          <code>register</code>) し、
          コンポーネントのアンマウント後に登録を解除する場合に便利です。
        </p>
        <p>
          <Note>注意：</Note> input を登録解除 (<code>unregister</code>)
          すると、 その値は送信されたフォームデータに含まれなくなります。
        </p>
      </>
    ),
  },
  register: {
    title: "register",
    description: (
      <>
        <p>
          このメソッドを使用すると、input/select の <code>Ref</code>{" "}
          とバリデーションルールを React Hook Form に登録 (<code>register</code>
          ) することができます。
        </p>
        <p>
          バリデーションルールは全て HTML
          標準に基づいており、カスタムバリデーションも可能です。
        </p>
        <p>
          <Note>重要：</Note> <code>name</code> 属性は<b>必須</b>かつ
          <b>ユニーク</b>です。 input の name
          属性はドット記法およびブラケット記法もサポートしているため、
          ネストされたフォームフィールドを簡単に作成することができます。例は下記の通りです：
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
        <code>arrays/array</code> フィールドを使用する場合、input の name 属性を{" "}
        <code>name[index]</code> のように割り当てることができます。
        <Link
          href="https://github.com/react-hook-form/react-hook-form/blob/master/examples/FieldArray.tsx"
          title="example for Field Array"
        >
          フィールド配列の例をご覧ください
        </Link>
        。
      </p>
    ),
    example: "フォームの送信結果",
    selectHelp:
      "登録オプションを選択すると、下記の API テーブルが更新されます。",
    options: {
      title: "登録オプション",
      registerWithValidation: "バリデーションのみで登録",
      registerWithValidationMessage: "バリデーションとエラーメッセージで登録",
      note: goToSection => (
        <>
          <Title>カスタム登録</Title>
          <p>
            また、input を手動で登録 (manual <code>register</code>)
            することもできます。 これは、カスタムコンポーネントを操作していて{" "}
            <code>Ref</code> にアクセスできない場合に便利です。 React Native や{" "}
            <a
              href="https://github.com/JedWatson/react-select"
              target="_blank"
              rel="noopener noreferrer"
            >
              react-select
            </a>{" "}
            のようなカスタムコンポーネントを使用している場合がこれに該当します。
          </p>

          <p>
            カスタム登録を使用すると、 input の ref は登録されていないため、{" "}
            <CodeAsLink onClick={() => goToSection("setValue")}>
              setValue
            </CodeAsLink>{" "}
            で入力値を更新する必要があります。
          </p>

          <p>
            <CodeBlock>{`register({ name: 'firstName' }, { required: true, min: 8 })`}</CodeBlock>
          </p>

          <p>
            <Note>注意：</Note> 値の更新中に、カスタム登録した input
            で再レンダリングをトリガーしたい場合は、 登録した input に type
            属性を指定する必要があります。
          </p>
        </>
      ),
    },
    validation: {
      required: (
        <>
          Boolean の値。true
          の場合、フォームを送信する前に入力値が必須であることを示します。
          <code>errors</code>{" "}
          オブジェクトにエラーメッセージを返す文字列を割り当てることができます。
        </>
      ),
      maxLength: "input が受け付ける最大文字数。",
      minLength: "input が取りうる妥当と判断される最小文字数。",
      max: "input が受け付ける最大数。",
      min: "input が取りうる妥当と判断される最小数。",
      pattern: "input の内容が一致する必要がある正規表現。",
      validate: `引数として、単一のバリデーションを行うためにはコールバック関数を渡すことができ、複数のバリデーションを行うためにはコールバック関数のオブジェクトを渡すことができます。 (例を参照)`,
    },
  },
  formState: {
    title: "formState",
    description:
      "このオブジェクトには、フォームの状態に関する情報が含まれています。",
    dirty: "ユーザが入力操作した後 true に設定します。",
    isSubmitted: "ユーザーがフォームを送信した後 true に設定します。",
    touched: (
      <>
        操作された全ての input の <code>name</code> の配列。
      </>
    ),
    isSubmitting: (
      <>
        フォームの送信中は <code>true</code> に設定し、 フォームの送信後は{" "}
        <code>false</code> に設定します。
      </>
    ),
    submitCount: "フォームの送信回数。",
    isValid: "エラーがない場合は true に設定します。",
  },
  errors: {
    title: "errors",
    description: currentLanguage => (
      <>
        <p>
          オブジェクトには、各 input
          のフォームのエラーまたはエラーメッセージが含まれています。
        </p>

        <p>
          <Note>注意： </Note>オブジェクト自体は (ネストではなく)
          フラットな構造のため、 input の name を使用して errors
          に直接アクセスできます。例：{" "}
        </p>
        <p>
          <code>{`<input name="username[0].firstName" ref={register} />; \nerrors['username[0].firstName'];`}</code>
        </p>
        <p>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining">
            Optional chaining
          </a>{" "}
          が多くのブラウザでサポートされた場合、私たちはネストされた errors
          オブジェクトの導入を検討しています。
        </p>

        <p>
          <Note>注意：</Note> 高度な使用法ページから{" "}
          <Link
            to={translateLink("advanced-usage#ErrorMessage", currentLanguage)}
          >
            エラーメッセージ
          </Link>{" "}
          のレシピを学ぶこともできます。
        </p>
      </>
    ),
    types: (
      <>
        これは、単一のフィールドで複数のエラーを返す必要がある、
        パスワードのルールのような input のバリデーションに役立ちます。
        この機能を有効にするには、 <code>validateCriteriaMode: 'all'</code>{" "}
        を設定してください。
      </>
    ),
    message: `メッセージはデフォルトでは空文字です。ただし、バリデーションとエラーメッセージで登録するとエラーメッセージが返されます。`,
    ref: `input 要素の参照。`,
  },
  watch: {
    title: "watch",
    description: (
      <>
        <p>これは指定された input/inputs を監視し、その値を返します。</p>

        <ul>
          <li>
            <p>
              <code>defaultValue</code> が定義されていない場合、
              <code>watch</code> の初回のレンダリングは <code>register</code>{" "}
              の前に呼び出されるため <code>undefined</code> を返しますが、
              第2引数として <code>defaultValue</code>{" "}
              を設定して値を返すことができます。
            </p>
          </li>
          <li>
            <p>
              ただし、引数として <code>useForm</code> で{" "}
              <code>defaultValues</code> が初期化された場合、
              初回のレンダリングは <code>defaultValues</code>{" "}
              で指定された値を返します。
            </p>
          </li>
        </ul>
      </>
    ),
    tableTitle: {
      single: (
        <>
          input の値を name から監視します (lodash の{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://lodash.com/docs/4.17.15#get"
          >
            get
          </a>{" "}
          関数に似ています)
        </>
      ),
      multiple: "複数の input を監視します",
      all: "全ての input を監視します",
      nest: "すべての入力を監視し、ネストされたオブジェクトを返します",
    },
  },
  handleSubmit: {
    title: "handleSubmit",
    description: (
      <>
        <p>
          この関数は、フォームバリデーションに成功するとフォームデータを渡します。
        </p>
        <p>
          <Note>注意：</Note> 非同期バリデーションのための <code>async</code>{" "}
          関数を渡すことができます。例：{" "}
        </p>
        <p>
          <CodeBlock>
            handleSubmit(async (data) => await fetchAPI(data))
          </CodeBlock>
        </p>
      </>
    ),
  },
  reset: goToSection => ({
    title: "reset",
    description: (
      <>
        <p>
          この関数は、フォーム内のフィールドの値とエラーをリセット (
          <code>reset</code>) します。 省略可能な引数として <code>values</code>{" "}
          を渡すと、 割り当てられたデフォルト値でフォームをリセットできます。
        </p>
        <p>
          <Note>注意：</Note> <code>ref</code> を公開しない{" "}
          <code>React-Select</code> のような制御コンポーネントの場合は、
          <CodeAsLink onClick={() => goToSection("setValue")}>
            setValue
          </CodeAsLink>{" "}
          を使用して入力値を手動でリセットする必要があります または、
          <CodeAsLink onClick={() => goToSection("Controller")}>
            Controller
          </CodeAsLink>
          を使用して、制御対象コンポーネントをラップします。
        </p>
      </>
    ),
  }),
  setError: {
    title: "setError",
    description: <p>単一または複数の input のエラーを手動で設定できます。</p>,
  },
  clearError: {
    title: "clearError",
    description: (
      <ul>
        <li>
          <p>
            <code>undefined</code>: 全てのエラーをリセット
          </p>
        </li>
        <li>
          <p>
            <code>string</code>: 単一のエラーをリセット
          </p>
        </li>
        <li>
          <p>
            <code>string[]</code>: 複数のエラーをリセット
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
          この関数を使用すると、input/select の値を動的に設定できます。 setValue
          は不要な再レンダリングを避けようとしますが、
          以下の条件でのみ再レンダリングをトリガーします。
        </p>
        <ul>
          <li>
            <p>値の更新によってエラーがトリガーされるとき</p>
          </li>
          <li>
            <p>値の更新によってエラーが修正されるとき</p>
          </li>
          <li>
            <p>
              setValue が初めて実行され、 formState の <code>dirty</code> が
              true に設定されたとき
            </p>
          </li>
          <li>
            <p>
              setValue が実行され、 formState の <code>touched</code>{" "}
              が更新されたとき
            </p>
          </li>
        </ul>
        <p>
          <Note>注意：</Note> このメソッドを呼び出すことで、
          <code>formState</code> は input の <code>name</code> を{" "}
          <code>touched</code> にプッシュします。
        </p>
        <p>
          <code>shouldValidate</code> を <code>true</code> に設定すると、
          フィールドのバリデーションがトリガーされます。 例：{" "}
          <code>setValue('name', 'value', true)</code>
        </p>
      </>
    ),
  },
  getValues: {
    title: "getValues",
    description: (
      <>
        <p>この関数は、フォーム全体のデータを返します。</p>

        <ul>
          <li>
            <p>
              デフォルトでは、<code>getValues()</code>{" "}
              はフォームデータをフラットな構造で返します。 例：{" "}
              <code>{`{ test: 'data', test1: 'data1'}`}</code>
            </p>
          </li>
          <li>
            <p>
              定義されたフォームフィールドで、
              <code>getValues({`{ nest: true }`})</code> は input の{" "}
              <code>name</code>{" "}
              属性に基づいてネストされた構造でデータを返します。 例：{" "}
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
        <p>フォームで input/select のバリデーションを手動でトリガーします。</p>
        <p>
          <Note>注意：</Note> バリデーションが失敗すると、<code>errors</code>{" "}
          オブジェクトが更新されます。
        </p>
      </>
    ),
  },
  validationSchema: {
    title: "ValidationSchema",
    description: (
      <p>
        外部バリデーションスキーマでバリデーションルールを一元管理したい場合は、
        省略可能な引数として <code>useForm</code> に{" "}
        <code>validationSchema</code> を適用できます。 React Hook Form
        は現在、オブジェクトスキーマバリデーションで{" "}
        <Link
          href="https://github.com/jquense/yup"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yup
        </Link>{" "}
        をサポートしています。
      </p>
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
            <TypeText>string</TypeText>
          </td>
          <td>Unique name of your input.</td>
        </tr>
        <tr>
          <td>
            <code>control</code>
          </td>
          <td>
            <TypeText>Object</TypeText>
          </td>
          <td>
            <code>control</code> object is from invoking <code>useForm</code>.
          </td>
        </tr>
        <tr>
          <td>
            <code>defaultValue</code>
          </td>
          <td>
            <TypeText>any</TypeText>
          </td>
          <td>
            The same as uncontrolled component's <code>defaultValue</code>, when
            supply <code>boolean</code> value, it will be treated as checkbox
            input.
          </td>
        </tr>
        <tr>
          <td>
            <code>rules</code>
          </td>
          <td>
            <TypeText>Object</TypeText>
          </td>
          <td>Validation rules according to register at React Hook Form</td>
        </tr>
        <tr>
          <td>
            <code>onChange</code>
          </td>
          <td>
            <TypeText>(arguments: any) => any</TypeText>
          </td>
          <td>
            This <code>onChange</code> prop allow you to customise the return
            value. <br />
            <code>eg: {`onChange={{(data) => data.value}}`}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>onBlur</code>
          </td>
          <td>
            <TypeText>(arguments: any) => any</TypeText>
          </td>
          <td>
            This <code>onBlur</code> prop allow you to customise the return
            value. <br />
            <code>eg: {`onBlur={{(data) => data.value}}`}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>onChangeName</code>
          </td>
          <td>
            <TypeText>string</TypeText>
          </td>
          <td>
            This prop allow you to target that specific event name, eg: when{" "}
            <code>onChange</code> event is named <code>onTextChange</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>onBlurName</code>
          </td>
          <td>
            <TypeText>string</TypeText>
          </td>
          <td>
            This prop allow you to target that specific event name, eg: when{" "}
            <code>onBlur</code> event is named <code>onTextBlur</code>
          </td>
        </tr>
      </tbody>
    ),
    description: (
      <>
        <p>
          React Hook Form は、非制御コンポーネントとネイティブ HTML input{" "}
          をサポートしていますが、{" "}
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
          </a>
          などの外部の制御された UI{" "}
          コンポーネントライブラリと組み合わせての使用​​を避けることは難しいです。
          このラッパーコンポーネントにより、制御されたコンポーネントと組み合わせて簡単に使用​​できるようになります。
        </p>
      </>
    ),
  },
  formContext: {
    title: "FormContext",
    introduction: (
      <p>
        フォームコンテキストは、コンポーネントツリーに深くネストされた input
        があり、 メソッドを <code>props</code>{" "}
        として深く渡すことが苦痛になる場合の問題を解決することを目的としています。
      </p>
    ),
    description: (
      <>
        <p>
          フォームが <code>FormContext</code> でラップされると、
          ラップされた子コンポーネントで <code>useFormContext</code> を使用して{" "}
          <TypeText>function</TypeText> を呼び出すことができます。
        </p>
        <p>
          <Note>注意：</Note> <code>useFormContext</code> を呼び出すと全ての{" "}
          <code>useForm</code> フック関数が得られます。
        </p>
      </>
    ),
  },
  // Todo: translate below
  control: {
    title: "control",
    description: (
      <p>
        This object is made for React Hook Form's Controller component, which
        contains methods for registering controlled component into React Hook
        Form.
      </p>
    ),
  },
}
