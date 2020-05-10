import * as React from "react"
import code from "../../components/codeExamples/defaultExample"
import { Link } from "@reach/router"
import translateLink from "../../components/logic/translateLink"
import CodeArea from "../../components/CodeArea"
import { uiLibraryHookInput } from "../../components/codeExamples/getStarted"
import typographyStyles from "../../styles/typography.module.css"

export default {
  title: "Comenzar",
  header: {
    title: "Comenzar",
    description: "Validación simple de formularios con React Hook Form.",
  },
  video: {
    title: "Video Tutorial",
    description: `En este video tutorial, muestro el uso básico y los conceptos al utilizar React Hook Form.`,
  },
  install: {
    linkTitle: "Instalación",
    title: "Quick start",
    description: `Para instalar React Hook Form solo debes correr un comando y estarás listo para comenzar.`,
  },
  example: {
    title: "Ejemplo",
    description: `El siguiente código muestra el uso básico:`,
  },
  register: {
    title: "Registro de campos",
    description: (
      <>
        <p>
          Uno de los principales conceptos de React Hook Form es{" "}
          <strong>
            <code>registrar</code>
          </strong>{" "}
          un componente no controlado en el Hook y, por lo tanto, habilitar su
          valor para ser validado y recogido en el submit.
        </p>

        <p>
          <b className={typographyStyles.note}>Nota:</b> Cada campo{" "}
          <strong>required</strong> necesita tener un único <code>name</code>{" "}
          como key para el proceso de registración.
        </p>

        <p>
          <b className={typographyStyles.note}>Nota: </b>En React Native es
          necesario utilizar un comando de registro manual:{" "}
          <code>{`register({ name: 'test' }, { required: true })`}</code> o
          utilizar <Link to="/api#Controller">Controller</Link> para wrappear y
          auto registrar tu componente. Puedes leer mas en la sección de{" "}
          <Link to="/api/#ReactNative">React Native</Link>.
        </p>
      </>
    ),
  },
  applyValidation: {
    title: "Aplicar validación",
    description: (currentLanguage) => (
      <>
        <p>
          React Hook Form facilita la validación de formularios al alinearse con{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
            target="_blank"
            rel="noopener noreferrer"
          >
            Validación de formulario HTML estándar
          </a>
          .
        </p>

        <p>Lista de reglas de validación soportadas:</p>
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
          Puedes leer más acerca de cada una en la sección{" "}
          <Link to={translateLink("api#register", currentLanguage)}>
            register
          </Link>
          .
        </p>
      </>
    ),
  },
  adapting: {
    title: "Adaptando formularios existentes",
    description: (
      <>
        Trabajar en un formulario existente es simple. El punto más importante
        es aplicar el objeto <code>register</code> de RHF en las referencias{" "}
        <code>ref</code> de los componentes existentes.
      </>
    ),
  },
  controlledInput: {
    title: "Input controlado",
    description: (
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
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://material-ui.com/"
        >
          Material-UI
        </a>
        , por lo que hemos construído un componente que los envuelve:{" "}
        <Link to="/api#Controller">Controller</Link> para guiar el proceso de
        integración mientras mantenemos la libertad de usar un registro
        personalizado según tus necesidades.
      </p>
    ),
  },
  workWithUI: {
    title: "Trabajar con una librería UI",
    description: (currentLanguage) => (
      <>
        <p>
          React Hook Form facilita la integración con componentes de librerías
          de UI externas.
        </p>
        <p>
          <b className={typographyStyles.note}>Opción 1:</b> La mejor manera es
          chequear si el componente que pretendes utilizar expone una referencia
          interna <code>innerRef</code>o una referencia <code>ref</code> pueda
          ser utilizada para registración el componente con{" "}
          <code>
            <Link to={translateLink("api#register", currentLanguage)}>
              register
            </Link>
          </code>
          . Por ejemplo: El <code>TextField</code> de Material-UI acepta{" "}
          <code>inputRef</code> en sus propiedades. Simplemente debes pasar el
          objeto <code>register</code> de RHF en ella.
        </p>
        <p>
          <code>
            {
              '<TextField inputRef={register} label="First name" name="FirstName"/>'
            }
          </code>
        </p>
        <p>
          <b className={typographyStyles.note}>Opción 2:</b> Algunas veces los
          componentes no exponen una propiedad que se pueda utilizar para
          registar, como es el caso de <code>react-select</code> o{" "}
          <code>react-datepicker</code>.
        </p>
        <p>
          La siguiente forma más fácil es utilizar el componente{" "}
          <Link to="/api#Controller">Controller</Link>, cuando utilizas este
          componente, él se encarga de realizar el proceso de registro por ti.
        </p>
        <CodeArea rawData={uiLibraryHookInput} />
        <p>
          <b className={typographyStyles.note}>Opción 3:</b> Por último, puedes
          configurar un registro personalizado utilizando el hook{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://reactjs.org/docs/hooks-effect.html"
          >
            useEffect
          </a>{" "}
          y actualizar el valor a través de{" "}
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
    title: "Integrar el estado global",
    description: `React Hook Form no requiere que utilices una librería de manejo de estados, 
    pero puedes integrarlo facilmente de ser necesario.`,
  },
  reactNative: {
    title: "React Native",
    description: (
      <p>
        Obtendrás la misma mejora de rendimiento que un Componente no
        controlado. Sin embargo, hay ciertas API que no son compatibles con
        React Native (debido a la diferencia entre las API web y nativa).
        Tendrás que utilizar un <b> registro manual </b> como se muestra en el
        siguiente ejemplo.
      </p>
    ),
  },
  typeScript: {
    title: "TypeScript",
    description: (
      <p>
        React Hook Form está programado en <code>Typecript</code>, por lo que
        puedes definir un tipo <code>FormData</code> para admitir valores de
        formulario.
      </p>
    ),
  },
  errors: {
    title: "Manejo de errores",
    description: (
      <>
        React Hook Form proporciona el objeto <code> errors </code>
        para exponer los errores que hayan en el formulario.
      </>
    ),
  },
}
