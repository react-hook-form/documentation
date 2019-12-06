import * as React from "react"
import { Note } from "../styles/typography"
import { Table, TableWrapper } from "../components/ApiPage"
import colors from "../styles/colors"

export default {
  title: {
    en: "FAQs",
    pt: "FAQs",
    kr: "자주 묻는 질문",
    jp: "FAQs",
    zh: "常见问题",
  },
  header: {
    en: {
      title: "FAQs",
      description: "frequently asked question.",
    },
    pt: {
      title: "FAQs",
      description: "questões frequentemente perguntadas.",
    },
    kr: {
      title: "자주 묻는 질문",
      description: "자주 묻는 질문",
    },
    jp: {
      title: "FAQs",
      description: "よくある質問と答え。",
    },
    zh: {
      title: "常见问题",
      description: "经常问的问题。",
    },
  },
  questions: {
    en: [
      {
        title: "Performance of React Hook Form",
        description: (
          <p>
            Performance is one of the primary goals for building this custom
            hook. React Hook Form relies on uncontrolled component, hence the
            reason why the register function occurs at the ref. This approach
            will reduce the amount of re-rendering occurring due to user typing
            or value changing. Components mount to the page is much quicker as
            well because they are not controlled. For mounting speed, I have
            completed a quick comparison test which you can refer to by{" "}
            <a
              href="https://github.com/bluebill1049/react-hook-form-performance-compare"
              target="_blank"
              rel="noopener noreferrer"
            >
              this repo link
            </a>
            .
          </p>
        ),
      },
      {
        title: "How to create an accessible input error and message?",
        description: (
          <p>
            React Hook Form is based on{" "}
            <a
              href="https://reactjs.org/docs/uncontrolled-components.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Uncontrolled Component
            </a>
            , which gives you the ability to build an accessible custom form
            easily.
          </p>
        ),
      },
      {
        title: "Does it work with Class Components?",
        description: (
          <>
            <p>
              No, not out of box. but you can build a wrapper around it and use
              in your Class Component.
            </p>

            <blockquote>
              You can’t use Hooks inside of a class component, but you can
              definitely mix classes and function components with Hooks in a
              single tree. Whether a component is a class or a function that
              uses Hooks is an implementation detail of that component. In the
              longer term, we expect Hooks to be the primary way people write
              React components.
            </blockquote>
          </>
        ),
      },
      {
        title: "How to reset the form?",
        description: (
          <>
            <p>There are two methods to clear the form.</p>
            <ul>
              <li>
                <b>HTMLFormElement.reset()</b>
                <p>
                  This method does the same thing as clicking a form's reset
                  button, and only clears
                  <code>input/select/checkbox</code> values.
                </p>
              </li>
              <li>
                <b>
                  React Hook Form API: <code>reset()</code>
                </b>
                <p>
                  React Hook Form's <code>reset</code> method will reset all
                  fields value, and also will clear all <code>errors</code>{" "}
                  within the form.
                </p>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "How to initialize form values?",
        description: (
          <p>
            React Hook Form relies on uncontrolled component. With an
            uncontrolled component, you can specify a <code>defaultValue</code>{" "}
            or <code>defaultChecked</code> to an individual field. However, the
            hook itself does provide an easier way to initialise all input
            values too. Example below:
          </p>
        ),
      },
      {
        title: "How to share ref usage?",
        description: (
          <p>
            React Hook Form needs <code>ref</code> to collect the input value,
            however, you may want to use <code>ref</code> for other purposes
            (eg. scroll into the view). The following example will show you how.
          </p>
        ),
      },
      {
        title: "What if you don't have access to ref?",
        description: (
          <>
            <p>
              You can actually <code>register</code> an input without a{" "}
              <code>ref</code>. In fact, you can manually <code>setValue</code>,{" "}
              <code>setError</code> and <code>triggerValidation</code>.
            </p>

            <p>
              <Note>Note:</Note> Because <code>ref</code> has not been
              registered, React Hook Form won't be able to register event
              listeners to the inputs. This means you will have to manually
              update value and error.
            </p>
          </>
        ),
      },
      {
        title: "Browser Support?",
        description: (
          <>
            <p>React Hook Form support all major browsers.</p>

            <p>
              For legacy IE11 support, you can import react-hook-form IE 11
              version.
            </p>
          </>
        ),
      },
      {
        title: "Why is first keystroke is not working?",
        description: (
          <>
            <p>
              Double check if you are using <code>value</code> instead of{" "}
              <code>defaultValue</code>.
            </p>

            <p>
              React Hook Form is built based on uncontrolled input, which means
              you don't need to change input <code>value</code> via{" "}
              <code>state</code> by <code>onChange</code>. Hence you don't need{" "}
              <code>value</code> at all, in fact, you only need{" "}
              <code>defaultValue</code> for initial input value.
            </p>
          </>
        ),
      },
      {
        title: "Testing failed due to MutationObserver?",
        description: (
          <p>
            If you have difficulty during testing and the issue was caused by{" "}
            <code>MutationObserver</code>. Make sure you install{" "}
            <code>mutationobserver</code> and import this package in your test{" "}
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
        title: "React Hook Form, Formik or Redux Form?",
        description: (
          <>
            <p>
              First of all, all libs try to solve the same problem which is
              making form building experience easy and great. However, there are
              some fundamental differences between the three, react-hook-form is
              built with uncontrolled input in mind and tries to provide your
              form with best performance and least re-render if possible. On top
              of that, react-hook-form is built by React Hook and used as hook,
              which means there is no Component for you to import. Here are some
              of the detail differences:
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
                      <b>Component</b>
                    </td>
                    <td>
                      <a
                        href="https://reactjs.org/docs/uncontrolled-components.html"
                        target="_blank"
                      >
                        uncontrolled
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://reactjs.org/docs/forms.html"
                        target="_blank"
                      >
                        controlled
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://reactjs.org/docs/forms.html"
                        target="_blank"
                      >
                        controlled
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Rendering</b>
                    </td>
                    <td>minimum re-render</td>
                    <td>
                      re-render according to local state changes which means as
                      you type in the input.
                    </td>
                    <td>
                      re-render according to state management lib (Redux)
                      changes which means as you type in the input.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>API</b>
                    </td>
                    <td>Hooks</td>
                    <td>Component (RenderProps, Form, Field) + Hooks</td>
                    <td>Component (RenderProps, Form, Field)</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Package size</b>
                    </td>
                    <td>
                      Small
                      <br />
                      <code>
                        react-hook-form@3.26.2
                        <br />
                        <Note>5.3KB</Note>
                      </code>
                    </td>
                    <td>
                      Medium
                      <br />
                      <code>
                        formik@2.0.1
                        <br />
                        <Note>14.4KB</Note>
                      </code>
                    </td>
                    <td>
                      Large
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
                      <b>Validation</b>
                    </td>
                    <td>
                      Built-in &{" "}
                      <a href="https://github.com/jquense/yup" target="_blank">
                        Yup
                      </a>
                    </td>
                    <td>
                      Build your own &{" "}
                      <a href="https://github.com/jquense/yup" target="_blank">
                        Yup
                      </a>
                    </td>
                    <td>Build your own & Plugins</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Learning curve</b>
                    </td>
                    <td>Low</td>
                    <td>Medium</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Status</b>
                    </td>
                    <td>Small Community: New lib and growing</td>
                    <td>
                      Large Community: Well established form lib in the
                      community
                    </td>
                    <td>
                      Large Community: Well established form lib in the
                      community
                    </td>
                  </tr>
                </tbody>
              </Table>
            </TableWrapper>
          </>
        ),
      },
      {
        title: "Can it work with Controlled component?",
        description: (
          <>
            <p>
              Short answer: <b>Yes</b>
            </p>
            <p>
              React-hook-form is not recommending you to build form controlled,
              however you can still achieve that easily.
            </p>
            <p>
              The trick to using <code>watch</code> API to monitor each input's
              change and assign to value prop.
            </p>
            <p>
              Alternatively, you can use our wrapper component{" "}
              <a
                href="https://github.com/react-hook-form/react-hook-form-input"
                target="_blank"
                rel="noreferrer noopener"
              >
                React Hook Form Input
              </a>{" "}
              which take care those custom register for you.
            </p>
          </>
        ),
      },
    ],
    pt: [
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
              <a
                href="https://github.com/react-hook-form/react-hook-form-input"
                target="_blank"
                rel="noreferrer noopener"
              >
                React Hook Form Input
              </a>{" "}
              que tomará conta de registrar customizadamente para voocê.
            </p>
          </>
        ),
      },
    ],
    kr: [
      {
        title: "React Hook Form 의 퍼포먼스",
        description: (
          <p>
            이 커스텀 훅을 만들 때 가장 먼저 고려된 목표 중 하나가
            퍼포먼스입니다. React Hook Form 은 비제어 컴포넌트를 활용하고 있기
            때문에 <code>ref</code> 에서 <code>register</code> 함수가
            실행됩니다. 이러한 접근 방식은 사용자가 타이핑하거나 값을 변경할 때
            리랜더링이 일어나는 양을 줄여줄 것입니다. 제어 컴포넌트가 아니기
            때문에 페이지에 컴포넌트가 마운트되는 속도도 훨씬 더 빠릅니다.{" "}
            마운트되는 속도에 대해 여러분이 참고하실 수 있도록 간단한 속도 비교
            테스트를{" "}
            <a
              href="https://github.com/bluebill1049/react-hook-form-performance-compare"
              target="_blank"
              rel="noopener noreferrer"
            >
              이 저장소에
            </a>{" "}
            올려 두었습니다.
          </p>
        ),
      },
      {
        title: "접근성 있는 입력 에러와 메세지를 어떻게 만드나요?",
        description: (
          <p>
            React Hook Form 은{" "}
            <a
              href="https://ko.reactjs.org/docs/uncontrolled-components.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              비제어 컴포넌트
            </a>
            를 기반으로 하고 있으므로, 접근성이 높은 커스텀 폼을 쉽게 만들 수
            있습니다.
          </p>
        ),
      },
      {
        title: "클래스 컴포넌트와 사용할 수 있나요?",
        description: (
          <>
            <p>
              아니오. 사용할 수 없습니다만, 클래스 컴포넌트를 감싸는 래퍼를 만들
              수는 있습니다.
            </p>

            <blockquote>
              여러분은 클래스 컴포넌트 안에서 훅을 사용할 수 없습니다. 하지만
              확실히 클래스 컴포넌트와 훅을 사용하는 함수 컴포넌트를 같은 트리
              안에서 섞어 사용할 수 있습니다. 컴포넌트가 클래스인지, 훅을
              사용하는 함수 컴포넌트인지는 개별 컴포넌트의 세부 구현에
              불과합니다. 긴 안목으로 보아 우리는 사람들이 훅을 우선적으로
              고려하여 리액트 컴포넌트를 작성하길 기대합니다.
            </blockquote>
          </>
        ),
      },
      {
        title: "폼을 어떻게 리셋하나요?",
        description: (
          <>
            <p>폼을 초기화하는데 두 가지 방법이 있습니다.</p>
            <ul>
              <li>
                <b>HTMLFormElement.reset()</b>
                <p>
                  이 메서드는 폼의 리셋 버튼을 누르는 것과 똑같이 동작하지만,
                  오로지 <code>input/select/checkbox</code> 값들만 초기화합니다.
                </p>
              </li>
              <li>
                <b>
                  React Hook Form API: <code>reset()</code>
                </b>
                <p>
                  React Hook Form 의 <code>reset</code> 메서드는 모든 필드 값을{" "}
                  리셋하며, 또한 폼 안의 모든 <code>errors</code> 를{" "}
                  초기화합니다.
                </p>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "어떻게 폼의 기본값을 설정하나요?",
        description: (
          <p>
            React Hook Form 은 비제어 컴포넌트를 활용합니다. 비제어 컴포넌트를
            사용하면 <code>defaultValue</code> 나 <code>defaultChecked</code>{" "}
            값을 개별 필드에 넣어 기본값을 설정할 수 있습니다. 하지만 훅에서
            기본적으로 손쉽게 모든 인풋의 기본값을 설정할 수 있는 방법을
            제공합니다. 아래의 예제를 보세요.
          </p>
        ),
      },
      {
        title: "ref 를 공유할 수 있나요?",
        description: (
          <p>
            React Hook Form 은 입력 값을 모으기 위해 <code>ref</code> 를 필요로
            합니다. 하지만 <code>ref</code> 를 다른 목적으로 (예: 해당 뷰로
            스크롤하기) 활용하고 싶을 수도 있습니다. 아래의 예제로 그 방법을
            확인해보세요.
          </p>
        ),
      },
      {
        title: "만약에 ref 에 접근할 수 없다면 어떻게 하죠?",
        description: (
          <>
            <p>
              사실 <code>ref</code> 없이 <code>register</code> 를 할 수
              있습니다. 수동으로 <code>setValue</code>, <code>setError</code>{" "}
              그리고 <code>triggerValidation</code> 를 사용하면 됩니다.
            </p>

            <p>
              <Note>참고:</Note> <code>ref</code> 가 등록되지 않았기 때문에,
              React Hook Form 은 인풋에 이벤트 리스너를 등록할 수 없을 겁니다.
              따라서 인풋 값과 에러를 수동으로 업데이트 해 주어야 합니다.
            </p>
          </>
        ),
      },
      {
        title: "브라우저 호환성은 어떤가요?",
        description: (
          <>
            <p>React Hook Form 은 모든 메이저 브라우저를 지원합니다.</p>

            <p>
              오래된 IE11 를 지원하려면, react-hook-form IE11 버전을 불러와서
              사용할 수 있습니다.
            </p>
          </>
        ),
      },
      {
        title: "왜 첫 번째 키 입력이 동작하지 않을까요?",
        description: (
          <>
            <p>
              <code>value</code> 대신에 <code>defaultValue</code> 를 사용하고
              있는지 다시 확인해주세요.
            </p>

            <p>
              React Hook Form 은 비제어 컴포넌트를 활용하기 때문에{" "}
              <code>onChange</code> 를 사용하여 <code>state</code> 를 바꾸고, 그
              값을 인풋의 <code>value</code> 에 반영해줄 필요가 없습니다. 따라서{" "}
              <code>value</code> 자체가 필요 없습니다. 사실 초기 값을 지정하고자
              할 때 <code>defaultValue</code> 만 넣어주면 됩니다.
            </p>
          </>
        ),
      },
      {
        title: "MutationObserver 때문에 테스트가 실패하는데요?",
        description: (
          <p>
            만약에 테스트하는데 어려움을 겪고 계시다면{" "}
            <code>MutationObserver</code> 때문입니다.{" "}
            <code>mutationobserver-shim</code> 패키지를 설치하고{" "}
            <a
              href="https://jestjs.io/docs/en/configuration"
              target="_blank"
              rel="noopener noreferrer"
            >
              setup.js 파일
            </a>
            에서 불러오세요.
          </p>
        ),
      },
      {
        title: "React Hook Form 을 Formik, Redux Form 과 비교한다면?",
        description: (
          <>
            <p>
              먼저, 모든 라이브러리들은 폼을 만드는 과정을 쉽고 좋게 만들겠다는
              공통의 문제를 해결하려고 합니다. 하지만 세 라이브러리는 약간
              근본적인 차이를 가지고 있고, react-hook-form 은 비제어 입력을
              기본으로 삼고 있습니다. 그리하여 여러분의 폼이 최대한의 퍼포먼스를
              내고 최소한의 리랜더링만 발생하도록 합니다. 그 위에
              react-hook-form 은 리액트 훅을 기반으로 만들어졌으며 훅으로
              사용됩니다. 따라서 별도의 컴포넌트를 불러올 필요가 없습니다.
              아래에 더 자세한 차이점을 표기했습니다.
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
                      <b>컴포넌트</b>
                    </td>
                    <td>
                      <a>
                        <a
                          href="https://ko.reactjs.org/docs/uncontrolled-components.html"
                          target="_blank"
                        >
                          비제어
                        </a>
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://ko.reactjs.org/docs/forms.html"
                        target="_blank"
                      >
                        제어
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://ko.reactjs.org/docs/forms.html"
                        target="_blank"
                      >
                        제어
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>랜더링</b>
                    </td>
                    <td>최소한의 리랜더링</td>
                    <td>인풋에 타이핑하면서 지역 상태가 변할떄마다 리랜더링</td>
                    <td>
                      인풋에 타이핑하면서 상태 관리 라이브러리(Redux)의 상태가
                      바뀔 때마다 리랜더링
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>API</b>
                    </td>
                    <td>훅</td>
                    <td>컴포넌트 (RenderProps, Form, Field) + 훅</td>
                    <td>컴포넌트 (RenderProps, Form, Field)</td>
                  </tr>
                  <tr>
                    <td>
                      <b>패키지 크기</b>
                    </td>
                    <td>
                      작음
                      <br />
                      <code>
                        react-hook-form@3.26.2
                        <br />
                        <Note />
                        <Note>5.3KB</Note>
                      </code>
                    </td>
                    <td>
                      중간
                      <br />
                      <code>
                        formik@2.0.1
                        <br />
                        <Note>14.4KB</Note>
                      </code>
                    </td>
                    <td>
                      큼
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
                      <b>유효성 검사</b>
                    </td>
                    <td>
                      내장됨 &{" "}
                      <a href="https://github.com/jquense/yup" target="_blank">
                        Yup
                      </a>
                    </td>
                    <td>
                      직접 만들어야 함 &{" "}
                      <a href="https://github.com/jquense/yup" target="_blank">
                        Yup
                      </a>
                    </td>
                    <td>직접 만들어야 함 & 플러그인</td>
                  </tr>
                  <tr>
                    <td>
                      <b>러닝 커브</b>
                    </td>
                    <td>낮음</td>
                    <td>중간</td>
                    <td>중간</td>
                  </tr>
                  <tr>
                    <td>
                      <b>현황</b>
                    </td>
                    <td>작은 커뮤니티: 새로운 라이브러리이며 성장 중</td>
                    <td>
                      큰 커뮤니티: 커뮤니티 안에서 잘 정립된 폼 라이브러리
                    </td>
                    <td>
                      큰 커뮤니티: 커뮤니티 안에서 잘 정립된 폼 라이브러리
                    </td>
                  </tr>
                </tbody>
              </Table>
            </TableWrapper>
          </>
        ),
      },
      {
        title: "Can it work with Controlled component?",
        description: (
          <>
            <p>
              Short answer: <b>Yes</b>
            </p>
            <p>
              React-hook-form is not recommending you to build form controlled,
              however you can still achieve that easily.
            </p>
            <p>
              The trick to using <code>watch</code> API to monitor each input's
              change and assign to value prop.
            </p>
            <p>
              또는 래퍼 구성 요소 인{" "}
              <a
                href="https://github.com/react-hook-form/react-hook-form-input"
                target="_blank"
                rel="noreferrer noopener"
              >
                React Hook Form Input
              </a>
              을 사용하여 사용자 지정 레지스터를 관리 할 수 ​​있습니다.
            </p>
          </>
        ),
      },
    ],
    jp: [
      {
        title: "React Hook Formのパフォーマンス",
        description: (
          <p>
            パフォーマンスはこのcustom hookを作成する主な目的の一つでした。
            React Hook
            Formでは非制御コンポーネントによってregister関数をrefで実行しています。
            このアプローチにより、ユーザーからの入力や値の変更により発生する再レンダリングの量を削減しています。
            コンポーネントのページへのマウントも制御されていないことによりはるかに高速になります。
            <a
              href="https://github.com/bluebill1049/react-hook-form-performance-compare"
              target="_blank"
              rel="noopener noreferrer"
            >
              こちら
            </a>
            の他のライブラリとのマウントスピードの簡単な比較をご覧下さい。
          </p>
        ),
      },
      {
        title: "アクセス可能な入力エラーとメッセージを作成するには？",
        description: (
          <p>
            React Hook Formは
            <a
              href="https://ja.reactjs.org/docs/uncontrolled-components.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              非制御コンポーネント
            </a>
            に基づいているため、アクセス可能なカスタムフォームを簡単に構築できます。
          </p>
        ),
      },
      {
        title: "クラスコンポーネントでも使えますか？",
        description: (
          <>
            <p>
              そのままでは動作しませんが、クラスコンポーネントを包むラッパーを作成して使用することは可能です。
            </p>

            <blockquote>
              クラスコンポーネント内でのHooksの使用は出来ませんが、クラスコンポーネントと
              Hooksを使用した関数コンポーネントを単一のDOM
              Tree内で混在させることは可能です。
              クラスコンポーネントかHooksを使用した関数コンポーネントのどちらを利用するかは、
              そのコンポーネントの実装の詳細に過ぎません。長い目で見れば、
              HooksはReactのコンポーネントを書く際の最初の選択肢になっていくだろうと私達は予想しています。
            </blockquote>
          </>
        ),
      },
      {
        title: "フォームをリセットするには？",
        description: (
          <>
            <p>フォームをリセットする方法は2つあります。</p>
            <ul>
              <li>
                <b>HTMLFormElement.reset()</b>
                <p>
                  フォームのリセットボタンのクリックと同等の効果を持つメソッドです。
                  フォーム内の
                  <code> input/select/checkbox </code>
                  要素の値のみリセットします。
                </p>
              </li>
              <li>
                <b>
                  React Hook Form API: <code>reset()</code>
                </b>
                <p>
                  React Hook Formの<code>reset</code>
                  メソッドは、フォーム内の全てのフィールドの値をリセットし、フォーム内の全ての
                  <code>errors</code>を消去します。
                </p>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "フォームの値を初期化するには？",
        description: (
          <p>
            React Hook Formは非制御コンポーネントによって出来ています。
            非制御コンポーネントでは、それぞれのfieldに対して
            <code>defaultValue</code>か<code>defaultChecked</code>
            を指定出来ます。
            実はこれよりも更に簡単な全てのインプット値の初期化方法をReact Hook
            Formは提供しています。 下記の例を参考して下さい。
          </p>
        ),
      },
      {
        title: "refを共有するには？",
        description: (
          <p>
            React Hook Form では入力値を取得するために<code>ref</code>
            が必要ですが、<code>ref</code>
            を他の目的（ビューへのスクロールなど）に使用することもできます。下記の例を参考して下さい。
          </p>
        ),
      },
      {
        title: "refへのアクセスが出来ない場合は？",
        description: (
          <>
            <p>
              実は<code>ref</code>を使わずとも<code>register</code>
              は使用出来ます。 加えて<code>setValue</code>と
              <code>setError</code>、<code>triggerValidation</code>
              の手動での使用も出来ます。
            </p>

            <p>
              <Note>注:</Note> ただし<code>ref</code>が登録されていないため,
              React Hook Formはinputのイベントリスナーへの登録が出来ず、
              そのため値やエラーの更新を手動で行わなければいけません
            </p>
          </>
        ),
      },
      {
        title: "ブラウザのサポートは？",
        description: (
          <>
            <p>React Hook Formは全ての主要なブラウザに対応しています。</p>

            <p>
              IE11をサポートしたい場合は、IE11バージョンのreact-hook-formをインポートして下さい。
            </p>
          </>
        ),
      },
      {
        title: "最初のキーストロークが機能しない場合は？",
        description: (
          <>
            <p>
              <code>defaultValue</code>の代わりに<code>value</code>
              を使っていないかよく確認して下さい。
            </p>

            <p>
              React Hook
              Formは非制御インプットを基にして作られているため、インプットの値を
              <code>onChange</code>で<code>state</code>
              を通して変更する必要はありません。
              <code>value</code>は使わずに、<code>defaultValue</code>
              でのインプットの初期値 の設定のみ行って下さい。
            </p>
          </>
        ),
      },
      {
        title: "MutationObserverが原因でテストに失敗した場合は？",
        description: (
          <p>
            テスト中に<code>MutationObserver</code>
            が原因の問題が発生した場合は、<code>mutationobserver</code>
            をインストールしテストの
            <a
              href="https://jestjs.io/docs/en/configuration"
              target="_blank"
              rel="noopener noreferrer"
            >
              setup.js
            </a>
            でインポートしてください。
          </p>
        ),
      },
      {
        title: "React Hook Form、FormikそれともRedux Form?",
        description: (
          <>
            <p>
              全てのライブラリはフォーム作成の体験を簡単で素晴らしいものにするという同じ問題を解決しようとしていますが
              、3つのライブラリーの間にはいくつかの根本的な違いがあります。
              react-hook-formは非制御入力を念頭に置いて開発されており、
              ベストパフォーマンスのフォームを提供しようとし、再レンダリング数を出来る限り少なく抑えています。
              さらに、react-hook-formはReact
              Hookによって構築され、hookとして使用されます。
              つまり、コンポーネントをインポートしません。詳細な違いを以下に示します。
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
                      <b>Component</b>
                    </td>
                    <td>
                      <a
                        href="https://ja.reactjs.org/docs/uncontrolled-components.html"
                        target="_blank"
                      >
                        uncontrolled
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://ja.reactjs.org/docs/forms.html"
                        target="_blank"
                      >
                        controlled
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://ja.reactjs.org/docs/forms.html"
                        target="_blank"
                      >
                        controlled
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Rendering</b>
                    </td>
                    <td>最小限の再レンダリング</td>
                    <td>
                      ローカル状態の変化に応じて再レンダリングします。つまり、入力時に変化します。
                    </td>
                    <td>
                      状態管理ライブラリ（Redux）の変更に応じて再レンダリングします。
                      これは、入力時に変化することを意味します。
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>API</b>
                    </td>
                    <td>Hooks</td>
                    <td>Component (RenderProps, Form, Field) + Hooks</td>
                    <td>Component (RenderProps, Form, Field)</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Package size</b>
                    </td>
                    <td>
                      小
                      <br />
                      <code>
                        react-hook-form@3.26.2
                        <br />
                        <Note />
                        <Note>5.3KB</Note>
                      </code>
                    </td>
                    <td>
                      中
                      <br />
                      <code>
                        formik@2.0.1
                        <br />
                        <Note>14.4KB</Note>
                      </code>
                    </td>
                    <td>
                      大
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
                      <b>Validation</b>
                    </td>
                    <td>
                      Built-in &{" "}
                      <a href="https://github.com/jquense/yup" target="_blank">
                        Yup
                      </a>
                    </td>
                    <td>
                      Build your own &{" "}
                      <a href="https://github.com/jquense/yup" target="_blank">
                        Yup
                      </a>
                    </td>
                    <td>Build your own & Plugins</td>
                  </tr>
                  <tr>
                    <td>
                      <b>学習曲線</b>
                    </td>
                    <td>低い</td>
                    <td>中</td>
                    <td>中</td>
                  </tr>
                  <tr>
                    <td>
                      <b>状況</b>
                    </td>
                    <td>小さなコミュニティ: 新しい成長中のライブラリ</td>
                    <td>
                      大きなコミュニティ:
                      コミュニティによって十分に確立されたフォームライブラリ
                    </td>
                    <td>
                      大きなコミュニティ:
                      コミュニティによって十分に確立されたフォームライブラリ
                    </td>
                  </tr>
                </tbody>
              </Table>
            </TableWrapper>
          </>
        ),
      },
      {
        title: "Can it work with Controlled component?",
        description: (
          <>
            <p>
              Short answer: <b>Yes</b>
            </p>
            <p>
              React-hook-form is not recommending you to build form controlled,
              however you can still achieve that easily.
            </p>
            <p>
              The trick to using <code>watch</code> API to monitor each input's
              change and assign to value prop.
            </p>
            <p>
              または、ラッパーコンポーネントの
              <a
                href="https://github.com/react-hook-form/react-hook-form-input"
                target="_blank"
                rel="noreferrer noopener"
              >
                React Hook Form Input
              </a>
              を使用して、これらのカスタムレジスタを処理できます。
            </p>
          </>
        ),
      },
    ],
    zh: [
      {
        title: "React Hook Form的性能",
        description: (
          <p>
            性能是构建这个自定义挂钩(Hook)的主要目标之一。 React Hook
            Form依赖于不受控制的组件，因此<code>register</code>函数发生在
            <code>ref</code>的原因。
            这种方法将减少由于用户输入或值改变而发生的重新render数量。
            组件安装到页面也更快，因为它们不受控制。
            其次对于安装速度，我已经完成了一个快速比较测试，
            <a
              href="https://github.com/bluebill1049/react-hook-form-performance-compare"
              target="_blank"
              rel="noopener noreferrer"
            >
              你可以通过这个链接来参考
            </a>
            。
          </p>
        ),
      },
      {
        title: "如何创建一个可访问的输入错误和消息？",
        description: (
          <p>
            React Hook Form基于不受控制
            <a
              href="https://reactjs.org/docs/uncontrolled-components.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              (Uncontrolled Component)
            </a>
            的组件，它使您能够轻松的构建自定义表单。
          </p>
        ),
      },
      {
        title: "它是否与Class类组件一起使用？",
        description: (
          <>
            <p>不, 但是你可以在它周围构建一个包装并在你的类组件中使用。</p>
          </>
        ),
      },
      {
        title: "如何重置表单？",
        description: (
          <>
            <p>有两种方法。</p>
            <ul>
              <li>
                <b>HTMLFormElement.reset()</b>
                <p>
                  此方法与单击表单的重置按钮相同，并且只清除
                  <code>input/select/checkbox</code>框值。
                </p>
              </li>
              <li>
                <b>
                  React Hook Form API: <code>reset()</code>
                </b>
                <p>
                  React Hook
                  Form的重置方法将重置所有字段值，并且还将清除表单中的所有错误。
                </p>
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "如何初始化值？",
        description: (
          <p>
            React Hook Form依赖于不受控制的组件。
            对于不受控制的组件，可以为单个表格加入默认值
            <code>defaultValue</code>或加入在默认选中的值
            <code>defaultChecked</code>。
            但是，钩子本身也提供了一种更简单的方法来初始化所有输入值。
            下面的例子:
          </p>
        ),
      },
      {
        title: "如何分享ref用法?",
        description: (
          <p>
            React Hook Form需要<code>ref</code>来收集输入值，但是，您可能需要将
            <code>ref</code>用于其他目的目的（例如，如果您想要使用它）。
            滚动到视图中）。 以下示例将向您展示如何。
          </p>
        ),
      },
      {
        title: "如果你没有访问ref怎么办？",
        description: (
          <>
            <p>
              您实际上可以在没有<code>ref</code>的情况下注册
              <code>register</code>输入。 事实上，您可以手动设置值，设置错误
              <code>setError</code>和触发验证<code>triggerValidation</code>。
            </p>

            <p>
              <Note>注意:</Note> 由于<code>ref</code>尚未注册，因此React Hook
              Form将无法加入侦听器(event listener)。
              这意味着您将不得不手动更新值和错误。
            </p>
          </>
        ),
      },
      {
        title: "浏览器支持?",
        description: (
          <>
            <p>React Hook Form支持所有主流浏览器。</p>

            <p>对于传统的IE11支持，您可以从IE11版本导入。</p>
          </>
        ),
      },
      {
        title: "为什么第一次按键不起作用？",
        description: (
          <>
            <p>
              仔细检查是否使用值<code>value</code>而不是默认值
              <code>defaultValue</code>。
            </p>

            <p>
              React Hook Form是基于不受控制的输入构建的，这意味着您不需要通过
              <code>onChange</code>更改输入值。
              因此，您根本不需要值，事实上，您只需要初始输入值<code>value</code>
              的默认值<code>defaultValue</code>。
            </p>
          </>
        ),
      },
      {
        title: "因MutationObserver测试失败?",
        description: (
          <p>
            如果您在测试过程中遇到困难，并且问题是由
            <code>MutationObserver</code>引起的。 确保安装
            <code>MutationObserver</code>并在测试设置中导入此包
            <a
              href="https://jestjs.io/docs/en/configuration"
              target="_blank"
              rel="noopener noreferrer"
            >
              setup.js file
            </a>
            文件。
          </p>
        ),
      },
      {
        title: "React Hook Form, Formik 或者 Redux Form?",
        description: (
          <>
            <p>
              首先，他们都在尝试解决同样的问题，使表单变的简单。
              然而，三者之间的一些根本性区别，react-hook-form是
              建立在不受控制的输入，并尝试提供您的表单
              具有最佳性能和最少重新render。react-hook-form是由React
              Hook构建并用作hook, 这意味着没有组件供您导入。
              这里有一些的细节差异:
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
                      <b>Component</b>
                    </td>
                    <td>
                      <a
                        href="https://reactjs.org/docs/uncontrolled-components.html"
                        target="_blank"
                      >
                        uncontrolled
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://reactjs.org/docs/forms.html"
                        target="_blank"
                      >
                        controlled
                      </a>
                    </td>
                    <td>
                      <a
                        href="https://reactjs.org/docs/forms.html"
                        target="_blank"
                      >
                        controlled
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Rendering</b>
                    </td>
                    <td>最少的re-render</td>
                    <td>您键入输入将重新启动render。</td>
                    <td>您键入输入将重新启动render。</td>
                  </tr>
                  <tr>
                    <td>
                      <b>API</b>
                    </td>
                    <td>Hooks</td>
                    <td>Component (RenderProps, Form, Field) + Hooks</td>
                    <td>Component (RenderProps, Form, Field)</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Package size</b>
                    </td>
                    <td>
                      小
                      <br />
                      <code>
                        react-hook-form@3.26.2
                        <br />
                        <Note>5.3KB</Note>
                      </code>
                    </td>
                    <td>
                      中
                      <br />
                      <code>
                        formik@2.0.1
                        <br />
                        <Note>14.4KB</Note>
                      </code>
                    </td>
                    <td>
                      大
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
                      <b>验证</b>
                    </td>
                    <td>
                      自带验证 &{" "}
                      <a href="https://github.com/jquense/yup" target="_blank">
                        Yup
                      </a>
                    </td>
                    <td>
                      自己建立验证 &{" "}
                      <a href="https://github.com/jquense/yup" target="_blank">
                        Yup
                      </a>
                    </td>
                    <td>Build your own & Plugins</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Learning curve</b>
                    </td>
                    <td>低</td>
                    <td>中</td>
                    <td>中</td>
                  </tr>
                  <tr>
                    <td>
                      <b>状态</b>
                    </td>
                    <td>小社区</td>
                    <td>大社区</td>
                    <td>大社区</td>
                  </tr>
                </tbody>
              </Table>
            </TableWrapper>
          </>
        ),
      },
      {
        title: "Can it work with Controlled component?",
        description: (
          <>
            <p>
              <b>可以的。</b>
            </p>
            <p>
              React-hook-form不建议您建立受控的表单， 但是您仍然可以轻松实现。
            </p>
            <p>
              使用<code> watch </code> API监视每个输入的更改并分配给价值道具。
            </p>
            <p>
              或者，您可以使用我们的包装器组件
              <a
                href="https://github.com/react-hook-form/react-hook-form-input"
                target="_blank"
                rel="noreferrer noopener"
              >
                React Hook Form Input
              </a>
              ，它会为您处理那些自定义注册。
            </p>
          </>
        ),
      },
    ],
  },
}
