import React from "react"
import { SUPPORTED_LANGUAGES } from "../../utils/languages"

export default {
  [SUPPORTED_LANGUAGES.en]: {
    description: (
      <p>
        Behaves similarly to the <code>watch</code> API, however, this will
        isolate re-rendering at the component level and potentially result in
        better performance for your application.
      </p>
    ),
    table: {
      name: <>associated field name.</>,
      defaultValue: (
        <>
          default value for <code>useWatch</code> to return before the initial
          render.
        </>
      ),
    },
  },
  [SUPPORTED_LANGUAGES.es]: {
    description: (
      <p>
        Comparta la misma funcionalidad que la API <code>watch</code>, sin
        embargo, esto aislará el renderizado en el nivel de su componente y
        potencialmente resultará en Mejor rendimiento para su aplicación.
      </p>
    ),
    table: {
      name: <>Nombre de campo asociado.</>,
      defaultValue: (
        <>
          valor por defecto para que <code>useWatch</code> vuelva antes del
          renderizado inicial.
        </>
      ),
    },
  },
  [SUPPORTED_LANGUAGES.jp]: {
    description: (
      <p>
        <code>watch</code> APIと同じ機能を共有しますが、これは
        コンポーネントレベルで再レンダリングを分離し、結果的に
        アプリケーションのパフォーマンスが向上します。
      </p>
    ),
    table: {
      name: <>関連するフィールド名</>,
      defaultValue: (
        <>
          最初のレンダリングの前に戻る <code>useWatch</code> のデフォルト値。
        </>
      ),
    },
  },
  [SUPPORTED_LANGUAGES.KR]: {
    description: (
      <p>
        <code>watch</code> API 와 같은 기능을 공유하고 있지만, 이 훅은 컴포넌트
        레벨의 리랜더링을 격리할 수 있으며 여러분의 애플리케이션에 더 나은
        퍼포먼스를 제공할 수 있습니다.
      </p>
    ),
    table: {
      name: <>연결할 필드 이름.</>,
      defaultValue: (
        <>
          초기 렌더링 전에 반환 할 <code> useWatch </code>의 기본값입니다.
        </>
      ),
    },
  },
  [SUPPORTED_LANGUAGES.pt]: {
    description: (
      <p>
        Compartilhe a mesma funcionalidade que a API <code>watch</code>, no
        entanto, isso isolará a nova renderização no nível do componente e
        resultará potencialmente em melhor desempenho para sua aplicação.
      </p>
    ),
    table: {
      name: <>campo name associado.</>,
      defaultValue: (
        <>
          valor por defeito para <code>useWatch</code> a devolver antes do
          renderização inicial.
        </>
      ),
    },
  },
  [SUPPORTED_LANGUAGES.ru]: {
    description: (
      <p>
        Используйте те же функции, что и API <code>watch</code>, однако это
        будет изолировать повторный рендеринг на уровне вашего компонента и
        потенциально приведет к лучшая производительность для вашего приложения.
      </p>
    ),
    table: {
      name: <>имя связанного поля.</>,
      defaultValue: (
        <>
          значение по умолчанию для <code>useWatch</code> для возврата перед
          начальным рендерингом.
        </>
      ),
    },
  },
  [SUPPORTED_LANGUAGES.zh]: {
    description: (
      <p>
        与<code>watch</code> API共享相同的功能，但是，
        会在您的组件级别隔离重新渲染，并可能导致 为您的应用程序提供更好的性能。
      </p>
    ),
    table: {
      name: <>关联的表格名称。</>,
      defaultValue: (
        <>
          <code>useWatch</code>在初始渲染前返回的默认值。
        </>
      ),
    },
  },
}
