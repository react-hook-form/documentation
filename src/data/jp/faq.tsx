import * as React from "react"
import colors from "../../styles/colors"
import typographyStyles from "../../styles/typography.module.css"
import tableStyles from "../../styles/table.module.css"
import buttonStyles from "../../styles/button.module.css"

export default {
  title: "FAQs",
  header: {
    title: "FAQs",
    description: "よくある質問と答え。",
  },
  questions: [
    {
      title: "React Hook Formのパフォーマンス",
      description: (
        <p>
          パフォーマンスはこのcustom hookを作成する主な目的の一つでした。 React
          Hook
          Formでは非制御コンポーネントによってregister関数をrefで実行しています。
          このアプローチにより、ユーザーからの入力や値の変更により発生する再レンダリングの量を削減しています。
          コンポーネントのページへのマウントも制御されていないことによりはるかに高速になります。
          <a
            href="https://github.com/bluebill1049/react-hook-form-performance-compare"
            target="_blank"
            rel="noopener noreferrer"
          >
            こちら
          </a>
          の他のライブラリとのマウントスピードの簡単な比較をご覧下さい。
        </p>
      ),
    },
    {
      title: "アクセス可能な入力エラーとメッセージを作成するには？",
      description: (
        <p>
          React Hook Formは
          <a
            href="https://ja.reactjs.org/docs/uncontrolled-components.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            非制御コンポーネント
          </a>
          に基づいているため、アクセス可能なカスタムフォームを簡単に構築できます。
        </p>
      ),
    },
    {
      title: "クラスコンポーネントでも使えますか？",
      description: (
        <>
          <p>
            そのままでは動作しませんが、クラスコンポーネントを包むラッパーを作成して使用することは可能です。
          </p>

          <blockquote>
            クラスコンポーネント内でのHooksの使用は出来ませんが、クラスコンポーネントと
            Hooksを使用した関数コンポーネントを単一のDOM
            Tree内で混在させることは可能です。
            クラスコンポーネントかHooksを使用した関数コンポーネントのどちらを利用するかは、
            そのコンポーネントの実装の詳細に過ぎません。長い目で見れば、
            HooksはReactのコンポーネントを書く際の最初の選択肢になっていくだろうと私達は予想しています。
          </blockquote>
        </>
      ),
    },
    {
      title: "フォームをリセットするには？",
      description: (
        <>
          <p>フォームをリセットする方法は2つあります。</p>
          <ul>
            <li>
              <b>HTMLFormElement.reset()</b>
              <p>
                フォームのリセットボタンのクリックと同等の効果を持つメソッドです。
                フォーム内の
                <code> input/select/checkbox </code>
                要素の値のみリセットします。
              </p>
            </li>
            <li>
              <b>
                React Hook Form API: <code>reset()</code>
              </b>
              <p>
                React Hook Formの<code>reset</code>
                メソッドは、フォーム内の全てのフィールドの値をリセットし、フォーム内の全ての
                <code>errors</code>を消去します。
              </p>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "フォームの値を初期化するには？",
      description: (
        <p>
          React Hook Formは非制御コンポーネントによって出来ています。
          非制御コンポーネントでは、それぞれのfieldに対して
          <code>defaultValue</code>か<code>defaultChecked</code>
          を指定出来ます。
          実はこれよりも更に簡単な全てのインプット値の初期化方法をReact Hook
          Formは提供しています。 下記の例を参考して下さい。
        </p>
      ),
    },
    {
      title: "refを共有するには？",
      description: (
        <p>
          React Hook Form では入力値を取得するために<code>ref</code>
          が必要ですが、<code>ref</code>
          を他の目的（ビューへのスクロールなど）に使用することもできます。下記の例を参考して下さい。
        </p>
      ),
    },
    {
      title: "refへのアクセスが出来ない場合は？",
      description: (
        <>
          <p>
            実は<code>ref</code>を使わずとも<code>register</code>
            は使用出来ます。 加えて<code>setValue</code>と<code>setError</code>
            、<code>triggerValidation</code>
            の手動での使用も出来ます。
          </p>

          <p>
            <b className={typographyStyles.note}>注:</b> ただし<code>ref</code>
            が登録されていないため, React Hook
            Formはinputのイベントリスナーへの登録が出来ず、
            そのため値やエラーの更新を手動で行わなければいけません
          </p>
        </>
      ),
    },
    {
      title: "ブラウザのサポートは？",
      description: (
        <>
          <p>React Hook Formは全ての主要なブラウザに対応しています。</p>

          <p>
            IE11をサポートしたい場合は、IE11バージョンのreact-hook-formをインポートして下さい。
          </p>
        </>
      ),
    },
    {
      title: "最初のキーストロークが機能しない場合は？",
      description: (
        <>
          <p>
            <code>defaultValue</code>の代わりに<code>value</code>
            を使っていないかよく確認して下さい。
          </p>

          <p>
            React Hook
            Formは非制御インプットを基にして作られているため、インプットの値を
            <code>onChange</code>で<code>state</code>
            を通して変更する必要はありません。
            <code>value</code>は使わずに、<code>defaultValue</code>
            でのインプットの初期値 の設定のみ行って下さい。
          </p>
        </>
      ),
    },
    {
      title: "MutationObserverが原因でテストに失敗した場合は？",
      description: (
        <p>
          テスト中に<code>MutationObserver</code>
          が原因の問題が発生した場合は、<code>mutationobserver</code>
          をインストールしテストの
          <a
            href="https://jestjs.io/docs/en/configuration"
            target="_blank"
            rel="noopener noreferrer"
          >
            setup.js
          </a>
          でインポートしてください。
        </p>
      ),
    },
    {
      title: "React Hook Form、FormikそれともRedux Form?",
      description: (
        <>
          <p>
            全てのライブラリはフォーム作成の体験を簡単で素晴らしいものにするという同じ問題を解決しようとしていますが
            、3つのライブラリーの間にはいくつかの根本的な違いがあります。
            react-hook-formは非制御入力を念頭に置いて開発されており、
            ベストパフォーマンスのフォームを提供しようとし、再レンダリング数を出来る限り少なく抑えています。
            さらに、react-hook-formはReact
            Hookによって構築され、hookとして使用されます。
            つまり、コンポーネントをインポートしません。詳細な違いを以下に示します。
          </p>

          <div className={tableStyles.tableWrapper}>
            <table className={tableStyles.table}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${colors.lightPink}` }}>
                  <th width={200} />
                  <th>
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
                    <b>Component</b>
                  </td>
                  <td>
                    <a
                      href="https://ja.reactjs.org/docs/uncontrolled-components.html"
                      target="_blank"
                    >
                      uncontrolled
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://ja.reactjs.org/docs/forms.html"
                      target="_blank"
                    >
                      controlled
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://ja.reactjs.org/docs/forms.html"
                      target="_blank"
                    >
                      controlled
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Rendering</b>
                  </td>
                  <td>最小限の再レンダリング</td>
                  <td>
                    ローカル状態の変化に応じて再レンダリングします。つまり、入力時に変化します。
                  </td>
                  <td>
                    状態管理ライブラリ（Redux）の変更に応じて再レンダリングします。
                    これは、入力時に変化することを意味します。
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>API</b>
                  </td>
                  <td>Hooks</td>
                  <td>Component (RenderProps, Form, Field) + Hooks</td>
                  <td>Component (RenderProps, Form, Field)</td>
                </tr>
                <tr>
                  <td>
                    <b>Package size</b>
                  </td>
                  <td>
                    小
                    <br />
                    <code>
                      react-hook-form@3.26.2
                      <br />
                      <b className={typographyStyles.note}>5.3KB</b>
                    </code>
                  </td>
                  <td>
                    中
                    <br />
                    <code>
                      formik@2.0.1
                      <br />
                      <b className={typographyStyles.note}>14.4KB</b>
                    </code>
                  </td>
                  <td>
                    大
                    <br />
                    <code>
                      redux-form@8.2.6
                      <br />
                      <b className={typographyStyles.note}>27KB</b>
                    </code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Validation</b>
                  </td>
                  <td>
                    Built-in &{" "}
                    <a href="https://github.com/jquense/yup" target="_blank">
                      Yup
                    </a>
                  </td>
                  <td>
                    Build your own &{" "}
                    <a href="https://github.com/jquense/yup" target="_blank">
                      Yup
                    </a>
                  </td>
                  <td>Build your own & Plugins</td>
                </tr>
                <tr>
                  <td>
                    <b>学習曲線</b>
                  </td>
                  <td>低い</td>
                  <td>中</td>
                  <td>中</td>
                </tr>
                <tr>
                  <td>
                    <b>状況</b>
                  </td>
                  <td>小さなコミュニティ: 新しい成長中のライブラリ</td>
                  <td>
                    大きなコミュニティ:
                    コミュニティによって十分に確立されたフォームライブラリ
                  </td>
                  <td>
                    大きなコミュニティ:
                    コミュニティによって十分に確立されたフォームライブラリ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: "制御されたコンポーネントと組み合わせて使用することができますか？",
      description: (
        <>
          <p>
            短い回答： <b>Yes</b>
          </p>
          <p>
            React Hook Form{" "}
            は、制御されたフォームを構築することを推奨していませんが、
            制御されたコンポーネントと組み合わせて簡単に構築することができます。
          </p>
          <p>
            それは、<code>watch</code> API を使用して、各入力の変更を監視し、
            value prop に割り当てるトリックです。
          </p>
          <p>
            または、ラッパーコンポーネントの{" "}
            <a
              href="https://www.react-hook-form.com/api#Controller"
              title="React Hook Form Controller"
            >
              Controller
            </a>{" "}
            を使用して、これらのカスタム登録を処理できます。
          </p>
        </>
      ),
    },
    {
      title: "React Hook Form のテスト",
      description: (
        <div>
          <ul>
            <li>
              <p>
                <code>act</code> の警告が表示されるのはなぜですか？
              </p>

              <p>
                React Hook Form
                の全てのバリデーションメソッドは非同期関数として扱われるため、
                <a
                  className={buttonStyles.codeAsLink}
                  href="https://reactjs.org/docs/test-utils.html#act"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  act
                </a>{" "}
                を <code>async</code> でラップすることが重要です。
              </p>
            </li>
            <li>
              <p>fireEvent で入力の変更がトリガーされないのはなぜですか？</p>

              <p>
                React Hook Form は、入力の変更に <code>input</code>{" "}
                イベントを使用しています。 入力の変更がトリガーするために、
                react-testing-library の <code>fireEvent.input</code>{" "}
                に簡単に切り替えることができます。
              </p>
            </li>
          </ul>
        </div>
      ),
    },
  ],
}
