import * as React from "react"
import CodeArea from "../../components/CodeArea"
import accessibleCodeBase from "../../components/codeExamples/accessibleCodeBase"
import accessibleCodeFinal from "../../components/codeExamples/accessibleCodeFinal"
import Link from "../../styles/link"
import { Note } from "../../styles/typography"
import { step1, step2, step3 } from "../../components/codeExamples/formWizard"
import smartForm from "../../components/codeExamples/smartForm"
import { CodeHeading } from "../../components/ApiPage"
import form from "../../components/codeExamples/form"
import input from "../../components/codeExamples/input"
import { Link as PageLink } from "gatsby"

export default {
  title: "Uso avanzado",
  header: {
    title: "Avanzado",
    description:
      "Construye formularios complejos y accesibles con React Hook Form.",
  },
  controlledMixedWithUnControlled: {
    title: "Componentes controlados y no controlados mezclados",
    description: (
      <p>
        React Hook Form se basa en componentes no controlados pero también es
        compatible con componentes controlados. La mayoria de las librerías de
        UI están hechas para soportar solo componentes controlados, como{" "}
        <a
          href="https://github.com/mui-org/material-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          Material-UI
        </a>{" "}
        y{" "}
        <a
          href="https://github.com/ant-design/ant-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          Antd
        </a>{" "}
        Además, con React Hook Form la renderización de componentes controlados
        también es optimizada. Aquí hay un ejemplo en el que combinamos
        validación de formularios controlada y no controlada.
      </p>
    ),
  },
  errorMessage: {
    title: "Mensaje de error",
    description: (
      <p>
        Los mensajes de error sirven de feedback visual para nuestros usuarios
        cuando hay problemas asociados con sus inputs. React Hook Form,
        proporciona un objeto de errores para que puedas recuperar errores
        fácilmente. Sin embargo, hay diferentes formas de mejorar el renderizado
        de errores en la pantalla.
      </p>
    ),
    register: (
      <>
        Incrustar el mensaje de error durante el <code>registro</code>, puedes
        insertar facilmente el mensaje de error en el atributo{" "}
        <code>value</code>. Ej:
      </>
    ),
    component: "Cree un componente ErrorMessage para imprimir el error.",
    optionalChaining: (
      <>
        <p>
          El operador de{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
          >
            encadenamiento opcional
          </a>{" "}
          <code>?.</code> permite leer el objeto de <code>errors</code> sin
          tener que preocuparte por causar un error debido a <code>null</code> o{" "}
          <code>undefined</code>.
        </p>
        <p>
          <code>{`errors?.firstName?.message`}</code>
        </p>
      </>
    ),
    get: (
      <p>
        Si tu proyecto esta utilizando{" "}
        <a href="https://lodash.com" target="_blank" rel="noopener noreferrer">
          lodash
        </a>
        , entonces puedes aprovechar la funcion{" "}
        <code>
          <a
            href="https://lodash.com/docs/4.17.15#get"
            target="_blank"
            rel="noopener noreferrer"
          >
            get
          </a>
        </code>{" "}
        de lodash. Ej:
        <br />
        <br />
        <code>{`get(errors, 'firstName.message')`}</code>
      </p>
    ),
  },
  accessibility: {
    title: "Accesibilidad (A11y)",
    description: (
      <>
        <p>
          React Hook Form tiene soporte para validación de formularios nativa,
          lo que permite validar inputs con tus propias reglas, ya que la
          mayoría de nosotros tenemos que crear formularios con un layout y
          diseño personalizados, y es nuestra responsabilidad el asegurarnos que
          nuestros formularios son accesibles (A11y).
        </p>

        <p>
          El siguiente ejemplo de código funciona para la validación; sin
          embargo, se puede mejorar para la accesibilidad.
        </p>

        <CodeArea rawData={accessibleCodeBase} />

        <p>
          El siguiente código de ejemplo es una versión mejorada al aprovechar{" "}
          <a
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
            target="_blank"
          >
            ARIA
          </a>
          .
        </p>
        <CodeArea rawData={accessibleCodeFinal} />

        <p>
          Luego de esta mejora, el lector de pantalla dirá: {""}
          <i> "Nombre, edición, entrada no válida, esto es obligatorio". </i>
        </p>
      </>
    ),
  },
  wizard: {
    title: "Asistente de formulario / Funnel",
    description: (
      <>
        <p>
          Es bastante común recopilar información del usuario a través de
          diferentes páginas y secciones. Recomendamos utilizar una librería de
          manejo de estados para almacenar las entradas del usuario a través de
          diferentes páginas / secciones. En este ejemplo, vamos a usar{" "}
          <Link
            href="https://github.com/bluebill1049/little-state-machine"
            target="_blank"
          >
            little state machine
          </Link>{" "}
          como nuestra libería de manejo de estados (la puedes reemplazar con{" "}
          <Link href="https://github.com/reduxjs/redux" target="_blank">
            redux
          </Link>
          , si estás más familiarizado).
        </p>

        <p style={{ textAlign: "center" }}>♦</p>

        <p>
          <Note>Paso 1:</Note> Configura tus rutas y tu store.
        </p>
        <CodeArea
          rawData={step1}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          <Note>Paso 2:</Note> Crea tus páginas, haz que recoja sus datos, envia
          esos datos al store y pasa a la siguiente página del formulario.
        </p>
        <CodeArea
          rawData={step2}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          <Note>Paso 3:</Note> Realiza el submit final con todos los datos en el
          store o muestra los datos resultantes.
        </p>
        <CodeArea
          rawData={step3}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          Siguiendo el patrón anterior, deberías poder crear un asistente de
          formulario para recopilar datos de entrada del usuario de varias
          páginas.
        </p>
      </>
    ),
  },
  smartForm: {
    title: "Componente de formulario inteligente",
    description: (
      <>
        <p>
          La idea aquí es que puedas componer fácilmente tu formulario con
          entradas. Vamos a crear un componente de <code> Formulario </code>{" "}
          para recopilar automáticamente los datos del formulario.
        </p>

        <CodeArea
          rawData={smartForm}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <p style={{ textAlign: "center" }}>♦</p>

        <p>Veamos qué hay en cada uno de esos componentes.</p>

        <CodeHeading>
          <h2>Form</h2>
        </CodeHeading>

        <p>
          La responsabilidad del componente <code>Form</code> es inyectar todos
          los métodos de <code>react-hook-form</code> en el componente hijo.
        </p>

        <CodeArea
          rawData={form}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <CodeHeading>
          <h2>Input / Select</h2>
        </CodeHeading>

        <p>
          La responsabilidad de los componentes Input es registrarse en {""}
          <code> react-hook-form </code>.
        </p>
        <CodeArea
          rawData={input}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <p>
          Con el componente <code>Form</code> inyectando las{" "}
          <code>propiedades</code>
          de <code>react-hook-form</code> en el componente hijo, puedes crear y
          componer formularios complejos en tu aplicación.
        </p>
      </>
    ),
  },
  fieldArrays: {
    title: "Field Arrays",
    description: (
      <>
        <p>
          Esta es una de las mejores características de React Hook Form: en
          lugar de importar componentes (como otras librerías) para lograr esta
          funcionalidad, puedes aprovechar HTML. La clave está en el atributo{" "}
          <code>name</code>. En React Hook Form, el atributo <code>name</code>{" "}
          representa la estructura de datos que deseas usar.
        </p>

        <p>
          El siguiente ejemplo muestra cómo puedes crear Field Arrays
          manipulando el atributo <code>name</code> del input.
        </p>

        <p>
          <Note>Nota:</Note> si tu aplicación necesita funcionalidad como:
          Eliminar, Insertar, Anexar, Anteponer. Aquí esta el{" "}
          <a
            href="https://codesandbox.io/s/react-hook-form-field-array-advanced-with-delete-insert-append-edit-l19pz"
            target="_blank"
            rel="noreferrer noopener"
          >
            link para esa implementación.
          </a>{" "}
          con <PageLink to={"/api#Controller"}>Controller</PageLink>.
        </p>
      </>
    ),
  },
  schema: {
    title: "Validación del Schema",
    description: (
      <>
        <p>
          React Hook Form soporta validación de formularios basada en esquemas
          con{" "}
          <a href="https://github.com/jquense/yup" target="_blank">
            Yup
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
          <Note>Paso 1:</Note> Agregá <code>Yup</code> en tu proyecto.
        </p>
      </>
    ),
    step2: (
      <p>
        <Note>Paso 2:</Note>Crea tu esquema de validación y registra los inputs
        en React Hook Form.
      </p>
    ),
  },
  connectForm: {
    title: "Connect Form",
    description: (
      <p>
        Cuando creamos formularios, hay momentos en que nuestros inputs están
        dentro de árboles de componentes profundamente anidados, y ahí es cuando{" "}
        {""}
        <a href="/api#FormContext">FormContext</a> resulta útil. Sin embargo,
        podemos mejorar aún más la experiencia del desarrollador creando un
        componente {""} <code>ConnectForm</code> y aprovechando{" "}
        <a href="https://reactjs.org/docs/render-props.html">renderProps</a> de
        React. El beneficio de este componente es que puede conectar tus inputs
        con React Hook Form desde cualquier lugar.
      </p>
    ),
  },
  conditionalControlledComponent: {
    title: "Componente controlado condicional",
    description: (
      <>
        <p>
          En términos de campos condicionales, React Hook Form lo hace realmente
          simple, al momento en que elimines el input del árbol de componentes,
          este será <code>desregistrado</code> automáticamente,{" "}
          <a
            href="https://codesandbox.io/s/13ykqx4wx7"
            target="_blank"
            rel="noopener noreferrer"
          >
            aquí hay un ejemplo
          </a>{" "}
          de ese comportamiento. Sin embargo, este no es el mismo caso para
          componentes controlados ya que <code>ref</code> no ha sido registrado,
          podemos hacer lo siguiente:
        </p>
        <ul>
          <li>
            <p>
              Importa <Link to="/api#Controller">Controller</Link> para wrappear
              tu componente y deja que Controller maneje el registro y
              desregistro
            </p>
          </li>
          <li>
            <p>
              Aprovecha el uso de{" "}
              <code>
                <a
                  href="https://reactjs.org/docs/hooks-effect.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  useEffect
                </a>
              </code>{" "}
              con registro personalizado
            </p>
          </li>
        </ul>
        <p> Aquí están los ejemplos:</p>
      </>
    ),
  },
  formContext: {
    title: "Performance de FormContext",
    description: (
      <p>
        <PageLink to="/api/#FormContext">FormContext</PageLink> de React Hook
        Form está construído sobre la API de{" "}
        <a
          href="https://reactjs.org/docs/context.html"
          target="_blank"
          rel="noreferrer noopener"
        >
          React's Context
        </a>{" "}
        . Resuelve el problema donde los datos pasan a través de un árbol de
        componentes sin tener que pasar propiedades manualmente en todos los
        niveles. Esto hace que el árbol de componentes active una nueva
        renderización cuando React Hookv Form dispara una actualización de
        estado, pero aún podemos optimizar nuestra aplicación si es necesario
        como en el ejemplo a continuación.
      </p>
    ),
  },
}
