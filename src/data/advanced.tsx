import * as React from "react"
import CodeArea from "../components/CodeArea"
import accessibleCodeBase from "../components/codeExamples/accessibleCodeBase"
import accessibleCodeFinal from "../components/codeExamples/accessibleCodeFinal"
import Link from "../styles/link"
import { Note } from "../styles/typography"
import { step1, step2, step3 } from "../components/codeExamples/formWizard"
import smartForm from "../components/codeExamples/smartForm"
import { CodeHeading } from "../components/ApiPage"
import form from "../components/codeExamples/form"
import input from "../components/codeExamples/input"
import { Link as PageLink } from "gatsby"

export default {
  title: {
    en: "Advanced Usage",
    kr: "고급 사용법",
    jp: "高度な使用法",
    zh: "高级用法",
  },
  header: {
    en: {
      title: "Advanced",
      description: "Build complex and accessible forms with React Hook Form.",
    },
    kr: {
      title: "고급 사용법",
      description: "React Hook Form 으로 복잡하고 접근성 있는 폼을 만들기",
    },
    jp: {
      title: "高度な使用法",
      description:
        "React Hook Formを使用して、複雑でアクセス可能なフォームを構築する。",
    },
    zh: {
      title: "高级",
      description: "使用 React Hook Form 建设复杂且易于访问的表单.",
    },
  },
  controlledMixedWithUnControlled: {
    en: {
      title: "Controlled mixed with Uncontrolled Components",
      description: (
        <p>
          React Hook Form embraces uncontrolled components and also compatible
          with controlled component. Most of UI library is built to support only
          controlled components, such as{" "}
          <a
            href="https://github.com/mui-org/material-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            Material-UI
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/ant-design/ant-design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Antd
          </a>
          . Good news is Material-UI is already considering to support
          uncontrolled compoenents (React Hook Form), and you can help to{" "}
          <a
            href="https://github.com/mui-org/material-ui/issues/18269"
            target="_blank"
            rel="noopener noreferrer"
          >
            up vote this issue
          </a>
          . Besides, with React Hook Form controlled component's re-rendering is
          also been optimized. Here is an example which we combined with
          controlled and uncontrolled form validation.
        </p>
      ),
    },
    kr: {
      title: "Controlled mixed with Uncontrolled",
      description: (
        <p>
          React Hook Form embraces uncontrolled components and also compatible
          with controlled component. Most of UI library is built to support only
          controlled components, such as{" "}
          <a
            href="https://github.com/mui-org/material-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            Material-UI
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/ant-design/ant-design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Antd
          </a>
          . Good news is Material-UI is already considering to support
          uncontrolled compoenents (React Hook Form), and you can help to{" "}
          <a
            href="https://github.com/mui-org/material-ui/issues/18269"
            target="_blank"
            rel="noopener noreferrer"
          >
            up vote this issue
          </a>
          . Besides, with React Hook Form controlled component's re-rendering is
          also been optimized. Here is an example which we combined with
          controlled and uncontrolled form validation.
        </p>
      ),
    },
    jp: {
      title: "Controlled mixed with Uncontrolled",
      description: (
        <p>
          React Hook Form embraces uncontrolled components and also compatible
          with controlled component. Most of UI library is built to support only
          controlled components, such as{" "}
          <a
            href="https://github.com/mui-org/material-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            Material-UI
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/ant-design/ant-design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Antd
          </a>
          . Good news is Material-UI is already considering to support
          uncontrolled compoenents (React Hook Form), and you can help to{" "}
          <a
            href="https://github.com/mui-org/material-ui/issues/18269"
            target="_blank"
            rel="noopener noreferrer"
          >
            up vote this issue
          </a>
          . Besides, with React Hook Form controlled component's re-rendering is
          also been optimized. Here is an example which we combined with
          controlled and uncontrolled form validation.
        </p>
      ),
    },
    zh: {
      title: "受控制与不受控制的组件同存",
      description: (
        <p>
          React Hook Form
          拥护你们使用不受控制的组件，与此同时也兼容受控制的组件。
          大多数UI库的构建仅限于支持受控组件，如
          <a
            href="https://github.com/mui-org/material-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            Material-UI
          </a>
          和
          <a
            href="https://github.com/ant-design/ant-design"
            target="_blank"
            rel="noopener noreferrer"
          >
            And
          </a>
          。 好消息是Material-UI已经在考虑支持不受控制的组件（React Hook
          Form），你可以
          <a
            href="https://github.com/mui-org/material-ui/issues/18269"
            target="_blank"
            rel="noopener noreferrer"
          >
            帮助投票于这个问题
          </a>
          。 此外,我们也优化了受控组件的多次render.
          以下这是一个我们结合受控和不受控制的表单验证的例子。
        </p>
      ),
    },
  },
  errorMessage: {
    en: {
      title: "Error Message",
      description: (
        <p>
          Error messages are visual feedback to our users when there are issues
          associated with their inputs. In React Hook Form, we provide errors
          object to let you retrieve errors easily. However, there are several
          different ways for us to improve render error to the screen.
        </p>
      ),
      register: (
        <>
          Embed error message during <code>register</code>, you can easily
          insert your error message in the <code>value</code> attribute. Eg:
        </>
      ),
      component:
        "Create a ErrorMessage component to help your print out error.",
      optionalChaining: (
        <>
          <p>
            The{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
            >
              optional chaining
            </a>{" "}
            operator <code>?.</code> permits reading the <code>errors</code>{" "}
            object without worrying about causing error due to <code>null</code>{" "}
            or <code>undefined</code>.
          </p>
          <p>
            <code>{`errors?.firstName?.message`}</code>
          </p>
        </>
      ),
      get: (
        <p>
          If your project is using{" "}
          <a
            href="https://lodash.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            lodash
          </a>
          , then you can leverage what lodash{" "}
          <code>
            <a
              href="https://lodash.com/docs/4.17.15#get"
              target="_blank"
              rel="noopener noreferrer"
            >
              get
            </a>
          </code>{" "}
          function. Eg:
          <br />
          <br />
          <code>{`get(errors, 'firstName.message')`}</code>
        </p>
      ),
    },
    kr: {
      title: "에러 메세지",
      description: (
        <p>
          에러 메세지는 입력값에 관하여 문제가 있을 때 사용자에게 시각적으로
          피드백을 주는 것입니다. React Hook Form 은 쉽게 에러를 되짚을 수
          있도록 에러 객체를 제공합니다. 하지만 더 나은 방식으로 에러를 스크린에
          랜더링하기 위해 몇 가지 다른 방법이 있습니다.
        </p>
      ),
      register: (
        <>
          <code>register</code> 하면서 에러 메세지를 심어보세요. 쉽게{" "}
          <code>value</code> 속성에 에러 메세지를 넣을 수 있습니다. 예:
        </>
      ),
      component: "에러 출력을 돕기 위해 ErrorMessage 컴포넌트를 만들어보세요.",
      get: (
        <p>
          만약 여러분의 프로젝트가{" "}
          <a
            href="https://lodash.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            lodash
          </a>
          를 사용하고 있다면, lodash의{" "}
          <code>
            <a
              href="https://lodash.com/docs/4.17.15#get"
              target="_blank"
              rel="noopener noreferrer"
            >
              get
            </a>
          </code>{" "}
          함수를 활용할 수 있습니다. 예:
          <br />
          <br />
          <code>{`get(errors, 'firstName.message')`}</code>
        </p>
      ),
      optionalChaining: (
        <>
          <p>
            The{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
            >
              optional chaining
            </a>{" "}
            operator <code>?.</code> permits reading the <code>errors</code>{" "}
            object without worrying about causing error due to <code>null</code>{" "}
            or <code>undefined</code>.
          </p>
          <p>
            <code>{`errors?.firstName?.message`}</code>
          </p>
        </>
      ),
    },
    jp: {
      title: "エラーメッセージ",
      description: (
        <p>
          エラーメッセージは、入力に関連する問題があるときにユーザーに視覚的なフィードバックを与えることです。
          React Hook Form では、エラーを簡単に取得できるように errors
          オブジェクトを提供しています。
          ただし、画面のレンダリングエラーを改善する方法はいくつかあります。
        </p>
      ),
      register: (
        <>
          <code>register</code> 時にエラーメッセージを埋め込み、{" "}
          <code>value</code>{" "}
          属性にエラーメッセージを簡単に挿入することができます。例：
        </>
      ),
      component:
        "エラー出力を支援するために ErrorMessage コンポーネントを作成します。",
      get: (
        <p>
          プロジェクトで{" "}
          <a
            href="https://lodash.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            lodash
          </a>{" "}
          を使用している場合、lodash の{" "}
          <code>
            <a
              href="https://lodash.com/docs/4.17.15#get"
              target="_blank"
              rel="noopener noreferrer"
            >
              get
            </a>
          </code>{" "}
          関数を活用することができます。例：
          <br />
          <br />
          <code>{`get(errors, 'firstName.message')`}</code>
        </p>
      ),
      optionalChaining: (
        <>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
            >
              Optional chaining
            </a>{" "}
            演算子である <code>?.</code> は、 <code>null</code> または{" "}
            <code>undefined</code> によって発生するエラーを気にせずに{" "}
            <code>errors</code> オブジェクトを読み取ることができます。
          </p>
          <p>
            <code>{`errors?.firstName?.message`}</code>
          </p>
        </>
      ),
    },
    zh: {
      title: "错误信息",
      description: (
        <p>
          当有问题时，错误消息是对我们的用户的可视化反馈。 在react hook
          form，我们提供的错误对象让你轻松地检索错误。 然而，有几个
          不同的方式ra让我们减少render错误。
        </p>
      ),
      register: (
        <>
          Embed error message during <code>register</code>, you can easily
          insert your error message in the <code>value</code> attribute. Eg:
        </>
      ),
      component:
        "Create a ErrorMessage component to help your print out error.",
      get: (
        <p>
          If your project is using{" "}
          <a
            href="https://lodash.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            lodash
          </a>
          , then you can leverage what lodash{" "}
          <code>
            <a
              href="https://lodash.com/docs/4.17.15#get"
              target="_blank"
              rel="noopener noreferrer"
            >
              get
            </a>
          </code>{" "}
          function. Eg:
          <br />
          <br />
          <code>{`get(errors, 'firstName.message')`}</code>
        </p>
      ),
      optionalChaining: (
        <>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
            >
              optional chaining
            </a>
            运算符<code>?.</code>
            。允许您读取错误对象，而不必担心由于<code>null</code>或
            <code>undefined</code>而导致错误。
          </p>
          <p>
            <code>{`errors?.firstName?.message`}</code>
          </p>
        </>
      ),
    },
  },
  accessibility: {
    en: {
      title: "Accessibility (A11y)",
      description: (
        <>
          <p>
            React Hook Form has support for native form validation, which let
            you validate inputs with your own rules, since most of us have to
            build forms in a custom design and layout, and it's our
            responsibility to make sure our forms are accessible (A11y).
          </p>

          <p>
            The following code example works as intended for validation;
            however, it can be improved for accessibility.
          </p>

          <CodeArea rawData={accessibleCodeBase} />

          <p>
            The following code example is an improved version by leveraging{" "}
            <a
              rel="noopener noreferrer"
              href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
              target="_blank"
            >
              ARIA
            </a>
            .
          </p>
          <CodeArea rawData={accessibleCodeFinal} />

          <p>
            After this improvement, the screen reader will say:{" "}
            <i>“Name, edit, invalid entry, This is required.”</i>
          </p>
        </>
      ),
    },
    kr: {
      title: "접근성 (A11y)",
      description: (
        <>
          <p>
            React Hook Form 은 네이티브 폼 유효성 검사를 지원합니다. 그래서
            고유의 규칙을 설정하여 입력값을 검증할 수 있습니다. 우리는 대부분
            커스텀 디자인과 레이아웃을 적용하여 폼을 만들기 때문에 폼의
            접근성(A11y)이 보장되도록 만들어야 할 책임이 있습니다.
          </p>

          <p>
            아래의 코드 예제는 의도된 대로 유효성 검사가 잘 동작하지만, 접근성을
            더 끌어올릴 수 있습니다.
          </p>

          <CodeArea rawData={accessibleCodeBase} />

          <p>
            아래의 예제는{" "}
            <a
              rel="noopener noreferrer"
              href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
              target="_blank"
            >
              ARIA
            </a>
            를 활용하여 향상된 접근성을 제공합니다.
          </p>
          <CodeArea rawData={accessibleCodeFinal} />

          <p>
            이렇게 바꾸고 나면 스크린 리더는 보이는 화면을 이렇게 읽어줍니다:{" "}
            <i>“Name, edit, invalid entry, This is required.”</i>
          </p>
        </>
      ),
    },
    jp: {
      title: "アクセシビリティ (A11y)",
      description: (
        <>
          <p>
            React Hook Form はネイティブフォームバリデーションをサポートします。
            これにより、独自のルールで input
            のバリデーションを行うことができます。
            私たちのほとんどはカスタムデザインとレイアウトを適用してフォームを構築しますが、
            フォームのアクセシビリティ (A11y) を保証することも私たちの責任です。
          </p>

          <p>
            下記のコードの例は、意図したとおりのバリデーションが動作しますが、
            アクセシビリティについては改良することができます。
          </p>

          <CodeArea rawData={accessibleCodeBase} />

          <p>
            下記のコードの例は、{" "}
            <a
              rel="noopener noreferrer"
              href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
              target="_blank"
            >
              ARIA
            </a>{" "}
            を活用した改良版です。
          </p>
          <CodeArea rawData={accessibleCodeFinal} />

          <p>
            この改良後、スクリーンリーダーはこのように話すでしょう：{" "}
            <i>“Name, edit, invalid entry, This is required.”</i>
          </p>
        </>
      ),
    },
    zh: {
      title: "辅助功能 (A11y)",
      description: (
        <>
          <p>
            React Hook Form
            支持本机表单验证。可是因为我们大多数人都必须在自定义设计和布局中构建表单，于此同时这也变成我们的责任去确保表单形式是有可访问性的（A11y）。
          </p>

          <p>下面的代码示例可用于验证；但是, 它可以改善可访问性。</p>

          <CodeArea rawData={accessibleCodeBase} />

          <p>
            下面的代码示例是通过利用
            <a
              rel="noopener noreferrer"
              href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
              target="_blank"
            >
              ARIA
            </a>
            改进的版本。
          </p>
          <CodeArea rawData={accessibleCodeFinal} />

          <p>
            这种改进后，屏幕阅读器会说: <i>"名称，编辑是必需的。”</i>
          </p>
        </>
      ),
    },
  },
  wizard: {
    en: {
      title: "Wizard Form / Funnel",
      description: (
        <>
          <p>
            It's pretty common to collect user information through different
            pages and sections. We recommend using a state management library to
            store user input through different pages/section. In this example,
            we are going to use{" "}
            <Link
              href="https://github.com/bluebill1049/little-state-machine"
              target="_blank"
            >
              little state machine
            </Link>{" "}
            as our state management library (you can replace it with{" "}
            <Link href="https://github.com/reduxjs/redux" target="_blank">
              redux
            </Link>
            , if you are more familiar with it).
          </p>

          <p style={{ textAlign: "center" }}>♦</p>

          <p>
            <Note>Step 1:</Note> Set up your routes and store.
          </p>
          <CodeArea
            rawData={step1}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>Step 2:</Note> Create your pages, make them collect their
            data, submit that data to the store and push to the next page of
            your form.
          </p>
          <CodeArea
            rawData={step2}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>Step 3:</Note> Make your final submission with all the data in
            the store or display the resulting data.
          </p>
          <CodeArea
            rawData={step3}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            Following the above pattern, you should be able to build a wizard
            form/funnel to collect user input data from multiple pages.
          </p>
        </>
      ),
    },
    kr: {
      title: "마법사 폼 / 퍼널",
      description: (
        <>
          <p>
            서로 다른 페이지와 섹션에 걸쳐 사용자의 정보를 저장하는 일은 꽤
            흔합니다. 이럴 때는 상태 관리 라이브러리를 활용하여 다른 페이지와
            섹션에 걸쳐 사용자의 입력값을 저장해두는 것을 추천합니다. 이번
            예제에서는{" "}
            <Link
              href="https://github.com/bluebill1049/little-state-machine"
              target="_blank"
            >
              little state machine
            </Link>{" "}
            을 상태 관리 라이브러리로 사용합니다 (더 친숙하다면{" "}
            <Link href="https://github.com/reduxjs/redux" target="_blank">
              redux
            </Link>
            로 교체할 수도 있습니다).
          </p>

          <p style={{ textAlign: "center" }}>♦</p>

          <p>
            <Note>1단계:</Note> 라우트와 스토어를 설정합니다.
          </p>
          <CodeArea
            rawData={step1}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>2단계:</Note> 페이지를 생성하고, 폼을 제출할 때 데이터를
            스토어에 저장하도록 만든 뒤 다음 페이지로 이동하도록 만듭니다.
          </p>
          <CodeArea
            rawData={step2}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>3단계:</Note> 스토어에 모아진 모든 데이터를 사용하여 마지막
            폼을 제출하거나 결과물을 출력하세요.
          </p>
          <CodeArea
            rawData={step3}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            위의 패턴을 사용하면 여러 페이지에 걸쳐 사용자의 입력값을 모으는
            마법사 폼이나 퍼널을 만들 수 있습니다.
          </p>
        </>
      ),
    },
    jp: {
      title: "ウィザードフォーム・ファンネル",
      description: (
        <>
          <p>
            異なるページやセクション間でユーザーの情報を収集することは非常に一般的です。
            このような場合、異なるページやセクション間でのユーザーの入力値を、
            状態管理ライブラリを使用して保存しておくことをお勧めします。
            この例では、状態管理ライブラリとして{" "}
            <Link
              href="https://github.com/bluebill1049/little-state-machine"
              target="_blank"
            >
              little state machine
            </Link>{" "}
            (より身近なものであれば、{" "}
            <Link href="https://github.com/reduxjs/redux" target="_blank">
              redux
            </Link>{" "}
            として置き換えることができます) を使用します。
          </p>

          <p style={{ textAlign: "center" }}>♦</p>

          <p>
            <Note>ステップ1：</Note> ルーティングとストアを設定します。
          </p>
          <CodeArea
            rawData={step1}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>ステップ2：</Note>{" "}
            ページを作成し、フォームの送信データを収集し、
            そのデータをストアに送信して次のページに移動するようにします。
          </p>
          <CodeArea
            rawData={step2}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>ステップ3：</Note>{" "}
            最終的に、ストア内のすべてのフォームデータを使用して、
            フォームを送信したりフォームデータの結果を表示します。
          </p>
          <CodeArea
            rawData={step3}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            上記のパターンに従って、複数のページ間でのユーザーの入力データを収集して、
            ウィザードフォーム・ファンネルを構築できるはずです。
          </p>
        </>
      ),
    },
    zh: {
      title: "向导形式表格",
      description: (
        <>
          <p>
            通过不同的页面和部分收集用户信息是很常见的。
            我们建议使用状态管理库通过不同的页面/部分去存储用户输入。
            在这个例子中，我们将使用
            <Link
              href="https://github.com/bluebill1049/little-state-machine"
              target="_blank"
            >
              little state machine
            </Link>
            作为我们的状态管理库（如果您更熟悉它，您可以用
            <Link href="https://github.com/reduxjs/redux" target="_blank">
              redux
            </Link>
            替换它）。
          </p>

          <p style={{ textAlign: "center" }}>♦</p>

          <p>
            <Note>步骤1:</Note> 设置你的routes和store。
          </p>
          <CodeArea
            rawData={step1}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>步骤2:</Note>{" "}
            创建您的网页，让他们收集数据，提交该数据存储并推送到下一页你的表格。
          </p>
          <CodeArea
            rawData={step2}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>步骤3:</Note> 让您的最终提交所有的数据存储并且显示生成的数据。
          </p>
          <CodeArea
            rawData={step3}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            按照上述模式，您应该能够构建向导表单收集来自多个页面的用户输入数据。
          </p>
        </>
      ),
    },
  },
  smartForm: {
    en: {
      title: "Smart Form Component",
      description: (
        <>
          <p>
            This idea here is that you can easily compose your form with inputs.
            We are going to create a <code>Form</code> component to
            automatically collecting form data.
          </p>

          <CodeArea
            rawData={smartForm}
            url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
          />

          <p style={{ textAlign: "center" }}>♦</p>

          <p>Let's have a look what's in each of those components.</p>

          <CodeHeading>
            <h2>Form</h2>
          </CodeHeading>

          <p>
            The <code>Form</code> component's responsibility is to inject all{" "}
            <code>react-hook-form</code> methods into the child component.
          </p>

          <CodeArea
            rawData={form}
            url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
          />

          <CodeHeading>
            <h2>Input / Select</h2>
          </CodeHeading>

          <p>
            Those input components' responsibility is to registering them into{" "}
            <code>react-hook-form</code>.
          </p>
          <CodeArea
            rawData={input}
            url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
          />

          <p>
            With the <code>Form</code> component injecting{" "}
            <code>react-hook-form</code>
            's <code>props</code> into the child component, you can easily
            create and compose complex forms in your app.
          </p>
        </>
      ),
    },
    kr: {
      title: "스마트 폼 컴포넌트",
      description: (
        <>
          <p>
            손쉽게 폼과 인풋 필드를 조합하는 방법 중 하나를 소개합니다.{" "}
            <code>Form</code> 컴포넌트를 만들어서 자동으로 폼 데이터를 모을 수
            있도록 만들겠습니다.
          </p>

          <CodeArea
            rawData={smartForm}
            url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
          />

          <p style={{ textAlign: "center" }}>♦</p>

          <p>각각의 컴포넌트가 어떻게 이루어져 있는지 살펴보겠습니다.</p>

          <CodeHeading>
            <h2>Form</h2>
          </CodeHeading>

          <p>
            <code>Form</code> 컴포넌트가 하는 일은 모든{" "}
            <code>react-hook-form</code> 메서드를 자손 컴포넌트로 넘기는
            것입니다.
          </p>

          <CodeArea
            rawData={form}
            url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
          />

          <CodeHeading>
            <h2>Input / Select</h2>
          </CodeHeading>

          <p>
            인풋 컴포넌트의 역할은 자기 자신을 <code>react-hook-form</code> 에
            등록하는 것입니다.
          </p>
          <CodeArea
            rawData={input}
            url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
          />

          <p>
            <code>Form</code> 컴포넌트를 사용하여 <code>react-hook-form</code>{" "}
            의 props를 자손 컴포넌트로 주입할 수 있고, 덕분에 쉽게 복잡한 폼을
            만들고 조합할 수 있습니다.
          </p>
        </>
      ),
    },
    jp: {
      title: "スマートフォームコンポーネント",
      description: (
        <>
          <p>
            ここでのアイデアは、input
            とフォームを簡単に組み合わせることができるということです。
            <code>Form</code>{" "}
            コンポーネントを作成して、フォームデータを自動的に収集します。
          </p>

          <CodeArea
            rawData={smartForm}
            url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
          />

          <p style={{ textAlign: "center" }}>♦</p>

          <p>各コンポーネントがどのように構成されているか見てみましょう。</p>

          <CodeHeading>
            <h2>Form</h2>
          </CodeHeading>

          <p>
            <code>Form</code> コンポーネントの責任は、全ての{" "}
            <code>react-hook-form</code>{" "}
            のメソッドを子コンポーネントに注入することです。
          </p>

          <CodeArea
            rawData={form}
            url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
          />

          <CodeHeading>
            <h2>Input / Select</h2>
          </CodeHeading>

          <p>
            <code>Input / Select</code> コンポーネントの責任は、自分自身を{" "}
            <code>react-hook-form</code> に登録することです。
          </p>
          <CodeArea
            rawData={input}
            url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
          />

          <p>
            <code>Form</code> コンポーネントを使用して、
            <code>react-hook-form</code> の <code>props</code>{" "}
            を子コンポーネントに注入することで、
            アプリケーションで複雑なフォームを簡単に作成及び組み合わせることができます。
          </p>
        </>
      ),
    },
    zh: {
      title: "智能表单组件",
      description: (
        <>
          <p>
            这里的想法是，你可以很容易地用输入来组合你的表单。
            我们将创建一个表单组件来自动收集表单数据。
          </p>

          <CodeArea
            rawData={smartForm}
            url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
          />

          <p style={{ textAlign: "center" }}>♦</p>

          <p>让我们来看看这些组件中的每个组件。</p>

          <CodeHeading>
            <h2>Form</h2>
          </CodeHeading>

          <p>
            这个组件的责任是将所有<code>react-hook-form</code>方法注入到子组件中
          </p>

          <CodeArea
            rawData={form}
            url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
          />

          <CodeHeading>
            <h2>Input / Select</h2>
          </CodeHeading>

          <p>
            这个输入组件的责任是将它们注册到 <code>react-hook-form</code>.
          </p>
          <CodeArea
            rawData={input}
            url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
          />

          <p>
            随着<code>Form</code>组件将<code>react-hook-form</code>
            的功能注入到child组件中，您可以轻松地在应用中创建和撰写复杂的表单。
          </p>
        </>
      ),
    },
  },
  fieldArrays: {
    en: {
      title: "Field Arrays",
      description: (
        <>
          <p>
            This is one of the best features about React Hook Form: instead of
            importing components (like other libraries) to achieve this
            functionality, you can leverage your existing HTML markup. The key
            is within the <code>name</code> attribute. In React Hook Form, the{" "}
            <code>name</code> attribute represents the data structure you want
            to use.
          </p>

          <p>
            The following example demonstrates how you can create Field Arrays
            by manipulating the input <code>name</code> attribute.
          </p>

          <p>
            <Note>Note:</Note> if your application requires functionality such
            as: Delete, Insert, Append, Preprend. Here is the{" "}
            <a
              href="https://codesandbox.io/s/react-hook-form-field-array-advanced-with-delete-insert-append-edit-l19pz"
              target="_blank"
              rel="noreferrer noopener"
            >
              link for such implementation.
            </a>{" "}
            with{" "}
            <a
              href="https://github.com/react-hook-form/react-hook-form-input"
              target="_blank"
              rel="noreferrer noopener"
            >
              React Hook Form Input
            </a>
            .
          </p>
        </>
      ),
    },
    kr: {
      title: "필드 배열",
      description: (
        <>
          <p>
            이 기능은 React Hook Form 이 제공하는 제일 좋은 기능 중 하나입니다.
            이 기능을 구현하기 위해 (다른 라이브러리같은) 컴포넌트를 불러오는
            대신에 이미 있는 HTML 마크업을 활용할 수 있습니다. 핵심은 그 안에
            있는 <code>name</code> 속성입니다. React Hook Form 에서는{" "}
            <code>name</code> 속성이 여러분이 사용하고자 하는 자료 구조를
            대변합니다.
          </p>

          <p>
            아래의 예시는 인풋의 <code>name</code> 속성을 조작하여 어떻게 필드
            배열을 만들 수 있는지 보여줍니다.
          </p>

          <p>
            <Note>Note:</Note> if your application requires functionality such
            as: Delete, Insert, Append, Preprend. Here is the{" "}
            <a
              href="https://codesandbox.io/s/react-hook-form-field-array-advanced-with-delete-insert-append-edit-l19pz"
              target="_blank"
              rel="noreferrer noopener"
            >
              link for such implementation.
            </a>{" "}
            with{" "}
            <a
              href="https://github.com/react-hook-form/react-hook-form-input"
              target="_blank"
              rel="noreferrer noopener"
            >
              React Hook Form Input
            </a>
            .
          </p>
        </>
      ),
    },
    jp: {
      title: "フィールド配列",
      description: (
        <>
          <p>
            この機能は、React Hook Formが提供する最良の機能の一つです。
            この機能を実現するために (他のライブラリのように)
            コンポーネントをインポートする代わりに、 既存の HTML
            マークアップを活用することができます。 key は、 <code>name</code>{" "}
            属性にあります。 React Hook Form において、 <code>name</code>{" "}
            属性はあなたが使用したいデータ構造を表します。
          </p>

          <p>
            下記の例は、input の <code>name</code>{" "}
            属性を操作してどのようにフィールド配列を作成できるかを示しています。
          </p>

          <p>
            <Note>注意：</Note> アプリケーションにフィールドの削除や挿入、追加、先頭に追加などの機能が必要な場合は、{" "}
            <a
              href="https://github.com/react-hook-form/react-hook-form-input"
              target="_blank"
              rel="noreferrer noopener"
            >
              React Hook Form Input
            </a>{" "}
            を使用した
            <a
              href="https://codesandbox.io/s/react-hook-form-field-array-advanced-with-delete-insert-append-edit-l19pz"
              target="_blank"
              rel="noreferrer noopener"
            >
              実装のリンク
            </a>
            を参照して下さい。
          </p>
        </>
      ),
    },
    zh: {
      title: "自动生成表单",
      description: (
        <>
          <p>
            这是React Hook
            Form的最佳功能之一：您可以利用现有的HTML，而不需要导入其他的组件来实现此功能。
            键位于name属性中。 在React Hook
            Form中，name属性表示要使用的数据结构。
          </p>

          <p>下面的示例演示如何通过操作输入名称属性来创建自动生成表单。</p>

          <p>
            <Note>注意:</Note>
            如果您的应用程序需要功能，例如：删除，插入，追加，前置。 这里是这种
            <a
              href="https://github.com/react-hook-form/react-hook-form-input"
              target="_blank"
              rel="noreferrer noopener"
            >
              实现的链接
            </a>
            混合了
            <a
              href="https://github.com/react-hook-form/react-hook-form-input"
              target="_blank"
              rel="noreferrer noopener"
            >
              React Hook Form Input
            </a>
            。
          </p>
        </>
      ),
    },
  },
  schema: {
    en: {
      title: "Schema Validation",
      description: (
        <>
          <p>
            React Hook Form supports schema-based form validation with{" "}
            <a href="https://github.com/jquense/yup" target="_blank">
              Yup
            </a>
            , where you can pass your <code>validationSchema</code> to{" "}
            <a href="/api#useForm">useForm</a> as an optional config. React Hook
            Form will validate your input data against the schema and return
            with either <a href="/api#errors">errors</a> or a valid result.
          </p>
        </>
      ),
      step1: (
        <>
          <p>
            <Note>Step 1:</Note> Install <code>Yup</code> into your project.
          </p>
        </>
      ),
      step2: (
        <p>
          <Note>Step 2:</Note> Prepare your schema for validation and register
          inputs with React Hook Form.
        </p>
      ),
    },
    kr: {
      title: "스키마 유효성 검사",
      description: (
        <>
          <p>
            React Hook Form 은{" "}
            <a href="https://github.com/jquense/yup" target="_blank">
              Yup
            </a>
            을 활용하여 스키마 기반의 폼 유효성 검사를 제공합니다.{" "}
            <code>validationSchema</code> 를 <a href="/api#useForm">useForm</a>{" "}
            에 넘겨주어 추가 설정을 할 수 있습니다. React Hook Form 은 입력된
            데이터를 스키마와 비교하여 <a href="/api#errors">에러</a> 혹은
            알맞은 결과를 표시합니다.
          </p>
        </>
      ),
      step1: (
        <>
          <p>
            <Note>1단계:</Note> <code>Yup</code> 을 프로젝트에 설치합니다.
          </p>
        </>
      ),
      step2: (
        <p>
          <Note>2단계:</Note> 유효성 검사를 위한 스키마를 작성하고 React Hook
          Form 을 사용하여 인풋을 등록합니다.
        </p>
      ),
    },
    jp: {
      title: "スキーマバリデーション",
      description: (
        <>
          <p>
            React Hook Form は、{" "}
            <a href="https://github.com/jquense/yup" target="_blank">
              Yup
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
            <Note>ステップ1：</Note> <code>Yup</code>{" "}
            をプロジェクトにインストールします。
          </p>
        </>
      ),
      step2: (
        <p>
          <Note>ステップ2：</Note> バリデーション用のスキーマを作成し、 React
          Hook Form を使用して input を登録します。
        </p>
      ),
    },
    zh: {
      title: "架构验证",
      description: (
        <>
          <p>
            React Hook Form支持使用
            <a href="https://github.com/jquense/yup" target="_blank">
              Yup
            </a>
            进行基于模式的表单验证，您可以在<a href="/api#useForm">useForm</a>
            其中通过
            <code>validationSchema</code>将表单用作可选配置。 React Hook
            Form将根据模式验证您的输入数据，并返回<a href="/api#errors">错误</a>
            或有效结果。
          </p>
        </>
      ),
      step1: (
        <>
          <p>
            <Note>步骤1:</Note> 将<code>Yup</code>安装到您的项目中。
          </p>
        </>
      ),
      step2: (
        <p>
          <Note>步骤2:</Note> 准备您的架构以进行验证和注册 输入到React Hook
          Form.
        </p>
      ),
    },
  },
  connectForm: {
    en: {
      title: "Connect Form",
      description: (
        <p>
          When we are building forms, there are times when our input lives
          inside of deeply nested component trees, and that's when{" "}
          <a href="/api#FormContext">FormContext</a> comes in very handy.
          However, we can further improve the Developer Experience by creating a{" "}
          <code>ConnectForm</code> component and leveraging React's{" "}
          <a href="https://reactjs.org/docs/render-props.html">renderProps</a>.
          The benefit of such a component is you can connect your input with
          React Hook Form from anywhere.
        </p>
      ),
    },
    kr: {
      title: "폼 연결하기",
      description: (
        <p>
          폼을 만들 때, 인풋이 아주 깊게 중첩된 컴포넌트 트리 안에 남아있어야
          하는 때가 있습니다. 그럴 때 <a href="/api#FormContext">FormContext</a>{" "}
          가 아주 유용합니다. 하지만 <code>ConnectForm</code> 을 만들고 리액트의{" "}
          <a href="https://reactjs.org/docs/render-props.html">renderProps</a>{" "}
          패턴을 활용하여 개발자 경험을 향상시킬 수 있습니다. 이러한 컴포넌트를
          사용할 때의 이점은 어디서나 인풋을 React Hook Form과 연결할 수 있다는
          것입니다.
        </p>
      ),
    },
    jp: {
      title: "接続フォーム",
      description: (
        <p>
          フォームを作成するときに、深くネストされたコンポーネントツリーの中に
          input が存在することがあり、 そのような場合は{" "}
          <a href="/api#FormContext">FormContext</a> が非常に便利です。
          <code>ConnectForm</code> コンポーネントを作成して React の
          <a href="https://reactjs.org/docs/render-props.html">renderProps</a>{" "}
          を活用することで、 DX を更に向上することができます。{" "}
          <code>ConnectForm</code> コンポーネントの利点は、input をどこからでも
          React Hook Form に接続できることです。
        </p>
      ),
    },
    zh: {
      title: "连接表单",
      description: (
        <p>
          当我们构建表单时，有时候我们的输入会在深度嵌套的组件树中，而这时
          <a href="/api#FormContext">FormContext</a>让一切变得非常方便。
          但是，我们可以通过创建连接表单组件并利用React的
          <a href="https://reactjs.org/docs/render-props.html">renderProps</a>
          来进一步改善开发人员体验。
          这样一个组件的好处是你可以从任何地方连接你的输入与React Hook Form。
        </p>
      ),
    },
  },
  conditionalControlledComponent: {
    en: {
      title: "Conditional Controlled Component",
      description: (
        <>
          <p>
            In terms of conditional field, React Hook Form made that really
            simple for us, because the moment when you removed the input form
            the component tree, it will get <code>unregister</code>{" "}
            automatically,{" "}
            <a
              href="https://codesandbox.io/s/13ykqx4wx7"
              target="_blank"
              rel="noopener noreferrer"
            >
              here is an example
            </a>{" "}
            for such behavior. However, that's not the same case for controlled
            components since <code>ref</code> is not been registered, and we can
            do the following:
          </p>
          <ul>
            <li>
              <p>
                Leverage the use of{" "}
                <code>
                  <a
                    href="https://reactjs.org/docs/hooks-effect.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    useEffect
                  </a>
                </code>{" "}
                with custom register
              </p>
            </li>
            <li>
              <p>
                Import{" "}
                <a
                  href="https://github.com/react-hook-form/react-hook-form-input"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  react-hook-form-input
                </a>{" "}
                to wrap your component and let it manage register and unregister
              </p>
            </li>
          </ul>
          <p> Here are the examples:</p>
        </>
      ),
    },
    kr: {
      title: "조건부 제어 컴포넌트",
      description: (
        <p>
          React Hook Form 를 사용하면 조건부 필드를 다루기 무척 쉬워집니다.
          인풋이 컴포넌트 트리에서 제거되는 순간 자동으로{" "}
          <code>unregister</code> 되기 때문입니다.{" "}
          <a
            href="https://codesandbox.io/s/13ykqx4wx7"
            target="_blank"
            rel="noopener noreferrer"
          >
            여기 예제가 있습니다.
          </a>{" "}
          하지만 이러한 동작은 제어 컴포넌트에는 적용하기 어려운데,{" "}
          <code>ref</code> 가 등록되어있지 않기 때문입니다. 이럴 때는{" "}
          <code>
            <a
              href="https://reactjs.org/docs/hooks-effect.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              useEffect
            </a>
          </code>
          를 활용할 수 있습니다. 여기 활용 예제가 있습니다:
        </p>
      ),
    },
    jp: {
      title: "条件付き制御コンポーネント",
      description: (
        <p>
          React Hook Form
          を使用すると、条件付きフィールドを非常にシンプルに扱えます。 input
          がコンポーネントツリーから削除されると、自動的に{" "}
          <code>unregister</code> されるからです。 そのような振る舞いの
          <a
            href="https://codesandbox.io/s/13ykqx4wx7"
            target="_blank"
            rel="noopener noreferrer"
          >
            こちらに例を示します
          </a>{" "}
          。ただし、制御コンポーネントでは <code>ref</code>{" "}
          が登録されていないため、 同じように自動的に登録解除されません。
          このような場合、{" "}
          <code>
            <a
              href="https://reactjs.org/docs/hooks-effect.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              useEffect
            </a>
          </code>{" "}
          を活用することができます。下記に例を示します：
        </p>
      ),
    },
    zh: {
      title: "条件控制组件",
      description: (
        <>
          <p>
            在条件显示表格方面，React Hook
            Form对我们来说非常简单，因为当你删除了组件树的输入时，它会自动取消注册，这里就有一个
            <a
              href="https://codesandbox.io/s/13ykqx4wx7"
              target="_blank"
              rel="noopener noreferrer"
            >
              例子
            </a>
            。 但是，由于没有注册ref，因此受控组件不是同一种情况，以下有两个方案
          </p>
          <ul>
            <li>
              <p>
                我们可以利用
                <code>
                  <a
                    href="https://reactjs.org/docs/hooks-effect.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    useEffect
                  </a>
                </code>
                的使用来实现。
              </p>
            </li>
            <li>
              <p>
                使用
                <a
                  href="https://github.com/react-hook-form/react-hook-form-input"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  react-hook-form-input
                </a>
                来包裹您的受控组件从而做到自动注册于取消注册功能
              </p>
            </li>
          </ul>
          <p>例子如下:</p>
        </>
      ),
    },
  },
  formContext: {
    en: {
      title: "FormContext Performance",
      description: (
        <p>
          React Hook Form's{" "}
          <PageLink to="/api/#FormContext">FormContext</PageLink> is built upon{" "}
          <a
            href="https://reactjs.org/docs/context.html"
            target="_blank"
            rel="noreferrer noopener"
          >
            React's Context
          </a>{" "}
          API. It solves the problem where data is passed through the component
          tree without having to pass props down manually at every level. This
          also causes the component tree to trigger a re-render when React Hook
          Form triggers a state update, but we can still can optimise our App if
          required via the example blow.
        </p>
      ),
    },
    kr: {
      title: "FormContext 퍼포먼스",
      description: (
        <p>
          React Hook Form 의{" "}
          <PageLink to="/api/#FormContext">FormContext</PageLink> 는{" "}
          <a
            href="https://reactjs.org/docs/context.html"
            target="_blank"
            rel="noreferrer noopener"
          >
            리액트의 Context
          </a>{" "}
          API를 기반으로 만들어졌습니다. 이를 통해 컴포넌트 트리에 걸쳐 매
          단계마다 props를 전달해줘야 하는 문제를 해결할 수 있습니다. 하지만
          React Hook Form 이 상태 업데이트를 할 때마다 컴포넌트 트리가 리랜더링
          되는 문제를 일으킵니다. 필요하다면 여전히 아래의 예제처럼 앱을
          최적화할 수 있습니다.
        </p>
      ),
    },
    jp: {
      title: "FormContext パフォーマンス",
      description: (
        <p>
          React Hook Form の{" "}
          <PageLink to="/api/#FormContext">FormContext</PageLink> は、{" "}
          <a
            href="https://reactjs.org/docs/context.html"
            target="_blank"
            rel="noreferrer noopener"
          >
            React の Context API
          </a>{" "}
          上に構築されています。 これにより、全ての階層で手動で props
          を渡す必要なく、
          コンポーネントツリーを介してデータを渡す問題を解決します。
          これにより、React Hook Form は状態を更新する度に、
          コンポーネントツリーが再レンダリングされる問題を引き起こしますが、
          必要に応じて下記の例のようにアプリを最適化することができます。
        </p>
      ),
    },
    zh: {
      title: "FormContext 性能优化",
      description: (
        <p>
          React Hook Form的
          <PageLink to="/api/#FormContext">FormContext</PageLink>是建立在React的
          <a
            href="https://reactjs.org/docs/context.html"
            target="_blank"
            rel="noreferrer noopener"
          >
            Context
          </a>
          API上。 它解决了数据通过组件树传递而不必在每个级别手动传递的问题。
          这也会导致组件树在React Hook
          Form触发状态更新时触发重新render，但如果需要通过示例，我们仍然可以优化我们的应用程序。
        </p>
      ),
    },
  },
}
