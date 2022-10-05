import * as React from "react"
import { Link as NavLink } from "gatsby"
import colors from "../../../styles/colors"
import translateLink from "../../../components/logic/translateLink"
import Popup from "../../../components/Popup"
import CodeArea from "../../../components/CodeArea"
import useFieldArrayArgument from "../../../components/codeExamples/v6/useFieldArrayArgument"
import * as typographyStyles from "../../../styles/typography.module.css"
import * as buttonStyles from "../../../styles/button.module.css"
import code from "../../../components/codeExamples/defaultExample"

export default {
  title: "Documentación de la API",
  header: {
    description: "se enfoca en proveer la mejor DX simplificando la API.",
  },
  v5upgradeAlert: (
    <p>
      <span style={{ fontSize: 12 }}>►</span> Se libera React Hook Form V6. Si
      planea actualizar, lea la{" "}
      <NavLink to="/migrate-v5-to-v6">Guía de migración a V6</NavLink>.
    </p>
  ),
  useForm: {
    title: "useForm",
    intro: (
      <>
        Invocando <code>useForm</code>, recibirás los siguientes métodos{" "}
      </>
    ),
    description: (
      <p>
        <code>useForm</code> también tiene argumentos <b>opcionales</b>. El
        siguiente ejemplo muestra todos los valores de las opciones por defecto.
      </p>
    ),
    validationResolver: (goToSection) => (
      <>
        <p>
          Esta función de devolución de llamada le permite ejecutar cualquier
          esquema o personalizado validación. La función tiene la forma completa
          <code>values</code> como argumento, y deberá validar el resultado y
          devolver ambos <code>values</code> y <code>errors</code>. Lee mas en{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("validationResolver")}
          >
            validationResolver
          </button>
          sección.
        </p>
      </>
    ),
    validateContext: (
      <>
        <p>
          This context object will be injected into{" "}
          <code>validationResolver</code>'s second argument or Este objeto de
          contexto se inyectará en El segundo argumento de{" "}
          <code>validationResolver</code> o
          <a
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </a>
          objeto de contexto de validación.
        </p>
      </>
    ),
    validateCriteriaMode: (
      <>
        <p>
          El comportamiento predeterminado <code>firstError</code> realizará
          todas las validaciones de los campos y reunirá los primeros errores
          encontrados.
        </p>
        <p>
          Con la configuración seteada en <code>all</code>, se correran todas
          las validaciones de los campos y reunirá todos los errores
          encontrados.
        </p>
      </>
    ),
    validateOnSubmit: (
      <>
        La validación se activará en el evento <code>submit</code> y se
        adjuntarán event listeners en el <code>onChange</code> a los inputs
        inválidos, para volver a validarlos.
      </>
    ),
    validateOnBlur: (
      <>
        La validación se activará en el evento <code>blur</code>.
      </>
    ),
    validateOnChange: (
      <>
        La validación se activará en el evento <code>change</code> de cada
        input, lo que conducirá a multiples renderizaciones. NO es recomendado:
        Considera que es una mala práctica de performance.
      </>
    ),
    defaultValues: (goToSection) => (
      <>
        <p>
          Puedes setear el valor por defecto del input con{" "}
          <code>defaultValue/defaultChecked</code>{" "}
          <a
            className={buttonStyles.links}
            href="https://reactjs.org/docs/uncontrolled-components.html"
          >
            (lee más acerca de los valores por defecto en la documentación de
            React)
          </a>{" "}
          o utilizando <code>defaultValues</code> como argumento opcional para
          cargar los valores por defecto del formulario entero.
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
          <b className={typographyStyles.note}>Nota:</b> Los valores definidos
          en <code>defaultValues</code> serán inyectados en{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("watch")}
          >
            watch
          </button>{" "}
          como <code>defaultValue</code>.
        </p>

        <p>
          <b className={typographyStyles.note}>Nota:</b>{" "}
          <code>defaultValues</code> no se carga automáticamente con los inputs
          registrados manualmente (ej: <code>{`register('test')`}</code>) porque
          el input <code>registrado</code> manualmente no provee la{" "}
          <code>referencia</code> a React Hook Form.
        </p>
      </>
    ),
    validationSchema: (goToSection) => (
      <p>
        Aplica reglas de validación de formularios con <code>Yup </code>
        en el nivel de esquema, por favor refiérase a la sección{" "}
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
        Esta opción te permite configurar cuándo las entradas con errores son
        revalidadas (por defecto, la validación se activa cuando se cambia un
        input.) <Popup />
      </p>
    ),
    validationFields: (
      <p>
        Proporcionar un array de campos significa que solo los campos incluidos
        serán validados. Esta opción es útil cuando deseas alternar qué campos
        son necesarios para validar.
      </p>
    ),
    submitFocusError: (
      <>
        <p>
          Por defecto cuando un usuario envia un formulario y este contiene
          errores, el primer campo con un error sera el que obtenga el foco.
        </p>

        <p>
          <b className={typographyStyles.note}>Nota:</b> Solo funcionará con los
          inputs registrados con <code>ref</code>. En los inputos registrados
          manualmente no funcionará. ej:{" "}
          <code>{`register('test') // no funciona`}</code>{" "}
        </p>
      </>
    ),
    nativeValidation: (goToSection) => (
      <p>
        Seteando esta opción en <code>true</code> habilitará la validación
        nativa del navegador. Puedes{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
        >
          Puedes obtener más información sobre la validación nativa del
          navegador
        </a>
        , y consultar la sección de{" "}
        <button
          className={buttonStyles.codeAsLink}
          onClick={() => goToSection("nativeValidation")}
        >
          nativeValidation
        </button>{" "}
        para mas detalles y ejemplos.
      </p>
    ),
  },
  unregister: {
    title: "unregister",
    description: (
      <>
        <p>
          Este método te permitirá <code>desregistrar</code> un input en
          particular o un array de inputs. Esto es util cuando registras un
          input manualmente durante <code>useEffect</code>
          para desregistrarlo cuando se desmonte el componente.
        </p>
        <p>
          <b className={typographyStyles.note}>Nota:</b> Cuando desregistras un
          input, su valor ya no se incluirá en los datos del formulario que se
          envían.
        </p>
      </>
    ),
  },
  register: {
    title: "register",
    description: (
      <>
        <p>
          Este método te permite registar <code>referencias</code> de
          inputs/select y reglas de validación en React Hook Form.
        </p>
        <p>
          Las reglas de validación están basadas en el estandar HTML y también
          permite validación personalizada.
        </p>
        <p>
          <b className={typographyStyles.note}>Importante:</b> La propiedad{" "}
          <code>name</code> es <b>requerida</b>y debe ser <b>unica</b>. El
          nombre del input también permite en la sintaxis el uso de punto y
          corchetes, lo que permite crear fácilmente campos de formulario
          anidados. Abajo hay una tabla de ejemplo:
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
        Si estás trabajando con <code>arrays/array fields</code>, puedes asignar
        un nombre de input como <code>name[index]</code>.{" "}
        <a
          className={buttonStyles.links}
          href="https://github.com/react-hook-form/react-hook-form/blob/master/examples/FieldArray.tsx"
          title="Ejemplo de Field Array"
        >
          Consulta el ejemplo de Field Array
        </a>
        .
      </p>
    ),
    example: "Enviar Resultado",
    selectHelp:
      "Seleccionando la opción de registro, la tabla de API debajo se actualizará.",
    options: {
      title: "Opciones registradas",
      registerWithValidation: "Registro con validación",
      registerWithValidationMessage:
        "Registro con validación y mensaje de error",
      note: (goToSection) => (
        <>
          <h2 className={typographyStyles.title}>Registro personalizado</h2>
          <p>
            También puedes registrar inputs manualmente, lo cual es útil cuando
            trabajas con componentes personalizados y la referencia{" "}
            <code>Ref</code>
            no es accesible. Este es el caso cuando estas trabajando con React
            Native o componentes personalizados como
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
            Cuando utilizas un registro personalizado, necesitarás actualizar el
            valor del input con{" "}
            <button
              className={buttonStyles.codeAsLink}
              onClick={() => goToSection("setValue")}
            >
              setValue
            </button>
            , porque el input ya no es registrado con su referencia.
          </p>

          <p>
            <code
              className={typographyStyles.codeBlock}
            >{`register('firstName', { required: true, min: 8 })`}</code>
          </p>

          <p>
            <b className={typographyStyles.note}>Nota:</b> Si quieres que el
            input registrado manualmente dispare una renderización durante la
            actualización de su valor, entonces necesitarás asignar un tipo a tu
            input registrado.
          </p>

          <p>
            <code
              className={typographyStyles.codeBlock}
            >{`register({ name: 'firstName', type: 'custom' }, { required: true, min: 8 })`}</code>
          </p>

          <p>
            <b className={typographyStyles.note}>Nota:</b>múltiples radio input
            con el mismo nombre, desea registrar la validación hasta el último
            input para que el hook entienda validarlos como un grupo al final.
          </p>
        </>
      ),
    },
    validation: {
      required: (
        <>
          Un valor booleano que, si es verdadero, indica que el input debe tener
          un valor antes de que el formulario sea enviado. Puedes asignar una
          cadena de texto para retornar un mensaje de error en el objeto de{" "}
          <code>errores</code>.
        </>
      ),
      maxLength: "La longitud máxima del valor a aceptar para este input.",
      minLength: "La longitud mínima del valor a aceptar para este input.",
      max: "El valor máximo a aceptar para este input.",
      min: "El valor mínimo a aceptar para este input.",
      pattern: "El patrón regex para este input.",
      validate: `Puedes pasar una función callback commo argumento para validar, o puedes pasar un objeto de funciones callback para validar todas ellas. (consulta los ejemplos)`,
    },
  },
  formState: {
    title: "formState",
    description: (
      <>
        <p>Este objeto contiene informacioón sobre el estado del formulario.</p>

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
          <code>render</code> in order to enable the state update. Esta La
          función de reducción de la función de renderizado solo se aplica a la
          plataforma web debido a una falta de soporte en <code>Proxy</code> en
          React Native.
        </p>
      </>
    ),
    dirty:
      "Se setea en verdader luego que el usuario haya interactuado con algún input.",
    dirtyFields: "Un conjunto único de campos modificados por el usuario.",
    isSubmitted:
      "Se setea a verdadero luego que el usuario envia el formulario. Después del envío de un formulario, su estado permanecerá enviado hasta que se invoque con el método de reinicio.",
    touched: "Un objeto con todos los inputs con los que se interactuó.",
    isSubmitting: (
      <>
        Durante el envio del formulario se setea en <code>verdadero</code> y
        luego del envio se setea en <code>falso</code>
      </>
    ),
    submitCount: "Número de envios de formulario.",
    isValid: "Se setea en verdadero si no tiene ningún error.",
  },
  errors: {
    title: "errors",
    description: (currentLanguage) => (
      <>
        <p>
          Objeto que contiene los errores de formulario o los mensajes de error
          que pertenecen a cada input.
        </p>

        <p>
          <b className={typographyStyles.note}>Nota:</b> Puedes aprender más en{" "}
          <NavLink
            to={translateLink("/advanced-usage#ErrorMessage", currentLanguage)}
          >
            Mensaje de error
          </NavLink>{" "}
          de la página de uso avanzado.
        </p>
      </>
    ),
    types: (
      <>
        Esto es útil para validaciones de inputs como reglas de contraseña,
        cuando múltiples errores deben retornarse para un solo campo. Para
        habilitar esta función, asegúrese de haber configurado{" "}
        <code>validateCriteriaMode: 'all'</code>.
      </>
    ),
    message: `Message es un string vacio por defecto. Sin embargo, si registra la validación con un mensaje de error, se devolverá.`,
    ref: `Referencia del input.`,
    note: (goToSection) => (
      <p>
        <b className={typographyStyles.note}>Nota:</b> puede usar{" "}
        <button
          className={buttonStyles.codeAsLink}
          onClick={() => goToSection("ErrorMessage")}
        >
          ErrorMessage
        </button>{" "}
        para ayudar a manejar sus estados de erro
      </p>
    ),
  },
  watch: {
    title: "watch",
    description: (
      <>
        <p>
          Se observarán los inputs especificados y devolverá su valor, es útil
          para determinar qué renderizar.
        </p>

        <ul>
          <li>
            <p>
              Cuando <code>defaultValue</code> no es definido, el primer
              renderizado de <code>watch</code> retornará <code>undefined</code>{" "}
              porque es llamado antes de <code>register</code>, pero puedes
              setear el <code>defaultValue</code> como segundo argumento para
              retornar el valor.
            </p>
          </li>
          <li>
            <p>
              Sin embargo, si <code>defaultValues</code> fue pasado a{" "}
              <code>useForm</code> como argumento, entonces el primer
              renderizado retornará lo que se haya definido en{" "}
              <code>defaultValues</code>.
            </p>
          </li>
        </ul>
      </>
    ),
    tableTitle: {
      single: (
        <>
          Observa el valor de entrada por nombre (similar a la función
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://lodash.com/docs/4.17.15#get"
          >
            get
          </a>{" "}
          de lodash)
        </>
      ),
      multiple: "Observa multiples inputs",
      all: "Observa todos los inputs",
      nest: "Observa todos los inputs y retorna objetos anidados",
    },
  },
  handleSubmit: {
    title: "handleSubmit",
    description: (
      <>
        <p>
          Esta función pasará los datos del formulario cuando la validación haya
          sido exitosa Y puede ser invocada remotamente también.
        </p>
        <p>
          <code className={typographyStyles.codeBlock}>
            handleSubmit(onSubmit)()
          </code>
        </p>
        <p>
          <b className={typographyStyles.note}>Nota:</b> Puedes pasar una
          función <code>async</code> para realizar una validación asíncrona. ej:{" "}
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
          Esta función reseteará los valores de los campos y errores dentro del
          formulario. Al suministrar <code>omitResetState</code>, tiene la
          libertad de solo restablece un estado específico. Puedes pasar{" "}
          <code>valores</code> como argumento opcional para resetear el
          formulario a los valores asignados.
        </p>
        <p>
          <b className={typographyStyles.note}>Nota:</b> Para componentes
          controlados como <code>React-Select</code> que no exponen la{" "}
          <code>referencia</code>, necesitarás resetear el valor del input
          manualmente a través de{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("setValue")}
          >
            setValue
          </button>{" "}
          o utilizando{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("Controller")}
          >
            Controller
          </button>{" "}
          para wrappear tu componente controlado.
        </p>
        <p>
          <b className={typographyStyles.note}>Nota:</b> Necesitaras proporcione
          <code>defaultValues</code> durante <code>useForm</code> o
          <code>reset</code> con valor para restablecer
          <code>Controller</code>valor de los componentes.
        </p>
      </>
    ),
  }),
  setError: {
    title: "setError",
    description: (
      <>
        <p>La función te permite setear manualmente uno o varios errores.</p>
        <p>
          <b className={typographyStyles.note}> Nota:</b>: Este método no
          persistirá el error y bloqueará La acción de envío. Es más útil
          durante la función <code>handleSubmit</code> cuando desea dar
          comentarios de error a los usuarios después de la validación
          asíncrona.
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
            <code>undefined</code>: resetea todos los errores.
          </p>
        </li>
        <li>
          <p>
            <code>string</code>: resetea un único error.
          </p>
        </li>
        <li>
          <p>
            <code>string[]</code>: resetea múltiples errores.
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
          Esta función te permite setear dinámicamente los valores de
          input/select. Al mismo tiempo, trata de evitar renderizaciones cuando
          no son necesarias y solo bajo las siguientes condiciones:
        </p>
        <ul>
          <li>
            <p>Cuando un error es disparado por una actualización de valor.</p>
          </li>
          <li>
            <p>Cuando un error es corregido por una actualización de valor.</p>
          </li>
          <li>
            <p>
              Cuando setValue es invocado por primera vez y formState{" "}
              <code>dirty</code> está seteado en verdadero
            </p>
          </li>
          <li>
            <p>
              Cuando setValue is invocado y formState <code>touched</code> es
              actualizado.
            </p>
          </li>
        </ul>
        <p>
          <b className={typographyStyles.note}>Nota:</b> Invocando este método,{" "}
          <code>formState</code> agregara el <code>name</code> del input en{" "}
          <code>touched</code>.
        </p>
        <p>
          También puedes setear <code>shouldValidate</code> a <code>true</code>{" "}
          y esto disparará la validación del campo. ej:{" "}
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
          Esta función retornará todos los datos del formulario, y es útil en
          funciones en los que quieras retornar todo los valores del formulario.
        </p>

        <ul>
          <li>
            <p>
              Por defecto <code>getValues()</code> retornará los datos del
              formulario en una estructura plana. ej:{" "}
              <code>{`{ test: 'data', test1: 'data1'}`}</code>
            </p>
          </li>
          <li>
            <p>
              Trabajando en los campos de formulario definidos,{" "}
              <code>getValues({`{ nest: true }`})</code> retornará los datos en
              una estructura anidada de acuerdo al <code>name</code> del input.
              ej: <code>{`{ test: [1, 2], test1: { data: '23' } }`}</code>
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
        <p>
          Para activar manualmente una validación de input/select en el
          formulario.
        </p>
        <p>
          <b className={typographyStyles.note}>Nota:</b> Cuando la validación
          falla, el objeto <code>errors</code> se actualizará.
        </p>
      </>
    ),
  },
  validationSchema: {
    title: "validationSchema",
    description: (
      <p>
        Si quieres centralizar tus reglas de validación con una librería de
        validación de esquemas, puedes setear <code>validationSchema</code> en{" "}
        <code>useForm</code> como argumento opcional. React Hook Form
        actualmente soporta{" "}
        <a
          className={buttonStyles.links}
          href="https://github.com/jquense/yup"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yup
        </a>{" "}
        para validación de esquema de objeto.
      </p>
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
          <td>Nombre único de tu input.</td>
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
            Componente controlado. ej: <code>as="input"</code> or{" "}
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
          <td>✓</td>
          <td>
            El objeto <code>control</code> es obtenido al invocar{" "}
            <code>useForm</code>.
          </td>
        </tr>
        <tr>
          <td>
            <code>defaultValue</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>any</code>
          </td>
          <td></td>
          <td>
            Lo mismo que el <code>defaultValue</code> de componentes no
            controlados, cuando se setea un valor <code>booleano</code>, es
            tratado como un checkbox input.
            <p>
              <b className={typographyStyles.note}>Nota:</b> necesitaras
              proporcione <code>defaultValue</code> o
              <code>defaultValues​​</code> en <code>useForm</code>
            </p>
            <p>
              <b className={typographyStyles.note}>Note</b>: si tu formulario lo
              hará invoque <code>reset</code> con diferentes valores, deberá
              proporcionar <code>defaultValues​​</code> en el nivel useForm en
              lugar de set
              <code>defaultValue</code> en línea.
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
          <td></td>
          <td>
            Reglas de validación conforme a <code>register</code>.
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
          <td></td>
          <td>
            Esta propiedad <code>onChange</code> te permitirá customizar el
            valor de retorno, asegúrese de conocer la forma de los accesorios
            del componente externo <code>value</code>.
          </td>
        </tr>
        <tr>
          <td>
            <code>onChangeName</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>string</code>
          </td>
          <td></td>
          <td>
            Esta propiedad te permite setear el nombre onChange específico del
            objeto wrappeado, por ejemplo, cuando el evento{" "}
            <code>onChange</code> se llama <code>onTextChange</code>
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
              Esta devolución de llamada permite que el enlace personalizado se
              centre en la entrada cuando hay un error. Esta función es
              aplicable para React y Componentes React-Native siempre que puedan
              enfocarse.
            </p>
            <p>
              <a
                href="https://codesandbox.io/s/react-hook-form-controllerautofocus-v5-un45f"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aquí hay un ejemplo de trabajo.
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
          <td></td>
          <td>
            Esta propiedad te permite setear el nombre onBlur específico del
            objeto wrappeado, por ejemplo, cuando el evento <code>onBlur</code>
            se llama <code>onTextBlur</code>
          </td>
        </tr>
      </tbody>
    ),
    description: (
      <>
        <p>
          React Hook Form fomenta el uso de componentes no controlados e inputs
          nativos, sin embargo es dificil evitar trabajar con componentes
          controlados externos como{" "}
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
          y{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://mui.com/">
            MUI
          </a>
          . Este componente los envuelve para que trabajar con ellos sea más
          sencillo.
        </p>
      </>
    ),
  },
  useFormContext: {
    title: "useFormContext",
    introduction: (
      <p>
        Form context está destinado a resolver el problema cuando hay inputs
        anidados profundamente en el árbol de componentes y pasar métodos hasta
        el fondo como
        <code>propiedades</code>se vuelve tedioso.
      </p>
    ),
    description: (
      <>
        <p>
          Una vez que el formulario es wrappeado con <code>FormContext</code>,
          la <code className={typographyStyles.typeText}>function</code>{" "}
          <code>useFormContext</code>
          puede ser invocada desde sus componentes hijos.
        </p>
        <p>
          <b className={typographyStyles.note}>Nota:</b> Al invocar{" "}
          <code>useFormContext</code> tendrás acceso a todas las funciones del
          hook <code>useForm</code>.
        </p>
      </>
    ),
  },
  control: {
    title: "control",
    description: (
      <p>
        Este objeto está hecho para el Controller de React Hook Form, contiene
        métodos para registrar componentes controlados en React Hook Form.
      </p>
    ),
  },
  ErrorMessage: {
    title: "ErrorMessage",
    description: (
      <p>
        Un componente simple para representar el mensaje de error del input
        asociado.
      </p>
    ),
    table: {
      name: <>Nombre de campo asociado.</>,
      errors: (
        <>
          Objeto <code>errors</code> de React Hook Form
        </>
      ),
      message: <>mensaje de error en línea.</>,
      as: (
        <>
          Componente wrappeado o un tag HTML. ej: <code>as="span"</code> o{" "}
          <code>{`as={<Text />}`}</code>
        </>
      ),
      children: (
        <>
          This is a{" "}
          <a
            href="https://reactjs.org/docs/render-props.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            render prop
          </a>{" "}
          for rendering error message or messages.
          <p>
            <b className={typographyStyles.note}>Note:</b> you need to set{" "}
            validateCriteriaMode to 'all' for using <code>messages</code>.
          </p>
        </>
      ),
    },
  },
  NativeValidation: {
    title: "Validación nativa del navegador",
    description: (
      <>
        <p>
          El siguiente ejemplo muestra cómo puedes aprovechar la validación
          nativa del navegador. Solo necesitas establecer{" "}
          <code>nativeValidation</code> en
          <code>true</code> y el resto de la sintaxis es la misma que la
          validación estándar.
        </p>
        <p>
          <b className={typographyStyles.note}>Note</b>: This feature has been
          removed in V4 due to low usage, but you can still use it in V3
        </p>
      </>
    ),
  },
  useFieldArray: {
    title: "useFieldArray",
    description: (
      <>
        <p>
          Un hook customizado para trabajar con Field Arrays no-controlados
          (inputs dinámicos). La razón detrás de este hook es proveer una mejor
          experiencia de uso y performance de los formularios. Puedes mirar{" "}
          <a
            href="https://www.youtube.com/watch?v=Q7lrHuUfgIs"
            target="_blank"
            rel="noopener noreferrer"
          >
            este corto video
          </a>{" "}
          para comparar Field Arrays controlados vs. no-controlados.
        </p>

        <p>Este hook provee el siguiente objeto y funciones.</p>

        <CodeArea rawData={useFieldArrayArgument} />

        <p>
          <b className={typographyStyles.note}>Important: </b>
          <code>useFieldArray</code> está construido sobre componentes no
          controlados. Las siguientes notas lo ayudarán a conocer y tener en
          cuenta su comportamiento durante la implementación.
        </p>

        <ul>
          <li>
            <p>
              puedes inicializar los (campos) <code>fields</code> seteando{" "}
              <code>defaultValues</code> en <code>useForm</code> hook.
            </p>
          </li>
          <li>
            <p>
              asegurate de asignar el <code>id</code> del objeto{" "}
              <code>fields</code> como la key de tu componente.
            </p>
          </li>
          <li>
            <p>
              make sure to set <code>defaultValue</code> to{" "}
              <code>fields[index]</code> when you want to set default value,
              remove or reset with inputs.
            </p>
          </li>
          <li>
            <p>
              no puedes llamar acciones una tras otra. Las acciones deben ser
              activado por render.
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
            <p>
              It's <strong>important</strong> to apply{" "}
              <code>{`ref={register()}`}</code> instead of{" "}
              <code>{`ref={register}`}</code> when working with{" "}
              <code>useFieldArray</code> so <code>register</code> will get
              invoked during <code>map</code>.
            </p>
          </li>
          <li>
            <p>
              No funciona con registro personalizado en <code>useEffect</code>.
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
            Este objeto es la fuente de la verdad para mapear y representar
            entradas.
            <p>
              <b className={typographyStyles.note}>Importante: </b> debido a que
              las entradas pueden ser no-controladas, se requiere{" "}
              <code>id</code>con componentes mapeados para ayudar a React a
              identificar qué elementos se han cambiado, agregado o eliminado.
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
            <code className={typographyStyles.typeText}>
              (obj: object) =&gt; void
            </code>
          </td>
          <td>Agregue input/inputs al final de los campos</td>
        </tr>
        <tr>
          <td>
            <code>prepend</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (obj: object) =&gt; void
            </code>
          </td>
          <td>Antepone input/inputs al comienzo de tus campos</td>
        </tr>
        <tr>
          <td>
            <code>insert</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (index: number, value: object) =&gt; void
            </code>
          </td>
          <td>Inserta input/inputs en una posición en particular.</td>
        </tr>
        <tr>
          <td>
            <code>swap</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (from: number, to: number) =&gt; void
            </code>
          </td>
          <td>Intercambia las posiciones de los input/inputs.</td>
        </tr>
        <tr>
          <td>
            <code>move</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (from: number, to: number) =&gt; void
            </code>
          </td>
          <td>
            Mueve los input/inputs a otra posición.
            <p>
              <b className={typographyStyles.note}>Nota:</b> la diferencia entre{" "}
              <code>move</code> y <code>swap</code>, si continuas llamando a{" "}
              <code>move</code> pusheara input/inputs en circulo, mientras que{" "}
              <code>swap</code> solo intercambiará las posiciones de dos
              input/inputs.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>remove</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (index?: number | number[]) =&gt; void
            </code>
          </td>
          <td>
            Elimina input/inputs en una posición en particular, or elimina todos
            cuando no se proporciona un index.
          </td>
        </tr>
      </>
    ),
  },
  validationResolver: {
    title: "validationResolver",
    description: (
      <>
        <p>
          Esta función le permite ejecutar cualquier método de validación
          externo, tal como{" "}
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
          y etc. De hecho, el objetivo no es solo limitado Sí como nuestro
          externo (esquema) biblioteca de validación. Nos gustaría apoyar a
          muchos otros bibliotecas de validación para trabajar con React Hook
          Form. Incluso puedes escribir su lógica de validación personalizada
          para validar.
        </p>

        <p>
          <b className={typographyStyles.note}>Nota:</b> asegúrate de que eres
          devolver objeto que contiene <code>values</code> y <code>errors</code>
          , y su valor predeterminado debe ser un objeto vacío{" "}
          <code>{`{}`}</code>.
        </p>

        <p>
          <b className={typographyStyles.note}>Nota:</b> errores de retorno La
          clave del objeto debe ser relevante para sus entradas.
        </p>

        <p>
          <b className={typographyStyles.note}>Nota:</b> esta función se
          almacenará en caché dentro del enlace personalizado, similar a{" "}
          <code>validationSchema</code>, mientras que{" "}
          <code>validationContext</code> es un objeto mutable que se puede
          cambiar en cada representación.
        </p>

        <p>
          <b className={typographyStyles.note}>Nota:</b> volver a validar la
          entrada solo ocurre un campo a la vez durante la interacción del
          usuario, porque el lib mismo evaluará el objeto de error en el campo
          específico y desencadenar re-renderizar en consecuencia.
        </p>
      </>
    ),
  },
}
