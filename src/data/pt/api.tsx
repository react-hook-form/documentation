import * as React from "react"
import colors from "../../styles/colors"
import Popup from "../../components/Popup"
import generic from "../generic"
import CodeArea from "../../components/CodeArea"
import useFieldArrayArgument from "../../components/codeExamples/useFieldArrayArgument"
import typographyStyles from "../../styles/typography.module.css"
import buttonStyles from "../../styles/button.module.css"
import code from "../../components/codeExamples/defaultExample"

export default {
  title: "API Documentação",
  header: {
    description:
      "foca em prover a melhor experiência para o desenvolvedor com uma API Simplificada",
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
        <code>useForm</code> também tem argumentos <b>opcionais</b>. O exempo a
        seguir demonstra todas as opções, com valor padrão.
      </p>
    ),
    validationResolver: goToSection => (
      <>
        <p>
          Essa função de callback permite que voce execute sua validacao através
          de qualquer esquema ou validação customizada. A função recebe um
          formulário completo com os <code>valores</code> como argumento. Você
          deve validar o resultado e retornar ambos <code>valores</code> e{" "}
          <code>erros</code>. Leia mais em{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("validationResolver")}
          >
            validationResolver
          </button>{" "}
          section.
        </p>
      </>
    ),
    validateContext: (
      <>
        <p>
          This context object will be injected into{" "}
          <code>validationResolver</code>'s second argument or{" "}
          <a
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </a>{" "}
          validation's context object.
        </p>
      </>
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
          <a
            className={buttonStyles.links}
            href="https://reactjs.org/docs/uncontrolled-components.html"
          >
            (leia mais na documentação do React, para valores padrões)
          </a>{" "}
          ou passe <code>defaultValues</code> como argumento opcional, para
          popular valores padrões para todo o formulário.
        </p>

        <p>
          <b className={typographyStyles.note}>Important:</b>{" "}
          <code>defaultValues</code> is cached within the custom hook, if you
          want to reset <code>defaultValues</code> please use{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("reset")}
          >
            reset
          </button>{" "}
          api.
        </p>

        <p>
          <b className={typographyStyles.note}>Nota:</b> Valores definidos em{" "}
          <code>defaultValues</code> será injetado em{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("watch")}
          >
            verificar
          </button>{" "}
          como <code>defaultValue</code>.
        </p>

        <p>
          <b className={typographyStyles.note}>Nota:</b>{" "}
          <code>defaultValues</code> não tem população automática, com o
          registro manual do campo (ex:{" "}
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
        <button
          className={buttonStyles.codeAsLink}
          onClick={() => goToSection("ValidationSchema")}
        >
          validationSchema
        </button>{" "}
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
          <b className={typographyStyles.note}>Nota:</b> Apenas campos
          registrados com <code>ref</code> irá funcionar. Manualmente
          registrando os inputs não funcionará. ex:{" "}
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
        <button
          className={buttonStyles.codeAsLink}
          onClick={() => goToSection("nativeValidation")}
        >
          nativeValidation
        </button>{" "}
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
          <b className={typographyStyles.note}>Nota:</b> Quando você remove o
          registro do campo, seu valor não será mais incluído no dado do
          formulário quando for submetido.
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
          <b className={typographyStyles.note}>Importante:</b> <code>name</code>{" "}
          é <b>obrigatório</b> e <b>único</b>. O name do campo também suporta
          pontos e chaves como sintaxe, que possibilita você a criar campos
          aninhados. A tabela de exemplo está abaixo:
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
        <a
          className={buttonStyles.links}
          href="https://github.com/react-hook-form/react-hook-form/blob/master/examples/FieldArray.tsx"
          title="example for Field Array"
        >
          Confira o exemplo com campo Matriz(Array)
        </a>
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
          <h2 className={typographyStyles.title}>Register Customizado</h2>
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
            <button
              className={buttonStyles.codeAsLink}
              onClick={() => goToSection("setValue")}
            >
              setValue
            </button>
            , porque o campo não está mais registrado como o ref.
          </p>

          <p>
            <code
              className={typographyStyles.codeBlock}
            >{`register({ name: 'firstName' }, { required: true, min: 8 })`}</code>
          </p>

          <p>
            <b className={typographyStyles.note}>Nota:</b> Se você um registro
            de campo customizado para ativar a re-renderização seu valor
            atualiza, então você precisa dar um tempo ao seu campo{" "}
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
    description: (
      <>
        <p>Este objeto contém informação sobre o estado do formulário.</p>

        <p>
          <b className={typographyStyles.note}>Important:</b>{" "}
          <code>formState</code> is wrapped with{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Proxy
          </a>{" "}
          to improve render performance, so make you have invoke/read it before
          <code>render</code> in order to enable the state update.
        </p>
      </>
    ),
    dirty:
      "Marcado como verdadeiro após o usuário interagir com algum dos campos.",
    dirtyFields: "Um conjunto exclusivo de campos modificados pelo usuário.",
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
          <b className={typographyStyles.note}>
            {generic.note[currentLanguage]}:
          </b>{" "}
          Diferença entre a versão 3 e 4:
        </p>

        <ul>
          <li>
            <p>Versão 4: Objetos aninhados</p>
            <p>
              <strong>Razão:</strong> com o encadeamento opcional se tornando
              mais popular entre a comunidade e para dar melhor suporte a tipo.
            </p>
            <p>
              <code>{`errors?.yourDetail?.firstName;`}</code>
            </p>
          </li>
          <li>
            <p>Versão 3: Objetos nivelados object</p>
            <p>
              <strong>Razão:</strong> simples e fácil de acessar o erro.
            </p>
            <p>
              <code>{`errors['yourDetail.firstName'];`}</code>
            </p>
          </li>
        </ul>
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
          formulário for um sucesso e também pode ser chamado remotamente.
        </p>
        <p>
          <code className={typographyStyles.codeBlock}>
            handleSubmit(onSubmit)()
          </code>
        </p>
        <p>
          <b className={typographyStyles.note}>Nota:</b> Você pode passar uma
          função <code>async</code> para validação assíncrona. ex:{" "}
        </p>
        <p>
          <code className={typographyStyles.codeBlock}>
            handleSubmit(async (data) => await fetchAPI(data))
          </code>
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
          <b className={typographyStyles.note}>Nota:</b> Para componentes
          controlados como <code>React-Select</code> que não expõe{" "}
          <code>ref</code>, você irá precisar resetar o campo manualmente
          através{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("setValue")}
          >
            setValue
          </button>{" "}
          ou usando{" "}
          <button
            className={buttonStyles.codeAsLink}
            onClick={() => goToSection("Controller")}
          >
            Controller
          </button>{" "}
          para encapsular seu componente controlado.
        </p>
        <p>
          <b className={typographyStyles.note}>Nota:</b> Você vai precisar
          forneça <code> defaultValues ​​</code> durante <code> useForm </code>
          ou<code> reset </code> com valor para redefinir o
          <code> Controller </code>valor dos componentes.
        </p>
      </>
    ),
  }),
  setError: {
    title: "setError",
    description: (
      <>
        <p>A função permite você de manualmente setar um ou múltiplos erros.</p>

        <p>
          <b className={typographyStyles.note}>Nota:</b> este método não
          persistirá no erro e bloqueará a ação de envio. É mais útil durante a
          função <code>handleSubmit</code> quando você deseja fornecer feedback
          de erro aos usuários após a validação assíncrona.
        </p>
      </>
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
          <b className={typographyStyles.note}>Nota:</b> Ao chamar este método,{" "}
          <code>formState</code> vai adicionar aos campos o <code>name</code> em{" "}
          <code>touched</code>.
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
          <b className={typographyStyles.note}>Nota:</b> Quando a validação
          falha, o <code>errors</code> objeto será atualizado.
        </p>
      </>
    ),
  },
  validationSchema: {
    title: "validationSchema",
    description: (
      <p>
        Se você preferir, pode centralizar a validação de regras com validação
        externa, validação de esquema, você pode aplicar{" "}
        <code>validationSchema</code> em <code>useForm</code> como argumento
        opcional. React Hook Form atualmente suporta{" "}
        <a
          className={buttonStyles.links}
          href="https://github.com/jquense/yup"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yup
        </a>{" "}
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
            <code className={typographyStyles.typeText}>string</code>
          </td>
          <td>✓</td>
          <td>"Name" único do seu campo.</td>
        </tr>
        <tr>
          <td>
            <code>as</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              React.ElementType | string
            </code>
          </td>
          <td>✓</td>
          <td>
            Componente controlado. ex: <code>as="input"</code> ou{" "}
            <code>{`as={<TextInput />}`}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>control</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Object</code>
          </td>
          <td>✓</td>
          <td>
            <code>control</code> objeto é invocado do <code>useForm</code>. é
            opcional, se estiver usando o FormContext.
          </td>
        </tr>
        <tr>
          <td>
            <code>defaultValue</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>any</code>
          </td>
          <td></td>
          <td>
            O mesmo que componente não controlado <code>defaultValue</code>,
            quando suprido um valor <code>boolean</code>, ele será tratado campo
            checkbox.
            <p>
              <b className={typographyStyles.note}>Nota:</b> você precisa
              fornecer <code>defaultValue</code> ou <code>defaultValues</code>{" "}
              em <code>useForm</code>
            </p>
            <p>
              <b className={typographyStyles.note}>Nota:</b> quando fornecido
              ele possui prioridade sobre <code>useForm</code>{" "}
              <code>defaultValues</code> para dada chave
            </p>
            <p>
              <b className={typographyStyles.note}>Note</b>: se o seu formulário
              invocar <code> reset </code> com valores diferentes, você
              precisará forneça <code>defaultValues</code> no nível useForm em
              vez de definido inline <code>defaultValue</code>..
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>rules</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Object</code>
          </td>
          <td></td>
          <td>
            Regras de validação de acordo com o <code>register</code>.
          </td>
        </tr>
        <tr>
          <td>
            <code>onChange</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (args: any | EventTarget) => any
            </code>
          </td>
          <td></td>
          <td>
            Esta propriedade <code>onChange</code> lhe permite customizar o
            retorno do valor. <br />
            <code>ex: {`onChange={{(data) => data.value}}`}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>onChangeName</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>string</code>
          </td>
          <td></td>
          <td>
            Este propridade lhe permite marcar eventos específicos, ex: quando{" "}
            <code>onChange</code> evento é chamado <code>onTextChange</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>onBlurName</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>string</code>
          </td>
          <td></td>
          <td>
            Este propridade lhe permite marcar eventos específicos, ex: quando{" "}
            <code>onBlur</code> evento é chamado <code>onTextBlur</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>valueName</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>string</code>
          </td>
          <td></td>
          <td>
            Esta propriedade lhe permite sobrescrever a propriedade{" "}
            <code>value</code> e suporta outras componentes que não utilizam a
            propriedade <code>value</code>. ex: <code>checked</code>,{" "}
            <code>selected</code> e outros...
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
        <p>
          Cada propriedade <code>props</code> que se passa para um componente
          conntrolado, será encaminhado para a instância do componente que você
          proveu com a propriedade <code>as</code>. Isto significa que você
          possui um componente custom <code>Switch</code> que necessita de uma
          propriedade <code>label</code>. Você pode passar essa propriedade
          diretamente para o componente controlado. A propriedade{" "}
          <code>name</code> será usada principalmente para acessar o valor
          através do formulário depois.
        </p>

        <p>
          Caso utilize a propriedade <code>defaultValue</code>, ele terá
          prioridade sobre o <code>useForm</code> <code>defaultValues</code>{" "}
          valor dado pela propriedade <code>name</code>.
        </p>
      </>
    ),
  },
  useFormContext: {
    title: "useFormContext",
    introduction: (
      <p>
        O contexto do formulário visa solucionar o problema quando houver
        profundos campos aninhados em sua árvore de componentes e métodos de
        passagem no fundo como
        <code>props</code> se torna trabalhoso.
      </p>
    ),
    description: (
      <>
        <p>
          Uma vez que seu formulário utiliza <code>FormContext</code>, o{" "}
          <code>useFormContext</code>:{" "}
          <code className={typographyStyles.typeText}>function</code> pode ser
          chamado como componente filho.
        </p>
        <p>
          <b className={typographyStyles.note}>Nota:</b> chamar{" "}
          <code>useFormContext</code> o <code>useForm</code> irá te dar todas as
          funções dos hooks.
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
  ErrorMessage: {
    title: "ErrorMessage",
    description: (
      <p>
        Um simples componente para renderizar a mensagem de erro do campo
        associado.
      </p>
    ),
    table: (
      <tbody>
        <tr>
          <td>
            <code>name</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>string</code>
          </td>
          <td>✓</td>
          <td>campo name associado.</td>
        </tr>
        <tr>
          <td>
            <code>errors</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>object</code>
          </td>
          <td></td>
          <td>
            <code>errors</code> objeto do React Hook Form. é opcional se estiver
            usando FormContext.
          </td>
        </tr>
        <tr>
          <td>
            <code>message</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>string</code>
          </td>
          <td></td>
          <td>mensagem de erro em linha.</td>
        </tr>
        <tr>
          <td>
            <code>as</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              React.ElementType | string
            </code>
          </td>
          <td></td>
          <td>
            Um componente ou tag HTML. ex: <code>as="span"</code> or{" "}
            <code>{`as={<Text />}`}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>children</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              ({`{ message: string, messages?: string[]}`}) => any
            </code>
          </td>
          <td></td>
          <td>
            Este é um{" "}
            <a
              href="https://reactjs.org/docs/render-props.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              render prop
            </a>{" "}
            para renderizar mensagem de erro ou mensagens.
            <p>
              <b className={typographyStyles.note}>Note:</b> you need to set{" "}
              validateCriteriaMode to 'all' for using <code>messages</code>.
            </p>
          </td>
        </tr>
      </tbody>
    ),
  },
  NativeValidation: {
    title: "Validações nativas do browser",
    description: (
      <>
        <p>
          O exemplo a seguir demonstra como você pode aproveitar a validação do
          navegador. Você apenas precisa setar <code>nativeValidation</code>{" "}
          para <code>true</code> e o restante da sintaxe é igual à validação
          padrão.
        </p>
        <p>
          <b className={typographyStyles.note}>Note</b>: This feature has been
          removed in V4 due to low usage, but you can still use it in V3
        </p>
      </>
    ),
  },
  useFieldArray: {
    title: "useFieldArray",
    description: (
      <>
        <p>
          A custom hook for working with uncontrolled Field Arrays (dynamic
          inputs). The motivation behind this hook is to provide better user
          experience and form performance. You can watch{" "}
          <a
            href="https://www.youtube.com/watch?v=Q7lrHuUfgIs"
            target="_blank"
            rel="noopener noreferrer"
          >
            this short video
          </a>{" "}
          to compare controlled vs uncontrolled Field Array.
        </p>

        <p>This hook provides the following object and functions.</p>

        <CodeArea rawData={useFieldArrayArgument} />

        <p>
          <b className={typographyStyles.note}>Note:</b> you can populate the{" "}
          <code>fields</code> by supply <code>defaultValues</code> at{" "}
          <code>useForm</code> hook.
        </p>

        <p>
          <b className={typographyStyles.note}>Important:</b> make sure you
          assign <code>id</code> from <code>fields</code> object as your
          component key.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> defina{" "}
          <code> defaultValue </code> quando desejar definir o valor padrão ou
          redefinir com entradas.
        </p>

        <p>
          <b className={typographyStyles.note}>Note: </b> se você quiser
          assistir à atualização dos valores da matriz de campos durante o
          acréscimo, faça o pré-anexo e o restante das outras ações. Você
          precisará observar todo o objeto da matriz de campos, por exemplo:
          <code>watch('fieldArrayName')</code>. Isso se deve ao fato de a API
          watch ter a intenção de assinar alterações de entrada e não de
          atualização de estado (fizemos uma solução alternativa apenas para a
          matriz de campos), também use esse recurso com cuidado, pois afeta o
          desempenho do formulário / aplicativo.
        </p>
      </>
    ),
    table: (
      <>
        <tr>
          <td>
            <code>fields</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              object & {`{ id: string }`}
            </code>
          </td>
          <td>
            This object is the source of truth to map and render inputs.
            <p>
              <b className={typographyStyles.note}>Important: </b> because each
              inputs can be uncontrolled, <code>id</code> is required with
              mapped components to help React identify which items have changed,
              are added, or are removed.
            </p>
            <p>
              eg: <code>{`{fields.map(d => <input key={d.id} />)}`}</code>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>append</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (obj: any) => void
            </code>
          </td>
          <td>Append input/inputs to the end of your fields</td>
        </tr>
        <tr>
          <td>
            <code>prepend</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (obj: any) => void
            </code>
          </td>
          <td>Prepend input/inputs to the start of your fields</td>
        </tr>
        <tr>
          <td>
            <code>insert</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (index: number, value: any) => void
            </code>
          </td>
          <td>Insert input/inputs at particular position.</td>
        </tr>
        <tr>
          <td>
            <code>swap</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (from: number, to: number) => void
            </code>
          </td>
          <td>Swap input/inputs position.</td>
        </tr>
        <tr>
          <td>
            <code>move</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (from: number, to: number) => void
            </code>
          </td>
          <td>
            Move input/inputs to another position.
            <p>
              <b className={typographyStyles.note}>Note:</b> difference between{" "}
              <code>move</code> and <code>swap</code>, keep calling{" "}
              <code>move</code> will push input/inputs in a circle, while{" "}
              <code>swap</code> only change two input/inputs' position.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>remove</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (index?: number) => void
            </code>
          </td>
          <td>
            Remove input/inputs at particular position, or remove all when no
            index is provided.
          </td>
        </tr>
      </>
    ),
  },
  validationResolver: {
    title: "validationResolver",
    description: (
      <>
        <p>
          This function allow you to run any external validation methods, such
          as{" "}
          <a
            href="https://github.com/hapijs/joi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joi
          </a>
          ,{" "}
          <a
            href="https://github.com/ianstormtaylor/superstruct"
            target="_blank"
            rel="noopener noreferrer"
          >
            Superstruct
          </a>{" "}
          and etc. In fact, the goal is not only limited Yup as our external
          (schema) validation library. We would like to support many other
          validation libraries to work with React Hook Form. You can even write
          your custom validation logic to validate.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> make sure you are
          returning object which contains <code>values</code> and{" "}
          <code>errors</code>, and their default value should be empty object{" "}
          <code>{`{}`}</code>.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> returning errors
          object's key should be relevant to your inputs.
        </p>
      </>
    ),
  },
}
