import * as React from "react"
import { Link } from "gatsby"
import colors from "../../../styles/colors"
import Popup from "../../../components/Popup"
import CodeArea from "../../../components/CodeArea"
import useFieldArrayArgument from "../../../components/codeExamples/v6/useFieldArrayArgument"
import * as typographyStyles from "../../../styles/typography.module.css"
import * as buttonStyles from "../../../styles/button.module.css"
import code from "../../../components/codeExamples/defaultExample"

export default {
  title: "Документация по API",
  header: {
    description:
      "сфокусирован на предоставлении лучшего опыта разработки за счет упрощения API.",
  },
  v5upgradeAlert: (
    <p>
      <span style={{ fontSize: 12 }}>►</span> React Hook Form V6 выпущен. Если
      вы планируете выполнить обновление, ознакомьтесь с{" "}
      <Link to="/migrate-v5-to-v6">Руководство по миграции на V6</Link>.
    </p>
  ),
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
    validationResolver: (goToSection) => (
      <>
        <p>
          This callback function allow you to run through any schema or custom
          validation. The function has the entire form <code>values</code> as
          argument, and you will need to validate the result and return both{" "}
          <code>values</code> and <code>errors</code>. Read more at{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("validationResolver")}
          >
            validationResolver
          </button>{" "}
          section.
        </p>
      </>
    ),
    validateContext: (
      <>
        <p>
          This context object will be injected into{" "}
          <code>validationResolver</code>'s second argument or{" "}
          <a
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </a>{" "}
          validation's context object.
        </p>
      </>
    ),
    validateCriteriaMode: (
      <>
        <p>
          <code>firstError</code> - значение по умолчанию, будут проверены все
          валидируемые поля и собраны все первоначальные ошибки.
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
    defaultValues: (goToSection) => (
      <>
        <p>
          Вы можете установить зачение по умолчанию для поля с помощью{" "}
          <code>defaultValue/defaultChecked</code>{" "}
          <a
            className={buttonStyles.links}
            href="https://reactjs.org/docs/uncontrolled-components.html"
          >
            (узнать больше из доки по React о Default Values)
          </a>{" "}
          или передать <code>defaultValues</code> в качестве необязального
          параметра для заполнения значений по умолчанию для всей формы.
        </p>

        <p>
          <b className={typographyStyles.note}>Important:</b>{" "}
          <code>defaultValues</code> is cached within the custom hook, if you
          want to reset <code>defaultValues</code> please use{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("reset")}
          >
            reset
          </button>{" "}
          api.
        </p>

        <p>
          <b className={typographyStyles.note}>Примечание:</b> Значение,
          определённое в <code>defaultValues</code> будет добавлено в{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("watch")}
          >
            watch
          </button>{" "}
          в качестве <code>defaultValue</code>.
        </p>

        <p>
          <b className={typographyStyles.note}>Примечание:</b>{" "}
          <code>defaultValues</code> не заполняется автоматически при
          регистрации вручную (например: <code>{`register('test')`}</code>)
          потому что поле,
          <code>зарегистрированное</code> вручную, не передаёт <code>ref</code>{" "}
          в React Hook Form.
        </p>
      </>
    ),
    validationSchema: (goToSection) => (
      <p>
        Применение правил валидации с <code>Yup</code> на уровне схемы,
        перейдите в раздел{" "}
        <button
          className={buttonStyles.codeAsLink}
          onClick={() => goToSection("validationSchema")}
        >
          validationSchema
        </button>{" "}
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
          <b className={typographyStyles.note}>Примечание:</b> Только
          зарегистрированные поля с <code>ref</code> будут работать. Поля,
          зарегистрированные вручную, работать не будут. например:{" "}
          <code>{`register('test') // не работает`}</code>{" "}
        </p>
      </>
    ),
    nativeValidation: (goToSection) => (
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
        <button
          className={buttonStyles.codeAsLink}
          onClick={() => goToSection("nativeValidation")}
        >
          nativeValidation
        </button>{" "}
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
          <b className={typographyStyles.note}>Примечание:</b> Когда вы
          регистрируете поле, его значение больше не будет включено в данные
          формы, которые будут отправляться.
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
          <b className={typographyStyles.note}>Важно:</b> параметр{" "}
          <code>name</code> - <b>обязательный</b> и <b>уникальный</b>. Имя поля
          также поддерживает "dot and bracket syntax", который даёт вам
          возможность создавать вложенные поля формы. Форма с примером приведена
          ниже:
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
        <a
          className={buttonStyles.links}
          href="https://github.com/react-hook-form/react-hook-form/blob/master/examples/FieldArray.tsx"
          title="пример массива полей"
        >
          Посмотреть пример с массивом полей
        </a>
        .
      </p>
    ),
    example: "Результат отправки формы",
    selectHelp:
      "При выборе способа регистрации, таблица API, приведенная ниже, будет обновлена.",
    options: {
      title: "Register Options",
      registerWithValidation: "Регистрация с валидацией",
      registerWithValidationMessage:
        "Регистрация с валидацией и сообщением об ошибке",
      note: (goToSection) => (
        <>
          <h2 className={typographyStyles.title}>Кастомная регистрация</h2>
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
            <button
              className={buttonStyles.codeAsLink}
              onClick={() => goToSection("setValue")}
            >
              setValue
            </button>
            , потому что поле больше не является зарегистрированным с помощью
            его ref.
          </p>

          <p>
            <code
              className={typographyStyles.codeBlock}
            >{`register('firstName', { required: true, min: 8 })`}</code>
          </p>

          <p>
            <b className={typographyStyles.note}>Примечание:</b> Если вы хотите,
            чтобы регистрация кастомного поля вызывала повторный рендеринг после
            обновления его значения, то вам нужно указать тип
            зарегистрированного поля.
          </p>

          <p>
            <code
              className={typographyStyles.codeBlock}
            >{`register({ name: 'firstName', type: 'custom' }, { required: true, min: 8 })`}</code>
          </p>

          <p>
            <b className={typographyStyles.note}>Nota:</b>несколько radio input
            с тем же именем, вы хотите зарегистрировать валидацию до последнего
            ввод, чтобы ловушка понимала, валидируйте их как группу в конце.
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
          <b className={typographyStyles.note}>Important:</b>{" "}
          <code>formState</code> is wrapped with{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Proxy
          </a>{" "}
          to improve render performance, so make you have invoke/read it before
          <code>render</code> in order to enable the state update. Этот Функция
          уменьшения количества повторного рендеринга применима только к
          веб-платформе из-за отсутствия поддержки <code>Proxy</code> в React
          Native.
        </p>
      </>
    ),
    dirty: "Устанавливается в true после изменения любого поля.",
    dirtyFields: "Уникальный набор пользовательских полей.",
    isSubmitted:
      "Устанавливается в true после отправки формы. После отправки формы ее состояние будет оставаться до тех пор, пока не будет вызван метод сброса.",
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
          <b className={typographyStyles.note}>Примечание:</b> Есть развница в
          V3 и V4:
        </p>

        <ul>
          <li>
            <p>V4: Вложеный объект</p>
            <p>
              <strong>Причина:</strong> так как опциональный чейнинг становится
              всё более популярным в сообществе и для поддержки лучшего типа.
            </p>
            <p>
              <code>errors?.yourDetail?.firstName;</code>
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
    note: (goToSection) => (
      <p>
        <b className={typographyStyles.note}>Примечание:</b> вы можете
        использовать{" "}
        <button
          className={buttonStyles.codeAsLink}
          onClick={() => goToSection("ErrorMessage")}
        >
          ErrorMessage
        </button>{" "}
        чтобы помочь обработать ваши ошибки.
      </p>
    ),
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
          прошла успешно и может быть вызван удаленно.
        </p>
        <p>
          <code className={typographyStyles.codeBlock}>
            handleSubmit(onSubmit)()
          </code>
        </p>
        <p>
          <b className={typographyStyles.note}>Примечание:</b> Вы можете
          использовать <code>async</code> функцию для асинхронной валидации,
          например:{" "}
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
          Эта функция сбрасывает значения полей и ошибки формы. Поставив{" "}
          <code>omitResetState </code>, вы можете свободно только сбросить
          конкретный кусок состояния. Вы можете передать <code>values</code> в
          качестве необязательного аргумента для сброса формы в присвоенные
          значения по умолчанию.
        </p>
        <p>
          <b className={typographyStyles.note}>Примечание:</b> Для
          контролируемых компонентов, например <code>React-Select</code>, у
          которых нет значения <code>ref</code>, вы должны сбрасывать значение
          вручную с помощью{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("setValue")}
          >
            setValue
          </button>{" "}
          или использовать{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("Controller")}
          >
            Controller
          </button>{" "}
          в качестве обёртки для вашего контролируемого компонента.
        </p>
        <p>
          <b className={typographyStyles.note}>Примечание:</b> Вам нужно будет
          укажите <code>defaultValues ​​</code> во время <code>useForm </code>
          или<code>reset</code>со значением для сброса
          <code>Controller </code>стоимость компонентов.
        </p>
      </>
    ),
  }),
  setError: {
    title: "setError",
    description: (
      <>
        <p>
          Эта функция даёт возможность вручную установать одну или несколько
          ошибок.
        </p>
        <p>
          <b className={typographyStyles.note}>Примечание:</b> этот метод не
          сохранит ошибку и заблокирует отправить действие. Это более полезно во
          время функции <code>handleSubmit</code>, когда Вы хотите отправить
          сообщение об ошибке пользователям после асинхронной проверки.
        </p>
      </>
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
          <b className={typographyStyles.note}>Примечание:</b> При вызове этого
          метода, <code>formState</code> добавит <code>имя</code> поля в массив{" "}
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
          <b className={typographyStyles.note}>Примечание:</b> При неудачной
          валидации, объект <code>errors</code> будет обновлён.
        </p>
      </>
    ),
  },
  validationSchema: {
    title: "validationSchema",
    description: (
      <p>
        Если вы хотите централизовать свои правила валидации с помощью внешней
        схемы валидации, то вы можете использовать <code>validationSchema</code>{" "}
        в <code>useForm</code> в качестве необязательного параметра. React Hook
        Form в настоящий момент поддерживает{" "}
        <a
          className={buttonStyles.links}
          href="https://github.com/jquense/yup"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yup
        </a>{" "}
        в качестве внешнего объекта схемы валидации.
      </p>
    ),
  },
  useFieldArray: {
    title: "useFieldArray",
    description: (
      <>
        <p>
          Custom hook for working with uncontrolled Field Arrays (dynamic
          inputs). The motivation is to provide better user experience and form
          performance. You can watch{" "}
          <a
            href="https://www.youtube.com/watch?v=Q7lrHuUfgIs"
            target="_blank"
            rel="noopener noreferrer"
          >
            this short video
          </a>{" "}
          to compare controlled vs uncontrolled Field Array.
        </p>

        <p>This hook provides the following object and functions.</p>

        <CodeArea rawData={useFieldArrayArgument} />

        <p>
          <b className={typographyStyles.note}>Important: </b>{" "}
          <code>useFieldArray</code> is built on top of uncontrolled components.
          The following notes will help you aware and be mindful of its
          behaviour during implementation.
        </p>

        <ul>
          <li>
            <p>
              you can populate the <code>fields</code> by supply{" "}
              <code>defaultValues</code> at <code>useForm</code> hook.
            </p>
          </li>
          <li>
            <p>
              make sure you assign <code>id</code> from <code>fields</code>{" "}
              object as your component key.
            </p>
          </li>
          <li>
            <p>
              set <code>defaultValue</code> when you want to set default value
              or reset with inputs.
            </p>
          </li>
          <li>
            <p>
              you can not call actions one after another. Actions need to be
              triggered per render.
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
}, [fields])
            `}
            />
          </li>
          <li>
            It's <strong>important</strong> to apply{" "}
            <code>{`ref={register()}`}</code> instead of{" "}
            <code>{`ref={register}`}</code> when working with{" "}
            <code>useFieldArray</code> so <code>register</code> will get invoked
            during <code>map</code>.
          </li>
          <li>
            <p>
              Он не работает с пользовательским регистром в{" "}
              <code>useEffect</code>.
            </p>
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
            This object is the source of truth to map and render inputs.
            <p>
              <b className={typographyStyles.note}>Important: </b> because each
              inputs can be uncontrolled, <code>id</code> is required with
              mapped components to help React identify which items have changed,
              are added, or are removed.
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
              <code className={typographyStyles.typeText}>
                (obj: object) =&gt; void
              </code>
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
              <code className={typographyStyles.typeText}>
                (obj: object) =&gt; void
              </code>
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
              <code className={typographyStyles.typeText}>
                (index: number, value: object) =&gt; void
              </code>
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
              <code className={typographyStyles.typeText}>
                (from: number, to: number) =&gt; void
              </code>
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
              <code className={typographyStyles.typeText}>
                (from: number, to: number) =&gt; void
              </code>
            </code>
          </td>
          <td>
            Move input/inputs to another position.
            <p>
              <b className={typographyStyles.note}>Note:</b> difference between{" "}
              <code>move</code> and <code>swap</code>, keep calling{" "}
              <code>move</code> will push input/inputs in a loop, while{" "}
              <code>swap</code> only change two input/inputs' position.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>remove</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (index?: number | number[]) =&gt; void
              </code>
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
            <code className={typographyStyles.typeText}>string</code>
          </td>
          <td>✓</td>
          <td>Уникальное имя вашего поля.</td>
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
            Контролируемый компонент, например: <code>as="input"</code> или{" "}
            <code>{`as={<TextInput />}`}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>control</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Object</code>
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
            <code className={typographyStyles.typeText}>any</code>
          </td>
          <td />
          <td>
            То же, что и <code>defaultValue</code> неконтролируемого компонента,
            когда указывается <code>логическое</code> значение. Будет
            обрабатываться как чекбокс.
            <p>
              <b className={typographyStyles.note}>Примечание:</b> вам нужно
              задать или атрибут поля <code>defaultValue</code> или{" "}
              <code>defaultValues</code> для <code>useForm</code>
            </p>
            <p>
              <b className={typographyStyles.note}>Note</b>: If your form will
              invoke <code>reset</code> with different values, you will need to
              provide <code>defaultValues</code> at useForm level instead of set
              inline <code>defaultValue</code>.
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
            <code className={typographyStyles.typeText}>
              (args: any | EventTarget) =&gt; any
            </code>
          </td>
          <td />
          <td>
            Параметр <code>onChange</code> позволяет вам изменять возвращаемое
            значение, убедитесь, что вы знаете форму реквизита{" "}
            <code>value</code> внешнего компонента. Атрибут <code>value</code>{" "}
            или <code>checked</code> будет считываться, когда форма полезных
            данных представляет собой <code>object</code>, который содержит
            атрибут type.
          </td>
        </tr>
        <tr>
          <td>
            <code>onChangeName</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>string</code>
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
            <code>onFocus</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>() =&gt; void</code>
          </td>
          <td></td>
          <td>
            <p>
              Этот обратный вызов позволяет пользовательскому хуку
              сосредоточиться на вводе, когда есть ошибка. Эта функция применима
              как для React, так и для Реагируйте-нативные компоненты, пока они
              могут быть сфокусированы.
            </p>
            <p>
              <a
                href="https://codesandbox.io/s/react-hook-form-controllerautofocus-v5-un45f"
                target="_blank"
                rel="noopener noreferrer"
              >
                Вот рабочий пример.
              </a>
              .
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>onBlurName</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>string</code>
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
            <code className={typographyStyles.typeText}>string</code>
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
          <a target="_blank" rel="noopener noreferrer" href="https://mui.com/">
            MUI
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
          <code>useFormContext</code>:{" "}
          <code className={typographyStyles.typeText}>function</code> может быть
          вызвана внутри вложенного компонента.
        </p>
        <p>
          <b className={typographyStyles.note}>Примечание:</b> вызов{" "}
          <code>useFormContext</code> вернёт все функции из <code>useForm</code>
          .
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
    table: {
      name: <>имя связанного поля.</>,
      errors: (
        <>
          <code>errors</code> объект из React Hook Form. Необязательно, если вы
          используете FormContext.
        </>
      ),
      message: <>встроенное сообщение об ошибке.</>,
      as: (
        <>
          Компонент-обёртка или HTML тэг. Например: <code>as="span"</code> или{" "}
          <code>{`as={<Text />}`}</code>
        </>
      ),
      children: (
        <>
          Это{" "}
          <a
            href="https://reactjs.org/docs/render-props.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            render prop
          </a>{" "}
          сообщения об ошибке/ошибках.
          <p>
            <b className={typographyStyles.note}>Note:</b> you need to set{" "}
            validateCriteriaMode to 'all' for using <code>messages</code>.
          </p>
        </>
      ),
    },
  },
  NativeValidation: {
    title: "Browser built-in validation",
    description: (
      <>
        <p>
          В следующем примере показано, как вы можете использовать браузерную
          валидацию. Вам нужно установить свойство <code>nativeValidation</code>{" "}
          в <code>true</code>, а остальная часть синтаксиса такая же, как для
          стандартной валидации.
        </p>
        <p>
          <b className={typographyStyles.note}>Note</b>: This feature has been
          removed in V4 due to low usage, but you can still use it in V3
        </p>
      </>
    ),
  },
  validationResolver: {
    title: "validationResolver",
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

        <p>
          <b className={typographyStyles.note}>Note:</b> this function will be
          cached inside the custom hook similar as <code>validationSchema</code>
          , while <code>validationContext</code> is a mutable object which can
          be changed on each re-render.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> re-validate input will
          only occur one field at time during user’s interaction, because the
          lib itself will evaluate the error object to the specific field and
          trigger re-render accordingly.
        </p>
      </>
    ),
  },
}
