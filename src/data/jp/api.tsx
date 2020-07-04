import * as React from "react"
import colors from "../../styles/colors"
import CodeArea from "../../components/CodeArea"
import useFieldArrayArgument from "../../components/codeExamples/useFieldArrayArgument"
import typographyStyles from "../../styles/typography.module.css"
import buttonStyles from "../../styles/button.module.css"
import tableStyles from "../../styles/table.module.css"
import generic from "../generic"

export default {
  title: "API ドキュメント",
  header: {
    description:
      "は API をシンプルにすることにより、最高な DX を提供することに焦点を当てています。",
  },
  useForm: {
    title: "useForm",
    description: (
      <p>
        <code>useForm</code> は<b>省略可能</b>な引数もあります。
        下記の例は、全てのオプションのデフォルト値を示します。
      </p>
    ),
    validationResolver: (goToSection) => (
      <>
        <p>
          このコールバック関数を使用すると、任意のスキーマバリデーションまたはカスタムバリデーションを実行できます。
          この関数は引数としてフォーム全体の <code>values</code> を持ち、
          その値を検証して <code>values</code> と <code>errors</code>{" "}
          の両方を返す必要があります。詳細については{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("validationResolver")}
          >
            validationResolver
          </button>{" "}
          セクションをご覧ください。
        </p>
      </>
    ),
    validateContext: (
      <>
        <p>
          このコンテキストオブジェクトは、<code>validationResolver</code>{" "}
          の第二引数または{" "}
          <a
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </a>{" "}
          バリデーションのコンテキストオブジェクトに渡されます。
        </p>
      </>
    ),
    validateCriteriaMode: (
      <>
        <p>
          デフォルトの設定である <code>firstError</code>{" "}
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
    validationOnAll: (
      <>
        検証は<code>blur</code>および<code>change</code>
        イベントでトリガーされます。 警告：<code>onChange</code>モードと同様に、
        <code>all</code>
        はパフォーマンスに大きな影響を与える可能性があります
      </>
    ),
    defaultValues: (goToSection) => (
      <>
        <p>
          <code>defaultValue/defaultChecked</code> を使用して input
          のデフォルト値を設定するか{" "}
          <a
            className={buttonStyles.links}
            href="https://reactjs.org/docs/uncontrolled-components.html"
          >
            (詳細については React ドキュメントを参照)
          </a>{" "}
          、<code>defaultValues</code>{" "}
          を省略可能な引数として渡してフォーム全体のデフォルト値を設定することができます。
        </p>

        <p>
          <b className={typographyStyles.note}>重要:</b>{" "}
          <code>defaultValues</code> はカスタムフック内にキャッシュされます。{" "}
          <code>defaultValues</code> をリセットしたい場合は、{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("reset")}
          >
            reset
          </button>{" "}
          API を使用してください。
        </p>

        <p>
          <b className={typographyStyles.note}>注意：</b>{" "}
          <code>defaultValues</code> で定義された値は <code>defaultValue</code>{" "}
          として{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("watch")}
          >
            watch
          </button>{" "}
          に注入されます。
        </p>

        <p>
          <b className={typographyStyles.note}>注意：</b> 手動で{" "}
          <code>register</code> を適用したフィールドでは React Hook Form に{" "}
          <code>ref</code> を提供しないため、 手動で登録した input (例:{" "}
          <code>{`register({ name: 'test' })`}</code>) に{" "}
          <code>defaultValues</code> は自動設定されません。
        </p>
      </>
    ),
    validationSchema: (goToSection) => (
      <p>
        スキーマレベルで <code>Yup</code>{" "}
        を使用してフォームバリデーションルールを適用します。{" "}
        <button
          className={buttonStyles.codeAsLink}
          onClick={() => goToSection("validationSchema")}
        >
          validationSchema
        </button>{" "}
        セクションを参照してください。
      </p>
    ),
    reValidateMode: (
      <p>
        このオプションを使用すると、エラーのある入力が再度バリデーションされるタイミングを設定することができます。{" "}
        (デフォルトでは、入力変更時にバリデーションがトリガーされます。){" "}
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
          <b className={typographyStyles.note}>注意：</b> <code>ref</code>{" "}
          を持つ登録したフィールドのみが機能します。 手動で登録した input
          では機能しません。例：{" "}
          <code>{`register({ name: 'test' }) // doesn't work`}</code>{" "}
        </p>
      </>
    ),
    shouldUnregister: (
      <p>
        デフォルトでは、入力が削除されると、React Hook Formは
        <code>MutationObserver</code>
        を使用して、マウント解除された入力を検出および<code>登録解除</code>
        します。ただし、<code>shouldUnregister</code>を<code>false</code>
        に設定して、マウント解除による入力状態の損失を防ぐことができます。
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
          <b className={typographyStyles.note}>注意：</b> input を登録解除 (
          <code>unregister</code>) すると、
          その値は送信されたフォームデータに含まれなくなります。
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
          <b className={typographyStyles.note}>重要：</b> <code>name</code>{" "}
          属性は<b>必須</b>かつ
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
        <a
          className={buttonStyles.links}
          href="https://github.com/react-hook-form/react-hook-form/blob/master/examples/FieldArray.tsx"
          title="example for Field Array"
        >
          フィールド配列の例をご覧ください
        </a>
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
      note: (goToSection) => (
        <>
          <h2 className={typographyStyles.title}>カスタム登録</h2>
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
            <button
              className={buttonStyles.codeAsLink}
              onClick={() => goToSection("setValue")}
            >
              setValue
            </button>{" "}
            で入力値を更新する必要があります。
          </p>

          <p>
            <code
              className={typographyStyles.codeBlock}
            >{`register({ name: 'firstName' }, { required: true, min: 8 })`}</code>
          </p>

          <p>
            <b className={typographyStyles.note}>注意：</b>{" "}
            値の更新中に、カスタム登録した input
            で再レンダリングをトリガーしたい場合は、 登録した input に type
            属性を指定する必要があります。
          </p>

          <p>
            <code
              className={typographyStyles.codeBlock}
            >{`register({ name: 'firstName', type: 'custom' }, { required: true, min: 8 })`}</code>
          </p>

          <p>
            <b className={typographyStyles.note}>Nota:</b> multiple radio inputs
            with the same name, you want to register the validation to the last
            input so the hook understand validate them as a group at the end.
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
    description: (
      <>
        <p>
          このオブジェクトには、フォームの状態に関する情報が含まれています。
        </p>

        <p>
          <b className={typographyStyles.note}>重要:</b> <code>formState</code>{" "}
          はレンダリングパフォーマンスの改善のために{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Proxy
          </a>{" "}
          にラップされているので、状態の更新を有効にするには、
          <code>render</code> 前に <code>formState</code>{" "}
          を呼び出すか、読み込む必要があります。
          この再レンダリング機能の削減機能は、Webプラットフォームにのみ適用されます。
          React Nativeでの<code>Proxy</code>のサポートについて。
        </p>
      </>
    ),
    dirty: "ユーザが入力操作した後 true に設定します。",
    dirtyFields: (
      <>
        ユーザーが変更したフィールドの一意の <code>Set</code> オブジェクト。
      </>
    ),
    isSubmitted:
      "ユーザーがフォームを送信した後 true に設定します。フォームの送信後、その状態は、resetメソッドで呼び出されるまで送信されたままになります。",
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
    description: () => (
      <>
        <p>
          オブジェクトには、各 input{" "}
          のフォームのエラーまたはエラーメッセージが含まれています。
        </p>
      </>
    ),
    types: (
      <>
        これは、単一のフィールドで複数のエラーを返す必要がある、
        パスワードのルールのような input のバリデーションに役立ちます。
        この機能を有効にするには、 <code>criteriaMode 'all'</code>{" "}
        を設定してください。
      </>
    ),
    message: `メッセージはデフォルトでは空文字です。ただし、バリデーションとエラーメッセージで登録するとエラーメッセージが返されます。`,
    ref: `input 要素の参照。`,
    note: (goToSection) => (
      <p>
        <b className={typographyStyles.note}>注意: </b>{" "}
        <button
          className={buttonStyles.codeAsLink}
          onClick={() => goToSection("ErrorMessage")}
        >
          ErrorMessage
        </button>{" "}
        を使用すると、エラー状態の処理に役立ちます。
      </p>
    ),
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
    },
  },
  handleSubmit: {
    title: "handleSubmit",
    description: (
      <>
        <p>
          この関数は、フォームバリデーションに成功するとフォームデータを渡します。また、リモートで呼び出すこともできます。
        </p>
        <p>
          <code className={typographyStyles.codeBlock}>
            handleSubmit(onSubmit)()
          </code>
        </p>
        <p>
          <b className={typographyStyles.note}>注意：</b>{" "}
          非同期バリデーションのための <code>async</code>{" "}
          関数を渡すことができます。例：{" "}
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
          この関数は、フォーム内のフィールドの値とエラーをリセット (
          <code>reset</code>) します。<code>omitResetState</code>
          を指定することにより、次のことができます。
          特定の状態のみをリセットします。 省略可能な引数として{" "}
          <code>values</code> を渡すと、
          割り当てられたデフォルト値でフォームをリセットできます。
        </p>
        <p>
          <b className={typographyStyles.note}>注意：</b> <code>ref</code>{" "}
          を公開しない <code>React-Select</code>{" "}
          のような制御されたコンポーネントの場合は、{" "}
          手動で入力値をリセットするために{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("setValue")}
          >
            setValue
          </button>{" "}
          を使用するか、{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("Controller")}
          >
            Controller
          </button>{" "}
          コンポーネントを使用して制御されたコンポーネントをラップする必要があります。
        </p>
        <p>
          <b className={typographyStyles.note}>注意：</b>{" "}
          <code>Controller</code> コンポーネントの値をリセットするには、
          <code>useForm</code> に <code>defaultValues</code>{" "}
          を指定する必要があります。
        </p>
      </>
    ),
  }),
  setError: {
    title: "setError",
    description: (
      <>
        <p>単一または複数の input のエラーを手動で設定できます。</p>

        <ul>
          <li>
            <p>
              このメソッドは、入力された場合、関連する入力エラーを永続化しません
              検証に合格します。
            </p>
          </li>
          <li>
            <p>
              入力フィールドに関連付けられていないエラーを設定します 永続化し、
              <code>clearError</code>で手動で削除する必要があります。
            </p>
          </li>
          <li>
            <p>
              <code>handleSubmit</code>関数の実行時に役立ちます。
              非同期検証後にユーザーにエラーフィードバックを提供したい。
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
        </ul>
        <p>
          <b className={typographyStyles.note}>注意：</b>{" "}
          このメソッドを呼び出すことで、
          <code>formState</code> は input の <code>name</code> を{" "}
          <code>touched</code> にプッシュします。
        </p>
        <p>
          <code>shouldValidate</code> を <code>true</code> に設定すると、
          フィールドのバリデーションがトリガーされます。
        </p>

        <CodeArea
          rawData={`setValue('name', 'value', { shouldValidate: true })`}
          withOutCopy
        />

        <p>
          フィールドをダーティに設定するために、<code>shouldDirty</code>
          パラメータを<code>true</code>に設定することもできます。
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
          この関数は、フォームの値を読み取るのに役立ちます。違い
          <code>watch</code>の間は<code>getValues</code>はトリガーされません
          入力の変更を再レンダリングまたはサブスクライブします。機能は次のとおりです。
        </p>

        <ul>
          <li>
            <p>
              <code>getValues()</code>：フォームの値全体を読み取ります。
            </p>
          </li>
          <li>
            <p>
              <code>getValues('test'</code>：個々の入力値を読み取ります
              <strong>name</strong>。
            </p>
          </li>
          <li>
            <p>
              <code>getValues(['test', 'test1'])</code>
              ：複数の入力を読み取ります<strong>name</strong>。
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
        <p>フォームで input/select のバリデーションを手動でトリガーします。</p>
        <p>
          <b className={typographyStyles.note}>注意：</b>{" "}
          バリデーションが失敗すると、<code>errors</code>{" "}
          オブジェクトが更新されます。
        </p>
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
          <td>input のユニークな name 。</td>
        </tr>
        <tr>
          <td>
            <code>control</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Object</code>
          </td>
          <td>✓</td>
          <td>{generic.control.jp}</td>
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
            コントローラーは<code>onChange</code>、<code>onBlur</code>{" "}
            を挿入します
            <code>value</code>をコンポーネントにプロップします。
            <CodeArea
              withOutCopy
              url="https://codesandbox.io/s/react-hook-form-v6-controller-24gcl"
              rawData={`<Controller 
  as={<TextInput />} 
  control={control} 
  name="test" 
/>
<Controller 
  as={TextInput} 
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
            これは
            <a
              href="https://reactjs.org/docs/render-props.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              レンダリングプロップ
            </a>
            。 React要素を返し、次の機能を提供する関数
            イベントと値をコンポーネントにアタッチします。これにより、
            非標準の小道具で外部制御コンポーネントと統合する 名前：
            <code>onChange</code>、<code>onBlur</code>および{""}
            <code>value</code>。
            <CodeArea
              withOutCopy
              url="https://codesandbox.io/s/react-hook-form-v6-controller-24gcl"
              rawData={`<Controller
  control={control} 
  name="test" 
  render(({ onChange, onBlur, value }) => (
    <Input 
      onTextChange={onChange} 
      onTextBlur={onBlur} 
      textValue={value} 
    />
  ))
/>
<Controller render={props => <Input {...props} />} />`}
            />
          </td>
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
            制御されたコンポーネント。 例: <code>as="input"</code> または{" "}
            <code>{`as={<TextInput />}`}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>defaultValue</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>any</code>
          </td>
          <td></td>
          <td>
            非制御コンポーネントの <code>defaultValue</code> と同じですが、{" "}
            <code>boolean</code> 値を指定すると、チェックボックスの input
            として扱われます。
            <p>
              <b className={typographyStyles.note}>注意:</b>{" "}
              <code>useForm</code> で <code>defaultValue</code> または{" "}
              <code>defaultValues</code> のどちらかを指定する必要があります。
            </p>
            <p>
              <b className={typographyStyles.note}>注意:</b>{" "}
              フォーム内でデフォルト値を引数として <code>reset</code>{" "}
              を呼び出す場合、 インラインの <code>defaultValue</code>{" "}
              を設定する代わりに、 useForm で <code>defaultValues</code>{" "}
              を指定する必要があります。
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
          <td></td>
          <td>
            <code>register</code> によるバリデーションルール。
            <ul>
              <li>
                ローカル状態：更新された検証で<code>register</code>入力
                ルールまたは<code>useEffect</code>での入力を
                <code>unregister</code>し、<code>Controller</code>
                に更新された<code>rules</code>でそれ自体を再登録させます。
              </li>
              <li>
                入力状態：<code>getValues</code>で<code>validate</code>
                関数を活用して、条件付きで検証を返します。
              </li>
            </ul>
            <CodeArea
              url="https://codesandbox.io/s/controller-rules-8pd7z?file=/src/App.tsx"
              withOutCopy
              rawData="
register('name', { required: state })
validate: (value) => value === getValues('firstName');"
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
            <p>
              このコールバック関数により、エラーが発生した場合にカスタムフックが入力フィールドにフォーカスさせることができます。
              この関数は、React と React-Native
              どちらでも、フォーカスできるコンポーネントであれば適用可能です。
            </p>
            <p>
              <a
                href="https://codesandbox.io/s/react-hook-form-controllerautofocus-v6-eeo66"
                target="_blank"
                rel="noopener noreferrer"
              >
                こちら
              </a>
              の Material-UI を使用した実装例を参考にしてください。
            </p>
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
        <p>
          Controllerコンポーネントへ渡す全ての props は、
          <code>as</code> prop で指定した Component インスタンスに転送されます。
          つまり、<code>label</code> prop を必要とするカスタム{" "}
          <code>Switch</code> コンポーネントがあるとします。 この{" "}
          <code>label</code> prop を Controller{" "}
          コンポーネントに直接渡すことができます。
          <code>name</code> prop{" "}
          は、主に後でフォームから値にアクセスするために使用されます。
        </p>
      </>
    ),
  },
  useFormContext: {
    title: "useFormContext",
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
          <code className={typographyStyles.typeText}>function</code>{" "}
          を呼び出すことができます。
        </p>
        <p>
          <b className={typographyStyles.note}>注意：</b>{" "}
          <code>useFormContext</code> を呼び出すと全ての <code>useForm</code>{" "}
          フック関数が得られます。
        </p>
      </>
    ),
  },
  control: {
    title: "control",
    description: (
      <p>
        このオブジェクトは、 React Hook Form の Controller{" "}
        コンポーネント用に作成され、 React Hook Form{" "}
        に制御されたコンポーネントを登録するためのメソッドが含まれています。
      </p>
    ),
  },
  ErrorMessage: {
    title: "ErrorMessage",
    description: (
      <p>
        関連する input{" "}
        のエラーメッセージを表示するためのシンプルなコンポーネント。
      </p>
    ),
    table: {
      name: <>関連するフィールド名</>,
      errors: (
        <>
          React Hook Form の <code>errors</code> オブジェクト
        </>
      ),
      message: <>インラインエラーメッセージ。</>,
      as: (
        <>
          ラッパーコンポーネント、または HTML タグ。 例: <code>as="span"</code>{" "}
          または <code>{`as={<Text />}`}</code>
        </>
      ),
      render: (
        <>
          これは、単一または複数のエラーメッセージをレンダリングするための{" "}
          <a
            href="https://reactjs.org/docs/render-props.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            render prop
          </a>{" "}
          です。
          <p>
            <b className={typographyStyles.note}>注意:</b> <code>messages</code>{" "}
            を使用するためには、 validateCriteriaMode を 'all'
            に設定する必要があります。
          </p>
        </>
      ),
    },
  },
  useFieldArray: {
    title: "useFieldArray",
    description: (
      <>
        <p>
          フィールド配列（動的な複数の input）を操作するためのカスタムフック。
          このフックの背後にある動機は、より良いユーザーエクスペリエンスとフォームのパフォーマンスを提供することです。
          <a
            href="https://www.youtube.com/watch?v=Q7lrHuUfgIs"
            target="_blank"
            rel="noopener noreferrer"
          >
            この短いビデオ
          </a>
          で、制御されたフィールド配列と非制御フィールド配列を比較できます。
        </p>

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <thead>
              <tr>
                <th>{generic.name.jp}</th>
                <th width="140px">{generic.type.jp}</th>
                <th width="90px">{generic.required.jp}</th>
                <th>{generic.description.jp}</th>
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
                <td>
                  <>関連するフィールド名</>
                </td>
              </tr>
              <tr>
                <td>
                  <code>control</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>Object</code>
                </td>
                <td></td>
                <td>{generic.control.jp}</td>
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
                  フィールド配列の<code>key</code>
                  値、デフォルトは「id」、次のことができます
                  キー名を変更します。
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>このフックは、次のオブジェクトと関数を提供します。</p>

        <CodeArea rawData={useFieldArrayArgument} />

        <p>
          <b className={typographyStyles.note}>重要:</b>{" "}
          <code>useFieldArray</code>{" "}
          は非制御コンポーネントに基づいて構築されます。
          下記の注意事項は、実装時の動作を理解し、注意するのに役立ちます。
        </p>

        <ul>
          <li>
            <p>
              <code>useForm</code> フックで <code>defaultValues</code>{" "}
              を指定することにより、 <code>fields</code>{" "}
              配列に値を格納することができます。
            </p>
          </li>
          <li>
            <p>
              <code>fields</code> オブジェクトから <code>id</code>{" "}
              をコンポーネントの <code>key</code>{" "}
              に割り当てていることを確認してください。
            </p>
          </li>
          <li>
            <p>
              必ず<code>defaultValue</code>をに設定してください
              <code>fields[index]</code>デフォルト値を設定する場合、
              入力で削除またはリセットします。
            </p>
          </li>
          <li>
            <p>
              次々とアクションを呼び出すことはできません。アクションはレンダリングごとにトリガーする必要があります。
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
              <code>useFieldArray</code> を使用する際には、
              <code>{`ref={register}`}</code> ではなく{" "}
              <code>{`ref={register()}`}</code> を適用して、 <code>map</code>{" "}
              中に <code>register</code> が呼び出されるようにすることが
              <strong>重要</strong>です。
            </p>
          </li>
          <li>
            <code>useEffect</code>のカスタムレジスタでは機能しません。
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
            このオブジェクトは、input
            をマップおよびレンダリングするための信頼できる情報源です。
            <p>
              <b className={typographyStyles.note}>重要:</b> 各 input{" "}
              は制御することができないため、 マップされたコンポーネントには{" "}
              <code>id</code> が必須です。 これは、React{" "}
              が変更、追加もしくは削除されたのかを識別するのに役立ちます。
            </p>
            <p>
              eg: <code>{`{fields.map(d => <input key={d.id} />)}`}</code>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>append</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (obj: object, shouldFocus?: boolean = true) =&gt; void
            </code>
          </td>
          <td>フィールドの最後に input を追加します。</td>
        </tr>
        <tr>
          <td>
            <code>prepend</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (obj: object, shouldFocus?: boolean = true) =&gt; void
            </code>
          </td>
          <td>フィールドの先頭に input を追加します。</td>
        </tr>
        <tr>
          <td>
            <code>insert</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (index: number, value: object, shouldFocus?: boolean = true) =&gt;
              void
            </code>
          </td>
          <td>特定の位置に input を挿入します。</td>
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
          <td>input の位置を入れ替えます。</td>
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
          <td>
            input を別の位置に移動します。
            <p>
              <b className={typographyStyles.note}>注意:</b> <code>move</code>{" "}
              と <code>swap</code> の違いは、
              <code>move</code> を呼び出し続けると input{" "}
              が円を描いて押し込まれるのに対して、
              <code>swap</code> は2つの input の位置を変更するだけです。
            </p>
          </td>
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
            特定の位置の input を削除します。引数で index を渡さない場合は全ての{" "}
            input を削除します。
          </td>
        </tr>
      </>
    ),
  },
  resolver: {
    title: "resolver",
    description: (
      <>
        <p>
          この関数を使用すると、
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
          、
          <a
            href="https://github.com/ianstormtaylor/superstruct"
            target="_blank"
            rel="noopener noreferrer"
          >
            Superstruct
          </a>{" "}
          などの任意の外部のバリデーションメソッドを実行できます。 実際には、Yup{" "}
          を外部の（スキーマ）バリデーションライブラリとして制限するだけがゴールではありません。
          私たちは React Hook Form{" "}
          で動作する多くのバリデーションライブラリをサポートしたいと思っています。
          カスタムバリデーションロジックを作成して検証することもできます。
        </p>

        <p>
          Yup、Joi、Superstructを正式にサポートしています{" "}
          <a
            href="https://github.com/react-hook-form/react-hook-form-resolvers"
            target="_blank"
            rel="noopener noreferrer"
          >
            標準リゾルバー
          </a>
          。
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

        <p>カスタムリゾルバの構築に関する注意：</p>

        <ul>
          <li>
            <p>
              <b className={typographyStyles.note}>注意:</b> <code>values</code>{" "}
              と <code>errors</code>{" "}
              を含むオブジェクトを返していることを確認してください。
              デフォルト値は空のオブジェクト <code>{`{}`}</code>{" "}
              である必要があります。
            </p>
          </li>
          <li>
            <p>
              <b className={typographyStyles.note}>注意:</b> 返す{" "}
              <code>errors</code> オブジェクトのキーは、フォーム内の input（
              <code>name</code>属性）に関連させる必要があります。
            </p>
          </li>
          <li>
            <p>
              <b className={typographyStyles.note}>注意:</b>この関数は
              カスタムフック内にキャッシュされますが、
              <code>context</code>は
              再レンダリングのたびに変更できる可変オブジェクト。
            </p>
          </li>
          <li>
            <p>
              <b className={typographyStyles.note}>注意:</b>{" "}
              ライブラリ自体が特定のフィールドに対してエラーオブジェクトを評価し、
              それに応じて再レンダリングをトリガーするため、ユーザーの入力中、一度に一つのフィールドでのみ{" "}
              input の再検証が発生します。
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
        <code>watch</code> APIと同じ機能を共有しますが、これは
        コンポーネントレベルで再レンダリングを分離し、結果的に
        アプリケーションのパフォーマンスが向上します。
      </p>
    ),
  },
}
