import * as React from "react"
import colors from "../../styles/colors"
import typographyStyles from "../../styles/typography.module.css"
import tableStyles from "../../styles/table.module.css"
import buttonStyles from "../../styles/button.module.css"
import CodeArea from "../../components/CodeArea"
import focusController from "../../components/codeExamples/focusController"
import toggleFields from "../../components/codeExamples/toggleFields"

export default {
  title: "常见问题",
  header: {
    title: "常见问题",
    description: "经常遇到的问题",
  },
  questions: [
    {
      title: "React Hook Form的性能",
      description: (
        <p>
          性能是创建这个库的主要目标之一。 React Hook
          Form依赖于非受控组件，这就是为什么
          <code>register</code>函数作用在
          <code>ref</code>上。
          这样将减少由于用户在输入框输入或表单其他值改变而引起的重渲染次数。
          因为开销更小，组件会比受控组件更快速地挂载到页面上。
          作为参考，我已经完成了一个
          <a
            href="https://github.com/bluebill1049/react-hook-form-performance-compare"
            target="_blank"
            rel="noopener noreferrer"
          >
            快速比较测试
          </a>
          。
        </p>
      ),
    },
    {
      title: "如何创建一个输入组件的辅助错误和消息？",
      description: (
        <p>
          React Hook Form基于
          <a
            href="https://reactjs.org/docs/uncontrolled-components.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            非受控组件
          </a>
          ，它使您能够轻松的构建高可访问性的自定义表单。
        </p>
      ),
    },
    {
      title: "它是否可以与Class类组件一起使用？",
      description: (
        <>
          <p>
            不,
            不可以直接使用。但是你可以构建一个包裹组件然后在你的类组件中使用。
          </p>
        </>
      ),
    },
    {
      title: "如何重置表单？",
      description: (
        <>
          <p>有两种方法清空表单。</p>
          <ul>
            <li>
              <b>HTMLFormElement.reset()</b>
              <p>
                此方法与单击表单的重置按钮相同，并且只清除
                <code>input/select/checkbox</code>的值。
              </p>
            </li>
            <li>
              <b>
                React Hook Form API: <code>reset()</code>
              </b>
              <p>
                React Hook
                Form的重置方法将重置所有表单项值，并清空表单内的所有错误。
              </p>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "如何初始化表单值？",
      description: (
        <p>
          由于React Hook Form依赖于非受控组件， 所以可以为单独的表单项指定
          <code>defaultValue</code>或<code>defaultChecked</code>。
          但是，更常见的方法是在<code>useForm</code>传入
          <code>defaultValue</code>来初始化表单。
        </p>
      ),
    },
    {
      title: "如何共用ref?",
      description: (
        <p>
          React Hook Form需要<code>ref</code>来收集输入值，但是，您可能需要将
          <code>ref</code>用于其他用途（例如，如果您想要使用它滚动到视图中）。
        </p>
      ),
    },
    {
      title: "如果无法访问ref怎么办？",
      description: (
        <>
          <p>
            您实际上可以在没有<code>ref</code>的情况下
            <code>register</code>输入组件。 事实上，您可以手动调用
            <code>setValue</code>，<code>setError</code>和<code>trigger</code>。
          </p>

          <p>
            <b className={typographyStyles.note}>注意：</b> 由于<code>ref</code>
            尚未注册，因此React Hook Form将无法监听输入组件的事件。
            这意味着您需要更新值和错误。
          </p>
        </>
      ),
    },
    {
      title: "浏览器支持?",
      description: (
        <>
          <p>React Hook Form支持所有主流浏览器。</p>

          <p>您可以引入 react-hook-form 的 IE 11 版本以以支持 IE11 。</p>
        </>
      ),
    },
    {
      title: "为什么第一次按键不起作用？",
      description: (
        <>
          <p>
            仔细检查是否使用了<code>value</code>而不是
            <code>defaultValue</code>。
          </p>

          <p>
            React Hook Form是基于非受控输入组件构建的，这意味着您不需要通过
            <code>statue</code>和<code>onChange</code>更改输入值。
            因此，您根本不需要<code>value</code>，事实上，您只需要设置
            <code>defaultValue</code>。
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
          <code>MutationObserver</code>并在
          <a
            href="https://jestjs.io/docs/en/configuration"
            target="_blank"
            rel="noopener noreferrer"
          >
            setup.js file
          </a>
          中引用它。
        </p>
      ),
    },
    {
      title: "React Hook Form, Formik 还是 Redux Form?",
      description: (
        <>
          <p>
            首先，这几个库都在尝试解决同样的问题，尽可能使表单开发变的简单。
            然而，三者之间还是有一些根本性区别，react-hook-form是
            建立在非受控的输入组件上，并尝试提供给表单最佳的性能和最少重渲染次数。除此之外，react-hook-form是由React
            Hook构建并作为hook调用, 这意味无须导入组件。 这里有一些的细节差异:
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
                    <b>组件</b>
                  </td>
                  <td>
                    <a
                      href="https://reactjs.org/docs/uncontrolled-components.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      非受控
                    </a>
                    和
                    <a
                      href="https://reactjs.org/docs/forms.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      受控
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://reactjs.org/docs/forms.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      受控
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://reactjs.org/docs/forms.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      受控
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>渲染</b>
                  </td>
                  <td>最少的重渲染</td>
                  <td>在输入组件中输入时，每次本地状态变化都会导致重渲染。</td>
                  <td>
                    在输入组件中输入时，每次状态管理工具（Redux）变化都会导致重渲染。
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
                    <b>包体积</b>
                  </td>
                  <td>
                    小
                    <br />
                    <code>
                      react-hook-form@3.26.2
                      <br />
                      <b className={typographyStyles.note}>5.3KB</b>
                    </code>
                  </td>
                  <td>
                    中
                    <br />
                    <code>
                      formik@2.0.1
                      <br />
                      <b className={typographyStyles.note}>14.4KB</b>
                    </code>
                  </td>
                  <td>
                    大
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
                    <b>校验</b>
                  </td>
                  <td>
                    自带{" "}
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
                    校验以及自定义构建。
                  </td>
                  <td>
                    使用
                    <a
                      href="https://github.com/jquense/yup"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Yup
                    </a>
                    自定义构建
                  </td>
                  <td>自定义构建或使用插件</td>
                </tr>
                <tr>
                  <td>
                    <b>学习曲线</b>
                  </td>
                  <td>低</td>
                  <td>中</td>
                  <td>中</td>
                </tr>
                <tr>
                  <td>
                    <b>状态</b>
                  </td>
                  <td>成长中的中型社区</td>
                  <td>大社区：社区中非常稳定的表单库</td>
                  <td>大社区：社区中非常稳定的表单库</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: "可以用于受控组件吗?",
      description: (
        <>
          <p>
            简短的回答：<b>可以</b>
          </p>
          <p>React-hook-form不建议您构建受控表单，但是您仍然可以轻松实现。</p>
          <p>
            可以使用<code>watch</code> API监听每个输入组件的变化并传递给
            <code>value</code>属性。
          </p>
          <p>
            或者，您可以使用我们的包装器组件
            <a
              href="https://www.react-hook-form.com/api#Controller"
              title="React Hook Form Controller"
            >
              Controller
            </a>
            ，它会为您处理那些自定义注册。
          </p>
        </>
      ),
    },
    {
      title: "测试 React Hook Form",
      description: (
        <div>
          <ul>
            <li>
              <p>
                为什么无法在
                <code>React Native (react-native-testing-library)</code>测试？
              </p>

              <p>
                React Hook Form 并不会在服务端渲染时注册输入组件，这意味着在
                <code>react native</code>中测试会导致<code>window</code>对象变为
                <code>undefined</code>。一个快速的解决方案是将
                <code>window</code>对象存储起来以使注册过程可以完成。
              </p>
            </li>
            <li>
              <p>
                为什么我会收到<code>act</code>警告？
              </p>

              <p>
                React Hook表单中的所有验证方法将被视为异步函数, 因此使用
                <code>async</code>包装
                <a
                  className={buttonStyles.codeAsLink}
                  href="https://reactjs.org/docs/test-utils.html#act"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  act
                </a>
                很重要。
              </p>
            </li>
            <li>
              <p>为什么输入组件更改没有触发事件？</p>

              <p>
                React Hook Form 使用<code>input</code>
                事件处理输入组件变化。如果使用了 react-testing-library
                您可以轻松切换到
                <code>fireEvent.input</code>。
              </p>
              <p>
                如果你使用了<b>enzyme</b>，就需要手动地设置输入组件对应的 DOM
                节点的值，然后触发<code>input</code>事件。
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
                <b className={typographyStyles.note}>watch:</b>
                通过事件侦听器订阅所有/特定的输入组件的变化，根据所订阅的表单项进行重渲染。查看{" "}
                <a
                  href="https://codesandbox.io/s/react-hook-form-watch-with-radio-buttons-and-select-examples-ovfus"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  codesandbox
                </a>{" "}
                的实际表现.
              </p>
            </li>
            <li>
              <p>
                <b className={typographyStyles.note}>getValues</b>:
                以引用的方式获取存储在自定义组件中的值，快速且开销很低。
                此方法不会触发重渲染。
              </p>
            </li>
            <li>
              <p>
                <b className={typographyStyles.note}>local state</b>: React
                的本地状态不仅代表输入组件的状态，还决定了如何渲染。这将在每次输入更改时触发重渲染。
              </p>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "为什么三元表达式中默认值没有正确地变化?",
      description: (
        <>
          <p>
            React Hook
            Form没有控制您整个表单和输入组件，这就是为什么React无法识别实际输入组件是否变化或替换的原因。作为解决方案，您可以通过为输入组件提供唯一的
            <code>key</code>属性解决此问题。您也可以从
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://kentcdodds.com/blog/understanding-reacts-key-prop"
            >
              肯特·C·多兹撰写的这篇文章
            </a>
            了解更多有关key的信息。
          </p>
          <CodeArea
            rawData={toggleFields}
            url="https://codesandbox.io/s/react-hook-form-faq-toggle-fields-4mp39"
          />
        </>
      ),
    },
    {
      title: "shouldFocusError 在 Controller 中不能用?",
      description: (
        <>
          <p>
            校验错误后，React Hook Form将自动聚焦在<code>ref</code>
            对应的元素上，例如原生的输入框（例如：
            <code>{`<input />`}</code>
            或某些暴露了<code>ref</code>的第三方组件（例如：来自于MUI的
            <code>
              {`<TextField inputRef = {register({required：'必填字段'})} />`}
            </code>
            ）
          </p>

          <p>
            但是，对于某些第三方受控组件，例如MUI中的
            <code>{`<Autocomplete>`}</code>或AntD中的<code>{`<XX>`}</code>
            很难预测他的ref，因此React Hook
            Form将正确检测验证错误，但无法自动聚焦到对应组件上。
          </p>

          <p>
            作为一种解决方法，在验证错误之后，您可以手动聚焦到第3方受控组件上（如果您可以获得实际的
            内部输入组件引用），例如：
          </p>

          <CodeArea rawData={focusController} />

          <p>
            如果您发现很难通过外部控制使自动对焦。可以禁用“错误时自动对焦”特征。也许这种行为会带来更好的用户体验。{" "}
            <code>{`useForm（{ shouldFocusError：false });`}</code>
          </p>
        </>
      ),
    },
    {
      title: "如何在遮罩或标签页里的表单中使用?",
      description: (
        <>
          <p>
            要知道React Hook Form
            通过在每个输入组件中存储输入的值来使用原生的表单行为 （
            <code>useEffect</code>中的自定义 <code>register</code> 除外）
            。一个常见的误解是在遮罩或标签页中表单使用时，依然保留挂载又卸载的表单/输入组件的值。那是错误的实现。相反，正确的做法应始终在每一个遮罩或标签页中构建一个新表单，并从本地或全局状态捕获您提交的数据。
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
  ],
}
