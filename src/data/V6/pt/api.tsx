import * as React from "react"
import colors from "../../../styles/colors"
import CodeArea from "../../../components/CodeArea"
import useFieldArrayArgument from "../../../components/codeExamples/useFieldArrayArgument"
import generic from "../../generic"
import typographyStyles from "../../../styles/typography.module.css"
import buttonStyles from "../../../styles/button.module.css"
import tableStyles from "../../../styles/table.module.css"

export default {
  title: "API Documentação",
  header: {
    description:
      "foca em prover a melhor experiência para o desenvolvedor com uma API Simplificada",
  },
  useForm: {
    title: "useForm",
    description: (
      <p>
        <code>useForm</code> também tem argumentos <b>opcionais</b>. O exemplo a
        seguir demonstra todas as opções, com valor padrão.
      </p>
    ),
    validationResolver: (goToSection) => (
      <>
        <p>
          Essa função de callback permite que você execute sua validação através
          de qualquer esquema ou validação customizada. A função recebe um
          formulário completo com os <code>value</code> como argumento. Você
          deve validar o resultado e retornar ambos <code>value</code> e{" "}
          <code>errors</code>. Leia mais em{" "}
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
          Esse objeto de contexto será injetado no segundo argumento de{" "}
          <code>resolver</code> ou em{" "}
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
          O comportamento padrão <code>firstError</code> irá validar todos os
          campos e reunir todos os primeiros erros encontrados.
        </p>
        <p>
          Com a configuração de <code>all</code>, todos as validações de campos
          irão executar e reunir todos os erros encontrados
        </p>
      </>
    ),
    validateOnSubmit: (
      <>
        A validação irá ativar o evento de <code>submit</code> e os campos
        inválidos serão anexados, o evento <code>onChange</code> ouve os eventos
        para valida-los novamente.
      </>
    ),
    validateOnBlur: (
      <>
        <code>Validation</code> irá ativar o evento de <code>blur</code>.
      </>
    ),
    validateOnChange: (
      <>
        A validação irá ativar o evento de <code>change</code> com cada campo,
        levará a multiplas re-renderizações. Não recomendado: Considere isto
        como uma prática não performática.
      </>
    ),
    validationOnTouched: (
      <>A validação será acionada até que a entrada seja tocada.</>
    ),
    validationOnAll: (
      <>
        A validação será acionada nos eventos <code>blur</code> e{" "}
        <code>change</code>. Aviso: assim como no modo <code>onChange</code>,{" "}
        <code>all</code> pode ter um impacto significativo no desempenho.
      </>
    ),
    defaultValues: (goToSection) => (
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
          <b className={typographyStyles.note}>Importante:</b>{" "}
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
          <code>defaultValues</code> não é populado automaticamente, com o
          registro manual do campo (ex: <code>{`register('test')`}</code>)
          porquê o campo manual <code>register</code> não provê{" "}
          <code>props ref</code> para o React Hook Form.
        </p>
      </>
    ),
    validationSchema: (goToSection) => (
      <p>
        Aplique regras de validação do formulário com <code>Yup</code> a nível
        de esquema, por favor, verifique a seção{" "}
        <button
          className={buttonStyles.codeAsLink}
          onClick={() => goToSection("validationSchema")}
        >
          validationSchema
        </button>{" "}
        .
      </p>
    ),
    reValidateMode: (
      <p>
        Esta opção permite configurar quando entradas com erros são exibidas e
        revalidadas (por padrão, a validação é acionada durante uma entrada
        mudança.)
      </p>
    ),
    validationFields: (
      <p>
        Fornecer uma matriz de campos (array) significa que apenas os campos
        incluídos serão validados. Esta opção é útil quando você deseja alternar
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
          <code>{`register('test') // doesn't work`}</code>{" "}
        </p>
      </>
    ),
    shouldUnregister: (
      <p>
        Por padrão, quando as entradas são removidas, o React Hook Form usa{" "}
        <code>MutationObserver</code> para detectar e{" "}
        <code>cancelar o registro</code> daquelas entradas que são desmontadas.
        No entanto, você pode definir <code>shouldUnregister</code> como{" "}
        <code>false</code> para impedir a perda do estado de entrada devido à
        desmontagem.
      </p>
    ),
  },
  unregister: {
    title: "unregister",
    description: (
      <>
        <p>
          Este método permite você <code>unregister</code> um único campo ou
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
          customizações.
        </p>
        <p>
          <b className={typographyStyles.note}>Importante:</b> <code>name</code>{" "}
          é <b>obrigatório</b> e <b>unique</b>. O name do campo também suporta
          pontos e chaves como sintaxe, o que possibilita você criar campos
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
      note: (goToSection) => (
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
            >{`register('firstName', { required: true, min: 8 })`}</code>
          </p>

          <p>
            <b className={typographyStyles.note}>Nota:</b> Se você fizer um
            registro de campo customizado para ativar a re-renderização seu
            valor, então você precisa dar um tempo ao seu campo{" "}
          </p>

          <p>
            <code
              className={typographyStyles.codeBlock}
            >{`register({ name: 'firstName', type: 'custom' }, { required: true, min: 8 })`}</code>
          </p>

          <p>
            <b className={typographyStyles.note}>Nota:</b>
            várias raido input com o mesmo nome, você deseja registrar a
            validação até o último entrada para que o gancho entenda valide-os
            como um grupo no final.
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
          <code>formState</code> é encapsulado com{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Proxy
          </a>{" "}
          para melhorar a performance do <code>render</code>. Tenha certeza que
          você tem <code>invoke/read</code>
          antes do <code>render</code> para habilitar a atualização do estado.
          este O recurso de funcionalidade de redução de renderização se aplica
          somente à plataforma da Web devido a uma falta de suporte no{" "}
          <code>Proxy</code> no React Native.
        </p>
      </>
    ),
    isSubmitSuccessful: (
      <p>Indicar que o formulário foi submetido com sucesso.</p>
    ),
    isDirty: "Marcado como true após o usuário interagir com algum dos campos.",
    dirtyFields: "Um conjunto exclusivo de campos modificados pelo usuário.",
    isSubmitted:
      "Marcado como true após o usuário submeter o formulário. Após o envio de um formulário, seu estado permanecerá enviado até ser chamado com o método de redefinição.",
    touched: "Uma matriz (Object) com todos os campos que foram interagidos.",
    isSubmitting: (
      <>
        Durante a submissão do formulário irá setar <code>true</code> e depois
        submeter para <code>false</code>
      </>
    ),
    submitCount: "Número de formulários submetidos.",
    isValid: "Marcado como verdadeiro se não tiver erro.",
    isValidating: (
      <>
        Ajustar para <code>verdadeiro</code> durante a validação.
      </>
    ),
  },
  errors: {
    title: "errors",
    description: () => (
      <>
        <p>
          Objeto contendo erros de formulário, ou mensagens de erro que
          pertencem a cada campo.
        </p>
      </>
    ),
    types: (
      <>
        Isto é útil para validação de campos como regras de senha, com múltiplos
        errors que precisam ser retornados de um único campo. Para habilitar
        essa funcionalidade, tenha certeza de setar{" "}
        <code>criteriaMode 'all'</code>.
      </>
    ),
    message: `'Message' é um campo string e vazio por padrão. Entretanto, se você registrar a validação com mensagem de erro, ele será retornado.`,
    ref: `Referência para o elemento do campo.`,
    note: (goToSection) => (
      <p>
        <b className={typographyStyles.note}>Nota:</b> você pode usar o{" "}
        <button
          className={buttonStyles.codeAsLink}
          onClick={() => goToSection("ErrorMessage")}
        >
          ErrorMessage
        </button>{" "}
        para ajudar a lidar com seus estados de erro.
      </p>
    ),
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
            handleSubmit(async (data) =&gt; await fetchAPI(data))
          </code>
        </p>
      </>
    ),
  },
  reset: (goToSection) => ({
    title: "reset",
    description: (
      <>
        <p>
          Essa função irá limpar o valor dos campos, e erros dentro do
          formulário. Ao fornecer <code>omitResetState</code>, você tem a
          liberdade de redefina apenas parte específica do estado. Você pode
          passar <code>values</code> como valor opcional para resetar o
          formulário assinado com o valor padrão.
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
          fornecer <code>defaultValues ​​</code> durante <code>useForm</code>
          ou<code>reset</code> com valor para redefinir no
          <code>Controller</code>o valor dos componentes.
        </p>
      </>
    ),
  }),
  setError: {
    title: "setError",
    description: (
      <>
        <p>A função permite você manualmente setar um ou múltiplos erros.</p>

        <ul>
          <li>
            <p>
              Este método não persistirá o erro de entrada associado se a
              entrada passe na validação.
            </p>
          </li>
          <li>
            <p>
              Defina um erro que não esteja associado a um campo de entrada.
              persistir e necessário para remoção manual com{" "}
              <code>clearErrors</code>.
            </p>
          </li>
          <li>
            <p>
              É útil durante a função <code>handleSubmit</code> quando você
              deseja fornecer feedback de erro aos usuários após a validação
              assíncrona.
            </p>
          </li>
        </ul>
      </>
    ),
  },
  clearError: {
    title: "clearErrors",
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
              <code>isDirty</code> é marcado como verdadeiro (true)
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
        </p>

        <CodeArea
          rawData={`setValue('name', 'value', { shouldValidate: true })`}
          withOutCopy
        />

        <p>
          Você também pode definir o parâmetro <code>shouldDirty</code> como{" "}
          <code>true</code> para definir o campo como sujo.
        </p>

        <CodeArea
          rawData={`setValue('name', 'value', { shouldDirty: true })`}
          withOutCopy
        />
      </>
    ),
  },
  getValues: {
    title: "getValues",
    description: (
      <>
        <p>
          Esta função irá ajudá-lo a ler os valores do formulário. A diferença
          entre <code>watch</code> é <code>getValues ​​</code> não será acionado
          renderize novamente ou inscrito nas alterações de entrada. As funções
          abrangem:
        </p>

        <ul>
          <li>
            <p>
              <code>getValues()</code>: lê valores inteiros do formulário.
            </p>
          </li>
          <li>
            <p>
              <code>getValues('test')</code>: lê o valor de entrada individual
              por
              <strong>name</strong>.
            </p>
          </li>
          <li>
            <p>
              <code>getValues(['test', 'test1'])</code>: lê várias entradas por
              <strong>names</strong>.
            </p>
          </li>
        </ul>
      </>
    ),
  },
  trigger: {
    title: "trigger",
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
            <code>control</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Object</code>
          </td>
          <td>✓</td>
          <td>{generic.control.pt}</td>
        </tr>
        <tr>
          <td>
            <code>as</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>React.ElementType</code>
          </td>
          <td></td>
          <td>
            O controlador injeta <code>onChange</code>, <code>onBlur</code> {""}
            e <code>value</code> adota o componente.
            <CodeArea
              withOutCopy
              url="https://codesandbox.io/s/react-hook-form-v6-controller-ts-4dpm9"
              rawData={`<Controller 
  as={<TextInput />} 
  control={control} 
  name="test" 
/>
<Controller 
  as={TextInput} 
  control={control} 
  name="test" 
/>`}
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>render</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>Function</code>
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
            </a>
            . Uma função que retorna um elemento React e fornece a capacidade de
            anexar eventos e valor ao componente. Isso facilita integrar com
            componente controlado externo com acessórios não-padrão nome:{" "}
            <code>onChange</code>, <code>onBlur</code> e <code>value</code>.
            <CodeArea
              withOutCopy
              url="https://codesandbox.io/s/react-hook-form-v6-controller-ts-4dpm9"
              rawData={`<Controller
                  control={control}
                  name='test'
                  render={({ onChange, onBlur, value }) => (
                    <Input
                      onTextChange={onChange}
                      onTextBlur={onBlur}
                      textValue={value}
                    />
                  )}
                />
                <Controller render={props => <Input {...props} />} />`}
            />
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
            quando suprido um valor <code>boolean</code>, ele será tratado como
            checkbox.
            <p>
              <b className={typographyStyles.note}>Nota:</b> você precisa
              fornecer <code>defaultValue</code> ou <code>defaultValues</code>{" "}
              em <code>useForm</code>
            </p>
            <p>
              <b className={typographyStyles.note}>Note</b>: se o seu formulário
              invocar <code>reset</code> com valores diferentes, você precisará
              fornecer <code>defaultValues</code> no nível useForm em vez de
              definido inline <code>defaultValue</code>..
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
            <ul>
              <li>
                Estado local: entrada <code>register</code> com validação
                atualizada regras ou <code>unregister</code> de entrada em{" "}
                <code>useEffect</code> e deixe o <code>Controller</code> se
                registrar novamente com <code>rules</code> atualizadas.
              </li>
              <li>
                Estado de entrada: utilize a função <code>validate</code> com{" "}
                <code>getValues​</code> para retornar sua validação
                condicionalmente.
              </li>
            </ul>
            <CodeArea
              url="https://codesandbox.io/s/controller-rules-8pd7z?file=/src/App.tsx"
              withOutCopy
              rawData="
register('name', { required: state })
validate: (value) => value === getValues('firstName');"
            />
          </td>
        </tr>
        <tr>
          <td>
            <code>onFocus</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>() =&gt; void</code>
          </td>
          <td></td>
          <td>
            <p>
              Esse retorno de chamada permite que o gancho personalizado se
              concentre na entrada quando há um erro. Esta função é aplicável
              para ambos, React e Componentes do React-Native desde que possam
              ser focados.
            </p>
            <p>
              <a
                href="https://codesandbox.io/s/react-hook-form-controllerautofocus-v6-eeo66"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aqui está um exemplo de trabalho.
              </a>
              .
            </p>
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
          . Este componente irá fazer sua vida mais simples.
        </p>
        <p>
          Cada <code>props</code> que se passa para um componente conntrolado,
          será encaminhado para a instância do componente que você proveu com a
          propriedade <code>as</code>. Isto significa que você possui um
          componente custom <code>Switch</code> que necessita de uma propriedade{" "}
          <code>label</code>. Você pode passar essa propriedade diretamente para
          o componente controlado. A propriedade <code>name</code> será usada
          principalmente para acessar o valor através do formulário depois.
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
          Uma vez que seu formulário utiliza <code>FormProvider</code>, o{" "}
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
    table: {
      name: <>campo name associado.</>,
      errors: (
        <>
          <code>errors</code> objeto do React Hook Form. é opcional se estiver
          usando FormProvider.
        </>
      ),
      message: <>mensagem de erro em linha.</>,
      as: (
        <>
          Um componente ou tag HTML. ex: <code>as="span"</code> or{" "}
          <code>{`as={<Text />}`}</code>
        </>
      ),
      render: (
        <>
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
            criteriaMode to 'all' for using <code>messages</code>.
          </p>
        </>
      ),
    },
  },
  useFieldArray: {
    title: "useFieldArray",
    description: (
      <>
        <p>
          Um custom hook para usar com Arrays de campos não-controlados (inputs
          dinâmicos). A motivação por trás disso é fornecer melhor experiência
          ao usuário e performance ao formulário. Você pode assistir{" "}
          <a
            href="https://www.youtube.com/watch?v=Q7lrHuUfgIs"
            target="_blank"
            rel="noopener noreferrer"
          >
            este video
          </a>{" "}
          para comparar arrays controlados e não controlados.
        </p>

        <div className={tableStyles.tableWrapper}>
          <table className={tableStyles.table}>
            <thead>
              <tr>
                <th>{generic.name.pt}</th>
                <th width="140px">{generic.type.pt}</th>
                <th width="90px">{generic.required.pt}</th>
                <th>{generic.description.pt}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>name</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>string</code>
                </td>
                <td></td>
                <td>
                  <>campo name associado.</>
                </td>
              </tr>
              <tr>
                <td>
                  <code>control</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>Object</code>
                </td>
                <td></td>
                <td>{generic.control.pt}</td>
              </tr>
              <tr>
                <td>
                  <code>keyName</code>
                </td>
                <td>
                  <code className={typographyStyles.typeText}>
                    string = 'id'
                  </code>
                </td>
                <td></td>
                <td>
                  valor da <code>key</code> da matriz de campos, o padrão é
                  "id", você pode mude o nome da chave.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeArea rawData={useFieldArrayArgument} />

        <p>
          <b className={typographyStyles.note}>Importante: </b> O
          <code>useFieldArray</code> é construído sobre componentes não
          controlados. As notas a seguir ajudarão você a estar ciente e
          consciente de suas comportamento durante a implementação.
        </p>

        <ul>
          <li>
            <p>
              Você pode popular os <code>fields</code> fornecendo
              <code>defaultValues</code> no <code>useForm</code> hook.
            </p>
          </li>
          <li>
            <p>
              certifique-se de atribuir <code>id</code> a partir de{" "}
              <code>fields</code>
              objeto como sua chave de componente.
            </p>
          </li>
          <li>
            <p>
              certifique-se de definir <code>defaultValue</code> como
              <code>field[index]</code> quando você deseja definir o valor
              padrão, remova ou redefina com entradas.
            </p>
          </li>
          <li>
            <p>
              você não pode chamar ações uma após a outra. As ações precisam ser
              acionado por renderização.
            </p>
            <CodeArea
              withOutCopy
              rawData={`// ❌ The following is not correct
handleChange={() => {
  if (fields.length === 2) {
    remove(0);
  }
  append({ test: 'test' });
}}

// ✅ The following is correct and second action is triggered after next render
handleChange={() => {
  append({ test: 'test' });
}}

React.useEffect(() => {
  if (fields.length === 2) {
    remove(0);
  }
}, fields)
            `}
            />
          </li>
          <li>
            <p>
              é <strong>importante</strong> aplicar{" "}
              <code>{`ref={register()}`}</code> ao invés de{" "}
              <code>{`ref={register}`}</code> quando estiver trabalhando com{" "}
              <code>useFieldArray</code> para que o <code>register</code> seja
              invocado durante <code>map</code>.
            </p>
          </li>
          <li>
            Ele não funciona com o registro personalizado em{" "}
            <code>useEffect</code>.
          </li>
        </ul>
      </>
    ),
    table: (
      <>
        <tr>
          <td>
            <code>fields</code>
          </td>
          <td width={320}>
            <code className={typographyStyles.typeText}>
              object & {`{ id: string }`}
            </code>
          </td>
          <td>
            Esse objeto é onde o <code>map</code> confia para renderizar os
            campos.
            <p>
              <b className={typographyStyles.note}>Importante: </b>
              Porque cada campo pode ser não-controlado, <code>id</code> é
              mandatório com componentes mapeados, para ajudar o React a
              identificar quais itens mudaram, foram adicionados ou removidos.
            </p>
            <p>
              ex: <code>{`{fields.map(d => <input key={d.id} />)}`}</code>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>append</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (obj: object | object[], shouldFocus?: boolean = true) =&gt; void
            </code>
          </td>
          <td>Append input/inputs no final de seus campos.</td>
        </tr>
        <tr>
          <td>
            <code>prepend</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (obj: object | object[], shouldFocus?: boolean = true) =&gt; void
            </code>
          </td>
          <td>Prepend input/inputs no começo de seus campos.</td>
        </tr>
        <tr>
          <td>
            <code>insert</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (index: number, value: object, shouldFocus?: boolean = true) =&gt;
              void
            </code>
          </td>
          <td>Insert input/inputs em uma posição particular.</td>
        </tr>
        <tr>
          <td>
            <code>swap</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (from: number, to: number) =&gt; void
            </code>
          </td>
          <td>Swap input/inputs posição.</td>
        </tr>
        <tr>
          <td>
            <code>move</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (from: number, to: number) =&gt; void
            </code>
          </td>
          <td>
            Move input/inputs em outra posição.
            <p>
              <b className={typographyStyles.note}>Note:</b> A diferença entre{" "}
              <code>move</code> e <code>swap</code>, é que chamando{" "}
              <code>move</code> vai empurrar os campos em um loop , enquanto{" "}
              <code>swap</code> somente muda a posição de dois campos.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <code>remove</code>
          </td>
          <td>
            <code className={typographyStyles.typeText}>
              (index?: number | number[]) =&gt; void
            </code>
          </td>
          <td>
            Remove campos de uma posição particular, ou remove todos quando
            nenhum índice é fornecido.
          </td>
        </tr>
      </>
    ),
  },
  resolver: {
    title: "resolver",
    description: (
      <>
        <p>
          Essa função permite executar qualquer validação ou metodo externo,
          como
          <a
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </a>
          ,{" "}
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
          e etc. Fato é que, o objetivo é não se limitar ao Yup como nosso
          schema externo. Nós gostariamos de suportar muitas outras bibliotecas
          de validação para funcionar com o React Hook Form. Você pode inclusive
          escrever sua propria logica de validação.
        </p>

        <p>
          Apoiamos Yup, Joi e Superstruct oficialmente como{" "}
          <a
            href="https://github.com/react-hook-form/react-hook-form-resolvers"
            target="_blank"
            rel="noopener noreferrer"
          >
            resolvedores padrão
          </a>
          .
        </p>

        <code
          style={{
            fontSize: 16,
            padding: 15,
            background: "#191d3a",
            borderRadius: 4,
            display: "block",
          }}
        >
          npm install @hookform/resolvers
        </code>

        <p>notas sobre a criação de resolvedores personalizados:</p>

        <ul>
          <li>
            <p>
              <b className={typographyStyles.note}>Nota:</b> Tenha certeza que
              você retornando o objeto que contem <code>values</code> e{" "}
              <code>errors</code>, e seus valores padrão sejam um objeto vazio{" "}
              <code>{`{}`}</code>.
            </p>
          </li>
          <li>
            <p>
              <b className={typographyStyles.note}>Nota:</b> retornar a chave do
              objeto que contenha os erros é relevante para seus inputs.
            </p>
          </li>
          <li>
            <p>
              <b className={typographyStyles.note}>Nota:</b> Essa função será
              cacheada dentro do custom hook, enquanto o <code>context</code> é
              um objeto mutável que pode ser modificado a cada re-render.
            </p>
          </li>
          <li>
            <p>
              <b className={typographyStyles.note}>Nota:</b> Revalidar o input
              vai ocorrer somente em um campo por vez durante as interações do
              usuário, porque a biblioteca em si vai considerar o objeto do
              campo em especifico e disparará o re-render de acordo.
            </p>
          </li>
        </ul>
      </>
    ),
  },
  useWatch: {
    title: "useWatch",
    description: (
      <p>
        Compartilhe a mesma funcionalidade que a API <code>watch</code>, no
        entanto, isso isolará a nova renderização no nível do componente e
        resultará potencialmente em melhor desempenho para sua aplicação.
      </p>
    ),
  },
  useController: {
    title: "useController",
    description: (
      <>
        <p>
          Este gancho personalizado é o que potencia <code>Controller</code>, e
          compartilha os mesmos adereços e métodos que <code>Controller</code>.
          É útil para criar entrada controlável reutilizável, enquanto{" "}
          <code>Controller</code> é o opção flexível para cair em sua página ou
          formulário.
        </p>
        <p>
          Favor consultar a seção <code>Controller</code> para este gancho
          argumentos. Ele compartilha os mesmos argumentos, exceto{" "}
          <code>como</code> e <code>rendas</code>.
        </p>
      </>
    ),
  },
}
