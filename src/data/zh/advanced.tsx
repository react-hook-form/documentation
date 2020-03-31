import * as React from "react"
import CodeArea from "../../components/CodeArea"
import accessibleCodeBase from "../../components/codeExamples/accessibleCodeBase"
import accessibleCodeFinal from "../../components/codeExamples/accessibleCodeFinal"
import { step1, step2, step3 } from "../../components/codeExamples/formWizard"
import smartForm from "../../components/codeExamples/smartForm"
import form from "../../components/codeExamples/form"
import input from "../../components/codeExamples/input"
import { Link as PageLink } from "gatsby"
import typographyStyles from "../../styles/typography.module.css"
import buttonStyles from "../../styles/button.module.css"
import customHookWithValidationResolver from "../../components/codeExamples/customHookWithValidationResolver"
import virtualizedList from "../../components/codeExamples/virtualizedList"

export default {
  title: "高级用法",
  header: {
    title: "高级",
    description: "使用 React Hook Form 建设复杂且易于访问的表单.",
  },
  controlledMixedWithUnControlled: {
    title: "受控制与不受控制的组件同存",
    description: (
      <p>
        React Hook Form 拥护你们使用不受控制的组件，与此同时也兼容受控制的组件。
        大多数UI库的构建仅限于支持受控组件，如
        <a
          href="https://github.com/mui-org/material-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          Material-UI
        </a>
        和
        <a
          href="https://github.com/ant-design/ant-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          And
        </a>
        。此外,我们也优化了受控组件的多次render.
        以下这是一个我们结合受控和不受控制的表单验证的例子。
      </p>
    ),
  },
  errorMessage: {
    title: "错误信息",
    description: (
      <p>
        当有问题时，错误消息是对我们的用户的可视化反馈。 在react hook
        form，我们提供的错误对象让你轻松地检索错误。 然而，有几个
        不同的方式ra让我们减少render错误。
      </p>
    ),
    register: (
      <>
        Embed error message during <code>register</code>, you can easily insert
        your error message in the <code>value</code> attribute. Eg:
      </>
    ),
    component: "Create a ErrorMessage component to help your print out error.",
    get: (
      <p>
        If your project is using{" "}
        <a href="https://lodash.com" target="_blank" rel="noopener noreferrer">
          lodash
        </a>
        , then you can leverage what lodash{" "}
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
    optionalChaining: (
      <>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
          >
            optional chaining
          </a>
          运算符<code>?.</code>
          。允许您读取错误对象，而不必担心由于<code>null</code>或
          <code>undefined</code>而导致错误。
        </p>
        <p>
          <code>{`errors?.firstName?.message`}</code>
        </p>
      </>
    ),
  },
  accessibility: {
    title: "辅助功能 (A11y)",
    description: (
      <>
        <p>
          React Hook Form
          支持本机表单验证。可是因为我们大多数人都必须在自定义设计和布局中构建表单，于此同时这也变成我们的责任去确保表单形式是有可访问性的（A11y）。
        </p>

        <p>下面的代码示例可用于验证；但是, 它可以改善可访问性。</p>

        <CodeArea rawData={accessibleCodeBase} />

        <p>
          下面的代码示例是通过利用
          <a
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
            target="_blank"
          >
            ARIA
          </a>
          改进的版本。
        </p>
        <CodeArea rawData={accessibleCodeFinal} />

        <p>
          这种改进后，屏幕阅读器会说: <i>"名称，编辑是必需的。”</i>
        </p>
      </>
    ),
  },
  wizard: {
    title: "向导形式表格",
    description: (
      <>
        <p>
          通过不同的页面和部分收集用户信息是很常见的。
          我们建议使用状态管理库通过不同的页面/部分去存储用户输入。
          在这个例子中，我们将使用
          <a
            className={buttonStyles.links}
            href="https://github.com/bluebill1049/little-state-machine"
            target="_blank"
          >
            little state machine
          </a>
          作为我们的状态管理库（如果您更熟悉它，您可以用
          <a
            className={buttonStyles.links}
            href="https://github.com/reduxjs/redux"
            target="_blank"
          >
            redux
          </a>
          替换它）。
        </p>

        <p style={{ textAlign: "center" }}>♦</p>

        <p>
          <b className={typographyStyles.note}>步骤1:</b>{" "}
          设置你的routes和store。
        </p>
        <CodeArea
          rawData={step1}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          <b className={typographyStyles.note}>步骤2:</b>{" "}
          创建您的网页，让他们收集数据，提交该数据存储并推送到下一页你的表格。
        </p>
        <CodeArea
          rawData={step2}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          <b className={typographyStyles.note}>步骤3:</b>{" "}
          让您的最终提交所有的数据存储并且显示生成的数据。
        </p>
        <CodeArea
          rawData={step3}
          url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
        />

        <p>
          按照上述模式，您应该能够构建向导表单收集来自多个页面的用户输入数据。
        </p>
      </>
    ),
  },
  smartForm: {
    title: "智能表单组件",
    description: (
      <>
        <p>
          这里的想法是，你可以很容易地用输入来组合你的表单。
          我们将创建一个表单组件来自动收集表单数据。
        </p>

        <CodeArea
          rawData={smartForm}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <p style={{ textAlign: "center" }}>♦</p>

        <p>让我们来看看这些组件中的每个组件。</p>

        <div className={typographyStyles.codeHeading}>
          <h2>Form</h2>
        </div>

        <p>
          这个组件的责任是将所有<code>react-hook-form</code>方法注入到子组件中
        </p>

        <CodeArea
          rawData={form}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <div className={typographyStyles.codeHeading}>
          <h2>Input / Select</h2>
        </div>

        <p>
          这个输入组件的责任是将它们注册到 <code>react-hook-form</code>.
        </p>
        <CodeArea
          rawData={input}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
        />

        <p>
          随着<code>Form</code>组件将<code>react-hook-form</code>
          的功能注入到child组件中，您可以轻松地在应用中创建和撰写复杂的表单。
        </p>
      </>
    ),
  },
  fieldArrays: {
    title: "自动生成表单",
    description: (
      <>
        <p>
          这是React Hook
          Form的最佳功能之一：您可以利用现有的HTML，而不需要导入其他的组件来实现此功能。
          键位于name属性中。 在React Hook Form中，name属性表示要使用的数据结构。
        </p>

        <p>
          <b className={typographyStyles.note}>注意:</b>{" "}
          我们还建立自定义挂钩了为了复杂的情况:{" "}
          <PageLink to="/api#useFieldArray">useFieldArray</PageLink>.
        </p>

        <p>下面的示例演示如何通过操作输入名称属性来创建自动生成表单。</p>

        <p>
          <b className={typographyStyles.note}>注意:</b>
          如果您的应用程序需要功能，例如：删除，插入，追加，前置。 这里是这种
          <a
            href="https://codesandbox.io/s/react-hook-form-field-array-advanced-with-delete-insert-append-edit-gvgg4"
            target="_blank"
            rel="noreferrer noopener"
          >
            实现的链接
          </a>
          混合了
          <PageLink to={"/api#Controller"}>Controller</PageLink>。
        </p>
      </>
    ),
  },
  schema: {
    title: "架构验证",
    description: (
      <>
        <p>
          React Hook Form支持使用
          <a href="https://github.com/jquense/yup" target="_blank">
            Yup
          </a>
          进行基于模式的表单验证，您可以在<a href="/api#useForm">useForm</a>
          其中通过
          <code>validationSchema</code>将表单用作可选配置。 React Hook
          Form将根据模式验证您的输入数据，并返回<a href="/api#errors">错误</a>
          或有效结果。
        </p>
      </>
    ),
    step1: (
      <>
        <p>
          <b className={typographyStyles.note}>步骤1:</b> 将<code>Yup</code>
          安装到您的项目中。
        </p>
      </>
    ),
    step2: (
      <p>
        <b className={typographyStyles.note}>步骤2:</b>{" "}
        准备您的架构以进行验证和注册 输入到React Hook Form.
      </p>
    ),
  },
  connectForm: {
    title: "连接表单",
    description: (
      <p>
        当我们构建表单时，有时候我们的输入会在深度嵌套的组件树中，而这时
        <a href="/api#useFormContext">FormContext</a>让一切变得非常方便。
        但是，我们可以通过创建连接表单组件并利用React的
        <a href="https://reactjs.org/docs/render-props.html">renderProps</a>
        来进一步改善开发人员体验。
        这样一个组件的好处是你可以从任何地方连接你的输入与React Hook Form。
      </p>
    ),
  },
  conditionalControlledComponent: {
    title: "条件控制组件",
    description: (
      <>
        <p>
          在条件显示表格方面，React Hook
          Form对我们来说非常简单，因为当你删除了组件树的输入时，它会自动取消注册，这里就有一个
          <a
            href="https://codesandbox.io/s/13ykqx4wx7"
            target="_blank"
            rel="noopener noreferrer"
          >
            例子
          </a>
          。 但是，由于没有注册ref，因此受控组件不是同一种情况，以下有两个方案
        </p>
        <ul>
          <li>
            <p>
              我们可以利用
              <code>
                <a
                  href="https://reactjs.org/docs/hooks-effect.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  useEffect
                </a>
              </code>
              的使用来实现。
            </p>
          </li>
          <li>
            <p>
              使用
              <PageLink to="/api#Controller">Controller</PageLink>
              来包裹您的受控组件从而做到自动注册于取消注册功能
            </p>
          </li>
        </ul>
        <p>例子如下:</p>
      </>
    ),
  },
  formContext: {
    title: "FormContext 性能优化",
    description: (
      <p>
        React Hook Form的
        <PageLink to="/api/#useFormContext">FormContext</PageLink>
        是建立在React的
        <a
          href="https://reactjs.org/docs/context.html"
          target="_blank"
          rel="noreferrer noopener"
        >
          Context
        </a>
        API上。 它解决了数据通过组件树传递而不必在每个级别手动传递的问题。
        这也会导致组件树在React Hook
        Form触发状态更新时触发重新render，但如果需要通过示例，我们仍然可以优化我们的应用程序。
      </p>
    ),
  },
  customHookWithValidationResolver: {
    title: "Custom Hook with Validation Resolver",
    description: (
      <>
        <p>
          您可以构建一个自定义钩子作为验证解析器。定制挂钩
          可以轻松地与yup/Joi/Superstruct集成为验证方法，并在验证解析器(validationResolver)中使用。
        </p>
        <ul>
          <li>
            定义一个记忆化的验证模式或在您的外部定义它组件如果您没有任何依赖性）
          </li>
          <li>通过传递验证模式来使用自定义钩子</li>
          <li>将验证解析器传递给useForm钩子</li>
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
          Imagine a scenario where you have a table of data. This table might
          contain hundreds or thousands of rows, and each row will have inputs.
          A common practice is to only render the items that are in the
          viewport, however this will cause issues as the items are removed from
          the DOM when they are out of view, and re-added. This will cause items
          to reset to their default values when they re-enter the viewport.
        </p>

        <p>
          To work around this, you can manually register the fields, and then
          programatically set the value of the field.
        </p>

        <p>
          An example is shown below using{" "}
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
          url="https://codesandbox.io/s/virtulized-react-hook-form-issue-o75u2"
        />
      </>
    ),
  },
}
