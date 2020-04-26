import * as React from "react"
import colors from "../../styles/colors"
import enzymeInput from "../../components/codeExamples/enzymeInput"
import focusController from "../../components/codeExamples/focusController"
import toggleFields from "../../components/codeExamples/toggleFields"
import virtualizedList from "../../components/codeExamples/virtualizedList"
import CodeArea from "../../components/CodeArea"
import typographyStyles from "../../styles/typography.module.css"
import tableStyles from "../../styles/table.module.css"
import buttonStyles from "../../styles/button.module.css"

export default {
  title: "FAQs",
  header: {
    title: "FAQs",
    description: "frequently asked question.",
  },
  questions: [
    {
      title: "Performance of React Hook Form",
      description: (
        <p>
          Performance is one of the primary goals for building this custom hook.
          React Hook Form relies on uncontrolled component, hence the reason why
          the register function occurs at the ref. This approach will reduce the
          amount of re-rendering occurring due to user typing or value changing.
          Components mount to the page is much quicker as well because they are
          not controlled. For mounting speed, I have completed a quick
          comparison test which you can refer to by{" "}
          <a
            href="https://github.com/bluebill1049/react-hook-form-performance-compare"
            target="_blank"
            rel="noopener noreferrer"
          >
            this repo link
          </a>
          .
        </p>
      ),
    },
    {
      title: "How to create an accessible input error and message?",
      description: (
        <p>
          React Hook Form is based on{" "}
          <a
            href="https://reactjs.org/docs/uncontrolled-components.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            Uncontrolled Component
          </a>
          , which gives you the ability to build an accessible custom form
          easily.
        </p>
      ),
    },
    {
      title: "Does it work with Class Components?",
      description: (
        <>
          <p>
            No, not out of box. but you can build a wrapper around it and use in
            your Class Component.
          </p>

          <blockquote>
            You can’t use Hooks inside of a class component, but you can
            definitely mix classes and function components with Hooks in a
            single tree. Whether a component is a class or a function that uses
            Hooks is an implementation detail of that component. In the longer
            term, we expect Hooks to be the primary way people write React
            components.
          </blockquote>
        </>
      ),
    },
    {
      title: "How to reset the form?",
      description: (
        <>
          <p>There are two methods to clear the form.</p>
          <ul>
            <li>
              <b>HTMLFormElement.reset()</b>
              <p>
                This method does the same thing as clicking a form's reset
                button, and only clears
                <code>input/select/checkbox</code> values.
              </p>
            </li>
            <li>
              <b>
                React Hook Form API: <code>reset()</code>
              </b>
              <p>
                React Hook Form's <code>reset</code> method will reset all
                fields value, and also will clear all <code>errors</code> within
                the form.
              </p>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "How to initialize form values?",
      description: (
        <p>
          React Hook Form relies on uncontrolled component. With an uncontrolled
          component, you can specify a <code>defaultValue</code> or{" "}
          <code>defaultChecked</code> to an individual field. However, the hook
          itself does provide an easier way to initialise all input values too.
          Example below:
        </p>
      ),
    },
    {
      title: "How to share ref usage?",
      description: (
        <p>
          React Hook Form needs <code>ref</code> to collect the input value,
          however, you may want to use <code>ref</code> for other purposes (eg.
          scroll into the view). The following example will show you how.
        </p>
      ),
    },
    {
      title: "What if you don't have access to ref?",
      description: (
        <>
          <p>
            You can actually <code>register</code> an input without a{" "}
            <code>ref</code>. In fact, you can manually <code>setValue</code>,{" "}
            <code>setError</code> and <code>triggerValidation</code>.
          </p>

          <p>
            <b className={typographyStyles.note}>Note:</b> Because{" "}
            <code>ref</code> has not been registered, React Hook Form won't be
            able to register event listeners to the inputs. This means you will
            have to manually update value and error.
          </p>
        </>
      ),
    },
    {
      title: "Browser Support?",
      description: (
        <>
          <p>React Hook Form support all major browsers.</p>

          <p>
            For legacy IE11 support, you can import react-hook-form IE 11
            version.
          </p>
        </>
      ),
    },
    {
      title: "Why is first keystroke is not working?",
      description: (
        <>
          <p>
            Double check if you are using <code>value</code> instead of{" "}
            <code>defaultValue</code>.
          </p>

          <p>
            React Hook Form is built based on uncontrolled input, which means
            you don't need to change input <code>value</code> via{" "}
            <code>state</code> by <code>onChange</code>. Hence you don't need{" "}
            <code>value</code> at all, in fact, you only need{" "}
            <code>defaultValue</code> for initial input value.
          </p>
        </>
      ),
    },
    {
      title: "Testing failed due to MutationObserver?",
      description: (
        <p>
          If you have difficulty during testing and the issue was caused by{" "}
          <code>MutationObserver</code>. Make sure you install{" "}
          <code>mutationobserver</code> and import this package in your test{" "}
          <a
            href="https://jestjs.io/docs/en/configuration"
            target="_blank"
            rel="noopener noreferrer"
          >
            setup.js file
          </a>
          .
        </p>
      ),
    },
    {
      title: "React Hook Form, Formik or Redux Form?",
      description: (
        <>
          <p>
            First of all, all libs try to solve the same problem which is making
            form building experience easy and great. However, there are some
            fundamental differences between the three, react-hook-form is built
            with uncontrolled input in mind and tries to provide your form with
            best performance and least re-render if possible. On top of that,
            react-hook-form is built by React Hook and used as hook, which means
            there is no Component for you to import. Here are some of the detail
            differences:
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
                    </a>{" "}
                    &{" "}
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
                  <td>minimum re-render</td>
                  <td>
                    re-render according to local state changes which means as
                    you type in the input.
                  </td>
                  <td>
                    re-render according to state management lib (Redux) changes
                    which means as you type in the input.
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
                    <b>Package size</b>
                  </td>
                  <td>
                    Small
                    <br />
                    <code>
                      react-hook-form@4.0.0
                      <br />
                      <b className={typographyStyles.note}>6.2KB</b>
                    </code>
                  </td>
                  <td>
                    Medium
                    <br />
                    <code>
                      formik@2.0.1
                      <br />
                      <b className={typographyStyles.note}>14.4KB</b>
                    </code>
                  </td>
                  <td>
                    Large
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
                    <b>Validation</b>
                  </td>
                  <td>
                    Built-in &{" "}
                    <a href="https://github.com/jquense/yup" target="_blank">
                      Yup
                    </a>
                  </td>
                  <td>
                    Build yourself or{" "}
                    <a href="https://github.com/jquense/yup" target="_blank">
                      Yup
                    </a>
                  </td>
                  <td>Build your yourself or Plugins</td>
                </tr>
                <tr>
                  <td>
                    <b>Learning curve</b>
                  </td>
                  <td>Low</td>
                  <td>Medium</td>
                  <td>Medium</td>
                </tr>
                <tr>
                  <td>
                    <b>Status</b>
                  </td>
                  <td>Medium Community: New lib and growing</td>
                  <td>
                    Large Community: Well established form lib in the community
                  </td>
                  <td>
                    Large Community: Well established form lib in the community
                  </td>
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
            Short answer: <b>Yes</b>
          </p>
          <p>
            React-hook-form is not recommending you to build form controlled,
            however you can still achieve that easily.
          </p>
          <p>
            The trick to using <code>watch</code> API to monitor each input's
            change and assign to value prop.
          </p>
          <p>
            Alternatively, you can use our wrapper component{" "}
            <a
              href="https://www.react-hook-form.com/api#Controller"
              title="React Hook Form Controller"
            >
              Controller
            </a>{" "}
            which take care those custom register for you.
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
                Why am I getting <code>act</code> warning?
              </p>

              <p>
                All validation methods in React Hook Form will be treated as
                async functions, so it's important to wrap <code>async</code>{" "}
                around your{" "}
                <a
                  className={buttonStyles.codeAsLink}
                  href="https://reactjs.org/docs/test-utils.html#act"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  act
                </a>
                .
              </p>
            </li>
            <li>
              <p>Why input change is not firing events?</p>

              <p>
                React Hook Form uses <code>input</code> events for input
                changes. If you're using <strong>react-testing-library</strong>,
                you can easily switch to <code>fireEvent.input</code>. Here is a
                testing{" "}
                <a
                  className={buttonStyles.codeAsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://codesandbox.io/s/react-hook-form-test-s4j7c?from-embed"
                >
                  example at codesandbox
                </a>
                .
              </p>
              <p>
                If you're using <strong>enzyme</strong>, you'll need to manually
                set the <code>value</code> of your input's DOM node, then
                dispatch an input event.
              </p>
              <CodeArea rawData={enzymeInput} />
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
                <b className={typographyStyles.note}>watch:</b> subscribe to
                input’s change via event listener and re-render based on which
                fields that are subscribed. Check out{" "}
                <a
                  href="https://codesandbox.io/s/react-hook-form-watch-with-radio-buttons-and-select-examples-ovfus"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  this codesandbox
                </a>{" "}
                for actual behaviour.
              </p>
            </li>
            <li>
              <p>
                <b className={typographyStyles.note}>getValues</b>: get value
                which stored inside the custom hook as reference, fast and
                cheap. This method doesn’t trigger re-render.
              </p>
            </li>
            <li>
              <p>
                <b className={typographyStyles.note}>local state</b>: React
                local state represent more than just input’s state and also
                decide what to render. This will trigger on each input’s change.
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
            React Hook Form doesn't control your entire form and inputs, which
            is the reason why React wouldn't recognise the actual input that has
            been exchanged or swopped. As a solution, you can resolve this
            problem by giving a unique <code>key</code> prop to your input. You
            can also read more about the key props from{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://kentcdodds.com/blog/understanding-reacts-key-prop"
            >
              this article written by Kent C. Dodds
            </a>
            .
          </p>
          <CodeArea
            rawData={toggleFields}
            url="https://codesandbox.io/s/react-hook-form-faq-toggle-fields-4mp39"
          />
        </>
      ),
    },
    {
      title: "Controller not working with submitFocusError?",
      description: (
        <>
          <p>
            After a validation error, React Hook Form will automatically focus
            on the invalids elements of which have their proper ref, like the
            native inputs (eg: <code>{`<input />`}</code>) or some 3rd party
            Components that correctly export his ref (eg: from MUI{" "}
            <code>{`<TextField inputRef={register({required: 'Field Required'})} />`}</code>
            )
          </p>

          <p>
            However, for some 3rd party controlled Components like{" "}
            <code>{`<Autocomplete>`}</code> from MUI or <code>{`<XX>`}</code>{" "}
            from AntD) it's very difficult to predict his ref because the
            formats changes, so React Hook Form will properly detect the
            validation error but will not be able to automatically focus that
            kind of Components.
          </p>

          <p>
            As a workaround, after the validation error, you can manually focus
            on the 3rd party controlled Component (if you can get the actual
            internal input ref), for example:
          </p>
          <CodeArea rawData={focusController} />

          <p>
            If you find difficult to make the autofocus with external controlled
            component. It is possible to disable the "autofocus on error"
            feature. Maybe this behavior will bring a better user experience in
            some cases. <code>{`useForm({submitFocusError: false});`}</code>
          </p>
        </>
      ),
    },
  ],
}
