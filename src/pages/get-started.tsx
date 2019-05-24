import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { HeadingWithTopMargin, SubHeading, Title } from '../components/styles/typography'
import GetStarted from '../components/GetStarted'
import styled from 'styled-components'
import ApiMenu from '../components/ApiMenu'
import track from '../components/utils/track'
import SyntaxHighlighterWithCopy from '../components/SyntaxHighlighterWithCopy'
import colors from '../components/styles/colors'
import { Link } from '@reach/router'

const { useRef } = React

const registerCode = `import React from 'react'
import useForm from 'react-hook-form'

function YourForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register} />
      <input name="lastName" ref={register} />
      <select name="gender" ref={register}>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <input type="submit" />
    </form>
  );
}`

const migrateCode = `import React from 'react'
import useForm from 'react-hook-form'

// The following is an example of your existing Input Component 
function Input({ label, register, required }) {
  return (
    <>
      <label>label</label>
      <input name={label} register={register({ required })} />
    </>
  );
}

function YourForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="First Name" register={register} required />
      <input type="submit" />
    </form>
  );
}`

const uiLibrary = `import React from 'react'
import useForm from 'react-hook-form'
import Select from "react-select"
import Input from "@material-ui/core/Input";

function YourForm() {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => console.log(data);
  const [values, setReactSelect] = useState({
    selectedOption: []
  });

  const handleMultiChange = selectedOption => {
    setValue("reactSelect", selectedOption);
    setReactSelect({ selectedOption });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name="HelloWorld" inputRef={register} />
        
      <Select
        value={values.selectedOption}
        options={options}
        onChange={handleMultiChange}
        ref={e => register({ name: "reactSelect" })}
        isMulti
      />
      
      <input type="submit" />
    </form>
  );
}
`

const globalState = `import React from 'react'
import useForm from 'react-hook-form'
import { connect } from 'react-redux'
import updateAction from './actions'

function YourForm(props) {
  const { register, handleSubmit, setValue } = useForm()
  // Submit your data into Redux store
  const onSubmit = (data) => props.updateAction(data)
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name="firstName" defaultValue={props.firstName} ref={register} />
      <Input name="lastName" defaultValue={props.lastName} ref={register} />
      <input type="submit" />
    </form>
  );
}

// Connect your component with redux
connect(({ firstName, lastName }) => ({ firstName, lastName }), updateAction)(YourForm)
`

const errors = `import React from 'react'
import useForm from 'react-hook-form'

function YourForm(props) {
  const { register, errors } = useForm()
  const onSubmit = (data) => props.updateAction(data)
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name="firstName" defaultValue={props.firstName} ref={register({ required: true })} />
      {errors.firstName && 'First name is required'}
      <Input name="lastName" defaultValue={props.lastName} ref={register({ required: true })} />
      {errors.lastName && 'Last name is required'}
      <input type="submit" />
    </form>
  );
}
`

const applyValidation = `import React from 'react'
import useForm from 'react-hook-form'

function YourForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register({ required: true, maxlength: 20 })} />
      <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
      <input name="age" type="number" ref={register({ min: 18, max: 99 })} />
      <input type="submit" />
    </form>
  );
}`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding: 0 20px 100px 20px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 300px minmax(0, 1fr);
  }
`

const links = [
  'Quick start',
  'Register fields',
  'Apply validation',
  'Adapting existing form',
  'Work with UI library',
  'Integrate global state',
  'Handle errors',
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
      category: 'Get Started - go to section',
      label: `Go to section ${name}`,
      action: `Go to section ${name}`,
    })
    const refName = name.replace(/ /g, '').toLowerCase()
    if (sectionsRef.current[refName]) {
      sectionsRef.current[refName].scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Layout location={location}>
      <Seo title="Get Started" />

      <HeadingWithTopMargin>Get Started</HeadingWithTopMargin>
      <SubHeading>React hook form focus on providing the best DX by simplify the API.</SubHeading>

      <Wrapper>
        <aside>
          <ApiMenu
            isStatic
            links={links}
            goToSection={goToSection}
            title={
              <Title
                style={{
                  marginBottom: '10px',
                  fontSize: 16,
                  color: colors.lightBlue,
                }}
              >
                Quick Menu
              </Title>
            }
          />
        </aside>
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
            One of the key concept for React Hook Form is register your uncontrolled fields into the hook, and enable
            the hook to validated and gather your fields value on submit.
          </p>

          <p>
            Note: each fields <strong>required</strong> to have a <code>name</code> as key for the registration process.
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
            React hook form make form validation easy and align with existing{' '}
            <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation" target="_blank">
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
            You can read more detail on each rule at <Link to="/api">API page</Link>.
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
            Working on existing form should be fairy simple as well. The important step is to pass down{' '}
            <code>register</code> into existing input or select component, and apply <code>register</code> on the{' '}
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
            The following example demonstrate usage with <code>react-select</code> and <code>material-ui</code>.
          </p>
          <p>
            Most of UI library do expose <code>innerRef</code> or <code>ref</code>. For component that are more
            complicated like <code>react-select</code> or <code>react-datepicker</code>, you can also update value via{' '}
            <code>setValue</code>.
          </p>

          <SyntaxHighlighterWithCopy rawData={uiLibrary} url="https://codesandbox.io/s/72j69vnk1x" />

          <Title
            ref={ref => {
              sectionsRef.current.integrateglobalstate = ref
            }}
          >
            Integrate global state
          </Title>
          <p>
            Forms are mostly about collecting user data. React Hook Form doesn't required you to have an state
            management to store your data. However it allows you to easily integrate one like <code>Redux</code> or{' '}
            <code>MobX</code>
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
            React hook form provide an <code>errors</code> object to display with correct messages and help user with
            validation.
          </p>

          <SyntaxHighlighterWithCopy rawData={errors} />
        </main>
      </Wrapper>
    </Layout>
  )
}
export default Faq
