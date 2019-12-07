import * as React from "react"
import code from "../components/codeExamples/defaultExample"
import { Note } from "../styles/typography"
import { Link } from "@reach/router"
import translateLink from "../components/logic/translateLink"
import CodeArea from "../components/CodeArea"

export default {
  title: {
    en: "Get Started",
    pt: "Comece agora",
    kr: "시작하기",
    jp: "はじめる",
    zh: "起步",
  },
  header: {
    en: {
      title: "Get Started",
      description: "Simple form validation with React Hook Form.",
    },
    pt: {
      title: "Comece agora",
      description: "Simples validação de formulário com React Hook Form.",
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
    pt: {
      title: "Vídeo Tutorial",
      description: `Neste vídeo tutorial, é demonstrado o uso o conceito e uso básico usando React Hook Form.`,
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
      description: `在本视频教程中，我演示了使用React Hook Form的基本用法和概念。（不好意思是英文的）`,
    },
  },
  install: {
    en: {
      linkTitle: "Installation",
      title: "Quick start",
      description: `Installing React Hook Form only takes a single command and you're ready to roll.`,
    },
    pt: {
      linkTitle: "Instalação",
      title: "Começo rápido",
      description: `Instalando React Hook Form apenas necessita de um único comando e você está pronto pra rodar.`,
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
    pt: {
      title: "Examplo",
      description: `O seguinte código vai demonstrar o uso básico:`,
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
            command:{" "}
            <code>{`register({ name: 'test' }, { required: true })`}</code> or
            using{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/react-hook-form/react-hook-form-input"
            >
              React Hook Form Input
            </a>{" "}
            to wrap and auto register your component. You can also read more at{" "}
            <Link to="/api/#ReactNative">React Native</Link> section.
          </p>
        </>
      ),
    },
    pt: {
      title: "Registro dos campos",
      description: (
        <>
          <p>
            Um dos principais conceitos do React Hook Form é{" "}
            <strong>
              <code>register</code>
            </strong>{" "}
            seu componente incontrolado no Hook e consequentemente habilitando o
            valor, para ser validado e coletado para submissão.
          </p>

          <p>
            <Note>Nota:</Note> Cada campo <strong>obrigatório</strong> precisa
            ter um único <code>name</code> como chave do processo de registro.
          </p>

          <p>
            <Note>Nota: </Note>React Native vai precisar do uso manual do
            comando de registro:{" "}
            <code>{`register({ name: 'test' }, { required: true })`}</code> or
            usando{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/react-hook-form/react-hook-form-input"
            >
              React Hook Form Input
            </a>{" "}
            para englobar e registrar automaticamente seu componente. Você
            também pode ler mais em{" "}
            <Link to="/api/#ReactNative">React Native</Link> Seção.
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
            또는{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/react-hook-form/react-hook-form-input"
            >
              React Hook Form Input
            </a>
            을 사용하여 구성 요소를 래핑합니다.
            <Link to="/api/#ReactNative">React Native</Link> 섹션에서 더 많은
            내용을 읽을 수도 있습니다.
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
            ) をフックに
            <strong>
              登録（<code>register</code>)
            </strong>{" "}
            し、フォームフィールドの値を検証と収集できるようにすることです。
          </p>

          <p>
            <Note>注意：</Note> 各フィールドには登録プロセスの key
            としてユニークな <code>name</code> 属性が<strong>必須</strong>です。
          </p>

          <p>
            <Note>注意：</Note>React Native は手動登録 (manual{" "}
            <code>register</code>) する必要があります。 (例：{" "}
            <code>{`register({ name: 'test' }, { required: true })`}</code>
            または、
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/react-hook-form/react-hook-form-input"
            >
              React Hook Form Input
            </a>
            を使用してコンポーネントをラップします。
            <Link to="/api/#ReactNative">React Native</Link>
            セクションで詳細を読むこともできます。
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
            <strong>注册</strong>
            到Hook中，从而使其价值得到验证并收集来以供提交。
          </p>

          <p>
            <Note>注意：</Note>每个表格都需要有一个<strong>独特</strong>
            的名称作为注册过程的密钥
          </p>

          <p>
            <Note>注意：</Note>React Native 将需要使用手动注册 (例子如下:{" "}
            <code>{`register({ name: 'test' }, { required: true })`}</code>
            或使用
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/react-hook-form/react-hook-form-input"
            >
              React Hook Form Input
            </a>
            来包装您的组件。您还可以在
            <Link to="/api/#ReactNative">React Native</Link>部分阅读更多内容。
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
    pt: {
      title: "Aplicar validação",
      description: currentLanguage => (
        <>
          <p>
            React Hook Form cria validação de formulário simples, alinhado com
            os existentes{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
              target="_blank"
              rel="noopener noreferrer"
            >
              HTML padrão para validação de formulário
            </a>
            .
          </p>

          <p>Lista de regras validações suportadas:</p>
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
            Você pode ler mais detalhes em cada uma das regras em{" "}
            <Link to={translateLink("api#register", currentLanguage)}>
              seção de registro
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
              注册部分(register)
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
    pt: {
      title: "Adaptando um formulário existente",
      description: (
        <>
          Trabalhar com um formulário existente é simples. Um passo importante a
          ser feito <code>register</code> dentro do componente existente com{" "}
          <code>ref</code>.
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
      title: "调整您现有的表格",
      description: (
        <>
          处理您现有表单很简单。 重要的步骤是将表单组件的<code>ref</code>注册。
        </>
      ),
    },
  },
  controlledInput: {
    en: {
      title: "Controlled Input",
      description: (
        <p>
          React Hook Form embrace uncontrolled components and native HTML
          inputs, however it's hard to avoid working with external controlled
          component such as{" "}
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
          and{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/"
          >
            Material-UI
          </a>
          , hence we have built a wrapper component:{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/react-hook-form/react-hook-form-input"
          >
            React Hook Form Input
          </a>{" "}
          to streamline the integration process while still giving you the
          freedom to use custom register with your needs.
        </p>
      ),
    },
    pt: {
      title: "Campo Controlado",
      description: (
        <p>
          O React Hook Form adota componentes não controlados e HTML nativo
          entradas, no entanto, é difícil evitar trabalhar com controladores
          externos componente como{" "}
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
          and{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/"
          >
            Material-UI
          </a>
          , consequentemente precisamos construir um componente por volta:{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/react-hook-form/react-hook-form-input"
          >
            React Hook Form Input
          </a>{" "}
          para agilizar o processo de integração e ainda oferecer a você
          liberdade de usar o registro personalizado com suas necessidades.
        </p>
      ),
    },
    jp: {
      title: "制御された Input",
      description: (
        <p>
          React Hook Form は、非制御コンポーネントと HTML の input
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
          などの外部の制御されたコンポーネントの使用を避けることは難しいため、
          ラッパーコンポーネントを作成しました。{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/react-hook-form/react-hook-form-input"
          >
            React Hook Form Input
          </a>{" "}
          は、必要に応じてカスタム登録を自由に使用できると同時に、統合プロセスを簡素化します。
        </p>
      ),
    },
    zh: {
      title: "受控输入",
      description: (
        <p>
          React Hook
          Form支持和拥护不受控制的组件和HTML输入，但是很难避免使用外部受控组件，比如说
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
          和{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/"
          >
            Material-UI
          </a>
          ，因此我们建立了一个包装组件:{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/react-hook-form/react-hook-form-input"
          >
            React Hook Form Input
          </a>{" "}
          来简化集成过程，同时仍然可以自由地使用自定义register满足您的需求。
        </p>
      ),
    },
    kr: {
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/"
          >
            Material-UI
          </a>{" "}
          같이 외부 라이브러리에서 제공하는 제어 컴포넌트와 함께 사용해야 할
          때가 있습니다. 그래서 이럴 때 사용하기 위해 감싸는 컴포넌트를
          제공합니다.{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/react-hook-form/react-hook-form-input"
          >
            React Hook Form Input
          </a>{" "}
          은 여전히 필요에 따라 인풋 필드를 커스텀 등록하는 방법을 제공하여 위의
          외부 컴포넌트들과 쉽게 통합할 수 있습니다.
        </p>
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
            <Note>Option 1:</Note> The best way is to check if the component you
            wish to use exposes an <code>innerRef</code> or <code>ref</code>{" "}
            that can be used to{" "}
            <code>
              <Link to={translateLink("api#register", currentLanguage)}>
                register
              </Link>
            </code>
            . For example: Material-UI's <code>TextField</code> accepts{" "}
            <code>innerRef</code> as one of it's props. Simply pass{" "}
            <code>register</code> to it.
          </p>
          <p>
            <code>
              {
                '<TextField inputRef={register} label="First name" name="FirstName"/>'
              }
            </code>
          </p>
          <p>
            <Note>Option 2:</Note> Sometimes components don't expose a prop to
            register, for example <code>react-select</code> or{" "}
            <code>react-datepicker</code>.
          </p>
          <p>
            The next easiest way is to use the{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/react-hook-form/react-hook-form-input"
            >
              React Hook Form Input
            </a>{" "}
            wrapper component, which will take care of the custom register
            process for you.
          </p>
          <CodeArea
            rawData={`
import { RHFInput } from 'react-hook-form-input';

<RHFInput
  as={<Select />}
  register={register}
  setValue={setValue}
  name="reactSelect"
/>
`}
          />
          <p>
            <Note>Note:</Note> React Hook Form Input is in beta.{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://spectrum.chat/react-hook-form/general/react-hook-form-input~54322d3e-5400-4755-972b-cb1c3d911ff6"
            >
              Please help test it.
            </a>
          </p>
          <p>
            <Note>Option 3:</Note> Lastly we can set up a custom register using
            the{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://reactjs.org/docs/hooks-effect.html"
            >
              useEffect
            </a>{" "}
            Hook and update the value via{" "}
            <code>
              <Link to={translateLink("api#setValue", currentLanguage)}>
                setValue
              </Link>
            </code>
            .
          </p>
        </>
      ),
    },
    pt: {
      title: "Trabalhe com uma biblioteca de interface",
      description: currentLanguage => (
        <>
          <p>
            React Hook Form é bem fácil de ser integrado com componentes
            externos de interface.
          </p>
          <p>
            <Note>Opção 1:</Note> A melhor forma é checar se o componente que
            deseja expõe um <code>innerRef</code> ou <code>ref</code> isso pode
            ser utilizado para{" "}
            <code>
              <Link to={translateLink("api#register", currentLanguage)}>
                register
              </Link>
            </code>
            . Por exemplo: Material-UI's <code>TextField</code> aceita{" "}
            <code>innerRef</code> como props. Passando simplesmente{" "}
            <code>register</code> para ele.
          </p>
          <p>
            <code>
              {
                '<TextField inputRef={register} label="First name" name="FirstName"/>'
              }
            </code>
          </p>
          <p>
            <Note>Opção 2:</Note> As vezes componentes não expõe uma prop par
            aregistrar, por exemplo <code>react-select</code> ou{" "}
            <code>react-datepicker</code>.
          </p>
          <p>
            A forma mais fácil de usar é{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/react-hook-form/react-hook-form-input"
            >
              React Hook Form Input
            </a>{" "}
            utilizar um componente por volta, que irá tomar conta de registrar
            customizadamente o processo para você.
          </p>
          <CodeArea
            rawData={`
import { RHFInput } from 'react-hook-form-input';

<RHFInput
  as={<Select />}
  register={register}
  setValue={setValue}
  name="reactSelect"
/>
`}
          />
          <p>
            <Note>Nota:</Note> React Hook Form Input está em beta.{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://spectrum.chat/react-hook-form/general/react-hook-form-input~54322d3e-5400-4755-972b-cb1c3d911ff6"
            >
              Por favor, ajude a testar.
            </a>
          </p>
          <p>
            <Note>Opção 3:</Note> Por último, podemos setar um registro
            customizado usando{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://reactjs.org/docs/hooks-effect.html"
            >
              useEffect
            </a>{" "}
            Hook e atualizar o valor via{" "}
            <code>
              <Link to={translateLink("api#setValue", currentLanguage)}>
                setValue
              </Link>
            </code>
            .
          </p>
        </>
      ),
    },
    kr: {
      // Todo: @ahn :) missing translation
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
            를 할 수 있습니다. 하지만 <code>react-select</code> 나{" "}
            <code>react-datepicker</code> 처럼 위와 같은 <code>ref</code> 를 쓸
            수 없는 더 복잡한 컴포넌트를 다루려면 <code>useEffect</code> 안에서{" "}
            <code>register</code> 를 하거나{" "}
            <code>
              <Link to={translateLink("api#setValue", currentLanguage)}>
                setValue
              </Link>
            </code>
            를 사용하여 값을 업데이트 할 수 있습니다.
          </p>
          <p>
            <Note>참고:</Note> 또한 사용자 정의 레지스터 프로세스를 처리하기
            위해 래퍼 구성 요소 인{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/react-hook-form/react-hook-form-input"
            >
              React Hook Form Input
            </a>{" "}
            을 만들었습니다.
          </p>
        </>
      ),
    },
    jp: {
      title: "UI ライブラリを使用する",
      description: currentLanguage => (
        <>
          <p>
            React Hook Form は、外部 UI
            コンポーネントライブラリとの統合が容易です。
          </p>
          <p>
            <Note>オプション1：</Note>{" "}
            最適な方法は、使用したい外部コンポーネントが{" "}
            <code>
              <Link to={translateLink("api#register", currentLanguage)}>
                register
              </Link>
            </code>{" "}
            に使用できる <code>innerRef</code> または <code>ref</code>{" "}
            を公開しているかどうかを確認することです。 例えば、Material-UI の{" "}
            <code>TextField</code> は、 props の1つとして <code>innerRef</code>{" "}
            を受け付けます。
            <code>innerRef</code> に <code>register</code> を渡すだけです
          </p>
          <p>
            <code>
              {
                '<TextField inputRef={register} label="First name" name="FirstName"/>'
              }
            </code>
          </p>
          <p>
            <Note>オプション2：</Note> 例えば、 <code>react-select</code> や{" "}
            <code>react-datepicker</code> などのように、
            コンポーネントによっては register のための prop
            が公開されていないことがあります。
          </p>
          <p>
            次に簡単な方法は、ラッパーコンポーネントである{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/react-hook-form/react-hook-form-input"
            >
              React Hook Form Input
            </a>{" "}
            を使用することです。
            このコンポーネントはカスタム登録処理を行います。
          </p>
          <CodeArea
            rawData={`
import { RHFInput } from 'react-hook-form-input';

<RHFInput
  as={<Select />}
  register={register}
  setValue={setValue}
  name="reactSelect"
/>
`}
          />
          <p>
            <Note>注意：</Note> React Hook Form Input はベータ版です。
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://spectrum.chat/react-hook-form/general/react-hook-form-input~54322d3e-5400-4755-972b-cb1c3d911ff6"
            >
              テストに協力して下さい。
            </a>
          </p>
          <p>
            <Note>オプション3：</Note> 最後に{" "}
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
    zh: {
      title: "使用UI库",
      description: currentLanguage => (
        <>
          <p>React Hook Form 让外部UI组件库集成变得简单。</p>
          <p>
            <Note>注意:</Note> 大多数UI库都会将内部的<code>innerRef</code>或者
            <code>Ref</code>
            公开给与注册
            <code>
              <Link to={translateLink("api#register", currentLanguage)}>
                register
              </Link>
            </code>
            。但是，对于像react-selector和
            react-datepicker这样更复杂的组件并且不提供<code>Ref</code>
            ，您可以通过<code>register</code>在<code>useEffect</code>
            中实现，再通过运用
            <code>
              <Link to={translateLink("api#setValue", currentLanguage)}>
                setValue
              </Link>
            </code>
            更新它的值。
          </p>
          <p>
            <Note>注意:</Note>
            我们还制作了一个包装器组件
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/react-hook-form/react-hook-form-input"
            >
              React Hook Form Input
            </a>
            ，以帮助您的自定义注册表格过程。
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
    pt: {
      title: "Integre com o estado global",
      description: `React Hook Form não requer, que você tenha um gerenciador de estado para armazenar os dados, mas você pode facilmente integrar-lo a um.`,
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
      description: `React Hook Form不要求你有一个状态(state)管理来存储你的数据，但你可以很容易地与任何一个集成。`,
    },
  },
  reactNative: {
    en: {
      title: "React Native",
      description: (
        <p>
          You will get the same performance enhancement from an Uncontrolled
          Component. However, there are certain APIs which are not compatible
          with React Native (duo to the API difference from web and native). You
          will have to use a <b>manual register</b> as shown in the following
          example.
        </p>
      ),
    },
    pt: {
      title: "React Native",
      description: (
        <p>
          Você obterá o mesmo aprimoramento de desempenho de um Componente Não
          Controlado. No entanto, existem certas APIs que não são compatíveis
          com React Native (devido a diferença de API da Web e nativa). Você
          terá que usar um <b>registro manual</b> como mostra o seguinte
          exemplo.
        </p>
      ),
    },
    kr: {
      title: "React Native",
      description: (
        <p>
          비제어 컴포넌트에서도 동일한 성능 향상을 얻을 수 있습니다. 하지만,
          웹과 네이티브의 API 차이로 인해 React Native와 호환되지 않는 특정
          API도 있습니다. 이 경우, 다음 예제와 같이{" "}
          <b>수동 등록(manual register)</b>을 해주어야 합니다.
        </p>
      ),
    },
    jp: {
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
    zh: {
      title: "React Native",
      description: (
        <p>
          您将从受控制的组件中获得相同的性能增强。 但是，有一些与React
          Native不兼容的Api（与web和native的API差异）。
          您将不得不使用手动注册，如下面的示例所示。
        </p>
      ),
    },
  },
  typeScript: {
    en: {
      title: "TypeScript",
      description: (
        <p>
          React Hook Form is built with <code>Typescript</code>, so you can
          define a <code>FormData</code> type to support form values.
        </p>
      ),
    },
    pt: {
      title: "TypeScript",
      description: (
        <p>
          React Hook Form é construído com <code>Typescript</code>, então você
          pode definir um tipo <code>FormData</code> para suportar os valores do
          formulário.
        </p>
      ),
    },
    kr: {
      title: "TypeScript",
      description: (
        <p>
          React Hook Form은 타입스크립트로 만들어져, 폼 내 값 타입을{" "}
          <code>FormData</code> 로 설정할 수 있습니다.
        </p>
      ),
    },
    jp: {
      title: "TypeScript",
      description: (
        <p>
          React Hook Form は <code>Typescript</code>{" "}
          を使用して構築されているため、フォームの値をサポートするための{" "}
          <code>FormData</code> 型を定義することができます。
        </p>
      ),
    },
    zh: {
      title: "TypeScript",
      description: (
        <p>
          React Hook Form是使用<code>Typescript</code>
          构建的，因此您可以定义一个表单数据<code>FormData</code>
          类型来支持表单值。
        </p>
      ),
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
    pt: {
      title: "Lide com erros",
      description: (
        <>
          React Hook Form provê um objeto de <code>errors</code> para exibir que
          seu formulário possui erros.
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
