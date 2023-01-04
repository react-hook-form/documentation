import * as React from "react"
import colors from "../../styles/colors"
import enzymeInput from "../../components/codeExamples/enzymeInput"
import focusController from "../../components/codeExamples/focusController"
import toggleFields from "../../components/codeExamples/toggleFields"
import CodeArea from "../../components/CodeArea"
import copyClipBoard from "../../components/utils/copyClipBoard"
import * as typographyStyles from "../../styles/typography.module.css"
import * as tableStyles from "../../styles/table.module.css"
import * as buttonStyles from "../../styles/button.module.css"
import * as getStartedStyles from "../../components/GetStarted.module.css"
import * as codeAreaStyles from "../../components/CodeArea.module.css"
import ClipBoard from "../../components/ClipBoard"
import accessibleCode from "../../components/codeExamples/accessibleCode"
import initialValue from "../../components/codeExamples/initialValue"
import shareRef from "../../components/codeExamples/shareRef"
import shareRefTs from "../../components/codeExamples/shareRefTs"
import manualValidation from "../../components/codeExamples/manualValidation"
import control from "../../components/codeExamples/control"
import controlled from "../../components/codeExamples/controlled"
import TabGroup from "../../components/TabGroup"
import importKeystroke from "../../components/codeExamples/importKeystroke"

export default {
  title: "FAQs",
  header: {
    title: "FAQs",
    description: "frequently asked questions",
  },
  questions: [
    {
      title: "Performance of React Hook Form",
      description: (
        <p>
          Performance is one of the primary reasons why this library was
          created. React Hook Form relies on an uncontrolled form, which is the
          reason why the <code>register</code> function captures{" "}
          <code>ref</code> and the controlled component has its re-rendering
          scope with <code>Controller</code> or <code>useController</code>. This
          approach reduces the amount of re-rendering that occurs due to a user
          typing in an input or other form values changing at the root of your
          form or applications. Components mount to the page faster than
          controlled components because they have less overhead. As a reference,
          there is a quick comparison test that you can refer to at{" "}
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
        <>
          <p>
            React Hook Form is based on{" "}
            <a
              href="https://reactjs.org/docs/uncontrolled-components.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Uncontrolled Components
            </a>
            , which gives you the ability to easily build an accessible custom
            form.
          </p>
          <CodeArea rawData={accessibleCode} />
        </>
      ),
    },
    {
      title: "Does it work with Class Components?",
      description: (
        <>
          <p>
            No, not out of the box. If you want to do this, you can build a
            wrapper around it and use it in your Class Component.
          </p>

          <blockquote>
            You can’t use Hooks inside of a class component, but you can
            definitely mix classes and function components with Hooks in a
            single tree. Whether a component is a class or a function that uses
            Hooks is simply an implementation detail of that component. In the
            longer term, we expect Hooks to be the primary way people write
            React components.
          </blockquote>
        </>
      ),
    },
    {
      title: "How to reset the form?",
      description: (
        <>
          <p>There are two methods to clear the form:</p>
          <ul>
            <li>
              <b>HTMLFormElement.reset()</b>
              <p>
                This method does the same thing as clicking a form's reset
                button. It only clears <code>input/select/checkbox</code>{" "}
                values.
              </p>
            </li>
            <li>
              <b>
                React Hook Form API: <code>reset()</code>
              </b>
              <p>
                React Hook Form's <code>reset</code> method will reset all field
                values, and will also clear all <code>errors</code> within the
                form.
              </p>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "How to initialize form values?",
      description: (
        <>
          <p>
            Being that React Hook Form relies on an uncontrolled form, you can
            specify a <code>defaultValue</code> or <code>defaultChecked</code>{" "}
            to an individual field. However, it is more common and recommended
            to initialize a form by passing <code>defaultValues</code> to{" "}
            <code>useForm</code>.
          </p>
          <CodeArea rawData={initialValue} />
        </>
      ),
    },
    {
      title: "How to share ref usage?",
      description: (
        <>
          <p>
            React Hook Form needs a <code>ref</code> to collect the input value.
            However, you may want to use <code>ref</code> for other purposes
            (e.g. scroll into the view, or focus).
          </p>
          <CodeArea rawData={shareRef} tsRawData={shareRefTs} />
        </>
      ),
    },
    {
      title: "What if you don't have access to ref?",
      description: (
        <>
          <p>
            You can actually <code>register</code> an input without a{" "}
            <code>ref</code>. In fact, you can manually <code>setValue</code>,{" "}
            <code>setError</code> and <code>trigger</code>.
          </p>

          <p>
            <b className={typographyStyles.note}>Note:</b> Because{" "}
            <code>ref</code> has not been registered, React Hook Form won't be
            able to register event listeners to the inputs. This means you will
            have to manually update value and error.
          </p>

          <CodeArea rawData={manualValidation} />
        </>
      ),
    },
    {
      title: "Why is the first keystroke not working?",
      description: (
        <>
          <p>
            Make sure you are not using <code>value</code>. The correct property
            is <code>defaultValue</code>.
          </p>

          <p>
            React Hook Form is focusing on uncontrolled inputs, which means you
            don't need to change the input <code>value</code> via{" "}
            <code>state</code> via <code>onChange</code>. In fact, you don't
            need <code>value</code> at all. You only need to set{" "}
            <code>defaultValue</code> for the initial input value.
          </p>
          <CodeArea withOutCopy rawData={importKeystroke} />
        </>
      ),
    },
    {
      title: "React Hook Form, Formik or Redux Form?",
      description: (
        <>
          <p>
            First of all, all libs try to solve the same problem: make the form
            building experience as easy as possible. However, there are some
            fundamental differences between these three.{" "}
            <code>react-hook-form</code> is built with uncontrolled inputs in
            mind and tries to provide your form with the best performance and
            least amount of re-renders possible. Additionallly,{" "}
            <code>react-hook-form</code> is built with React Hooks and used as a
            hook, which means there is no Component for you to import. Here are
            some of the detailed differences:
          </p>

          <div className={tableStyles.tableWrapper}>
            <table className={tableStyles.table}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${colors.lightPink}` }}>
                  <th style={{ width: "100px" }} />
                  <th style={{ width: "250px" }}>
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
                      rel="noopener noreferrer"
                    >
                      uncontrolled
                    </a>{" "}
                    &{" "}
                    <a
                      href="https://reactjs.org/docs/forms.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      controlled
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://reactjs.org/docs/forms.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      controlled
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://reactjs.org/docs/forms.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      controlled
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Rendering</b>
                  </td>
                  <td>minimum re-render and optimise computation</td>
                  <td>
                    re-render according to local state changes (As you type in
                    the input.)
                  </td>
                  <td>
                    re-render according to state management lib (Redux) changes
                    (As you type in the input.)
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
                      react-hook-form@7.27.0
                      <br />
                      <b className={typographyStyles.note}>8.5KB</b>
                    </code>
                  </td>
                  <td>
                    Medium
                    <br />
                    <code>
                      formik@2.1.4
                      <br />
                      <b className={typographyStyles.note}>15KB</b>
                    </code>
                  </td>
                  <td>
                    Large
                    <br />
                    <code>
                      redux-form@8.3.6
                      <br />
                      <b className={typographyStyles.note}>26.4KB</b>
                    </code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Validation</b>
                  </td>
                  <td>
                    Built-in,{" "}
                    <a
                      href="https://github.com/jquense/yup"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Yup
                    </a>
                    ,{" "}
                    <a
                      href="https://github.com/vriad/zod"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Zod
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
                    and build your own.
                  </td>
                  <td>
                    Build yourself or{" "}
                    <a
                      href="https://github.com/jquense/yup"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Yup
                    </a>
                  </td>
                  <td>Build yourself or Plugins</td>
                </tr>
                <tr>
                  <td>
                    <b>Learning curve</b>
                  </td>
                  <td>Low to Medium</td>
                  <td>Medium</td>
                  <td>Medium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
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
                either all inputs or a specified input's changes via an event
                listener and re-render based on which fields are subscribed to.
                Check out{" "}
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
                <b className={typographyStyles.note}>getValues</b>: get values
                that are stored inside the custom hook as reference, fast and
                cheap. This method doesn’t trigger a re-render.
              </p>
            </li>
            <li>
              <p>
                <b className={typographyStyles.note}>local state</b>: React
                local state represents more than just an input’s state and also
                decides what to render. This will trigger on each input’s
                change.
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
            is why React wouldn't recognize that the actual input has been
            exchanged or swapped. As a solution, you can resolve this problem by
            giving a unique <code>key</code> prop to your input. You can also
            read more about the key props from{" "}
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
            url="https://codesandbox.io/s/react-hook-form-faq-toggle-fields-3htr6"
          />
        </>
      ),
    },
    {
      title: "How to work with modal or tab forms?",
      description: (
        <>
          <p>
            It's important to understand that React Hook Form embraces native
            form behavior by storing input state inside each input (except
            custom <code>register</code> at <code>useEffect</code>). A common
            misconception is that input state remains with mounted or unmounted
            inputs. Such as when working with a modal or tab forms. Instead, the
            correct solution is to build a new form for your form inside each
            modal or tab and capture your submission data in local or global
            state and then do something with the combined data.
          </p>

          <ul>
            <li>
              <p>
                <a
                  href="https://codesandbox.io/s/react-hook-form-modal-form-conditional-inputs-c7n0r"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Modal form and toggle inputs example
                </a>
              </p>
            </li>
            <li>
              <p>
                <a
                  href="https://codesandbox.io/s/tabs-760h9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tab form example
                </a>
              </p>
            </li>
          </ul>

          <p>
            Alternatively you can use the _deprecated_ option{" "}
            <code>shouldUnregister: false</code> when calling `useForm`.
          </p>

          <TabGroup buttonLabels={["Controller", "Custom Register"]}>
            <CodeArea rawData={control} />
            <CodeArea
              rawData={controlled}
              url="https://codesandbox.io/s/react-hook-form-controlled-input-forked-rl2v1"
            />
          </TabGroup>
        </>
      ),
    },
    {
      title: "Controller not working with shouldFocusError? (V6)",
      description: (
        <>
          <p>
            After a validation error, React Hook Form will automatically focus
            the invalids elements that have a proper ref, like the native inputs
            (eg: <code>{`<input />`}</code>) or some 3rd party Components that
            correctly export a ref (eg: from MUI{" "}
            <code>{`<TextField inputRef={register({required: 'Field Required'})} />`}</code>
            )
          </p>

          <p>
            However, for some 3rd party controlled Components (like{" "}
            <code>{`<Autocomplete>`}</code> from MUI or <code>{`<XX>`}</code>{" "}
            from AntD) it's very difficult to predict its ref because the
            formats vary. In this case, React Hook Form will properly detect the
            validation error but <i>will not be able to</i> automatically focus
            that kind of Component.
          </p>

          <p>
            As a workaround, after the validation error, you can manually focus
            the 3rd party controlled Component (if you can get the actual
            internal input ref), for example:
          </p>
          <CodeArea rawData={focusController} />

          <p>
            If you find difficult to make the autofocus with external controlled
            component work correctly, it is possible to disable the "autofocus
            on error" feature. It is possible that this behavior will bring a
            better user experience in some cases.{" "}
            <code>{`useForm({shouldFocusError: false});`}</code>
          </p>
        </>
      ),
    },
    {
      title: "Can it work with Controlled components?",
      description: (
        <>
          <p>
            Short answer: <b>Yes</b>
          </p>
          <p>
            <code>react-hook-form</code> is not recommending you to build
            controlled forms, however you can still achieve that easily.
          </p>
          <p>
            The trick is to use the <code>watch</code> API to monitor each
            input's change and assign it to the value prop.
          </p>
          <p>
            Alternatively, you can use our wrapper component{" "}
            <a
              href="https://www.react-hook-form.com/api#Controller"
              title="React Hook Form Controller"
            >
              Controller
            </a>{" "}
            which <code>register</code>s components for you.
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
                Why is testing not working with React Native (
                <code>react-native-testing-library</code>)?
              </p>

              <p>
                React Hook Form doesn't register inputs during server side
                render, which means testing in react native could result in the{" "}
                <code>window</code> object being <code>undefined</code>. A quick
                fix would be to stub the <code>window</code> object to enable
                the registration process.
              </p>
            </li>
            <li>
              <p>
                Why am I getting an <code>act</code> warning?
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
              <p>Why doesn't input change fire events?</p>

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
      title: "Browser Support?",
      description: (
        <>
          <p>
            React Hook Form supports all major browsers. For legacy IE11
            support, you can import react-hook-form IE 11 version. Make sure you
            install <code>@babel/runtime-corejs3</code> as well.
          </p>

          <CodeArea rawData="npm i @babel/runtime-corejs3" />
          <p>If you encounter: </p>
          <blockquote>
            {" "}
            Object doesn't support property or method 'find'
          </blockquote>
          <p>
            You should try to add this{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#Polyfill">
              find polyfill
            </a>{" "}
            to the top of your app.js
          </p>

          <h4>Version ^6.7.0</h4>

          <p>
            <b className={typographyStyles.note}>Important: </b>from version
            6.7.0 onwards we are dropping babel, and using TypeScript to
            transpile to es5. You can refer to this{" "}
            <a
              href="https://github.com/react-hook-form/react-hook-form/issues/2775"
              target="_blank"
              rel="noopener noreferrer"
            >
              issue
            </a>{" "}
            for more detail.
          </p>

          <p>
            The following polyfills are necessary. Feel free to let us know or
            update the doc to reflect other missing polyfills.
          </p>

          <ul>
            <li>
              <p>
                <code>Object.values</code>
              </p>
            </li>
            <li>
              <p>
                <code>Object.entries</code>
              </p>
            </li>
            <li>
              <p>
                <code>Array.flat</code>
              </p>
            </li>
            <li>
              <p>
                <code>Array.find</code>
              </p>
            </li>
            <li>
              <p>
                <code>Array.includes</code>
              </p>
            </li>
            <li>
              <p>
                <code>String.startsWith</code>
              </p>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Testing failed due to MutationObserver?",
      description: (
        <div>
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
          <span>
            npm i mutationobserver-shim
            <ClipBoard
              className={getStartedStyles.copyButton}
              onClick={() => copyClipBoard("npm i mutationobserver-shim")}
              currentLanguage="en"
            />
          </span>
        </div>
      ),
    },
  ],
}
