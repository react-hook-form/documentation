import code from "../components/codeExamples/defaultExample"
import * as React from "react"
import Link from "../styles/link"
import { Link as NavLink } from "gatsby"
import { CodeBlock, Note, Title, TypeText } from "../styles/typography"
import { CodeAsLink } from "../components/ApiPage"
import colors from "../styles/colors"
import translateLink from "../components/logic/translateLink"
import Popup from "../components/Popup"

export default {
  title: {
    en: "API Documentation",
    kr: "API 설명서",
    jp: "API ドキュメント",
    zh: "API文档",
  },
  header: {
    description: {
      en:
        "React Hook Form focuses on providing the best DX by simplifying the API.",
      kr: "React Hook Form은 API 단순화를 통해 최고의 DX를 제공합니다.",
      jp:
        "React Hook Form は API をシンプルにすることにより、最高な DX を提供することに焦点を当てています。",
      zh: "React Hook Form专注于通过简化API提供最佳开发者体验",
    },
  },
  useForm: {
    en: {
      title: "useForm",
      intro: (
        <>
          By invoking <code>useForm</code>, you will receive the following
          methods{" "}
        </>
      ),
      description: (
        <p>
          <code>useForm</code> also has <b>optional</b> arguments. The following
          example demonstrates all options' default value.
        </p>
      ),
      validationSchemaOption: (
        <>
          The <code>options</code> argument is an object hash containing any
          schema options you may want to override (or specify for the first
          time). You can read more in the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jquense/yup#mixedvalidatevalue-any-options-object-promiseany-validationerror"
          >
            yup documentation
          </a>
          .
        </>
      ),
      validateCriteriaMode: (
        <>
          <p>
            The default behavior <code>firstErrorDetected</code> will validate
            all fields' validation and gather all the first error encounter.
          </p>
          <p>
            With config set to <code>all</code>, all fields' validation will be
            run through and gather all the errors encounter.
          </p>
        </>
      ),
      validateOnSubmit: (
        <>
          Validation will trigger on the <code>submit</code> event and invalid
          inputs will attach <code>onChange</code> event listeners to
          re-validate them.
        </>
      ),
      validateOnBlur: (
        <>
          Validation will trigger on the <code>blur</code> event.
        </>
      ),
      validateOnChange: (
        <>
          Validation will trigger on the <code>change</code> event with each
          input, and lead to multiple re-renders. Not recommended: Consider this
          as a bad performance practice.
        </>
      ),
      defaultValues: goToSection => (
        <>
          <p>
            You can set the input's default value with{" "}
            <code>defaultValue/defaultChecked</code>{" "}
            <Link href="https://reactjs.org/docs/uncontrolled-components.html">
              (read more from the React doc for Default Values)
            </Link>{" "}
            or pass <code>defaultValues</code> as an optional argument to
            populate default values for the entire form.
          </p>

          <p>
            <Note>Note:</Note> Values defined in <code>defaultValues</code> will
            be injected into{" "}
            <CodeAsLink onClick={() => goToSection("watch")}>watch</CodeAsLink>{" "}
            as <code>defaultValue</code>.
          </p>

          <p>
            <Note>Note:</Note> <code>defaultValues</code> doesn't auto populate
            with the manually registered input (eg:{" "}
            <code>{`register({ name: 'test' })`}</code>) because the manual{" "}
            <code>register</code> field does not provide the <code>ref</code> to
            React Hook Form.
          </p>
        </>
      ),
      validationSchema: goToSection => (
        <p>
          Apply form validation rules with <code>Yup</code> at the schema level,
          please refer to the{" "}
          <CodeAsLink onClick={() => goToSection("validationSchema")}>
            validationSchema
          </CodeAsLink>{" "}
          section.
        </p>
      ),
      reValidateMode: (
        <p>
          This option allows you to configure when inputs with errors getd
          re-validated (by default, validation is triggered during an input
          change.) <Popup />
        </p>
      ),
      validationFields: (
        <p>
          Providing an array of fields means only included fields will be
          validated. This option is useful when you want to toggle which fields
          are required to validate.
        </p>
      ),
      submitFocusError: (
        <>
          <p>
            By default when the user submits a form and that contains an error,
            the first field with an error will be focused.
          </p>

          <p>
            <Note>Note:</Note> Only registered fields with a <code>ref</code>{" "}
            will work. Manually registered inputs won't work. eg:{" "}
            <code>{`register({ name: 'test' }) // doesn't work`}</code>{" "}
          </p>
        </>
      ),
      nativeValidation: goToSection => (
        <p>
          Setting this option to <code>true</code> will enable the browser's
          native validation. You can{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
          >
            find out more about the built-in browser validation
          </a>
          , and refer to the{" "}
          <CodeAsLink onClick={() => goToSection("nativeValidation")}>
            nativeValidation
          </CodeAsLink>{" "}
          section for more details and examples.
        </p>
      ),
    },
    kr: {
      title: "useForm",
      intro: (
        <>
          <code>useForm</code> 을 호출하여 다음의 메소드들을 사용할 수
          있습니다..{" "}
        </>
      ),
      description: (
        <p>
          <code>useForm</code> 에서는 <b>옵셔널</b>한 인수도 있습니다. 다음
          예제는 모든 옵션의 기본값을 보여줍니다.
        </p>
      ),
      validationSchemaOption: (
        <>
          <code>옵션</code>인수는 재정의(또는 처음 지정)할 수 있는 스키마 옵션이
          포함된 객체 해시입니다. 더 자세한 사항은{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jquense/yup#mixedvalidatevalue-any-options-object-promiseany-validationerror"
          >
            yup 문서
          </a>
          에서 찾아 볼 수 있습니다.
        </>
      ),
      validateCriteriaMode: (
        <>
          <p>
            기본값으로 설정 된 <code>firstErrorDetected</code> 는 모든 필드
            유효성 검사를 실행하고 처음 발견하는 모든 에러를 모읍니다.
          </p>
          <p>
            <code>all</code> 로 설정하면, 모든 필드의 유효성 검사가 실행되면서
            발생하는 필드의 모든 에러를 모읍니다.
          </p>
        </>
      ),
      validateOnSubmit: (
        <>
          유효성 검사는 <code>submit</code> 이벤트에서 트리거되며, 유효하지 않은
          입력은 <code>onChange</code> 이벤트 리스너를 연결하여 유효성을 다시
          확인합니다.
        </>
      ),
      validateOnBlur: (
        <>
          <code>blur</code> 이벤트에서 유효성 검사가 트리거됩니다.
        </>
      ),
      validateOnChange: (
        <>
          유효성 검사는 각 입력창의 <code>change</code> 이벤트로 시작되어,
          여러번 다시 렌더링합니다. 이 방법은 랜더링 성능을 떨어뜨리므로
          추천하지 않습니다.
        </>
      ),
      defaultValues: goToSection => (
        <>
          <p>
            입력의 기본값을 <code>defaultValue/defaultChecked</code> 로 설정
            하거나{" "}
            <Link href="https://ko.reactjs.org/docs/uncontrolled-components.html">
              (기본값에 대한 React 문서를 읽어보세요)
            </Link>
            , <code>defaultValues</code> 를 옵셔널 인수로 전달 하여 전체 폼의
            기본값을 채울 수 있습니다.
          </p>

          <p>
            <Note>참고:</Note> <code>defaultValues</code> 내 정의 된 값은{" "}
            <CodeAsLink onClick={() => goToSection("watch")}>watch</CodeAsLink>{" "}
            의 <code>defaultValue</code> 값으로 주입됩니다.
          </p>

          <p>
            <Note>참고:</Note> 수동 <code>register</code> 필드는 React Hook
            Form의 <code>ref</code> 를 제공하지 않기에, 수동 입력 필드(예를
            들어, <code>{`register({ name: 'test' })`}</code> )의{" "}
            <code>defaultValues</code> 는 자동 완성 되지 않습니다.
          </p>
        </>
      ),
      validationSchema: goToSection => (
        <p>
          <code>Yup</code> 의 스키마 레벨 폼 유효성 검사 규칙을 적용 하세요.{" "}
          <CodeAsLink onClick={() => goToSection("validationSchema")}>
            validationSchema
          </CodeAsLink>{" "}
          섹션을 참고하세요.
        </p>
      ),
      reValidateMode: (
        <p>
          이 옵션을 사용하여 입력의 재유효성 검사를 언제 할지 설정 할 수
          있습니다. (기본적으로 입력이 변경될 때 유효성 검사가 트리거 됩니다. )
          <Popup />
        </p>
      ),
      validationFields: (
        <p>
          제공되는 필드 배열은 앞으로 검증될 필드만 포함합니다. 이 옵션은 유효성
          검사가 필요한 필드에 대해서 토글(toggle)을 원할 경우에 유용합니다.
        </p>
      ),
      submitFocusError: (
        <>
          <p>
            기본적으로 사용자가 폼을 제출하고 에러가 있는 경우, 에러가 있는
            첫번째 필드에 포커스 됩니다.
          </p>

          <p>
            <Note>참고:</Note> <code>ref</code> 로 등록된 필드만 작동합니다.
            수동으로 등록하면 동작하지 않습니다. 예 :{" "}
            <code>{`register({ name: 'test' }) // 동작하지 않음`}</code>{" "}
          </p>
        </>
      ),
      nativeValidation: goToSection => (
        <p>
          이 옵션을 <code>true</code> 로 설정하면 브라우저의 기본 유효성 검사가
          활성화됩니다.
          {"  "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
          >
            브라우저 기본 유효성 검사
          </a>
          에 대한 내용을 확인하시고 좀 더 자세한 내용과 예시는{" "}
          <CodeAsLink onClick={() => goToSection("nativeValidation")}>
            nativeValidation
          </CodeAsLink>{" "}
          에서 참고하실 수 있습니다.
        </p>
      ),
    },
    jp: {
      title: "useForm",
      intro: (
        <>
          <code>useForm</code>{" "}
          を呼び出すことにより、次のメソッドを受け取ることができます。{" "}
        </>
      ),
      description: (
        <p>
          <code>useForm</code> は<b>省略可能</b>な引数もあります。
          下記の例は、全てのオプションのデフォルト値を示します。
        </p>
      ),
      validationSchemaOption: (
        <>
          <code>options</code> 引数はオーバーライド (または初めに指定)
          したいスキーマオプションを含むオブジェクトハッシュです。{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jquense/yup#mixedvalidatevalue-any-options-object-promiseany-validationerror"
          >
            Yup ドキュメント
          </a>
          で詳細を読むことができます。
        </>
      ),
      validateCriteriaMode: (
        <>
          <p>
            デフォルトの設定である <code>firstErrorDetected</code>{" "}
            は、全てのフィールドのバリデーションを行い、最初に発生したエラーを収集します。
          </p>
          <p>
            このオプションを <code>all</code>{" "}
            に設定すると、全てのフィールドのバリデーションが実行され、
            発生した全てのエラーが収集されます。
          </p>
        </>
      ),
      validateOnSubmit: (
        <>
          <code>submit</code> イベントからバリデーションがトリガーされ、
          無効な入力は <code>onChange</code>{" "}
          イベントリスナーをアタッチして再度バリデーションを行います。
        </>
      ),
      validateOnBlur: (
        <>
          <code>blur</code> イベントからバリデーションがトリガーされます。
        </>
      ),
      validateOnChange: (
        <>
          入力の度に <code>change</code>{" "}
          イベントからバリデーションがトリガーされ、複数の再レンダリングが行われます。
          非推奨: これをパフォーマンスの悪い習慣と考えてください。
        </>
      ),
      defaultValues: goToSection => (
        <>
          <p>
            <code>defaultValue/defaultChecked</code> を使用して input
            のデフォルト値を設定するか{" "}
            <Link href="https://reactjs.org/docs/uncontrolled-components.html">
              (詳細については React ドキュメントを参照)
            </Link>{" "}
            、<code>defaultValues</code>{" "}
            を省略可能な引数として渡してフォーム全体のデフォルト値を設定することができます。
          </p>

          <p>
            <Note>注意：</Note> <code>defaultValues</code> で定義された値は{" "}
            <code>defaultValue</code> として{" "}
            <CodeAsLink onClick={() => goToSection("watch")}>watch</CodeAsLink>{" "}
            に注入されます。
          </p>

          <p>
            <Note>注意：</Note> 手動で <code>register</code>{" "}
            を適用したフィールドでは React Hook Form に <code>ref</code>{" "}
            を提供しないため、 手動で登録した input (例:{" "}
            <code>{`register({ name: 'test' })`}</code>) に{" "}
            <code>defaultValues</code> は自動設定されません。
          </p>
        </>
      ),
      validationSchema: goToSection => (
        <p>
          スキーマレベルで <code>Yup</code>{" "}
          を使用してフォームバリデーションルールを適用します。{" "}
          <CodeAsLink onClick={() => goToSection("validationSchema")}>
            validationSchema
          </CodeAsLink>{" "}
          セクションを参照してください。
        </p>
      ),
      reValidateMode: (
        <p>
          このオプションを使用すると、エラーのある入力が再度バリデーションされるタイミングを設定することができます。{" "}
          (デフォルトでは、入力変更時にバリデーションがトリガーされます。){" "}
          <Popup />
        </p>
      ),
      validationFields: (
        <p>
          フィールドの配列を指定すると、含まれているフィールドのみがバリデーションが行われます。
          このオプションは、バリデーションが必要なフィールドを切り替えたい時に便利です。
        </p>
      ),
      submitFocusError: (
        <>
          <p>
            デフォルトでは、ユーザーがフォームを送信してそのフォームにエラーが含まれている時、
            エラーのある最初のフィールドがフォーカスされます。
          </p>

          <p>
            <Note>注意：</Note> <code>ref</code>{" "}
            を持つ登録したフィールドのみが機能します。 手動で登録した input
            では機能しません。例：{" "}
            <code>{`register({ name: 'test' }) // doesn't work`}</code>{" "}
          </p>
        </>
      ),
      nativeValidation: goToSection => (
        <p>
          このオプションを <code>true</code>{" "}
          に設定すると、ブラウザーネイティブバリデーションが有効になります。
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
          >
            ビルトインブラウザーバリデーションの詳細を確認
          </a>
          できます。詳細と例については{" "}
          <CodeAsLink onClick={() => goToSection("nativeValidation")}>
            nativeValidation
          </CodeAsLink>{" "}
          セクションを参照してください。
        </p>
      ),
    },
    zh: {
      title: "useForm",
      intro: (
        <>
          通过调用使用<code>useForm</code>，您将收到以下方法{" "}
        </>
      ),
      description: (
        <p>
          <code>useForm</code>也有<strong>可选</strong>的参数。
          下面的示例演示了所有选项的默认值。
        </p>
      ),
      validationSchemaOption: (
        <>
          <code>Options</code>参数是一个<code>Object</code>
          ，其中包含您可能想要复盖的任何模式选项（或首次指定）。 您可以在
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jquense/yup#mixedvalidatevalue-any-options-object-promiseany-validationerror"
          >
            yup文档中阅读更多内容
          </a>
          。
        </>
      ),
      validateCriteriaMode: (
        <>
          <p>
            默认行为<code>firstErrorDetected</code>将验证
            所有字段的验证，并收集所有遇到的第一个错误。
          </p>
          <p>
            设置为<code> all </code>时，所有字段的验证将是
            运行并收集遇到的所有错误。
          </p>
        </>
      ),
      validateOnSubmit: (
        <>
          验证将在<code>提交</code>
          时触发，无效的输入将附加onChange事件侦听器以重新验证它们。
        </>
      ),
      validateOnBlur: (
        <>
          验证将在离开<code>blur</code>表格事件上触发。
        </>
      ),
      validateOnChange: (
        <>
          验证将在每个输入<code>change</code>
          的事件上触发，并导致多个重新renders。 不推荐这个方法的实践性能。
        </>
      ),
      defaultValues: goToSection => (
        <>
          <p>
            您可以使用defaultValue/defaultChecked设置输入的默认值
            <Link href="https://reactjs.org/docs/uncontrolled-components.html">
              （从React文档中读取默认值的更多内容）
            </Link>
            ，或者将defaultValues作为可选参数来填充整个表单的默认值。
          </p>

          <p>
            <Note>注意:</Note> 默认值<code>defaultValues</code>
            中定义的值将作为默认值<code>defaultValue</code>注入
            <CodeAsLink onClick={() => goToSection("watch")}>watch</CodeAsLink>
            。
          </p>

          <p>
            React Hook Form. 默认值<code>defaultValues</code>
            不会使用手动注册的输入（例如：注册
            <code>{`register({ name: 'test' })`}</code>
            ）自动填充，因为手动注册<code>register</code>字段不会提供
            <code>ref</code>到React Hook Form。
          </p>
        </>
      ),
      validationSchema: goToSection => (
        <p>
          将表单验证规则应用于架构级别的<code>Yup</code>，请参阅验证架构
          <CodeAsLink onClick={() => goToSection("validationSchema")}>
            validationSchema
          </CodeAsLink>
          部分。
        </p>
      ),
      reValidateMode: (
        <p>
          此选项允许您在有错误的输入重新验证时进行配置（默认情况下，在输入更改期间触发验证）。{" "}
          <Popup />
        </p>
      ),
      validationFields: (
        <p>
          提供字段数组意味着只包含字段将会被验证。
          此选项很有用需要验证当您要切换什么表格需要验证。
        </p>
      ),
      submitFocusError: (
        <>
          <p>
            默认情况下，当用户提交表单并包含错误时,
            具有错误的第一个字段将被聚焦。
          </p>

          <p>
            <Note>注意:</Note> 只有具有<code>ref</code>的注册字段将工作。
            手动注册的输入将无法正常工作。 比如:{" "}
            <code>{`register({ name: 'test' }) // 不会工作`}</code>{" "}
          </p>
        </>
      ),
      nativeValidation: goToSection => (
        <p>
          将此选项设置为<code>true</code>将启用浏览器的本机验证。{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
          >
            您可以了解有关内置浏览器验证的更多信息
          </a>
          ，并参考本机验证部分
          <CodeAsLink onClick={() => goToSection("nativeValidation")}>
            nativeValidation
          </CodeAsLink>
          了解更多详细信息和示例。
        </p>
      ),
    },
  },
  unregister: {
    en: {
      title: "unregister",
      description: (
        <>
          <p>
            This method will allow you to <code>unregister</code> a single input
            or an array of inputs.
          </p>
          <p>
            <Note>Note:</Note> When you unregister an input, its value will no
            longer be included in the form data that gets submitted.
          </p>
        </>
      ),
    },
    kr: {
      title: "unregister",
      description: (
        <>
          <p>
            이 함수에서는 단일 입력 혹은 여러 입력들을 <code>unregister</code>{" "}
            할 수 있습니다.
          </p>
          <p>
            <Note>참고:</Note> 입력을 등록 취소(unregister)하면, 제출된 폼
            데이터에 해당 값이 더 이상 포함되지 않습니다.
          </p>
        </>
      ),
    },
    jp: {
      title: "unregister",
      description: (
        <>
          <p>
            このメソッドでは、単一の input または input の配列に{" "}
            <code>unregister</code> を適用することができます。
          </p>
          <p>
            <Note>注意：</Note> input を登録解除 (<code>unregister</code>)
            すると、 その値は送信されたフォームデータに含まれなくなります。
          </p>
        </>
      ),
    },
    zh: {
      title: "unregister",
      description: (
        <>
          <p>此方法将允许您取消注册单个输入或输入的数组。</p>
          <p>
            <Note>注意:</Note>{" "}
            取消注册输入时，其值将不再被包含在被提交的表单数据中。
          </p>
        </>
      ),
    },
  },
  register: {
    en: {
      title: "register",
      description: (
        <>
          <p>
            This method allows you to register input/select <code>Ref</code> and
            validation rules into React Hook Form.
          </p>
          <p>
            Validation rules are all based on HTML standard and also allow
            custom validation.
          </p>
          <p>
            <Note>Important:</Note> <code>name</code> is <b>required</b> and{" "}
            <b>unique</b>. Input name also supports dot and bracket syntax,
            which allows you to easily create nested form fields. Example table
            is below:
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
          If you working on <code>arrays/array fields</code>, you can assign an
          input name as <code>name[index]</code>.{" "}
          <Link
            href="https://github.com/react-hook-form/react-hook-form/blob/master/examples/FieldArray.tsx"
            title="example for Field Array"
          >
            Check out the Field Array example
          </Link>
          .
        </p>
      ),
      example: "Submit Result",
      selectHelp:
        "By selecting the register option, the API table below will get updated.",
      options: {
        title: "Register options",
        registerWithValidation: "Register with validation",
        registerWithValidationMessage:
          "Register with validation and error message",
        note: goToSection => (
          <>
            <Title>Custom Register</Title>
            <p>
              You can also register inputs manually, which is useful when
              working with custom components and <code>Ref</code> is not
              accessible. This is actually the case when you are working with
              React Native or custom component like{" "}
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
              By using a custom register call, you will need to update the input
              value with{" "}
              <code onClick={() => goToSection("setValue")}>setValue</code>,
              because input is no longer registered with its ref.
            </p>

            <p>
              <CodeBlock>{`register({ name: 'firstName' }, { required: true, min: 8 })`}</CodeBlock>
            </p>

            <p>
              <Note>Note:</Note> If you want the custom registered input to
              trigger a re-render during its value update, then you should give
              a type to your registered input.
            </p>
          </>
        ),
      },
      validation: {
        required: (
          <>
            A Boolean which, if true, indicates that the input must have a value
            before the form can be submitted. You can assign a string to return
            an error message in the <code>errors</code> object.
          </>
        ),
        maxLength: "The maximum length of the value to accept for this input.",
        minLength: "The minimum length of the value to accept for this input.",
        max: "The maximum value to accept for this input.",
        min: "The minimum value to accept for this input.",
        pattern: "The regex pattern for the input.",
        validate: `You can pass a callback function as the argument to validate, or you can pass an object of callback functions to validate all of them. (refer to the examples)`,
      },
    },
    kr: {
      title: "register",
      description: (
        <>
          <p>
            이 함수에서 입력/선택(input/select) <code>Ref</code> 와 유효성 검사
            규칙을 등록(register)할 수 있습니다.
          </p>
          <p>
            유효성 검사 규칙은 모두 HTML 표준을 기반으로 하며, 커스텀 유효성
            검사도 가능합니다.
          </p>
          <p>
            <Note>중요:</Note> <code>name</code>은 <b>필수</b>이며 <b>유니크</b>
            해야합니다. name은 점(dot)과 괄호 구문도 지원하므로, 중첩 된 폼
            필드를 쉽게 만들 수 있습니다. 예제는 다음과 같습니다.
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
          <code>arrays/array</code> 필드의 경우, <code>name[index]</code> 와
          같이 name을 지정할 수 있습니다.{" "}
          <Link
            href="https://github.com/react-hook-form/react-hook-form/blob/master/examples/FieldArray.tsx"
            title="example for Field Array"
          >
            Field Array 예제를 확인하세요.
          </Link>
          .
        </p>
      ),
      example: "제출 결과",
      selectHelp:
        "등록 옵션(register options)을 선택하면, 아래의 API 테이블이 업데이트됩니다.",
      options: {
        title: "Register options",
        registerWithValidation: "유효성 검사과 함께 등록",
        registerWithValidationMessage: "유효성 검사 및 에러 메시지완 등록",
        note: goToSection => (
          <>
            <Title>Custom Register</Title>
            <p>
              커스텀 컴포넌트와 <code>Ref</code>에 액세스 할 수 없는 경우,
              입력을 수동으로 등록 할 수 있습니다. 이는 실제로 React Native 또는{" "}
              <a
                href="https://github.com/JedWatson/react-select"
                target="_blank"
                rel="noopener noreferrer"
              >
                react-select
              </a>{" "}
              와 같은 커스텀 컴포넌트와 작업할 때 사용될 수 있습니다.
            </p>

            <p>
              Custome register를 사용하면, 입력은 더이상 ref로 등록되지
              않으므로,{" "}
              <code onClick={() => goToSection("setValue")}>setValue</code> 을
              통해 입력 값을 업데이트해 주어야 합니다.
            </p>

            <p>
              <CodeBlock>{`register({ name: 'firstName' }, { required: true, min: 8 })`}</CodeBlock>
            </p>

            <p>
              <Note>참고:</Note> 값을 업데이트하는 동안 커스텀 등록된 입력을
              다시 렌더링 하도록 하려면, 등록된 입력의 타입을 지정해 주어야
              합니다.
            </p>
          </>
        ),
      },
      validation: {
        required: (
          <>
            폼 제출을 위해 반드시 필요한 경우, true로 지정합니다. 에러시 반환할
            문자열 메세지는 <code>errors</code> 객체에 지정할수 있습니다.
          </>
        ),
        maxLength: "입력에 허용되는 최대 길이입니다.",
        minLength: "입력에 허용되는 최소 길이입니다.",
        max: "입력에 허용되는 최대 값입니다.",
        min: "입력에 허용되는 최소 값입니다.",
        pattern: "입력에 대한 정규식 패턴입니다.",
        validate: `콜백 함수를 인수로 전달하거나 콜백 함수의 객체를 전달하여 검증할 수 있습니다. (예제 참조)`,
      },
    },
    jp: {
      title: "register",
      description: (
        <>
          <p>
            このメソッドを使用すると、input/select の <code>Ref</code>{" "}
            とバリデーションルールを React Hook Form に登録 (
            <code>register</code>) することができます。
          </p>
          <p>
            バリデーションルールは全て HTML
            標準に基づいており、カスタムバリデーションも可能です。
          </p>
          <p>
            <Note>重要：</Note> <code>name</code> 属性は<b>必須</b>かつ
            <b>ユニーク</b>です。 input の name
            属性はドット記法およびブラケット記法もサポートしているため、
            ネストされたフォームフィールドを簡単に作成することができます。例は下記の通りです：
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
          <code>arrays/array</code> フィールドを使用する場合、input の name
          属性を <code>name[index]</code> のように割り当てることができます。
          <Link
            href="https://github.com/react-hook-form/react-hook-form/blob/master/examples/FieldArray.tsx"
            title="example for Field Array"
          >
            フィールド配列の例をご覧ください
          </Link>
          。
        </p>
      ),
      example: "フォームの送信結果",
      selectHelp:
        "登録オプションを選択すると、下記の API テーブルが更新されます。",
      options: {
        title: "登録オプション",
        registerWithValidation: "バリデーションのみで登録",
        registerWithValidationMessage: "バリデーションとエラーメッセージで登録",
        note: goToSection => (
          <>
            <Title>カスタム登録</Title>
            <p>
              また、input を手動で登録 (manual <code>register</code>)
              することもできます。 これは、カスタムコンポーネントを操作していて{" "}
              <code>Ref</code> にアクセスできない場合に便利です。 React Native
              や{" "}
              <a
                href="https://github.com/JedWatson/react-select"
                target="_blank"
                rel="noopener noreferrer"
              >
                react-select
              </a>{" "}
              のようなカスタムコンポーネントを使用している場合がこれに該当します。
            </p>

            <p>
              カスタム登録を使用すると、 input の ref は登録されていないため、{" "}
              <code onClick={() => goToSection("setValue")}>setValue</code>{" "}
              で入力値を更新する必要があります。
            </p>

            <p>
              <CodeBlock>{`register({ name: 'firstName' }, { required: true, min: 8 })`}</CodeBlock>
            </p>

            <p>
              <Note>注意：</Note> 値の更新中に、カスタム登録した input
              で再レンダリングをトリガーしたい場合は、 登録した input に type
              属性を指定する必要があります。
            </p>
          </>
        ),
      },
      validation: {
        required: (
          <>
            Boolean の値。true
            の場合、フォームを送信する前に入力値が必須であることを示します。
            <code>errors</code>{" "}
            オブジェクトにエラーメッセージを返す文字列を割り当てることができます。
          </>
        ),
        maxLength: "input が受け付ける最大文字数。",
        minLength: "input が取りうる妥当と判断される最小文字数。",
        max: "input が受け付ける最大数。",
        min: "input が取りうる妥当と判断される最小数。",
        pattern: "input の内容が一致する必要がある正規表現。",
        validate: `引数として、単一のバリデーションを行うためにはコールバック関数を渡すことができ、複数のバリデーションを行うためにはコールバック関数のオブジェクトを渡すことができます。 (例を参照)`,
      },
    },
    zh: {
      title: "register",
      description: (
        <>
          <p>
            此方法允许您将输入/选择中的<code>Ref</code>和验证规则注册到React
            Hook Form。
          </p>
          <p>验证规则都是基于HTML标准，也允许自定义验证。</p>
          <p>
            <Note>重要:</Note> 名称<code>name</code>是<strong>必需</strong>的和
            <strong>唯一</strong>的。
            输入名称还支持点和括号语法，它允许您轻松创建表单。 示例表如下:
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
          如果您使用数组/数组字段，则可以将输入名称指定为
          <code>name[index]</code>。{" "}
          <Link
            href="https://github.com/react-hook-form/react-hook-form/blob/master/examples/FieldArray.tsx"
            title="example for Field Array"
          >
            查看Field Array数组示例
          </Link>
          .
        </p>
      ),
      example: "提交结果",
      selectHelp: "通过选择该选项，下面的API表将得到更新。",
      options: {
        title: "注册选项",
        registerWithValidation: "注册验证",
        registerWithValidationMessage: "注册验证和错误消息",
        note: goToSection => (
          <>
            <Title>手动注册输入</Title>
            <p>
              您还可以手动注册输入，这在使用自定义组件和无法访问<code>Ref</code>
              时情况下非常有用。 实际上，当您使用React Native或自定义组件（如
              <a
                href="https://github.com/JedWatson/react-select"
                target="_blank"
                rel="noopener noreferrer"
              >
                react-select
              </a>
              ）时， 你需要手动注册。
            </p>

            <p>
              通过使用自定义注册时，您将需要使用
              <code onClick={() => goToSection("setValue")}>setValue</code>
              来更新输入值，因为输入注册没有<code>ref</code>。
            </p>

            <p>
              <CodeBlock>{`register({ name: 'firstName' }, { required: true, min: 8 })`}</CodeBlock>
            </p>

            <p>
              <Note>注意:</Note>{" "}
              如果您希望自定义注册输入在其值更新过程中触发重新render，那么你应该给您注册的输入的类型加以
              <code>type</code>。
            </p>
          </>
        ),
      },
      validation: {
        required: (
          <>
            如果为true，则表示输入必须具有值，然后才能提交表单。
            您可以分配一个字符串以在错误对象中，来让<code>errors</code>
            返回错误消息。
          </>
        ),
        maxLength: "文本框能接受的最大字符数。",
        minLength: "文本框能输入的最小字符数，并且仍然被认为是有效的。",
        max: "为此输入接受的最大值。",
        min: "要接受此输入的最小值。",
        pattern: "验证文本框内容的正则表达式。",
        validate: `您可以callback调函数作为参数来验证，或者您可以callback调函数的对象来验证所有这些函数。（参考例子)`,
      },
    },
  },
  formState: {
    en: {
      title: "formState",
      description: "This object contain information about the form state.",
      dirty: "Set to true after a user interacted with any of the inputs.",
      isSubmitted: "Set true after a user submitted the form.",
      touched: "An array of all inputs which have been interacted.",
      isSubmitting: (
        <>
          During form submitting will set to <code>true</code> and after
          submitting set to <code>false</code>
        </>
      ),
      submitCount: "Number of forms submit.",
      isValid: "Set true if doesn't have any error.",
    },
    kr: {
      title: "formState",
      description: "폼 상태(form state)에 대한 정보를 포함합니다",
      dirty: "사용자가 어떠한 입력이라도 했다면, true로 설정하십시오.",
      isSubmitted: "사용자가 폼을 제출 한 후 true로 설정하십시오.",
      touched: "상호 작용된 모든 입력의 배열입니다.",
      isSubmitting: (
        <>
          폼 제출하는 동안은 <code>true</code> 로, 그 후에는 <code>false</code>
          로 설정합니다.
        </>
      ),
      submitCount: "제출 한 폼의 수",
      isValid: "에러가 없다면, true로 설정하세요.",
    },
    jp: {
      title: "formState",
      description:
        "このオブジェクトには、フォームの状態に関する情報が含まれています。",
      dirty: "ユーザが入力操作した後 true に設定します。",
      isSubmitted: "ユーザーがフォームを送信した後 true に設定します。",
      touched: (
        <>
          操作された全ての input の <code>name</code> の配列。
        </>
      ),
      isSubmitting: (
        <>
          フォームの送信中は <code>true</code> に設定し、 フォームの送信後は{" "}
          <code>false</code> に設定します。
        </>
      ),
      submitCount: "フォームの送信回数。",
      isValid: "エラーがない場合は true に設定します。",
    },
    zh: {
      title: "formState",
      description: "此对象包含有关表单状态的信息。",
      dirty: (
        <>
          在用户与任何输入互动后设置为<code>true</code>。
        </>
      ),
      isSubmitted: (
        <>
          在用户提交表单后设置<code>true</code>。
        </>
      ),
      touched: "已被接触过的所有输入的数组。",
      isSubmitting: (
        <>
          在表单提交将设置为<code>true</code>，提交后设置为<code>false</code>
        </>
      ),
      submitCount: "提交表格数量。",
      isValid: (
        <>
          如果没有任何错误，设置为<code>true</code>。
        </>
      ),
    },
  },
  errors: {
    en: {
      title: "errors",
      description: currentLanguage => (
        <>
          <p>
            Object contains form errors or error messages which belong to each
            input.
          </p>

          <p>
            <Note>Note:</Note> You can also learn recipes on{" "}
            <NavLink
              to={translateLink("advanced-usage#ErrorMessage", currentLanguage)}
            >
              Error Message
            </NavLink>{" "}
            from advanced page.
          </p>
        </>
      ),
      message: `Message is an empty string by default. However, if you register validation with error message, then it will be returned.`,
      ref: `Reference for your input element.`,
    },
    kr: {
      title: "errors",
      description: currentLanguage => (
        <>
          <p>각 입력에 대한 폼 에러 혹은 에러 메시지를 가진 객체입니다.</p>

          <p>
            <Note>참고:</Note> '고급 사용법' 에서 더 자세한{" "}
            <NavLink
              to={translateLink("advanced-usage#ErrorMessage", currentLanguage)}
            >
              에러 메시지
            </NavLink>{" "}
            사용 방법을 확인 할 수 있습니다.{" "}
          </p>
        </>
      ),
      message: `메시지는 기본적으로 빈 문자열입니다. 하지만 에러 메시지와 함께 유효성 검사를 함께 등록하면, 이 값이 반환됩니다.`,
      ref: `입력 엘레먼트에 대한 ref`,
    },
    jp: {
      title: "errors",
      description: currentLanguage => (
        <>
          <p>
            オブジェクトには、各 input
            のフォームのエラーまたはエラーメッセージが含まれています。
          </p>

          <p>
            <Note>注意：</Note> 高度な使用法ページから{" "}
            <Link
              to={translateLink("advanced-usage#ErrorMessage", currentLanguage)}
            >
              エラーメッセージ
            </Link>{" "}
            のレシピを学ぶこともできます。
          </p>
        </>
      ),
      message: `メッセージはデフォルトでは空文字です。ただし、バリデーションとエラーメッセージで登録するとエラーメッセージが返されます。`,
      ref: `input 要素の参照。`,
    },
    zh: {
      title: "errors",
      description: currentLanguage => (
        <>
          <p>对象包含属于每个输入的表单错误或错误消息。</p>

          <p>
            <Note>注意:</Note> 您还可以从
            <Link
              to={translateLink("advanced-usage#ErrorMessage", currentLanguage)}
            >
              高级页面
            </Link>
            了解错误消息的现实方法。
          </p>
        </>
      ),
      message: `默认情况下消息是空字符串。 但是，如果您使用错误消息注册验证，那么它将被返回。`,
      ref: `输入元素的参考。`,
    },
  },
  watch: {
    en: {
      title: "watch",
      description: (
        <>
          <p>
            This will watch specified input/inputs and return its value, and
            it's useful for determining what to render.
          </p>

          <ul>
            <li>
              <p>
                When <code>defaultValue</code> is not defined, the first render
                of <code>watch</code> will return <code>undefined</code> because
                it is called before <code>register</code>, but you can set the{" "}
                <code>defaultValue</code> as the second argument to return
                value.
              </p>
            </li>
            <li>
              <p>
                However, if <code>defaultValues</code> was initialised in{" "}
                <code>useForm</code> as argument, then the first render will
                return what's provided in <code>defaultValues</code>.
              </p>
            </li>
          </ul>
        </>
      ),
      tableTitle: {
        single: (
          <>
            Watch input value by name (similar to lodash{" "}
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
        multiple: "Watch multiple inputs",
        all: "Watch all inputs",
      },
    },
    kr: {
      title: "watch",
      description: (
        <>
          <p>
            지정된 입력을 확인(watch)하고, 그 값들을 반환하며, 렌더링 할 대상을
            결정할 때 유용합니다.
          </p>
          <ul>
            <li>
              <p>
                <code>defaultValue</code>가 정의 안되어 있는 경우,{" "}
                <code>register</code>가 아직 호출이 안되었기 때문에{" "}
                <code>watch</code>의 첫번째 렌더링에서는 <code>undefined</code>{" "}
                을 반환합니다. 하지만, 두번째 인수로 <code>defaultValue</code>를
                설정하여 값을 반환 할 수 있습니다.
              </p>
            </li>
            <li>
              <p>
                <code>useForm</code> 에서 <code>defaultValues</code>로 정의가
                되어 있다면, 첫번째 렌더링에서 <code>defaultValues</code>에
                적용된 내용을 반환합니다.
              </p>
            </li>
          </ul>
        </>
      ),
      tableTitle: {
        single: (
          <>
            name으로 입력값 확인 (lodash{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://lodash.com/docs/4.17.15#get"
            >
              get
            </a>{" "}
            기능과 유사)
          </>
        ),
        multiple: "여러 입력을 확인",
        all: "모든 입력을 확인",
      },
    },
    jp: {
      title: "watch",
      description: (
        <>
          <p>これは指定された input/inputs を監視し、その値を返します。</p>

          <ul>
            <li>
              <p>
                <code>defaultValue</code> が定義されていない場合、
                <code>watch</code> の初回のレンダリングは <code>register</code>{" "}
                の前に呼び出されるため <code>undefined</code> を返しますが、
                第2引数として <code>defaultValue</code>{" "}
                を設定して値を返すことができます。
              </p>
            </li>
            <li>
              <p>
                ただし、引数として <code>useForm</code> で{" "}
                <code>defaultValues</code> が初期化された場合、
                初回のレンダリングは <code>defaultValues</code>{" "}
                で指定された値を返します。
              </p>
            </li>
          </ul>
        </>
      ),
      tableTitle: {
        single: (
          <>
            input の値を name から監視します (lodash の{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://lodash.com/docs/4.17.15#get"
            >
              get
            </a>{" "}
            関数に似ています)
          </>
        ),
        multiple: "複数の input を監視します",
        all: "全ての input を監視します",
      },
    },
    zh: {
      title: "watch",
      description: (
        <>
          <p>这将监视指定的输入并返回其值。</p>

          <ul>
            <li>
              <p>
                当未定义<code>defaultValue</code>时，watch的第一个render将返回
                <code>undefined</code>，因为它在<code>register</code>
                之前被调用，但是您可以将<code>defaultValue</code>
                设置为返回值（第二个参数）。
              </p>
            </li>
            <li>
              <p>
                但是，如果<code>defaultValues</code>在使用表单
                <code>useForm</code>作为参数初始化，则第一个render将返回
                <code>defaultValues</code>中提供的内容。
              </p>
            </li>
          </ul>
        </>
      ),
      tableTitle: {
        single: (
          <>
            按名称观看输入值（类似于lodash的
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://lodash.com/docs/4.17.15#get"
            >
              get
            </a>
            功能)
          </>
        ),
        multiple: "观看多个输入",
        all: "观看所有输入",
      },
    },
  },
  handleSubmit: {
    en: {
      title: "handleSubmit",
      description: (
        <>
          <p>
            This function will pass the form data when form validation is
            successful.
          </p>
          <p>
            <Note>Note:</Note> You can pass an <code>async</code> function for
            asynchronous validation. eg:{" "}
          </p>
          <p>
            <CodeBlock>
              handleSubmit(async (data) => await fetchAPI(data))
            </CodeBlock>
          </p>
        </>
      ),
    },
    kr: {
      title: "handleSubmit",
      description: (
        <>
          <p>이 함수는 유효성 검사가 완료 되었을 때 폼 데이터를 전달합니다.</p>
          <p>
            <Note>참고:</Note> 비동기 유효성 검사를 위한 <code>async</code>{" "}
            함수를 전달할 수 있습니다 . 예 :{" "}
          </p>
          <p>
            <CodeBlock>
              handleSubmit(async (data) => await fetchAPI(data))
            </CodeBlock>
          </p>
        </>
      ),
    },
    jp: {
      title: "handleSubmit",
      description: (
        <>
          <p>
            この関数は、フォームバリデーションに成功するとフォームデータを渡します。
          </p>
          <p>
            <Note>注意：</Note> 非同期バリデーションのための <code>async</code>{" "}
            関数を渡すことができます。例：{" "}
          </p>
          <p>
            <CodeBlock>
              handleSubmit(async (data) => await fetchAPI(data))
            </CodeBlock>
          </p>
        </>
      ),
    },
    zh: {
      title: "handleSubmit",
      description: (
        <>
          <p>当表单验证成功时，此函数将传递表单数据。</p>
          <p>
            <Note>注意:</Note> 您可以传递<code>async</code>验证。例如：
          </p>
          <p>
            <CodeBlock>
              handleSubmit(async (data) => await fetchAPI(data))
            </CodeBlock>
          </p>
        </>
      ),
    },
  },
  reset: {
    en: goToSection => ({
      title: "reset",
      description: (
        <>
          <p>
            This function will reset the fields' values and errors within the
            form. You can pass <code>values</code> as an optional argument to
            reset your form into assigned default values.
          </p>
          <p>
            <Note>Note:</Note> For controlled components like{" "}
            <code>React-Select</code> which don't expose <code>ref</code>, you
            will have to reset the input value manually through{" "}
            <code onClick={() => goToSection("setValue")}>setValue</code>.
          </p>
        </>
      ),
    }),
    kr: goToSection => ({
      title: "reset",
      description: (
        <>
          <p>
            이 함수는 폼 내의 필드 값과 에러를 재설정(reset) 합니다.{" "}
            <code>values</code>를 옵셔널 인수로 전달하면 폼의 기본 값으로 재설정
            할 수 있습니다.
          </p>
          <p>
            <Note>참고:</Note> <code>React-Select</code> 와 같이{" "}
            <code>ref</code> 를 노출시키지 않는 컴포넌트는,{" "}
            <code onClick={() => goToSection("setValue")}>setValue</code>를 통해
            수동으로 입력값을 재설정해주어야 합니다.
          </p>
        </>
      ),
    }),
    jp: goToSection => ({
      title: "reset",
      description: (
        <>
          <p>
            この関数は、フォーム内のフィールドの値とエラーをリセット (
            <code>reset</code>) します。 省略可能な引数として{" "}
            <code>values</code> を渡すと、
            割り当てられたデフォルト値でフォームをリセットできます。
          </p>
          <p>
            <Note>注意：</Note> <code>ref</code> を公開しない{" "}
            <code>React-Select</code> のような制御コンポーネントの場合は、
            <code onClick={() => goToSection("setValue")}>setValue</code>{" "}
            を使用して入力値を手動でリセットする必要があります。
          </p>
        </>
      ),
    }),
    zh: goToSection => ({
      title: "reset",
      description: (
        <>
          <p>
            此函数将重置表单中的字段值和错误。 您可以将值<code>values</code>
            作为可选参数传递，以将表单重置为已分配的默认值。
          </p>
          <p>
            <Note>注意:</Note> 对于像<code>React-Select</code>这样不公开
            <code>ref</code>
            的受控组件，您必须通过
            <code onClick={() => goToSection("setValue")}>setValue</code>
            手动重置输入值。
          </p>
        </>
      ),
    }),
  },
  setError: {
    en: {
      title: "setError",
      description: (
        <p>The function allows you to manually set one or multiple errors.</p>
      ),
    },
    kr: {
      title: "setError",
      description: (
        <p>
          이 함수를 사용하면 한개 혹은 그 이상의 입력값 에러를 수동으로 설정할
          수 있습니다.
        </p>
      ),
    },
    jp: {
      title: "setError",
      description: <p>単一または複数の input のエラーを手動で設定できます。</p>,
    },
    zh: {
      title: "setError",
      description: <p>允许您手动设置输入单个和多项错误。</p>,
    },
  },
  clearError: {
    en: {
      title: "clearError",
      description: (
        <ul>
          <li>
            <p>
              <code>undefined</code>: reset all errors
            </p>
          </li>
          <li>
            <p>
              <code>string</code>: reset single error
            </p>
          </li>
          <li>
            <p>
              <code>string[]</code>: reset multiple errors
            </p>
          </li>
        </ul>
      ),
    },
    kr: {
      title: "clearError",
      description: (
        <ul>
          <li>
            <p>
              <code>undefined</code>: 모든 에러를 리셋
            </p>
          </li>
          <li>
            <p>
              <code>string</code>: 하나의 에러 리셋
            </p>
          </li>
          <li>
            <p>
              <code>string[]</code>: 여러개의 에러 리셋
            </p>
          </li>
        </ul>
      ),
    },
    jp: {
      title: "clearError",
      description: (
        <ul>
          <li>
            <p>
              <code>undefined</code>: 全てのエラーをリセット
            </p>
          </li>
          <li>
            <p>
              <code>string</code>: 単一のエラーをリセット
            </p>
          </li>
          <li>
            <p>
              <code>string[]</code>: 複数のエラーをリセット
            </p>
          </li>
        </ul>
      ),
    },
    zh: {
      title: "clearError",
      description: (
        <ul>
          <li>
            <p>
              <code>undefined</code>: 重置所有错误
            </p>
          </li>
          <li>
            <p>
              <code>string</code>: 重置单个错误
            </p>
          </li>
          <li>
            <p>
              <code>string[]</code>: 重置多个错误
            </p>
          </li>
        </ul>
      ),
    },
  },
  setValue: {
    en: {
      title: "setValue",
      description: (
        <>
          <p>
            This function allows you to dynamically set input/select value. At
            the same time, it is try to avoid re-render when it's not necessary
            and only the following conditions will trigger re-render.
          </p>
          <ul>
            <li>
              <p>When an error is triggered by a value update</p>
            </li>
            <li>
              <p>When an error is corrected by a value update</p>
            </li>
            <li>
              <p>
                When setValue is invoked for the first time and formState{" "}
                <code>dirty</code> is set to true
              </p>
            </li>
            <li>
              <p>
                When setValue is invoked and formState <code>touched</code> is
                updated
              </p>
            </li>
          </ul>
          <p>
            <Note>Note:</Note> By invoking this method, <code>formState</code>{" "}
            will push the input's <code>name</code> into <code>touched</code>.
          </p>
          <p>
            You can also set <code>shouldValidate</code> to <code>true</code>{" "}
            and it will trigger field validation. eg:{" "}
            <code>setValue('name', 'value', true)</code>
          </p>
        </>
      ),
    },
    kr: {
      title: "setValue",
      description: (
        <>
          <p>
            이 함수를 통해 동적으로 입력/선택 값을 설정할 수 있습니다. At the
            same time, it is try to avoid unnecessary re-render and only the
            following conditions will trigger re-render.
          </p>
          <ul>
            <li>
              <p>When value updates which triggers an error</p>
            </li>
            <li>
              <p>When value updates which corrects an error</p>
            </li>
            <li>
              <p>
                First time invoked and trigger form to be <code>dirty</code>
              </p>
            </li>
            <li>
              <p>
                Update formState <code>touched</code>
              </p>
            </li>
          </ul>
          <p>
            <Note>참고:</Note> 이 함수를 호출함으로써, <code>formState</code>는
            이 입력의 <code>name</code>을 <code>touched</code>로 설정하게
            됩니다.
          </p>
          <p>
            <code>shouldValidate</code>를 <code>true</code>로 설정하여, 필드
            유효성 검사를 트리거할 수 도 있습니다. 예 :{" "}
            <code>setValue('name', 'value', true)</code>
          </p>
        </>
      ),
    },
    jp: {
      title: "setValue",
      description: (
        <>
          <p>
            この関数を使用すると、input/select の値を動的に設定できます。
            setValue は不要な再レンダリングを避けようとしますが、
            以下の条件でのみ再レンダリングをトリガーします。
          </p>
          <ul>
            <li>
              <p>値の更新によってエラーがトリガーされるとき</p>
            </li>
            <li>
              <p>値の更新によってエラーが修正されるとき</p>
            </li>
            <li>
              <p>
                setValue が初めて実行され、 formState の <code>dirty</code> が
                true に設定されたとき
              </p>
            </li>
            <li>
              <p>
                setValue が実行され、 formState の <code>touched</code>{" "}
                が更新されたとき
              </p>
            </li>
          </ul>
          <p>
            <Note>注意：</Note> このメソッドを呼び出すことで、
            <code>formState</code> は input の <code>name</code> を{" "}
            <code>touched</code> にプッシュします。
          </p>
          <p>
            <code>shouldValidate</code> を <code>true</code> に設定すると、
            フィールドのバリデーションがトリガーされます。 例：{" "}
            <code>setValue('name', 'value', true)</code>
          </p>
        </>
      ),
    },
    zh: {
      title: "setValue",
      description: (
        <>
          <p>
            此功能允许您动态设置输入/选择值。
            在同时，尝试避免不必要的重新渲染，与此同时只有以下情况将触发重新渲染:
          </p>
          <ul>
            <li>
              <p>值更新时触发错误</p>
            </li>
            <li>
              <p>值更新时纠正错误</p>
            </li>
            <li>
              <p>
                首次调用并触发表单<code>dirty</code>
              </p>
            </li>
            <li>
              <p>
                更新表格状态<code>touched</code>
              </p>
            </li>
          </ul>
          <p>
            <Note>注意:</Note> 通过调用此方法，<code>formState</code>
            将将输入的名称<code>name</code>推入触摸<code>touched</code>。
          </p>
          <p>
            This function will return the entire form data. 您还可以将
            <code>shouldValidate</code>设置为<code>true</code>
            ，并将触发字段验证。例如：
            <br />
            <code>setValue('name', 'value', true)</code>
          </p>
        </>
      ),
    },
  },
  getValues: {
    en: {
      title: "getValues",
      description: (
        <>
          <p>
            This function will return the entire form data, and it's useful in a
            function when you want to retrieve form values.
          </p>

          <ul>
            <li>
              <p>
                By default <code>getValues()</code> will return form data in a
                flat structure. eg:{" "}
                <code>{`{ test: 'data', test1: 'data1'}`}</code>
              </p>
            </li>
            <li>
              <p>
                Working on the defined form fields,{" "}
                <code>getValues({`{ nest: true }`})</code> will return data in a
                nested structure according to input <code>name</code>. eg:{" "}
                <code>{`{ test: [1, 2], test1: { data: '23' } }`}</code>
              </p>
            </li>
          </ul>
        </>
      ),
    },
    kr: {
      title: "getValues",
      description: (
        <>
          <p>
            이 함수는 전체 폼 데이터를 반환하는 함수이며, 폼 내 값을 검색하려는
            경우에 유용합니다.
          </p>
          <ul>
            <li>
              <p>
                기본적으로, <code>getValues()</code>는 폼 데이터를 flat
                structure로 반환합니다. 예 :{" "}
                <code>{`{ test: 'data', test1: 'data1'}`}</code>
              </p>
            </li>
            <li>
              <p>
                정의된 폼 필드에서 <code>getValues({`{ nest: true }`})</code> 는{" "}
                <code>name</code> 입력 값에 따라 중첩된 구조의 데이터로
                반환됩니다. 예 :{" "}
                <code>{`{ test: [1, 2], test1: { data: '23' } }`}</code>
              </p>
            </li>
          </ul>
        </>
      ),
    },
    jp: {
      title: "getValues",
      description: (
        <>
          <p>この関数は、フォーム全体のデータを返します。</p>

          <ul>
            <li>
              <p>
                デフォルトでは、<code>getValues()</code>{" "}
                はフォームデータをフラットな構造で返します。 例：{" "}
                <code>{`{ test: 'data', test1: 'data1'}`}</code>
              </p>
            </li>
            <li>
              <p>
                定義されたフォームフィールドで、
                <code>getValues({`{ nest: true }`})</code> は input の{" "}
                <code>name</code>{" "}
                属性に基づいてネストされた構造でデータを返します。 例：{" "}
                <code>{`{ test: [1, 2], test1: { data: '23' } }`}</code>
              </p>
            </li>
          </ul>
        </>
      ),
    },
    zh: {
      title: "getValues",
      description: (
        <>
          <p>此函数将返回整个表单数据。</p>

          <ul>
            <li>
              <p>
                默认情况下，<code>getValues()</code>
                将在平坦结构中返回表单数据。例如:{" "}
                <code>{`{ test: 'data', test1: 'data1'}`}</code>
              </p>
            </li>
            <li>
              <p>
                使用定义的表单，<code>getValues({`{ nest: true }`})</code>
                将根据输入名称返回嵌套结构中的数据。 例如:{" "}
                <code>{`{ test: [1, 2], test1: { data: '23' } }`}</code>
              </p>
            </li>
          </ul>
        </>
      ),
    },
  },
  triggerValidation: {
    en: {
      title: "triggerValidation",
      description: (
        <>
          <p>To manually trigger an input/select validation in the form.</p>
          <p>
            <Note>Note:</Note> When validation fails, the <code>errors</code>{" "}
            object will be updated.
          </p>
        </>
      ),
    },
    kr: {
      title: "triggerValidation",
      description: (
        <>
          <p>폼의 입력/선택 유효성 검사를 수동으로 트리거합니다.</p>
          <p>
            <Note>참고:</Note> 유효성 검사에 실패하면 <code>errors</code> 객체가
            업데이트됩니다.
          </p>
        </>
      ),
    },
    jp: {
      title: "triggerValidation",
      description: (
        <>
          <p>
            フォームで input/select のバリデーションを手動でトリガーします。
          </p>
          <p>
            <Note>注意：</Note> バリデーションが失敗すると、<code>errors</code>{" "}
            オブジェクトが更新されます。
          </p>
        </>
      ),
    },
    zh: {
      title: "triggerValidation",
      description: (
        <>
          <p>手动触发表单中的输入/选择验证。</p>
          <p>
            <Note>注意:</Note> 当验证失败时，<code>errors</code>对象将被更新。
          </p>
        </>
      ),
    },
  },
  reactNative: {
    en: {
      title: "React Native",
      description: (
        <p>
          You will get the same performance enhancement from an Uncontrolled
          Component. However, there are certain APIs which are not compatible
          with React Native (duo to the API difference from web and native). You
          will have to use a <b>manual register</b> as shown in the following
          example.
        </p>
      ),
    },
    kr: {
      title: "React Native",
      description: (
        <p>
          비제어 컴포넌트에서도 동일한 성능 향상을 얻을 수 있습니다. 하지만,
          웹과 네이티브의 API 차이로 인해 React Native와 호환되지 않는 특정
          API도 있습니다. 이 경우, 다음 예제와 같이{" "}
          <b>수동 등록(manual register)</b>을 해주어야 합니다.
        </p>
      ),
    },
    jp: {
      title: "React Native",
      description: (
        <p>
          非制御コンポーネントでも、同じようにパフォーマンスが向上します。
          ただし、React Native と互換性のない API がいくつかあります (Web
          とネイティブとの API の違い)。 下記の例に示すように、
          <b>
            手動登録 (manual <code>register</code>)
          </b>{" "}
          を使用する必要があります。
        </p>
      ),
    },
    zh: {
      title: "React Native",
      description: (
        <p>
          您将从受控制的组件中获得相同的性能增强。 但是，有一些与React
          Native不兼容的Api（与web和native的API差异）。
          您将不得不使用手动注册，如下面的示例所示。
        </p>
      ),
    },
  },
  validationSchema: {
    en: {
      title: "ValidationSchema",
      description: (
        <p>
          If you would like to centralize your validation rules with external
          validation schema, you can apply <code>validationSchema</code> at{" "}
          <code>useForm</code> as an optional argument. React Hook Form
          currently supports{" "}
          <Link
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </Link>{" "}
          for object schema validation.
        </p>
      ),
    },
    kr: {
      title: "ValidationSchema",
      description: (
        <p>
          외부 스키마와 유효성 검사 규칙을 함께 사용하고 싶을 경우,{" "}
          <code>useForm</code>의 <code>validationSchema</code>를 옵셔널 인자로
          적용 할 수 있습니다. React Hook Form의 객체 스키마 유효성 검사에서는{" "}
          <Link
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </Link>{" "}
          을 지원합니다.
        </p>
      ),
    },
    jp: {
      title: "ValidationSchema",
      description: (
        <p>
          外部バリデーションスキーマでバリデーションルールを一元管理したい場合は、
          省略可能な引数として <code>useForm</code> に{" "}
          <code>validationSchema</code> を適用できます。 React Hook Form
          は現在、オブジェクトスキーマバリデーションで{" "}
          <Link
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </Link>{" "}
          をサポートしています。
        </p>
      ),
    },
    zh: {
      title: "ValidationSchema",
      description: (
        <p>
          如果您希望使用外部验证模式，可以在
          <code>useForm</code>应用验证模式<code>validationSchema</code>
          作为可选参数。 React Hook Form当前支持
          <Link
            href="https://github.com/jquense/yup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yup
          </Link>
          进行对象模式验证。
        </p>
      ),
    },
  },
  NativeValidation: {
    en: {
      title: "NativeValidation",
      description: (
        <p>
          The following example demonstrates how you can leverage the browser's
          validation. You only need to set <code>nativeValidation</code> to{" "}
          <code>true</code> and the rest of the syntax is the same as standard
          validation.
        </p>
      ),
    },
    kr: {
      title: "NativeValidation",
      description: (
        <p>
          다음 예제는 브라우저의 유효성 검사를 활용하는 방법입니다.{" "}
          <code>nativeValidation</code> 을 <code>true</code>로 설정하고, 나머지
          문법은 표준과 같습니다.
        </p>
      ),
    },
    jp: {
      title: "NativeValidation",
      description: (
        <p>
          下記の例は、ブラウザバリデーションを活用する方法を示しています。
          <code>nativeValidation</code> を <code>true</code> に設定するだけで、
          残りの構文は標準のバリデーションと同じになります。
        </p>
      ),
    },
    zh: {
      title: "NativeValidation",
      description: (
        <p>
          下面的示例演示了如何利用浏览器的验证。 您只需要将本机验证
          <code>nativeValidation</code>设置为<code>true</code>
          ，其余语法与标准验证相同。
        </p>
      ),
    },
  },
  typeScript: {
    en: {
      title: "TypeScript",
      description: (
        <p>
          React Hook Form is built with <code>Typescript</code>, so you can
          define a <code>FormData</code> type to support form values.
        </p>
      ),
    },
    kr: {
      title: "TypeScript",
      description: (
        <p>
          React Hook Form은 타입스크립트로 만들어져, 폼 내 값 타입을{" "}
          <code>FormData</code> 로 설정할 수 있습니다.
        </p>
      ),
    },
    jp: {
      title: "TypeScript",
      description: (
        <p>
          React Hook Form は <code>Typescript</code>{" "}
          を使用して構築されているため、フォームの値をサポートするための{" "}
          <code>FormData</code> 型を定義することができます。
        </p>
      ),
    },
    zh: {
      title: "TypeScript",
      description: (
        <p>
          React Hook Form是使用<code>Typescript</code>
          构建的，因此您可以定义一个表单数据<code>FormData</code>
          类型来支持表单值。
        </p>
      ),
    },
  },
  formContext: {
    en: {
      title: "FormContext",
      introduction: (
        <p>
          Form context is intended to solve the problem when there are deep
          nested inputs in your components tree, and passing methods deep down
          as <code>props</code> becomes painful.
        </p>
      ),
      description: (
        <>
          <p>
            Once your form is wrapped with <code>FormContext</code>, the{" "}
            <code>useFormContext</code>: <TypeText>function</TypeText> can be
            invoked in its child component.
          </p>
          <p>
            <Note>Note:</Note> invoking <code>useFormContext</code> will give
            you all of the <code>useForm</code> hook functions.
          </p>
        </>
      ),
    },
    kr: {
      title: "FormContext",
      introduction: (
        <p>
          폼 컨텍스트(Form Context)는 입력들이 컴포넌트 트리에서 깊이 중첩되었을
          때 생기는 문제를 해결하고, <code>props</code>를 더 깊이 전달하기 위해
          사용합니다.
        </p>
      ),
      description: (
        <>
          <p>
            <code>FormContext</code>으로 폼을 감싸면,{" "}
            <code>useFormContext</code>:<TypeText>function</TypeText> 이 하위
            컴포넌트에서 호출 될 수 있습니다.
          </p>
          <p>
            <Note>참고:</Note> <code>useFormContext</code> 를 통해 모든{" "}
            <code>useForm</code> 의 hook function이 제공됩니다.
          </p>
        </>
      ),
    },
    jp: {
      title: "FormContext",
      introduction: (
        <p>
          フォームコンテキストは、コンポーネントツリーに深くネストされた input
          があり、 メソッドを <code>props</code>{" "}
          として深く渡すことが苦痛になる場合の問題を解決することを目的としています。
        </p>
      ),
      description: (
        <>
          <p>
            フォームが <code>FormContext</code> でラップされると、
            ラップされた子コンポーネントで <code>useFormContext</code>{" "}
            を使用して <TypeText>function</TypeText> を呼び出すことができます。
          </p>
          <p>
            <Note>注意：</Note> <code>useFormContext</code> を呼び出すと全ての{" "}
            <code>useForm</code> フック関数が得られます。
          </p>
        </>
      ),
    },
    zh: {
      title: "FormContext",
      introduction: (
        <p>
          当组件存在深处时传递<code>props</code>变得痛苦，这个组件解决这个问题。
        </p>
      ),
      description: (
        <>
          <p>
            一旦你的表单被<code>FormContext</code>包装，
            <code>useFormContext</code>:函数可以在其子组件中调用。
          </p>
          <p>
            <Note>注意:</Note> 调用使用<code>useFormContext</code>将为您提供所有
            <code>useForm</code>函数。
          </p>
        </>
      ),
    },
  },
}
