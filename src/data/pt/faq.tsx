import * as React from "react"
import colors from "../../styles/colors"
import typographyStyles from "../../styles/typography.module.css"
import tableStyles from "../../styles/table.module.css"
import buttonStyles from "../../styles/button.module.css"
import CodeArea from "../../components/CodeArea"
import focusController from "../../components/codeExamples/focusController"
import toggleFields from "../../components/codeExamples/toggleFields"

export default {
  title: "FAQs",
  header: {
    title: "FAQs",
    description: "Perguntas feitas frequentemente",
  },
  questions: [
    {
      title: "Performance do React Hook Form",
      description: (
        <p>
          Performance é um dos objetivos principais para construir esse hook
          customizável. React Hook Form depende de componentes não controlados,
          consequentemente, esta é a razão pela qual a função de 'register'
          estar no ref. Esta abordagem irá reduzir o total de novas
          renderizações ocorridas pela digitação do usuário ou mudança de
          valores. Componentes montados na página são mais rápidos porque eles
          não são controlados. Para montar com velocidade, Eu tenho um guia
          completo de comparações rápidas, que você pode conferir neste{" "}
          <a
            href="https://github.com/bluebill1049/react-hook-form-performance-compare"
            target="_blank"
            rel="noopener noreferrer"
          >
            link
          </a>
          .
        </p>
      ),
    },
    {
      title: "Como criar campos de erros e mensagens acessíveis?",
      description: (
        <p>
          React Hook Form é baseado em{" "}
          <a
            href="https://reactjs.org/docs/uncontrolled-components.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            Componentes não controlados
          </a>
          , que nos possibilita construir formulários acessíveis e customizados
          facilmente.
        </p>
      ),
    },
    {
      title: "Funciona com componentes de classe?",
      description: (
        <>
          <p>
            Não, não nesta abordagem. mas você pode empacotar os componentes e
            usar como componente de classe.
          </p>

          <blockquote>
            Você nao pode utilizar o Hooks dentro de um componente de classe,
            mas você pode definir uma classe mista e funções de componente com
            Hooks em uma única árvore. Se um componente é uma classe ou função
            que use o Hooks, é um detalhe de implementação do componente. A
            longo prazo esperamos que o Hooks seja a forma principal de escrever
            componentes no React.
          </blockquote>
        </>
      ),
    },
    {
      title: "Como limpar um formulário?",
      description: (
        <>
          <p>Há dois métodos para limpar formulário.</p>
          <ul>
            <li>
              <b>HTMLFormElement.reset()</b>
              <p>
                Este método faz a mesma coisa que clicar no botão reset do
                formulário, e apenas limpa <code>input/select/checkbox</code>.
              </p>
            </li>
            <li>
              <b>
                API do React Hook Form: <code>reset()</code>
              </b>
              <p>
                React Hook Form's <code>reset</code> método irá limpar todos os
                valores do formulário, e também irá limpar todos os{" "}
                <code>errors</code> dentro do formulário.
              </p>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Como inicializar o formulário com valores?",
      description: (
        <p>
          O formulário React Hook depende de um componente não controlado. Com
          um componente não controlado, você pode especificar um{" "}
          <code>defaultValue</code> ou <code>defaultChecked</code> para um campo
          individual. Entretanto, o hook mesmo provê uma forma simples de
          inicializar todos os valores dos campos também. Como o exemplo abaixo:
        </p>
      ),
    },
    {
      title: "Como compartilhar o uso do ref?",
      description: (
        <p>
          React Hook Form precisa do <code>ref</code> para coletar o valor do
          campo, entretanto, você pode querer usar o <code>ref</code> para
          outros propósitos (ex. rolar dentro de uma página). O seguinte exemplo
          irá mostrar como.
        </p>
      ),
    },
    {
      title: "E se eu não tiver acesso ao ref?",
      description: (
        <>
          <p>
            Você pode atualmente usar o <code>register</code> em um campo sem o{" "}
            <code>ref</code>. De fato, você pode manualmente usar{" "}
            <code>setValue</code>, <code>setError</code> e <code>trigger</code>.
          </p>

          <p>
            <b className={typographyStyles.note}>Nota:</b> caso <code>ref</code>{" "}
            não tem sido registrado, React Hook Form não será capaz de registrar
            eventos do campo. Isso significa que você terá que manualmente
            atualizar e setar os erros.
          </p>
        </>
      ),
    },
    {
      title: "Suporte ao navegador?",
      description: (
        <>
          <p>React Hook Form suporta todos os principais navegadores.</p>

          <p>
            Para suporte legado ao IE11, Você pode importar a versão
            react-hook-form IE 11.
          </p>
        </>
      ),
    },
    {
      title: "Por que o primeiro pressionamento de tecla não está funcionando?",
      description: (
        <>
          <p>
            Confira se você está usando o <code>value</code> ao invés de{" "}
            <code>defaultValue</code>.
          </p>

          <p>
            React Hook Form é construido com base em componentes não
            controlados, que significa que você não pode alterar o campo{" "}
            <code>value</code> através do <code>state</code> pelo{" "}
            <code>onChange</code>. Consequentemente você não precisa do{" "}
            <code>value</code> de toda forma, de fato você apenas precisa do{" "}
            <code>defaultValue</code> para o valor inicial do campo.
          </p>
        </>
      ),
    },
    {
      title: "Teste falhou devido ao MutationObserver?",
      description: (
        <p>
          Se você tiver dificuldade durante o teste e o problema causado foi
          pelo <code>MutationObserver</code>. Tenha certeza se instalou{" "}
          <code>mutationobserver</code> e importe o pacote em seu teste{" "}
          <a
            href="https://jestjs.io/docs/en/configuration"
            target="_blank"
            rel="noopener noreferrer"
          >
            setup.js file
          </a>
          .
        </p>
      ),
    },
    {
      title: "React Hook Form, Formik ou Redux Form?",
      description: (
        <>
          <p>
            Antes de tudo, todas as bibliotecas tentam resolver o mesmo problema
            o que está tornando a experiência de criação de formulários fácil e
            ótima. No entanto, existem algumas diferenças fundamentais entre os
            três, react-hook é construído com a inputs não controlados em mente
            e tenta fornecer ao seu formulário o melhor desempenho e a menor
            renderização possível. Além disso, o formulário react-hook-form foi
            construido pelo React Hook e usado como hook, o que significa que
            não há nenhum componente para você importar. Aqui estão algumas das
            diferenças de detalhes:
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
                      rel="noopener noreferrer"
                    >
                      não controlado
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://reactjs.org/docs/forms.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      controlado
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://reactjs.org/docs/forms.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      controlado
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Renderizando</b>
                  </td>
                  <td>re renderização minima</td>
                  <td>
                    renderize novamente de acordo com as mudanças de estado
                    local, o que significa que você digita a entrada.
                  </td>
                  <td>
                    renderize novamente de acordo com as alterações da
                    biblioteca de gerenciamento de estado (Redux), quando você
                    digita em um campo.
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
                    <b>Tamanho do pacote</b>
                  </td>
                  <td>
                    Pequeno
                    <br />
                    <code>
                      react-hook-form@3.26.2
                      <br />
                      <b className={typographyStyles.note}>5.3KB</b>
                    </code>
                  </td>
                  <td>
                    Médio
                    <br />
                    <code>
                      formik@2.0.1
                      <br />
                      <b className={typographyStyles.note}>14.4KB</b>
                    </code>
                  </td>
                  <td>
                    Alto
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
                    <b>Validação</b>
                  </td>
                  <td>
                    Construídos com &{" "}
                    <a
                      href="https://github.com/jquense/yup"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Yup
                    </a>
                  </td>
                  <td>
                    Construa seu próprio &{" "}
                    <a
                      href="https://github.com/jquense/yup"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Yup
                    </a>
                  </td>
                  <td>Construa seu próprio & Plugin</td>
                </tr>
                <tr>
                  <td>
                    <b>Curva de aprendizado</b>
                  </td>
                  <td>Baixo</td>
                  <td>Medium</td>
                  <td>Alto</td>
                </tr>
                <tr>
                  <td>
                    <b>Status</b>
                  </td>
                  <td>Comunidade Pequena: Novas bibliotecas e crescimento</td>
                  <td>
                    Comunidade Média: Bem mantida a biblioteca pela comunidade
                  </td>
                  <td>
                    Comunidade Grande: Bem mantida a biblioteca pela comunidade
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: "Pode funcionar com componente controlado?",
      description: (
        <>
          <p>
            Resposta simples: <b>Sim</b>
          </p>
          <p>
            React-hook-form não é recomendado para construçãoo de formulários
            controlados, entretanto você pode utilizar facilmente.
          </p>
          <p>
            O truque utilizando <code>watch</code> API para monitorar cada input
            e mudar o valor assinado a prop
          </p>
          <p>
            Alternativamente, você pode usar um componente por volta{" "}
            <a
              href="https://www.react-hook-form.com/api#Controller"
              title="React Hook Form Controller"
            >
              Controller
            </a>{" "}
            que tomará conta de registrar customizadamente para voocê.
          </p>
        </>
      ),
    },
    {
      title: "Testando React Hook Form",
      description: (
        <div>
          <ul>
            <li>
              <p>
                Por que estou recebendo o alerta <code>act</code>?
              </p>

              <p>
                Todas os métodos de validação nocReact Hook Form serão tratados
                como funções assíncronas, então, é importante utilizar{" "}
                <code>async</code> no entorno do seu{" "}
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
              <p>Por que a mudança do campo não está acionando eventos?</p>

              <p>
                React Hook Form utiliza <code>input</code> eventos para mudança
                de campos, então para corrigir isto você pode simplesmente
                substituir <code>fireEvent.input</code> por
                react-testing-library
              </p>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "watch vs getValues vs state",
      description: (
        <div>
          <ul>
            <li>
              <p>
                <b className={typographyStyles.note}>watch:</b> subscreve no
                Input Change via Event Listener e renderiza novamente baseado em
                qual campo está subscrito. A re-renderização basea-se em qual
                input está sendo assistido/subscrito. Veja{" "}
                <a
                  href="https://codesandbox.io/s/react-hook-form-watch-with-radio-buttons-and-select-examples-ovfus"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  este codesandbox
                </a>{" "}
                do atual comportamento.
              </p>
            </li>
            <li>
              <p>
                <b className={typographyStyles.note}>getValues</b>: get value
                que é armazenado dentro do hook customizado como referência,
                rápido e barato. Este método não dispara o re-render;
              </p>
            </li>
            <li>
              <p>
                <b className={typographyStyles.note}>local state</b>: React
                local state representa mais que apenas o estado do Input mas
                também decide o que renderizar. Isso irá disparar em cada
                mudança nos inputs.
              </p>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title:
        "Why is default value not changing correctly with ternary operator?",
      description: (
        <>
          <p>
            React Hook Form não controla toda sua forma e insumos, o que é a
            razão pela qual Reagir não reconheceria a real contribuição que tem
            foram trocados ou trocados. Como solução, você pode resolver isto
            problema ao dar um único <code>key</code> adereço a sua entrada.
            Você também pode ler mais sobre os principais adereços de{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://kentcdodds.com/blog/understanding-reacts-key-prop"
            >
              este artigo escrito por Kent C. Dodds
            </a>
            .
          </p>
          <CodeArea
            rawData={toggleFields}
            url="https://codesandbox.io/s/react-hook-form-faq-toggle-fields-4mp39"
          />
        </>
      ),
    },
    {
      title: "Controller not working with shouldFocusError?",
      description: (
        <>
          <p>
            After a validation error, React Hook Form will automatically focus
            on the invalids elements of which have their proper ref, like the
            native inputs (eg: <code>{`<input />`}</code>) or some 3rd party
            Components that correctly export his ref (eg: from MUI{" "}
            <code>{`<TextField inputRef={register({required: 'Field Required'})} />`}</code>
            )
          </p>

          <p>
            However, for some 3rd party controlled Components (like{" "}
            <code>{`<Autocomplete>`}</code> from MUI or <code>{`<XX>`}</code>{" "}
            from AntD) it's very difficult to predict his ref because the
            formats changes, so React Hook Form will properly detect the
            validation error but will not be able to automatically focus that
            kind of Components.
          </p>

          <p>
            As a workaround, after the validation error, you can manually focus
            on the 3rd party controlled Component (if you can get the actual
            internal input ref), for example:
          </p>
          <CodeArea rawData={focusController} />

          <p>
            If you find difficult to make the autofocus with external controlled
            component. It is possible to disable the "autofocus on error"
            feature. Maybe this behavior will bring a better user experience in
            some cases. <code>{`useForm({shouldFocusError: false});`}</code>
          </p>
        </>
      ),
    },
    {
      title: "How to work with modal or tab forms?",
      description: (
        <>
          <p>
            É importante entender que o React Hook Form adota a forma nativa
            comportamento pelo estado de entrada da loja dentro de cada entrada
            (exceto
            <code>registre-se</code> em <code>useEffect</code>). Um dos comuns
            equívocos é quando se trabalha com formulários modais ou de guias,
            montando e desmontar formulário / entradas que o estado das entradas
            permanecerá. Isso é implementação incorreta, em vez disso, a solução
            correta deve sempre criando um novo formulário para o formulário
            dentro do modal ou de cada guia e capture seus dados de envio no
            estado local ou global.
          </p>

          <ul>
            <li>
              <a
                href="https://codesandbox.io/s/react-hook-form-modal-form-conditional-inputs-c7n0r"
                target="_blank"
                rel="noopener noreferrer"
              >
                Modal form and toggle inputs Example
              </a>
            </li>
            <li>
              <a
                href="https://codesandbox.io/s/tabs-760h9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tab Form Example
              </a>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Aviso de componente não montado?",
      description: (
        <>
          <p>
            Executar a função de submissão de assimetria enquanto{" "}
            <code>useFormulário</code> obtém não montado resultará no seguinte
            aviso de Reagir em <b>dev build</b>.
          </p>
          <blockquote>
            Não é possível realizar uma atualização do estado Reage em um
            componente não montado.
          </blockquote>
          <p>
            Este não é o mesmo caso na construção de produtos, tal comportamento
            é feito de modo que nós são compatíveis com o Reage fast refresh.
            Inputs' <code>ref</code> não será executado novamente durante a
            atualização rápida, por isso temos desativou a verificação do gancho
            de desmontagem apenas no dev.
          </p>
        </>
      ),
    },
  ],
}
