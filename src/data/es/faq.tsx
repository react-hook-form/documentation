import * as React from "react"
import colors from "../../styles/colors"
import typographyStyles from "../../styles/typography.module.css"
import tableStyles from "../../styles/table.module.css"
import buttonStyles from "../../styles/button.module.css"

export default {
  title: "FAQs",
  header: {
    title: "FAQs",
    description: "Preguntas frecuentes.",
  },
  questions: [
    {
      title: "Performance de React Hook Form",
      description: (
        <p>
          El rendimiento es uno de los objetivos principales de construir este
          hook personalizado. React Hook Form se basa en componentes no
          controlados, de ahí la razón por la cual la función de registro se
          realiza en el ref. Este enfoque recude la cantidad de renderizados que
          ocurren debido a la escritura del usuario o al cambio de valores. El
          montaje de componentes en la página también es mucho más rápido porque
          son no controlados. Para la velocidad de montaje, realicé una prueba
          rápida de comparación a la que puedes acceder desde {""}
          <a
            href="https://github.com/bluebill1049/react-hook-form-performance-compare"
            target="_blank"
            rel="noopener noreferrer"
          >
            este link
          </a>
          .
        </p>
      ),
    },
    {
      title: "¿Cómo crear un mensaje de error de Input accesible?",
      description: (
        <p>
          React Hook Form está basado en{" "}
          <a
            href="https://reactjs.org/docs/uncontrolled-components.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            Componentes no controlados
          </a>
          , lo que te brinda la posibilidad de hacer formularios personalizados
          accesibles con facilidad.
        </p>
      ),
    },
    {
      title: "¿Funciona con componentes de clases?",
      description: (
        <>
          <p>
            No, no por defecto. Pero puedes crear un contenedor y usarlo en tu
            componente de clase.
          </p>

          <blockquote>
            No puedes usar Hooks dentro de un componente de clase, pero puedes
            mezclar clases y componentes de funciones con Hooks en un solo
            árbol. Si un componente es una clase o una función que usa Hooks es
            un detalle de implementación de ese componente. A largo plazo,
            esperamos que Hooks sea la forma principal en que la gente escriba
            componentes en React.
          </blockquote>
        </>
      ),
    },
    {
      title: "¿Cómo resetear el formulario?",
      description: (
        <>
          <p>Hay dos métodos para resetear el formulario.</p>
          <ul>
            <li>
              <b>HTMLFormElement.reset()</b>
              <p>
                Este método es lo mismo que clickear el botón de reset, y solo
                limpia los valores de <code>input/select/checkbox</code>.
              </p>
            </li>
            <li>
              <b>
                React Hook Form API: <code>reset()</code>
              </b>
              <p>
                El método <code>reset</code> de React Hook Form resetea todos
                los valores de los campos, y además limpia todos los
                <code>errores</code> dentro del formulario.
              </p>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "¿Como inicializar los valores del formulario?",
      description: (
        <p>
          React Hook Form se basa en componentes no controlados. En un
          componente no controlado, puedes especificar el valor por defecto de
          un campo individual mediante <code> defaultValue </code> o{" "}
          <code> defaultChecked </code>. Sin embargo, el Hook proporciona una
          manera más fácil de inicializar todos los valores de entrada. Ejemplo
          a continuación:
        </p>
      ),
    },
    {
      title: "¿Cómo compartir el uso de la referencia?",
      description: (
        <p>
          React Hook Form necesita de <code>ref</code> para recolectar todos los
          valores de input, pero además puede que quieras usar <code>ref</code>
          para otros propósitos (ej.desplazarse por la pantalla). El siguiente
          ejemplo te muestra como realizarlo.
        </p>
      ),
    },
    {
      title: "¿Qué pasa si no tengo acceso a la referencia?",
      description: (
        <>
          <p>
            Puedes <code>registrar</code> un input sin una{" "}
            <code>referencia</code>. De hecho, puedes setear el valor
            manualmente con <code>setValue</code>, <code>setError </code> y
            <code>triggerValidation</code>.
          </p>
          <p>
            <b className={typographyStyles.note}> Nota: </b> Debido a que la{" "}
            <code>referencia</code> no se ha registrado, React Hook Form no
            podrá registrar listeners de eventos en los inputs. Esto significa
            que tendrás que actualizar manualmente el valor y el error.
          </p>
        </>
      ),
    },
    {
      title: "¿Soporte en navegadores?",
      description: (
        <>
          <p>React Hook Form soporta la majoría de los navegadores.</p>

          <p>
            Para el sporte de IE11, puedes importar la versión react-hook-form
            IE 11.
          </p>
        </>
      ),
    },
    {
      title: "¿Por qué la primera pulsación de tecla no funciona?",
      description: (
        <>
          <p>
            Vuelve a chequear si no estás utilizando <code>value</code>
            en vez de <code>defaultValue</code>.
          </p>
          <p>
            React Hook Form está basado en inputs no controlados, lo que
            significa que no necesitas cambiar el valor del input con{" "}
            <code>value</code>a través del <code>state</code> con{" "}
            <code>onChange</code>. De hecho no necesitas <code>value</code> en
            absoluto, solo necesitas <code>defaultValue</code> para el valor
            inicial del input.
          </p>
        </>
      ),
    },
    {
      title: "¿El testing falló por MutationObserver?",
      description: (
        <p>
          Si tienes dificultades en el testeo y el problema fue causado por{" "}
          <code>MutationObserver</code>. Asegurate que hayas instalado{" "}
          <code>mutationobserver</code> y has importado el paquete en tu test:{" "}
          <a
            href="https://jestjs.io/docs/en/configuration"
            target="_blank"
            rel="noopener noreferrer"
          >
            archivo setup.js
          </a>
          .
        </p>
      ),
    },
    {
      title: "¿React Hook Form, Formik o Redux Form?",
      description: (
        <>
          <p>
            En primer lugar, todas estas librerías intentan resolver el mismo
            problema, que construir formularios sea fácil y excelente. Sin
            embargo, hay algunas diferencias fundamentales entre los tres,
            react-hook-form está hecho con inputs no controlados en mente e
            intenta proporcionar un formulario con mejor rendimiento y menos
            renderizaciones si es posible. Además de eso, react-hook-form está
            construido con Hooks de React y se usa como tal, lo que significa
            que no hay ningún componente que importar. Estos son algunos de los
            detalles. diferencias:
          </p>

          <div className={tableStyles.tableWrapper}>
            <table className={tableStyles.table}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${colors.lightPink}` }}>
                  <th width={200} />
                  <th>
                    <p>React Hook Form</p>
                  </th>
                  <th>
                    <p>Formik</p>
                  </th>
                  <th>
                    <p>Redux Form</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b>Componente</b>
                  </td>
                  <td>
                    <a
                      href="https://reactjs.org/docs/uncontrolled-components.html"
                      target="_blank"
                    >
                      no controlado
                    </a>{" "}
                    &{" "}
                    <a
                      href="https://reactjs.org/docs/forms.html"
                      target="_blank"
                    >
                      controlado
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://reactjs.org/docs/forms.html"
                      target="_blank"
                    >
                      controlado
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://reactjs.org/docs/forms.html"
                      target="_blank"
                    >
                      controlado
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Renderizado</b>
                  </td>
                  <td>renderizado mínimo</td>
                  <td>
                    renderizado de acuerdo a cambios de estado locales, mientras
                    tipeas en el input.
                  </td>
                  <td>
                    renderizado de acuerdo a cambios en librerías de
                    administración de estado (Redux), mientras tipeas en el
                    input.
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>API</b>
                  </td>
                  <td>Hooks</td>
                  <td>Componente (RenderProps, Form, Field) + Hooks</td>
                  <td>Componente (RenderProps, Form, Field)</td>
                </tr>
                <tr>
                  <td>
                    <b>Tamaño del paquete</b>
                  </td>
                  <td>
                    Pequeño
                    <br />
                    <code>
                      react-hook-form@4.0.0
                      <br />
                      <b className={typographyStyles.note}>6.2KB</b>
                    </code>
                  </td>
                  <td>
                    Mediano
                    <br />
                    <code>
                      formik@2.0.1
                      <br />
                      <b className={typographyStyles.note}>14.4KB</b>
                    </code>
                  </td>
                  <td>
                    Grande
                    <br />
                    <code>
                      redux-form@8.2.6
                      <br />
                      <b className={typographyStyles.note}>27KB</b>
                    </code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Validación</b>
                  </td>
                  <td>
                    Incorporada &{" "}
                    <a href="https://github.com/jquense/yup" target="_blank">
                      Yup
                    </a>
                  </td>
                  <td>
                    Construye tu propia &{" "}
                    <a href="https://github.com/jquense/yup" target="_blank">
                      Yup
                    </a>
                  </td>
                  <td>Construye tu propia & Plugins</td>
                </tr>
                <tr>
                  <td>
                    <b>Curva de aprendizaje</b>
                  </td>
                  <td>Baja</td>
                  <td>Mediana</td>
                  <td>Mediana</td>
                </tr>
                <tr>
                  <td>
                    <b>Estado</b>
                  </td>
                  <td>Comunidad Mediana: Nueva librería y creciendo.</td>
                  <td>
                    Comunidad Amplia: Librería establecida en la comunidad.
                  </td>
                  <td>
                    Comunidad Amplia: Librería establecida en la comunidad.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: "¿Puede funcionar con componentes Controlados?",
      description: (
        <>
          <p>
            Respuesta corta: <b>Si</b>
          </p>
          <p>
            React-hook-form no recomienda construir un formulario controlado,
            sin embargo, puedes lograrlo fácilmente.
          </p>
          <p>
            El truco es utilizar el <code>watch</code> de la API para monitorear
            cada cambio en los input y asignar la propiedad value.
          </p>
          <p>
            Alternativamente, puedes utilizar nuestro componente wrapper{" "}
            <a
              href="https://www.react-hook-form.com/api#Controller"
              title="React Hook Form Controller"
            >
              Controller
            </a>{" "}
            el que se encargará de realizar el registro por ti.
          </p>
        </>
      ),
    },
    {
      title: "Testeando React Hook Form",
      description: (
        <div>
          <ul>
            <li>
              <p>
                ¿Por qué recibo la advertencia de <code>act</code>?
              </p>

              <p>
                Todos los métodos de validación en React Hook Form son tratados
                como funciones async, es importante que wrappees con async tu{" "}
                <a
                  className={buttonStyles.codeAsLink}
                  href="https://reactjs.org/docs/test-utils.html#act"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  act
                </a>
                .
              </p>
            </li>
            <li>
              <p>¿Por qué un cambio en un input no dispara un evento?</p>

              <p>
                React Hook Form utiliza el evento <code>input</code> para los
                cambios en input, para solucionarlo puedes switchear a{" "}
                <code>fireEvent.input</code> para react-testing-library
              </p>
            </li>
          </ul>
        </div>
      ),
    },
  ],
}
