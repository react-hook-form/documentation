import * as React from "react"
import { Note } from "../../styles/typography"
import { CodeAsLink, Table, TableWrapper } from "../../components/ApiPage"
import colors from "../../styles/colors"

export default {
  title: "FAQs",
  header: {
    title: "FAQs",
    description: "questões frequentemente perguntadas.",
  },
  questions: [
    {
      title: "Performance do React Hook Form",
      description: (
        <p>
          Performance é um dos objetivos principais, para construir esse hook
          customizável. React Hook Form depende de componentes incontroláveis,
          consequentemente a razão da função de 'register' ocorre com o uso do
          ref. Esta abordagem irá reduzir o total de re-renderização ocorridas
          pela escrita do usuário ou mudança de valores. Componentes montados
          na página são mais rápidos porque eles não são controlados. Para
          montar com velocidade, Eu tenho um guia completo de comparações
          rápidas, que você pode conferir em{" "}
          <a
            href="https://github.com/bluebill1049/react-hook-form-performance-compare"
            target="_blank"
            rel="noopener noreferrer"
          >
            o link deste repositório
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
            Component não controlado
          </a>
          , que nos possibilita construir formulários acessíveis e
          customizados facilmente.
        </p>
      ),
    },
    {
      title: "Funciona com componentes de classe?",
      description: (
        <>
          <p>
            Não, não nesta abordagem. mas você pode criar um embrulho por
            volta e usar como componente de classe.
          </p>

          <blockquote>
            Você nao pode utilizar o Hooks dentro de um componente de classe,
            mas você pode definir uma classe mista e funções de componente com
            Hooks em uma única árvore. Se um componente é uma classe ou função
            que use o Hooks, é um detalhe de implementação do componente. A
            longo prazo esperamos que o Hooks seja a forma principal de
            escrever componentes no React.
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
                formulário, e apenas limpa
                <code>input/select/checkbox</code>.
              </p>
            </li>
            <li>
              <b>
                React Hook Form API: <code>reset()</code>
              </b>
              <p>
                React Hook Form's <code>reset</code> método irá limpar todos
                os valores do formulário, e também irá limpar todos os{" "}
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
          <code>defaultValue</code> ou <code>defaultChecked</code> para um
          campo individual. Entretanto, o hook mesmo provê uma forma simples
          de inicializar todos os valores dos campos também. Como o exemplo
          abaixo:
        </p>
      ),
    },
    {
      title: "Como compartilhar o uso do ref?",
      description: (
        <p>
          React Hook Form precisa do <code>ref</code> para coletar o valor do
          campo, entretanto, você pode querer usar o <code>ref</code> para
          outros propósitos (ex. rolar dentro de uma página). O seguinte
          exemplo irá mostrar como.
        </p>
      ),
    },
    {
      title: "E se eu não tiver acesso ao ref?",
      description: (
        <>
          <p>
            Você pode atualmente usar o <code>register</code> em um campo sem
            o <code>ref</code>. De fato, você pode manualmente usar{" "}
            <code>setValue</code>, <code>setError</code> e{" "}
            <code>triggerValidation</code>.
          </p>

          <p>
            <Note>Nota:</Note> caso <code>ref</code> não tem sido registrado,
            React Hook Form não será capaz de registrar eventos do campo. Isso
            significa que você terá que manualmente atualizar e setar os
            erros.
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
      title:
        "Por que o primeiro pressionamento de tecla não está funcionando?",
      description: (
        <>
          <p>
            Confira se você está usando o <code>value</code> ao invés de{" "}
            <code>defaultValue</code>.
          </p>

          <p>
            React Hook Form é construido com base em componentes não
            controlados, que significa que você não pode alterar o campo{" "}
            <code>value</code> através do <code>state</code> por{" "}
            <code>onChange</code>. Consequentemente você não precisa{" "}
            <code>value</code> de toda forma, de fato você apenas precisa{" "}
            <code>defaultValue</code> para valor inicial do campo.
          </p>
        </>
      ),
    },
    {
      title: "Teste falhou devido ao MutationObserver?",
      description: (
        <p>
          Se você tem dificuldade durante o teste e o problema causado foi por{" "}
          <code>MutationObserver</code>. Tenha certeza se instalou{" "}
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
            Antes de tudo, todas as bibliotecas tentam resolver o mesmo
            problema que está tornando a experiência de criação de formulários
            fácil e ótima. No entanto, existem algumas diferenças fundamentais
            entre os três, o formulário react-hook-hook é construído com a
            entrada descontrolada em mente e tenta fornecer ao seu formulário
            o melhor desempenho e a menor renderização possível, se possível.
            Além disso, o formulário reat-hook é criado pelo React Hook e
            usado como hook, o que significa que não há nenhum componente para
            você importar. Aqui estão algumas das diferenças de detalhes:
          </p>

          <TableWrapper>
            <Table>
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
                    não controlado
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
                    <Note>5.3KB</Note>
                  </code>
                </td>
                <td>
                  Médio
                  <br />
                  <code>
                    formik@2.0.1
                    <br />
                    <Note>14.4KB</Note>
                  </code>
                </td>
                <td>
                  Alto
                  <br />
                  <code>
                    redux-form@8.2.6
                    <br />
                    <Note>27KB</Note>
                  </code>
                </td>
              </tr>
              <tr>
                <td>
                  <b>Validação</b>
                </td>
                <td>
                  Construídos com &{" "}
                  <a href="https://github.com/jquense/yup" target="_blank">
                    Yup
                  </a>
                </td>
                <td>
                  Construa seu próprio &{" "}
                  <a href="https://github.com/jquense/yup" target="_blank">
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
                  Comunidade Grande: Bem mantida a biblioteca pela
                  comunidade
                </td>
              </tr>
              </tbody>
            </Table>
          </TableWrapper>
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
            React-hook-form não é recmoendado para construçãoo de formulário
            controlado, entretantoo você pode utilizar facilmente.
          </p>
          <p>
            O truque utilizando <code>watch</code> API para monitoroar cada
            input e mudar o valor assinado a prop
          </p>
          <p>
            Alternativamente, você pode usar um componente por volta{" "}
            <a href="https://www.react-hook-form.com/api#Controller">
              title="React Hook Form Controller Controller
            </a>{" "}
            que tomará conta de registrar customizadamente para voocê.
          </p>
        </>
      ),
    },
    // Todo: translate please
    {
      title: "Testing React Hook Form",
      description: (
        <div>
          <ul>
            <li>
              <p>
                Why am I getting <code>act</code> warning?
              </p>

              <p>
                All validation methods in React Hook Form will be treated as
                async functions, so it's important to wrap <code>async</code>{" "}
                around your{" "}
                <CodeAsLink
                  href="https://reactjs.org/docs/test-utils.html#act"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  act
                </CodeAsLink>
                .
              </p>
            </li>
            <li>
              <p>Why input change is not fire event?</p>

              <p>
                React Hook Form using <code>input</code> event for input
                change, so to fix it. you can easily switch to{" "}
                <code>fireEvent.input</code> for react-testing-library
              </p>
            </li>
          </ul>
        </div>
      ),
    },
  ],
}
