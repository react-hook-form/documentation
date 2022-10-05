import * as React from "react"
import { Link } from "@reach/router"
import translateLink from "../../components/logic/translateLink"
import * as typographyStyles from "../../styles/typography.module.css"

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
          <code>{`register('test', { required: true })`}</code> o utilizar{" "}
          <Link to="/api#Controller">Controller</Link> para wrappear y auto
          registrar tu componente. Puedes leer mas en la sección de{" "}
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
          <li>
            <p>required</p>
          </li>
          <li>
            <p>min</p>
          </li>
          <li>
            <p>max</p>
          </li>
          <li>
            <p>minLength</p>
          </li>
          <li>
            <p>maxLength</p>
          </li>
          <li>
            <p>pattern</p>
          </li>
          <li>
            <p>validate</p>
          </li>
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
        <a target="_blank" rel="noopener noreferrer" href="https://mui.com/">
          MUI
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
    description: (
      <>
        <p>
          React Hook Form ha facilitado la integración con bibliotecas externas
          de bibliotecas de componentes. Puedes consultar los siguientes vídeos.
        </p>

        <p>
          Los componentes controlados no exponen una prop para registrar, por
          ejemplo
          <code>react-select</code> o <code>react-datepicker</code>.
        </p>
        <p>
          En este caso, se debe utilizar el código{" "}
          <Link to="/api#Controller">Controlador</Link> componente envolvente,
          que se encargará del proceso de registro por ti.
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
        React Hook Form está programado en <code>TypeScript</code>, por lo que
        puedes definir un tipo <code>FormData</code> para admitir valores de
        formulario.
      </p>
    ),
  },
  schema: {
    title: "Validación del Schema",
    description: (
      <>
        <p>
          React Hook Form soporta validación de formularios basada en esquemas
          con{" "}
          <a
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </a>
          ,{" "}
          <a
            href="https://github.com/ianstormtaylor/superstruct"
            target="_blank"
            rel="noopener noreferrer"
          >
            Superstruct
          </a>{" "}
          &{" "}
          <a
            href="https://github.com/hapijs/joi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joi
          </a>
          , donde puedes pasar tu <code>validationSchema</code> a{" "}
          <a href="/api#useForm">useForm</a> como configuración opcional. React
          Hook Form validará los datos de tus inputs contra el esquema y
          retornará los <a href="/api#errors">errores</a> o el resultado válido
          según corresponda.
        </p>
      </>
    ),
    step1: (
      <>
        <p>
          <b className={typographyStyles.note}>Paso 1:</b> Agregá{" "}
          <code>Yup</code> en tu proyecto.
        </p>
      </>
    ),
    step2: (
      <p>
        <b className={typographyStyles.note}>Paso 2:</b>Crea tu esquema de
        validación y registra los inputs en React Hook Form.
      </p>
    ),
  },
  errors: {
    title: "Manejo de errores",
    description: (
      <>
        React Hook Form proporciona el objeto <code>errors</code>
        para exponer los errores que hayan en el formulario.
      </>
    ),
  },
  design: {
    title: "Design and philosophy",
    description: (
      <>
        <p>
          React Hook Form's design and philosophy focus on user and developer
          experience. The library aims to provide users with a smoother
          interaction experience by fine-tuning the performance and improving
          accessibility. Some of the performance enhancements included
        </p>
        <ul>
          <li>
            <p>Introducing form state subscription model through the proxy</p>
          </li>
          <li>
            <p>Avoiding unnecessary computation</p>
          </li>
          <li>
            <p>Isolating component re-rendering when requires</p>
          </li>
        </ul>
        <p>
          Overall, it improves the user experience while users interact with the
          application. As for the developers, we introduce build-in validation
          and are closely aligned with HTML standards, extend it further with
          powerful validation methods and integrate it with schema validation
          natively. In addition, having a strongly type-checked form with the
          help of typescript provides early build-time feedback to help and
          guide the developer to build a robust form solution.
        </p>
        <p>
          The following talk given by{" "}
          <a
            href={"https://twitter.com/bluebill1049"}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Bill
          </a>{" "}
          showcased some of the ideas and design patterns:
        </p>

        <iframe
          width="100%"
          height="528"
          title="react hook form reset"
          src="https://www.youtube.com/embed/ZFxHdpzaEmM"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </>
    ),
  },
}
