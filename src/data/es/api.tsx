import * as React from "react"
import colors from "../../styles/colors"
import CodeArea from "../../components/CodeArea"
import useFieldArrayArgument from "../../components/codeExamples/useFieldArrayArgument"
import * as typographyStyles from "../../styles/typography.module.css"
import * as buttonStyles from "../../styles/button.module.css"
import * as tableStyles from "../../styles/table.module.css"
import generic from "../generic"

export default {
  title: "Documentación de la API",
  header: {
    description: "Se enfoca en proveer la mejor DX simplificando la API.",
  },
  useForm: {
    title: "useForm",
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
          Este objeto de contexto se inyectará en el segundo argumento del
          resolutor o en el objeto de contexto de validación{" "}
          <a
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </a>
          .
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
          Con la configuración configurada en <code>all</code>, se correran
          todas las validaciones de los campos y reunirá todos los errores
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
    validationOnAll: (
      <>
        La validación se activará en <code>blur</code> y <code>change</code>{" "}
        eventos. Advertencia: como con el <code>onChange</code> modo,{" "}
        <code>all</code> puede tener un impacto significativo en el rendimiento.
      </>
    ),
    validationOnTouched: (
      <>La validación se activará hasta que se toque la entrada.</>
    ),
    defaultValues: (goToSection) => (
      <>
        <p>
          Puedes configurar el valor por defecto del input con{" "}
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
          <b className={typographyStyles.note}>Importante:</b>{" "}
          <code>defaultValues</code> es cacheado dentro del custom hook, si tú
          quieres reiniciar los valores <code>defaultValues</code> por favor usa{" "}
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
        Aplica reglas de validación de formularios con <code>Yup</code>
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
        input.)
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
          errores, el primer campo con un error será el que obtenga el foco.
        </p>

        <p>
          <b className={typographyStyles.note}>Nota:</b> Solo funcionará con los
          inputs registrados con <code>ref</code>. En los inputs registrados
          manualmente no funcionará. ej:{" "}
          <code>{`register('test') // no funciona`}</code>{" "}
        </p>
      </>
    ),
    shouldUnregister: (
      <p>
        De forma predeterminada, cuando se eliminan las entradas, React Hook
        Form utiliza <code>MutationObserver</code> para detectar y{" "}
        <code>anular el registro</code> aquellas entradas que se desmontan. Sin
        embargo, puede establecer <code>shouldUnregister</code> en{" "}
        <code>false</code> para evitar la pérdida del estado de entrada debido
        al desmontaje.
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

          <CodeArea
            rawData={`setValue('name', 'value', { shouldValidate: true })`}
            withOutCopy
          />

          <p>
            También puede establecer el parámetro <code>shouldDirty</code> en
            <code>true</code> para configurar el campo como sucio.
          </p>

          <CodeArea
            rawData={`setValue('name', 'value', { shouldDirty: true })`}
            withOutCopy
          />
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
      validate: `Puedes pasar una función callback como argumento para validar, o puedes pasar un objeto de funciones callback para validar todas ellas. (consulta los ejemplos)`,
    },
  },
  formState: {
    title: "formState",
    description: (
      <>
        <p>Este objeto contiene información sobre el estado del formulario.</p>

        <p>
          <b className={typographyStyles.note}>Importante:</b>{" "}
          <code>formState</code> es envuelto con{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Proxy
          </a>{" "}
          para mejorar el rendimiento, tambien se puede hacer invocando antes un
          <code>render</code> con este orden es capaz de actualizar el estado.
          Esta es una función de la reducción del renderizado solo se aplica a
          la plataforma web debido a una falta de soporte en <code>Proxy</code>{" "}
          en React Native.
        </p>
      </>
    ),
    isSubmitSuccessful: (
      <p>Indique que el formulario se ha presentado con éxito.</p>
    ),
    isDirty:
      "Se configura un verdader luego que el usuario haya interactuado con algún input.",
    dirtyFields: "Un conjunto único de campos modificados por el usuario.",
    isSubmitted:
      "Se configura a verdadero luego que el usuario envia el formulario. Después del envío de un formulario, su estado permanecerá enviado hasta que se invoque con el método de reinicio.",
    touched: "Un objeto con todos los inputs con los que se interactuó.",
    isSubmitting: (
      <>
        Durante el envio del formulario se configura en <code>verdadero</code> y
        luego del envio se configura en <code>falso</code>
      </>
    ),
    submitCount: "Número de envios de formulario.",
    isValid: "Se configura un verdadero si no tiene ningún error.",
    isValidating: (
      <>
        Poner en <code>verdadero</code> durante la validación.
      </>
    ),
  },
  errors: {
    title: "errors",
    description: () => (
      <>
        <p>
          Objeto que contiene los errores de formulario o los mensajes de error
          que pertenecen a cada input.
        </p>
      </>
    ),
    types: (
      <>
        Esto es útil para validaciones de inputs como reglas de contraseña,
        cuando múltiples errores deben retornarse para un solo campo. Para
        habilitar esta función, asegúrese de haber configurado{" "}
        <code>criteriaMode 'all'</code>.
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
              configurar el <code>defaultValue</code> como segundo argumento
              para retornar el valor.
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
          Observa el valor de entrada por nombre (similar a la función {""}
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
      callback: "Observa todos los inputs",
    },
  },
  handleSubmit: {
    title: "handleSubmit",
    description: (
      <>
        <p>
          Esta función pasará los datos del formulario cuando la validación haya
          sido exitosa y puede ser invocada remotamente también.
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
          para envolver tu componente controlado.
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
        <ul>
          <li>
            <p>
              Este método no persistirá el error de entrada asociado si la
              entrada pasar validación.
            </p>
          </li>
          <li>
            <p>
              Establecer un error que no esté asociado con un campo de entrada
              será persiste y es necesario eliminarlo manualmente con{" "}
              <code>clearErrors</code>.
            </p>
          </li>
          <li>
            <p>
              Es útil durante la función <code>handleSubmit</code> cuando desea
              dar comentarios de error a los usuarios después de la validación
              asíncrona.
            </p>
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
          Esta función te permite configurar dinámicamente los valores de
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
              <code>isDirty</code> está configurado en verdadero
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
          Esta función lo ayudará a leer los valores de los formularios. La
          diferencia entre <code>watch</code> es <code>getValues ​​</code> no se
          activará volver a procesar o suscribirse a los cambios de entrada. Las
          funciones cubren:
        </p>

        <ul>
          <li>
            <p>
              <code>getValues ​​()</code>: lea valores de formulario completos.
            </p>
          </li>
          <li>
            <p>
              <code>getValues​​('test')</code>: lea el valor de entrada
              individual por <strong>name</strong>.
            </p>
          </li>
          <li>
            <p>
              <code>getValues​​(['test', 'test1'])</code>: lee múltiples
              entradas por <strong>name</strong>.
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
            <code>control</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Object</code>
          </td>
          <td>✓</td>
          <td>{generic.control.es}</td>
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
            El controlador inyectará <code>onChange</code>, <code>onBlur</code>{" "}
            y <code>value</code> apoyos en el componente.
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
            Esto es un{" "}
            <a
              href="https://reactjs.org/docs/render-props.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              render prop
            </a>
            . Una función que devuelve un elemento React y proporciona la
            capacidad de adjunte eventos y valor al componente. Esto hace que
            sea fácil integrarse con un componente controlado externo con
            accesorios no estándar nombre: <code>onChange</code>,{" "}
            <code>onBlur</code> y<code>value</code>.
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
              lugar de set <code>defaultValue</code> en línea.
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
            <ul>
              <li>
                Estado local: entrada <code>register</code> con validación
                actualizada reglas o <code>unregister</code> en{" "}
                <code>useEffect</code> y dejar que <code>Controller</code> se
                vuelva a registrar con las <code>rules</code> actualizadas.
              </li>
              <li>
                Estado de entrada: aproveche la función <code>validate</code>{" "}
                con <code>getValues​​</code> para devolver su validación
                condicionalmente.
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
              Esta devolución de llamada permite que el enlace personalizado se
              centre en la entrada cuando hay un error. Esta función es
              aplicable para React y Componentes React-Native siempre que puedan
              enfocarse.
            </p>
            <p>
              <a
                href="https://codesandbox.io/s/react-hook-form-controllerautofocus-v6-eeo66"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aquí hay un ejemplo de trabajo.
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
        el fondo como {""}
        <code>propiedades</code> se vuelve tedioso.
      </p>
    ),
    description: (
      <>
        <p>
          Una vez que el formulario es envuelto con <code>FormProvider</code>,
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
      render: (
        <>
          Esto es un{" "}
          <a
            href="https://reactjs.org/docs/render-props.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            render prop
          </a>{" "}
          para rendericación de mensajes o errores.
          <p>
            <b className={typographyStyles.note}>Nota:</b> Necesitas usar{" "}
            criteriaMode para 'all' para usar <code>messages</code>.
          </p>
        </>
      ),
    },
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

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <thead>
              <tr>
                <th>{generic.name.en}</th>
                <th width="140px">{generic.type.es}</th>
                <th width="90px">{generic.required.es}</th>
                <th>{generic.description.es}</th>
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
                  <>
                    <>Nombre de campo asociado.</>
                  </>
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
                <td>{generic.control.es}</td>
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
                  campo matriz <code>key</code> valor, predeterminado en "id",
                  puede cambiar el nombre de la clave
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Este hook provee el siguiente objeto y funciones.</p>

        <CodeArea rawData={useFieldArrayArgument} />

        <p>
          <b className={typographyStyles.note}>Importante: </b>
          <code>useFieldArray</code> está construido sobre componentes no
          controlados. Las siguientes notas lo ayudarán a conocer y tener en
          cuenta su comportamiento durante la implementación.
        </p>

        <ul>
          <li>
            <p>
              puedes inicializar los (campos) <code>fields</code> configurado{" "}
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
              <code>fields[index]</code> Cuando se quieren configurar los
              valores por defecto, remover o setear con inputs.
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
              Es <strong>importante</strong> aplicar{" "}
              <code>{`ref={register()}`}</code> en lugar de{" "}
              <code>{`ref={register}`}</code> cuando se trabaja con{" "}
              <code>useFieldArray</code> entonces <code>register</code> will get
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
              <code>id</code> con componentes mapeados para ayudar a React a
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
              (obj: object, shouldFocus: boolean = true) =&gt; void
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
              (obj: object, shouldFocus: boolean = true) =&gt; void
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
              (index: number, value: object, shouldFocus: boolean = true) =&gt;
              void
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
            Elimina input/inputs en una posición en particular, o elimina todos
            cuando no se proporciona un index.
          </td>
        </tr>
      </>
    ),
  },
  resolver: {
    title: "resolver",
    description: (
      <>
        <p>
          Esta función le permite ejecutar cualquier método de validación
          externo, tal como{" "}
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
          y etc. De hecho, el objetivo no es solo limitado sí como nuestro
          externo (esquema) biblioteca de validación. Nos gustaría apoyar a
          muchos otros bibliotecas de validación para trabajar con React Hook
          Form. Incluso puedes escribir su lógica de validación personalizada
          para validar.
        </p>

        <p>
          Apoyamos a Yup, Joi y Superstruct oficialmente como{" "}
          <a
            href="https://github.com/react-hook-form/@hookform/resolvers"
            target="_blank"
            rel="noopener noreferrer"
          >
            solucionadores estándar
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

        <p>notas sobre la creación de solucionadores personalizados:</p>

        <ul>
          <li>
            <p>
              <b className={typographyStyles.note}>Nota:</b> asegúrate de que
              eres devolver objeto que contiene <code>values</code> y{" "}
              <code>errors</code>, y su valor predeterminado debe ser un objeto
              vacío <code>{`{}`}</code>.
            </p>
          </li>

          <li>
            <p>
              <b className={typographyStyles.note}>Nota:</b> errores de retorno
              La clave del objeto debe ser relevante para sus entradas.
            </p>
          </li>

          <li>
            <p>
              <b className={typographyStyles.note}>Nota:</b> esta función se
              almacenará en caché dentro del enlace personalizado, mientras que{" "}
              <code>context</code> es un objeto mutable que se puede cambiar en
              cada representación.
            </p>
          </li>

          <li>
            <p>
              <b className={typographyStyles.note}>Nota:</b> volver a validar la
              entrada solo ocurre un campo a la vez durante la interacción del
              usuario, porque el lib mismo evaluará el objeto de error en el
              campo específico y desencadenar re-renderizar en consecuencia.
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
        Comparta la misma funcionalidad que la API <code>watch</code>, sin
        embargo, esto aislará el renderizado en el nivel de su componente y
        potencialmente resultará en Mejor rendimiento para su aplicación.
      </p>
    ),
  },
  useController: {
    title: "useController",
    description: (
      <>
        <p>
          Este gancho personalizado es lo que impulsa <code>Controller</code>, y
          comparte los mismos accesorios y métodos que <code>Controller</code>.
          Es útil para crear una entrada controlada reutilizable, mientras que{" "}
          <code>Controller</code> es el opción flexible de caer en su página o
          formulario.
        </p>
        <p>
          Por favor, refiérase a la sección <code>Controller</code> para la
          sección de este gancho argumentos. Comparte los mismos argumentos,
          excepto <code>as</code> y <code>rendimientos</code>.
        </p>
      </>
    ),
  },
}
