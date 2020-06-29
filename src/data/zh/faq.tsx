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
    description: "经常问的问题。",
  },
  questions: [
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
          但是，钩子本身也提供了一种更简单的方法来初始化所有输入值。 下面的例子:
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
            <code>setError</code>和触发验证<code>trigger</code>。
          </p>

          <p>
            <b className={typographyStyles.note}>注意:</b> 由于<code>ref</code>
            尚未注册，因此React Hook Form将无法加入侦听器(event listener)。
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
            Hook构建并用作hook, 这意味着没有组件供您导入。 这里有一些的细节差异:
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
                  <td>Build yourself or Plugins</td>
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
            </table>
          </div>
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
            使用<code>watch</code> API监视每个输入的更改并分配给价值道具。
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
      title: "Testing React Hook Form",
      description: (
        <div>
          <ul>
            <li>
              <p>
                为什么我会收到<code>act</code>警告？
              </p>

              <p>
                React Hook表单中的所有验证方法将被视为 异步函数, 因此包装
                <code>async</code> 在你{" "}
                <a
                  className={buttonStyles.codeAsLink}
                  href="https://reactjs.org/docs/test-utils.html#act"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  act
                </a>
                很重要 .
              </p>
            </li>
            <li>
              <p>为什么输入更改不是触发事件？</p>

              <p>
                React Hook Form 使用<code>input</code>
                事件作为输入来响应。您可以轻松切换到
                <code>fireEvent.input</code>用于react-testing-library。
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
                订阅通过事件侦听器更改输入，然后根据订阅的字段。根据哪个输入重新渲染
                观看/订阅。 查看{" "}
                <a
                  href="https://codesandbox.io/s/react-hook-form-watch-with-radio-buttons-and-select-examples-ovfus"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  这个 codesandbox
                </a>{" "}
                的实际行为.
              </p>
            </li>
            <li>
              <p>
                <b className={typographyStyles.note}>getValues</b>:
                获得价值存储在自定义钩子中作为参考，既快速又便宜。
                此方法不会触发重新渲染。
              </p>
            </li>
            <li>
              <p>
                <b className={typographyStyles.note}>local state</b>:
                状态不仅代表输入状态，还决定什么
                渲染。这将在每次输入更改时触发。
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
            React Hook
            Form不能控制您的整个表单和输入，这就是为什么React无法识别实际输入的原因当被交换或交换。作为解决方案，您可以解决此问题
            通过为您的输入提供唯一的<code>key</code>道具来解决问题。您
            也可以从这了解更多有关的信息
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://kentcdodds.com/blog/understanding-reacts-key-prop"
            >
              肯特·C·多兹撰写的这篇文章
            </a>
            。
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
            验证错误后，React Hook
            Form将自动聚焦在其无效元素上具有适当的引用，例如本机输入（例如：
            <code>{`<input />`}</code>
            或某些第三方正确导出引用的组件（例如：从MUI
            <code>
              {`<TextField inputRef = {register({required：'必填字段'})} />`}
            </code>
            ）
          </p>

          <p>
            但是，对于某些第三方控制的组件，例如MUI中的
            <code>{`<Autocomplete>`}</code>
            很难预测他的ref，因此React Hook
            Form将正确检测验证错误，但将无法自动关注种类的组件。
          </p>

          <p>
            作为一种解决方法，在验证错误之后，您可以手动关注在第3方控制的组件上（如果您可以获得实际的
            内部输入参考），例如：
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
      title: "How to work with modal or tab forms?",
      description: (
        <>
          <p>
            了解React Hook Form接受本机形式非常重要
            通过在每个输入内部存储输入状态来进行行为（自定义除外） 在
            <code>useEffect</code>处进行<code>register</code>）。常见的之一
            误解是在使用模态或制表符形式时，通过安装
            并保留输入状态的卸载形式/输入。那是
            错误的实现，而正确的解决方案应始终
            在模式或每个选项卡中为您的表单构建一个新表单，以及
            以本地或全局状态捕获您的提交数据。
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
