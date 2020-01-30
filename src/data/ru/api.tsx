import * as React from "react"
import Link from "../../styles/link"
import { CodeBlock, Note, Title, TypeText } from "../../styles/typography"
import { CodeAsLink } from "../../components/ApiPage"
import colors from "../../styles/colors"
import Popup from "../../components/Popup"
import CodeArea from "../../components/CodeArea"
import useFieldArrayArgument from "../../components/codeExamples/useFieldArrayArgument"

export default {
  title: "Документация по API",
  header: {
    description:
      "React Hook Form сфокусирован на предоставлении лучшего опыта разработки за счет упрощения API.",
  },
  useForm: {
    title: "useForm",
    intro: (
      <>
        Вызывая <code>useForm</code>, вы получите следующие методы{" "}
      </>
    ),
    description: (
      <p>
        <code>useForm</code> также имеет <b>необязательные</b> аргументы. В
        следующем примере приведены значения по умолчанию для всех параметров.
      </p>
    ),
    validateCriteriaMode: (
      <>
        <p>
          <code>firstErrorDetected</code> - значение по умолчанию, будут
          проверены все валидируемые поля и собраны все первоначальные ошибки.
        </p>
        <p>
          Если для данного параметра установлено значение <code>all</code>, то
          будет выполнена проверка всех полей и собраны все обнаруженные ошибки.
        </p>
      </>
    ),
    validateOnSubmit: (
      <>
        Валидация будет выполнена по событию <code>submit</code> и всем
        невалидным полям будет добавлен обработчик на событие{" "}
        <code>onChange</code> для повторной валидации.
      </>
    ),
    validateOnBlur: (
      <>
        Валидация будет выполнена по событию <code>blur</code>.
      </>
    ),
    validateOnChange: (
      <>
        Валидация будет выполнена по событию <code>change</code> для каждого
        поля, и это приведёт к массовым перерисовкам. Не рекомендуется:
        считается, что это ухудшает производительность.
      </>
    ),
    defaultValues: goToSection => (
      <>
        <p>
          Вы можете установить зачение по умолчанию для поля с помощью{" "}
          <code>defaultValue/defaultChecked</code>{" "}
          <Link href="https://reactjs.org/docs/uncontrolled-components.html">
            (узнать больше из доки по React о Default Values)
          </Link>{" "}
          или передать <code>defaultValues</code> в качестве необязального
          параметра для заполнения значений по умолчанию для всей формы.
        </p>

        <p>
          <Note>Примечание:</Note> Значение, определённое в{" "}
          <code>defaultValues</code> будет добавлено в{" "}
          <CodeAsLink onClick={() => goToSection("watch")}>watch</CodeAsLink> в
          качестве <code>defaultValue</code>.
        </p>

        <p>
          <Note>Примечание:</Note> <code>defaultValues</code> не заполняется
          автоматически при регистрации вручную (например:{" "}
          <code>{`register({ name: 'test' })`}</code>) потому что поле,
          <code>зарегистрированное</code> вручную, не передаёт <code>ref</code>{" "}
          в React Hook Form.
        </p>
      </>
    ),
    validationSchema: goToSection => (
      <p>
        Применение правил валидации с <code>Yup</code> на уровне схемы,
        перейдите в раздел{" "}
        <CodeAsLink onClick={() => goToSection("ValidationSchema")}>
          validationSchema
        </CodeAsLink>{" "}
        .
      </p>
    ),
    reValidateMode: (
      <p>
        Этот параметр позволяет установить, когда поля с ошибками будут повторно
        валидироваться (по умолчанию проверка запускается при любом изменении в
        поле). <Popup />
      </p>
    ),
    validationFields: (
      <p>
        Предоставление массива полей означает, что будут проверены только
        добавленные в массив поля. Эта опция полезна, когда вы хотите
        переключать, какие поля требуются для проверки.
      </p>
    ),
    submitFocusError: (
      <>
        <p>
          По умолчанию, когда пользователь отправляет форму и она содержит
          ошибку, первое поле с ошибкой будет в фокусе.
        </p>

        <p>
          <Note>Примечание:</Note> Только зарегистрированные поля с{" "}
          <code>ref</code> будут работать. Поля, зарегистрированные вручную,
          работать не будут. например:{" "}
          <code>{`register({ name: 'test' }) // не работает`}</code>{" "}
        </p>
      </>
    ),
    nativeValidation: goToSection => (
      <p>
        Устанавливая эту опцию в <code>true</code> включит нативную браузерную
        валидацию. Вы можете{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
        >
          узнать больше о браузерной валидации
        </a>
        , и перейти в раздел{" "}
        <CodeAsLink onClick={() => goToSection("nativeValidation")}>
          nativeValidation
        </CodeAsLink>{" "}
        , где приведено больше деталей и примеров.
      </p>
    ),
  },
  unregister: {
    title: "unregister",
    description: (
      <>
        <p>
          Этот метод позволяет вам отменить регистрацию -{" "}
          <code>unregister</code>
          единичных полей или массива полей. Это удобно, если вы
          зарегистрировали поле внутри <code>useEffect</code> в качестве
          кастомной регистрации и вам нужно отменить регистрацию после
          отключения (unmount) компонента.
        </p>
        <p>
          <Note>Примечание:</Note> Когда вы регистрируете поле, его значение
          больше не будет включено в данные формы, которые будут отправляться.
        </p>
      </>
    ),
  },
  register: {
    title: "register",
    description: (
      <>
        <p>
          Этот метод позволяет регистрировать input/select <code>Ref</code> и
          правила их валидации в React Hook Form.
        </p>
        <p>
          Правила валидации основаны на HTML стандарте и также позволяют
          добавлять кастомную валидацию.
        </p>
        <p>
          <Note>Важно:</Note> параметр <code>name</code> - <b>обязательный</b> и{" "}
          <b>уникальный</b>. Имя поля также поддерживает "dot and bracket
          syntax", который даёт вам возможность создавать вложенные поля формы.
          Форма с примером приведена ниже:
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
        Если вы работаете с <code>массивом/массивами полей</code>, вы можете
        задать имя поля как <code>name[index]</code>.{" "}
        <Link
          href="https://github.com/react-hook-form/react-hook-form/blob/master/examples/FieldArray.tsx"
          title="пример массива полей"
        >
          Посмотреть пример с массивом полей
        </Link>
        .
      </p>
    ),
    example: "Результат отправки формы",
    selectHelp:
      "При выборе способа регистрации, таблица API, приведенная ниже, будет обновлена.",
    options: {
      title: "Register options",
      registerWithValidation: "Регистрация с валидацией",
      registerWithValidationMessage:
        "Регистрация с валидацией и сообщением об ошибке",
      note: goToSection => (
        <>
          <Title>Кастомная регистрация</Title>
          <p>
            Вы также можете зарегистрировать поля вручную, что может быть удобно
            при работе с кастомными компонентами, когда <code>Ref</code>{" "}
            неприменим. Это также актуально, когда вы работаете с React Native с
            такими кастомными компонентами как{" "}
            <a
              href="https://github.com/JedWatson/react-select"
              target="_blank"
              rel="noopener noreferrer"
            >
              react-select
            </a>
            .
          </p>

          <p>
            При использовании вызова кастомной регистрации, вам нужно обновить
            значение поля с помощью{" "}
            <CodeAsLink onClick={() => goToSection("setValue")}>
              setValue
            </CodeAsLink>
            , потому что поле больше не является зарегистрированным с помощью
            его ref.
          </p>

          <p>
            <CodeBlock>{`register({ name: 'firstName' }, { required: true, min: 8 })`}</CodeBlock>
          </p>

          <p>
            <Note>Примечание:</Note> Если вы хотите, чтобы регистрация
            кастомного поля вызывала повторный рендеринг после обновления его
            значения, то вам нужно указать тип зарегистрированного поля.
          </p>
        </>
      ),
    },
    validation: {
      required: (
        <>
          Булевые "правдивые" значения указывают на то, что поле должно иметь
          значение перед отправкой формы. Вы также можете указать строку с
          текстом ошибки для объекта ошибки (<code>errors</code> object).
        </>
      ),
      maxLength: "Максимальная разрешённая длинна поля.",
      minLength: "Минимальная разрешённая длинна поля.",
      max: "Максимальное разрешённое значение для данного поля.",
      min: "Минимальное разрешённое значение для данного поля.",
      pattern: "Шаблон regex для данного поля",
      validate: `Вы можете передать функцию обратного вызова в качестве аргумента для валидации или передать объект функций обратного вызова для проверки всех из них (см. примеры)`,
    },
  },
  formState: {
    title: "formState",
    description: (
      <>
        <p>Этот объект содержит информацию о состоянии формы.</p>

        <p>
          <Note>Important:</Note> <code>formState</code> is wrapped with{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Proxy
          </a>{" "}
          to improve render performance, so make you have invoke/read it before
          <code>render</code> in order to enable the state update.
        </p>
      </>
    ),
    dirty: "Устанавливается в true после изменения любого поля.",
    isSubmitted: "Устанавливается в true после отправки формы.",
    touched:
      "Объект, содержаций все поля, с которыми взаимодействовал пользователь.",
    isSubmitting: (
      <>
        Во время отправки формы будет выставлено в <code>true</code> и после
        отправки будет выставлено в <code>false</code>
      </>
    ),
    submitCount: "Количество отправлений формы.",
    isValid: "Устанавливается в true, если нет ошибок.",
  },
  errors: {
    title: "errors",
    description: () => (
      <>
        <p>
          Объект, содержащий ошибки формы или сообщения об ошибках для каждого
          поля.
        </p>

        <p>
          <Note>Примечание:</Note> Есть развница в V3 и V4:
        </p>

        <ul>
          <li>
            <p>V4: Вложеный объект</p>
            <p>
              <strong>Причина:</strong> так как опциональный чейнинг становится
              всё более популярным в сообществе и для поддержки лучшего типа.
            </p>
            <p>
              <code>{`errors?.yourDetail?.firstName;`}</code>
            </p>
          </li>
          <li>
            <p>V3: Плоский объект</p>
            <p>
              <strong>Причина:</strong> простой доступ к ошибке.
            </p>
            <p>
              <code>{`errors['yourDetail.firstName'];`}</code>
            </p>
          </li>
        </ul>
      </>
    ),
    types: (
      <>
        Это полезно для проверки входных данных, таких как правила пароля,
        которые должны возвращать несколько ошибок для одного поля. Чтобы
        включить эту функцию, убедитесь, что вы установили{" "}
        <code>validateCriteriaMode: 'all'</code>.
      </>
    ),
    message: `Сообщение является пустой строкой по умолчанию. Однако, если вы зарегистрируете валидацию с сообщением об ошибке, то затем она будет возвращена.`,
    ref: `Ссылка на ваш элемент поля.`,
  },
  watch: {
    title: "watch",
    description: (
      <>
        <p>
          Будет следить за выбранным полем/полями и вернёт его/их значение(я).
          Это может быть удобно для определениятого того, что нужно рендерить.
        </p>

        <ul>
          <li>
            <p>
              Когда <code>defaultValue</code> не определено, первый рендер
              вернёт <code>undefined</code> из <code>watch</code> потому, что он
              вызывается раньше <code>регистрации</code>, но вы можете задать{" "}
              <code>defaultValue</code> вторым аргументом.
            </p>
          </li>
          <li>
            <p>
              Однако, если <code>defaultValues</code> было инициализировано в{" "}
              <code>useForm</code> в качестве аргумента, то 1-й рендер вернёт
              значение, указанное в качесте <code>defaultValues</code>.
            </p>
          </li>
        </ul>
      </>
    ),
    tableTitle: {
      single: (
        <>
          Наблюдение за полем по имени (как и функция{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://lodash.com/docs/4.17.15#get"
          >
            get
          </a>{" "}
          в lodash)
        </>
      ),
      multiple: "Наблюдение за несколькими полями",
      all: "Наблюдение за всеми полями",
      nest: "Наблюдение за всеми полями и возврат вложенного объекта",
    },
  },
  handleSubmit: {
    title: "handleSubmit",
    description: (
      <>
        <p>
          Эта функция будет передавать данные формы, когда валидация формы
          прошла успешно.
        </p>
        <p>
          <Note>Примечание:</Note> Вы можете использовать <code>async</code>{" "}
          функцию для асинхронной валидации, например:{" "}
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
          Эта функция сбрасывает значения полей и ошибки формы. Вы можете
          передать <code>values</code> в качестве необязательного аргумента для
          сброса формы в присвоенные значения по умолчанию.
        </p>
        <p>
          <Note>Примечание:</Note> Для контролируемых компонентов, например{" "}
          <code>React-Select</code>, у которых нет значения <code>ref</code>, вы
          должны сбрасывать значение вручную с помощью{" "}
          <CodeAsLink onClick={() => goToSection("setValue")}>
            setValue
          </CodeAsLink>{" "}
          или использовать{" "}
          <CodeAsLink onClick={() => goToSection("Controller")}>
            Controller
          </CodeAsLink>{" "}
          в качестве обёртки для вашего контролируемого компонента.
        </p>
      </>
    ),
  }),
  setError: {
    title: "setError",
    description: (
      <p>
        Эта функция даёт возможность вручную установать одну или несколько
        ошибок.
      </p>
    ),
  },
  clearError: {
    title: "clearError",
    description: (
      <ul>
        <li>
          <p>
            <code>undefined</code>: сбрасывает все ошибки
          </p>
        </li>
        <li>
          <p>
            <code>string</code>: сбрасывает одну ошибку
          </p>
        </li>
        <li>
          <p>
            <code>string[]</code>: сбрасывает массив ошибок
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
          Эта функция позволяет динамически устанавливать значение для
          input/select. В то же время она пытается избежать повторного
          рендеринга, когда в этом нет необходимости, и только следующие условия
          вызовут повторный рендеринг.
        </p>
        <ul>
          <li>
            <p>Когда ошибка вызывается при обновлении значения поля</p>
          </li>
          <li>
            <p>Когда ошибка исправляется при обновлении значения поля</p>
          </li>
          <li>
            <p>
              Когда setValue вызван впервые и formState параметр{" "}
              <code>dirty</code> установлен в true
            </p>
          </li>
          <li>
            <p>
              Когда вызван setValue и обновлено значение свойства{" "}
              <code>touched</code> из formState
            </p>
          </li>
        </ul>
        <p>
          <Note>Примечание:</Note> При вызове этого метода,{" "}
          <code>formState</code> добавит <code>имя</code> поля в массив{" "}
          <code>touched</code>.
        </p>
        <p>
          Также вы можете установать <code>shouldValidate</code> в{" "}
          <code>true</code>и это вызовет валидацию поля, например:{" "}
          <code>setValue('name', 'value', true)</code>
        </p>
      </>
    ),
  },
  getValues: {
    title: "getValues",
    description: (
      <>
        <p>
          Эта функция возвращает все данные формы, и это полезно, когда вы
          хотите получить значения полей формы.
        </p>

        <ul>
          <li>
            <p>
              По умолчанию <code>getValues()</code> вернёт значения полей формы
              в виде плоской структуры, например:{" "}
              <code>{`{ test: 'data', test1: 'data1'}`}</code>
            </p>
          </li>
          <li>
            <p>
              При работе с определёнными полями формы,{" "}
              <code>getValues({`{ nest: true }`})</code> вернёт данные во
              вложенной структуре согласно <code>имени</code> поля, например:{" "}
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
        <p>Для принудительного вызова валидации input/select полей формы.</p>
        <p>
          <Note>Примечание:</Note> При неудачной валидации, объект{" "}
          <code>errors</code> будет обновлён.
        </p>
      </>
    ),
  },
  validationSchema: {
    title: "ValidationSchema",
    description: (
      <p>
        Если вы хотите централизовать свои правила валидации с помощью внешней
        схемы валидации, то вы можете использовать <code>validationSchema</code>{" "}
        в <code>useForm</code> в качестве необязательного параметра. React Hook
        Form в настоящий момент поддерживает{" "}
        <Link
          href="https://github.com/jquense/yup"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yup
        </Link>{" "}
        в качестве внешнего объекта схемы валидации.
      </p>
    ),
  },
  useFieldArray: {
    title: "useFieldArray",
    description: (
      <>
        <p>
          A custom hook for working with Field Arrays (dynamic inputs). This
          hook provides the following object and functions.
        </p>

        <CodeArea rawData={useFieldArrayArgument} />

        <p>
          <Note>Note:</Note> you can populate the <code>fields</code> by supply{" "}
          <code>defaultValues</code> at <code>useForm</code> hook.
        </p>

        <p>
          <Note>Important:</Note> make sure you assign <code>id</code> from{" "}
          <code>fields</code> object as your component key.
        </p>
      </>
    ),
    table: (
      <>
        <tr>
          <td>
            <code>fields</code>
          </td>
          <td>
            <TypeText>object & {`{ id: string }`}</TypeText>
          </td>
          <td>
            This object is the source of truth to map and render inputs.
            <p>
              <Note>Important: </Note> because each inputs can be uncontrolled,{" "}
              <code>id</code> is required with mapped components to help React
              identify which items have changed, are added, or are removed.
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
            <code>
              <TypeText>(obj: any) => void</TypeText>
            </code>
          </td>
          <td>Append input/inputs to the end of your fields</td>
        </tr>
        <tr>
          <td>
            <code>prepend</code>
          </td>
          <td>
            <code>
              <TypeText>(obj: any) => void</TypeText>
            </code>
          </td>
          <td>Prepend input/inputs to the start of your fields</td>
        </tr>
        <tr>
          <td>
            <code>insert</code>
          </td>
          <td>
            <code>
              <TypeText>(index: number, value: any) => void</TypeText>
            </code>
          </td>
          <td>Insert input/inputs at particular position.</td>
        </tr>
        <tr>
          <td>
            <code>swap</code>
          </td>
          <td>
            <code>
              <TypeText>(from: number, to: number) => void</TypeText>
            </code>
          </td>
          <td>Swap input/inputs position.</td>
        </tr>
        <tr>
          <td>
            <code>move</code>
          </td>
          <td>
            <code>
              <TypeText>(from: number, to: number) => void</TypeText>
            </code>
          </td>
          <td>
            Move input/inputs to another position.
            <p>
              <Note>Note:</Note> difference between <code>move</code> and{" "}
              <code>swap</code>, keep calling <code>move</code> will push
              input/inputs in a loop, while <code>swap</code> only change two
              input/inputs' position.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>remove</code>
          </td>
          <td>
            <code>
              <TypeText>(index?: number) => void</TypeText>
            </code>
          </td>
          <td>
            Remove input/inputs at particular position, or remove all when no
            index is provided.
          </td>
        </tr>
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
            <TypeText>string</TypeText>
          </td>
          <td>✓</td>
          <td>Уникальное имя вашего поля.</td>
        </tr>
        <tr>
          <td>
            <code>as</code>
          </td>
          <td>
            <TypeText>React.ElementType | string</TypeText>
          </td>
          <td>✓</td>
          <td>
            Контролируемый компонент, например: <code>as="input"</code> или{" "}
            <code>{`as={<TextInput />}`}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>control</code>
          </td>
          <td>
            <TypeText>Object</TypeText>
          </td>
          <td />
          <td>
            <code>control</code> объект - это вызов формой <code>useForm</code>.
            Это необязательно, если вы используете FormContext.
          </td>
        </tr>
        <tr>
          <td>
            <code>defaultValue</code>
          </td>
          <td>
            <TypeText>any</TypeText>
          </td>
          <td />
          <td>
            То же, что и <code>defaultValue</code> неконтролируемого компонента,
            когда указывается <code>логическое</code> значение. Будет
            обрабатываться как чекбокс.
            <p>
              <Note>Примечание:</Note> вам нужно задать или атрибут поля{" "}
              <code>defaultValue</code> или <code>defaultValues</code> для{" "}
              <code>useForm</code>
            </p>
            <p>
              <Note>Примечание</Note>: Если указано, то будет иметь приоритет
              над <code>defaultValues</code> у <code>useForm</code> для данного
              поля.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>rules</code>
          </td>
          <td>
            <TypeText>Object</TypeText>
          </td>
          <td />
          <td>
            Валидационные правила в соответствии с <code>register</code>.
          </td>
        </tr>
        <tr>
          <td>
            <code>onChange</code>
          </td>
          <td>
            <TypeText>(args: any) => any</TypeText>
          </td>
          <td />
          <td>
            Параметр <code>onChange</code> позволяет вам изменять возвращаемое
            значение, <br />
            <code>например: {`onChange={{(data) => data.value}}`}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>onChangeName</code>
          </td>
          <td>
            <TypeText>string</TypeText>
          </td>
          <td />
          <td>
            Этот параметр позволяет вам настроить таргетинг на конкретное имя
            события, например: когда событие <code>onChange</code> называется{" "}
            <code>onTextChange</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>onBlurName</code>
          </td>
          <td>
            <TypeText>string</TypeText>
          </td>
          <td />
          <td>
            Этот параметр позволяет вам настроить таргетинг на конкретное имя
            события, например: когда событие <code>onBlur</code> называется{" "}
            <code>onTextBlur</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>valueName</code>
          </td>
          <td>
            <TypeText>string</TypeText>
          </td>
          <td />
          <td>
            Этот параметр позволяет переопределять свойство <code>value</code> и
            поддерживает другие компоненты, которые не используют свойство{" "}
            <code>value</code>, например: <code>checked</code>,{" "}
            <code>selected</code> и т.д.
          </td>
        </tr>
      </tbody>
    ),
    description: (
      <>
        <p>
          React Hook Form принимает неконтролируемые компоненты и нативные поля,
          однако трудно избежать работы с внешним контролируемым компонентом,
          таким как{" "}
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
          и{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/"
          >
            Material-UI
          </a>
          . Этот компонент-обёртка сделает вашу жизнь проще при работе с ними.
        </p>
        <p>
          Каждый параметр, который вы передаёте в компонет Controller, будет
          передан в экземпляр компонента, который вы указали в параметре{" "}
          <code>as</code>. Например, представьте что у вас есть кастомный{" "}
          <code>Switch</code>, с обязательным свойством - <code>label</code>. Вы
          можете передать это свойство в Controller напрямую. Свойство{" "}
          <code>name</code> будет использовано позже для доступа к значению
          этого свойства внутри формы.
        </p>

        <p>
          Если вы используете свойство <code>defaultValue</code>, то оно будет
          иметь приоритет перед значением одноимённого свойства{" "}
          <code>useForm</code>
          для поля с одним и тем же <code>name</code>.
        </p>
      </>
    ),
  },
  useFormContext: {
    title: "useFormContext",
    introduction: (
      <p>
        Контекст формы предназначен для решения проблемы, когда в дереве
        компонентов есть глубоко вложенные поля, а методы передаются вглубь как{" "}
        <code>props</code>.
      </p>
    ),
    description: (
      <>
        <p>
          Как только ваша форма обёрнута в <code>FormContext</code>, то{" "}
          <code>useFormContext</code>: <TypeText>function</TypeText> может быть
          вызвана внутри вложенного компонента.
        </p>
        <p>
          <Note>Примечание:</Note> вызов <code>useFormContext</code> вернёт все
          функции из <code>useForm</code>.
        </p>
      </>
    ),
  },
  control: {
    title: "control",
    description: (
      <p>
        Этот объект создан для компонента Controller из React Hook Form, который
        содержит методы для регистрации управляемого компонента в React Hook
        Form.
      </p>
    ),
  },
  ErrorMessage: {
    title: "ErrorMessage",
    description: (
      <p>
        Простой компонент для отображения связанного сообщения об ошибке поля.
      </p>
    ),
    table: (
      <tbody>
        <tr>
          <td>
            <code>name</code>
          </td>
          <td>
            <TypeText>string</TypeText>
          </td>
          <td>✓</td>
          <td>имя связанного поля.</td>
        </tr>
        <tr>
          <td>
            <code>errors</code>
          </td>
          <td>
            <TypeText>object</TypeText>
          </td>
          <td />
          <td>
            <code>errors</code> объект из React Hook Form. Необязательно, если
            вы используете FormContext.
          </td>
        </tr>
        <tr>
          <td>
            <code>message</code>
          </td>
          <td>
            <TypeText>string</TypeText>
          </td>
          <td>встроенное сообщение об ошибке.</td>
        </tr>
        <tr>
          <td>
            <code>as</code>
          </td>
          <td>
            <TypeText>React.ElementType | string</TypeText>
          </td>
          <td />
          <td>
            Компонент-обёртка или HTML тэг. Например: <code>as="span"</code> или{" "}
            <code>{`as={<Text />}`}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>children</code>
          </td>
          <td>
            <TypeText>
              ({`{ message: string, messages: string[]}`}) => any
            </TypeText>
          </td>
          <td />
          <td>
            Это{" "}
            <a
              href="https://reactjs.org/docs/render-props.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              render prop
            </a>{" "}
            сообщения об ошибке/ошибках.
          </td>
        </tr>
      </tbody>
    ),
  },
  NativeValidation: {
    title: "Browser built-in validation",
    description: (
      <p>
        В следующем примере показано, как вы можете использовать браузерную
        валидацию. Вам нужно установить свойство <code>nativeValidation</code> в{" "}
        <code>true</code>, а остальная часть синтаксиса такая же, как для
        стандартной валидации.
      </p>
    ),
  },
}
