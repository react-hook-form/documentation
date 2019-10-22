import * as React from "react"
import CodeArea from "../components/CodeArea"
import accessibleCodeBase from "../components/codeExamples/accessibleCodeBase"
import accessibleCodeFinal from "../components/codeExamples/accessibleCodeFinal"
import Link from "../styles/link"
import { Note } from "../styles/typography"
import { step1, step2, step3 } from "../components/codeExamples/formWizard"
import smartForm from "../components/codeExamples/smartForm"
import { CodeHeading } from "../components/ApiPage"
import form from "../components/codeExamples/form"
import input from "../components/codeExamples/input"
import { Link as PageLink } from "gatsby"

export default {
  title: {
    en: "Advanced Usage",
    kr: "Advanced Usage",
    jp: "高度な使用法",
    zh: "高级用法",
  },
  header: {
    en: {
      title: "Advanced",
      description: "Build complex and accessible forms with React Hook Form.",
    },
    kr: {
      title: "Advanced",
      description: "Build complex and accessible forms with React Hook Form.",
    },
    jp: {
      title: "高度な",
      description: "Build complex and accessible forms with React Hook Form.",
    },
    zh: {
      title: "高级",
      description: "使用 React Hook Form 建设复杂且易于访问的表单.",
    },
  },
  errorMessage: {
    en: {
      title: "Error Message",
      description: (
        <p>
          Error messages are visual feedback to our users when there are issues
          associated with their inputs. In React Hook Form, we provide errors
          object to let you retrieve errors easily. However, there are several
          different ways for us to improve render error to the screen.
        </p>
      ),
      register: (
        <>
          Embed error message during <code>register</code>, you can easily
          insert your error message in the <code>value</code> attribute. Eg:
        </>
      ),
      component:
        "Create a ErrorMessage component to help your print out error.",
      get: (
        <p>
          If your project is using{" "}
          <a
            href="https://lodash.com"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          <code>{`get(errors, 'firstName')`}</code>
        </p>
      ),
    },
    kr: {
      title: "Error Message",
      description: (
        <p>
          Error messages are visual feedback to our users when there are issues
          associated with their inputs. In React Hook Form, we provide errors
          object to let you retrieve errors easily. However, there are several
          different ways for us to improve render error to the screen.
        </p>
      ),
      register: (
        <>
          Embed error message during <code>register</code>, you can easily
          insert your error message in the <code>value</code> attribute. Eg:
        </>
      ),
      component:
        "Create a ErrorMessage component to help your print out error.",
      get: (
        <p>
          If your project is using{" "}
          <a
            href="https://lodash.com"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          <code>{`get(errors, 'firstName')`}</code>
        </p>
      ),
    },
    jp: {
      title: "Error Message",
      description: (
        <p>
          Error messages are visual feedback to our users when there are issues
          associated with their inputs. In React Hook Form, we provide errors
          object to let you retrieve errors easily. However, there are several
          different ways for us to improve render error to the screen.
        </p>
      ),
      register: (
        <>
          Embed error message during <code>register</code>, you can easily
          insert your error message in the <code>value</code> attribute. Eg:
        </>
      ),
      component:
        "Create a ErrorMessage component to help your print out error.",
      get: (
        <p>
          If your project is using{" "}
          <a
            href="https://lodash.com"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          <code>{`get(errors, 'firstName')`}</code>
        </p>
      ),
    },
    zh: {
      title: "Error Message",
      description: (
        <p>
          Error messages are visual feedback to our users when there are issues
          associated with their inputs. In React Hook Form, we provide errors
          object to let you retrieve errors easily. However, there are several
          different ways for us to improve render error to the screen.
        </p>
      ),
      register: (
        <>
          Embed error message during <code>register</code>, you can easily
          insert your error message in the <code>value</code> attribute. Eg:
        </>
      ),
      component:
        "Create a ErrorMessage component to help your print out error.",
      get: (
        <p>
          If your project is using{" "}
          <a
            href="https://lodash.com"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          <code>{`get(errors, 'firstName')`}</code>
        </p>
      ),
    },
  },
  accessibility: {
    en: {
      title: "Accessibility (A11y)",
      description: (
        <>
          <p>
            React Hook Form has support for native form validation, which let
            you validate inputs with your own rules, since most of us have to
            build forms in a custom design and layout, and it's our
            responsibility to make sure our forms are accessible (A11y).
          </p>

          <p>
            The following code example works as intended for validation;
            however, it can be improved for accessibility.
          </p>

          <CodeArea rawData={accessibleCodeBase} />

          <p>
            The following code example is an improved version by leveraging{" "}
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
            After this improvement, the screen reader will say:{" "}
            <i>“Name, edit, invalid entry, This is required.”</i>
          </p>
        </>
      ),
    },
    kr: {
      title: "Accessibility (A11y)",
      description: (
        <>
          <p>
            React Hook Form has support for native form validation, which let
            you validate inputs with your own rules, since most of us have to
            build forms in a custom design and layout, and it's our
            responsibility to make sure our forms are accessible (A11y).
          </p>

          <p>
            The following code example works as intended for validation;
            however, it can be improved for accessibility.
          </p>

          <CodeArea rawData={accessibleCodeBase} />

          <p>
            The following code example is an improved version by leveraging{" "}
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
            After this improvement, the screen reader will say:{" "}
            <i>“Name, edit, invalid entry, This is required.”</i>
          </p>
        </>
      ),
    },
    jp: {
      title: "アクセシビリティ (A11y)",
      description: (
        <>
          <p>
            React Hook Form has support for native form validation, which let
            you validate inputs with your own rules, since most of us have to
            build forms in a custom design and layout, and it's our
            responsibility to make sure our forms are accessible (A11y).
          </p>

          <p>
            The following code example works as intended for validation;
            however, it can be improved for accessibility.
          </p>

          <CodeArea rawData={accessibleCodeBase} />

          <p>
            The following code example is an improved version by leveraging{" "}
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
            After this improvement, the screen reader will say:{" "}
            <i>“Name, edit, invalid entry, This is required.”</i>
          </p>
        </>
      ),
    },
    zh: {
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
  },
  wizard: {
    en: {
      title: "Wizard Form / Funnel",
      description: (
        <>
          <p>
            It's pretty common to collect user information through different
            pages and sections. We recommend using a state management library to
            store user input through different pages/section. In this example,
            we are going to use{" "}
            <Link
              href="https://github.com/bluebill1049/little-state-machine"
              target="_blank"
            >
              little state machine
            </Link>{" "}
            as our state management library (you can replace it with{" "}
            <Link href="https://github.com/reduxjs/redux" target="_blank">
              redux
            </Link>
            , if you are more familiar with it).
          </p>

          <p style={{ textAlign: "center" }}>♦</p>

          <p>
            <Note>Step 1:</Note> Set up your routes and store.
          </p>
          <CodeArea
            rawData={step1}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>Step 2:</Note> Create your pages, make them collect their
            data, submit that data to the store and push to the next page of
            your form.
          </p>
          <CodeArea
            rawData={step2}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>Step 3:</Note> Make your final submission with all the data in
            the store or display the resulting data.
          </p>
          <CodeArea
            rawData={step3}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            Following the above pattern, you should be able to build a wizard
            form/funnel to collect user input data from multiple pages.
          </p>
        </>
      ),
    },
    kr: {
      title: "Wizard Form / Funnel",
      description: (
        <>
          <p>
            It's pretty common to collect user information through different
            pages and sections. We recommend using a state management library to
            store user input through different pages/section. In this example,
            we are going to use{" "}
            <Link
              href="https://github.com/bluebill1049/little-state-machine"
              target="_blank"
            >
              little state machine
            </Link>{" "}
            as our state management library (you can replace it with{" "}
            <Link href="https://github.com/reduxjs/redux" target="_blank">
              redux
            </Link>
            , if you are more familiar with it).
          </p>

          <p style={{ textAlign: "center" }}>♦</p>

          <p>
            <Note>Step 1:</Note> Set up your routes and store.
          </p>
          <CodeArea
            rawData={step1}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>Step 2:</Note> Create your pages, make them collect their
            data, submit that data to the store and push to the next page of
            your form.
          </p>
          <CodeArea
            rawData={step2}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>Step 3:</Note> Make your final submission with all the data in
            the store or display the resulting data.
          </p>
          <CodeArea
            rawData={step3}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            Following the above pattern, you should be able to build a wizard
            form/funnel to collect user input data from multiple pages.
          </p>
        </>
      ),
    },
    jp: {
      title: "Wizard Form / Funnel",
      description: (
        <>
          <p>
            It's pretty common to collect user information through different
            pages and sections. We recommend using a state management library to
            store user input through different pages/section. In this example,
            we are going to use{" "}
            <Link
              href="https://github.com/bluebill1049/little-state-machine"
              target="_blank"
            >
              little state machine
            </Link>{" "}
            as our state management library (you can replace it with{" "}
            <Link href="https://github.com/reduxjs/redux" target="_blank">
              redux
            </Link>
            , if you are more familiar with it).
          </p>

          <p style={{ textAlign: "center" }}>♦</p>

          <p>
            <Note>Step 1:</Note> Set up your routes and store.
          </p>
          <CodeArea
            rawData={step1}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>Step 2:</Note> Create your pages, make them collect their
            data, submit that data to the store and push to the next page of
            your form.
          </p>
          <CodeArea
            rawData={step2}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>Step 3:</Note> Make your final submission with all the data in
            the store or display the resulting data.
          </p>
          <CodeArea
            rawData={step3}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            Following the above pattern, you should be able to build a wizard
            form/funnel to collect user input data from multiple pages.
          </p>
        </>
      ),
    },
    zh: {
      title: "向导形式表格",
      description: (
        <>
          <p>
            通过不同的页面和部分收集用户信息是很常见的。
            我们建议使用状态管理库通过不同的页面/部分去存储用户输入。
            在这个例子中，我们将使用
            <Link
              href="https://github.com/bluebill1049/little-state-machine"
              target="_blank"
            >
              little state machine
            </Link>
            作为我们的状态管理库（如果您更熟悉它，您可以用
            <Link href="https://github.com/reduxjs/redux" target="_blank">
              redux
            </Link>
            替换它）。
          </p>

          <p style={{ textAlign: "center" }}>♦</p>

          <p>
            <Note>步骤1:</Note> 设置你的routes和store。
          </p>
          <CodeArea
            rawData={step1}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>步骤2:</Note>{" "}
            创建您的网页，让他们收集数据，提交该数据存储并推送到下一页你的表格。
          </p>
          <CodeArea
            rawData={step2}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>步骤3:</Note> 让您的最终提交所有的数据存储并且显示生成的数据。
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
  },
  smartForm: {
    en: {
      title: "Smart Form Component",
      description: (
        <>
          <p>
            This idea here is that you can easily compose your form with inputs.
            We are going to create a <code>Form</code> component to
            automatically collecting form data.
          </p>

          <CodeArea
            rawData={smartForm}
            url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
          />

          <p style={{ textAlign: "center" }}>♦</p>

          <p>Let's have a look what's in each of those components.</p>

          <CodeHeading>
            <h2>Form</h2>
          </CodeHeading>

          <p>
            The <code>Form</code> component's responsibility is to inject all{" "}
            <code>react-hook-form</code> methods into the child component.
          </p>

          <CodeArea
            rawData={form}
            url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
          />

          <CodeHeading>
            <h2>Input / Select</h2>
          </CodeHeading>

          <p>
            Those input components' responsibility is to registering them into{" "}
            <code>react-hook-form</code>.
          </p>
          <CodeArea
            rawData={input}
            url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
          />

          <p>
            With the <code>Form</code> component injecting{" "}
            <code>react-hook-form</code>
            's <code>props</code> into the child component, you can easily
            create and compose complex forms in your app.
          </p>
        </>
      ),
    },
    kr: {
      title: "Smart Form Component",
      description: (
        <>
          <p>
            This idea here is that you can easily compose your form with inputs.
            We are going to create a <code>Form</code> component to
            automatically collecting form data.
          </p>

          <CodeArea
            rawData={smartForm}
            url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
          />

          <p style={{ textAlign: "center" }}>♦</p>

          <p>Let's have a look what's in each of those components.</p>

          <CodeHeading>
            <h2>Form</h2>
          </CodeHeading>

          <p>
            The <code>Form</code> component's responsibility is to inject all{" "}
            <code>react-hook-form</code> methods into the child component.
          </p>

          <CodeArea
            rawData={form}
            url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
          />

          <CodeHeading>
            <h2>Input / Select</h2>
          </CodeHeading>

          <p>
            Those input components' responsibility is to registering them into{" "}
            <code>react-hook-form</code>.
          </p>
          <CodeArea
            rawData={input}
            url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
          />

          <p>
            With the <code>Form</code> component injecting{" "}
            <code>react-hook-form</code>
            's <code>props</code> into the child component, you can easily
            create and compose complex forms in your app.
          </p>
        </>
      ),
    },
    jp: {
      title: "Smart Form Component",
      description: (
        <>
          <p>
            This idea here is that you can easily compose your form with inputs.
            We are going to create a <code>Form</code> component to
            automatically collecting form data.
          </p>

          <CodeArea
            rawData={smartForm}
            url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
          />

          <p style={{ textAlign: "center" }}>♦</p>

          <p>Let's have a look what's in each of those components.</p>

          <CodeHeading>
            <h2>Form</h2>
          </CodeHeading>

          <p>
            The <code>Form</code> component's responsibility is to inject all{" "}
            <code>react-hook-form</code> methods into the child component.
          </p>

          <CodeArea
            rawData={form}
            url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
          />

          <CodeHeading>
            <h2>Input / Select</h2>
          </CodeHeading>

          <p>
            Those input components' responsibility is to registering them into{" "}
            <code>react-hook-form</code>.
          </p>
          <CodeArea
            rawData={input}
            url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
          />

          <p>
            With the <code>Form</code> component injecting{" "}
            <code>react-hook-form</code>
            's <code>props</code> into the child component, you can easily
            create and compose complex forms in your app.
          </p>
        </>
      ),
    },
    zh: {
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

          <CodeHeading>
            <h2>Form</h2>
          </CodeHeading>

          <p>
            这个组件的责任是将所有<code>react-hook-form</code>方法注入到子组件中
          </p>

          <CodeArea
            rawData={form}
            url="https://codesandbox.io/s/react-hook-form-smart-form-component-eqb3n"
          />

          <CodeHeading>
            <h2>Input / Select</h2>
          </CodeHeading>

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
  },
  fieldArrays: {
    en: {
      title: "Field Arrays",
      description: (
        <>
          <p>
            This is one of the best features about React Hook Form: instead of
            importing components (like other libraries) to achieve this
            functionality, you can leverage your existing HTML markup. The key
            is within the <code>name</code> attribute. In React Hook Form, the{" "}
            <code>name</code> attribute represents the data structure you want
            to use.
          </p>

          <p>
            The following example demonstrates how you can create Field Arrays
            by manipulating the input <code>name</code> attribute.
          </p>
        </>
      ),
    },
    kr: {
      title: "Field Arrays",
      description: (
        <>
          <p>
            This is one of the best features about React Hook Form: instead of
            importing components (like other libraries) to achieve this
            functionality, you can leverage your existing HTML markup. The key
            is within the <code>name</code> attribute. In React Hook Form, the{" "}
            <code>name</code> attribute represents the data structure you want
            to use.
          </p>

          <p>
            The following example demonstrates how you can create Field Arrays
            by manipulating the input <code>name</code> attribute.
          </p>
        </>
      ),
    },
    jp: {
      title: "Field Arrays",
      description: (
        <>
          <p>
            This is one of the best features about React Hook Form: instead of
            importing components (like other libraries) to achieve this
            functionality, you can leverage your existing HTML markup. The key
            is within the <code>name</code> attribute. In React Hook Form, the{" "}
            <code>name</code> attribute represents the data structure you want
            to use.
          </p>

          <p>
            The following example demonstrates how you can create Field Arrays
            by manipulating the input <code>name</code> attribute.
          </p>
        </>
      ),
    },
    zh: {
      title: "自动生成表单",
      description: (
        <>
          <p>
            这是React Hook
            Form的最佳功能之一：您可以利用现有的HTML，而不需要导入其他的组件来实现此功能。
            键位于name属性中。 在React Hook
            Form中，name属性表示要使用的数据结构。
          </p>

          <p>下面的示例演示如何通过操作输入名称属性来创建自动生成表单。</p>
        </>
      ),
    },
  },
  schema: {
    en: {
      title: "Schema Validation",
      description: (
        <>
          <p>
            React Hook Form supports schema-based form validation with{" "}
            <a href="https://github.com/jquense/yup" target="_blank">
              Yup
            </a>
            , where you can pass your <code>validationSchema</code> to{" "}
            <a href="/api#useForm">useForm</a> as an optional config. React Hook
            Form will validate your input data against the schema and return
            with either <a href="/api#errors">errors</a> or a valid result.
          </p>
        </>
      ),
      step1: (
        <>
          <p>
            <Note>Step 1:</Note> Install <code>Yup</code> into your project.
          </p>
        </>
      ),
      step2: (
        <p>
          <Note>Step 2:</Note> Prepare your schema for validation and register
          inputs with React Hook Form.
        </p>
      ),
    },
    kr: {
      title: "Schema Validation",
      description: (
        <>
          <p>
            React Hook Form supports schema-based form validation with{" "}
            <a href="https://github.com/jquense/yup" target="_blank">
              Yup
            </a>
            , where you can pass your <code>validationSchema</code> to{" "}
            <a href="/api#useForm">useForm</a> as an optional config. React Hook
            Form will validate your input data against the schema and return
            with either <a href="/api#errors">errors</a> or a valid result.
          </p>
        </>
      ),
      step1: (
        <>
          <p>
            <Note>Step 1:</Note> Install <code>Yup</code> into your project.
          </p>
        </>
      ),
      step2: (
        <p>
          <Note>Step 2:</Note> Prepare your schema for validation and register
          inputs with React Hook Form.
        </p>
      ),
    },
    jp: {
      title: "Schema Validation",
      description: (
        <>
          <p>
            React Hook Form supports schema-based form validation with{" "}
            <a href="https://github.com/jquense/yup" target="_blank">
              Yup
            </a>
            , where you can pass your <code>validationSchema</code> to{" "}
            <a href="/api#useForm">useForm</a> as an optional config. React Hook
            Form will validate your input data against the schema and return
            with either <a href="/api#errors">errors</a> or a valid result.
          </p>
        </>
      ),
      step1: (
        <>
          <p>
            <Note>Step 1:</Note> Install <code>Yup</code> into your project.
          </p>
        </>
      ),
      step2: (
        <p>
          <Note>Step 2:</Note> Prepare your schema for validation and register
          inputs with React Hook Form.
        </p>
      ),
    },
    zh: {
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
            <Note>步骤1:</Note> 将<code>Yup</code>安装到您的项目中。
          </p>
        </>
      ),
      step2: (
        <p>
          <Note>步骤2:</Note> 准备您的架构以进行验证和注册 输入到React Hook
          Form.
        </p>
      ),
    },
  },
  connectForm: {
    en: {
      title: "Connect Form",
      description: (
        <p>
          When we are building forms, there are times when our input lives
          inside of deeply nested component trees, and that's when{" "}
          <a href="/api#FormContext">FormContext</a> comes in very handy.
          However, we can further improve the Developer Experience by creating a{" "}
          <code>ConnectForm</code> component and leveraging React's{" "}
          <a href="https://reactjs.org/docs/render-props.html">renderProps</a>.
          The benefit of such a component is you can connect your input with
          React Hook Form from anywhere.
        </p>
      ),
    },
    kr: {
      title: "Connect Form",
      description: (
        <p>
          When we are building forms, there are times when our input lives
          inside of deeply nested component trees, and that's when{" "}
          <a href="/api#FormContext">FormContext</a> comes in very handy.
          However, we can further improve the Developer Experience by creating a{" "}
          <code>ConnectForm</code> component and leveraging React's{" "}
          <a href="https://reactjs.org/docs/render-props.html">renderProps</a>.
          The benefit of such a component is you can connect your input with
          React Hook Form from anywhere.
        </p>
      ),
    },
    jp: {
      title: "Connect Form",
      description: (
        <p>
          When we are building forms, there are times when our input lives
          inside of deeply nested component trees, and that's when{" "}
          <a href="/api#FormContext">FormContext</a> comes in very handy.
          However, we can further improve the Developer Experience by creating a{" "}
          <code>ConnectForm</code> component and leveraging React's{" "}
          <a href="https://reactjs.org/docs/render-props.html">renderProps</a>.
          The benefit of such a component is you can connect your input with
          React Hook Form from anywhere.
        </p>
      ),
    },
    zh: {
      title: "连接表单",
      description: (
        <p>
          当我们构建表单时，有时候我们的输入会在深度嵌套的组件树中，而这时
          <a href="/api#FormContext">FormContext</a>让一切变得非常方便。
          但是，我们可以通过创建连接表单组件并利用React的
          <a href="https://reactjs.org/docs/render-props.html">renderProps</a>
          来进一步改善开发人员体验。
          这样一个组件的好处是你可以从任何地方连接你的输入与React Hook Form。
        </p>
      ),
    },
  },
  formContext: {
    en: {
      title: "FormContext Performance",
      description: (
        <p>
          React Hook Form's{" "}
          <PageLink to="/api/#FormContext">FormContext</PageLink> is built upon{" "}
          <a
            href="https://reactjs.org/docs/context.html"
            target="_blank"
            rel="noreferrer noopener"
          >
            React's Context
          </a>{" "}
          API. It solves the problem where data is passed through the component
          tree without having to pass props down manually at every level. This
          also causes the component tree to trigger a re-render when React Hook
          Form triggers a state update, but we can still can optimise our App if
          required via the example blow.
        </p>
      ),
    },
    kr: {
      title: "FormContext Performance",
      description: (
        <p>
          React Hook Form's{" "}
          <PageLink to="/api/#FormContext">FormContext</PageLink> is built upon{" "}
          <a
            href="https://reactjs.org/docs/context.html"
            target="_blank"
            rel="noreferrer noopener"
          >
            React's Context
          </a>{" "}
          API. It solves the problem where data is passed through the component
          tree without having to pass props down manually at every level. This
          also causes the component tree to trigger a re-render when React Hook
          Form triggers a state update, but we can still can optimise our App if
          required via the example blow.
        </p>
      ),
    },
    jp: {
      title: "FormContext Performance",
      description: (
        <p>
          React Hook Form's{" "}
          <PageLink to="/api/#FormContext">FormContext</PageLink> is built upon{" "}
          <a
            href="https://reactjs.org/docs/context.html"
            target="_blank"
            rel="noreferrer noopener"
          >
            React's Context
          </a>{" "}
          API. It solves the problem where data is passed through the component
          tree without having to pass props down manually at every level. This
          also causes the component tree to trigger a re-render when React Hook
          Form triggers a state update, but we can still can optimise our App if
          required via the example blow.
        </p>
      ),
    },
    zh: {
      title: "FormContext 性能优化",
      description: (
        <p>
          React Hook Form的
          <PageLink to="/api/#FormContext">FormContext</PageLink>是建立在React的
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
  },
}
