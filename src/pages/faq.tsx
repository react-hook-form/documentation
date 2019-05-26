import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { HeadingWithTopMargin, SubHeading } from '../styles/typography'
import SideMenu from '../components/SideMenu'
import { Container, Wrapper } from '../styles/containers'
import styled from 'styled-components'
import SyntaxHighlighterWithCopy from '../components/SyntaxHighlighterWithCopy'
import track from '../components/utils/track'

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
  & > h2::before {
    display: inline-block;
    content: '▎';
  }
`

const links = [
  'Performance of React Hook Form',
  'Does it work with Class Component?',
  'How to reset the form?',
  'How to initialize form values?',
  'How to share ref usage?',
]

const Faq = ({ location }) => {
  const sectionsRef = useRef({
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
  })

  const goToSection = (name, index) => {
    track({
      category: 'Get Started - go to section',
      label: `Go to section ${name}`,
      action: `Go to section ${name}`,
    })
    if (sectionsRef.current[`question${index + 1}`]) {
      sectionsRef.current[`question${index + 1}`].scrollIntoView({ behavior: 'smooth' })
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
            <h2>Performance of React Hook Form</h2>
            <p ref={ref => (sectionsRef.current.question1 = ref)}>
              Performance is one of the primary goals for building this custom hook. React Hook Form relies on
              uncontrolled component, hence the reason why the register function occurred at the ref. This approach will
              reduce the amount of re-rendering which occurred by user typing or value changing. Components mount to the
              page is much quicker too because they are not controlled. For mounting speed, I have completed a quick
              comparison test which you can refer to by{' '}
              <a
                href="https://github.com/bluebill1049/react-hook-form-performance-compare"
                target="_blank"
                onClick={() => {
                  track({
                    category: 'Link',
                    action: 'Click - visit the repo',
                    label: 'this repo link',
                  })
                }}
              >
                this repo link
              </a>
              .
            </p>

            <hr />

            <h2 ref={ref => (sectionsRef.current.question2 = ref)}>Does it work with Class Component?</h2>

            <p>No.</p>

            <blockquote>
              You can’t use Hooks inside of a class component, but you can definitely mix classes and function
              components with Hooks in a single tree. Whether a component is a class or a function that uses Hooks is an
              implementation detail of that component. In the longer term, we expect Hooks to be the primary way people
              write React components.
            </blockquote>

            <hr />

            <h2 ref={ref => (sectionsRef.current.question3 = ref)}>How to reset the form?</h2>
            <p>There are two types of methods to clear form.</p>
            <ul>
              <li>
                <b>HTMLFormElement.reset()</b>
                <p>
                  This method does the same thing as clicking a form's reset button, and only clear
                  <code>input/select/checkbox</code> value.
                </p>
              </li>
              <li>
                <b>
                  React Hook Form API: <code>reset()</code>
                </b>
                <p>
                  React Hook Form's <code>reset</code> method will reset all fields value, and also clear all <code>errors</code>{' '}
                  within the form.
                </p>
              </li>
            </ul>

            <hr />

            <h2 ref={ref => (sectionsRef.current.question4 = ref)}>How to initialize form values?</h2>

            <p>
              React Hook Form relies on uncontrolled component. With an uncontrolled component, you can specify a{' '}
              <code>defaultValue</code> or <code>defaultChecked</code> to individual field. However, the hook itself
              does provider an easier way to initialise all input values too. Example below:
            </p>
            <SyntaxHighlighterWithCopy rawData={code} />

            <hr />

            <h2 ref={ref => (sectionsRef.current.question5 = ref)}>How to share ref usage?</h2>

            <p>
              React Hook Form need <code>ref</code> to collect input value, however you may want to use <code>ref</code>{' '}
              for other purpose (eg. scroll into the view). The following example will show you how.
            </p>

            <SyntaxHighlighterWithCopy rawData={shareRef} />
            <hr />
          </FaqMain>
        </Wrapper>
      </Container>
    </Layout>
  )
}
export default Faq
