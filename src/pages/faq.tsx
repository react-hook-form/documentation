import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { HeadingWithTopMargin, SubHeading, Note } from "../styles/typography"
import SideMenu from "../components/SideMenu"
import { Container, Wrapper } from "../styles/containers"
import styled from "styled-components"
import SyntaxHighlighterWithCopy from "../components/SyntaxHighlighterWithCopy"
import track from "../components/utils/track"
import breakpoints from "../styles/breakpoints"
import colors from "../styles/colors"
import Footer from "../components/Footer"
import manualValidation from "../components/codeExamples/manualValidation"
import accessibleCode from "../components/codeExamples/accessibleCode"

const { useRef } = React

const code = `import React from "react";
import useForm from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "bill",
      lastName: "luo",
      email: "bluebill1049@hotmail.com"
    }
  });
  const onSubmit = data => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register} />
      <input name="lastName" ref={register} />
      <input name="email" ref={register} />

      <button type="submit">Submit</button>
    </form>
  );
}`

const shareRef = `import React, { useRef } from "react"
import useForm from "react-hook-form"

function App() {
  const { register, handleSubmit } = useForm()
  const firstNameRef = useRef()
  const onSubmit = data => alert(JSON.stringify(data))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={(e) => {
        register(e)
        firstNameRef.current = e // you can still assign to your own ref
      }} />
      <input name="lastName" ref={(e) => {
        // register's first argument is ref, and second is validation rules
        register(e, { required: true })
      }} />

      <button>Submit</button>
    </form>
  );
}`

const FaqMain = styled.main`
  @media ${breakpoints.fromMediumScreen} {
    & > h2 {
      padding-left: 10px;
      border-left: 5px solid ${colors.lightPink};
      line-height: 1;
    }
  }
`

const links = [
  "Performance of React Hook Form",
  "How to creat accessible input error and message?",
  "Does it work with Class Component?",
  "How to reset the form?",
  "How to initialize form values?",
  "How to share ref usage?",
  "What if you don't have access to ref?",
  "Browser support?",
  "Why first keystroke is not working?",
]

const Faq = ({ location }) => {
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
  })

  const goToSection = (name, index) => {
    track({
      category: "Button",
      label: name,
      action: `Click - Go to section ${name}`,
    })
    if (sectionsRef.current[`question${index + 1}`]) {
      sectionsRef.current[`question${index + 1}`].scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  return (
    <Layout location={location}>
      <Container>
        <Seo title="FAQ" />

        <HeadingWithTopMargin>FAQs</HeadingWithTopMargin>
        <SubHeading>frequently asked question.</SubHeading>

        <Wrapper>
          <SideMenu isStatic links={links} goToSection={goToSection} />

          <FaqMain>
            <h2 ref={ref => (sectionsRef.current.question1 = ref)}>
              Performance of React Hook Form
            </h2>
            <p>
              Performance is one of the primary goals for building this custom
              hook. React Hook Form relies on uncontrolled component, hence the
              reason why the register function occurs at the ref. This
              approach will reduce the amount of re-rendering occurring due to
              user typing or value changing. Components mount to the page is
              much quicker as well because they are not controlled. For mounting
              speed, I have completed a quick comparison test which you can
              refer to by{" "}
              <a
                href="https://github.com/bluebill1049/react-hook-form-performance-compare"
                target="_blank"
                onClick={() => {
                  track({
                    category: "Link",
                    action: "Click - visit the repo",
                    label: "this repo link",
                  })
                }}
              >
                this repo link
              </a>
              .
            </p>

            <hr />

            <h2 ref={ref => (sectionsRef.current.question2 = ref)}>
              How to create an accessible input error and message?
            </h2>
            <p>
              React Hook Form is based on{" "}
              <a
                href="https://reactjs.org/docs/uncontrolled-components.html"
                target="_blank"
              >
                Uncontrolled Component
              </a>
              , which gives you the ability to build an accessible custom form
              easily.
            </p>
            <SyntaxHighlighterWithCopy rawData={accessibleCode} />

            <hr />

            <h2 ref={ref => (sectionsRef.current.question3 = ref)}>
              Does it work with Class Components?
            </h2>

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

            <hr />

            <h2 ref={ref => (sectionsRef.current.question4 = ref)}>
              How to reset the form?
            </h2>
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

            <h2 ref={ref => (sectionsRef.current.question5 = ref)}>
              How to initialize form values?
            </h2>

            <p>
              React Hook Form relies on uncontrolled component. With an
              uncontrolled component, you can specify a{" "}
              <code>defaultValue</code> or <code>defaultChecked</code> to an{" "}
              individual field. However, the hook itself does provide an easier
              way to initialise all input values too. Example below:
            </p>
            <SyntaxHighlighterWithCopy rawData={code} />

            <hr />

            <h2 ref={ref => (sectionsRef.current.question6 = ref)}>
              How to share ref usage?
            </h2>

            <p>
              React Hook Form needs <code>ref</code> to collect the input value,
              however, you may want to use <code>ref</code> for other purposes
              (eg. scroll into the view). The following example will show you
              how.
            </p>

            <SyntaxHighlighterWithCopy rawData={shareRef} />
            <hr />

            <h2 ref={ref => (sectionsRef.current.question7 = ref)}>
              What if you don't have access to <code>ref</code>?
            </h2>

            <p>
              You can actually <code>register</code> an input without a <code>ref</code>. In
              fact, you can manually <code>setValue</code>,{" "}
              <code>setError</code> and <code>triggerValidation</code>.
            </p>

            <p>
              <Note>Note:</Note> Because <code>ref</code> has not been
              registered, React Hook Form won't be able to register event
              listeners to the inputs. This means you will have to manually update value
              and error.
            </p>

            <SyntaxHighlighterWithCopy rawData={manualValidation} />
            <hr />

            <h2 ref={ref => (sectionsRef.current.question8 = ref)}>
              Browser Support?
            </h2>

            <p>React Hook Form support all major browsers.</p>

            <p>
              For legacy IE11 support, you can import react-hook-form IE 11 version.
            </p>

            <SyntaxHighlighterWithCopy rawData={`import useForm from 'react-hook-form/dist/react-hook-form.ie11'`} withOutCopy />

            <hr />

            <h2 ref={ref => (sectionsRef.current.question9 = ref)}>
              Why is first keystroke is not working?
            </h2>

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

            <Footer />
          </FaqMain>
        </Wrapper>
      </Container>
    </Layout>
  )
}
export default Faq
