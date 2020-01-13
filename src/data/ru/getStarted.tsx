import * as React from "react"
import code from "../../components/codeExamples/defaultExample"
import { Note } from "../../styles/typography"
import { Link } from "@reach/router"
import translateLink from "../../components/logic/translateLink"
import CodeArea from "../../components/CodeArea"
import { uiLibraryHookInput } from "../../components/codeExamples/getStarted"

export default {
  title: "Начать",
  header: {
    title: "Начать",
    description: "Простая валидация форм с React Hook Form.",
  },
  video: {
    title: "Видеоурок",
    description:
      "В этом видеоуроке я продемонстрировал концепцию и основы использования React Hook Form.",
  },
  install: {
    linkTitle: "Установка",
    title: "Быстрый старт",
    description:
      "Установка React Hook Form выполняется всего одной командой и можно пользоваться.",
  },
  example: {
    title: "Пример",
    description: "Следующий код продемонстрирует основы использования:",
  },
  register: {
    title: "Регистрация полей",
    description: (
      <>
        <p>
          Одна из ключевых концепций React Hook Form - это регистрация{" "}
          <strong>
            <code>register</code>
          </strong>{" "}
          вашего неконтролируемого компонента в Hook(е) и, следовательно,
          возможность валидации его значения и сбора для отправки.
        </p>

        <p>
          <Note>Примечание:</Note> Каждое <strong>обязательное</strong> поле
          должно иметь уникальное имя <code>name</code> в качестве ключа для
          процесса регистрации.
        </p>

        <p>
          <Note>Примечание: </Note>В React Native нужно будет вручную ввести
          команду для регистрации:{" "}
          <code>{`register({ name: 'test' }, { required: true })`}</code> или
          использовать <Link to="/api#Controller">Controller</Link> для
          оборачивания и автоматической регистрации вашего компонента. Вы можете
          узнать больше в разделе{" "}
          <Link to="/api/#ReactNative">React Native</Link>.
        </p>
      </>
    ),
  },
  applyValidation: {
    title: "Применение валидации",
    description: currentLanguage => (
      <>
        <p>
          React Hook Form делает валидацию проще за счёт использования
          существующей{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
            target="_blank"
            rel="noopener noreferrer"
          >
            в HTML стандартной валидации форм
          </a>
          .
        </p>

        <p>Список поддерживаемых атрибутов валидации форм:</p>
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
          Вы можете детально ознакомиться с каждым атрибутом в{" "}
          <Link to={translateLink("api#register", currentLanguage)}>
            разделе о регистрации
          </Link>
          .
        </p>
      </>
    ),
  },
  adapting: {
    title: "Адаптация существующей формы",
    description: (
      <>
        Работать с существующей формой просто. Самый важный шаг - это
        регистрация <code>register</code> в <code>ref</code> существующего
        компонента.
      </>
    ),
  },
  controlledInput: {
    title: "Контролируемый Input",
    description: (
      <>
        <p>
          React Hook Form включает в себя неконтролируемые компоненты и нативные
          HTML input(ы), однако трудно избежать работы с внешним контролируемым
          компонентом, таким как{" "}
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
          , поэтому мы должны создать компонент-обёртку:{" "}
          <Link to="/api#Controller">Controller</Link> для упрощения процесса
          интеграции, предоставляя при этом свободу использования
          пользовательского ввода в соответствии с вашими потребностями.
        </p>
        <p>
          Каждое свойство, которое вы передаёте в компонет Controller, будет
          передано в Component instance, который вы передадите в свойстве{" "}
          <code>as</code>. Например, у вас есть кастомный компонент{" "}
          <code>Switch</code>, у которого есть обязательное свойство{" "}
          <code>label</code>. Вы можете передать это свойство в Controller
          напрямую. Свойство <code>name</code> будет использоваться для
          получения значения лэйбла внутри формы.
        </p>

        <p>
          Если вы используете свойство <code>defaultValue</code>, то оно будет
          иметь приоритет над значением <code>defaultValues</code> из{" "}
          <code>useForm</code>
          для соответствующего поля со свойством <code>name</code>.
        </p>
      </>
    ),
  },
  workWithUI: {
    title: "Работа с UI библиотеками",
    description: currentLanguage => (
      <>
        <p>
          React Hook Form был создан для простой интеграции в компоненты
          сторонних UI библиотек.
        </p>
        <p>
          <Note>Вариант 1:</Note> Лучший способ - это проверить, содержит ли
          нужный вам компонент, <code>innerRef</code> или <code>ref</code>,
          которые можно использовать для передачи свойства{" "}
          <code>
            <Link to={translateLink("api#register", currentLanguage)}>
              register
            </Link>
          </code>
          . Наример: <code>TextField</code> из Material-UI принимает{" "}
          <code>inputRef</code> как одно из подобных свойств. Просто передайте{" "}
          <code>register</code> в него.
        </p>
        <p>
          <code>
            {
              '<TextField inputRef={register} label="First name" name="FirstName"/>'
            }
          </code>
        </p>
        <p>
          <Note>Вариант 2:</Note> Иногда компоненты не имеют отдельного свойства
          для ригистрации, например <code>react-select</code> или{" "}
          <code>react-datepicker</code>.
        </p>
        <p>
          В этом случае, самый простой способ - это использование
          компонента-обёртки <Link to="/api#Controller">Controller</Link>,
          который сам позаботится о регистрации.
        </p>
        <CodeArea rawData={uiLibraryHookInput} />
        <p>
          <Note>Вариант 3:</Note> И, наконец, мы можем создать кастомную
          регистрацию с помощью{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://reactjs.org/docs/hooks-effect.html"
          >
            useEffect
          </a>{" "}
          Hook(а) и обновить значение с использованием метода{" "}
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
  globalState: {
    title: "Интеграция глобального состояния",
    description: `React Hook Form не требует обязательно использовать state management
    для хранения ваших данных, однако вы легко можете интегрировать один из его вариантов.`,
  },
  reactNative: {
    title: "React Native",
    description: (
      <p>
        Вы получите такое же повышение производительности от неконтролируемого
        компонента. Тем не менее, существуют определенные API, которые не
        совместимы с React Native (по причине отличий API для вэба и нативных
        окружений). Вам нужно будет <b>зарегистрировать компонент вручную</b>,
        как показано в следующем примере.
      </p>
    ),
  },
  typeScript: {
    title: "TypeScript",
    description: (
      <p>
        React Hook Form создан с использованием <code>Typescript</code>, поэтому
        вы можете создать тип <code>FormData</code> для поддержки значений полей
        формы.
      </p>
    ),
  },
  errors: {
    title: "Обработка ошибок",
    description: (
      <>
        React Hook Form предоставляет объект <code>errors</code> демонстрации
        ошибок внутри формы.
      </>
    ),
  },
}
