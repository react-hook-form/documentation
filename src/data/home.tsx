import * as React from "react"
import typographyStyles from "../styles/typography.module.css"

export default {
  title: {
    en: "Home",
    es: "Inicio",
    pt: "Início",
    kr: "홈",
    jp: "ホーム",
    zh: "首页",
    ru: "Главная",
  },
  description: {
    en: "React hook for form validation without the hassle",
    es: "React hook para validación de formularios sin molestias",
    pt: "React hook para validação de formulário sem aborrecimento",
    kr: "번거로움 없는 폼 검증을 위한 React hook",
    jp: "手間がかからないフォームバリデーションのための React フック",
    zh: "React hook用于表单验证，无需麻烦",
    ru: "React hook для валидации форм без хлопот",
  },
  slogan: {
    en:
      "Performant, flexible and extensible forms with easy-to-use validation.",
    es:
      "Formularios con buen rendimiento, flexibles y extensibles con validación fácil de usar.",
    pt:
      "Performático, flexível e formulário extensível, com fácil utilização e validação.",
    kr: "유연하고 확장 가능한 사용하기 쉬운 고성능 폼 검증 라이브러리",
    jp:
      "高性能で柔軟かつ拡張可能な使いやすいフォームバリデーションライブラリ。",
    zh: "高性能、灵活、易扩展、易于校验的表单库。",
    ru: "Эффективные, гибкие и расширяемые формы с простой валидацией.",
  },
  getStarted: {
    en: "Get Started",
    es: "Comenzar Ahora",
    pt: "Comece Agora",
    kr: "시작하기",
    jp: "はじめる",
    zh: "起步",
    ru: "Начать",
  },
  demo: {
    en: "Demo",
    es: "Demo",
    pt: "Demonstração",
    kr: "데모",
    jp: "デモ",
    zh: "示例",
    ru: "Демонстрация",
  },
  findInteresting: {
    en: {
      heading: "Ready to get started?",
      description: (
        <p className={typographyStyles.homeParagraph}>
          Form handling doesn't have to be painful. React Hook Form will help
          you write less code while achieving better performance.
        </p>
      ),
    },
    es: {
      heading: "Te pareció útil e interesante?",
      description: (
        <p>
          La validación de formularios debería ser más simple. React Hook Form
          te ayudará a escribir menos código y a tener un mejor rendimiento.
          Consulta la sección Comenzar Ahora y aprende más en la página de
          documentación de la API.
        </p>
      ),
    },
    pt: {
      heading: "Achou útil e interessante?",
      description: (
        <p>
          Validação de formulário deveria ser simples. React Hook Form vai te
          guiar a escrever menos código com uma melhor performance. Confira a
          seção Comece Agora e aprenda mais sobre na página de documentação da
          API.
        </p>
      ),
    },
    kr: {
      heading: "유용하고 흥미로운가요?",
      description: (
        <p>
          폼의 유효성을 검사하는 것은 더욱 간단해야 합니다. React Hook Form을
          사용하면 코드는 적게 쓰고 성능은 더욱 향상시킬 수 있습니다. 시작하기
          섹션을 확인한 다음 API 페이지에서 자세히 알아보세요.
        </p>
      ),
    },
    jp: {
      heading: "便利で面白いと思いますか？",
      description: (
        <p>
          フォームバリデーションはより簡単にする必要があります。React Hook Form
          を使用すると、コードの記述が少なくなり、パフォーマンスが向上します。はじめるセクションを見て、API
          ドキュメントページで詳細を確認してください。
        </p>
      ),
    },
    zh: {
      heading: "尝试一下?",
      description: (
        <p>
          表单构建不应该充满痛苦。React Hook Form
          将使您编写更少的代码并具有更好的性能。
        </p>
      ),
    },
    ru: {
      heading: "Это было полезным и интересным для вас?",
      description: (
        <p>
          Валидация форм должна быть очень простой. React Hook Form позволит вам
          писать меньше кода и имеет лучшую производительность. Ознакомьтесь с
          разделом «Начало работы» и узнайте больше на странице документации по
          API.
        </p>
      ),
    },
  },
  features: {
    en: [
      {
        title: "DX",
        description: `Intuitive, feature-complete API providing a seamless experience to developers when building forms.`,
      },
      {
        title: "HTML standard",
        description: `Leverage existing HTML markup and validate your forms with our constraint-based validation API.`,
      },
      {
        title: "Super Light",
        description: `Package size matters. React Hook Form is a tiny library without any dependencies.`,
      },
      {
        title: "Performance",
        description: `Minimizes the number of re-renders and faster mounting, striving to provide the best user experience.`,
      },
      {
        title: "Adoptable",
        description: `Since form state is inherently local, it can be easily adopted without other dependencies.`,
      },
      {
        title: "Award",
        description: `Winner of 2020 GitNation React OS Award for Productivity Booster.`,
      },
    ],
    es: [
      {
        title: "DX",
        description: `API intuitiva y con funciones completas que proporciona una experiencia perfecta a los desarrolladores al crear formularios.`,
      },
      {
        title: "HTML estandar",
        description: `Aprovecha el propio HTML y valida tus formularios con nuestra API basada en restricciones.`,
      },
      {
        title: "Super Ligera",
        description: `El rendimiento es importante y el tamaño son importantes. React Hook Form es una pequeña librería sin dependencias.`,
      },
      {
        title: "Performance",
        description: `Minimiza el número de renderizaciones y logra un montaje más rápido, proporcionar una mejor experiencia de usuario.`,
      },
      {
        title: "Adoptable",
        description: `Dado que el estado del formulario es inherentemente local, se puede adoptar fácilmente sin otras dependencias.`,
      },
      {
        title: "Premio",
        description: `Ganador del premio GitNation React OS 2020 por el aumento de la productividad.`,
      },
    ],
    pt: [
      {
        title: "Experiência do desenvolvedor",
        description: `Intuitivo, API Completa de recursos, proporcionando experiência perfeita aos desenvolvedores ao criar formulários.`,
      },
      {
        title: "HTML padrão",
        description: `Aproveite o próprio HTML e valide seus formulários com nossa API baseada em restrinções.`,
      },
      {
        title: "Super rápida",
        description: `Performance é importante e tamanho do pacote importa. React Hook Form é uma pequena biblioteca sem nenhuma dependência.`,
      },
      {
        title: "Performance",
        description: `Minimize o número de renderizações e montagem rápida, se esforce em prover a melhor experiência do usuário.`,
      },
      {
        title: "Adotável",
        description: `Desde que o estado é inerentemente local, possibilita a fácil adoção, sem utilizar nenhuma outra dependência.`,
      },
      {
        title: "Award",
        description: `Winner of 2020 GitNation React OS Award for Productivity Booster.`,
      },
    ],
    kr: [
      {
        title: "DX",
        description: `직관적이고 완벽한 기능의 API를 통해 폼을 만드는 개발자들에게 우수한 경험을 제공합니다.`,
      },
      {
        title: "HTML 표준",
        description: `기존 HTML 마크업을 그대로 사용하고, 제약 기반의 유효성 검사 API를 사용하여 폼의 유효성을 검사할 수 있습니다.`,
      },
      {
        title: "가벼움",
        description: `패키지의 크기도 성능만큼 중요합니다. React Hook Form은 별도의 의존성이 없는 작은 라이브러리입니다.`,
      },
      {
        title: "성능",
        description: `렌더링 횟수를 최소화하고 마운트 속도를 높여 최고의 사용자 경험을 제공하기 위해 노력하고 있습니다.`,
      },
      {
        title: "사용성",
        description: `폼 상태는 로컬에서 관리되기 때문에 다른 의존성 없이 쉽게 사용할 수 있습니다.`,
      },
      {
        title: "장학금",
        description: `생산성 부스터 부문 2020 GitNation React OS Award 수상.`,
      },
    ],
    jp: [
      {
        title: "DX",
        description: `直感的で完全な機能の API はフォームを構築する際に開発者に優れたエクスペリエンスの提供します。`,
      },
      {
        title: "HTML 標準",
        description: `既存の HTML マークアップを活用し、Constraint Validation API でフォームバリデーションを開始します。`,
      },
      {
        title: "超軽量",
        description: `パッケージのサイズもパフォーマンス同様に重要です。依存関係のない小さなライブラリです。`,
      },
      {
        title: "パフォーマンス",
        description: `再レンダリング数を最小限に抑えマウントを高速化し、最高なユーザーエクスペリエンスを提供します。`,
      },
      {
        title: "適応性",
        description: `フォームの状態は、ローカルで管理されるため、他に依存せず簡単に使用することができます。`,
      },
      {
        title: "授賞式",
        description: `2020年GitNation React OS AwardのProductivity Boosterを受賞しました。`,
      },
    ],
    zh: [
      {
        title: "开发体验",
        description: `直观且完备的API为开发人员提供最好的表单构建体验。`,
      },
      {
        title: "HTML标准",
        description: `利用现有的HTML，并使用基于约束的API来校验您的表单。`,
      },
      {
        title: "超轻量",
        description: `包的体积同样重要。React Hook Form是无任何依赖的超轻量库。`,
      },
      {
        title: "高性能",
        description: `最大程度减少重渲染次数、更快速的挂载以提供最佳的用户体验。`,
      },
      {
        title: "适应性强",
        description: `由于表单的状态就在本地，因此无须任何依赖即可应用状态。`,
      },
      {
        title: "奖状",
        description: `荣获2020年GitNation React OS Productivity Booster奖。`,
      },
    ],
    ru: [
      {
        title: "Простота разработки",
        description:
          "Интуитивно понятный, полнофункциональный API, предоставляющий разработчикам эффективные возможности при создании форм.",
      },
      {
        title: "HTML стандарты",
        description:
          "Используйте существующую HTML-разметку и валидируйте формы с помощью нашего принудительного API валидации.",
      },
      {
        title: "Супер лёгкий код",
        description:
          "Производительность важна, поэтому вес кода имеет значение. React Hook Form - это крошечная библиотека без каких-либо зависимостей.",
      },
      {
        title: "Производительность",
        description:
          "Для улучшения пользовательского опыта минимизировано количество повторных рендеров и ускорена сборка.",
      },
      {
        title: "Оптимизированность",
        description:
          "Поскольку состояние формы по своей природе является локальным, его можно легко оптимизировать без сторонних зависимостей.",
      },
      {
        title: "Награда",
        description: `Победитель премии GitNation React OS 2020 за повышение производительности.`,
      },
    ],
  },
  codeComparison: {
    en: {
      title: "Less code. More performant",
      description: (
        <p id="codeComparison" className={typographyStyles.homeParagraph}>
          Reducing the amount of code you need to write, and removing
          unnecessary re-renders are some of the primary goals of React Hook
          Form. Now dive in and explore with the following example:
        </p>
      ),
    },
    es: {
      title: "Comparación de código de Librería",
      description: (
        <>
          <p id="codeComparison">
            Reducir la cantidad de código que hay que escribir es uno de los
            objetivos principales de React Hook Form. Para demostrar esto,
            veamos una forma muy simple de validación entre algunas de las
            librerías de validación más populares.
          </p>
          <p style={{ fontSize: 14 }}>
            <b className={typographyStyles.note}>⚠ Nota:</b> Tanto el código de
            Formik como el de Redux-Form a continuación fueron copiados de la
            documentación oficial.
          </p>
        </>
      ),
    },
    pt: {
      title: "Comparação de código de bibliotecas",
      description: (
        <>
          <p id="codeComparison">
            Reduzindo o total de código que você tem que escrever, é um dos
            objetivos principais do React Hook Form. Para ilustrar isso, vamos
            ver um formulário simples de validação, entre alguns das principais
            bibliotecas de validação de formulários.
          </p>
          <p style={{ fontSize: 14 }}>
            <b className={typographyStyles.note}>⚠ Nota:</b> Ambos, Formik e
            Redux-Form o código foi copiado com base na documentação oficial.
          </p>
        </>
      ),
    },
    kr: {
      title: "라이브러리 코드 비교",
      description: (
        <>
          <p id="codeComparison">
            작성하는 코드 양을 줄이는 것은 React Hook Form의 주요 목표 중
            하나입니다. 인기있는 폼 유효성 검사 라이브러리와 아주 간단한 비교를
            해 보겠습니다.
          </p>
          <p style={{ fontSize: 14 }}>
            <b className={typographyStyles.note}>⚠ 참고:</b> 아래의 Formik 및
            Redux-Form 공식 문서에서 가져온 것입니다.
          </p>
        </>
      ),
    },
    jp: {
      title: "ライブラリのコード比較",
      description: (
        <>
          <p id="codeComparison">
            コードの記述量を減らすことは、React Hook Form の主な目標の一つです。
            これを説明するために、最も一般的なフォームバリデーションライブラリを使用した非常にシンプルなコードを見てみましょう。
          </p>
          <p style={{ fontSize: 14 }}>
            <b className={typographyStyles.note}>⚠ 注意:</b>下記の Formik と
            Redux-Form のコードは公式ドキュメントからコピーされています。
          </p>
        </>
      ),
    },
    zh: {
      title: "库代码比较",
      description: (
        <>
          <p id="codeComparison">
            减少您必须编写的代码量是 React Hook Form 的主要目标之一。
            为了说明这一点，让我们来简单对比下目前最流行的表单校验库。
          </p>
          <p style={{ fontSize: 14 }}>
            <b className={typographyStyles.note}>⚠ 注意：</b>
            以下 Formik 和 Redux-Form 代码片段都引用自官方文档。
          </p>
        </>
      ),
    },
    ru: {
      title: "Сравнение кода библиотек",
      description: (
        <>
          <p id="codeComparison">
            Сокращение объёма кода, который вам нужно написать, является одной
            из основных целей React Hook Form. Чтобы проиллюстрировать это,
            давайте рассмотрим валидацию очень простой формы с помощью
            нескольких популярных библиотек валидации форм.
          </p>
          <p style={{ fontSize: 14 }}>
            <b className={typographyStyles.note}>⚠ Обратите внимание:</b> Код
            Formik и Redux-Form, приведённый ниже, скопирован из официальной
            документации.
          </p>
        </>
      ),
    },
  },
  isolateRender: {
    en: {
      title: "Isolate Re-renders",
      description: (
        <>
          <p className={typographyStyles.homeParagraph}>
            You have the ability to isolate components re-renders which leads to
            better performance on your page or app. The following example
            demonstrates this.
          </p>
        </>
      ),
    },
    es: {
      title: "Aislar el Re-render de un componente",
      description: (
        <>
          <p>
            Tú tienes la habilidad de aislar el re-render de un componente lo
            que conducirá a un menor impacto en el rendimiento de tu aplicación
            o sitio web. El siguiente ejemplo lo demuestra.
          </p>

          <p style={{ fontSize: 14 }}>
            <b className={typographyStyles.note}>Note:</b> Escriba en el cuadro
            de entrada para ver el comportamiento de renderizado.
          </p>
        </>
      ),
    },
    pt: {
      title: "Isole a re-renderização do componente",
      description: (
        <>
          <p>
            Você tem a capacidade de isolar a nova renderização dos componentes,
            o que leva a um menor impacto no desempenho de sua página ou
            aplicativo. O exemplo a seguir demonstra esse comportamento
          </p>

          <p style={{ fontSize: 14 }}>
            <b className={typographyStyles.note}>Note:</b> Digite na caixa de
            entrada para ver o comportamento de renderização.
          </p>
        </>
      ),
    },
    kr: {
      title: "컴포넌트의 리랜더링을 분리하기",
      description: (
        <>
          <p>
            페이지나 앱의 퍼포먼스에 부정적인 영향을 줄 수 있는 리랜더링을
            분리할 수 있습니다. 아래의 예제는 그 차이를 보여줍니다.
          </p>

          <p style={{ fontSize: 14 }}>
            <b className={typographyStyles.note}>참고:</b> 인풋 박스에
            타이핑해보시고 어떻게 랜더링되는지 확인해보세요.
          </p>
        </>
      ),
    },
    jp: {
      title: "コンポーネントの再レンダリングを分離",
      description: (
        <>
          <p>
            コンポーネントの再レンダリングを分離して、ページまたはアプリケーションのパフォーマンスを向上させることができます。
            次の例は、このような動作を示しています。
          </p>

          <p style={{ fontSize: 14 }}>
            <b className={typographyStyles.note}>注意:</b>{" "}
            入力欄に入力してレンダリングの動作を確認してください。
          </p>
        </>
      ),
    },
    zh: {
      title: "区隔组件的重渲染",
      description: (
        <>
          <p>
            您可以区隔组件的重渲染，从而为网页或应用提供更好的性能。下面的例子展示了这种行为。
          </p>

          <p style={{ fontSize: 14 }}>
            <b className={typographyStyles.note}>注意：</b>
            在输入框中输入，以查看渲染行为。
          </p>
        </>
      ),
    },
    ru: {
      title: "Isolate Re-renders",
      description: (
        <>
          <p>
            You have the ability to isolate components re-renders which lead to
            less performance impact on your page or app. The following example
            demonstrate such behaviour.
          </p>

          <p style={{ fontSize: 14 }}>
            <b className={typographyStyles.note}>Note:</b>Введите в поле ввода
            чтобы увидеть поведение рендера.
          </p>
        </>
      ),
    },
  },
  watcher: {
    en: {
      title: "Subscriptions",
      description: (
        <p className={typographyStyles.homeParagraph}>
          Performance is an important aspect of user experience in terms of
          building forms. You will have the ability to subscribe to individual
          input and form State update without re-rendering the entire form.
        </p>
      ),
    },
    es: {
      title: "Subscriptions",
      description: (
        <p>
          Performance is an important aspect of user experience in terms of
          building forms. You will have the ability to subscribe to individual
          input changes without re-rendering the entire form.
        </p>
      ),
    },
    pt: {
      title: "Subscriptions",
      description: (
        <p>
          Performance is an important aspect of user experience in terms of
          building forms. You will have the ability to subscribe to individual
          input changes without re-rendering the entire form.
        </p>
      ),
    },
    kr: {
      title: "Subscriptions",
      description: (
        <p>
          퍼포먼스는 폼을 만들 때 사용자 경험에 큰 영향을 주는 요소입니다. 전체
          폼이 리랜더링되지 않으면서도 각각의 입력값 변화를 관찰할 수 있습니다.
        </p>
      ),
    },
    jp: {
      title: "入力の変更を監視",
      description: (
        <p>
          フォームを実装する用件の中でパフォーマンスはユーザー体験において重要なものです。
          あなたは個別のinput要素の変更をフォーム全体の再レンダリングなしに監視することができます。
        </p>
      ),
    },
    zh: {
      title: "监听输入值变化",
      description: (
        <p>
          构建表单时，性能对用户体验是非常重要的一部分。您可以监听的独立的输入值变化而无须重渲染整个表单。
        </p>
      ),
    },
    ru: {
      title: "Subscriptions",
      description: (
        <p>
          Performance is an important aspect of user experience in terms of
          building forms. You will have the ability to subscribe to individual
          input changes without re-rendering the entire form.
        </p>
      ),
    },
  },
  rendering: {
    en: {
      title: "Reduce Rendering",
      description: (
        <p className={typographyStyles.homeParagraph}>
          Do you ever wonder how many component re-renders have been triggered
          by the user? React Hook Form embraces uncontrolled form validation to
          reduce any unnecessary performance penalty.
        </p>
      ),
      totalReRender: "Total re-renders:",
    },
    es: {
      title: "Reduce la renderización",
      description: (
        <p className={typographyStyles.homeParagraph}>
          ¿Alguna vez te has preguntado cuántas renderizaciones de componentes
          han sido desencadenadas por el usuario? React Hook Form utiliza la
          validación de formularios no controlada para reducir el impacto en el
          rendimiento.
        </p>
      ),
      totalReRender: "Total de renderizaciones:",
    },
    pt: {
      title: "Reduza a renderização",
      description: (
        <p className={typographyStyles.homeParagraph}>
          Você já se questionou quantas vezes o componente é renderizado pelo
          usuário? React Hook Form abraça o uso de validação de formulários
          incontroláveis, para reduzir desnecessários impactos de performance.
        </p>
      ),
      totalReRender: "Total de re-renderizacão:",
    },
    kr: {
      title: "렌더링 최소화",
      description: (
        <p className={typographyStyles.homeParagraph}>
          사용자에 의해 얼마나 많이 다시 렌더링 되었는지 궁금했던 적이 있습니까?
          React Hook Form은 제어되지 않는 폼 유효성 검사를 통해 불필요한 성능
          저하를 줄입니다.
        </p>
      ),
      totalReRender: "전체 렌더링 횟수:",
    },
    jp: {
      title: "レンダリングを削減",
      description: (
        <p className={typographyStyles.homeParagraph}>
          ユーザーによってどのくらいコンポーネントが再レンダリングされたか気になったことはありますか？
          React Hook Form
          は非制御フォームバリデーションを採用してパフォーマンスへの影響を軽減します。
        </p>
      ),
      totalReRender: "合計再レンダリング数： ",
    },
    zh: {
      title: "减少渲染次数",
      description: (
        <p className={typographyStyles.homeParagraph}>
          您曾经考虑过用户会触发多少次组件的重渲染吗？React Hook Form
          优先采用非受控的表单验证，以减少不必要的性能损耗。
        </p>
      ),
      totalReRender: "共计重渲染次数:",
    },
    ru: {
      title: "Сокращение повторных рендеров",
      description: (
        <p className={typographyStyles.homeParagraph}>
          Вы когда-нибудь задумывались, сколько повторных рендеров компонентов
          было инициировано пользователем? React Hook Form включает в себя
          неконтролируемую валидацию формы для уменьшения ненужного влияния на
          производительность.
        </p>
      ),
      totalReRender: "Общее количество повторных рендеров:",
    },
  },
  mount: {
    en: {
      title: "Faster Mounting",
      description: (
        <p className={typographyStyles.homeParagraph}>
          The following screenshots demonstrate how much faster component
          mounting is with React Hook Form compare with others.
        </p>
      ),
      totalMount: "No. of mount(s)",
      totalChange: "No. of committing change(s)",
      totalTime: "Total time",
    },
    es: {
      title: "Montaje más rápido",
      description: (
        <p>
          Los siguientes resultados muestran el tiempo que se tardó en
          renderizar y montar los componentes. Los resultados se capturan con
          una ralentización de CPU de 6x en el comienzo de la aplicación con la
          pestaña de rendimiento de Chrome Dev Tools. El código es de la sección
          anterior{" "}
          <a href="#codeComparison">Comparación de código de Librerías</a>.
        </p>
      ),
      totalMount: "No. de montajes",
      totalChange: "No. de cambios confirmados",
      totalTime: "Tiempo total",
    },
    pt: {
      title: "Montagem rápida",
      description: (
        <p>
          Os resultados a seguir demonstram quanto tempo levou para renderizar e
          montar os componentes. Os resultados são capturados em uma CPU 6x mais
          lenta no sistema, utilizando o Chrome Dev Tools. O código em execução
          é da seção acima{" "}
          <a href="#codeComparison">Biblioteca de comparação de código</a>.
        </p>
      ),
      totalMount: "N. de montagem",
      totalChange: "N. de mudanças commit(s)",
      totalTime: "Tempo total",
    },
    kr: {
      title: "더욱 빠른 마운트 속도",
      description: (
        <p>
          아래 결과는 컴포넌트를 렌더링하고 마운트하는데 걸린 시간을 보여줍니다.
          결과는 Chrome Dev Tool의 Performance 탭에서 CPU 성능을 6배 낮춘
          환경에서 측정하였습니다. 실행한 코드는 상단의{" "}
          <a href="#codeComparison">라이브러리 코드 비교</a> 섹션에서
          가져왔습니다.
        </p>
      ),
      totalMount: "마운트 횟수",
      totalChange: "변경 요청 횟수",
      totalTime: "전체 소요된 시간",
    },
    jp: {
      title: "高速なマウント",
      description: (
        <p>
          下記の結果は、コンポーネントのレンダリングにかかった時間を示しています。
          Chrome DevTools の Performance タブを使用して、 CPU
          のパフォーマンスを6倍低速化させた環境での測定結果です。
          実行コードは上記の
          <a href="#codeComparison">ライブラリのコード比較</a>
          セクションのものです。
        </p>
      ),
      totalMount: "マウント数",
      totalChange: "変更コミット数",
      totalTime: "合計時間",
    },
    zh: {
      title: "更快的挂载",
      description: (
        <p>
          下方的截图展示了使用 React Hook Form 时的组件挂载会快多少。在
          <a href="#codeComparison">库代码对比中</a>
          ，它的挂载和渲染速度比使用 Formik 大约快13%，比 Redux Form 大约快25%。
          <span style={{ fontSize: 14, display: "block" }}>
            <b className={typographyStyles.note}>⚠ 注意：</b> 跑分是在6x
            CPU下的Chrome开发工具模拟得到的。
          </span>
        </p>
      ),
      totalMount: "安装的次数(s)",
      totalChange: "提交更改的次数(s)",
      totalTime: "总时间",
    },
    ru: {
      title: "Более быстрая сборка",
      description: (
        <p>
          Следующие результаты демонстрируют, сколько времени потребовалось для
          рендеринга и сборки компонентов. Результаты регистрируются при
          6-кратном замедлении ЦП при запуске приложения с помощью вкладки
          производительности Chrome Dev Tools. Рабочий код из раздела выше{" "}
          <a href="#codeComparison">Сравнение кода библиотек</a>.
        </p>
      ),
      totalMount: "Количество сборок",
      totalChange: "Количество совершаемых изменений",
      totalTime: "Общее время",
    },
  },
  liveDemo: {
    en: {
      description: (
        <>
          The following form demonstrates form validation in action. Each column
          represents what has been captured in the custom hook. You can also
          change fields in the form by clicking the <strong>EDIT</strong>{" "}
          button.
        </>
      ),
      submit: "Submit",
      watchTitle: "Watch",
      errorTitle: "Errors",
      touchedTitle: "Touched",
      watch: "Change inputs value to update watched values",
      error: "Validation errors will appear here",
      touched: "Touched fields will display here",
    },
    es: {
      title: "Demo en vivo",
      description: (
        <>
          El siguiente formulario muestra la validación de formularios. Cada
          columna representa lo que se ha capturado en el hook personalizado.
          Puedes cambiar los campos en el formulario haciendo click en{" "}
          <strong> EDIT </strong> {""}.
        </>
      ),
      submit: "Enviar",
      watchTitle: "Watch",
      errorTitle: "Errores",
      touchedTitle: "Touched",
      watch: "Cambia el valor del input para ver los valores observados",
      error: "Los errores de validación aparecerán aquí",
      touched: "Los campos Touched se mostrarán aquí",
    },
    pt: {
      title: "Demonstração real",
      description: (
        <>
          O formulário a seguir demonstra a validação do formulário em ação.
          Cada coluna representa o que foi capturado no hook personalizado. Você
          também pode alterar os campos no formulário clicando no botão{" "}
          <strong>Editar</strong>.
        </>
      ),
      submit: "Enviar",
      watchTitle: "Assistir",
      errorTitle: "Erros",
      touchedTitle: "Toques",
      watch: "Altere o valor do campo para ver valores assistidos",
      error: "Erros de validações irá aparecer aqui",
      touched: "Campos tocados serão exibidos aqui",
    },
    kr: {
      title: "라이브 데모",
      description: (
        <>
          아래 폼은 실행중인 폼 검증을 보여줍니다. 각 열은 커스텀 훅에서 측정된
          내용을 보여줍니다.
          <br />
          <strong>수정</strong> 버튼을 클릭하여 폼 필드를 수정할 수 있습니다.
        </>
      ),
      submit: "확인",
      watchTitle: "감시",
      errorTitle: "오류",
      touchedTitle: "변경됨",
      watch: "값을 확인하려면 입력 필드의 값을 변경하세요.",
      error: "검증 오류가 이곳에 표시됩니다.",
      touched: "변경된 필드가 이곳에 표시됩니다.",
    },
    jp: {
      title: "ライブデモ",
      description: (
        <>
          下記のフォームは、実行中のフォームバリデーションを示しています。
          各列はカスタムフックに取り込まれた内容を表します。
          <strong>編集</strong>
          ボタンをクリックしてフォームのフィールドを変更することもできます。
        </>
      ),
      submit: "フォームの送信",
      watchTitle: "監視",
      errorTitle: "エラー",
      touchedTitle: "タッチ",
      watch: "監視されている値を表示するには入力値を変更します。",
      error: "ここにバリデーションエラーが表示されます。",
      touched: "タッチされたフィールドがここに表示されます。",
    },
    zh: {
      title: "现场演示",
      description: (
        <>
          下面的表单演示了表单校验的操作。
          每一列都展示了自定义hook中捕获到的数据。 您也可以通过单击
          <strong>编辑</strong>按钮来更改表单项。
        </>
      ),
      submit: "提交",
      watchTitle: "监听",
      errorTitle: "错误",
      touchedTitle: "触碰过的",
      watch: "更改输入值以监听值的变化",
      error: "校验的错误将出现在这里",
      touched: "触碰过的表单项名称展示在这里",
    },
    ru: {
      title: "Живой пример",
      description: (
        <>
          Следующая пример демонстрирует валидацию формы в действии. Каждый
          столбец показывает, что было захвачено в пользовательском хуке. Вы
          также можете изменить поля формы, нажав кнопку{" "}
          <strong>Редактировать</strong>.
        </>
      ),
      submit: "Отправить",
      watchTitle: "Наблюдение",
      errorTitle: "Ошибки",
      touchedTitle: "Изменено",
      watch: "Измените значение поле, чтобы увидеть наблюдаемые значения",
      error: "Валидация ошибок появится здесь",
      touched: "Измененные поля отобразятся здесь",
    },
  },
  validationResolver: {
    title: "resolver",
    description: (
      <>
        <p>
          This function allow you to run any external validation methods, such
          as{" "}
          <a
            href="https://github.com/hapijs/joi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joi
          </a>
          ,{" "}
          <a
            href="https://github.com/ianstormtaylor/superstruct"
            target="_blank"
            rel="noopener noreferrer"
          >
            Superstruct
          </a>{" "}
          and etc. In fact, the goal is not only limited Yup as our external
          (schema) validation library. We would like to support many other
          validation libraries to work with React Hook Form. You can even write
          your custom validation logic to validate.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> make sure you are
          returning object which contains <code>values</code> and{" "}
          <code>errors</code>, and their default value should be empty object{" "}
          <code>{`{}`}</code>.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> returning errors
          object's key should be relevant to your inputs.
        </p>
      </>
    ),
  },
}
