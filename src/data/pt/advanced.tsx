import * as React from "react"
import CodeArea from "../../components/CodeArea"
import { Link as PageLink } from "gatsby"
import accessibleCodeBase from "../../components/codeExamples/accessibleCodeBase"
import accessibleCodeFinal from "../../components/codeExamples/accessibleCodeFinal"
import { step1, step2, step3 } from "../../components/codeExamples/formWizard"
import * as CodeExampleTestingForm from "../../components/codeExamples/testingForm"
import smartForm from "../../components/codeExamples/smartForm"
import form from "../../components/codeExamples/form"
import input from "../../components/codeExamples/input"
import typographyStyles from "../../styles/typography.module.css"
import buttonStyles from "../../styles/button.module.css"
import customHookWithValidationResolver from "../../components/codeExamples/customHookWithValidationResolver"
import virtualizedList from "../../components/codeExamples/virtualizedList"

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
        . Além disso, com React Hook Form a re-renderização de componentes
        controlados também é otimizada. Aqui um exemplo onde combinamos a
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
          páginas e seções. Nós recomendamos uma biblioteca de gerenciamento de
          estados para armazenar os dados do usuário entre os diferentes campos,
          páginas / seções. Neste exemplo, nós iremos usar{" "}
          <a
            className={buttonStyles.links}
            href="https://github.com/bluebill1049/little-state-machine"
            target="_blank"
            rel="noopener noreferrer"
          >
            little state machine
          </a>{" "}
          como nossa biblioteca de gerencia de estado (você pode substituir por{" "}
          <a
            className={buttonStyles.links}
            href="https://github.com/reduxjs/redux"
            target="_blank"
            rel="noopener noreferrer"
          >
            redux
          </a>
          , se você for mais familiar com ele).
        </p>

        <p style={{ textAlign: "center" }}>♦</p>

        <p>
          <b className={typographyStyles.note}>Passo 1:</b> Construir as rotas e
          o armazenamento (store).
        </p>
        <CodeArea
          rawData={step1}
          url="https://codesandbox.io/s/react-hook-form-wizard-form-r0zel"
        />

        <p>
          <b className={typographyStyles.note}>Passo 2:</b> Criar suas páginas,
          faça-o coletar seus dados, submeter e armazenar os dados na "store" e
          passar para próxima página do formulário.
        </p>
        <CodeArea
          rawData={step2}
          url="https://codesandbox.io/s/react-hook-form-wizard-form-r0zel"
        />

        <p>
          <b className={typographyStyles.note}>Passo 3:</b> Faça a submissão
          final com o dado na store ou exiba os dados em tela.
        </p>
        <CodeArea
          rawData={step3}
          url="https://codesandbox.io/s/react-hook-form-wizard-form-r0zel"
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

        <div className={typographyStyles.codeHeading}>
          <h2>Form</h2>
        </div>

        <p>
          O componente <code>Form</code> é responsável por injetar todos os
          métodos do <code>react-hook-form</code> dentro do componente filho.
        </p>

        <CodeArea
          rawData={form}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <div className={typographyStyles.codeHeading}>
          <h2>Input / Select</h2>
        </div>

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
          <code>react-hook-form props</code>
          no componente filho, você pode facilmente criar e construir
          formulários dinâmicos para sua aplicação.
        </p>
      </>
    ),
  },
  connectForm: {
    title: "Conectar Formulário",
    description: (
      <p>
        Quando construimos formulário, as vezes nosso campo está presente muitos
        níveis abaixo da árvore do componente, e isso é quando o{" "}
        <a href="/api#useFormContext">FormContext</a> é muito útil. Entretanto,
        podemos futuramente melhorar a experiência do desenvolvedor usando o
        componente <code>ConnectForm</code> para alavancar o React{" "}
        <a href="https://reactjs.org/docs/render-props.html">renderProps</a>. A
        vantagem desse componente é que você pode conectar seu campo com o React
        Hook Form de qualquer lugar.
      </p>
    ),
  },
  formContext: {
    title: "Performance do FormContext",
    description: (
      <p>
        React Hook Form's{" "}
        <PageLink to="/api/#useFormContext">FormContext</PageLink> é construído
        sob a{" "}
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
  customHookwithResolver: {
    title: "Custom Hook com Validation Resolver",
    description: (
      <>
        <p>
          Você pode construir um custom hook como validação no{" "}
          <code>resolver</code>. Um custom hook pode ser facilmente integrado
          com yup/Joi/Superstruct como método de validação e pode ser usado
          dentro do <code>resolver</code> de validação.
        </p>
        <ul>
          <li>
            Defina um schema memo (ou defina fora do seu componente se você não
            tem dependências)
          </li>
          <li>Use um custom hook passando o schema de validação</li>
          <li>
            Passe o <code>resolver</code> de validação para usar o{" "}
            <code>useForm</code> hook
          </li>
        </ul>

        <CodeArea rawData={customHookWithValidationResolver} />
      </>
    ),
  },
  workingWithVirtualizedList: {
    title: "Working with virtualized list",
    description: (
      <>
        <p>
          Imagine um cenário em que você tenha uma tabela de dados. Esta tabela
          pode conter centenas ou milhares de linhas e cada linha terá entradas.
          Uma prática comum é renderizar apenas os itens que estão no viewport,
          no entanto, isso causará problemas quando os itens forem removidos do
          DOM quando estão fora de vista e adicionados novamente. Isso causará
          itens para redefinir seus valores padrão quando eles entrarem
          novamente na janela de exibição.
        </p>

        <p>
          Um exemplo é mostrado abaixo usando{" "}
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
          Os testes são muito importantes porque preservam o código de bugs ou
          erros e garantir a segurança do código quando você refatorar a base de
          código.
        </p>

        <p>
          Recomendamos o uso do{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://testing-library.com/"
          >
            testing-library
          </a>
          , porque é simples e os testes são mais focados no comportamento do
          usuário.
        </p>

        <p style={{ textAlign: "center" }}>♦</p>

        <p>
          <b className={typographyStyles.note}>Step 1:</b> Prepare seus testes
          ambiente.
        </p>

        <p>
          Favor instalar <code>mutationobserver-shim</code> porque uso de forma
          de reação <code>MutationObserver</code> para detectar entradas obter
          não montado desde o DOM.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> Se você estiver usando
          React Nativo, você não precisa instalar{" "}
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
          Criar <code>setup.js</code> para importar{" "}
          <code>mutationobserver-shim</code>.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> Se você estiver usando
          React Native, você precisa criar{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/react-hook-form/react-hook-form/blob/master/setup.native.ts"
          >
            setup.js
          </a>{" "}
          , e definir <code>window</code> object.
        </p>

        <CodeArea
          rawData={'import "mutationobserver-shim";'}
          url="https://codesandbox.io/s/react-hook-form-unit-test-docs-ewpyt?file=/setup.js"
        />

        <p>
          Finalmente, você tem que atualizar <code>setup.js</code> in{" "}
          <code>jest.config.js</code> para incluir o arquivo.
        </p>

        <CodeArea
          rawData={CodeExampleTestingForm.step1}
          url="https://codesandbox.io/s/react-hook-form-unit-test-docs-ewpyt?file=/setup.js"
        />

        <p>
          <b className={typographyStyles.note}>Step 2:</b> Criar formulário de
          login.
        </p>

        <p>
          Estabelecemos o atributo do papel de acordo. Estes atributos são útil
          quando você vai escrever testes e melhorar a acessibilidade. Para mais
          informações, você pode se referir ao{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://testing-library.com/"
          >
            testing-library
          </a>{" "}
          documentação. Traduzido com a versão gratuita do tradutor -
          www.DeepL.com/Translator
        </p>

        <CodeArea
          rawData={CodeExampleTestingForm.step2}
          url="https://codesandbox.io/s/react-hook-form-unit-test-docs-ewpyt?file=/src/App.js"
        />

        <p>
          <b className={typographyStyles.note}>Step 3:</b> Escrever testes.
        </p>

        <p>Os critérios a seguir são o que tentamos cobrir com os testes:</p>

        <ul>
          <li>
            <p>Falha na submissão de testes.</p>

            <p>
              Estamos usando o método <code>waitFor</code> e <code>find*</code>{" "}
              para detectar feedback de apresentação porque{" "}
              <code>handleSubmit</code> é executado de forma assíncrona.
            </p>
          </li>
          <li>
            <p>Validação de teste associada a cada entrada.</p>

            <p>
              Estamos usando o método <code>*ByRole</code> ao consultar
              diferentes elementos porque é assim que os usuários reconhecem seu
              componente UI.
            </p>
          </li>
          <li>
            <p>Testar a submissão com sucesso.</p>
          </li>
        </ul>

        <CodeArea
          rawData={CodeExampleTestingForm.step3}
          url="https://codesandbox.io/s/react-hook-form-unit-test-docs-ewpyt?file=/src/App.test.js"
        />
      </>
    ),
  },
  transformAndParse: {
    title: "Transformar e Parse",
    description: (
      <>
        <p>
          O valor de retorno de entrada nativo está normalmente em{" "}
          <code>string</code> formato, a menos que seja invocado com{" "}
          <code>valueAsNumber</code> ou <code>valueAsDate</code>, você pode ler
          mais em{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement"
          >
            esta seção
          </a>
          . No entanto, não é perfeito, ainda temos que lidar com{" "}
          <code>isNaN</code> ou <code>null</code>valor. Portanto, é melhor
          deixar a transformação no nível do Componente. No exemplo a seguir,
          estamos usando o <code>Controller</code> para incluir a funcionalidade
          de transformam a entrada e saída do valor. Você também pode alcançar
          valores similares resultado com custom <code>register</code>.
        </p>
      </>
    ),
  },
  extendController: {
    title: "Extend Controller",
    description: (
      <>
        <p>
          Um dos pontos fortes do React Hook Form é que ele é primitivo e API
          simples, isto leva a uma melhor experiência do desenvolvedor e peso
          leve para a biblioteca. Há também outra jóia oculta é que você pode
          facilmente compõem essas API para tornar a função existente mais
          poderosa ou até construir seu componente derivado daquelas API
          primitivas. Nisso, o vamos dar uma olhada no componente Controlador e
          tentar ampliar sua funcionalidade. Traduzido com a versão gratuita do
          tradutor - www.DeepL.com/Translator
        </p>

        <p>
          O seguinte é o padrão <code>Controller</code>:
        </p>

        <CodeArea
          rawData={`<Controller name="test" control={control} render={props => <input {...props} />} />>`}
        />

        <p>
          <code>render</code> adereços passam adereços para baixo ao componente
          infantil, que são <code>sobreAlterar, onBlur, valor</code>. Podemos
          estender o funcionalidade também passando para baixo
          <code>sujo, isTocado, aviso</code>, através da construção de um
          invólucro componente que envolve <code>Controlador</code>.
        </p>
      </>
    ),
  },
}
