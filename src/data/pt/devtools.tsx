import * as React from "react"
import typographyStyles from "../../styles/typography.module.css"

export default {
  title: "DevTools",
  description:
    "React Hook Form Devtools ajuda debuggar formulários com validações",
  install: "Instalação",
  step1: (
    <>
      <b className={typographyStyles.note}>Passo 1: </b>Instalar{" "}
      <code>react-hook-form-devtools</code> como pacote de dependencia dev.
    </>
  ),
  step2: (
    <>
      <b className={typographyStyles.note}>Passo 2:</b> Integrar com sua
      aplicação React é tão simples quanto importar um componente para seu
      App/Formulário e passar
      <code>Propriedades controladas</code> nele.
    </>
  ),
  demoDescription:
    "Você pode interagir com o demo a seguir para ver o DevTool em ação",
  function: "Funcionalidade",
  functionDetail: (
    <>
      <li>
        <p>Ler inputs e o estado de formulários inteiros</p>
      </li>
      <li>
        <p>
          <b className={typographyStyles.note}>Nota:</b> Porquê RHF é baseado em
          inputs incontrolados, o botão de <strong>Update</strong> vai
          recarregar o DevTool para ler o ultimo valor do input e do formulário.
        </p>
      </li>
      <li>
        <p>Feedback visual quando o input for válido ou inválido</p>
      </li>
      <li>
        <p>
          Busca os inputs registrados e também componentes customizados
          registrados
        </p>
      </li>
      <li>
        <p>
          <b className={typographyStyles.note}>Note: </b> Você pode facilmente
          localizar um input ao clicar no botão <strong>Nativo</strong>. Isso
          será útil quando você estiver trabalhando em um formulário grande.
        </p>
      </li>
    </>
  ),
}
