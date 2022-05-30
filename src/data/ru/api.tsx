import * as React from "react"
import colors from "../../styles/colors"
import CodeArea from "../../components/CodeArea"
import useFieldArrayArgument from "../../components/codeExamples/useFieldArrayArgument"
import generic from "../generic"
import * as typographyStyles from "../../styles/typography.module.css"
import * as buttonStyles from "../../styles/button.module.css"
import * as tableStyles from "../../styles/table.module.css"

export default {
  title: "Документация по API",
  header: {
    description:
      "сфокусирован на предоставлении лучшего опыта разработки за счет упрощения API.",
  },
  useForm: {
    title: "useForm",
    description: (
      <p>
        <code>useForm</code> также имеет <b>необязательные</b> аргументы. В
        следующем примере приведены значения по умолчанию для всех параметров.
      </p>
    ),
    validationResolver: (goToSection) => (
      <>
        <p>
          Эта функция обратного вызова позволяет запускать любую схему или
          пользовательские Проверка. Функция имеет всю форму{" "}
          <code>values ​​</code> как аргумент, и вам нужно будет проверить
          результат и вернуть оба <code>значения</code> и <code>ошибки</code>.
          Узнайте больше на кнопка
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("validationResolver")}
          >
            validationResolver
          </button>{" "}
          раздел.
        </p>
      </>
    ),
    validateContext: (
      <>
        <p>
          Этот контекстный объект будет внедрен в <code>resolver</code>
          Второй аргумент или{" "}
          <a
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </a>{" "}
          объект контекста проверки.
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
    validationOnTouched: (
      <>
        Проверка будет срабатывать до тех пор, пока не будет нажата кнопка
        ввода.
      </>
    ),
    validationOnAll: (
      <>
        Валидация активируется в событиях <code>blur</code> и{" "}
        <code>change</code>. Предупреждение: как и в режиме{" "}
        <code>onChange</code>, <code>all</code>
        может оказать существенное влияние на производительность.
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
        поле).
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
    shouldUnregister: (
      <p>
        По умолчанию, когда входные данные удаляются, React Hook Form использует{" "}
        <code>MutationObserver</code> для обнаружения и{" "}
        <code>отмены регистрации</code> тех входных данных, которые отключаются.
        Однако вы можете установить для <code>shouldUnregister</code> значение{" "}
        <code>false</code>, чтобы предотвратить потерю состояния ввода из-за
        размонтирования.
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
    isSubmitSuccessful: <p>Укажите, что форма успешно заполнена.</p>,
    isDirty: "Устанавливается в true после изменения любого поля.",
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
    isValidating: (
      <>
        Установите значение <code>true</code> во время проверки.
      </>
    ),
  },
  errors: {
    title: "errors",
    description: () => (
      <>
        <p>
          Объект, содержащий ошибки формы или сообщения об ошибках для каждого
          поля.
        </p>
      </>
    ),
    types: (
      <>
        Это полезно для проверки входных данных, таких как правила пароля,
        которые должны возвращать несколько ошибок для одного поля. Чтобы
        включить эту функцию, убедитесь, что вы установили{" "}
        <code>criteriaMode 'all'</code>.
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
      callback: "Наблюдение за всеми полями",
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
          <code>omitResetState</code>, вы можете свободно только сбросить
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
          укажите <code>defaultValues ​​</code> во время <code>useForm</code>
          или<code>reset</code> со значением для сброса
          <code>Controller</code>стоимость компонентов.
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

        <ul>
          <li>
            Этот метод не сохранит связанную ошибку ввода, если ввод пройти
            проверку.
          </li>
          <li>
            Установите ошибку, которая не связана с полем ввода будет сохранить
            и требуется удалить вручную с помощью <code>clearErrors</code>.
          </li>
          <li>
            Это полезно во время функции <code>handleSubmit</code>, когда вы
            хотите дать сообщение об ошибке пользователям после асинхронной
            проверки.
          </li>
        </ul>
      </>
    ),
  },
  clearError: {
    title: "clearErrors",
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
              <code>isDirty</code> установлен в true
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
        </p>

        <CodeArea
          rawData={`setValue('name', 'value', { shouldValidate: true })`}
          withOutCopy
        />

        <p>
          Вы также можете установить для параметра <code>shouldDirty</code>{" "}
          значение <code>true</code>, чтобы задать для поля значение dirty.
        </p>

        <CodeArea
          rawData={`setValue('name', 'value', { shouldDirty: true })`}
          withOutCopy
        />
      </>
    ),
  },
  getValues: {
    title: "getValues",
    description: (
      <>
        <p>
          Эта функция поможет вам прочитать значения формы. Разница между{" "}
          <code>watch</code> это <code>getValues ​​</code> не сработает повторно
          сделать или подписаться на входные изменения. Функции охватывает:
        </p>

        <ul>
          <li>
            <p>
              <code>getValues ​​('test')</code>: считывает индивидуальное
              входное значение по
              <strong>name</strong>.
            </p>
          </li>
          <li>
            <p>
              <code>getValues('test')</code>: считывает индивидуальное входное
              значение по
              <strong>name</strong>.
            </p>
          </li>
          <li>
            <p>
              <code>getValues(['test', 'test1'])</code>: считывание нескольких
              входов
              <strong>names</strong>.
            </p>
          </li>
        </ul>
      </>
    ),
  },
  trigger: {
    title: "trigger",
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
          Пользовательский хук для работы с неуправляемыми массивами полей
          (динамический входы). Мотивация этого крючка состоит в том, чтобы
          обеспечить лучшего пользователя опыт и форма исполнения. Вы можете
          посмотреть{" "}
          <a
            href="https://www.youtube.com/watch?v=Q7lrHuUfgIs"
            target="_blank"
            rel="noopener noreferrer"
          >
            this short video
          </a>{" "}
          {""}
          сравнить контролируемый и неконтролируемый массив полей.
        </p>

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <thead>
              <tr>
                <th>{generic.name.ru}</th>
                <th width="140px">{generic.type.ru}</th>
                <th width="90px">{generic.required.ru}</th>
                <th>{generic.description.ru}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>name</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>string</code>
                </td>
                <td></td>
                <td>
                  <>имя связанного поля.</>
                </td>
              </tr>
              <tr>
                <td>
                  <code>control</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>Object</code>
                </td>
                <td></td>
                <td>{generic.control.ru}</td>
              </tr>
              <tr>
                <td>
                  <code>keyName</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>
                    string = 'id'
                  </code>
                </td>
                <td></td>
                <td>
                  массив <code>ключ</code>, значение по умолчанию «id», вы
                  можете измените имя ключа.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeArea rawData={useFieldArrayArgument} />

        <p>
          <b className={typographyStyles.note}>Important: </b>{" "}
          <code>useFieldArray</code> построен на основе неконтролируемых
          компонентов. Следующие заметки помогут вам осознать и помнить его
          поведение во время реализации.
        </p>

        <ul>
          <li>
            <p>
              Вы можете заполнить поля, указав {""}
              <code>defaultValues</code> в ловушке <code>useForm</code>.
            </p>
          </li>
          <li>
            <p>
              убедитесь, что вы присвоили <code>id</code> из <code>fields</code>{" "}
              {""}
              объект как ключ компонента.
            </p>
          </li>
          <li>
            <p>
              установите <code>defaultValue</code>, если вы хотите установить
              значение по умолчанию или сброс с помощью входов.
            </p>
          </li>
          <li>
            <p>
              Вы не можете называть действия одно за другим. Действия должны
              быть срабатывает при рендере.
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
            <strong> важно </strong> подать заявку {""}
            <code>{`ref = {register ()}`}</code> вместо {""}
            <code>{`ref = {register}`}</code> при работе с {""}
            <code>useFieldArray</code>, поэтому будет вызван{" "}
            <code>register</code>
            во время <code>map</code>.
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
            Этот объект является источником правды для отображения и отображения
            входных данных.
            <p>
              <b className={typographyStyles.note}>Important: </b>
              потому что каждый входы могут быть неуправляемыми, <code>
                id
              </code>{" "}
              требуется с сопоставленные компоненты, чтобы помочь React
              определить, какие элементы были изменены, добавлены или удалены.
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
                (obj: object | object[], shouldFocus?: boolean = true) =&gt;
                void
              </code>
            </code>
          </td>
          <td>Добавьте ввод / ввод в конец ваших полей</td>
        </tr>
        <tr>
          <td>
            <code>prepend</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (obj: object | object[], shouldFocus?: boolean = true) =&gt;
                void
              </code>
            </code>
          </td>
          <td>Pповторить ввод / ввод в начало ваших полей</td>
        </tr>
        <tr>
          <td>
            <code>insert</code>
          </td>
          <td>
            <code>
              <code className={typographyStyles.typeText}>
                (index: number, value: object, shouldFocus?: boolean = true)
                =&gt; void
              </code>
            </code>
          </td>
          <td>Вставьте вход / вход в определенную позицию.</td>
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
          <td>Поменяйте местами вход / выход.</td>
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
            Переместите вход / вход в другую позицию.
            <p>
              <b className={typographyStyles.note}> Примечание. </b> разница
              между <code>move</code> и <code>swap</code>, продолжайте звонить{" "}
              <code>move</code> будет помещать ввод / ввод в цикл, тогда как{" "}
              <code>swap</code> меняет только две позиции ввода / ввода.
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
            Удалить вход / вход в определенной позиции или удалить все, когда
            нет индекс предоставляется.
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
            <code className={typographyStyles.typeText}>React.ElementType</code>
          </td>
          <td></td>
          <td>
            Контроллер вставит <code>onChange</code>, <code>onBlur</code> и{" "}
            <code>value</code> вставляется в компонент.
            <CodeArea
              withOutCopy
              url="https://codesandbox.io/s/react-hook-form-v6-controller-ts-4dpm9"
              rawData={`<Controller 
  as={<TextInput />} 
  control={control} 
  name="test" 
/>
<Controller 
  as={TextInput} 
  control={control} 
  name="test" 
/>`}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>render</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Function</code>
          </td>
          <td></td>
          <td>
            Это
            <a
              href="https://reactjs.org/docs/render-props.html"
              target="blank"
              rel="noopener noreferrer"
            >
              оказывать опору
            </a>
            , Функция, которая возвращает элемент React и предоставляет
            возможность прикрепить события и значения в компонент. Это позволяет
            легко интегрировать с внешним контролируемым компонентом с
            нестандартными опорами name: <code>onChange</code>,{" "}
            <code>onBlur</code> и <code>value</code>..
            <CodeArea
              withOutCopy
              url="https://codesandbox.io/s/react-hook-form-v6-controller-ts-4dpm9"
              rawData={`<Controller
                  control={control}
                  name='test'
                  render={({ onChange, onBlur, value }) => (
                    <Input
                      onTextChange={onChange}
                      onTextBlur={onBlur}
                      textValue={value}
                    />
                  )}
                />
                <Controller render={props => <Input {...props} />} />`}
            />
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
          <td>{generic.control.ru}</td>
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
              <b className={typographyStyles.note}>Note</b>: если ваша форма
              будет вызовите <code>reset</code> с другими значениями, вам нужно
              предоставить <code>defaultValues ​​</code> на уровне useForm
              вместо набора встроенный <code>defaultValue</code>.
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
            <ul>
              <li>
                Локальное состояние: ввод <code>register</code> с обновленной
                проверкой правила или <code>unregister</code> на{" "}
                <code>useEffect</code> и позволить <code>Controller</code>{" "}
                перерегистрировать себя с обновленными <code>rules</code>.
              </li>
              <li>
                Состояние ввода: используйте функцию <code>validate</code> с{" "}
                <code>getValues​​</code> для условного возврата проверки.
              </li>
            </ul>
            <CodeArea
              url="https://codesandbox.io/s/controller-rules-8pd7z?file=/src/App.tsx"
              withOutCopy
              rawData="
register('name', { required: state })
validate: (value) => value === getValues('firstName');"
            />
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
                href="https://codesandbox.io/s/react-hook-form-controllerautofocus-v6-eeo66"
                target="_blank"
                rel="noopener noreferrer"
              >
                Вот рабочий пример.
              </a>
              .
            </p>
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
          Как только ваша форма обёрнута в <code>FormProvider</code>, то{" "}
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
          используете FormProvider.
        </>
      ),
      message: <>встроенное сообщение об ошибке.</>,
      as: (
        <>
          Компонент-обёртка или HTML тэг. Например: <code>as="span"</code> или{" "}
          <code>{`as={<Text />}`}</code>
        </>
      ),
      render: (
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
            criteriaMode to 'all' for using <code>messages</code>.
          </p>
        </>
      ),
    },
  },
  resolver: {
    title: "resolver",
    description: (
      <>
        <p>
          Эта функция позволяет запускать любые внешние методы проверки, такие
          как в виде{" "}
          <a
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </a>
          ,{" "}
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
          и т. д. На самом деле цель не ограничивается только Yup, как наши
          внешние (схема) проверки библиотеки. Мы хотели бы поддержать многие
          другие проверочные библиотеки для работы с React Hook Form. Вы даже
          можете написать вашу пользовательскую логику проверки для
          подтверждения.
        </p>

        <p>
          Мы официально поддерживаем Yup, Joi и Superstruct как 
          <a
            href="https://github.com/react-hook-form/react-hook-form-resolvers"
            target="blank"
            rel="noopener noreferrer"
          >
            стандартные резольверы
          </a>
          .
        </p>

        <code
          style={{
            fontSize: 16,
            padding: 15,
            background: "#191d3a",
            color: "white",
            borderRadius: 4,
            display: "block",
          }}
        >
          npm install @hookform/resolvers
        </code>

        <p>примечания по созданию пользовательских распознавателей:</p>

        <ul>
          <li>
            <p>
              убедитесь, что вы возвращаете объект, который содержит {""}
              <code>values ​​</code> и <code>error</code> и их значения по
              умолчанию значение должно быть <code>{`{}`}</code>.
            </p>
          </li>

          <li>
            <p>
              возвращающий ошибки ключ объекта должен соответствовать вашим
              входам.
            </p>
          </li>

          <li>
            <p>
              эта функция будет кэшироваться внутри пользовательского хука, а{" "}
              {""}
              <code>context</code> - это изменяемый объект, который можно
              изменить каждый рендер.
            </p>
          </li>

          <li>
            <p>
              повторная проверка ввода будет происходить только одно поле за раз
              в течение взаимодействие, потому что сама библиотека будет
              оценивать объект ошибки в конкретное поле и триггер рендеринга
              соответственно.
            </p>
          </li>
        </ul>
      </>
    ),
  },
  useWatch: {
    title: "useWatch",
    description: (
      <p>
        Используйте те же функции, что и API <code>watch</code>, однако это
        будет изолировать повторный рендеринг на уровне вашего компонента и
        потенциально приведет к лучшая производительность для вашего приложения.
      </p>
    ),
  },
  useController: {
    title: "useController",
    description: (
      <>
        <p>
          Этот пользовательский крючок является то, что полномочия{" "}
          <code>Controller</code>, и акции те же реквизиты и методы, что и{" "}
          <code>Controller</code>. Полезно создать многократно используемый
          управляемый вход, в то время как <code>Controller</code> - это гибкая
          опция, позволяющая перейти на вашу страницу или форму.
        </p>
        <p>
          Пожалуйста, обратитесь к разделу <code>Controller</code> для этого
          крючка аргументы. Он разделяет одни и те же аргументы, за исключением{" "}
          <code>as</code> и ".
          <code>рендеры</code>.
        </p>
      </>
    ),
  },
}
