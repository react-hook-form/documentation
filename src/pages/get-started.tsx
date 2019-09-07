import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  H1,
  HeadingWithTopMargin,
  Note,
  SubHeading,
  Title,
} from "../styles/typography"
import GetStarted from "../components/GetStarted"
import SideMenu from "../components/SideMenu"
import track from "../components/utils/track"
import SyntaxHighlighterWithCopy from "../components/SyntaxHighlighterWithCopy"
import colors from "../styles/colors"
import { Link, navigate } from "@reach/router"
import { DarkBlueButton } from "../styles/buttons"
import { Container, Wrapper } from "../styles/containers"
import {
  registerCode,
  migrateCode,
  uiLibrary,
  globalState,
  errors,
  applyValidation,
} from "../components/codeExamples/getStarted"
import Footer from "../components/Footer"
import code from "../components/codeExamples/defaultExample"

const { useRef } = React

const links = [
  "Quick start",
  "Register fields",
  "Apply validation",
  "Adapting existing form",
  "Work with UI library",
  "Integrate global state",
  "Handle errors",
]

const Faq = ({ location }) => {
  const sectionsRef = useRef({
    quickstart: null,
    adaptingexistingform: null,
    workwithuilibrary: null,
    integrateglobalstate: null,
    handleerrors: null,
    registerfields: null,
    applyvalidation: null,
  })

  const goToSection = name => {
    track({
      category: "Anchors Link",
      label: name,
      action: `Click - Go to section ${name}`,
    })
    const refName = name.replace(/ /g, "").toLowerCase()
    if (sectionsRef.current[refName]) {
      sectionsRef.current[refName].scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Layout location={location}>
      <Container>
        <Seo title="Get Started" />

        <HeadingWithTopMargin>Get Started</HeadingWithTopMargin>
        <SubHeading>Simple form validation with React Hook Form.</SubHeading>

        <Wrapper>
          <SideMenu
            isStatic
            links={links}
            goToSection={goToSection}
            title={
              <Title
                style={{
                  marginBottom: "10px",
                  fontSize: 16,
                  color: colors.lightBlue,
                }}
              >
                Quick Menu
              </Title>
            }
          />
          <main>
            <GetStarted
              quickStartRef={ref => {
                sectionsRef.current.quickstart = ref
              }}
            />

            <Title
              ref={ref => {
                sectionsRef.current.registerfields = ref
              }}
            >
              Register fields
            </Title>
            <p>
              One of the key concepts for React Hook Form is to{" "}
              <strong>
                <code>register</code>
              </strong>{" "}
              your uncontrolled component into the Hook and hence enabling its
              value to be validated and gathered for submitting.
            </p>

            <p>
              <Note>Note</Note>: Each field is <strong>required</strong> to have
              a unique <code>name</code> as a key for the registration process.
            </p>

            <p>
              <Note>React Native Note: </Note>you will need to use custom
              register eg:{" "}
              <code>{`regsiter({ name: 'test' }, { required: true })`}</code>
            </p>

            <SyntaxHighlighterWithCopy rawData={registerCode} />

            <Title
              ref={ref => {
                sectionsRef.current.applyvalidation = ref
              }}
            >
              Apply validation
            </Title>

            <p>
              React Hook Form make form validation easy by aligning with
              existing{" "}
              <a
                onClick={() => {
                  track({
                    category: "Link",
                    action: "Click - Go to Mozilla website",
                    label: "HTML standard form validation",
                  })
                }}
                href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation"
                target="_blank"
              >
                HTML standard form validation
              </a>
              .
            </p>

            <p>List of validation rules supported by:</p>
            <ul>
              <li>required</li>
              <li>min</li>
              <li>max</li>
              <li>minLength</li>
              <li>maxLength</li>
              <li>pattern</li>
              <li>validate</li>
            </ul>
            <p>
              You can read more detail on each rule at the{" "}
              <Link
                onClick={() => {
                  track({
                    category: "Link",
                    label: "API page #register",
                    action: "Click - Go to API register section",
                  })
                }}
                to="api#register"
              >
                register section
              </Link>
              .
            </p>

            <SyntaxHighlighterWithCopy rawData={applyValidation} />

            <Title
              ref={ref => {
                sectionsRef.current.adaptingexistingform = ref
              }}
            >
              Adapting existing form
            </Title>
            <p>
              Working on an existing form is simple. The important step is to
              apply <code>register</code> into existing component's{" "}
              <code>ref</code>.
            </p>

            <SyntaxHighlighterWithCopy rawData={migrateCode} />

            <Title
              ref={ref => {
                sectionsRef.current.workwithuilibrary = ref
              }}
            >
              Work with UI library
            </Title>
            <p>
              React Hook Form has made it easy to integrate with external UI
              component libraries.
            </p>
            <p>
              <span style={{ color: colors.lightPink }}>Note:</span> Most UI
              libraries do expose <code>innerRef</code> or <code>ref</code> to{" "}
              <code>register</code>. For components that are more complicated
              like <code>react-select</code> or <code>react-datepicker</code>,
              you can manually update the value via <code>setValue</code> or
              trigger an error with <code>setError</code>.
            </p>

            <SyntaxHighlighterWithCopy
              rawData={uiLibrary}
              url="https://codesandbox.io/s/72j69vnk1x"
            />

            <Title
              ref={ref => {
                sectionsRef.current.integrateglobalstate = ref
              }}
            >
              Integrate global state
            </Title>
            <p>
              React Hook Form doesn't require you to have a state management to
              store your data, but you can easily integrate with one.
            </p>

            <SyntaxHighlighterWithCopy rawData={globalState} />

            <Title
              ref={ref => {
                sectionsRef.current.handleerrors = ref
              }}
            >
              Handle errors
            </Title>
            <p>
              React Hook Form provides an <code>errors</code> object to show you
              the errors within the form.
            </p>

            <SyntaxHighlighterWithCopy rawData={errors} />

            <section
              style={{
                textAlign: "center",
              }}
            >
              <H1>Want to learn more?</H1>
              <p>Checkout the full API documentation</p>
              <DarkBlueButton
                onClick={() => {
                  track({
                    category: "Button",
                    label: "Checkout hook API (Get started)",
                    action: "Click - Go to API",
                  })
                  navigate("/api")
                }}
              >
                Checkout Hook API
              </DarkBlueButton>

              <Footer />
            </section>
          </main>
        </Wrapper>
      </Container>
    </Layout>
  )
}
export default Faq
