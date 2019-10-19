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
    jp: "高度な使用法",
    zh: "Advanced Usage",
  },
  header: {
    en: {
      title: "Advanced",
      description: "Build complex and accessible forms with React Hook Form.",
    },
    jp: {
      title: "高度な",
      description: "Build complex and accessible forms with React Hook Form.",
    },
    zh: {
      title: "高级",
      description: "Build complex and accessible forms with React Hook Form.",
    },
  },
  accessibility: {
    en: {
      title: "Accessibility (A11y)",
      description: (
        <>
          <p>
            React Hook Form has support for native form validation, which let
            you validate inputs with your own rules, since most of us
            have to build forms in a custom design and layout, and it's our
            responsibility to make sure our forms are accessible (A11y).
          </p>

          <p>
            The following code example works as intended for validation; however,
            it can be improved for accessibility.
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
            React Hook Form have support on native form validation, which let
            the borrow validate inputs with your rules, however, as most of us
            would have to build forms in a custom design and layout and it's our
            responsibility to make sure our forms are accessible (A11y).
          </p>

          <p>
            The following code example works as intended for validation, however
            it can be improved for accessibility.
          </p>

          <CodeArea rawData={accessibleCodeBase} />

          <p>
            The following code example is improved version by leveraging{" "}
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
            After the improvement, the screen reader will say:{" "}
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
            React Hook Form have support on native form validation, which let
            the borrow validate inputs with your rules, however, as most of us
            would have to build forms in a custom design and layout and it's our
            responsibility to make sure our forms are accessible (A11y).
          </p>

          <p>
            The following code example works as intended for validation, however
            it can be improved for accessibility.
          </p>

          <CodeArea rawData={accessibleCodeBase} />

          <p>
            The following code example is improved version by leveraging{" "}
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
            After the improvement, the screen reader will say:{" "}
            <i>“Name, edit, invalid entry, This is required.”</i>
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
            data, submit that data to the store and push to the next page of your form.
          </p>
          <CodeArea
            rawData={step2}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>Step 3:</Note> Make your final submission with all the data
            in the store or display the resulting data.
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
            pages and sections. We recommend to use state management library to
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
            , if you are more familiar).
          </p>

          <p style={{ textAlign: "center" }}>♦</p>

          <p>
            <Note>Step 1:</Note> set up your routes and store.
          </p>
          <CodeArea
            rawData={step1}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>Step 2:</Note> create your pages and make them collecting
            data, submit to store and push to the next page of your form.
          </p>
          <CodeArea
            rawData={step2}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>Step 3:</Note> make your final submission with all your data
            in store or display the result data.
          </p>
          <CodeArea
            rawData={step3}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            Follow the above pattern you should be able to build a wizard
            form/funnel to collect user input data from multiple pages.
          </p>
        </>
      ),
    },
    zh: {
      title: "Wizard Form / Funnel",
      description: (
        <>
          <p>
            It's pretty common to collect user information through different
            pages and sections. We recommend to use state management library to
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
            , if you are more familiar).
          </p>

          <p style={{ textAlign: "center" }}>♦</p>

          <p>
            <Note>Step 1:</Note> set up your routes and store.
          </p>
          <CodeArea
            rawData={step1}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>Step 2:</Note> create your pages and make them collecting
            data, submit to store and push to the next page of your form.
          </p>
          <CodeArea
            rawData={step2}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>Step 3:</Note> make your final submission with all your data
            in store or display the result data.
          </p>
          <CodeArea
            rawData={step3}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            Follow the above pattern you should be able to build a wizard
            form/funnel to collect user input data from multiple pages.
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
            This idea here is that you can easily compose your form with inputs. We are
            going to create a <code>Form</code> component to automatically
            collecting form data. 
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
            With the <code>Form</code> component injecting <code>react-hook-form</code>
            's <code>props</code> into the child component, you can easily
            create and compose complex forms in your app.
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
            pages and sections. We recommend to use state management library to
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
            , if you are more familiar).
          </p>

          <p style={{ textAlign: "center" }}>♦</p>

          <p>
            <Note>Step 1:</Note> set up your routes and store.
          </p>
          <CodeArea
            rawData={step1}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>Step 2:</Note> create your pages and make them collecting
            data, submit to store and push to the next page of your form.
          </p>
          <CodeArea
            rawData={step2}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>Step 3:</Note> make your final submission with all your data
            in store or display the result data.
          </p>
          <CodeArea
            rawData={step3}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            Follow the above pattern you should be able to build a wizard
            form/funnel to collect user input data from multiple pages.
          </p>
        </>
      ),
    },
    zh: {
      title: "Wizard Form / Funnel",
      description: (
        <>
          <p>
            It's pretty common to collect user information through different
            pages and sections. We recommend to use state management library to
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
            , if you are more familiar).
          </p>

          <p style={{ textAlign: "center" }}>♦</p>

          <p>
            <Note>Step 1:</Note> set up your routes and store.
          </p>
          <CodeArea
            rawData={step1}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>Step 2:</Note> create your pages and make them collecting
            data, submit to store and push to the next page of your form.
          </p>
          <CodeArea
            rawData={step2}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            <Note>Step 3:</Note> make your final submission with all your data
            in store or display the result data.
          </p>
          <CodeArea
            rawData={step3}
            url="https://codesandbox.io/s/form-wizard-pages-kkg7m"
          />

          <p>
            Follow the above pattern you should be able to build a wizard
            form/funnel to collect user input data from multiple pages.
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
            This is one of the best features about React Hook Form: instead of importing
            components (like other libraries) to achieve this functionality, you
            can leverage your existing HTML markup. The key is within the{" "}
            <code>name</code> attribute. In React Hook Form, the{" "}
            <code>name</code> attribute represents the data structure you want to use.
          </p>

          <p>
            The following example demonstrates how you can create Field Arrays by
            manipulating the input <code>name</code> attribute.
          </p>
        </>
      ),
    },
    jp: {
      title: "Field Arrays",
      description: (
        <>
          <p>
            This is one of cool features about React Hook Form, instead import
            components like other libraries to achieve the functionality. You
            can leverage your existing HTML markup. The key is within the{" "}
            <code>name</code> attribute. In React Hook Form, the{" "}
            <code>name</code> attribute represent the data structure.
          </p>

          <p>
            The following example demonstrate how you can create Field Array by
            just manipulating the input <code>name</code> attribute.
          </p>
        </>
      ),
    },
    zh: {
      title: "Field Arrays",
      description: (
        <>
          <p>
            This is one of cool features about React Hook Form, instead import
            components like other libraries to achieve the functionality. You
            can leverage your existing HTML markup. The key is within the{" "}
            <code>name</code> attribute. In React Hook Form, the{" "}
            <code>name</code> attribute represent the data structure.
          </p>

          <p>
            The following example demonstrate how you can create Field Array by
            just manipulating the input <code>name</code> attribute.
          </p>
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
    jp: {
      title: "Schema Validation",
      description: (
        <>
          <p>
            React Hook Form supports schema-based form validation with{" "}
            <a href="https://github.com/jquense/yup" target="_blank">
              Yup
            </a>
            , you can pass your <code>validationSchema</code> to{" "}
            <a href="/api#useForm">useForm</a> as an optional config, React Hook
            Form will validate your input data against the schema and return you
            with <a href="/api#errors">errors</a> or valid result.
          </p>
        </>
      ),
      step1: (
        <>
          <p>
            <Note>Step 1:</Note> install <code>Yup</code> into your project.
          </p>
        </>
      ),
      step2: (
        <p>
          <Note>Step 2:</Note> prepare your schema for validation and register
          inputs with React Hook Form.
        </p>
      ),
    },
    zh: {
      title: "Schema Validation",
      description: (
        <>
          <p>
            React Hook Form supports schema-based form validation with{" "}
            <a href="https://github.com/jquense/yup" target="_blank">
              Yup
            </a>
            , you can pass your <code>validationSchema</code> to{" "}
            <a href="/api#useForm">useForm</a> as an optional config, React Hook
            Form will validate your input data against the schema and return you
            with <a href="/api#errors">errors</a> or valid result.
          </p>
        </>
      ),
      step1: (
        <>
          <p>
            <Note>Step 1:</Note> install <code>Yup</code> into your project.
          </p>
        </>
      ),
      step2: (
        <p>
          <Note>Step 2:</Note> prepare your schema for validation and register
          inputs with React Hook Form.
        </p>
      ),
    },
  },
  connectForm: {
    en: {
      title: "Connect Form",
      description: (
        <p>
          When we are building forms, there are times when our input lives inside of
          deeply nested component trees, and that's when{" "}
          <a href="/api#FormContext">FormContext</a> comes in very handy. However, we
          can further improve the Developer Experience  by creating a <code>ConnectForm</code>{" "}
          component and leveraging React's{" "}
          <a href="https://reactjs.org/docs/render-props.html">renderProps</a>.
          The benefit of such a component is you can connect your input with React
          Hook Form from anywhere.
        </p>
      ),
    },
    jp: {
      title: "Connect Form",
      description: (
        <p>
          When we building forms, there are times when our input lives inside of
          deep nested components tree, and that's when{" "}
          <a href="/api#FormContext">FormContext</a> comes in handy. However, we
          can further improve the DX by creating a <code>ConnectForm</code>{" "}
          component and leveraging React's{" "}
          <a href="https://reactjs.org/docs/render-props.html">renderProps</a>.
          The benefit of such component is you can connect your input with React
          Hook Form anywhere.
        </p>
      ),
    },
    zh: {
      title: "Connect Form",
      description: (
        <p>
          When we building forms, there are times when our input lives inside of
          deep nested components tree, and that's when{" "}
          <a href="/api#FormContext">FormContext</a> comes in handy. However, we
          can further improve the DX by creating a <code>ConnectForm</code>{" "}
          component and leveraging React's{" "}
          <a href="https://reactjs.org/docs/render-props.html">renderProps</a>.
          The benefit of such component is you can connect your input with React
          Hook Form anywhere.
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
          API.  It solves the problem where data is passed through the component tree
          without having to pass props down manually at every level. This also
          causes the component tree to trigger a re-render when React Hook Form
          triggers a state update, but we can still can optimise our App if required via 
          the example blow.
        </p>
      ),
    },
    jp: {
      title: "FormContext Performance",
      description: (
        <p>
          React Hook Form's{" "}
          <PageLink to="/api/#FormContext">FormContext</PageLink> is build upon{" "}
          <a
            href="https://reactjs.org/docs/context.html"
            target="_blank"
            rel="noreferrer noopener"
          >
            React's Context
          </a>{" "}
          API, it solve the problem where pass data through the component tree
          without having to pass props down manually at every level. This also
          causing the component tree to trigger re-render when React Hook Form
          trigger a state update, but we still can optimise our App if requires
          and example blow.
        </p>
      ),
    },
    zh: {
      title: "FormContext Performance",
      description: (
        <p>
          React Hook Form's{" "}
          <PageLink to="/api/#FormContext">FormContext</PageLink> is build upon{" "}
          <a
            href="https://reactjs.org/docs/context.html"
            target="_blank"
            rel="noreferrer noopener"
          >
            React's Context
          </a>{" "}
          API, it solve the problem where pass data through the component tree
          without having to pass props down manually at every level. This also
          causing the component tree to trigger re-render when React Hook Form
          trigger a state update, but we still can optimise our App if requires
          and example blow.
        </p>
      ),
    },
  },
}
