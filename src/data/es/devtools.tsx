import * as React from "react"
import typographyStyles from "../../styles/typography.module.css"

export default {
  title: "DevTools",
  description:
    "React Hook Form DevTools para ayudar a depurar formularios con validación.",
  install: "Installation",
  step1: (
    <>
      <b className={typographyStyles.note}>Paso 1: </b>Instalar en pc{" "}
      <code>@hookform/devtools</code>como un paquete de dependencia de
      desarrollo.
    </>
  ),
  step2: (
    <>
      <b className={typographyStyles.note}>Paso 2: </b>
      Integrate con tu React La aplicación es tan simple como importar un
      Componente a su aplicación / Formulario y pasar<code>control</code>{" "}
      apuntalarlo.
    </>
  ),
  demoDescription:
    "Puede interactuar con la siguiente demostración para ver DevTool en acción.",
  function: "Funcionalidad",
  functionDetail: (
    <>
      <li>
        <p>Leer entradas y estado completo del formulario.</p>
      </li>
      <li>
        <p>
          <b className={typographyStyles.note}>Nota: </b>Porque RHF se basa en
          entradas no controladas, el botón <strong> Actualizar </strong>{" "}
          actualizará el DevTool para leer el último valor de entrada y el
          estado del formulario.
        </p>
      </li>
      <li>
        <p>
          Retroalimentación visual cuando la entrada o el formulario son válidos
          o no válidos.
        </p>
      </li>
      <li>
        <p>
          Buscar entradas registradas y también componentes registrados
          personalizados.
        </p>
      </li>
      <li>
        <p>
          <b className={typographyStyles.note}>Note: </b>puedes localizar
          fácilmente una entrada haciendo clic en el botón{" "}
          <strong> Nativo </strong>. Esto será útil cuando trabajas en un
          formulario grande.
        </p>
      </li>
    </>
  ),
  features: [
    {
      title: "React Base",
      description:
        "DevTool en sí está construido por React, por lo que puede integrarse fácilmente con su aplicación React.",
    },
    {
      description:
        "React Hook Form se centra en ofrecer una gran experiencia en términos de creación de formularios con React. Esta herramienta ayudará a depurar sus formularios.",
    },
    {
      title: "Fuente abierta",
      description:
        "DevTools es un proyecto de código abierto, por lo que todos podemos mejorar la experiencia juntos.",
    },
  ],
}
