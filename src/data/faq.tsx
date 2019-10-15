import * as React from "react"
import { Note } from "../styles/typography"

export default {
  questions: {
    en: [
      {
        title: "Performance of React Hook Form",
        description: (
          <p>
            Performance is one of the primary goals for building this custom
            hook. React Hook Form relies on uncontrolled component, hence the
            reason why the register function occurs at the ref. This approach
            will reduce the amount of re-rendering occurring due to user typing
            or value changing. Components mount to the page is much quicker as
            well because they are not controlled. For mounting speed, I have
            completed a quick comparison test which you can refer to by{" "}
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
              No, not out of box. but you can build a wrapper around it and use
              in your Class Component.
            </p>

            <blockquote>
              You can’t use Hooks inside of a class component, but you can
              definitely mix classes and function components with Hooks in a
              single tree. Whether a component is a class or a function that
              uses Hooks is an implementation detail of that component. In the
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
                  fields value, and also will clear all <code>errors</code>{" "}
                  within the form.
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
            React Hook Form relies on uncontrolled component. With an
            uncontrolled component, you can specify a <code>defaultValue</code>{" "}
            or <code>defaultChecked</code> to an individual field. However, the
            hook itself does provide an easier way to initialise all input
            values too. Example below:
          </p>
        ),
      },
      {
        title: "How to share ref usage?",
        description: (
          <p>
            React Hook Form needs <code>ref</code> to collect the input value,
            however, you may want to use <code>ref</code> for other purposes
            (eg. scroll into the view). The following example will show you how.
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
              <Note>Note:</Note> Because <code>ref</code> has not been
              registered, React Hook Form won't be able to register event
              listeners to the inputs. This means you will have to manually
              update value and error.
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
    ],
    jp: [
      {
        title: "Performance of React Hook Form",
        description: (
          <p>
            Performance is one of the primary goals for building this custom
            hook. React Hook Form relies on uncontrolled component, hence the
            reason why the register function occurs at the ref. This approach
            will reduce the amount of re-rendering occurring due to user typing
            or value changing. Components mount to the page is much quicker as
            well because they are not controlled. For mounting speed, I have
            completed a quick comparison test which you can refer to by{" "}
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
              No, not out of box. but you can build a wrapper around it and use
              in your Class Component.
            </p>

            <blockquote>
              You can’t use Hooks inside of a class component, but you can
              definitely mix classes and function components with Hooks in a
              single tree. Whether a component is a class or a function that
              uses Hooks is an implementation detail of that component. In the
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
                  fields value, and also will clear all <code>errors</code>{" "}
                  within the form.
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
            React Hook Form relies on uncontrolled component. With an
            uncontrolled component, you can specify a <code>defaultValue</code>{" "}
            or <code>defaultChecked</code> to an individual field. However, the
            hook itself does provide an easier way to initialise all input
            values too. Example below:
          </p>
        ),
      },
      {
        title: "How to share ref usage?",
        description: (
          <p>
            React Hook Form needs <code>ref</code> to collect the input value,
            however, you may want to use <code>ref</code> for other purposes
            (eg. scroll into the view). The following example will show you how.
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
              <Note>Note:</Note> Because <code>ref</code> has not been
              registered, React Hook Form won't be able to register event
              listeners to the inputs. This means you will have to manually
              update value and error.
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
    ],
    zh: [
      {
        title: "Performance of React Hook Form",
        description: (
          <p>
            Performance is one of the primary goals for building this custom
            hook. React Hook Form relies on uncontrolled component, hence the
            reason why the register function occurs at the ref. This approach
            will reduce the amount of re-rendering occurring due to user typing
            or value changing. Components mount to the page is much quicker as
            well because they are not controlled. For mounting speed, I have
            completed a quick comparison test which you can refer to by{" "}
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
              No, not out of box. but you can build a wrapper around it and use
              in your Class Component.
            </p>

            <blockquote>
              You can’t use Hooks inside of a class component, but you can
              definitely mix classes and function components with Hooks in a
              single tree. Whether a component is a class or a function that
              uses Hooks is an implementation detail of that component. In the
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
                  fields value, and also will clear all <code>errors</code>{" "}
                  within the form.
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
            React Hook Form relies on uncontrolled component. With an
            uncontrolled component, you can specify a <code>defaultValue</code>{" "}
            or <code>defaultChecked</code> to an individual field. However, the
            hook itself does provide an easier way to initialise all input
            values too. Example below:
          </p>
        ),
      },
      {
        title: "How to share ref usage?",
        description: (
          <p>
            React Hook Form needs <code>ref</code> to collect the input value,
            however, you may want to use <code>ref</code> for other purposes
            (eg. scroll into the view). The following example will show you how.
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
              <Note>Note:</Note> Because <code>ref</code> has not been
              registered, React Hook Form won't be able to register event
              listeners to the inputs. This means you will have to manually
              update value and error.
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
    ],
  },
}
