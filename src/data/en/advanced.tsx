import * as React from "react"
import CodeArea from "../../components/CodeArea"
import accessibleCodeBase from "../../components/codeExamples/accessibleCodeBase"
import accessibleCodeFinal from "../../components/codeExamples/accessibleCodeFinal"
import customHookWithValidationResolver from "../../components/codeExamples/customHookWithValidationResolver"
import { step1, step2, step3 } from "../../components/codeExamples/formWizard"
import * as CodeExampleTestingForm from "../../components/codeExamples/testingForm"
import CodeExempleSetupReactNative from "../../components/codeExamples/setup.native"
import smartForm from "../../components/codeExamples/smartForm"
import form from "../../components/codeExamples/form"
import input from "../../components/codeExamples/input"
import { Link as PageLink } from "gatsby"
import * as typographyStyles from "../../styles/typography.module.css"
import * as buttonStyles from "../../styles/button.module.css"

export default {
  title: "Advanced Usage",
  header: {
    title: "Advanced",
    description: "Build complex and accessible forms",
  },
  controlledMixedWithUnControlled: {
    title: "Controlled mixed with Uncontrolled Components",
    description: (
      <p>
        React Hook Form embraces uncontrolled components and is also compatible
        with controlled components. Most UI libraries are built to support only
        controlled components, such as{" "}
        <a
          href="https://github.com/mui/material-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          MUI
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/ant-design/ant-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          Antd
        </a>
        . Besides, with React Hook Form the re-rendering of controlled component
        is also optimized. Here is an example that combines them both with
        validation.
      </p>
    ),
  },
  errorMessage: {
    title: "Error Messages",
    description: (
      <p>
        Error messages are visual feedback to our users when there are issues
        with their inputs. React Hook Form provides an <code>errors</code>{" "}
        object to let you retrieve errors easily. There are several different
        ways to improve error presentation on the screen.
      </p>
    ),
    register: (
      <>
        You can simply pass the error message to <code>register</code>, via the{" "}
        <code>message</code> attribute of the validation rule object, like this:
      </>
    ),
    component:
      "Create an <code>ErrorMessage</code> component to help display the error.",
    optionalChaining: (
      <>
        <p>
          The <code>?.</code>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
          >
            optional chaining
          </a>{" "}
          operator permits reading the <code>errors</code> object without
          worrying about causing another error due to <code>null</code> or{" "}
          <code>undefined</code>.
        </p>
        <p>
          <code>{`errors?.firstName?.message`}</code>
        </p>
      </>
    ),
    get: (
      <p>
        If your project is using{" "}
        <a href="https://lodash.com" target="_blank" rel="noopener noreferrer">
          lodash
        </a>
        , then you can leverage the lodash{" "}
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
    title: "Accessibility (A11y)",
    description: (
      <>
        <p>
          React Hook Form has support for native form validation, which lets you
          validate inputs with your own rules. Since most of us have to build
          forms with custom designs and layouts, it is our responsibility to
          make sure those are accessible (A11y).
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
  wizard: {
    title: "Wizard Form / Funnel",
    description: (
      <>
        <p>
          It's pretty common to collect user information through different pages
          and sections. We recommend using a state management library to store
          user input through different pages or sections. In this example, we
          are going to use{" "}
          <a
            className={buttonStyles.links}
            href="https://github.com/bluebill1049/little-state-machine"
            target="_blank"
            rel="noopener noreferrer"
          >
            little state machine
          </a>{" "}
          as our state management library (you can replace it with{" "}
          <a
            className={buttonStyles.links}
            href="https://github.com/reduxjs/redux"
            target="_blank"
            rel="noopener noreferrer"
          >
            redux
          </a>{" "}
          if you are more familiar with it).
        </p>

        <p style={{ textAlign: "center" }}>♦</p>

        <p>
          <b className={typographyStyles.note}>Step 1:</b> Set up your routes
          and store.
        </p>
        <CodeArea
          rawData={step1}
          url="https://codesandbox.io/s/react-hook-form-wizard-form-9pg6j"
        />

        <p>
          <b className={typographyStyles.note}>Step 2:</b> Create your pages,
          collect and submit the data to the store and push to the next
          form/page.
        </p>
        <CodeArea
          rawData={step2}
          url="https://codesandbox.io/s/react-hook-form-wizard-form-9pg6j"
        />

        <p>
          <b className={typographyStyles.note}>Step 3:</b> Make your final
          submission with all the data in the store or display the resulting
          data.
        </p>
        <CodeArea
          rawData={step3}
          url="https://codesandbox.io/s/react-hook-form-wizard-form-9pg6j"
        />

        <p>
          Following the above pattern, you should be able to build a wizard
          form/funnel to collect user input data from multiple pages.
        </p>
      </>
    ),
  },
  smartForm: {
    title: "Smart Form Component",
    description: (
      <>
        <p>
          This idea here is that you can easily compose your form with inputs.
          We are going to create a <code>Form</code> component to automatically
          collect form data.
        </p>

        <CodeArea
          rawData={smartForm}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-forked-iq89z"
        />

        <p style={{ textAlign: "center" }}>♦</p>

        <p>Let's have a look what's in each of those components.</p>

        <code className={typographyStyles.codeHeading}>
          <h2>Form</h2>
        </code>

        <p>
          The <code>Form</code> component's responsibility is to inject all{" "}
          <code>react-hook-form</code> methods into the child component.
        </p>

        <CodeArea
          rawData={form}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-forked-iq89z"
        />

        <code className={typographyStyles.codeHeading}>
          <h2>Input / Select</h2>
        </code>

        <p>
          Those input components' responsibility is to registering them into{" "}
          <code>react-hook-form</code>.
        </p>
        <CodeArea
          rawData={input}
          url="https://codesandbox.io/s/react-hook-form-smart-form-component-forked-iq89z"
        />

        <p>
          With the <code>Form</code> component injecting{" "}
          <code>react-hook-form</code>
          's <code>props</code> into the child component, you can easily create
          and compose complex forms in your app.
        </p>
      </>
    ),
  },
  connectForm: {
    title: "Connect Form",
    description: (
      <p>
        When we are building forms, there are times when our input lives inside
        of deeply nested component trees, and that's when{" "}
        <a href="/api#useFormContext">FormContext</a> comes in handy. However,
        we can further improve the Developer Experience by creating a{" "}
        <code>ConnectForm</code> component and leveraging React's{" "}
        <a href="https://reactjs.org/docs/render-props.html">renderProps</a>.
        The benefit is you can connect your input with React Hook Form much
        easier.
      </p>
    ),
  },
  formContext: {
    title: "FormProvider Performance",
    description: (
      <>
        <p>
          React Hook Form's{" "}
          <PageLink to="/api/#useFormContext">FormProvider</PageLink> is built
          upon{" "}
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
          Form triggers a state update, but we can still optimise our App if
          required via the example below.
          <br />
        </p>
        <p>
          <b className={typographyStyles.note}>Note:</b> Using React Hook Form's{" "}
          <PageLink to="/dev-tools">Devtools</PageLink> alongside{" "}
          <PageLink to="/api/useformcontext">FormProvider</PageLink> can cause
          performance issues in some situations. Before diving deep in
          performance optimizations, consider this bottleneck first.
          <br />
        </p>
      </>
    ),
  },
  customHookwithResolver: {
    title: "Custom Hook with Resolver",
    description: (
      <>
        <p>
          You can build a custom hook as a resolver. A custom hook can easily
          integrate with yup/Joi/Superstruct as a validation method, and to be
          used inside validation resolver.
        </p>
        <ul>
          <li>
            <p>
              Define a memoized validation schema (or define it outside your
              component if you don't have any dependencies)
            </p>
          </li>
          <li>
            <p>Use the custom hook, by passing the validation schema</p>
          </li>
          <li>
            <p>Pass the validation resolver to the useForm hook</p>
          </li>
        </ul>

        <CodeArea
          rawData={customHookWithValidationResolver}
          url="https://codesandbox.io/s/custom-hook-with-resolver-v7-cwczk"
        />
      </>
    ),
  },
  workingWithVirtualizedList: {
    title: "Working with virtualized lists",
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
      </>
    ),
  },
  testingForm: {
    title: "Testing Form",
    description: (
      <>
        <p>
          Testing is very important because it prevents your code from having
          bugs or mistakes, and guarantees code safety when refactoring the
          codebase.
        </p>

        <p>
          We recommend using{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://testing-library.com/"
          >
            testing-library
          </a>
          , because it is simple and tests are more focused on user behavior.
        </p>

        <p style={{ textAlign: "center" }}>♦</p>

        <p>
          <b className={typographyStyles.note}>Step 1:</b> Set up your testing
          environment.
        </p>

        <p>
          Please install{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/testing-library/jest-dom"
          >
            @testing-library/jest-dom
          </a>{" "}
          with the latest version of <code>jest</code>, because react-hook-form
          uses <code>MutationObserver</code> to detect inputs, and to get
          unmounted from the DOM.
        </p>

        <p>
          <b className={typographyStyles.note}>Note:</b> If you are using React
          Native, you don't need to install{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/testing-library/jest-dom"
          >
            @testing-library/jest-dom
          </a>
          .
        </p>

        <CodeArea rawData={"npm install -D @testing-library/jest-dom"} />

        <p>
          Create <code>setup.js</code> to import{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/testing-library/jest-dom"
          >
            @testing-library/jest-dom
          </a>
          .
        </p>
        <CodeArea
          rawData={'import "@testing-library/jest-dom";'}
          url="https://codesandbox.io/s/react-hook-form-unit-test-docs-066zk?file=/src/setupTests.js"
        />
        <p>
          <b className={typographyStyles.note}>Note:</b> If you are using React
          Native, you need to create setup.js, define <code>window</code>{" "}
          object, and include the following lines in the setup file:
          <CodeArea rawData={CodeExempleSetupReactNative} />
        </p>

        <p>
          Finally, you have to update <code>setup.js</code> in{" "}
          <code>jest.config.js</code> to include the file.
        </p>

        <CodeArea
          rawData={CodeExampleTestingForm.step1}
          url="https://codesandbox.io/s/react-hook-form-unit-test-docs-066zk"
        />

        <p>
          <b className={typographyStyles.note}>Step 2:</b> Create login form.
        </p>

        <p>
          We have set the role attribute accordingly. These attributes are
          helpful for when you write tests, and they improve accessibility. For
          more information, you can refer to the{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://testing-library.com/"
          >
            testing-library
          </a>{" "}
          documentation.
        </p>

        <CodeArea
          rawData={CodeExampleTestingForm.step2}
          url="https://codesandbox.io/s/react-hook-form-unit-test-docs-066zk?file=/src/App.js"
        />

        <p>
          <b className={typographyStyles.note}>Step 3:</b> Write tests.
        </p>

        <p>The following criteria are what we try to cover with the tests:</p>

        <ul>
          <li>
            <p>Test submission failure.</p>

            <p>
              We are using <code>waitFor</code> and <code>find*</code> methods
              to detect submission feedback, because the{" "}
              <code>handleSubmit</code> method is executed asynchronously.
            </p>
          </li>
          <li>
            <p>Test validation associated with each inputs.</p>

            <p>
              We are using the <code>*ByRole</code> method when querying
              different elements because that's how users recognize your UI
              component.
            </p>
          </li>
          <li>
            <p>Test successful submission.</p>
          </li>
        </ul>

        <CodeArea
          rawData={CodeExampleTestingForm.step3}
          url="https://codesandbox.io/s/react-hook-form-unit-test-docs-066zk?file=/src/App.test.js"
        />

        <h4>Resolving act warning during test</h4>

        <p>
          If you test a component that uses react-hook-form, you might run into
          a warning like this, even if you didn't write any asynchronous code
          for that component:
        </p>

        <blockquote>
          Warning: An update to MyComponent inside a test was not wrapped in
          act(...)
        </blockquote>

        <CodeArea
          rawData={CodeExampleTestingForm.actWarningComponent}
          url="https://codesandbox.io/s/react-hook-form-unit-test-act-warning-docs-yq7uj?file=/src/App.js"
        />

        <CodeArea
          rawData={CodeExampleTestingForm.actWarningTest}
          url="https://codesandbox.io/s/react-hook-form-unit-test-act-warning-docs-yq7uj?file=/src/App.test.js"
        />

        <p>
          In this example, there is a simple form without any apparent async
          code, and the test merely renders the component and tests for the
          presence of a button. However, it still logs the warning about updates
          not being wrapped in <code>act()</code>.
        </p>

        <p>
          This is because react-hook-form internally uses asynchronous
          validation handlers. In order to compute the formState, it has to
          initially validate the form, which is done asynchronously, resulting
          in another render. That update happens after the test function
          returns, which triggers the warning.
        </p>

        <p>
          To solve this, wrap your <code>render()</code> calls in{" "}
          <code>await act(async () ={`> {}`})</code>:
        </p>
        <CodeArea
          rawData={CodeExampleTestingForm.actWarningSolution}
          url="https://codesandbox.io/s/react-hook-form-unit-test-act-warning-docs-tcb7y?file=/src/App.test.js"
        />
      </>
    ),
  },
  transformAndParse: {
    title: "Transform and Parse",
    description: (
      <>
        <p>
          The native input returns the value in <code>string</code> format
          unless invoked with <code>valueAsNumber</code> or{" "}
          <code>valueAsDate</code>, you can read more under{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement"
          >
            this section
          </a>
          . However, it's not perfect, we still have to deal with{" "}
          <code>isNaN</code> or <code>null</code> values. So it's better to
          leave the transform at the custom hook level. In the following
          example, we are using the <code>Controller</code> to include the
          functionality of the transform value's input and output. You can also
          achieve a similar result with a custom <code>register</code>.
        </p>
      </>
    ),
  },
}
