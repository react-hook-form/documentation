import * as React from "react"
import code from "../../components/codeExamples/defaultExample"
import { Link } from "@reach/router"
import translateLink from "../../components/logic/translateLink"
import CodeArea from "../../components/CodeArea"
import { uiLibraryHookInput } from "../../components/codeExamples/getStarted"
import typographyStyles from "../../styles/typography.module.css"

export default {
  title: "Comece agora",
  header: {
    title: "Comece agora",
    description: "Simples validação de formulário com React Hook Form.",
  },
  video: {
    title: "Vídeo Tutorial",
    description: `Neste vídeo tutorial, é demonstrado o uso o conceito e uso básico usando React Hook Form.`,
  },
  install: {
    linkTitle: "Instalação",
    title: "Começo rápido",
    description: `Instalando React Hook Form apenas necessita de um único comando e você está pronto pra rodar.`,
  },
  example: {
    title: "Examplo",
    description: `O seguinte código vai demonstrar o uso básico:`,
  },
  register: {
    title: "Registro dos campos",
    description: (
      <>
        <p>
          Um dos principais conceitos do React Hook Form é{" "}
          <strong>
            <code>register</code>
          </strong>{" "}
          seu componente incontrolado no Hook e consequentemente habilitando o
          valor, para ser validado e coletado para submissão.
        </p>

        <p>
          <b className={typographyStyles.note}>Nota:</b> Cada campo{" "}
          <strong>obrigatório</strong> precisa ter um único <code>name</code>{" "}
          como chave do processo de registro.
        </p>

        <p>
          <b className={typographyStyles.note}>Nota: </b>React Native vai
          precisar do uso manual do comando de registro:{" "}
          <code>{`register({ name: 'test' }, { required: true })`}</code> or
          usando <Link to="/api#Controller">Controller</Link> para englobar e
          registrar automaticamente seu componente. Você também pode ler mais em{" "}
          <Link to="/api/#ReactNative">React Native</Link> Seção.
        </p>
      </>
    ),
  },
  applyValidation: {
    title: "Aplicar validação",
    description: currentLanguage => (
      <>
        <p>
          React Hook Form cria validação de formulário simples, alinhado com os
          existentes{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTML padrão para validação de formulário
          </a>
          .
        </p>

        <p>Lista de regras validações suportadas:</p>
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
          Você pode ler mais detalhes em cada uma das regras em{" "}
          <Link to={translateLink("api#register", currentLanguage)}>
            seção de registro
          </Link>
          .
        </p>
      </>
    ),
  },
  adapting: {
    title: "Adaptando um formulário existente",
    description: (
      <>
        Trabalhar com um formulário existente é simples. Um passo importante a
        ser feito <code>register</code> dentro do componente existente com{" "}
        <code>ref</code>.
      </>
    ),
  },
  controlledInput: {
    title: "Campo Controlado",
    description: (
      <p>
        O React Hook Form adota componentes não controlados e HTML nativo
        entradas, no entanto, é difícil evitar trabalhar com controladores
        externos componente como{" "}
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
        and{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://material-ui.com/"
        >
          Material-UI
        </a>
        , consequentemente precisamos construir um componente por volta:{" "}
        <Link to="/api#Controller">Controller</Link> para agilizar o processo de
        integração e ainda oferecer a você liberdade de usar o registro
        personalizado com suas necessidades.
      </p>
    ),
  },
  workWithUI: {
    title: "Trabalhe com uma biblioteca de interface",
    description: currentLanguage => (
      <>
        <p>
          React Hook Form é bem fácil de ser integrado com componentes externos
          de interface.
        </p>
        <p>
          <b className={typographyStyles.note}>Opção 1:</b> A melhor forma é
          checar se o componente que deseja expõe um <code>innerRef</code> ou{" "}
          <code>ref</code> isso pode ser utilizado para{" "}
          <code>
            <Link to={translateLink("api#register", currentLanguage)}>
              register
            </Link>
          </code>
          . Por exemplo: Material-UI's <code>TextField</code> aceita{" "}
          <code>inputRef</code> como props. Passando simplesmente{" "}
          <code>register</code> para ele.
        </p>
        <p>
          <code>
            {
              '<TextField inputRef={register} label="First name" name="FirstName"/>'
            }
          </code>
        </p>
        <p>
          <b className={typographyStyles.note}>Opção 2:</b> As vezes componentes
          não expõe uma prop par aregistrar, por exemplo{" "}
          <code>react-select</code> ou <code>react-datepicker</code>.
        </p>
        <p>
          A forma mais fácil de usar é{" "}
          <Link to="/api#Controller">Controller</Link> utilizar um componente
          por volta, que irá tomar conta de registrar customizadamente o
          processo para você.
        </p>

        <CodeArea rawData={uiLibraryHookInput} />
        <p>
          <b className={typographyStyles.note}>Opção 3:</b> Por último, podemos
          setar um registro customizado usando{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://reactjs.org/docs/hooks-effect.html"
          >
            useEffect
          </a>{" "}
          Hook e atualizar o valor via{" "}
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
    title: "Integre com o estado global",
    description: `React Hook Form não requer, que você tenha um gerenciador de estado para armazenar os dados, mas você pode facilmente integrar-lo a um.`,
  },
  reactNative: {
    title: "React Native",
    description: (
      <p>
        Você obterá o mesmo aprimoramento de desempenho de um Componente Não
        Controlado. No entanto, existem certas APIs que não são compatíveis com
        React Native (devido a diferença de API da Web e nativa). Você terá que
        usar um <b>registro manual</b> como mostra o seguinte exemplo.
      </p>
    ),
  },
  typeScript: {
    title: "TypeScript",
    description: (
      <p>
        React Hook Form é construído com <code>Typescript</code>, então você
        pode definir um tipo <code>FormData</code> para suportar os valores do
        formulário.
      </p>
    ),
  },
  errors: {
    title: "Lide com erros",
    description: (
      <>
        React Hook Form provê um objeto de <code>errors</code> para exibir que
        seu formulário possui erros.
      </>
    ),
  },
}
