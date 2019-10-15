import * as React from "react"
import {
  HeadingWithTopMargin,
  SubHeading,
  Note,
  QuestionTitle,
} from "../styles/typography"
import SideMenu from "../components/SideMenu"
import { Container, Wrapper } from "../styles/containers"
import CodeArea, { CopyIcon } from "../components/CodeArea"
import Footer from "../components/Footer"
import manualValidation from "../components/codeExamples/manualValidation"
import accessibleCode from "../components/codeExamples/accessibleCode"
import shareRef from "../components/codeExamples/shareRef"
import initialValue from "../components/codeExamples/initialValue"
import copyClipBoard from "../components/utils/copyClipBoard"
import { CopyButton, InstallCode } from "./GetStarted"
import StarRepo from "../components/StarRepo"
import faq from "../data/faq"
import { useStateMachine } from "little-state-machine"

const { useRef } = React

const Faq = ({ defaultLang }: { defaultLang: string }) => {
  const {
    state: { language },
  } = useStateMachine()
  const { currentLanguage } = language || { currentLanguage: defaultLang }
  const links = faq.questions[currentLanguage].map(({ title }) => title)

  const sectionsRef = useRef({
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
    question6: null,
    question7: null,
    question8: null,
    question9: null,
    question10: null,
  })

  const goToSection = (name, index) => {
    if (sectionsRef.current[`question${index + 1}`]) {
      sectionsRef.current[`question${index + 1}`].scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  return (
    <Container>
      <HeadingWithTopMargin id="main">FAQs</HeadingWithTopMargin>
      <SubHeading>frequently asked question.</SubHeading>

      <Wrapper>
        <SideMenu isStatic links={links} goToSection={goToSection} />

        <main>
          <QuestionTitle ref={ref => (sectionsRef.current.question1 = ref)}>
            Performance of React Hook Form
          </QuestionTitle>
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

          <hr />

          <QuestionTitle ref={ref => (sectionsRef.current.question2 = ref)}>
            How to create an accessible input error and message?
          </QuestionTitle>
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
          <CodeArea rawData={accessibleCode} />

          <hr />

          <QuestionTitle ref={ref => (sectionsRef.current.question3 = ref)}>
            Does it work with Class Components?
          </QuestionTitle>

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

          <hr />

          <QuestionTitle ref={ref => (sectionsRef.current.question4 = ref)}>
            How to reset the form?
          </QuestionTitle>
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

          <hr />

          <QuestionTitle ref={ref => (sectionsRef.current.question5 = ref)}>
            How to initialize form values?
          </QuestionTitle>

          <p>
            React Hook Form relies on uncontrolled component. With an
            uncontrolled component, you can specify a <code>defaultValue</code>{" "}
            or <code>defaultChecked</code> to an individual field. However, the
            hook itself does provide an easier way to initialise all input
            values too. Example below:
          </p>
          <CodeArea rawData={initialValue} />

          <hr />

          <QuestionTitle ref={ref => (sectionsRef.current.question6 = ref)}>
            How to share ref usage?
          </QuestionTitle>

          <p>
            React Hook Form needs <code>ref</code> to collect the input value,
            however, you may want to use <code>ref</code> for other purposes
            (eg. scroll into the view). The following example will show you how.
          </p>

          <CodeArea rawData={shareRef} />
          <hr />

          <QuestionTitle ref={ref => (sectionsRef.current.question7 = ref)}>
            What if you don't have access to ref?
          </QuestionTitle>

          <p>
            You can actually <code>register</code> an input without a{" "}
            <code>ref</code>. In fact, you can manually <code>setValue</code>,{" "}
            <code>setError</code> and <code>triggerValidation</code>.
          </p>

          <p>
            <Note>Note:</Note> Because <code>ref</code> has not been registered,
            React Hook Form won't be able to register event listeners to the
            inputs. This means you will have to manually update value and error.
          </p>

          <CodeArea rawData={manualValidation} />
          <hr />

          <QuestionTitle ref={ref => (sectionsRef.current.question8 = ref)}>
            Browser Support?
          </QuestionTitle>

          <p>React Hook Form support all major browsers.</p>

          <p>
            For legacy IE11 support, you can import react-hook-form IE 11
            version.
          </p>

          <CodeArea
            rawData={`import useForm from 'react-hook-form/dist/react-hook-form.ie11'`}
            withOutCopy
          />

          <hr />

          <QuestionTitle ref={ref => (sectionsRef.current.question9 = ref)}>
            Why is first keystroke is not working?
          </QuestionTitle>

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

          <hr />

          <QuestionTitle ref={ref => (sectionsRef.current.question10 = ref)}>
            Testing failed due to MutationObserver?
          </QuestionTitle>

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

          <InstallCode>
            npm i mutationobserver-shim
            <CopyButton
              onClick={() => {
                copyClipBoard("npm i mutationobserver-shim")
                alert("Code copied into your clipboard.")
              }}
            >
              <CopyIcon>
                <span />
              </CopyIcon>{" "}
              Copy
            </CopyButton>
          </InstallCode>

          <hr />

          <StarRepo />

          <Footer />
        </main>
      </Wrapper>
    </Container>
  )
}

export default Faq
