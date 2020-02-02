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
    kr: "번거로움 없이 폼 검증을 위한 React hook",
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
    zh: "高性能、灵活、易拓展、易于使用的表单校验库。",
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
    zh: "演示",
    ru: "Демонстрация",
  },
  findInteresting: {
    en: {
      heading: "Find it useful and interesting?",
      description: `Form validation should be much simpler. React Hook Form will lead you to write less code and have better performance. Check out the Get Started section and learn more on the API documentation page.`,
    },
    es: {
      heading: "Te pareció útil e interesante?",
      description: `La validación de formularios debería ser más simple. React Hook Form te ayudará a escribir menos código y a tener un mejor rendimiento. Consulta la sección Comenzar Ahora y aprende más en la página de documentación de la API.`,
    },
    pt: {
      heading: "Achou útil e interessante?",
      description: `Validação de formulário deveria ser simples. React Hook Form vai te guiar a escrever menos código com uma melhor performance. Confira a seção Comece Agora e aprenda mais sobre na página de documentação da API.`,
    },
    kr: {
      heading: "유용하고 흥미로운가요?",
      description: `폼의 유효성을 검사하는 것은 더욱 간단해야 합니다. React Hook Form을 사용하면 코드는 적게 쓰고 성능은 더욱 향상시킬 수 있습니다. 시작하기 섹션을 확인한 다음 API 페이지에서 자세히 알아보세요.`,
    },
    jp: {
      heading: "便利で面白いと思いますか？",
      description: `フォームバリデーションはより簡単にする必要があります。React Hook Form を使用すると、コードの記述が少なくなり、パフォーマンスが向上します。はじめるセクションを見て、API ドキュメントページで詳細を確認してください。`,
    },
    zh: {
      heading: "发现它有用又有趣?",
      description: `表单验证应该更简单。 React Hook Form将使您编写更少的代码并具有更好的性能。 查看"入门"部分，也可以在API文档页面了解更多信息。`,
    },
    ru: {
      heading: "Это было полезным и интересным для вас?",
      description:
        "Валидация форм должна быть очень простой. React Hook Form позволит вам писать меньше кода и имеет лучшую производительность. Ознакомьтесь с разделом «Начало работы» и узнайте больше на странице документации по API.",
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
        description: `Performance is important and package size matters. React Hook Form is a tiny library without any dependencies.`,
      },
      {
        title: "Performance",
        description: `Minimizes the number of re-renders and faster mounting, striving to provide the best user experience.`,
      },
      {
        title: "Adoptable",
        description: `Since form state is inherently local, it can be easily adopted without other dependencies.`,
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
    ],
    zh: [
      {
        title: "开发体验",
        description:
          "直观的功能和完整的API在构建表单时为开发人员提供最好的体验。",
      },
      {
        title: "HTML标准",
        description: `利用现有的HTML，并直接开始使用验证API来验证您的表单。`,
      },
      {
        title: "超轻",
        description: `性能很重要，尺寸也重要。 它是一个很小的库，并且没有任何依赖关系。`,
      },
      {
        title: "高性能",
        description: `最大限度地减少render的数量和更快的安装，努力提供最佳的用户体验。`,
      },
      {
        title: "适应性强",
        description: `由于表单的状态是基于本地的，因此可以轻松地在没有其他依赖关系的情况下采用它。`,
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
    ],
  },
  codeComparison: {
    en: {
      title: "Library Code Comparison",
      description: (
        <>
          <p id="codeComparison">
            Reducing the amount of code that you have to write is one of the
            primary goals for React Hook Form. To illustrate that, let's look at
            a very simple form of validation among some of the most popular form
            validation libraries.
          </p>
          <p style={{ fontSize: 14 }}>
            <b className={typographyStyles.note}>⚠ Note:</b> Both Formik and
            Redux-Form code below are copied from official documentation.
          </p>
        </>
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
            하나입니다. 이를 설명하기 위해 가장 인기있는 폼 유효성 검사
            라이브러리들을 사용한 간단한 폼을 살펴보세요.
          </p>
          <p style={{ fontSize: 14 }}>
            <b className={typographyStyles.note}>⚠ 참고:</b>아래의 Formik 및
            Redux-Form 코드는 다음과 같습니다. 공식 문서에서 복사。
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
            <b className={typographyStyles.note}>⚠ 注意：</b>下記の Formik と
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
            减少您必须编写的代码量是React Hook Form的主要目标之一。
            为了说明这一点，让我们来看看一些最流行的表单验证库中非常简单的验证形式，同时加以对比。
          </p>
          <p style={{ fontSize: 14 }}>
            <b className={typographyStyles.note}>⚠ 注意:</b>
            下面的Formik和Redux-Form代码都是 从官方文件复制。
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
      title: "Isolate Component Re-render",
      description: (
        <>
          <p>
            You have the ability to isolate components re-render which lead to
            less performance impact on your page or app. The following example
            demonstrate such behaviour.
          </p>

          <p style={{ fontSize: 14 }}>
            <b className={typographyStyles.note}>Note:</b> Type in the input box
            to see the render behaviour.
          </p>
        </>
      ),
    },
    es: {
      title: "Isolate Component Re-render",
      description: (
        <>
          <p>
            You have the ability to isolate components re-render which lead to
            less performance impact on your page or app. The following example
            demonstrate such behaviour.
          </p>

          <p style={{ fontSize: 14 }}>
            <b className={typographyStyles.note}>Note:</b> Type in the input box
            to see the render behaviour.
          </p>
        </>
      ),
    },
    pt: {
      title: "Isolate Component Re-render",
      description: (
        <>
          <p>
            You have the ability to isolate components re-render which lead to
            less performance impact on your page or app. The following example
            demonstrate such behaviour.
          </p>

          <p style={{ fontSize: 14 }}>
            <b className={typographyStyles.note}>Note:</b> Type in the input box
            to see the render behaviour.
          </p>
        </>
      ),
    },
    kr: {
      title: "Isolate Component Re-render",
      description: (
        <>
          <p>
            You have the ability to isolate components re-render which lead to
            less performance impact on your page or app. The following example
            demonstrate such behaviour.
          </p>

          <p style={{ fontSize: 14 }}>
            <b className={typographyStyles.note}>Note:</b> Type in the input box
            to see the render behaviour.
          </p>
        </>
      ),
    },
    jp: {
      title: "Isolate Component Re-render",
      description: (
        <>
          <p>
            You have the ability to isolate components re-render which lead to
            less performance impact on your page or app. The following example
            demonstrate such behaviour.
          </p>

          <p style={{ fontSize: 14 }}>
            <b className={typographyStyles.note}>Note:</b> Type in the input box
            to see the render behaviour.
          </p>
        </>
      ),
    },
    zh: {
      title: "Isolate Component Re-render",
      description: (
        <>
          <p>
            You have the ability to isolate components re-render which lead to
            less performance impact on your page or app. The following example
            demonstrate such behaviour.
          </p>

          <p style={{ fontSize: 14 }}>
            <b className={typographyStyles.note}>Note:</b> Type in the input box
            to see the render behaviour.
          </p>
        </>
      ),
    },
    ru: {
      title: "Isolate Component Re-render",
      description: (
        <>
          <p>
            You have the ability to isolate components re-render which lead to
            less performance impact on your page or app. The following example
            demonstrate such behaviour.
          </p>

          <p style={{ fontSize: 14 }}>
            <b className={typographyStyles.note}>Note:</b> Type in the input box
            to see the render behaviour.
          </p>
        </>
      ),
    },
  },
  rendering: {
    en: {
      title: "Reduce Rendering",
      description: `Do you ever wonder how many component re-renders have been triggered by the user? React Hook Form embraces uncontrolled form validation to reduce unnecessary performance impact.`,
      totalReRender: "Total re-renders:",
    },
    es: {
      title: "Reduce la renderización",
      description: `¿Alguna vez te has preguntado cuántas renderizaciones de componentes han sido desencadenadas por el usuario? React Hook Form utiliza la validación de formularios no controlada para reducir el impacto en el rendimiento.`,
      totalReRender: "Total de renderizaciones:",
    },
    pt: {
      title: "Reduza a renderização",
      description: `Você já se questionou quantas vezes o componente é renderizado pelo usuário? React Hook Form abraça o uso de validação de formulários incontroláveis, para reduzir desnecessários impactos de performance.`,
      totalReRender: "Total de re-renderizacão:",
    },
    kr: {
      title: "렌더링 최소화",
      description: `사용자에 의해 얼마나 많이 다시 렌더링 되었는지 궁금했던 적이 있습니까? React Hook Form은 제어되지 않는 폼 유효성 검사를 통해 불필요한 성능 저하를 줄입니다.`,
      totalReRender: "전체 렌더링 횟수:",
    },
    jp: {
      title: "レンダリングを削減",
      description: `ユーザーによってどのくらいコンポーネントが再レンダリングされたか気になったことはありますか？ React Hook Form は非制御フォームバリデーションを採用してパフォーマンスへの影響を軽減します。`,
      totalReRender: "合計再レンダリング数： ",
    },
    zh: {
      title: "减少Rendering",
      description: `你有没有想过用户触发了多少组件的重新render？ React Hook Form注重不受控制的表单验证，以减少不必要的性能影响。`,
      totalReRender: "Total re-renders:",
    },
    ru: {
      title: "Сокращение повторных рендеров",
      description:
        "Вы когда-нибудь задумывались, сколько повторных рендеров компонентов было инициировано пользователем? React Hook Form включает в себя неконтролируемую валидацию формы для уменьшения ненужного влияния на производительность.",
      totalReRender: "Общее количество повторных рендеров:",
    },
  },
  mount: {
    en: {
      title: "Faster Mounting",
      description: (
        <p>
          The following results demonstrate how long it took to render and mount
          the components. Results are captured under a 6x CPU slow down on App
          start with the Chrome Dev Tools' performance tab. The running code is
          from the section above{" "}
          <a href="#codeComparison">Library Code Comparison</a>.
        </p>
      ),
      totalMount: "No. of mount(s)",
      totalChange: "No. of committing change(s)",
      totalTime: "Total time",
      performanceTests: (
        <>
          <span style={{ fontSize: 20 }}>⚠</span> Want to see more intense
          performance tests?{" "}
          <a
            href="https://github.com/bluebill1049/react-hook-form-performance-compare"
            rel="noopener noreferrer"
          >
            Check out the result of 1000 fields within a form here
          </a>
          .
        </>
      ),
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
      performanceTests: (
        <>
          <span style={{ fontSize: 20 }}>⚠</span> ¿Quieres ver pruebas de
          rendimiento más intensas?{" "}
          <a
            href="https://github.com/bluebill1049/react-hook-form-performance-compare"
            rel="noopener noreferrer"
          >
            Mira el resultado de 1000 campos dentro de un formulario aquí
          </a>
          .
        </>
      ),
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
      performanceTests: (
        <>
          <span style={{ fontSize: 20 }}>⚠</span> Gostaria de ver mais testes de
          performance intensos?{" "}
          <a
            href="https://github.com/bluebill1049/react-hook-form-performance-compare"
            rel="noopener noreferrer"
          >
            Observe o resultado de 1000 campos dentro de um formulário aqui
          </a>
          .
        </>
      ),
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
      performanceTests: (
        <>
          <span style={{ fontSize: 20 }}>⚠</span> 더 강도 높은 성능 테스트를
          보고 싶으신가요?{" "}
          <a
            href="https://github.com/bluebill1049/react-hook-form-performance-compare"
            rel="noopener noreferrer"
          >
            여기서 1000개 필드가 있는 폼의 결과를 확인할 수 있습니다
          </a>
          .
        </>
      ),
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
      performanceTests: (
        <>
          <span style={{ fontSize: 20 }}>⚠</span>{" "}
          より強力なパフォーマンステストを見たいですか？
          <a
            href="https://github.com/bluebill1049/react-hook-form-performance-compare"
            rel="noopener noreferrer"
          >
            こちらから1000フィールドを含むフォームのパフォーマンテスト結果をご覧ください
          </a>
          。
        </>
      ),
    },
    zh: {
      title: "更快的安装",
      description: (
        <p>
          以下结果说明了安装组件需要多长时间。 结果是在6x
          CPU下捕获应用程序，从Chrome DevTools的性能选项卡开始减速。
          运行的代码来自上面的<a href="#codeComparison">库代码</a>的比较部分。
        </p>
      ),
      totalMount: "安装的次数(s)",
      totalChange: "提交更改的次数(s)",
      totalTime: "总时间",
      performanceTests: (
        <>
          希望看到更激烈的性能测试？
          <a
            href="https://github.com/bluebill1049/react-hook-form-performance-compare"
            rel="noopener noreferrer"
          >
            在这里查看表单中1000个表格的结果
          </a>
          。
        </>
      ),
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
      performanceTests: (
        <>
          <span style={{ fontSize: 20 }}>⚠</span> Хотите увидеть более тыжёлые
          тесты производительности?{" "}
          <a
            href="https://github.com/bluebill1049/react-hook-form-performance-compare"
            rel="noopener noreferrer"
          >
            Проверьте здесь результат тестирования для формы с 1000 полей
          </a>
          .
        </>
      ),
    },
  },
  liveDemo: {
    en: {
      title: "Live Demo",
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
      watch: "Change input value to see watched values",
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
          下面的表单演示了表单验证的操作。 每列表示在自定义挂接中捕获的内容。
          您也可以通过单击<strong>编辑</strong>按钮来更改表单中的表格。
        </>
      ),
      submit: "提交",
      watchTitle: "观察",
      errorTitle: "错误",
      touchedTitle: "接触过的",
      watch: "更改输入值以查看观看值的变化",
      error: "验证错误将出现在这里",
      touched: "触摸的表格将显示在这里",
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
}
