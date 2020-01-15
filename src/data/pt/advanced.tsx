import * as React from "react"
import CodeArea from "../../components/CodeArea"
import { Link as PageLink } from "gatsby"
import accessibleCodeBase from "../../components/codeExamples/accessibleCodeBase"
import accessibleCodeFinal from "../../components/codeExamples/accessibleCodeFinal"
import Link from "../../styles/link"
import { Note } from "../../styles/typography"
import { step1, step2, step3 } from "../../components/codeExamples/formWizard"
import smartForm from "../../components/codeExamples/smartForm"
import { CodeHeading } from "../../components/ApiPage"
import form from "../../components/codeExamples/form"
import input from "../../components/codeExamples/input"

export default {
  title: "Uso Avançado",
  header: {
    title: "Avançado",
    description:
      "Construa formulários complexos e acessíveis, utilizando React Hook Form.",
  },
  controlledMixedWithUnControlled: {
    title: "Controlado misto com componente não controlados",
    description: (
      <p>
        React Hook Form faz uso de componentes não controlados e também
        controlados. A maioria das bibliotecas de interface é construída para
        suportar apenas componentes controlados como{" "}
        <a
          href="https://github.com/mui-org/material-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          Material-UI
        </a>{" "}
        e{" "}
        <a
          href="https://github.com/ant-design/ant-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          Antd
        </a>
        . Além de, com React Hook Form a re-renderização de componentes
        controlados é também otimizada. Aqui um exemplo onde combinamos a
        validação de um formulário com componentes controlados e não controlados
      </p>
    ),
  },
  errorMessage: {
    title: "Mensagem de erro",
    description: (
      <p>
        Mensagens de erro são feedbacks visuais para os usuários, quando algum
        problema ocorre associado aos campos. No React Hook Form, nós provemos
        objetos de erros facilmente. Entretanto, há diferentes formas para nós
        renderizar-mos o erro em tela.
      </p>
    ),
    register: (
      <>
        Mensagem de erro incorporado ao <code>register</code>, você pode
        facilmente inserir a mensagem de erro no atributo <code>value</code>.
        Ex:
      </>
    ),
    component:
      "Criar um componente de ErrorMessage para ajudar a imprimir o erro.",
    optionalChaining: (
      <>
        <p>
          O{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
          >
            optional chaining
          </a>{" "}
          operador <code>?.</code> permite ler o objeto <code>errors</code> sem
          preocupação com a causa do erro devido ao <code>null</code> ou{" "}
          <code>undefined</code>.
        </p>
        <p>
          <code>{`errors?.firstName?.message`}</code>
        </p>
      </>
    ),
    get: (
      <p>
        Se seu projeto usar{" "}
        <a href="https://lodash.com" target="_blank" rel="noopener noreferrer">
          lodash
        </a>
        , então você pode utilizar do lodash{" "}
        <code>
          <a
            href="https://lodash.com/docs/4.17.15#get"
            target="_blank"
            rel="noopener noreferrer"
          >
            get
          </a>
        </code>{" "}
        function. Eg:
        <br />
        <br />
        <code>{`get(errors, 'firstName.message')`}</code>
      </p>
    ),
  },
  accessibility: {
    title: "Acessibilidade (A11y)",
    description: (
      <>
        <p>
          O React Hook Form oferece suporte à validação nativa de formulários,
          que permite validar os campos com suas próprias regras, já que a
          maioria de nós precisamos criar formulários em um design e layout
          personalizado, e é nossa responsabilidade garantir que nossos
          formulários estejam acessíveis (A11y).
        </p>

        <p>
          O código a seguir trabalha como planejado para validação; entretanto,
          isso pode ser implementado para acessibilidade.
        </p>

        <CodeArea rawData={accessibleCodeBase} />

        <p>
          O código a seguir é uma versão aprimorada{" "}
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
          Depois desta melhoria, a tela mostrará:{" "}
          <i>“Name, edit, invalid entry, This is required.”</i>
        </p>
      </>
    ),
  },
  wizard: {
    title: "Formulário em etapas/funil",
    description: (
      <>
        <p>
          É muito comum coletar informações do usuário através de diferentes
          páginas e seções. Nós recomendamos uma biblioteca de gerencia de
          estado para armazenar os dados do usuário entre os diferentes campos,
          páginas / seções. Neste exemplo, nós iremos usar{" "}
          <Link
            href="https://github.com/bluebill1049/little-state-machine"
            target="_blank"
          >
            little state machine
          </Link>{" "}
          como nossa biblioteca de gerencia de estado (você pode substituir por{" "}
          <Link href="https://github.com/reduxjs/redux" target="_blank">
            redux
          </Link>
          , se você for mais familiar com ele).
        </p>

        <p style={{ textAlign: "center" }}>♦</p>

        <p>
          <Note>Passo 1:</Note> Construir as rotas e o armazenamento (store).
        </p>
        <CodeArea
          rawData={step1}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          <Note>Passo 2:</Note> Cirar suas páginas, faça-o coletar seus dados,
          submeter o dano e armazenar no "store" e passar para próxima página do
          formulário.
        </p>
        <CodeArea
          rawData={step2}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          <Note>Passo 3:</Note> Faça a submissão final com o dano no store ou
          exiba os dados em tela.
        </p>
        <CodeArea
          rawData={step3}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          Seguindo o padrão acima, você deve ser capaz de construir um
          formulário em etapas e coletar os dados do usuário de diversas
          páginas.
        </p>
      </>
    ),
  },
  smartForm: {
    title: "Formulário inteligente",
    description: (
      <>
        <p>
          Com esta ideia você pode facilmente compor seu formulário com campos.
          Nós iremos criar um componente <code>Form</code> para automaticamente
          capturar os dados do formulário.
        </p>

        <CodeArea
          rawData={smartForm}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <p style={{ textAlign: "center" }}>♦</p>

        <p>Vamos dar uma olhada em cada um destes componentes.</p>

        <CodeHeading>
          <h2>Form</h2>
        </CodeHeading>

        <p>
          O componente <code>Form</code> é responsável por injetar todos os
          métodos do <code>react-hook-form</code> dentro do componente filho.
        </p>

        <CodeArea
          rawData={form}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <CodeHeading>
          <h2>Input / Select</h2>
        </CodeHeading>

        <p>
          A responsabilidade desses componentes de entrada é registrá-los no{" "}
          <code>react-hook-form</code>.
        </p>
        <CodeArea
          rawData={input}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <p>
          Com o componente <code>Form</code> injetando{" "}
          <code>react-hook-form</code>
          's <code>props</code> no componente filho, você pode facilmente criar
          e compor formulários dinâmicos para sua aplicação.
        </p>
      </>
    ),
  },
  fieldArrays: {
    title: "Campo Arrays",
    description: (
      <>
        <p>
          Essa é uma das melhoras funcionalidades do React Hook Form: ao invés
          de importar componentes (como outras bibliotecas) para utilizar esta
          funcionalidade, você pode utilizar o próprio HTML. A chave está dentro
          do atributo <code>name</code>. No React Hook Form, o atributo{" "}
          <code>name</code> representa a estrutura do dado que quer usar.
        </p>

        <p>
          <Note>Note:</Note> we have also build a custom hook for complex
          scenario: <PageLink to="/api#useFieldArray">useFieldArray</PageLink>.
        </p>

        <p>
          O exemplo a seguir demonstra como você cria campos de array para
          manipular o campo de atributo <code>name</code>.
        </p>

        <p>
          <Note>Nota:</Note> Se sua aplicação necessita de funcionalidades como:
          Delete, Insert, Append, Preprend. Aqui está{" "}
          <a
            href="https://codesandbox.io/s/react-hook-form-field-array-advanced-with-delete-insert-append-edit-l19pz"
            target="_blank"
            rel="noreferrer noopener"
          >
            link para esta implementação.
          </a>{" "}
          com <PageLink to={"/api#Controller"}>Controller</PageLink>.
        </p>
      </>
    ),
  },
  schema: {
    title: "Validação de formulário",
    description: (
      <>
        <p>
          React Hook Form suporta esquema baseado na validação do formulário com{" "}
          <a href="https://github.com/jquense/yup" target="_blank">
            Yup
          </a>
          , aqui você utiliza o <code>validationSchema</code> para{" "}
          <a href="/api#useForm">useForm</a> como configuração opcional. React
          Hook Form irá validar o campo com base no esquema e retornará com{" "}
          <a href="/api#errors">errors</a> ou um valor válido.
        </p>
      </>
    ),
    step1: (
      <>
        <p>
          <Note>Passo 1:</Note> Instale o <code>Yup</code> em seu projeto.
        </p>
      </>
    ),
    step2: (
      <p>
        <Note>Passo 2:</Note> Crie um esquema para validação e registre
        (register) os campos com React Hook Form.
      </p>
    ),
  },
  connectForm: {
    title: "Conectar Formulário",
    description: (
      <p>
        Quando construimos formulário, as vezes nosso campo está presente muitos
        níveis abaixo da árvore do componente, e isso é quando o{" "}
        <a href="/api#FormContext">FormContext</a> é muito útil. Entretanto,
        podemos futuramente melhorar a experiência do desenvolvedor usando o
        componente <code>ConnectForm</code> para alavancar o React{" "}
        <a href="https://reactjs.org/docs/render-props.html">renderProps</a>. A
        vantagem desse componente é que você pode conectar seu campo com o React
        Hook Form de qualquer lugar.
      </p>
    ),
  },
  conditionalControlledComponent: {
    title: "Componente controlado condicional",
    description: (
      <>
        <p>
          Em termos de campos condicionais, React Hook Form faz o uso muito
          simples para nós, porque a partir do momento que você remove um campo
          a árvore de componente, irá receber o <code>unregister</code>{" "}
          automaticamente,{" "}
          <a
            href="https://codesandbox.io/s/13ykqx4wx7"
            target="_blank"
            rel="noopener noreferrer"
          >
            aqui um exemplo
          </a>{" "}
          por tal comportamento. Entretanto, este não é o mesmo caso do
          componente controlado, desde que o <code>ref</code> não foi
          registrado, e podemos fazer o seguinte:
        </p>
        <ul>
          <li>
            <p>
              Importe <Link to="/api#Controller">Controller</Link> para englobar
              seu componente e deixe-o gerenciar o 'register' e 'unregister'
            </p>
          </li>
          <li>
            <p>
              Fazer o uso do{" "}
              <code>
                <a
                  href="https://reactjs.org/docs/hooks-effect.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  useEffect
                </a>
              </code>{" "}
              com um 'register' customizado
            </p>
          </li>
        </ul>
        <p> Aqui está os exemplos:</p>
      </>
    ),
  },
  formContext: {
    title: "FormContext Performance",
    description: (
      <p>
        React Hook Form's{" "}
        <PageLink to="/api/#FormContext">FormContext</PageLink> é construído
        sobre{" "}
        <a
          href="https://reactjs.org/docs/context.html"
          target="_blank"
          rel="noreferrer noopener"
        >
          React's Context API.
        </a>{" "}
        Que resolve o problema em que os dados são passados pela árvore de
        componentes sem precisar passar a props manualmente em todos os níveis.
        Isso também faz com que a árvore de componentes acione uma nova
        renderização quando o React Hook Form acionar uma atualização de estado,
        mas ainda podemos otimizar nosso aplicativo, se necessário, através do
        exemplo a seguir.
      </p>
    ),
  },
}
