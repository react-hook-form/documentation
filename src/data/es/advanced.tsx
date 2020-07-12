import * as React from "react"
import CodeArea from "../../components/CodeArea"
import accessibleCodeBase from "../../components/codeExamples/accessibleCodeBase"
import accessibleCodeFinal from "../../components/codeExamples/accessibleCodeFinal"
import { step1, step2, step3 } from "../../components/codeExamples/formWizard"
import * as CodeExampleTestingForm from "../../components/codeExamples/testingForm"
import smartForm from "../../components/codeExamples/smartForm"
import form from "../../components/codeExamples/form"
import input from "../../components/codeExamples/input"
import { Link as PageLink } from "gatsby"
import typographyStyles from "../../styles/typography.module.css"
import buttonStyles from "../../styles/button.module.css"
import customHookWithValidationResolver from "../../components/codeExamples/customHookWithValidationResolver"
import virtualizedList from "../../components/codeExamples/virtualizedList"

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
          <a
            className={buttonStyles.links}
            href="https://github.com/bluebill1049/little-state-machine"
            target="_blank"
            rel="noopener noreferrer"
          >
            little state machine
          </a>{" "}
          como nuestra libería de manejo de estados (la puedes reemplazar con{" "}
          <a
            className={buttonStyles.links}
            href="https://github.com/reduxjs/redux"
            target="_blank"
            rel="noopener noreferrer"
          >
            redux
          </a>
          , si estás más familiarizado).
        </p>

        <p style={{ textAlign: "center" }}>♦</p>

        <p>
          <b className={typographyStyles.note}>Paso 1:</b> Configura tus rutas y
          tu store.
        </p>
        <CodeArea
          rawData={step1}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          <b className={typographyStyles.note}>Paso 2:</b> Crea tus páginas, haz
          que recoja sus datos, envia esos datos al store y pasa a la siguiente
          página del formulario.
        </p>
        <CodeArea
          rawData={step2}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          <b className={typographyStyles.note}>Paso 3:</b> Realiza el submit
          final con todos los datos en el store o muestra los datos resultantes.
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
          entradas. Vamos a crear un componente de <code>Formulario</code> para
          recopilar automáticamente los datos del formulario.
        </p>

        <CodeArea
          rawData={smartForm}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <p style={{ textAlign: "center" }}>♦</p>

        <p>Veamos qué hay en cada uno de esos componentes.</p>

        <div className={typographyStyles.codeHeading}>
          <h2>Form</h2>
        </div>

        <p>
          La responsabilidad del componente <code>Form</code> es inyectar todos
          los métodos de <code>react-hook-form</code> en el componente hijo.
        </p>

        <CodeArea
          rawData={form}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <div className={typographyStyles.codeHeading}>
          <h2>Input / Select</h2>
        </div>

        <p>
          La responsabilidad de los componentes Input es registrarse en {""}
          <code>react-hook-form</code>.
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
          <b className={typographyStyles.note}>Nota:</b> tambien hemos
          construido a custom hook for complex scenario:{" "}
          <PageLink to="/api#useFieldArray">useFieldArray</PageLink>.
        </p>

        <p>
          El siguiente ejemplo muestra cómo puedes crear Field Arrays
          manipulando el atributo <code>name</code> del input.
        </p>

        <p>
          <b className={typographyStyles.note}>Nota:</b> si tu aplicación
          necesita funcionalidad como: Eliminar, Insertar, Anexar, Anteponer.
          Aquí esta el{" "}
          <a
            href="https://codesandbox.io/s/react-hook-form-field-array-advanced-with-delete-insert-append-edit-gvgg4"
            target="_blank"
            rel="noreferrer noopener"
          >
            link para esa implementación.
          </a>{" "}
          con <PageLink to="/api#Controller">Controller</PageLink>.
        </p>
      </>
    ),
  },
  connectForm: {
    title: "Connect Form",
    description: (
      <p>
        Cuando creamos formularios, hay momentos en que nuestros inputs están
        dentro de árboles de componentes profundamente anidados, y ahí es cuando{" "}
        {""}
        <a href="/api#useFormContext">FormContext</a> resulta útil. Sin embargo,
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
              Importa <PageLink to="/api#Controller">Controller</PageLink> para
              wrappear tu componente y deja que Controller maneje el registro y
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
        <PageLink to="/api/#useFormContext">FormContext</PageLink> de React Hook
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
        renderización cuando React Hook Form dispara una actualización de
        estado, pero aún podemos optimizar nuestra aplicación si es necesario
        como en el ejemplo a continuación.
      </p>
    ),
  },
  customHookWithValidationResolver: {
    title: "Custom Hook with Validation Resolver",
    description: (
      <>
        <p>
          Puede crear un enlace personalizado como un solucionador de
          validación. Un gancho personalizado puede integrarse fácilmente con
          yup / Joi / Superstruct como validación método, y para ser utilizado
          dentro de la resolución de validación.
        </p>
        <ul>
          <li>
            Defina un esquema de validación memorable (o defínalo fuera de su
            componente si no tiene dependencias)
          </li>
          <li>Use el enlace personalizado, pasando el esquema de validación</li>
          <li>Pase la resolución de validación al gancho useForm </li>
        </ul>

        <CodeArea rawData={customHookWithValidationResolver} />
      </>
    ),
  },
  workingWithVirtualizedList: {
    title: "Trabajando con listas vitualizadas",
    description: (
      <>
        <p>
          Imagine un escenario en el que tiene una tabla de datos. Esta tabla
          puede contienen cientos o miles de filas, y cada fila tendrá entradas.
          Una práctica común es representar solo los elementos que están en el
          ventana gráfica, sin embargo, esto causará problemas ya que los
          elementos se eliminan de el DOM cuando están fuera de la vista y se
          vuelven a agregar. Esto causará artículos para restablecer sus valores
          predeterminados cuando vuelven a ingresar a la ventana gráfica.
        </p>

        <p>
          Para evitar esto, puede registrar manualmente los campos y luego
          establece programáticamente el valor del campo.
        </p>

        <p>
          A continuación se muestra un ejemplo usando{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/bvaughn/react-window"
          >
            react-window
          </a>
          .
        </p>

        <CodeArea
          rawData={virtualizedList}
          url="https://codesandbox.io/s/react-hook-form-with-react-window-b4j8n"
        />
      </>
    ),
  },
  testingForm: {
    title: "Testing Form",
    description: (
      <>
        <p>
          Las pruebas son muy importantes porque preservan el código de los
          bichos o y garantizar la seguridad del código cuando se refactoriza la
          base del código.
        </p>

        <p>
          Recomendamos el uso de la{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://testing-library.com/"
          >
            testing-library
          </a>
          , porque es simple y las pruebas se centran más en el comportamiento
          del usuario.
        </p>

        <p style={{ textAlign: "center" }}>♦</p>

        <p>
          <b className={typographyStyles.note}>Step 1:</b> Prepare su entorno de
          pruebas.
        </p>

        <p>
          Por favor instale <code>mutationobserver-shim</code> porque
          react-hook-form use <code>MutationObserver</code> para detectar las
          entradas obtenidas desmontado del DOM.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> Si usted está usando
          React Nativo, no necesitas instalar{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/testing-library/jest-dom"
          >
            @testing-library/jest-dom
          </a>
          .
        </p>

        <CodeArea rawData={"npm install -D mutationobserver-shim"} />

        <p>
          Crear <code>setup.js</code> para importar{" "}
          <code>mutaciónobservador-shim</code>.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> Si usted está usando
          React Nativo, necesitas crear{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/react-hook-form/react-hook-form/blob/master/setup.native.ts"
          >
            setup.js
          </a>{" "}
          , y definir <code>window</code> object.
        </p>

        <CodeArea
          rawData={'import "mutationobserver-shim";'}
          url="https://codesandbox.io/s/react-hook-form-unit-test-docs-ewpyt?file=/setup.js"
        />

        <p>
          Finalmente, tienes que actualizar <code>setup.js</code> en{" "}
          <code>jest.config.js</code> para incluir el archivo.
        </p>

        <CodeArea
          rawData={CodeExampleTestingForm.step1}
          url="https://codesandbox.io/s/react-hook-form-unit-test-docs-ewpyt?file=/setup.js"
        />

        <p>
          <b className={typographyStyles.note}>Step 2:</b> Crear un formulario
          de acceso.
        </p>

        <p>
          Hemos establecido el atributo del papel en consecuencia. Estos
          atributos son útiles cuando se escriben pruebas y se mejora la
          accesibilidad. Para más información, puedes consultar la documentación
          de la{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://testing-library.com/"
          >
            testing-library
          </a>
          .
        </p>

        <CodeArea
          rawData={CodeExampleTestingForm.step2}
          url="https://codesandbox.io/s/react-hook-form-unit-test-docs-ewpyt?file=/src/App.js"
        />

        <p>
          <b className={typographyStyles.note}>Step 3:</b> Write tests.
        </p>

        <p>
          Los siguientes criterios son los que intentamos cubrir con las
          pruebas:
        </p>

        <ul>
          <li>
            <p>Fallo en la presentación de la prueba.</p>

            <p>
              Estamos usando el método <code>esperaPor</code> y{" "}
              <code>encuentra*</code> para detectar la retroalimentación de la
              presentación porque <code>manejarSometer</code> se ejecuta
              asincrónicamente.
            </p>
          </li>
          <li>
            <p>Validación de la prueba asociada a cada entrada.</p>

            <p>
              Estamos usando el método <cdoe>*ByRole</cdoe> cuando buscamos
              diferentes elementos porque así es como los usuarios reconocen su
              componente de UI.
            </p>
          </li>
          <li>
            <p>Prueba de presentación exitosa.</p>
          </li>
        </ul>

        <CodeArea
          rawData={CodeExampleTestingForm.step3}
          url="https://codesandbox.io/s/react-hook-form-unit-test-docs-ewpyt?file=/src/App.test.js"
        />
      </>
    ),
  },
}
