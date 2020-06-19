import * as React from "react"
import typographyStyles from "../../styles/typography.module.css"

export default {
  title: "DevTools",
  description:
    "React Hook Form DevTools を使用してバリデーション付きフォームのデバッグを支援します。",
  install: "インストール",
  step1: (
    <>
      <b className={typographyStyles.note}>ステップ1: </b>devDependencies{" "}
      パッケージとして <code>@hookform/devtools</code> をインストールします。
    </>
  ),
  step2: (
    <>
      <b className={typographyStyles.note}>ステップ2: </b>React{" "}
      アプリケーションとの統合は、アプリケーション・フォームに DevTool{" "}
      コンポーネントをインポートし、そのコンポーネントに <code>control</code>{" "}
      prop を渡すだけです。
    </>
  ),
  demoDescription: "次のデモを操作して、DevToolの動作を確認できます。",
  function: "機能性",
  functionDetail: (
    <>
      <li>
        <p>input およびフォーム全体の状態を読み取ります。</p>
      </li>
      <li>
        <p>
          <b className={typographyStyles.note}>注意: </b>
          RHF は非制御コンポーネントに基づいているため、<strong>
            Update
          </strong>{" "}
          ボタンは DevTool{" "}
          をリフレッシュして最新の入力値とフォームの状態を読み取ります。
        </p>
      </li>
      <li>
        <p>
          input{" "}
          またはフォームが有効または無効な場合に視覚的なフィードバックを提供します。
        </p>
      </li>
      <li>
        <p>
          登録済みの input およびカスタム登録済みコンポーネントを検索できます。
        </p>
      </li>
      <li>
        <p>
          <b className={typographyStyles.note}>注意: </b>
          <strong>Native</strong> ボタンをクリックするとその input{" "}
          までスクロールされるため、フォーム内から input{" "}
          を簡単に探すことができます。これは、大規模なフォームで作業するときに便利です。
        </p>
      </li>
    </>
  ),
  features: [
    {
      title: "React ベース",
      description:
        "DevTools は React を使用して構築されているため、React アプリケーションと簡単に統合できます。",
    },
    {
      description:
        "React Hook Form は React を使用してフォームを構築する際に優れたエクスペリエンスを提供することに焦点を当てています。このツールはフォームのデバッグに役立ちます。",
    },
    {
      title: "オープンソース",
      description:
        "DevTools はオープンソースプロジェクトのため、私たち全員が一緒にエクスペリエンスを改善できます。",
    },
  ],
}
