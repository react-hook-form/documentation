import * as React from "react"
import colors from "../../styles/colors"
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
                    Build your own &{" "}
                    <a href="https://github.com/jquense/yup" target="_blank">
                      Yup
                    </a>
                  </td>
                  <td>Build your own & Plugins</td>
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
              <p>Why input change is not fire event?</p>

              <p>
                React Hook Form using <code>input</code> event for input change,
                so to fix it. you can easily switch to{" "}
                <code>fireEvent.input</code> for react-testing-library
              </p>
            </li>
          </ul>
        </div>
      ),
    },
  ],
}
