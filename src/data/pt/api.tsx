import code from "../../components/codeExamples/defaultExample"
import * as React from "react"
import Link from "../../styles/link"
import { Link as NavLink } from "gatsby"
import { CodeBlock, Note, Title, TypeText } from "../../styles/typography"
import { CodeAsLink } from "../../components/ApiPage"
import colors from "../../styles/colors"
import translateLink from "../../components/logic/translateLink"
import Popup from "../../components/Popup"

export default {
  title: "API Documentação",
  header: {
    description:
      "React Hook Form foca em prover a melhor experiência para o desenvolvedor com uma API Simplificada",
  },
  useForm: {
    title: "useForm",
    intro: (
      <>
        Utilizando <code>useForm</code>, você receberá os seguintes métodos{" "}
      </>
    ),
    description: (
      <p>
        <code>useForm</code> também tem argumentos<b>opcionais</b>. O exempo a
        seguir demonstra todas as opções, com valor padrão.
      </p>
    ),
    validateCriteriaMode: (
      <>
        <p>
          O comportamento padrão <code>firstErrorDetected</code> irá validar
          todos os campos' e reunir todos os primeiros erros encontrados.
        </p>
        <p>
          Com a configuração de <code>all</code>, todos as validações de campos'
          irá executar e reunir todos os erros encontrados
        </p>
      </>
    ),
    validateOnSubmit: (
      <>
        A validação irá ativar o evento de <code>submit</code> e os campos
        inválidos serão anexados, o evento <code>onChange</code> ouve os eventos
        para validar-los novamente.
      </>
    ),
    validateOnBlur: (
      <>
        Validation irá ativar o evento de <code>blur</code>.
      </>
    ),
    validateOnChange: (
      <>
        A validação irá ativar o evento de <code>change</code> com cada campo,
        levará a multiplas re-renderizações. Não recomendado: Considere isto
        como uma prática não performática.
      </>
    ),
    defaultValues: goToSection => (
      <>
        <p>
          Você pode setar o valor padrão do campoo com{" "}
          <code>defaultValue/defaultChecked</code>{" "}
          <Link href="https://reactjs.org/docs/uncontrolled-components.html">
            (leia mais na documentação do React, para valores padrões)
          </Link>{" "}
          ou passe <code>defaultValues</code> como argumento opcional, para
          popular valores padrões para todo o formulário.
        </p>

        <p>
          <Note>Nota:</Note> Valores definidos em <code>defaultValues</code>{" "}
          será injetado em{" "}
          <CodeAsLink onClick={() => goToSection("watch")}>
            verificar
          </CodeAsLink>{" "}
          como <code>defaultValue</code>.
        </p>

        <p>
          <Note>Nota:</Note> <code>defaultValues</code> não tem população
          automática, com o registro manual do campo (ex:{" "}
          <code>{`register({ name: 'test' })`}</code>) porquê o campo manual{" "}
          <code>register</code> não provê a props <code>ref</code> para o React
          Hook Form.
        </p>
      </>
    ),
    validationSchema: goToSection => (
      <p>
        Aplique regras de validação do formulário com <code>Yup</code> a nível
        de esquema, por favor, verifique a seção{" "}
        <CodeAsLink onClick={() => goToSection("ValidationSchema")}>
          validationSchema
        </CodeAsLink>{" "}
        .
      </p>
    ),
    reValidateMode: (
      <p>
        Esta opção permite configurar quando entradas com erros são exibidas
        revalidado (por padrão, a validação é acionada durante uma entrada
        mudança.) <Popup />
      </p>
    ),
    validationFields: (
      <p>
        Fornecer uma matriz de campos (array) significa que apenas os campos
        incluídos serão validado. Esta opção é útil quando você deseja alternar
        quais campos são necessários para validar.
      </p>
    ),
    submitFocusError: (
      <>
        <p>
          Por padrão, quando o usuário envia um formulário e contém um erro, o
          primeiro campo com erro será focado.
        </p>

        <p>
          <Note>Nota:</Note> Apenas campos registrados com <code>ref</code> irá
          funcionar. Manualmente registrando os inputs não funcionará. ex:{" "}
          <code>{`register({ name: 'test' }) // doesn't work`}</code>{" "}
        </p>
      </>
    ),
    nativeValidation: goToSection => (
      <p>
        Setar esta opção para <code>true</code> irá habilitar a validação nativa
        do navegador. Você pode{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
        >
          veja mais sobre as validações imbutidas no navegador
        </a>
        , e veja também a seção{" "}
        <CodeAsLink onClick={() => goToSection("nativeValidation")}>
          nativeValidation
        </CodeAsLink>{" "}
        para mais detalhes e exemplos.
      </p>
    ),
  },
  unregister: {
    title: "unregister",
    description: (
      <>
        <p>
          Este método permite você o <code>unregister</code> um único campo ou
          matriz (array) de campos. Isto é útil quando você precisa registrar
          seu campo durante o <code>useEffect</code> como registro customizado e
          para remover o registro após o componente ser desmontado.
        </p>
        <p>
          <Note>Nota:</Note> Quando você remove o registro do campo, seu valor
          não será mais incluído no dado do formulário quando for submetido.
        </p>
      </>
    ),
  },
  register: {
    title: "register",
    description: (
      <>
        <p>
          Este método permite você o uso do register para input/select{" "}
          <code>Ref</code> e validar regras do React Hook Form.
        </p>
        <p>
          Regras de validação são baseadas no padrão do HTML e também permite
          customizações customizadas.
        </p>
        <p>
          <Note>Importante:</Note> <code>name</code> é <b>obrigatório</b> e{" "}
          <b>único</b>. O name do campo também suporta pontos e chaves como
          sintaxe, que possibilita você a criar campos aninhados. A tabela de
          exemplo está abaixo:
        </p>
      </>
    ),
    fieldArray: (
      <p
        style={{
          paddingLeft: 10,
          borderLeft: `4px solid ${colors.lightPink}`,
        }}
      >
        Se estiver trabalhando com <code>arrays/array fields</code>, você pode
        assinar um campo name com <code>name[index]</code>.{" "}
        <Link
          href="https://github.com/react-hook-form/react-hook-form/blob/master/examples/FieldArray.tsx"
          title="example for Field Array"
        >
          Confira o exemplo com campo Matriz(Array)
        </Link>
        .
      </p>
    ),
    example: "Enviar",
    selectHelp:
      "Ao selecionar a opção de registro, a tabela da API abaixo será atualizada.",
    options: {
      title: "Opções do 'Register'",
      registerWithValidation: "'Register' com validação",
      registerWithValidationMessage:
        "'Register' com validação e mensagem de erro",
      note: goToSection => (
        <>
          <Title>Register Customizado</Title>
          <p>
            Você também pode registrar entradas manualmente, o que é útil quando
            trabalhando com componentes personalizados e <code>Ref</code> não é
            acessível. Este é realmente o caso quando você está trabalhando com
            React Native ou personalizado como{" "}
            <a
              href="https://github.com/JedWatson/react-select"
              target="_blank"
              rel="noopener noreferrer"
            >
              react-select
            </a>
            .
          </p>

          <p>
            Usando uma chamada de registro personalizada, você precisará
            atualizar a entrada valor com{" "}
            <CodeAsLink onClick={() => goToSection("setValue")}>
              setValue
            </CodeAsLink>
            , porque o campo não está mais registrado como o ref.
          </p>

          <p>
            <CodeBlock>{`register({ name: 'firstName' }, { required: true, min: 8 })`}</CodeBlock>
          </p>

          <p>
            <Note>Nota:</Note> Se você um registro de campo customizado para
            ativar a re-renderização seu valor atualiza, então você precisa dar
            um tempo ao seu campo{" "}
          </p>
        </>
      ),
    },
    validation: {
      required: (
        <>
          Um booleano que, se verdadeiro, indica que a entrada deve ter um valor
          antes que o formulário possa ser enviado. Você pode atribuir uma
          string para retornar uma mensagem de erro no objeto de{" "}
          <code>errors</code>.
        </>
      ),
      maxLength: "O tamanho máximo do valor a ser aceito para este campo.",
      minLength: "O tamanho mínimo do valor a ser aceito para este campo.",
      max: "O valor máximo a ser aceito pelo campo.",
      min: "O valor mínimo a ser aceito pelo campo.",
      pattern: "Um padrão regex para o campo.",
      validate: `Você pode passar uma função de callback como argumento para validar, ou você pode passar um objeto de função callback para validar todos eles. (verifique os exemplos)`,
    },
  },
  formState: {
    title: "formState",
    description: "Este objeto contém informação sobre o estado do formulário.",
    dirty:
      "Marcado como verdadeiro após o usuário interagir com algum dos campos.",
    isSubmitted:
      "Marcado como verdadeiro após o usuário submeter o formulário.",
    touched: "Uma matriz (Object) com todos os campos que foram interagidos.",
    isSubmitting: (
      <>
        Durante a submissão do formulário irá setar <code>true</code> e depois
        submeter para <code>false</code>
      </>
    ),
    submitCount: "Número de formulários submetido.",
    isValid: "Marcado como verdadeiro se não tiver erro.",
  },
  errors: {
    title: "errors",
    description: currentLanguage => (
      <>
        <p>
          Objeto contendo erros de formulário, ou mensagens de erro que
          pertencem a cada campo.
        </p>

        <p>
          <Note>Nota:</Note> Você também pode aprender em{" "}
          <NavLink
            to={translateLink("advanced-usage#ErrorMessage", currentLanguage)}
          >
            Mensagem de erro
          </NavLink>{" "}
          de uma página avançada.
        </p>
      </>
    ),
    types: (
      <>
        Isto é útil para validação de campos como regras de senha, com múltiplos
        errors que precisam ser retornados de um único campo. Para habilitar
        essa funcionalidade, tenha certeza de setar{" "}
        <code>validateCriteriaMode: 'all'</code>.
      </>
    ),
    message: `'Message' é um campo string e vazio por padrão. Entratanto, se você registrar a validação com mensagem de erro, ele será retornado.`,
    ref: `Referência para o elemento do campo.`,
  },
  watch: {
    title: "watch",
    description: (
      <>
        <p>
          Isso irá assistir campo(s) específicos e retornará um valor, é útil
          para determinar o que será redenrizado.
        </p>

        <ul>
          <li>
            <p>
              Quando <code>defaultValue</code> não está definido, o primeiro a
              renderizar do <code>watch</code> retornará <code>undefined</code>{" "}
              porque é chamado antes do <code>register</code>, porém você pode
              utilizar <code>defaultValue</code> como segundo argumento a ser
              retornado.
            </p>
          </li>
          <li>
            <p>
              Entretanto, se <code>defaultValues</code> foi inicializado em{" "}
              <code>useForm</code> como argumento, então o primeiro render irá
              retornar o que é provido em <code>defaultValues</code>.
            </p>
          </li>
        </ul>
      </>
    ),
    tableTitle: {
      single: (
        <>
          Assista o valor do campo pelo 'name' (similar ao lodash{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://lodash.com/docs/4.17.15#get"
          >
            get
          </a>{" "}
          function)
        </>
      ),
      multiple: "Assista múltiplos campos",
      all: "Assista todos os campos",
      nest: "Assista a todas as entradas e retorne objeto aninhado",
    },
  },
  handleSubmit: {
    title: "handleSubmit",
    description: (
      <>
        <p>
          Esta função irá passar os dados do formulário quando a validação do
          formulário for um sucesso.
        </p>
        <p>
          <Note>Nota:</Note> Você pode passar uma função <code>async</code> para
          validação assíncrona. ex:{" "}
        </p>
        <p>
          <CodeBlock>
            handleSubmit(async (data) => await fetchAPI(data))
          </CodeBlock>
        </p>
      </>
    ),
  },
  reset: goToSection => ({
    title: "reset",
    description: (
      <>
        <p>
          Essa função irá limpar o valor dos campos, e erros dentro do
          formulário. Você pode passar <code>values</code> como valor opcional
          para resetar o formulário assinado com o valor padrão.
        </p>
        <p>
          <Note>Nota:</Note> Para componentes controlados como{" "}
          <code>React-Select</code> que não expõe <code>ref</code>, você irá
          precisar resetar o campo manualmente através{" "}
          <CodeAsLink onClick={() => goToSection("setValue")}>
            setValue
          </CodeAsLink>{" "}
          ou usando{" "}
          <CodeAsLink onClick={() => goToSection("Controller")}>
            Controller
          </CodeAsLink>{" "}
          para encapsular seu componente controlado.
        </p>
      </>
    ),
  }),
  setError: {
    title: "setError",
    description: (
      <p>A função permite você de manualmente setar um ou múltiplos erros.</p>
    ),
  },
  clearError: {
    title: "clearError",
    description: (
      <ul>
        <li>
          <p>
            <code>undefined</code>: limpa todos os erros
          </p>
        </li>
        <li>
          <p>
            <code>string</code>: reseta um único erro
          </p>
        </li>
        <li>
          <p>
            <code>string[]</code>: reseta múltiplos erros
          </p>
        </li>
      </ul>
    ),
  },
  setValue: {
    title: "setValue",
    description: (
      <>
        <p>
          Esta função permite definir dinamicamente o campo / seleção do valor.
          Ao mesmo tempo, tenta evitar a nova renderização quando não é
          necessário e apenas as seguintes condições acionarão a nova
          renderização.
        </p>
        <ul>
          <li>
            <p>Quando um erro é acionado pela atualização de um valor</p>
          </li>
          <li>
            <p>Quando um erro é corrigido por uma atualização de valor</p>
          </li>
          <li>
            <p>
              quando 'setValue' é invocado pela primeira vez e formState{" "}
              <code>dirty</code> é marcado como verdadeiro (true)
            </p>
          </li>
          <li>
            <p>
              Quando setValue é invocado e formState <code>touched</code> é
              atualizado
            </p>
          </li>
        </ul>
        <p>
          <Note>Nota:</Note> Ao chamar este método, <code>formState</code> vai
          adicionar aos campos o <code>name</code> em <code>touched</code>.
        </p>
        <p>
          Você pode também setar <code>shouldValidate</code> para{" "}
          <code>true</code> e vai acionar a validação do campo. ex:{" "}
          <code>setValue('name', 'value', true)</code>
        </p>
      </>
    ),
  },
  getValues: {
    title: "getValues",
    description: (
      <>
        <p>
          Essa função vai retornar todo o dado do formulário, e é útil em uma
          função quando você precisa capturar os dados do formulário.
        </p>

        <ul>
          <li>
            <p>
              Por padrão <code>getValues()</code> irá retornar todo o dado do
              formulário em uma estrutura plana. ex:{" "}
              <code>{`{ test: 'data', test1: 'data1'}`}</code>
            </p>
          </li>
          <li>
            <p>
              Trabalhando com campos definidos do formulário,{" "}
              <code>getValues({`{ nest: true }`})</code> irá retornar o dado em
              uma estrutura aninhada de acordo com o campo <code>name</code>.
              ex: <code>{`{ test: [1, 2], test1: { data: '23' } }`}</code>
            </p>
          </li>
        </ul>
      </>
    ),
  },
  triggerValidation: {
    title: "triggerValidation",
    description: (
      <>
        <p>
          Para acionamento manual do campo / select de validação de formulário.
        </p>
        <p>
          <Note>Nota:</Note> Quando a validação falha, o <code>errors</code>{" "}
          objeto será atualizado.
        </p>
      </>
    ),
  },
  validationSchema: {
    title: "ValidationSchema",
    description: (
      <p>
        Se você preferir, pode centralizar a validação de regras com validação
        externa, validação de esquema, você pode aplicar{" "}
        <code>validationSchema</code> em <code>useForm</code> como argumento
        opcional. React Hook Form atualmente suporta{" "}
        <Link
          href="https://github.com/jquense/yup"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yup
        </Link>{" "}
        para validação de esquema de objeto.
      </p>
    ),
  },
  Controller: {
    title: "Controller",
    table: (
      <tbody>
        <tr>
          <td>
            <code>name</code>
          </td>
          <td>
            <TypeText>string</TypeText>
          </td>
          <td>Unique name of your input.</td>
        </tr>
        <tr>
          <td>
            <code>control</code>
          </td>
          <td>
            <TypeText>Object</TypeText>
          </td>
          <td>
            <code>control</code> object is from invoking <code>useForm</code>.
          </td>
        </tr>
        <tr>
          <td>
            <code>defaultValue</code>
          </td>
          <td>
            <TypeText>any</TypeText>
          </td>
          <td>
            The same as uncontrolled component's <code>defaultValue</code>, when
            supply <code>boolean</code> value, it will be treated as checkbox
            input.
          </td>
        </tr>
        <tr>
          <td>
            <code>rules</code>
          </td>
          <td>
            <TypeText>Object</TypeText>
          </td>
          <td>Validation rules according to register at React Hook Form</td>
        </tr>
        <tr>
          <td>
            <code>onChange</code>
          </td>
          <td>
            <TypeText>(arguments: any) => any</TypeText>
          </td>
          <td>
            This <code>onChange</code> prop allow you to customise the return
            value. <br />
            <code>eg: {`onChange={{(data) => data.value}}`}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>onBlur</code>
          </td>
          <td>
            <TypeText>(arguments: any) => any</TypeText>
          </td>
          <td>
            This <code>onBlur</code> prop allow you to customise the return
            value. <br />
            <code>eg: {`onBlur={{(data) => data.value}}`}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>onChangeName</code>
          </td>
          <td>
            <TypeText>string</TypeText>
          </td>
          <td>
            This prop allow you to target that specific event name, eg: when{" "}
            <code>onChange</code> event is named <code>onTextChange</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>onBlurName</code>
          </td>
          <td>
            <TypeText>string</TypeText>
          </td>
          <td>
            This prop allow you to target that specific event name, eg: when{" "}
            <code>onBlur</code> event is named <code>onTextBlur</code>
          </td>
        </tr>
      </tbody>
    ),
    description: (
      <>
        <p>
          O React Hook Form adota componentes não controlados e campos nativos,
          no entanto, é difícil evitar trabalhar com componentes externos
          controlados, tais como{" "}
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
          e{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://material-ui.com/"
          >
            Material-UI
          </a>
          . Este componente irá fazer sua vida mais simples trabalhando com ele.
        </p>
      </>
    ),
  },
  formContext: {
    title: "FormContext",
    introduction: (
      <p>
        O contexto do formulário visa solucionar o problema quando houver
        profundos campos           aninhados em sua árvore de componentes e
        métodos de passagem no fundo como
        <code>props</code> se torna trabalhoso.
      </p>
    ),
    description: (
      <>
        <p>
          Uma vez que seu formulário utiliza <code>FormContext</code>, o{" "}
          <code>useFormContext</code>: <TypeText>function</TypeText> pode ser
          chamado como componente filho.
        </p>
        <p>
          <Note>Nota:</Note> chamar <code>useFormContext</code> o{" "}
          <code>useForm</code> irá te dar todas as funções dos hooks.
        </p>
      </>
    ),
  },
  control: {
    title: "control",
    description: (
      <p>
        Esse objeto foi criado para o componente Controlador do formulário React
        Hook, que contém métodos para registrar o componente controlado no React
        Hook Formato.
      </p>
    ),
  },
}
